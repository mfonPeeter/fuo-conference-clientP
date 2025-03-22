import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block mb-4 bg-[#118ab2]/10 text-[#118ab2] px-4 py-1.5 rounded-full text-sm font-medium">
              About The Conference
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#073b4c] mb-6 leading-tight">
              Advancing Scientific Research and Innovation
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                The Faculty of Science Conference at Federal University Otuoke
                is a premier academic event bringing together researchers,
                scientists, and scholars from various disciplines to share
                knowledge and foster collaboration.
              </p>
              <p>
                Our 1st Annual Conference will be held in a hybrid format,
                allowing participants to join either in-person or virtually from
                anywhere in the world.
              </p>
              <p>
                The conference aims to address current challenges in science and
                technology while promoting innovative solutions for sustainable
                development.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-[#118ab2] font-medium hover:text-[#073b4c] mt-4 group"
              >
                Learn more about the conference
                <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
            <Image
              src="/images/conference-room.jpg"
              alt="Conference room"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
