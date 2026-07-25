import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MessageSquare, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const whatsappMessage = encodeURIComponent(
    "Hola Bunyip CR, me gustaría agendar una consulta sobre sus servicios web boutique."
  );
  const whatsappUrl = `https://wa.me/50688888888?text=${whatsappMessage}`;

  return (
    <footer className="bg-[#0B100D] border-t border-[#1E2822] text-[#F4F5F0] pt-16 pb-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-[#39FF14]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-full border border-[#E2C044]/30 bg-[#121814] p-1 flex items-center justify-center">
                <Image
                  src="/assets/main-logo.png"
                  alt="Bunyip CR Logo"
                  width={36}
                  height={36}
                  className="object-contain filter invert brightness-125 contrast-125"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg tracking-wider text-[#F4F5F0]">
                  BUNYIP <span className="text-[#39FF14]">CR</span>
                </span>
                <span className="text-[10px] font-sans text-[#A1AAA2] tracking-widest uppercase -mt-1">
                  Estudio Web Boutique
                </span>
              </div>
            </Link>
            <p className="text-xs text-[#A1AAA2] leading-relaxed">
              Plataformas web multipágina ultra-rápidas, personalizadas y enfocadas en conversión ejecutiva de alto nivel en Costa Rica.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#E2C044]">
              <MapPin className="w-4 h-4 text-[#39FF14]" />
              <span>San José, Costa Rica</span>
            </div>
          </div>

          {/* Col 2: Servicios */}
          <div>
            <h4 className="font-heading text-sm font-semibold tracking-wider text-[#E2C044] uppercase mb-4">
              Servicios
            </h4>
            <ul className="space-y-2.5 text-xs font-sans">
              <li>
                <Link href="/servicios" className="text-[#A1AAA2] hover:text-[#39FF14] transition-colors">
                  Desarrollo Web Vanguardista
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-[#A1AAA2] hover:text-[#39FF14] transition-colors">
                  Mantenimiento & Evolución SEO
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-[#A1AAA2] hover:text-[#39FF14] transition-colors">
                  Consultoría de Modernización IA
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-[#A1AAA2] hover:text-[#39FF14] transition-colors">
                  Optimizaciones de Carga & SEO
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Navegación */}
          <div>
            <h4 className="font-heading text-sm font-semibold tracking-wider text-[#E2C044] uppercase mb-4">
              Estudio
            </h4>
            <ul className="space-y-2.5 text-xs font-sans">
              <li>
                <Link href="/" className="text-[#A1AAA2] hover:text-[#39FF14] transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/el-enfoque" className="text-[#A1AAA2] hover:text-[#39FF14] transition-colors">
                  El Enfoque Boutique
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-[#A1AAA2] hover:text-[#39FF14] transition-colors">
                  Contacto Directo
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacto Rápido */}
          <div className="space-y-4">
            <h4 className="font-heading text-sm font-semibold tracking-wider text-[#E2C044] uppercase mb-4">
              Contacto Directo
            </h4>
            <p className="text-xs text-[#A1AAA2]">
              Atención personalizada para firmas legales, consultorías y servicios profesionales corporativos.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#121814] text-[#39FF14] border border-[#39FF14]/40 hover:bg-[#39FF14] hover:text-[#0B100D] transition-all duration-300 shadow-[0_0_15px_rgba(57,255,20,0.15)]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Embudo WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-[#1E2822]/60 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A1AAA2] gap-4">
          <p>© {new Date().getFullYear()} Bunyip CR. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1 font-mono text-[11px]">
            <span>Hecho con</span>
            <span className="text-[#E2C044] italic font-serif">Vibe Coding</span>
            <span>en Costa Rica 🇨🇷</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
