import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MessageSquare, MapPin, Mail } from "lucide-react";

export default function Footer() {
  const whatsappMessage = encodeURIComponent(
    "Hola Bunyip CR, me gustaría agendar una consulta sobre sus servicios web boutique."
  );
  const whatsappUrl = `https://wa.me/50683773255?text=${whatsappMessage}`;

  return (
    <footer className="relative overflow-hidden bg-[#0B100D] border-t border-[#F4F5F0]/10">
      <div className="text-[#F4F5F0] pt-24 pb-12 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-24">
            {/* Col 1: Brand Info */}
            <div className="space-y-6 md:col-span-4">
              <Link href="/" className="inline-block group">
                <span className="font-serif text-2xl tracking-[0.15em] text-[#F4F5F0] group-hover:text-[#E2C044] transition-colors uppercase">
                  Bunyip<span className="text-[#E2C044] font-light mx-1">·</span>CR
                </span>
              </Link>
              <p className="text-sm text-[#F4F5F0]/60 leading-relaxed font-light max-w-sm">
                Plataformas web multipágina ultra-rápidas, personalizadas y enfocadas en conversión ejecutiva de alto nivel en Costa Rica.
              </p>
              <div className="flex items-center gap-3 text-xs text-[#E2C044] font-serif italic tracking-wide pt-2">
                <MapPin className="w-4 h-4 opacity-70" />
                <span>San José, Costa Rica</span>
              </div>
            </div>

            {/* Col 2: Servicios */}
            <div className="md:col-span-2">
              <h4 className="font-serif italic text-base text-[#E2C044] mb-6 tracking-wide">
                Servicios
              </h4>
              <ul className="space-y-4 text-sm font-sans font-light">
                <li>
                  <Link href="/servicios" className="text-[#F4F5F0]/60 hover:text-[#F4F5F0] transition-colors duration-300">
                    Desarrollo Web
                  </Link>
                </li>
                <li>
                  <Link href="/servicios" className="text-[#F4F5F0]/60 hover:text-[#F4F5F0] transition-colors duration-300">
                    Mantenimiento & SEO
                  </Link>
                </li>
                <li>
                  <Link href="/servicios" className="text-[#F4F5F0]/60 hover:text-[#F4F5F0] transition-colors duration-300">
                    Consultoría IA
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Estudio */}
            <div className="md:col-span-2">
              <h4 className="font-serif italic text-base text-[#E2C044] mb-6 tracking-wide">
                Estudio
              </h4>
              <ul className="space-y-4 text-sm font-sans font-light">
                <li>
                  <Link href="/" className="text-[#F4F5F0]/60 hover:text-[#F4F5F0] transition-colors duration-300">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/el-enfoque" className="text-[#F4F5F0]/60 hover:text-[#F4F5F0] transition-colors duration-300">
                    El Enfoque
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="text-[#F4F5F0]/60 hover:text-[#F4F5F0] transition-colors duration-300">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Contacto Rápido */}
            <div className="md:col-span-4 space-y-6">
              <h4 className="font-serif italic text-base text-[#E2C044] tracking-wide">
                Contacto Directo
              </h4>
              <p className="text-sm text-[#F4F5F0]/60 leading-relaxed font-light">
                Atención personalizada para firmas legales, consultorías y servicios profesionales corporativos.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:bunyipai@gmail.com"
                  className="inline-flex items-center gap-3 text-sm text-[#F4F5F0]/80 hover:text-[#E2C044] transition-colors duration-300 font-light"
                >
                  <Mail className="w-4 h-4 text-[#E2C044]" />
                  <span>bunyipai@gmail.com</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] bg-transparent text-[#F4F5F0] border border-[#F4F5F0]/30 hover:border-[#E2C044] hover:text-[#E2C044] transition-all duration-300 w-fit"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Directo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom copyright */}
          <div className="pt-8 border-t border-[#F4F5F0]/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F4F5F0]/40 font-light gap-4">
            <p>© {new Date().getFullYear()} Bunyip CR. Todos los derechos reservados.</p>
            <p className="flex items-center gap-2">
              <span>Diseñado y construido en</span>
              <span className="text-[#F4F5F0]/80">Costa Rica</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
