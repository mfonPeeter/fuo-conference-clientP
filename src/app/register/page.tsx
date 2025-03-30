"use client";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { encryptData } from "@/utils/encryption";

import { Button } from "@/components/ui/button";
import { Input, FileUploadField } from "@/components/ui/form-fields";
import { Send } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const guidelines = [
  {
    heading: "Account Name",
    details: "International Journal of Basic Science & Technology",
  },
  {
    heading: "Account Number",
    details: "2113171774",
  },
  {
    heading: "Bank",
    details: "United Bank Of Africa",
  },
];

export interface FormValues {
  surname: string;
  otherNames: string;
  email: string;
  whatsAppNo: string;
  otherPhoneNo: string;
  affiliation: string;
  modeOfAttendance: string;
  presentationType: string;
  preConferenceWorkshop: string;
  abstract: FileList | null;
  oralPresenters: FileList | null;
  paymentEvidence: FileList | null;
}

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();
  const router = useRouter();

  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

  // Get the name of the uploaded files from the form state
  const abstractFileData = watch("abstract");
  const oralPresentersFileData = watch("oralPresenters");
  const paymentEvidenceFileData = watch("paymentEvidence");

  let abstractFileName = "";
  let oralPresentersFileName = "";
  let paymentEvidenceFileName = "";

  if (abstractFileData && abstractFileData.length > 0) {
    abstractFileName = abstractFileData[0].name;
  }
  if (oralPresentersFileData && oralPresentersFileData.length > 0) {
    oralPresentersFileName = oralPresentersFileData[0].name;
  }
  if (paymentEvidenceFileData && paymentEvidenceFileData.length > 0) {
    paymentEvidenceFileName = paymentEvidenceFileData[0].name;
  }

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      // Check file size for required files
      if (
        (abstractFileData && abstractFileData[0]?.size > MAX_FILE_SIZE) ||
        (oralPresentersFileData &&
          oralPresentersFileData[0]?.size > MAX_FILE_SIZE) ||
        (paymentEvidenceFileData &&
          paymentEvidenceFileData[0]?.size > MAX_FILE_SIZE)
      ) {
        toast.error("File size exceeds 10MB. Please upload a smaller file.", {
          position: "top-center",
          style: { background: "#FF3D00", border: "none", color: "white" },
        });
        return;
      }

      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        if (value instanceof FileList && value.length > 0) {
          formData.append(key, value[0]); // Handle file uploads
        } else if (value !== null) {
          formData.append(key, value as string); // Handle other form values
        }
      });

      // const res = await fetch("url", {
      //   method: "POST",
      //   body: formData,
      // });

      // if (!res.ok) return;

      // Encrypt the registration data
      const registrationData = encryptData({
        surname: data.surname,
        otherNames: data.otherNames,
        email: data.email,
        whatsAppNo: data.whatsAppNo,
        otherPhoneNo: data.otherPhoneNo,
      });

      // Use router.push for navigation
      router.push(`/payment?data=${registrationData}`);
    } catch (error) {
      console.log(error);
      toast.error("Failed to register", {
        position: "top-center",
        style: { background: "#FF3D00", border: "none", color: "white" },
      });
    }
  };

  return (
    <section className="py-24 flex justify-center">
      <div className="mx-4 bg-gradient-to-r from-[#073b4c] to-[#118ab2] px-4 py-[75px] text-white sm:mx-0 sm:px-10 lg:px-[73px] rounded-xl">
        <div className="mb-[30px] flex max-w-[537px] flex-col items-center text-center">
          <div className="inline-block mb-2 bg-[#118ab2]/30 text-white px-4 py-1.5 rounded-full text-sm font-medium">
            Register
          </div>
          <h2 className="mb-4 text-[26px] font-semibold leading-8">
            1st International Conference of the Faculty of Science, Federal
            University Otuoke
          </h2>
          <div className="space-y-1 mb-2">
            {guidelines.map(({ heading, details }, index) => (
              <div key={index} className="flex flex-col gap-1 sm:flex-row">
                <h3 className="font-bold text-white mb-2">{heading}:</h3>
                <p className="text-white">{details}</p>
              </div>
            ))}
          </div>
          <p className="text-sm font-medium">
            Only those who have made payment for registration will be able to
            submit their abstract. For each field for document/file upload,
            ensure that each of your file size is not more than 10 MB.
          </p>
        </div>

        <div>
          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >
            <div className="grid grid-cols-1 gap-x-[21px] gap-y-[23px] font-leagueSpartan sm:grid-cols-2">
              <Input
                {...register("surname", { required: "Please input surname." })}
                type="text"
                placeholder="Your surname*"
                name="surname"
                id="registerSurname"
                errorMessage={errors.surname?.message}
              />
              <Input
                {...register("otherNames", {
                  required: "Please input your other names.",
                })}
                type="text"
                placeholder="Other names*"
                name="otherNames"
                id="registerOtherNames"
                errorMessage={errors.otherNames?.message}
              />
              <Input
                {...register("email", {
                  required: "Please input email.",
                  pattern: {
                    value: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address.",
                  },
                })}
                type="email"
                placeholder="Email*"
                name="email"
                id="contactEmail"
                errorMessage={errors.email?.message}
              />
              <Input
                {...register("whatsAppNo", {
                  required: "Please input whatsapp number.",
                  pattern: {
                    value: /^\+?[0-9]*$/,
                    message: "Numbers only!",
                  },
                })}
                type="tel"
                placeholder="WhatsApp No.*"
                name="whatsAppNo"
                id="registerWhatsAppNo"
                errorMessage={errors.whatsAppNo?.message}
              />
              <Input
                {...register("otherPhoneNo")}
                type="tel"
                placeholder="Other Phone No."
                name="otherPhoneNo"
                id="registerOtherPhoneNo"
                errorMessage={errors.otherPhoneNo?.message}
                className="sm:col-span-2"
              />
            </div>

            <div className="space-y-6">
              <Input
                {...register("affiliation", {
                  required: "Please input your affiliation.",
                })}
                type="text"
                placeholder="Affiliation (Institution/Organization and Department)*"
                name="affiliation"
                id="registerAffiliation"
                errorMessage={errors.affiliation?.message}
                className="sm:col-span-2"
              />

              <div className="space-y-2.5">
                <h5>Preferred mode of attendance*</h5>
                <Controller
                  name="modeOfAttendance"
                  control={control}
                  rules={{ required: "Please select a mode of attendance." }}
                  render={({ field: { onChange, value } }) => (
                    <RadioGroup
                      onValueChange={onChange}
                      value={value}
                      errorMessage={errors?.modeOfAttendance?.message}
                    >
                      {["Yes", "No"].map((option) => (
                        <div
                          key={option}
                          className="flex items-center gap-x-[9px]"
                        >
                          <RadioGroupItem
                            value={option}
                            id={`registerModeofAttendance_${option}`}
                          />
                          <Label htmlFor={`registerModeofAttendance_${option}`}>
                            {option}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  )}
                />
              </div>

              <div className="space-y-2.5">
                <h5>Preferred presentation type*</h5>
                <Controller
                  name="presentationType"
                  control={control}
                  rules={{ required: "Please select a presentation type." }}
                  render={({ field: { onChange, value } }) => (
                    <RadioGroup
                      onValueChange={onChange}
                      value={value}
                      errorMessage={errors?.modeOfAttendance?.message}
                    >
                      {["Oral", "Poster", "Any is okay"].map((option) => (
                        <div
                          key={option}
                          className="flex items-center gap-x-[9px]"
                        >
                          <RadioGroupItem
                            value={option}
                            id={`registerPreferredPresentationType_${option}`}
                          />
                          <Label
                            htmlFor={`registerPreferredPresentationType_${option}`}
                          >
                            {option}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  )}
                />
              </div>

              <div className="space-y-2.5">
                <h5>Are you attending Pre-Conference Workshop?*</h5>
                <Controller
                  name="preConferenceWorkshop"
                  control={control}
                  rules={{ required: "Please select an option." }}
                  render={({ field: { onChange, value } }) => (
                    <RadioGroup
                      onValueChange={onChange}
                      value={value}
                      errorMessage={errors?.modeOfAttendance?.message}
                    >
                      {["Yes", "No", "Maybe", "Other"].map((option) => (
                        <div
                          key={option}
                          className="flex items-center gap-x-[9px]"
                        >
                          <RadioGroupItem
                            value={option}
                            id={`registerPreConferenceWorkshop_${option}`}
                          />
                          <Label
                            htmlFor={`registerPreConferenceWorkshop_${option}`}
                          >
                            {option}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  )}
                />
              </div>
            </div>

            <div className="space-y-6">
              <FileUploadField
                {...register("abstract", {
                  required: "Please upload your abstract.",
                })}
                label="Upload here abstract that is in compliance with our abstract guidelines*"
                allowedFileType="Allowed Type(s): .pdf"
                acceptedFileType=".pdf,"
                errorMessage={errors?.abstract?.message}
                fileName={abstractFileName}
              />
              <FileUploadField
                {...register("oralPresenters")}
                label="Upload here PowerPoint presentation for proposed oral presenters"
                allowedFileType="Allowed Type(s): .pdf"
                acceptedFileType=".pdf,"
                fileName={oralPresentersFileName}
              />
              <FileUploadField
                {...register("paymentEvidence", {
                  required: "Please upload your evidence of payment.",
                })}
                label="Upload evidence of payment for registration*"
                allowedFileType="Allowed Type(s): .pdf, .jpg, .png, .jpeg"
                acceptedFileType=".pdf,.jpg,.png,.jpeg"
                errorMessage={errors?.paymentEvidence?.message}
                fileName={paymentEvidenceFileName}
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-[#06D6A0] hover:bg-[#05c090] text-[#073b4c] font-bold rounded-xl py-6 text-base"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#073b4c]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" /> Submit Message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
