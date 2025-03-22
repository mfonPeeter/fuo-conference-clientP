"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "ABSTRACT", href: "/abstract" },
  { name: "CONTACT", href: "/contact-us" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-3"
          : "bg-gradient-to-r from-[#053b4e]/95 via-[#065a6f]/85 to-[#053b4e]/80 py-5"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div
              className={cn(
                "relative h-12 w-12 mr-3 rounded-xl overflow-hidden transition-all duration-300 group-hover:shadow-md",
                scrolled ? "border border-gray-100" : ""
              )}
            >
              <Image
                src="/images/fuo-logo.png"
                alt="Federal University Otuoke Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-all duration-300 rounded-full",
                  pathname === link.href
                    ? "bg-[#118ab2] text-white" // Active link style
                    : scrolled
                    ? "text-[#073b4c] hover:bg-[#f8fafc]"
                    : "text-white hover:bg-white/20 hover:backdrop-blur-sm"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Register Button */}
          <Link href="/register">
            <Button
              className={cn(
                "hidden md:flex rounded-full transition-all duration-300",
                scrolled
                  ? "bg-[#06D6A0] hover:bg-[#05c090] text-[#073b4c]"
                  : "bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20"
              )}
            >
              Register
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "md:hidden",
              scrolled
                ? "text-[#073b4c] hover:bg-[#f8fafc]"
                : "text-white hover:bg-white/10"
            )}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg absolute top-full left-0 right-0 border-t border-gray-100">
          <nav className="flex flex-col space-y-0 max-h-[80vh] overflow-auto">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-4 py-3 font-medium border-b border-gray-100",
                  pathname === link.href
                    ? "bg-[#118ab2] text-white" // Active link style
                    : "text-[#073b4c] hover:bg-[#f8fafc]"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="p-4">
              <Link href="/register">
                <Button className="w-full bg-[#06D6A0] hover:bg-[#05c090] text-[#073b4c] rounded-full">
                  Register
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
