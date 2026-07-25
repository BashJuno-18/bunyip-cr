"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/servicios" },
  { name: "El Enfoque", href: "/el-enfoque" },
  { name: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappMessage = encodeURIComponent(
    "Hola Bunyip CR, me gustaría agendar una consulta sobre sus servicios web boutique."
  );
  const whatsappUrl = `https://wa.me/50688888888?text=${whatsappMessage}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-[#0B100D]/90 backdrop-blur-lg border-[#1E2822] py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="font-serif text-xl sm:text-2xl tracking-[0.15em] text-[#F4F5F0] group-hover:text-[#E2C044] transition-colors uppercase">
              Bunyip<span className="text-[#E2C044] font-light mx-1">·</span>CR
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#F4F5F0]/80 hover:text-[#39FF14] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#39FF14] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-transparent text-[#E2C044] border border-[#E2C044]/60 hover:bg-[#E2C044] hover:text-[#0B100D] transition-all duration-300 shadow-[0_0_15px_rgba(226,192,68,0.15)] hover:shadow-[0_0_20px_rgba(226,192,68,0.4)]"
            >
              <span>Agendar Consulta</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#F4F5F0] p-2 hover:text-[#39FF14] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-6 rounded-2xl bg-[#121814]/95 backdrop-blur-xl border border-[#1E2822] shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#F4F5F0] hover:text-[#39FF14] transition-colors py-2 border-b border-[#1E2822]/50"
              >
                {link.name}
              </Link>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold uppercase tracking-wider bg-[#E2C044] text-[#0B100D] mt-2 shadow-[0_0_20px_rgba(226,192,68,0.3)]"
            >
              <span>Agendar Consulta en WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
