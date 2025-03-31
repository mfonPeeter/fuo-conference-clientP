"use client";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { encryptData } from "@/utils/encryption";
import {
  getRegistrationFee,
  formatCurrency,
  type RegistrationType,
} from "@/utils/pricing";
import { useState } from "react";
import { InternationalModal } from "@/components/registration/international-modal";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/form-fields";
import { Send } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UploadButton } from "@/utils/uploadthing";
import { Check } from "lucide-react";
import { ClientUploadedFileData } from "uploadthing/types";

// Define the form values interface for type safety
export interface FormValues {
  surname: string;
  otherNames: string;
  email: string;
  phoneNo: string;
  organization: string;
  registrationType: string;
  abstractUrl: string; // URL of the uploaded abstract file
}

export default function RegisterPage() {
  // Initialize form handling with react-hook-form
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  // State management for various UI states
  const router = useRouter();
  const [showInternationalModal, setShowInternationalModal] = useState(false);
  const [registrationId, setRegistrationId] = useState<string>("");
  const [uploadedFileName, setUploadedFileName] = useState<string>("");

  // Watch registration type for dynamic fee calculation
  const registrationType = watch("registrationType") as RegistrationType;

  // Calculate registration fee based on type
  const currentFee = registrationType
    ? getRegistrationFee(registrationType)
    : 0;

  // Handle form submission
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      // Validate abstract upload
      if (!data.abstractUrl) {
        toast.error("Please upload your abstract.", {
          position: "top-center",
          style: { background: "#FF3D00", border: "none", color: "white" },
        });
        return;
      }

      // API call to register user
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: `${data.surname}, ${data.otherNames}`,
            registration_type: data.registrationType,
            abstract_link: data.abstractUrl,
            email: data.email,
            phone_number: data.phoneNo,
            organization: data.organization,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const result = await response.json();
      const regId = result.id;

      // Handle different registration flows based on type
      if (data.registrationType === "International") {
        // Show international payment modal
        setRegistrationId(regId);
        setShowInternationalModal(true);
      } else {
        // Encrypt data and redirect to payment page for non-international registrations
        const registrationData = encryptData({
          surname: data.surname,
          otherNames: data.otherNames,
          email: data.email,
          phoneNo: data.phoneNo,
          registrationType: data.registrationType,
          registrationId: regId,
        });

        router.push(`/payment?data=${registrationData}`);
      }
    } catch (error: unknown) {
      // Error handling with user-friendly messages
      console.log(error);
      if (error instanceof Error) {
        toast.error(error.message, {
          position: "top-center",
          style: { background: "#FF3D00", border: "none", color: "white" },
        });
      } else {
        toast.error("An unexpected error occurred", {
          position: "top-center",
          style: { background: "#FF3D00", border: "none", color: "white" },
        });
      }
    }
  };

  // Handle successful file upload
  const handleUploadComplete = (
    res: ClientUploadedFileData<{ fileUrl: string }>[]
  ) => {
    if (res) {
      // Store the file URL and name
      setValue("abstractUrl", res[0].ufsUrl);
      setUploadedFileName(res[0].name);
      // Show success message
      toast.success("Abstract uploaded successfully!", {
        position: "top-center",
        style: { background: "#06D6A0", border: "none", color: "white" },
      });
    }
  };

  return (
    <>
      {/* International payment modal */}
      <InternationalModal
        isOpen={showInternationalModal}
        onClose={() => setShowInternationalModal(false)}
        registrationId={registrationId}
      />

      {/* Main registration form section */}
      <section className="py-24 flex justify-center">
        <div className="mx-4 bg-gradient-to-r from-[#073b4c] to-[#118ab2] px-4 py-[75px] text-white sm:mx-0 sm:px-10 lg:px-[73px] rounded-xl">
          {/* Header section */}
          <div className="mb-[30px] flex max-w-[537px] flex-col items-center text-center">
            <div className="inline-block mb-2 bg-[#118ab2]/30 text-white px-4 py-1.5 rounded-full text-sm font-medium">
              Register
            </div>
            <h2 className="mb-4 text-[26px] font-semibold leading-8">
              Green Chemistry and Artificial Intelligence for Sustainable
              Development
            </h2>
            <p className="text-sm font-medium">
              Only those who have made payment for registration will be able to
              submit their abstract. For each field for document/file upload,
              ensure that each of your file size is not more than 10 MB.
            </p>
          </div>

          {/* Registration form */}
          <div>
            <form
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
            >
              {/* Personal information fields */}
              <div className="grid grid-cols-1 gap-x-[21px] gap-y-[23px] font-leagueSpartan sm:grid-cols-2">
                <Input
                  {...register("surname", {
                    required: "Please input surname.",
                  })}
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
                  {...register("phoneNo", {
                    required: "Please input phone number.",
                    pattern: {
                      value: /^\+?[0-9]*$/,
                      message: "Numbers only!",
                    },
                  })}
                  type="tel"
                  placeholder="Phone No.*"
                  name="phoneNo"
                  id="registerPhoneNo"
                  errorMessage={errors.phoneNo?.message}
                />
              </div>

              <div className="space-y-6">
                {/* Organization field */}
                <Input
                  {...register("organization")}
                  type="text"
                  placeholder="Affiliation (Institution/Organization and Department)"
                  name="organization"
                  id="registerOrganization"
                  className="sm:col-span-2"
                />

                {/* Registration type selector */}
                <Controller
                  name="registrationType"
                  control={control}
                  rules={{ required: "Please select your registration type." }}
                  render={({ field: { onChange, value } }) => (
                    <div className="space-y-2">
                      <Select onValueChange={onChange} value={value}>
                        <SelectTrigger
                          className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/80 focus:ring-white/10"
                          errorMessage={errors?.registrationType?.message}
                        >
                          <SelectValue placeholder="Select your registration type*" />
                        </SelectTrigger>
                        <SelectContent>
                          {[
                            "Undergraduate",
                            "Postgraduate",
                            "Retirees",
                            "All others",
                            "International",
                          ].map((option) => (
                            <SelectItem
                              key={option}
                              value={option}
                              className="text-[#073b4c] focus:bg-[#118ab2]/10 focus:text-[#073b4c]"
                            >
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {registrationType &&
                        registrationType !== "International" && (
                          <div className="text-sm text-white/80">
                            Registration Fee: {formatCurrency(currentFee)}
                          </div>
                        )}
                    </div>
                  )}
                />

                {/* File upload section */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">
                    Upload here abstract that is in compliance with our abstract
                    guidelines*
                  </label>
                  <div className="relative">
                    {/* UploadThing button component */}
                    <UploadButton
                      endpoint="abstractUploader"
                      onClientUploadComplete={handleUploadComplete}
                      onUploadError={(error: Error) => {
                        toast.error(`ERROR! ${error.message}`, {
                          position: "top-center",
                          style: {
                            background: "#FF3D00",
                            border: "none",
                            color: "white",
                          },
                        });
                      }}
                      className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20 relative"
                      appearance={{
                        button:
                          "w-full bg-white/10 border-white/20 text-white hover:bg-white/20 relative",
                        allowedContent: "hidden",
                      }}
                    />
                  </div>
                  {/* Display uploaded file name */}
                  {uploadedFileName && (
                    <div className="flex items-center gap-2 text-sm text-white/80 max-w-[537px]">
                      <Check className="h-4 w-4 text-[#06D6A0]" />
                      <span className="truncate">{uploadedFileName}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Submit button with loading state */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#06D6A0] hover:bg-[#05c090] text-[#073b4c] font-bold rounded-xl py-6 text-base"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  // Loading spinner
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
                  // Normal state
                  <>
                    <Send className="mr-2 h-5 w-5" /> Submit Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
