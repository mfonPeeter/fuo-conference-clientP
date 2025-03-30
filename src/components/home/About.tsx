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
              Harnessing Green Chemistry and AI for Sustainable Development
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                The Faculty of Science Conference at Federal University Otuoke
                presents a groundbreaking exploration of how green chemistry and
                artificial intelligence can drive sustainable development in the
                Niger Delta region.
              </p>
              <p>
                Our conference will be held in a hybrid format from September
                2-4, 2025, bringing together researchers, scientists, and
                innovators to share cutting-edge developments in environmentally
                friendly chemical processes and AI applications.
              </p>
              <p>
                Join us as we address critical challenges in sustainability
                while promoting innovative solutions that combine the power of
                green chemistry and artificial intelligence for a better future.
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
              src="/images/school.JPG"
              alt="Conference venue at Federal University Otuoke"
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
