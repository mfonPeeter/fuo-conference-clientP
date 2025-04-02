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
  icons: {
    icon: [
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
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
