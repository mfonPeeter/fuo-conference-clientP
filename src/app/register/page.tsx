"use client";

import { useForm, type SubmitHandler, Controller } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { encryptData } from "@/utils/encryption";
import {
  getRegistrationFee,
  formatCurrency,
  type RegistrationType,
} from "@/utils/pricing";
import { useState } from "react";

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
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { UploadButton } from "@/utils/uploadthing";
import { Check } from "lucide-react";
import type { ClientUploadedFileData } from "uploadthing/types";

// Define the form values interface for type safety
export interface FormValues {
  surname: string;
  otherNames: string;
  email: string;
  phoneNo: string;
  whatsappNo: string;
  organization: string;
  registrationType: string;
  paymentReceiptUrl: string;
  isInternational: boolean;
}

export default function RegisterPage() {
  const router = useRouter();

  // Initialize form handling with react-hook-form
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      isInternational: false,
    },
  });

  const [paymentMethod, setPaymentMethod] = useState<"paystack" | "transfer">(
    "paystack"
  );
  const [uploadedFileName, setUploadedFileName] = useState<string>("");

  // Watch registration type for dynamic fee calculation
  const registrationType = watch("registrationType") as RegistrationType;
  const isInternational = watch("isInternational");

  const currentFee = registrationType
    ? getRegistrationFee(
        registrationType,
        isInternational ? "International" : "Nigerian"
      )
    : 0;

  // Handle form submission
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      if (
        !isInternational &&
        paymentMethod === "transfer" &&
        !data.paymentReceiptUrl
      ) {
        toast.error("Please upload your payment receipt.", {
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
            payment_receipt: data.paymentReceiptUrl || "",
            email: data.email,
            phone_number: data.phoneNo,
            whatsapp_number: data.whatsappNo,
            organization: data.organization,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const result = await response.json();
      const regId = result.id;

      // International or Nigerian paying via Paystack -> go to payment page
      if (isInternational || paymentMethod === "paystack") {
        const registrationData = encryptData({
          surname: data.surname,
          otherNames: data.otherNames,
          email: data.email,
          phoneNo: data.phoneNo,
          whatsappNo: data.whatsappNo,
          registrationType: data.registrationType,
          registrationId: regId,
          isInternational: data.isInternational,
        });

        router.push(`/payment?data=${registrationData}`);
      } else {
        // Nigerian paying via transfer -> show success and redirect to home
        toast.success("Registration Successful. Redirecting...", {
          position: "top-center",
          style: { background: "#06D6A0", border: "none", color: "white" },
        });

        router.push("/");
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
      setValue("paymentReceiptUrl", res[0].ufsUrl);
      setUploadedFileName(res[0].name);
      // Show success message
      toast.success("Payment receipt uploaded successfully!", {
        position: "top-center",
        style: { background: "#06D6A0", border: "none", color: "white" },
      });
    }
  };

  return (
    <section className="py-24 flex justify-center">
      <div className="mx-4 bg-gradient-to-r from-[#073b4c] to-[#118ab2] px-4 py-[75px] text-white sm:mx-0 sm:px-10 lg:px-[73px] rounded-xl">
        {/* Header section */}
        <div className="mb-[30px] flex max-w-[537px] mx-auto flex-col items-center text-center">
          <div className="inline-block mb-2 bg-[#118ab2]/30 text-white px-4 py-1.5 rounded-full text-sm font-medium">
            Register
          </div>
          <h2 className="mb-4 text-[26px] font-semibold leading-8">
            Green Chemistry and Artificial Intelligence for Sustainable
            Development
          </h2>
          <p className="text-sm font-medium">
            Register for the conference by uploading your payment receipt. For
            each field for document/file upload, ensure that each of your file
            size is not more than 10 MB.
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
              <Input
                {...register("whatsappNo")}
                type="tel"
                placeholder="WhatsApp No."
                name="whatsappNo"
                id="registerWhatsappNo"
                className="sm:col-span-2"
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
                    {registrationType && (
                      <div className="text-sm text-white/80">
                        Registration Fee:{" "}
                        {formatCurrency(
                          currentFee,
                          isInternational ? "International" : "Nigerian"
                        )}
                      </div>
                    )}
                  </div>
                )}
              />

              <Controller
                name="isInternational"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                    <Checkbox
                      id="isInternational"
                      checked={value}
                      onCheckedChange={onChange}
                      className="border-white/40 data-[state=checked]:bg-[#06D6A0] data-[state=checked]:border-[#06D6A0]"
                    />
                    <label
                      htmlFor="isInternational"
                      className="text-sm font-medium text-white cursor-pointer"
                    >
                      I am an International attendee
                    </label>
                  </div>
                )}
              />

              {registrationType && !isInternational && (
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Select Payment Method
                  </h3>
                  <RadioGroup
                    value={paymentMethod}
                    errorMessage=""
                    onValueChange={(value) =>
                      setPaymentMethod(value as "paystack" | "transfer")
                    }
                  >
                    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                      <RadioGroupItem
                        value="paystack"
                        id="paystack"
                        className="border-white/40 text-[#06D6A0]"
                      />
                      <Label
                        htmlFor="paystack"
                        className="text-white cursor-pointer flex-1"
                      >
                        Pay via Paystack (Online Payment)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                      <RadioGroupItem
                        value="transfer"
                        id="transfer"
                        className="border-white/40 text-[#06D6A0]"
                      />
                      <Label
                        htmlFor="transfer"
                        className="text-white cursor-pointer flex-1"
                      >
                        Pay via Bank Transfer
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              )}

              {registrationType &&
                !isInternational &&
                paymentMethod === "transfer" && (
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Payment Information
                    </h3>
                    <div className="space-y-3">
                      <h4 className="text-white font-medium">
                        Direct Bank Transfer
                      </h4>
                      <div className="space-y-2 text-sm text-white/90">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Account Number:</span>
                          <span className="font-mono bg-white/20 px-2 py-1 rounded">
                            2359026502
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Bank:</span>
                          <span>UBA</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Account Name:</span>
                          <span className="text-right">
                            AMERICAN CHEMICAL SOCIETY FED UNI OTUOKE
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 p-3 bg-[#FFD166]/20 border border-[#FFD166]/30 rounded-lg">
                        <p className="text-sm text-white/90">
                          <strong>Note:</strong> After making your payment,
                          please upload your payment receipt below to complete
                          your registration.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

              {registrationType &&
                !isInternational &&
                paymentMethod === "transfer" && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">
                      Upload your payment receipt (PNG, JPG, JPEG, etc.)*
                    </label>
                    <div className="relative">
                      <UploadButton
                        endpoint="paymentReceiptUploader"
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
                    {uploadedFileName && (
                      <div className="flex items-center gap-2 text-sm text-white/80 max-w-[537px]">
                        <Check className="h-4 w-4 text-[#06D6A0]" />
                        <span className="truncate">{uploadedFileName}</span>
                      </div>
                    )}
                  </div>
                )}
            </div>

            {/* Submit button with loading state */}
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
                  <Send className="mr-2 h-5 w-5" /> Register
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
