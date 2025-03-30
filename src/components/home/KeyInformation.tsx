import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Calendar, MapPin, Mail, Phone } from "lucide-react";

const importantDates = [
  {
    heading: "Abstract Submission",
    timeframe: "July 30, 2025",
  },
  {
    heading: "Early Bird Registration",
    timeframe: "May 31, 2025",
  },
  {
    heading: "Registration Deadline",
    timeframe: "August 15, 2025",
  },
  {
    heading: "Conference Dates",
    timeframe: "September 2-4, 2025",
  },
];

const KeyInformation = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 bg-[#118ab2]/10 text-[#118ab2] px-4 py-1.5 rounded-full text-sm font-medium">
            Conference Details
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#073b4c] mb-4 leading-tight">
            Key Information
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Everything you need to know about the Faculty of Science Conference
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          <div className="bg-white p-4 sm:p-8 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all">
            <div className="w-16 h-16 bg-[#118ab2]/10 rounded-2xl flex items-center justify-center mb-6">
              <Calendar className="h-8 w-8 text-[#118ab2]" />
            </div>
            <h3 className="text-xl font-bold text-[#073b4c] mb-6">
              Important Dates
            </h3>
            <ul className="space-y-4 text-gray-600">
              {importantDates.map(({ heading, timeframe }) => (
                <li
                  key={heading}
                  className="flex justify-between items-center pb-3 border-b border-gray-100"
                >
                  <span>{heading}:</span>
                  <span className="font-medium text-[#118ab2]">
                    {timeframe}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-4 sm:p-8 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all">
            <div className="w-16 h-16 bg-[#118ab2]/10 rounded-2xl flex items-center justify-center mb-6">
              <MapPin className="h-8 w-8 text-[#118ab2]" />
            </div>
            <h3 className="text-xl font-bold text-[#073b4c] mb-6">Venue</h3>
            <div className="mb-6 rounded-2xl overflow-hidden h-48 relative">
              <Image
                src="/images/address.png"
                alt="Conference venue"
                fill
                className="object-fit"
              />
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                The conference will be held at the Faculty of Science Complex,
                Federal University Otuoke, Bayelsa State, Nigeria.
              </p>
              <p>
                School of Post Graduate Conference hall and the Postgraduate
                (PG) lecture halls for parallel sessions
              </p>
              <p>
                Virtual participants will receive access links prior to the
                event.
              </p>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-8 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all">
            <div className="w-16 h-16 bg-[#118ab2]/10 rounded-2xl flex items-center justify-center mb-6">
              <MessageCircle className="h-8 w-8 text-[#118ab2]" />
            </div>
            <h3 className="text-xl font-bold text-[#073b4c] mb-6">
              Contact Us
            </h3>
            <p className="text-gray-600 mb-6">
              Have questions about the conference? Reach out to our organizing
              committee.
            </p>
            <div className="space-y-4">
              <div className="flex flex-col items-start lg:flex-col xl:flex-row p-3 bg-[#f8fafc] rounded-xl">
                <div className="bg-[#118ab2]/10 p-2 rounded-lg mr-3 mb-1 xl:mb-0">
                  <MapPin className="h-5 w-5 text-[#118ab2]" />
                </div>
                <p className="text-gray-600">
                  Faculty of Science, Federal University Otuoke, Bayelsa State,
                  Nigeria
                </p>
              </div>
              <div className="flex flex-col items-start lg:flex-col xl:flex-row xl:items-center p-3 bg-[#f8fafc] rounded-xl">
                <div className="bg-[#118ab2]/10 p-2 rounded-lg mr-3 mb-1 xl:mb-0">
                  <Mail className="h-5 w-5 text-[#118ab2]" />
                </div>
                <Link
                  href="mailto:science.conf@fuotuoke.edu.ng"
                  className="text-gray-600"
                >
                  science.conf@fuotuoke.edu.ng
                </Link>
              </div>
              <div className="flex flex-col items-start lg:flex-col xl:flex-row xl:items-center p-3 bg-[#f8fafc] rounded-xl">
                <div className="bg-[#118ab2]/10 p-2 rounded-lg mr-3 mb-1 xl:mb-0">
                  <Phone className="h-5 w-5 text-[#118ab2]" />
                </div>
                <Link href="tel:+2348035232412" className="text-gray-600">
                  +234 803 523 2412
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyInformation;
