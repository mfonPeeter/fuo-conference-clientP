import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

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
  citations?: {
    googleScholar?: string;
    scopus?: string;
    researchGate?: string;
    orcid?: string;
    webOfScience?: string;
    publons?: string;
    email?: string;
    website?: string;
  };
  projects?: Project[];
};

type SpeakerDetails = {
  [key: string]: Speaker;
};

const speakerDetails: SpeakerDetails = {
  "edu-inam": {
    name: "Prof. Edu J. Inam",
    title: "President, American Chemical Society (ACS) Nigeria Chapter",
    institution: "University of Uyo",
    role: "Head of Department of Chemistry",
    image: "/images/speakers/prof-edu-inam.png",
    bio: `Prof. Edu J. Inam is a full professor of Chemistry, currently serving as the Head of Department of Chemistry at University of Uyo and President of the American Chemical Society (ACS) Nigeria International Chemical Sciences Chapter. She is also the Director of the International Centre for Energy and Environmental Sustainability Research (ICEESR) and the immediate past Acting Director, Centre for Research and Development, University of Uyo.

With over two decades of teaching and research experience across Africa, Asia, and Europe, Prof. Inam has made significant contributions to the field of environmental chemistry. Her research interests include water quality monitoring, risk assessment, and waste utilization. She has authored or co-authored over 70 research articles in high-impact scientific journals and has presented at numerous international conferences. Her work has garnered over 1,200 citations, reflecting her influence in the scientific community.

Prof. Inam earned her Ph.D. in Chemistry from Loughborough University, United Kingdom, in 2005. She furthered her expertise with professional courses at the United Nations University in Tokyo, Japan, focusing on International Cooperation and Development, and Environmental Change: Managing Risks. In 2007, she was awarded a Korean Government Postdoctoral Fellowship at the International Environmental Research Center, Gwangju Institute of Science and Technology, South Korea. During her time in Korea, she also received the Schlumberger Faculty for the Future Scholarship, enabling her to continue her research for an additional two years.

Prof. Inam played a pivotal role in establishing the ACS Nigeria International Chemical Sciences Chapter in 2015 and has been instrumental in its growth and development. She has organized and implemented various programs, including the Abuja Chemistry Festival and the ACS Nigeria Chapter Symposium Series, now in its tenth year. Her leadership extends to mentoring initiatives such as the Project SEED program and the University of Uyo ACS Student Chapter.

Recognized for her expertise, Prof. Inam was invited to join the African regional expert team on the Global Chemicals Outlook II under the United Nations Environment Programme. Her international collaborations and consultancy roles with organizations like the World Bank and UNDP underscore her commitment to addressing global environmental challenges.`,
    citations: {
      email: "eduinam235@gmail.com",
      website: "acsnigeria.org",
    },
    projects: [
      {
        name: "Water Quality Monitoring",
        description:
          "Research on water quality assessment and monitoring techniques for sustainable water resource management.",
      },
      {
        name: "Environmental Risk Assessment",
        description:
          "Development of methodologies for assessing environmental risks and their impact on human health and ecosystems.",
      },
      {
        name: "Waste Utilization",
        description:
          "Innovative approaches to waste management and utilization for environmental sustainability.",
      },
      {
        name: "ACS Nigeria Chapter Leadership",
        description:
          "Leading the American Chemical Society Nigeria Chapter in promoting chemical sciences education and research.",
      },
    ],
  },
  "nimibofa-ayawei": {
    name: "Prof. Nimibofa Ayawei",
    title: "Secretary to the State Government",
    institution: "Bayelsa State Government",
    role: "Former Executive Chairman, Bayelsa State Board of Internal Revenue",
    image: "/images/speakers/prof-nimibofa-ayawei.png",
    bio: `Prof. Nimibofa Ayawei has a diverse background encompassing academia, public service, and political engagement. He currently serves as the Secretary to the State Government (SSG) of Bayelsa State. Prior to this appointment, he held the position of Executive Chairman of the Bayelsa State Board of Internal Revenue. His career includes experience as a former member of the Bayelsa State House of Assembly.

Prof. Ayawei's research is strongly oriented towards sustainability, with a particular focus on environmental chemistry. His work addresses critical environmental issues, notably in wastewater treatment, environmental analysis, and environmental chemistry. Given his affiliations within the Niger Delta region, his research addresses the unique environmental challenges prevalent in that area.`,
    projects: [
      {
        name: "Wastewater Treatment",
        description:
          "Research on methods to effectively remove contaminants from wastewater, including the application of adsorption techniques and utilization of various materials to enhance contaminant uptake.",
      },
      {
        name: "Environmental Analysis",
        description:
          "Expertise in environmental analytical chemistry and environmental analysis, including investigation of Biochemical Oxygen Demand (BOD) in water bodies, a key indicator of water quality.",
      },
      {
        name: "Environmental Chemistry",
        description:
          "Practical applications of environmental chemistry, focusing on mitigating environmental hazards and pollution, including research on silver nanoparticles from plant extracts for bactericidal purposes.",
      },
      {
        name: "Regional Environmental Solutions",
        description:
          "Development of sustainable solutions for environmental problems in the Niger Delta region, with particular emphasis on water pollution and contamination as well as development of materials for pollutants remediation.",
      },
    ],
  },
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
    image: "/images/speakers/dr-adedotun-afolayan.JPG",
    bio: `Dr. Adedotun Onoyinka Afolayan is an esteemed Nigerian ecologist and environmental biologist, currently serving as an Assistant Director (Research) at the National Centre for Genetic Resources and Biotechnology (NACGRAB) in Ibadan, Nigeria. At NACGRAB, she heads the Tissue Culture Unit within the Biotechnology Department, focusing on plant biodiversity conservation through tissue culture.

Dr. Afolayan's research encompasses environmental pollution assessment, evaluating contamination levels across various environmental components, and investigating the effects of plant extracts on fish reproduction. Her work significantly contributes to understanding and mitigating environmental challenges in Nigeria.

Beyond her research endeavors, Dr. Afolayan is actively involved in professional organizations. She serves as the President-elect of the Africa Region and past President of the Nigerian Chapter of the Society for Conservation Biology (SCB). Additionally, she holds the position of Secretary in the International Foundation for Science Nigerian Alumni Association (IFS-NAA), reflecting her commitment to fostering scientific collaboration and mentorship within the Nigerian scientific community.`,
  },
  "adekunle-adeleke": {
    name: "Dr. Adekunle Adeleke",
    title: "Head of Department, Mechanical Engineering",
    institution: "Nile University of Nigeria",
    role: "Leader, Waste to Wealth Research Group",
    image: "/images/speakers/dr-adekunle-adeleke.png",
    bio: `Dr. Adekunle A. Adeleke is a distinguished academic and researcher in the field of Mechanical Engineering, currently serving as the Head of the Department of Mechanical Engineering at Nile University of Nigeria, Abuja. Dr. Adeleke formerly served as the Chair of the Sustainable Development Goal 9 (Industry, Innovation, and Infrastructure) Research Team at Landmark University before moving to Nile University. With over 220 articles published in reputable international journals and Fourteen book chapters published to his name, Dr. Adeleke has made substantial contributions to his field. He holds five patents from the Federal Republic of Nigeria and has been recognized as one of the top 50 researchers in Nigeria based on scholarly output by SciVal.  He has consistently been named the TOPmost researcher of his university from 2022 till date and has led his team to become Best Research team among the 16 Honoria United Universities in Africa.`,
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
    name: "Engr. Dr. Ifeyinwa Ijeoma Obianyo",
    title: "Department of Civil Engineering",
    institution: "Nile University of Nigeria",
    role: "",
    image: "/images/speakers/engr-dr-ifeyinwa-ijeoma-obianyo.JPG",
    bio: `Engr. Dr. Ifeyinwa Ijeoma Obianyo is a distinguished academic and researcher in the field of Civil Engineering at Nile University of Nigeria. She serves as the M.Eng. Thesis Coordinator and has made significant contributions to research in sustainable construction materials and environmental engineering.`,
    citations: {
      googleScholar:
        "https://scholar.google.com/citations?user=6qpvpcMAAAAJ&hl=en",
      scopus: "https://www.scopus.com/authid/detail.uri?authorId=57213269077",
      researchGate:
        "https://www.researchgate.net/profile/Ifeyinwa-Obianyo/research",
      orcid: "https://orcid.org/0009-0007-5184-3277",
      webOfScience: "https://www.webofscience.com/wos/author/record/2243221",
      publons: "https://publons.com/researcher/AAJ-6255-2021",
    },
    projects: [
      {
        name: "Sustainable Construction Materials",
        description:
          "Research on the development and characterization of eco-friendly construction materials.",
      },
      {
        name: "Environmental Impact Assessment",
        description:
          "Studies on the environmental impact of construction activities and mitigation strategies.",
      },
      {
        name: "Waste Management in Construction",
        description:
          "Investigation of sustainable waste management practices in construction projects.",
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

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#073b4c] mb-2">
                  Biography
                </h3>
                <p className="text-gray-600 leading-relaxed">{speaker.bio}</p>
              </div>

              {speaker.citations && (
                <div>
                  <h3 className="text-xl font-bold text-[#073b4c] mb-4">
                    Academic Profiles
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {speaker.citations.googleScholar && (
                      <a
                        href={speaker.citations.googleScholar}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[#118ab2] font-medium">
                            Google Scholar
                          </span>
                          <ArrowUpRight className="h-4 w-4 text-[#118ab2]" />
                        </div>
                      </a>
                    )}
                    {speaker.citations.scopus && (
                      <a
                        href={speaker.citations.scopus}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[#118ab2] font-medium">
                            Scopus
                          </span>
                          <ArrowUpRight className="h-4 w-4 text-[#118ab2]" />
                        </div>
                      </a>
                    )}
                    {speaker.citations.researchGate && (
                      <a
                        href={speaker.citations.researchGate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[#118ab2] font-medium">
                            ResearchGate
                          </span>
                          <ArrowUpRight className="h-4 w-4 text-[#118ab2]" />
                        </div>
                      </a>
                    )}
                    {speaker.citations.orcid && (
                      <a
                        href={speaker.citations.orcid}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[#118ab2] font-medium">
                            ORCID
                          </span>
                          <ArrowUpRight className="h-4 w-4 text-[#118ab2]" />
                        </div>
                      </a>
                    )}
                    {speaker.citations.webOfScience && (
                      <a
                        href={speaker.citations.webOfScience}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[#118ab2] font-medium">
                            Web of Science
                          </span>
                          <ArrowUpRight className="h-4 w-4 text-[#118ab2]" />
                        </div>
                      </a>
                    )}
                    {speaker.citations.publons && (
                      <a
                        href={speaker.citations.publons}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[#118ab2] font-medium">
                            Publons
                          </span>
                          <ArrowUpRight className="h-4 w-4 text-[#118ab2]" />
                        </div>
                      </a>
                    )}
                    {speaker.citations.email && (
                      <a
                        href={`mailto:${speaker.citations.email}`}
                        className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[#118ab2] font-medium">
                            Email
                          </span>
                          <ArrowUpRight className="h-4 w-4 text-[#118ab2]" />
                        </div>
                      </a>
                    )}
                    {speaker.citations.website && (
                      <a
                        href={`https://${speaker.citations.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[#118ab2] font-medium">
                            Website
                          </span>
                          <ArrowUpRight className="h-4 w-4 text-[#118ab2]" />
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              )}

              {speaker.projects && speaker.projects.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-[#073b4c] mb-4">
                    Notable Projects
                  </h3>
                  <div className="grid gap-4">
                    {speaker.projects.map((project, index) => (
                      <div
                        key={index}
                        className="bg-white p-4 rounded-xl shadow-sm border border-gray-100"
                      >
                        <h4 className="font-bold text-[#073b4c] mb-2">
                          {project.name}
                        </h4>
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
    </div>
  );
}
