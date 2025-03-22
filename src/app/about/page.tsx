import Image from "next/image";
import CTA from "@/components/home/CTA";

const sectionOne = [
  {
    heading: "Enhance Credibility",
    details:
      "Enhance the credibility, visibility and reputation among a targeted audience of academics, professionals, parastatals, and stakeholders.",
  },
  {
    heading: "Demonstrate commitments",
    details:
      "Demonstrate commitments to advancing knowledge, sustainability, and innovation especially in the: “Revolutionizing a Sustainable Tomorrow: Harnessing Science, Innovation, and Community Power to Drive Circular Economy Solutions, Climate Resilience, and a Thriving Blue and Green Economy”.",
  },
  {
    heading: "Cross-sectorial Approaches",
    details:
      "Possibilities of cross-sectorial and inter-disciplinary approaches to sustainability.",
  },
  {
    heading: "Propagating reciprocity",
    details:
      "Propagating reciprocity and opportunities for networking, collaboration, growth of young researchers and intellectual research.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/images/conference-room.jpg"
                alt="Conference"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="order-1 md:order-2">
              <p className="text-lg text-[#073b4c] mb-6">
                We request your presence in shaping the future of a
                &apos;Sustainable Tomorrow&apos; and making a lasting impact on
                our academic community, industry, and society at large.
              </p>

              <div className="space-y-6">
                {sectionOne.map(({ heading, details }, index) => (
                  <div
                    key={index}
                    className="bg-[#073b4c] text-white p-6 rounded-lg mb-6 shadow-lg"
                  >
                    <div className="mb-4">
                      <h3 className="text-xl font-bold">{heading}</h3>
                    </div>
                    <p>{details}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Theme */}
      <section className="py-24 bg-white" id="about">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-4 bg-[#118ab2]/10 text-[#118ab2] px-4 py-1.5 rounded-full text-sm font-medium">
                Theme
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#073b4c] mb-6 leading-tight">
                Conference Main Theme
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Revolutionizing a Sustainable Tomorrow: Harnessing Science,
                  Innovation, and Community Power to Drive Circular Economy
                  Solutions, Climate Resilience, and a Thriving Blue and Green
                  Economy.
                </p>
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

      {/* Call to Action */}
      <CTA />
    </div>
  );
}
