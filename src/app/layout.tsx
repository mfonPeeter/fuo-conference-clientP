import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/layout/HeroSection";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Harnessing Green Chemistry and AI for Sustainable Development",
  description:
    "Join us for the American Chemical Society, Federal University Otuoke Chapter Conference on 'Harnessing Green Chemistry and Artificial Intelligence for Sustainable Development in the Niger Delta' from September 2-4, 2025, at Federal University Otuoke, Bayelsa State, Nigeria. Connect with scholars, industry leaders, and innovators shaping a sustainable future through green chemistry and AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Toaster />
        <Navbar />
        <HeroSection />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
