"use client";

import { Mail, Phone } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input, TextArea } from "@/components/ui/form-fields";
import { Send } from "lucide-react";

interface FormValues {
  name: string | null;
  email: string | null;
  phoneNumber: string | null;
  message: string | null;
}

export default function ContactUsPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value as string);
      });

      const res = await fetch("url", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) return;

      toast.success("Registration Successful!", { position: "top-center" });
      reset(); // Reset form
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
            Contact
          </div>
          <h2 className="mb-[2px] text-[26px] font-semibold leading-8">
            We&apos;ll love to hear from you
          </h2>
          <p className="text-sm font-medium">
            Whether you have a general inquiry or need assistance with a
            specific issue, we are here to help. Please use the provided contact
            information to get in touch with us, and we will respond to you as
            soon as possible.
          </p>
        </div>

        <div className="mb-8 flex flex-col justify-center gap-y-3 sm:flex-row sm:gap-y-0 sm:gap-x-[98px]">
          <div className="flex flex-col items-center gap-y-2">
            <Mail />
            <span className="text-[13px] font-medium leading-[14px]">
              science.conf@fuoutoke.edu.ng
            </span>
          </div>
          <div className="flex flex-col items-center gap-y-2">
            <Phone />
            <span className="text-nowrap text-[13px] font-medium leading-[14px]">
              +234 803 523 2412
            </span>
          </div>
        </div>

        <div>
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-[22px] grid grid-cols-1 gap-x-[21px] gap-y-[23px] font-leagueSpartan sm:grid-cols-2">
              <Input
                {...register("name", { required: "Please input name." })}
                type="text"
                placeholder="Your name*"
                name="name"
                id="contactName"
                errorMessage={errors.name?.message}
              />
              <Input
                {...register("phoneNumber", {
                  required: "Please input number.",
                  pattern: {
                    value: /^\+?[0-9]*$/,
                    message: "Numbers only!",
                  },
                })}
                type="tel"
                placeholder="Phone Number*"
                name="phoneNumber"
                id="contactNumber"
                errorMessage={errors.phoneNumber?.message}
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
                className="sm:col-span-2"
              />
              <TextArea
                {...register("message", { required: "Please type a message." })}
                name="message"
                placeholder="Your Message*"
                id="contactMessage"
                errorMessage={errors.message?.message}
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
