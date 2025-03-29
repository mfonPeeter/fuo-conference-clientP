"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import dynamic from "next/dynamic";
import { decryptData } from "@/utils/encryption";

// Dynamically import PaystackButton with no SSR
const PaystackButton = dynamic(
  () => import("react-paystack").then((mod) => mod.PaystackButton),
  {
    ssr: false,
  }
);

// Paystack configuration
const PAYSTACK_PUBLIC_KEY = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "";
const PAYMENT_AMOUNT = 500000; // Amount in kobo (₦5000.00)
const EMAIL = "science.conf@fuotuoke.edu.ng"; // Replace with actual email

function PaymentContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [reference, setReference] = useState<string>("");

  // Get and decrypt registration data from URL params
  const registrationData = searchParams.get("data");
  let parsedData = null;

  try {
    if (registrationData) {
      parsedData = decryptData(registrationData);
    }
  } catch (error) {
    console.error("Failed to decrypt registration data:", error);
    toast.error("Invalid registration data. Please try registering again.");
    router.push("/register");
  }

  useEffect(() => {
    // Generate reference on client side only
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    setReference(`CONF-${timestamp}-${random}`);
  }, []);

  // Paystack configuration
  const config = {
    reference,
    email: parsedData?.email || EMAIL,
    amount: PAYMENT_AMOUNT,
    publicKey: PAYSTACK_PUBLIC_KEY,
    text: "Pay Now",
    metadata: {
      custom_fields: [
        {
          display_name: "Full Name",
          variable_name: "name",
          value: parsedData?.surname + " " + parsedData?.otherNames,
        },
        {
          display_name: "Phone Number",
          variable_name: "phone",
          value: parsedData?.whatsAppNo || parsedData?.otherPhoneNo,
        },
      ],
    },
    onSuccess: () => {
      toast.success("Payment successful! Redirecting...", {
        position: "top-center",
        style: { background: "#06D6A0", border: "none", color: "white" },
      });
      router.push(`/payment/success?ref=${reference}`);
    },
    onError: () => {
      toast.error("Payment failed", {
        position: "top-center",
        style: { background: "#FF3D00", border: "none", color: "white" },
      });
    },
    onClose: () => {
      toast.error("Payment cancelled", {
        position: "top-center",
      });
    },
  };

  return (
    <section className="py-24 flex justify-center">
      <div className="mx-4 bg-gradient-to-r from-[#073b4c] to-[#118ab2] px-4 py-[75px] text-white sm:mx-0 sm:px-10 lg:px-[73px] rounded-xl max-w-2xl w-full">
        <div className="mb-[30px] flex flex-col items-center text-center">
          <div className="inline-block mb-2 bg-[#118ab2]/30 text-white px-4 py-1.5 rounded-full text-sm font-medium">
            Payment
          </div>
          <h2 className="mb-4 text-[26px] font-semibold leading-8">
            Complete Your Registration Payment
          </h2>
          <p className="text-sm mb-6">
            Please complete your payment to finalize your registration for the
            conference.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Payment Details</h3>
            <div className="space-y-2">
              <p>Amount: ₦{(PAYMENT_AMOUNT / 100).toLocaleString()}</p>
              <p>Email: {parsedData?.email || EMAIL}</p>
              <p>
                Name: {parsedData?.surname} {parsedData?.otherNames}
              </p>
            </div>
          </div>

          <div className="w-full">
            <PaystackButton
              {...config}
              className="w-full bg-[#06D6A0] hover:bg-[#05c090] text-[#073b4c] font-bold rounded-xl py-6 text-base"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PaymentPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentContent />
    </Suspense>
  );
}
