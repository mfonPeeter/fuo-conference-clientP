// import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Users, Award } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[95vh] h-[800px] xs:h-[90vh] xl:h-[105vh] flex items-center">
      <div className="absolute inset-0 z-0">
        {/* Background image if any */}
        {/* <Image
          src="/placeholder.svg"
          alt="Federal University Otuoke Campus"
          fill
          priority
          className="object-cover"
        /> */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#053b4e]/95 via-[#065a6f]/85 to-[#053b4e]/80"></div>
      </div>
      <div className="container mx-auto px-4 z-10 relative sm:-top-1/2 sm:translate-y-[67%]">
        <div className="max-w-4xl">
          <div className="inline-block mb-6 bg-white/10 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-sm font-medium border border-white/20">
            November 4-7, 2025 • Federal University Otuoke
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
            American Chemical Society Federal University Otuoke
          </h1>
          <h2 className="text-xl md:text-2xl text-white/90 font-light mb-10 max-w-2xl leading-relaxed">
            Advancing Scientific Research and Innovation for Sustainable
            Development in the 21st Century
          </h2>
          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/register">
              <Button
                size="lg"
                className="bg-[#06D6A0] hover:bg-[#05c090] text-[#053b4e] font-medium rounded-full px-8 py-6 text-base"
              >
                Register Now
              </Button>
            </Link>
            <Link href="/abstract">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20 rounded-full px-8 py-6 text-base"
              >
                Submit Abstract
              </Button>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mt-10">
            <div className="flex items-center gap-3">
              <div className="bg-white/10 backdrop-blur-md p-2.5 rounded-full">
                <Users className="h-6 w-6 text-[#FFD166]" />
              </div>
              <div className="text-white">
                <span className="block text-sm text-white/70">
                  Expected Attendees
                </span>
                <span className="font-bold">500+</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white/10 backdrop-blur-md p-2.5 rounded-full">
                <Award className="h-6 w-6 text-[#FFD166]" />
              </div>
              <div className="text-white">
                <span className="block text-sm text-white/70">
                  Keynote Speakers
                </span>
                <span className="font-bold">12</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 160"
          className="fill-[#f8fafc] md:hidden"
        >
          <path d="M0,144L48,136C96,128,192,112,288,98.7C384,85,480,75,576,82.7C672,90,768,117,864,125.3C960,133,1056,123,1152,112C1248,101,1344,91,1392,85.3L1440,80L1440,160L1392,160C1344,160,1248,160,1152,160C1056,160,960,160,864,160C768,160,672,160,576,160C480,160,384,160,288,160C192,160,96,160,48,160L0,160Z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="fill-[#f8fafc] hidden md:block"
        >
          <path d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}
