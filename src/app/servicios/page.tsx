import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Zap,
  Gauge,
  Bot,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "Servicios Web Boutique | Bunyip CR",
  description:
    "Desarrollo web vanguardista de pago único, mantenimiento recurrente SEO y consultoría en integración de Inteligencia Artificial para servicios profesionales en Costa Rica.",
};

export default function ServiciosPage() {
  const whatsappUrl = (servicio: string) => {
    const msg = encodeURIComponent(
      `Hola Bunyip CR, me interesa consultar detalles sobre el servicio: ${servicio}`
    );
    return `https://wa.me/50688888888?text=${msg}`;
  };

  return (
    <div className="min-h-screen bg-[#0B100D] text-[#F4F5F0] flex flex-col font-sans selection:bg-[#39FF14]/30 selection:text-[#39FF14]">
      <Navbar />

      <main className="flex-1 pt-28 pb-16">
        {/* HERO SECTION */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden -mt-28">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a110a] via-[#0B100D] to-[#0B100D] z-0" />
          <div className="absolute inset-0 opacity-25 mix-blend-overlay pointer-events-none z-0">
            <Image
              src="/assets/Hero-image.png"
              alt="Scale bioluminescent texture background"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#E2C044]/10 blur-[130px] rounded-full pointer-events-none z-0" />
          <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center pt-32">
            <div className="font-serif italic text-lg sm:text-xl text-[#E2C044] mb-6 tracking-wider opacity-90">
              Soluciones Digitales de Alta Gama
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-[76px] text-[#F4F5F0] leading-[1.15] tracking-tight mb-8 px-4">
              Servicios Diseñados para{" "}
              <span className="italic text-[#E2C044]">Superar</span>
              <br className="hidden sm:block" /> a la Competencia
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[#F4F5F0]/70 max-w-2xl mx-auto leading-relaxed mb-12 font-sans font-light px-4">
              Sin plantillas genéricas. Cada línea de código y cada micro-animación es construida a la medida para proyectar autoridad inmediata.
            </p>
          </div>
        </section>

        {/* SERVICIO 1: DESARROLLO WEB VANGUARDISTA */}
        <section className="border-t border-[#F4F5F0]/10 py-24 sm:py-32 overflow-hidden relative">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#E2C044]/5 blur-[120px] rounded-full pointer-events-none z-0" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
            <div className="space-y-8">
              <div className="font-serif italic text-[#E2C044] text-4xl opacity-50">01</div>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F4F5F0] leading-tight tracking-tight uppercase">
                Desarrollo Web Vanguardista
              </h2>
              <p className="text-base sm:text-lg text-[#F4F5F0]/70 font-light leading-relaxed">
                Plataforma multipágina desarrollada con la última arquitectura de Next.js. Ideal para firmas profesionales que buscan eliminar la dependencia de alquileres de software y obtener un activo digital propio de por vida.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pt-2">
                {[
                  "Pago único sin mensualidades forzosas",
                  "Carga ultrarrápida (<0.8 segundos)",
                  "Diseño Adaptativo con Dark Mode por defecto",
                  "Embudo directo a WhatsApp & Correo",
                  "Tipografía editorial premium integrada",
                  "Cumplimiento 100/100 Lighthouse SEO",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-[#F4F5F0]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#E2C044] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-6">
                <a
                  href={whatsappUrl("Desarrollo Web Vanguardista")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-10 py-4 bg-[#F4F5F0] text-[#0B100D] font-sans font-bold text-xs sm:text-sm tracking-[0.2em] uppercase rounded-full hover:bg-[#E2C044] transition-colors duration-300"
                >
                  Consultar Cotización Desarrollo
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] w-full overflow-hidden shadow-2xl">
              <Image
                src="/assets/stock-img-1.png"
                alt="Desarrollo Web Vanguardista"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105 filter contrast-125"
              />
            </div>
          </div>
        </section>

        {/* SERVICIO 2: MANTENIMIENTO & EVOLUCIÓN */}
        <section className="border-t border-[#F4F5F0]/10 py-24 sm:py-32 overflow-hidden relative">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#E2C044]/5 blur-[120px] rounded-full pointer-events-none z-0" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] w-full overflow-hidden shadow-2xl lg:order-1">
              <Image
                src="/assets/stock-image-2.png"
                alt="Mantenimiento y Evolucion SEO"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105 filter contrast-125"
              />
            </div>
            <div className="space-y-8 lg:order-2">
              <div className="font-serif italic text-[#E2C044] text-4xl opacity-50">02</div>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F4F5F0] leading-tight tracking-tight uppercase">
                Mantenimiento & Evolución SEO
              </h2>
              <p className="text-base sm:text-lg text-[#F4F5F0]/70 font-light leading-relaxed">
                Asegura que tu plataforma se mantenga invulnerable, actualizada con nuevos contenidos y posicionada en los primeros resultados de búsqueda ejecutiva.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pt-2">
                {[
                  "Alojamiento Global en Vercel Edge Server",
                  "Monitoreo 24/7 de tiempo de actividad",
                  "Actualizaciones periódicas de contenido",
                  "Optimización continua de palabras clave",
                  "Respaldos automatizados de seguridad",
                  "Informes mensuales de tráfico ejecutivo",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-[#F4F5F0]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#E2C044] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-6">
                <a
                  href={whatsappUrl("Mantenimiento y Evolucion SEO")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-10 py-4 bg-transparent text-[#F4F5F0] font-sans font-bold text-xs sm:text-sm tracking-[0.2em] uppercase rounded-full border border-[#F4F5F0]/30 hover:border-[#E2C044] hover:text-[#E2C044] transition-colors duration-300"
                >
                  Consultar Planes de Mantenimiento
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICIO 3: CONSULTORÍA MODERNIZACIÓN IA */}
        <section className="border-t border-[#F4F5F0]/10 py-24 sm:py-32 overflow-hidden relative">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#E2C044]/5 blur-[120px] rounded-full pointer-events-none z-0" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
            <div className="space-y-8">
              <div className="font-serif italic text-[#E2C044] text-4xl opacity-50">03</div>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F4F5F0] leading-tight tracking-tight uppercase">
                Consultoría de Modernización IA
              </h2>
              <p className="text-base sm:text-lg text-[#F4F5F0]/70 font-light leading-relaxed">
                Integramos modelos de Inteligencia Artificial directamente en tu ecosistema web para calificar prospectos automáticamente, responder consultas 24/7 y automatizar flujos operativos.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pt-2">
                {[
                  "Agentes conversacionales calificados para firmas",
                  "Automatización de captura de prospectos",
                  "Integración con WhatsApp Business API",
                  "Formularios inteligentes adaptativos",
                  "Integración con CRMs corporativos",
                  "Estrategia de transformación digital a medida",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-[#F4F5F0]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#E2C044] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-6">
                <a
                  href={whatsappUrl("Consultoria IA")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-10 py-4 bg-[#F4F5F0] text-[#0B100D] font-sans font-bold text-xs sm:text-sm tracking-[0.2em] uppercase rounded-full hover:bg-[#E2C044] transition-colors duration-300"
                >
                  Agendar Sesión de Consultoría IA
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] w-full overflow-hidden shadow-2xl">
              <Image
                src="/assets/stock-image-4.png"
                alt="Consultoria Inteligencia Artificial Bunyip"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105 filter contrast-125"
              />
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-32 sm:py-48 text-center relative overflow-hidden border-t border-[#F4F5F0]/10">
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a110a]/40 to-transparent z-0" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#F4F5F0] leading-tight tracking-tight uppercase">
              ¿Listo para la Elevación Digital de Tu Firma?
            </h2>
            <p className="text-base sm:text-xl text-[#F4F5F0]/70 font-light max-w-2xl mx-auto leading-relaxed">
              Conversa directamente con nosotros en WhatsApp para una evaluación sin compromiso de tu presencia digital.
            </p>
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href={whatsappUrl("servicios")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 bg-[#F4F5F0] text-[#0B100D] font-sans font-bold text-xs sm:text-sm tracking-[0.2em] uppercase rounded-full hover:bg-[#E2C044] transition-colors duration-300 shadow-[0_0_30px_rgba(244,245,240,0.1)]"
              >
                Hablemos por WhatsApp
              </a>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-10 py-4 bg-transparent text-[#F4F5F0] font-sans font-bold text-xs sm:text-sm tracking-[0.2em] uppercase rounded-full border border-[#F4F5F0]/30 hover:border-[#E2C044] hover:text-[#E2C044] transition-colors duration-300"
              >
                Enviar Formulario
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
