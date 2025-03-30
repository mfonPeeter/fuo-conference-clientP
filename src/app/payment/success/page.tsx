"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

function PaymentSuccessContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const reference = searchParams.get("ref");

  return (
    <section className="py-24 flex justify-center">
      <div className="mx-4 bg-gradient-to-r from-[#073b4c] to-[#118ab2] px-4 py-[75px] text-white sm:mx-0 sm:px-10 lg:px-[73px] rounded-xl max-w-2xl w-full text-center">
        <div className="mb-8">
          <CheckCircle className="w-16 h-16 text-[#06D6A0] mx-auto" />
        </div>

        <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
        <p className="text-lg mb-6">
          Thank you for your payment. Your registration has been confirmed.
        </p>

        {reference && (
          <p className="text-sm mb-6">Transaction Reference: {reference}</p>
        )}

        <div className="space-y-4">
          <p className="text-sm">
            You will receive a confirmation email shortly.
          </p>

          <Button
            onClick={() => router.push("/")}
            className="bg-[#06D6A0] hover:bg-[#05c090] text-[#073b4c] font-bold rounded-xl py-6 text-base"
          >
            Return to Home
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentSuccessContent />
    </Suspense>
  );
}
