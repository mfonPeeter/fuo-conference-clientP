import { ChevronRight, FileText, AlertCircle } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
      " Abstracts should be concise and no longer than 250 words, and maximum of one page.",
  },
  {
    heading: "Format",
    details:
      " Abstracts should be submitted in a clear and readable format, preferably in Microsoft Word.",
  },
  {
    heading: "Title",
    details:
      " Bold, concise, and descriptive title reflecting the essence of the study.",
  },
  {
    heading: "Content",
    details:
      "Abstracts should clearly outline the research question, methodology, key findings, and conclusions.",
  },
  {
    heading: "Keywords",
    details:
      "Please provide up to 5 relevant keywords to facilitate indexing and retrieval.",
  },
];

const importantDates = [
  {
    heading: "Abstract Submission Deadline",
    timeframe: "January 31, 2025",
  },
  {
    heading: "Notification of Acceptance",
    timeframe: "February 10, 2025",
  },
  {
    heading: "Conference Dates",
    timeframe: "March 4-7, 2025",
  },
];

export default function AbstractPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <section className="py-16 bg-[#edf6f9]">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-[800px]">
            {/* Guidelines Section */}
            <Card className="shadow-lg border-[#4cc9f0]/20">
              <CardHeader className="bg-[#073b4c] text-white rounded-t-lg">
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-[#ffd166]" />
                  Submission Guidelines
                </CardTitle>
                <CardDescription className="text-white/80">
                  Please read carefully before submitting
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                {guidelines.map(({ heading, details }, index) => (
                  <div key={index}>
                    <h3 className="font-bold text-[#073b4c] mb-2">
                      {heading}:
                    </h3>
                    <p className="text-gray-600">{details}</p>
                  </div>
                ))}

                <div>
                  <h3 className="font-bold text-[#073b4c] mb-2">Author(s):</h3>
                  <p className="text-gray-600">
                    List all authors, including their affiliations and email
                    address of corresponding author which should be marked with
                    asterisk.
                  </p>
                  <p className="text-gray-600 mt-1">
                    Order of authors&apos; names: First name, Initial followed
                    by Surname.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#073b4c] mb-2">Formatting:</h3>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>Font: Times New Roman</li>
                    <li>Font Size: 12</li>
                    <li>Line Spacing: 1.5</li>
                    <li>Margins: 1 inch on all sides</li>
                  </ul>
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
              <CardFooter className="bg-[#4cc9f0]/10 flex flex-col items-start p-4 rounded-b-lg">
                <p className="text-sm text-[#073b4c] font-medium mb-2">
                  For any inquiries, please email:
                </p>
                <Link
                  href="mailto:science.conf@fuotuoke.edu.ng"
                  className="text-[#4cc9f0] hover:underline"
                >
                  science.conf@fuotuoke.edu.ng
                </Link>
              </CardFooter>
            </Card>

            <Alert className="mt-6 border-[#ffd166] bg-[#ffd166]/10">
              <AlertCircle className="h-4 w-4 text-[#ffd166]" />
              <AlertTitle className="text-[#073b4c] font-bold">
                Please Note
              </AlertTitle>
              <AlertDescription className="text-gray-600">
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Late submissions will not be considered.</li>
                  <li>
                    All submitted abstracts will undergo a rigorous peer-review
                    process.
                  </li>
                  <li>
                    Accepted abstracts will be published in the conference
                    proceedings.
                  </li>
                  <li>
                    Presented papers will be published in International Journal
                    of Basic Science & Technology with DOI and well indexed.
                  </li>
                </ul>
              </AlertDescription>
            </Alert>

            <Link
              href="/register"
              className="inline-flex items-center text-[#118ab2] font-medium hover:text-[#073b4c] mt-4 group"
            >
              Head to the register page to upload your abstract
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CTA />
    </div>
  );
}
