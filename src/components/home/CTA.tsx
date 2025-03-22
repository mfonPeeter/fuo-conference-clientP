import Link from "next/link";
import { Button } from "../ui/button";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-[#073b4c] to-[#118ab2]">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Join Us at the Faculty of Science Conference
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            Be part of this groundbreaking event where science meets innovation.
            Register today to secure your spot and take advantage of early bird
            pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button
                size="lg"
                className="bg-[#06D6A0] hover:bg-[#05c090] text-[#073b4c] font-bold rounded-full px-10 py-6 text-lg"
              >
                Register Now
              </Button>
            </Link>
            <Link href="/contact-us">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20 rounded-full px-10 py-6 text-lg"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
