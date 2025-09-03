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
  "temitope-onuminya": {
    name: "Prof. Temitope Olabisi Onuminya FLS, FLEAD, FISN, MNYA",
    title: "President, Nigerian Young Academy",
    institution: "University of Lagos",
    role: "Professor of Plant Systematics and Conservation",
    image: "/images/speakers/prof-temitope-onuminya.jpg",
    bio: `Prof. Temitope Olabisi Onuminya is a Professor of Plant Systematics and Conservation with the aim of providing evidence-based solutions for a sustainable environment. With over 15 years of experience in Molecular Systematics, DNA barcoding, Ethnobotany, and Environmental sustainability; her research emphasizes the conservation of plant genetic resources, forensic botany, and the integration of biotechnology into biodiversity conservation efforts. She has over 15 years of experience in human resources development, stakeholder engagement, products and services exhibition planning and coordination.

A serial multiple award/grant-winning scholar in biodiversity conservation research, Prof. Onuminya has led and collaborated on national and international research grants supporting works on endangered species, allergenic pollen, and plant biodiversity in urban and rural Nigeria. She is passionate about integrating science with public health and environmental resilience.

Her expertise is supported by high-impact publications, numerous postgraduate and undergraduate supervisions, and participation in global initiatives on biodiversity informatics. She is also committed to capacity building through various academic leadership roles and global fellowships. She is a Darwin Scholar, LEAD Fellow, Fellow of the Linnaean Society of London (FLS) and Institute of Security Nigeria and an active member of several professional bodies including the American Society of Plant Systematics, USA, Botanical Society of America, Botanical Society of Nigeria, Organization for Women in Science for the Developing World and Nigerian Young Academy. She is currently the Team Lead – Terrestrial Biodiversity Conservation Cluster at the TETFund Centre of Excellence in Biodiversity Conservation and Ecosystem Management, UNILAG.

Prof. Onuminya is a dynamic, proactive and resilient individual with a strong personality based on integrity and trust. She is an advocate of the UN SDGs 3, 11, 12, 13, and 15. She is the current President (First Female) of the Nigerian Young Academy.`,
    citations: {
      orcid: "https://orcid.org/0000-0003-3794-7700",
      researchGate: "https://www.researchgate.net/profile/Temitope_Onuminya",
      googleScholar:
        "https://scholar.google.com/citations?hl=en&user=RXZrUZIAAAAJ",
      scopus: "https://www.scopus.com/authid/detail.uri?authorId=57201386722",
      website: "www.linkedin.com/in/temitope-onuminya-a15185a8",
    },
    projects: [],
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
  "olatunde-olatunji": {
    name: "Prof. Olatunde Olatunji",
    title: "Academic Leader for Research & Higher Degrees",
    institution: "University of KwaZulu-Natal",
    role: "School of Chemistry and Physics",
    image: "/images/speakers/prof-olatunde-olatunji.jpg",
    bio: `Prof. Olatunde Olatunji is a leading researcher and educator at the University of KwaZulu-Natal (UKZN), South Africa, where he serves as the Academic Leader for Research & Higher Degrees in the School of Chemistry and Physics. With a career spanning more than two decades, he has established himself as a prominent figure in sustainable chemistry and environmental technology.

His research expertise encompasses a broad spectrum of critical areas including analytical methods, water and environmental science, renewable resource utilization, green chemistry, nanostructured materials, and heterogeneous photocatalysis. Prof. Olatunji's work is particularly notable for bridging cutting-edge photocatalysis and environmental remediation technology with data-driven tools, creating new opportunities for material synthesis, catalytic reaction optimization, and scalable green innovations.

With over 100 peer-reviewed publications in high-impact journals and more than 2,000 citations, his research has significantly influenced the field of sustainable chemistry. His work has been featured in prestigious journals including Chemical Engineering Journal, RSC Environmental Science: Advances, Journal of Water Process Engineering, Applied Catalysis B: Environmental, and ChemSusChem.

Beyond his research achievements, Prof. Olatunji is deeply committed to nurturing the next generation of African scientists. He has successfully supervised more than 20 Ph.D. and MSc students, contributing significantly to capacity building in sustainable chemistry across the continent.`,
    projects: [
      {
        name: "Photocatalysis Research",
        description:
          "Development and optimization of heterogeneous photocatalysis systems for environmental remediation and green chemistry applications.",
      },
      {
        name: "Nanostructured Materials",
        description:
          "Synthesis and functionalization of novel nanostructured materials for sustainable chemical processes and environmental technologies.",
      },
      {
        name: "Water Treatment Technologies",
        description:
          "Innovation in water treatment and purification methods using sustainable and environmentally friendly approaches.",
      },
      {
        name: "Green Chemistry Applications",
        description:
          "Development of cleaner chemical processes and sustainable technologies for industrial applications.",
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
                <div className="text-gray-600 leading-relaxed space-y-4">
                  {speaker.bio.split("\n\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
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
