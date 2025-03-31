"use client";

import { Mail } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/modal";

interface InternationalModalProps {
  isOpen: boolean;
  onClose: () => void;
  registrationId: string;
}

export function InternationalModal({
  isOpen,
  onClose,
  registrationId,
}: InternationalModalProps) {
  //   const emailAddress = "hod.chemistry@fuotuoke.edu.ng";
  const emailAddress = "godimfon@gmail.com";
  const subject = `International Payment for Conference - Registration ID: ${registrationId}`;
  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
    subject
  )}`;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gradient-to-r from-[#073b4c] to-[#118ab2] text-white border-white/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            International Registration Type
          </DialogTitle>
          <DialogDescription className="text-white/80">
            To complete your registration, please send an email to{" "}
            <a
              href={mailtoLink}
              className="text-[#06D6A0] hover:text-[#05c090] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {emailAddress}
            </a>{" "}
            with your registration type. You will receive the necessary bank
            details for payment.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center justify-center mt-4">
          <a
            href={mailtoLink}
            className="inline-flex items-center gap-2 bg-[#06D6A0] hover:bg-[#05c090] text-[#073b4c] font-bold rounded-xl py-3 px-6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="h-5 w-5" />
            Send Email
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
