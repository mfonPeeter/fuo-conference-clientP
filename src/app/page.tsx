import CountdownTimer from "@/components/home/CountdownTimer";
import KeyInformation from "@/components/home/KeyInformation";
import Attendance from "@/components/home/Attendance";
import CTA from "@/components/home/CTA";
import About from "@/components/home/About";
import Speakers from "@/components/home/speakers/Speakers";
import HeroSection from "@/components/layout/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <HeroSection />
      {/* Countdown Section */}
      <section className="py-16 bg-[#f8fafc] -mt-1">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between bg-white p-8 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100">
            <div className="mb-8 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-[#073b4c] mb-2">
                Conference Starts In
              </h2>
              <p className="text-[#118ab2]">
                Don&apos;t miss the early bird registration ending June 30, 2025
              </p>
            </div>
            <CountdownTimer targetDate="2025-11-04T00:00:00" />
          </div>
        </div>
      </section>

      <About />
      <Speakers />
      <Attendance />
      <KeyInformation />
      <CTA />
    </div>
  );
}
