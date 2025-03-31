import Link from "next/link";
import { Button } from "../ui/button";

const registrationFees = [
  {
    type: "Undergraduate",
    fees: {
      earlyBird: { nigerian: "NGN 5,000", international: "$10" },
      advanced: { nigerian: "NGN 7,500", international: "$15" },
      late: { nigerian: "NGN 10,000", international: "$30" },
    },
  },
  {
    type: "Postgraduate",
    fees: {
      earlyBird: { nigerian: "NGN 10,000", international: "$30" },
      advanced: { nigerian: "NGN 15,000", international: "$25" },
      late: { nigerian: "NGN 15,000", international: "$50" },
    },
  },
  {
    type: "Retirees",
    fees: {
      earlyBird: { nigerian: "NGN 15,000", international: "$50" },
      advanced: { nigerian: "NGN 20,000", international: "$60" },
      late: { nigerian: "NGN 30,000", international: "$70" },
    },
  },
  {
    type: "All others",
    fees: {
      earlyBird: { nigerian: "NGN 30,000", international: "$100" },
      advanced: { nigerian: "NGN 35,000", international: "$110" },
      late: { nigerian: "NGN 40,000", international: "$120" },
    },
  },
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
                fields that relate to green chemistry, artificial intelligence
                and sustainability. We invite:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                {[
                  "Undergraduate students",
                  "Graduate students",
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
                  Early bird (Ends May 2025)
                </p>
                <p className="text-[#EF476F] font-medium">
                  Late Registration: July 2025 onwards
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-4 sm:p-8 border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)]">
            <h3 className="text-2xl font-bold text-white mb-8">
              Registration Fees
            </h3>

            <div className="space-y-6">
              {registrationFees.map((category) => (
                <div
                  key={category.type}
                  className="bg-white/5 p-4 rounded-2xl hover:bg-white/10 transition-colors"
                >
                  <div className="bg-[#FFD166] p-4 rounded-xl mb-4">
                    <h4 className="text-[#073b4c] font-bold text-lg">
                      {category.type}
                    </h4>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-white/80 text-sm mb-2">
                        Early Bird (until May)
                      </p>
                      <div className="flex justify-between">
                        <p className="text-[#FFD166]">
                          Nigerian: {category.fees.earlyBird.nigerian}
                        </p>
                        <p className="text-[#FFD166]">
                          International: {category.fees.earlyBird.international}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-white/80 text-sm mb-2">
                        Advanced (until July)
                      </p>
                      <div className="flex justify-between">
                        <p className="text-[#FFD166]">
                          Nigerian: {category.fees.advanced.nigerian}
                        </p>
                        <p className="text-[#FFD166]">
                          International: {category.fees.advanced.international}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-white/80 text-sm mb-2">
                        Late Registration
                      </p>
                      <div className="flex justify-between">
                        <p className="text-[#FFD166]">
                          Nigerian: {category.fees.late.nigerian}
                        </p>
                        <p className="text-[#FFD166]">
                          International: {category.fees.late.international}
                        </p>
                      </div>
                    </div>
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
