import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Abstract", href: "/abstract" },
  { name: "Contact", href: "/contact-us" },
  { name: "Register", href: "/register" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[rgb(7,59,76)] to-[#052a36] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center mb-6">
              <div className="relative h-12 w-12 mr-3 bg-white/10 rounded-xl p-2">
                <Image
                  src="/images/fuo-logo.png"
                  alt="Federal University Otuoke Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold">ACS FUO Conference</h3>
            </div>
            <p className="text-white/70 leading-relaxed">
              The premier scientific conference of the American Chemical
              Society, Federal University Otuoke Chapter, bringing together
              researchers and scholars from various disciplines.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(({ name, href }) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="text-white/70 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="bg-white/10 p-1 rounded mr-2 text-xs group-hover:bg-[#06D6A0] group-hover:text-[#073b4c] transition-colors">
                      →
                    </span>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-white/10 p-2.5 rounded-xl mr-3 mt-0.5">
                  <MapPin className="h-5 w-5 text-[#FFD166]" />
                </div>
                <span className="text-white/70">
                  Department of Chemistry, Federal University Otuoke, Bayelsa
                  State, Nigeria
                </span>
              </li>
              <li className="flex items-center">
                <div className="bg-white/10 p-2.5 rounded-xl mr-3">
                  <Mail className="h-5 w-5 text-[#FFD166]" />
                </div>
                <Link
                  href="mailto:hod.chemistry@fuotuoke.edu.ng"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  hod.chemistry@fuotuoke.edu.ng
                </Link>
              </li>
              <li className="flex items-center">
                <div className="bg-white/10 p-2.5 rounded-xl mr-3">
                  <Phone className="h-5 w-5 text-[#FFD166]" />
                </div>
                <Link
                  href="tel:+2348035232412"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  +234 803 523 2412
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-8">
        <div className="container mx-auto px-4 text-center text-white/50">
          <p>
            &copy; {new Date().getFullYear()} American Chemical Society, Federal
            University Otuoke Chapter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
