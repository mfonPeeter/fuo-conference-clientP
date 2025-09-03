import Image from "next/image";
import Link from "next/link";

const speakers = [
  {
    name: "Prof. Nimibofa Ayawei",
    title: "Secretary to the State Government",
    institution: "Bayelsa State Government",
    role: "Former Executive Chairman, Bayelsa State Board of Internal Revenue",
    slug: "nimibofa-ayawei",
    image: "/images/speakers/prof-nimibofa-ayawei.png", // Replace with actual image
  },
  {
    name: "Prof. Edu J. Inam",
    title: "President, American Chemical Society (ACS) Nigeria Chapter",
    institution: "University of Uyo",
    role: "Head of Department of Chemistry",
    slug: "edu-inam",
    image: "/images/speakers/prof-edu-inam.png",
  },
  {
    name: "Prof. Bamidele Adebisi",
    title: "Professor in Intelligent Infrastructure Systems",
    institution: "Manchester Metropolitan University",
    role: "Head of the Smart Infrastructure and Industry Research (SIIR) Group",
    slug: "bamidele-adebisi",
    image: "/images/speakers/prof-bamidele-adebisi.png", // Replace with actual image
  },
  {
    name: "Prof. Charles O. Adetunji",
    title: "Professor of Microbiology",
    institution: "Edo State University Uzairue",
    role: "Director of Research and Innovation",
    slug: "charles-adetunji",
    image: "/images/speakers/prof-charles-o-adetunji.png", // Replace with actual image
  },
  {
    name: "Dr. Adedotun Afolayan",
    title: "Assistant Director",
    institution: "National Centre for Genetic Resources and Biotechnology",
    role: "Research Lead, Tissue Culture Unit",
    slug: "adedotun-afolayan",
    image: "/images/speakers/dr-adedotun-afolayan.JPG", // Replace with actual image
  },
  {
    name: "Dr. Adekunle Adeleke",
    title: "Head of Department, Mechanical Engineering",
    institution: "Nile University of Nigeria",
    role: "Leader, Waste to Wealth Research Group",
    slug: "adekunle-adeleke",
    image: "/images/speakers/dr-adekunle-adeleke.png", // Replace with actual image
  },
  {
    name: "Engr. Dr. Ifeyinwa Ijeoma Obianyo",
    title: "Department of Civil Engineering",
    institution: "Nile University of Nigeria",
    role: "",
    slug: "ifeyinwa-obianyo",
    image: "/images/speakers/engr-dr-ifeyinwa-ijeoma-obianyo.JPG", // Replace with actual image
  },
  {
    name: "Prof. Olatunde Olatunji",
    title: "Academic Leader for Research & Higher Degrees",
    institution: "University of KwaZulu-Natal",
    role: "School of Chemistry and Physics",
    slug: "olatunde-olatunji",
    image: "/images/speakers/prof-olatunde-olatunji.jpg", // Note: Image needs to be added
  },
  {
    name: "Prof. Temitope Olabisi Onuminya FLS, FLEAD, FISN, MNYA",
    title: "President, Nigerian Young Academy",
    institution: "University of Lagos",
    role: "Professor of Plant Systematics and Conservation",
    slug: "temitope-onuminya",
    image: "/images/speakers/prof-temitope-onuminya.jpg",
  },
];

export default function SpeakersPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 bg-[#118ab2]/10 text-[#118ab2] px-4 py-1.5 rounded-full text-sm font-medium">
            Speakers
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#073b4c] mb-6">
            Keynote & Plenary Speakers
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our distinguished speakers who are leading experts in green
            chemistry, artificial intelligence, and sustainable development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker) => (
            <Link
              href={`/speakers/${speaker.slug}`}
              key={speaker.slug}
              className="group h-full"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 group-hover:transform group-hover:scale-105 h-full flex flex-col">
                <div className="relative h-64 w-full flex-shrink-0">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-[#073b4c] mb-2">
                    {speaker.name}
                  </h3>
                  <p className="text-[#118ab2] font-medium mb-1">
                    {speaker.title}
                  </p>
                  <p className="text-gray-600 text-sm mb-1">
                    {speaker.institution}
                  </p>
                  <p className="text-gray-500 text-sm mt-auto">
                    {speaker.role}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
