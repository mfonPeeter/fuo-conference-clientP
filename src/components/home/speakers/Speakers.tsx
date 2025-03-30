import { ArrowRight } from "lucide-react";
import { Button } from "../../ui/button";
import SpeakerCard from "./SpeakerCard";
import Link from "next/link";

const Speakers = () => {
  return (
    <section
      className="py-24 bg-gradient-to-b from-[#f8fafc] to-white"
      id="speakers"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 bg-[#118ab2]/10 text-[#118ab2] px-4 py-1.5 rounded-full text-sm font-medium">
            Meet Our Speakers
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#073b4c] mb-4 leading-tight">
            Distinguished Keynote Speakers
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Learn from leading experts in green chemistry, artificial
            intelligence, and sustainable development who will share their
            insights and latest research findings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SpeakerCard
            name="Prof. Bamidele Adebisi"
            role="Professor in Intelligent Infrastructure Systems"
            institution="Manchester Metropolitan University"
            imageUrl="/images/placeholder-speaker.jpg"
          />
          <SpeakerCard
            name="Prof. Stephen A. Uzoekwe"
            role="Professor of Analytical-Environmental Chemistry"
            institution="Delta State University Abraka"
            imageUrl="/images/placeholder-speaker.jpg"
          />
          <SpeakerCard
            name="Prof. Charles O. Adetunji"
            role="Professor of Microbiology"
            institution="Edo State University Uzairue"
            imageUrl="/images/placeholder-speaker.jpg"
          />
          <SpeakerCard
            name="Dr. Adedotun Afolayan"
            role="Assistant Director"
            institution="National Centre for Genetic Resources and Biotechnology"
            imageUrl="/images/placeholder-speaker.jpg"
          />
        </div>

        <div className="text-center mt-12">
          <Link href="/speakers">
            <Button
              variant="outline"
              className="border-[#118ab2] text-[#118ab2] hover:bg-[#118ab2]/5 rounded-full px-8 group"
            >
              View All Speakers
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
