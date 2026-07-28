import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  ArrowUpRight,
  Zap,
  ShieldCheck,
  Sparkles,
  Bot,
  Gauge,
  Lock,
  ChevronRight,
  Award,
  CheckCircle2,
} from "lucide-react";

export default function Home() {
  const whatsappMessage = encodeURIComponent(
    "Hola Bunyip CR, me gustaría solicitar una propuesta para mi sitio web boutique."
  );
  const whatsappUrl = `https://wa.me/50683773255?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-[#0B100D] text-[#F4F5F0] flex flex-col font-sans selection:bg-[#39FF14]/30 selection:text-[#39FF14]">
      {/* Header / Navbar */}
      <Navbar />

      <main className="flex-1 pt-28 pb-16">
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-28">
          {/* Background Texture & Gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a110a] via-[#0B100D] to-[#0B100D] z-0" />
          <div className="absolute inset-0 opacity-25 mix-blend-overlay pointer-events-none z-0">
            <Image
              src="/assets/Hero-image.png"
              alt="Scale bioluminescent texture background"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#E2C044]/10 blur-[130px] rounded-full pointer-events-none z-0" />

          {/* Hero Content */}
          <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center pt-32">
            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-[76px] text-[#F4F5F0] leading-[1.15] tracking-tight mb-8 px-4">
              PLATAFORMAS WEB <br className="hidden sm:block" /> DE ALTA GAMA <br className="hidden sm:block" />
              <span className="text-[#F4F5F0]/80 text-2xl sm:text-4xl lg:text-5xl tracking-normal mt-4 block">& SERVICIOS EJECUTIVOS</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-[#F4F5F0]/70 max-w-2xl mx-auto leading-relaxed mb-12 font-sans font-light px-4">
              Transformamos arquitecturas digitales en plataformas ultra-rápidas y personalizadas, diseñadas para firmas de abogados, médicos y consultores.
            </p>
            
            {/* CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#F4F5F0] text-[#0B100D] font-sans font-bold text-xs sm:text-sm tracking-[0.2em] uppercase rounded-full hover:bg-[#E2C044] transition-colors duration-300"
            >
              Iniciar un Proyecto
            </a>
          </div>
        </section>

        {/* VALOR Y SECTORES DE ALTO VALOR */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="font-serif italic text-[#E2C044] tracking-wide text-lg sm:text-xl">
              Diseño Estratégico Especializado
            </h2>
            <h3 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F4F5F0] leading-tight tracking-tight uppercase">
              Para Profesionales que Exigen Excelencia
            </h3>
            <p className="text-base sm:text-lg text-[#F4F5F0]/70 font-light max-w-2xl mx-auto leading-relaxed">
              Un sitio web corporativo no debe ser solo un folleto digital. Es la primera impresión de tu firma, la prueba irrefutable de tu autoridad y prestigio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {[
              {
                title: "Firmas de Abogados",
                desc: "Transmite autoridad y prestigio con plataformas elegantes y formularios seguros.",
              },
              {
                title: "Clínicas & Médicos",
                desc: "Experiencia impecable con integración directa para reserva de citas.",
              },
              {
                title: "Estudios de Arquitectura",
                desc: "Galerías visuales ultra-rápidas para presentar portafolios sin perder calidad.",
              },
              {
                title: "Consultores Financieros",
                desc: "Arquitectura limpia orientada a captar clientes corporativos de alto valor.",
              },
              {
                title: "Restaurantes & Gastronomía",
                desc: "Menús digitales interactivos y sistemas de reserva que cautivan comensales desde el primer clic.",
              },
              {
                title: "Salones de Belleza & Estética",
                desc: "Escaparates visuales de alto impacto con agendamiento integrado para atraer clientes exclusivos.",
              },
              {
                title: "Negocios & Emprendimientos",
                desc: "Presencia digital profesional llave en mano para todo rubro que busque calidad boutique.",
              },
            ].map((item, idx) => (
              <div key={idx} className="group border-t border-[#F4F5F0]/20 pt-6">
                <h4 className="font-serif text-xl sm:text-2xl text-[#F4F5F0] mb-4 group-hover:text-[#E2C044] transition-colors uppercase tracking-wide">
                  {item.title}
                </h4>
                <p className="text-sm text-[#F4F5F0]/60 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* RESUMEN DE SERVICIOS */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-32 border-t border-[#F4F5F0]/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="font-serif italic text-[#E2C044] tracking-wide text-lg sm:text-xl block mb-4">
                Nuestra Oferta Boutique
              </span>
              <h3 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F4F5F0] leading-tight tracking-tight uppercase">
                Soluciones Digitales Sin Plantillas
              </h3>
            </div>
            <Link
              href="/servicios"
              className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-[#F4F5F0] hover:text-[#E2C044] transition-colors pb-2 border-b border-[#E2C044]/50"
            >
              <span>Ver Todos los Servicios</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Desarrollo Web Vanguardista",
                desc: "Desarrollo personalizado en Next.js con arquitectura multipágina. Pago único de alta gama sin alquiler mensual.",
                tag: "Pago Único",
              },
              {
                title: "Mantenimiento & Evolución",
                desc: "Alojamiento ultra-rápido en servidores Edge de Vercel, soporte continuo, actualización y SEO técnico.",
                tag: "Planes Mensuales",
              },
              {
                title: "Consultoría Modernización IA",
                desc: "Integración de agentes de IA, automatización de captura de prospectos y herramientas directas.",
                tag: "A Medida",
              },
            ].map((service, idx) => (
              <div key={idx} className="group relative overflow-hidden">
                <div className="mb-6 font-serif italic text-[#E2C044] text-4xl opacity-50">0{idx + 1}</div>
                <h4 className="font-serif text-2xl text-[#F4F5F0] mb-4 uppercase tracking-wide group-hover:text-[#E2C044] transition-colors">
                  {service.title}
                </h4>
                <p className="text-sm text-[#F4F5F0]/60 leading-relaxed font-light mb-8">
                  {service.desc}
                </p>
                <div className="flex items-center gap-3 text-xs font-bold text-[#E2C044] uppercase tracking-wider">
                  <span>{service.tag}</span>
                  <div className="w-8 h-[1px] bg-[#E2C044]/50 group-hover:w-16 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTOR DESTACADO / SECCIÓN VISUAL */}
        <section className="py-24 sm:py-32 border-t border-[#F4F5F0]/10 relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#E2C044]/5 blur-[120px] rounded-full pointer-events-none z-0" />
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] w-full overflow-hidden shadow-2xl">
              <Image
                src="/assets/office.png"
                alt="Estudio Bunyip CR Executive Office"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105 filter contrast-125"
              />
            </div>
            
            <div className="space-y-8">
              <span className="font-serif italic text-[#E2C044] tracking-wide text-lg sm:text-xl">
                El Enfoque Solopreneur
              </span>
              <h3 className="font-serif text-3xl sm:text-5xl text-[#F4F5F0] leading-tight tracking-tight uppercase">
                Trato Directo con el Arquitecto Principal.
              </h3>
              <p className="text-base sm:text-lg text-[#F4F5F0]/70 font-light leading-relaxed">
                A diferencia de las agencias tradicionales con procesos lentos y múltiples capas burocráticas, en Bunyip CR trabajas cara a cara con el desarrollador del software. 
              </p>
              <p className="text-base sm:text-lg text-[#F4F5F0]/70 font-light leading-relaxed">
                Esto garantiza entregas en tiempo récord, comunicación sin ruidos y resultados de máximo impacto visual. Tu visión llega directa al código.
              </p>
              <div className="pt-6">
                <Link
                  href="/el-enfoque"
                  className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-[#0B100D] bg-[#F4F5F0] px-8 py-4 rounded-full hover:bg-[#E2C044] transition-colors duration-300"
                >
                  <span>Conoce Nuestra Filosofía</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL DE CONVERSIÓN */}
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
                href={whatsappUrl}
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

      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
}
