import { ChevronRight, FileText, AlertCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import CTA from "@/components/home/CTA";
import Link from "next/link";

const guidelines = [
  {
    heading: "Abstract Length",
    details:
      "Maximum 250 words; briefly summarize the study, including background, methodology, results, and conclusions. Avoid references or citations in the abstract.",
  },
  {
    heading: "Title",
    details:
      "Bold, concise, and descriptive title reflecting the essence of the study (centered).",
  },
  {
    heading: "Author(s)",
    details:
      "Full Name (First Name, followed by Initials and then Surname) with superscript numbers for affiliations. List all authors with their respective affiliations.",
  },
  {
    heading: "Corresponding Author",
    details: "Mark with an asterisk (*) and include email address.",
  },
  {
    heading: "Keywords",
    details:
      "Provide 4-6 keywords related to the abstract for indexing purposes.",
  },
];

const formattingRequirements = [
  { item: "Font", value: "Times New Roman" },
  { item: "Size", value: "12-point font" },
  { item: "Spacing", value: "Single line spacing" },
  { item: "Margins", value: "1-inch margins on all sides" },
  { item: "File Format", value: "Submit as a Word document (.docx) or PDF" },
];

const importantDates = [
  {
    heading: "Abstract Submission Deadline",
    timeframe: "September  30, 2025",
  },
  {
    heading: "Notification of Acceptance",
    timeframe: "On rolling basis (usually within 2 weeks of submission)",
  },
  {
    heading: "Conference Dates",
    timeframe: "November 4-7, 2025",
  },
];

const exampleAbstract = {
  title:
    "Synthesis and Characterization of Manganese-Theophylline Complexes with Enhanced Stability and Solubility",
  authors: [
    {
      name: "Olufunso O. Abosede",
      affiliation:
        "Department of Chemistry, Federal University Otuoke, Bayelsa State, Nigeria",
      isCorresponding: true,
      email: "abosedeoo@fuotuoke.edu.ng",
    },
    {
      name: "Kelechi Peace Kanu",
      affiliation:
        "Department of Biochemistry, Federal University Otuoke, Bayelsa State, Nigeria",
      isCorresponding: false,
    },
  ],
  keywords: [
    "Theophylline",
    "manganese complexes",
    "synthesis",
    "characterization",
    "UV-Vis spectroscopy",
    "FTIR spectroscopy",
  ],
};

export default function AbstractPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="py-16 bg-[#edf6f9]">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-[800px] space-y-6">
            {/* Guidelines Section */}
            <Card className="shadow-lg border-[#4cc9f0]/20">
              <CardHeader className="bg-[#073b4c] text-white rounded-t-lg">
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-[#ffd166]" />
                  Abstract Submission Guidelines
                </CardTitle>
                <CardDescription className="text-white/80">
                  Please read carefully before submitting
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                {guidelines.map(({ heading, details }, index) => (
                  <div key={index}>
                    <h3 className="font-bold text-[#073b4c] mb-2">
                      {heading}:
                    </h3>
                    <p className="text-gray-600">{details}</p>
                  </div>
                ))}

                <div>
                  <h3 className="font-bold text-[#073b4c] mb-2">
                    Formatting Requirements:
                  </h3>
                  <ul className="list-none space-y-2">
                    {formattingRequirements.map(({ item, value }, index) => (
                      <li
                        key={index}
                        className="flex justify-between text-gray-600"
                      >
                        <span className="font-medium">{item}:</span>
                        <span>{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator className="my-4" />

                <div>
                  <h3 className="font-bold text-[#073b4c] mb-4">
                    Publication Opportunities
                  </h3>
                  <div className="bg-[#118ab2]/5 p-6 rounded-xl">
                    <p className="text-gray-600 mb-4">
                      We are pleased to inform all participants that accepted
                      abstracts submitted for the conference will be collated
                      and published in an open-access repository with a Digital
                      Object Identifier (DOI). This ensures that your work is
                      citable and accessible to the global research community.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Furthermore, authors can start submitting their full
                      papers for publication in the following well-indexed
                      journals:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
                      <li>
                        <a
                          href="https://link.springer.com/collections/jagggiiehi"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:no-underline"
                        >
                          Discover Chemistry (Springer Nature)
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://iopscience.iop.org/collections/sstech-250407-817"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:no-underline"
                        >
                          IOP Sustainability Science and Technology Progress
                          collection on Sustainability Research in Sub-Saharan
                          -Africa.
                        </a>
                      </li>
                    </ul>
                    <p className="text-gray-600">
                      Authors of outstanding contributions will be guided
                      through the peer-review process of these reputable
                      journals. We encourage all participants to prepare their
                      submissions with the highest academic rigor and
                      originality.
                    </p>
                    <p className="text-gray-600 mt-4">
                      For inquiries regarding publication opportunities, please
                      contact the organizing committee.
                    </p>
                  </div>
                </div>

                <Separator className="my-4" />

                <div>
                  <h3 className="font-bold text-[#073b4c] mb-2">
                    Important Dates:
                  </h3>
                  <ul className="space-y-2">
                    {importantDates.map(({ heading, timeframe }, index) => (
                      <li
                        key={index}
                        className="flex flex-col sm:flex-row justify-between text-sm"
                      >
                        <span className="text-gray-600">{heading}:</span>
                        <span className="font-medium text-[#073b4c]">
                          {timeframe}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Example Abstract Template */}
            <Card className="shadow-lg border-[#4cc9f0]/20">
              <CardHeader className="bg-[#073b4c] text-white rounded-t-lg">
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-[#ffd166]" />
                  Example Abstract Template
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-6 rounded-2xl overflow-hidden h-48 relative">
                  <a
                    href="/images/abstract/abstract-template.png"
                    download="abstract-template.png"
                    className="w-full h-full flex items-center justify-center bg-[#118ab2]/5 hover:bg-[#118ab2]/10 transition-colors"
                  >
                    <div className="text-center">
                      <FileText className="h-12 w-12 text-[#118ab2] mx-auto mb-2" />
                      <span className="text-[#118ab2] font-medium">
                        Download Abstract Template
                      </span>
                    </div>
                  </a>
                </div>

                <div className="space-y-6 font-['Times_New_Roman']">
                  <h2 className="text-center font-bold text-lg text-[#073b4c]">
                    {exampleAbstract.title}
                  </h2>

                  <div className="text-center space-y-2">
                    <p>
                      {exampleAbstract.authors.map((author, index) => (
                        <span key={index}>
                          <sup>{index + 1}</sup>
                          {author.name}
                          {author.isCorresponding && "*"}
                          {index < exampleAbstract.authors.length - 1 && ", "}
                        </span>
                      ))}
                    </p>
                    <div className="text-sm text-gray-600">
                      {exampleAbstract.authors.map((author, index) => (
                        <p key={index}>
                          <sup>{index + 1}</sup>
                          {author.affiliation}
                        </p>
                      ))}
                    </div>
                    <p className="text-sm">
                      *Email:{" "}
                      {
                        exampleAbstract.authors.find((a) => a.isCorresponding)
                          ?.email
                      }
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-[#073b4c] mb-2">Abstract</h3>
                    <p className="text-gray-600">
                      This study explores the synthesis and characterization of
                      manganese complexes of theophylline, a xanthine derivative
                      with therapeutic relevance, aimed at improving its
                      pharmacological properties... [Summarize in one paragraph
                      using up to 250 words]
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-[#073b4c] mb-2">Keywords:</h3>
                    <p className="text-gray-600">
                      {exampleAbstract.keywords.join(", ")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Alert className="border-[#ffd166] bg-[#ffd166]/10">
              <AlertCircle className="h-4 w-4 text-[#ffd166]" />
              <AlertTitle className="text-[#073b4c] font-bold">
                Please Note
              </AlertTitle>
              <AlertDescription className="text-gray-600">
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Late submissions will not be considered.</li>
                  <li>
                    All submitted abstracts will undergo a rigorous peer-review
                    process and accepted abstracts will deposited in an
                    open-access repository with DOI link for citations.
                  </li>
                  <li>
                    Full papers of accepted abstracts will be invited for
                    publications in scopus indexed journals such as Discover
                    Chemistry (Springer), Scientific African (Elsevier) and the
                    Nigerian Journal of Physical Sciences
                  </li>
                </ul>
              </AlertDescription>
            </Alert>

            <Link
              href="/upload-abstract"
              className="inline-flex items-center text-[#118ab2] font-medium hover:text-[#073b4c] mt-4 group"
            >
              Head to the upload abstract page to submit your abstract
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
