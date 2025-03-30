import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Project = {
  name: string;
  description: string;
};

type Speaker = {
  name: string;
  title: string;
  institution: string;
  role: string;
  image: string;
  bio: string;
  projects?: Project[];
};

type SpeakerDetails = {
  [key: string]: Speaker;
};

const speakerDetails: SpeakerDetails = {
  "bamidele-adebisi": {
    name: "Prof. Bamidele Adebisi",
    title: "Professor in Intelligent Infrastructure Systems",
    institution: "Manchester Metropolitan University",
    role: "Head of the Smart Infrastructure and Industry Research (SIIR) Group",
    image: "/images/speakers/prof-bamidele-adebisi.png",
    bio: `Professor Bamidele Adebisi is a distinguished academic and researcher specializing in Intelligent Infrastructure Systems. He is currently based at Manchester Metropolitan University, where he leads the Smart Infrastructure and Industry Research Group. His work focuses on embedding technologies like sensing, communication, control, and data analytics into critical infrastructures such as energy systems, transport, and buildings.

Prof. Adebisi has an impressive academic background, including a Ph.D. in Communication Systems from Lancaster University, UK, and a bachelor's degree in Electrical Engineering from Ahmadu Bello University, Nigeria. He has been involved in numerous high-profile, multi-million-pound research projects, including smart cities, smart grids, and Internet of Things (IoT) applications.

Beyond academia, he serves as a director and board member of the African Hydrogen Partnership Trade Association and contributes to various international collaborations aimed at solving global challenges.`,
    projects: [
      {
        name: "Triangulum Project",
        description:
          "€29 million EU-funded initiative focused on creating one of the largest low-carbon districts in Europe. It integrated sustainable urban mobility, energy systems, and ICT infrastructures to promote eco-friendly urban living.",
      },
      {
        name: "CityVerve Project",
        description:
          "£10 million smart cities project that explored big data analytics for real-time monitoring and prediction of energy, transport, and health systems. This project contributed to sustainable energy management and urban planning.",
      },
      {
        name: "Nigeria Intelligent Clean Energy Marketplace (NIceEnergi)",
        description:
          "UK-Nigeria partnership aimed to develop a sustainable energy management system for a community in Nigeria. It was funded by the UK government and focused on clean energy solutions.",
      },
      {
        name: "Manchester Fuel Cell Innovation Centre",
        description:
          "Prof. Adebisi has been a key figure in this center, which works on advancing hydrogen fuel cells and electrolysers for green hydrogen production.",
      },
    ],
  },
  "stephen-uzoekwe": {
    name: "Prof. Stephen A. Uzoekwe",
    title: "Professor of Analytical-Environmental Chemistry",
    institution: "Delta State University Abraka",
    role: "Air Pollution and Forensic Science Expert",
    image: "/images/speakers/prof-stephen-a-uzoekwe.png",
    bio: `Prof. Stephen Uzoekwe is a distinguished Nigerian environmental chemist and academic, currently serving a sabbatical appointment in the Department of Chemistry at the Delta State University Abraka.

Prof. Uzoekwe's research primarily centers on environmental pollution assessment, health and ecological risk analysis. He has conducted significant studies on heavy metal contamination in various environmental matrices within Nigeria as well as air pollution risks and assessment in Bayelsa State, providing valuable insights into contamination and potential environmental hazards.

Through his research and academic endeavors, Prof. Uzoekwe contributes to a deeper understanding of environmental challenges in Nigeria, aiding in the development of strategies for pollution management and ecological conservation. His work is instrumental in informing policy and promoting sustainable environmental practices within the region.`,
  },
  "charles-adetunji": {
    name: "Prof. Charles O. Adetunji",
    title: "Professor of Microbiology",
    institution: "Edo State University Uzairue",
    role: "Director of Research and Innovation",
    image: "/images/speakers/prof-charles-o-adetunji.png",
    bio: `Prof Charles Oluwaseun Adetunji is presently a faculty member at the Microbiology Department, Faculty of Science, Edo State University Uzairue, Edo State, Nigeria, where he utilized the application of biological techniques and microbial bioprocesses for the actualization of sustainable development goals and agrarian revolution, through quality teaching, research, and community development.

He has won several scientific awards and grants from renowned academic bodies and has published many scientific journals with over 580 manuscripts including over 40 books and many scientific patents with Google Scholar i10-Index 136. He was ranked recently as number 1st among the top 500 prolific authors in Nigeria between 2020 till date by SciVal/SCOPUS.

He is presently a series editor with Wiley and Sons, Elsevier, Springer, Taylor and Francis, USA and many others editing several textbooks. He has participated in more than 100 international scientific conferences and workshops which include Invited talk, Plenary speaker, Keynote speaker, Chief panelist, Lead guest speaker, Chairs of Sessions, and Judges of poster in different continents.`,
  },
  "adedotun-afolayan": {
    name: "Dr. Adedotun Afolayan",
    title: "Assistant Director",
    institution: "National Centre for Genetic Resources and Biotechnology",
    role: "Research Lead, Tissue Culture Unit",
    image: "/images/speakers/dr-adedotun-afolayan.png",
    bio: `Dr. Adedotun Onoyinka Afolayan is an esteemed Nigerian ecologist and environmental biologist, currently serving as an Assistant Director (Research) at the National Centre for Genetic Resources and Biotechnology (NACGRAB) in Ibadan, Nigeria. At NACGRAB, she leads the Tissue Culture Unit within the Biotechnology Department, focusing on plant biodiversity conservation through tissue culture.

Dr. Afolayan's research encompasses environmental pollution assessment, evaluating contamination levels across various environmental components, and investigating the effects of plant extracts on fish reproduction. Her work significantly contributes to understanding and mitigating environmental challenges in Nigeria.

Beyond her research endeavors, Dr. Afolayan is actively involved in professional organizations. She serves as the President-elect of the Africa Region and President of the Nigerian Chapter of the Society for Conservation Biology (SCB). Additionally, she holds the position of Secretary in the International Foundation for Science Nigerian Alumni Association (IFS-NAA), reflecting her commitment to fostering scientific collaboration and mentorship within the Nigerian scientific community.`,
  },
  "adekunle-adeleke": {
    name: "Dr. Adekunle Adeleke",
    title: "Head of Department, Mechanical Engineering",
    institution: "Nile University of Nigeria",
    role: "Leader, Waste to Wealth Research Group",
    image: "/images/speakers/dr-adekunle-adeleke.png",
    bio: `Dr. Adekunle A. Adeleke is a distinguished academic and researcher in the field of Mechanical Engineering, currently serving as the Head of the Department of Mechanical Engineering at Nile University of Nigeria, Abuja. Dr. Adeleke formerly served as the Chair of the Sustainable Development Goal 9 (Industry, Innovation, and Infrastructure) Research Team at Landmark University before moving to Nile University.

With over 180 articles published in reputable international journals and six book chapters to his name, Dr. Adeleke has made substantial contributions to his field. He holds four patents from the Federal Republic of Nigeria and has been recognized as one of the top 50 researchers in Nigeria based on scholarly output by SciVal.`,
    projects: [
      {
        name: "Biomass Utilization",
        description:
          "Extensive studies on the torrefaction, densification, and utilization of biomass for energy production, focusing on improving combustion characteristics.",
      },
      {
        name: "Carbon Capture",
        description:
          "Research on absorption-based CO2 capture, exploring its potential for reducing carbon emissions in industrial processes.",
      },
      {
        name: "Sustainable Aviation Fuel",
        description:
          "Development of a data-driven framework for the techno-economic assessment of sustainable aviation fuel derived from pyrolysis.",
      },
      {
        name: "Iron and Steel Industry",
        description:
          "Leading the Waste to Wealth Research Team in producing direct reduced iron from Nigerian iron ore using lean-grade coal and torrefied biomass.",
      },
    ],
  },
  "ifeyinwa-obianyo": {
    name: "Dr. Ifeyinwa Ijeoma Obianyo",
    title: "Department of Civil Engineering",
    institution: "Nile University of Nigeria",
    role: "M.Eng. Thesis Coordinator",
    image: "/images/speakers/engr-dr-ifeyinwa-ijeoma-obianyo.JPG",
    bio: `Dr. Ifeyinwa Ijeoma Obianyo is a distinguished academic and researcher in the Department of Civil Engineering at Nile University of Nigeria, Abuja. She holds a B.Eng. in Civil Engineering from the University of Nigeria, Nsukka, and both an M.Sc. and Ph.D. in Materials Science and Engineering from the African University of Science and Technology (AUST), Abuja.

A strong advocate for STEM education, Dr. Obianyo actively participates in outreach programs to inspire young girls to pursue careers in science and engineering. She has received numerous accolades, including the World Bank-Pan African Materials Institute scholarship and the RILEM Ph.D. Grant.`,
    projects: [
      {
        name: "Soil Stabilization using Ashes of different Agro-waste such as Bone Ash and Rice Husk Ash",
        description:
          "Exploration of the mechanical behavior of lateritic soil stabilized with bone ash and hydrated lime for sustainable building materials.",
      },
      {
        name: "Recycled Coal Bottom Ash",
        description:
          "Review of recycled coal bottom ash as a sustainable material for cement replacement in construction.",
      },
      {
        name: "Durability of Self-Compacting Concrete",
        description:
          "Investigation of performance and durability of self-compacting concrete containing crumb rubber, fly ash, and calcium carbide waste.",
      },
      {
        name: "Cellulose Pulp-Reinforced Composites",
        description:
          "Research on cellulose pulp-reinforced earth-based composites for enhanced durability of sustainable building materials.",
      },
    ],
  },
};

export default function SpeakerPage({ params }: { params: { slug: string } }) {
  const speaker = speakerDetails[params.slug];

  if (!speaker) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <Link
          href="/speakers"
          className="inline-flex items-center text-[#118ab2] hover:text-[#073b4c] mb-8"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Speakers
        </Link>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-lg">
              <Image
                src={speaker.image}
                alt={speaker.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold text-[#073b4c] mb-4">
              {speaker.name}
            </h1>
            <p className="text-xl text-[#118ab2] font-medium mb-2">
              {speaker.title}
            </p>
            <p className="text-lg text-gray-600 mb-2">{speaker.institution}</p>
            <p className="text-lg text-gray-600 mb-8">{speaker.role}</p>

            <div className="prose max-w-none">
              {speaker.bio.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>

            {speaker.projects && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-[#073b4c] mb-6">
                  Notable Projects
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {speaker.projects.map((project, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-md p-6 border border-gray-100"
                    >
                      <h3 className="text-lg font-semibold text-[#118ab2] mb-2">
                        {project.name}
                      </h3>
                      <p className="text-gray-600">{project.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
