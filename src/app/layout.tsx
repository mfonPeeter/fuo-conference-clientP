import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/layout/HeroSection";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Faculty of Science Conference",
  description:
    "Join us for the Sustainable Tomorrow Conference from March 4th-7th, 2025, as we explore circular economy solutions, climate resilience, sustainability, and the blue & green economy. Connect with scholars, industry leaders, and change-makers in Bayelsa State and the Niger-Delta. Be part of the movement shaping a sustainable future.",
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
