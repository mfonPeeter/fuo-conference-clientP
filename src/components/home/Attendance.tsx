import Link from "next/link";
import { Button } from "../ui/button";
import { Coins } from "lucide-react";

const registrationFees = [
  { type: "Post Graduate Student", fee: "NGN 10,000" },
  { type: "Corporate Body", fee: "NGN 50,000" },
  { type: "Regular", fee: "NGN 30,000" },
  { type: "Undergraduates", fee: "NGN 5,000" },
  { type: "International Registration", fee: "$100" },
];

const Attendance = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-[#073b4c] to-[#118ab2]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4 bg-white/10 text-white px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-md">
              Who Should Attend
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#FFD166] mb-6 leading-tight">
              Attendance
            </h2>
            <div className="text-white space-y-4">
              <p className="text-lg leading-relaxed">
                Scholars are welcome from interdisciplinary institutions and
                fields that relate to science and technology. We invite:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                {[
                  " Undergraduate students",
                  " Graduate students",
                  "Researchers",
                  "Academics",
                  "Industrialists",
                  "Policy makers",
                  "NGOs",
                  "Governmental institutions",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center bg-white/10 backdrop-blur-md rounded-xl p-3"
                  >
                    <div className="h-2 w-2 rounded-full bg-[#FFD166] mr-2" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-white/10 backdrop-blur-md p-6 w-full rounded-2xl mt-8 border border-white/10">
                <p className="text-[#FFD166] font-medium mb-2">
                  Early bird (Ends 31st Jan. 2025)
                </p>
                <p className="text-[#EF476F] font-medium">
                  Late Registration: Attracts extra NGN5,000
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-4 sm:p-8 border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)]">
            <h3 className="text-2xl font-bold text-white mb-8">
              Registration Fees
            </h3>

            <div className="space-y-6">
              {registrationFees.map(({ type, fee }) => (
                <div
                  key={type}
                  className="flex items-center gap-5 bg-white/5 p-4 rounded-2xl hover:bg-white/10 transition-colors"
                >
                  <div className="bg-[#FFD166] p-4 rounded-xl flex-shrink-0 shadow-lg">
                    <Coins className="size-6 text-white" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-white/80 text-sm">{type}</p>
                    <p className="text-[#FFD166] font-bold text-xl">{fee}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link href="/register">
                <Button
                  size="lg"
                  className="w-full bg-[#06D6A0] hover:bg-[#05c090] text-[#073b4c] font-bold rounded-xl py-6 text-base"
                >
                  REGISTER NOW
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Attendance;
