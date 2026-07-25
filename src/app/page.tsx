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
  const whatsappUrl = `https://wa.me/50688888888?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-[#0B100D] text-[#F4F5F0] flex flex-col font-sans selection:bg-[#39FF14]/30 selection:text-[#39FF14]">
      {/* Header / Navbar */}
      <Navbar />

      <main className="flex-1 pt-28 pb-16">
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20 relative">
          {/* Ambient Glows */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#39FF14]/10 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#E2C044]/10 blur-[140px] rounded-full pointer-events-none" />

          {/* Hero Main Card */}
          <div className="relative rounded-3xl border border-[#1E2822] bg-[#121814]/60 backdrop-blur-xl p-8 sm:p-12 lg:p-16 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
            {/* Subtle background texture overlay */}
            <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none">
              <Image
                src="/assets/stock-image-3.png"
                alt="Scale bioluminescent texture background"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              {/* Left Column: Copy (7 cols) */}
              <div className="lg:col-span-7 space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B100D]/80 border border-[#E2C044]/40 text-xs font-semibold text-[#E2C044] tracking-wider uppercase shadow-[0_0_15px_rgba(226,192,68,0.1)]">
                  <Sparkles className="w-3.5 h-3.5 text-[#39FF14]" />
                  <span>Estudio Web Boutique • Costa Rica</span>
                </div>

                {/* Main Headline */}
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F4F5F0] leading-[1.15] tracking-tight">
                  Plataformas Web de{" "}
                  <span className="font-serif italic font-normal text-[#E2C044] underline decoration-[#39FF14]/40 underline-offset-8">
                    Alta Gama
                  </span>{" "}
                  para Servicios Ejecutivos
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg text-[#A1AAA2] max-w-2xl leading-relaxed">
                  Transformamos sitios web genéricos en activos digitales ultra-rápidos, seguros y personalizados. Diseñados para firmas de abogados, médicos, arquitectos y consultores corporativos.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-heading font-semibold text-sm uppercase tracking-wider bg-[#39FF14] text-[#0B100D] hover:bg-[#39FF14]/90 transition-all duration-300 shadow-[0_0_25px_rgba(57,255,20,0.35)] hover:shadow-[0_0_35px_rgba(57,255,20,0.6)] hover:scale-[1.02]"
                  >
                    <span>Iniciar Proyecto en WhatsApp</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </a>

                  <Link
                    href="/servicios"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-heading font-semibold text-sm uppercase tracking-wider bg-[#0B100D]/80 text-[#F4F5F0] border border-[#1E2822] hover:border-[#E2C044]/60 hover:text-[#E2C044] transition-all duration-300"
                  >
                    <span>Explorar Servicios</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Highlights list */}
                <div className="pt-6 border-t border-[#1E2822]/80 flex flex-wrap gap-6 text-xs text-[#A1AAA2]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#39FF14]" />
                    <span>Pago Único Sin Renta</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#39FF14]" />
                    <span>Optimización 100/100 SEO</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#39FF14]" />
                    <span>Atención Boutique Directa</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Graphic & Metrics (5 cols) */}
              <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
                {/* Hero Creature Visual */}
                <div className="relative w-full aspect-square max-w-md rounded-2xl overflow-hidden border border-[#1E2822] shadow-[0_0_30px_rgba(0,0,0,0.6)] group">
                  <Image
                    src="/assets/Hero-image.png"
                    alt="Bunyip Misticismo Tecnológico"
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B100D] via-transparent to-transparent opacity-60" />
                </div>

                {/* 3 Floating Glassmorphism Metrics Cards */}
                {/* Card 1: Speed */}
                <div className="absolute -top-4 -left-4 sm:-left-6 bg-[#121814]/85 backdrop-blur-md border border-[#39FF14]/40 p-4 rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.5)] flex items-center gap-3.5 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="p-2.5 rounded-xl bg-[#39FF14]/10 text-[#39FF14]">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-heading font-extrabold text-lg text-[#F4F5F0]">
                      &lt; 0.8s
                    </div>
                    <div className="text-[11px] font-sans text-[#A1AAA2]">
                      Velocidad Carga Ultra-rápida
                    </div>
                  </div>
                </div>

                {/* Card 2: Lighthouse SEO */}
                <div className="absolute top-1/2 -right-4 sm:-right-8 -translate-y-1/2 bg-[#121814]/85 backdrop-blur-md border border-[#E2C044]/40 p-4 rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.5)] flex items-center gap-3.5 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="p-2.5 rounded-xl bg-[#E2C044]/10 text-[#E2C044]">
                    <Gauge className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-heading font-extrabold text-lg text-[#F4F5F0]">
                      100 / 100
                    </div>
                    <div className="text-[11px] font-sans text-[#A1AAA2]">
                      Lighthouse SEO & Performance
                    </div>
                  </div>
                </div>

                {/* Card 3: WhatsApp Conversion */}
                <div className="absolute -bottom-4 -left-2 sm:left-2 bg-[#121814]/85 backdrop-blur-md border border-[#39FF14]/40 p-4 rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.5)] flex items-center gap-3.5 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="p-2.5 rounded-xl bg-[#39FF14]/10 text-[#39FF14]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-heading font-extrabold text-sm text-[#F4F5F0]">
                      Embudo Directo
                    </div>
                    <div className="text-[11px] font-sans text-[#A1AAA2]">
                      Conversión WhatsApp & Email
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VALOR Y SECTORES DE ALTO VALOR */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-heading text-xs uppercase tracking-widest text-[#39FF14] font-bold">
              Diseño Estratégico Especializado
            </h2>
            <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#F4F5F0]">
              Diseñado para los Profesionales que Exigen{" "}
              <span className="font-serif italic font-normal text-[#E2C044]">Excelencia</span>
            </h3>
            <p className="text-sm text-[#A1AAA2]">
              Un sitio web corporativo no debe ser solo un folleto digital. Es la primera impresión de tu firma o consultoría.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Firmas de Abogados",
                desc: "Transmite autoridad, confidencialidad y prestigio con plataformas elegantes y formularios seguros.",
                icon: ShieldCheck,
              },
              {
                title: "Clínicas & Médicos",
                desc: "Experiencia de navegación impecable con integración directa para reserva de citas y consultas.",
                icon: Award,
              },
              {
                title: "Estudios de Arquitectura",
                desc: "Galerías visuales ultra-rápidas para presentar portafolios de diseño sin perder calidad.",
                icon: Sparkles,
              },
              {
                title: "Consultores Financieros",
                desc: "Arquitectura limpia y libre de distracciones orientada a captar clientes corporativos de alto valor.",
                icon: Lock,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#121814] border border-[#1E2822] p-6 hover:border-[#E2C044]/50 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0B100D] border border-[#1E2822] flex items-center justify-center text-[#E2C044] group-hover:text-[#39FF14] group-hover:border-[#39FF14]/40 transition-colors mb-5">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="font-heading text-lg font-bold text-[#F4F5F0] mb-2 group-hover:text-[#E2C044] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-[#A1AAA2] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* RESUMEN DE SERVICIOS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <div className="rounded-3xl bg-[#121814]/80 border border-[#1E2822] p-8 sm:p-12 relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#E2C044] font-bold font-heading">
                  Nuestra Oferta Boutique
                </span>
                <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#F4F5F0] mt-2">
                  Soluciones Digitales Sin Plantillas
                </h3>
              </div>
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#39FF14] hover:text-[#E2C044] transition-colors"
              >
                <span>Ver Todos los Servicios</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Servicio 1 */}
              <div className="rounded-2xl bg-[#0B100D] border border-[#1E2822] p-8 flex flex-col justify-between hover:border-[#39FF14]/40 transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-[#121814] flex items-center justify-center text-[#39FF14]">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading text-xl font-bold text-[#F4F5F0] group-hover:text-[#39FF14] transition-colors">
                    Desarrollo Web Vanguardista
                  </h4>
                  <p className="text-xs text-[#A1AAA2] leading-relaxed">
                    Desarrollo personalizado en Next.js con arquitectura multipágina. Pago único de alta gama sin alquiler mensual.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#1E2822]/80 flex items-center justify-between text-xs font-semibold text-[#E2C044]">
                  <span>Pago Único</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>

              {/* Servicio 2 */}
              <div className="rounded-2xl bg-[#0B100D] border border-[#1E2822] p-8 flex flex-col justify-between hover:border-[#39FF14]/40 transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-[#121814] flex items-center justify-center text-[#E2C044]">
                    <Gauge className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading text-xl font-bold text-[#F4F5F0] group-hover:text-[#E2C044] transition-colors">
                    Mantenimiento & Evolución
                  </h4>
                  <p className="text-xs text-[#A1AAA2] leading-relaxed">
                    Alojamiento ultra-rápido en servidores Edge de Vercel, soporte continuo, actualización de contenidos y SEO técnico.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#1E2822]/80 flex items-center justify-between text-xs font-semibold text-[#E2C044]">
                  <span>Planes Mensuales</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>

              {/* Servicio 3 */}
              <div className="rounded-2xl bg-[#0B100D] border border-[#1E2822] p-8 flex flex-col justify-between hover:border-[#39FF14]/40 transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-[#121814] flex items-center justify-center text-[#39FF14]">
                    <Bot className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading text-xl font-bold text-[#F4F5F0] group-hover:text-[#39FF14] transition-colors">
                    Consultoría Modernización IA
                  </h4>
                  <p className="text-xs text-[#A1AAA2] leading-relaxed">
                    Integración de agentes de IA, automatización de captura de prospectos e integración con herramientas directas.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#1E2822]/80 flex items-center justify-between text-xs font-semibold text-[#E2C044]">
                  <span>A Medida</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTOR DESTACADO / SECCIÓN VISUAL (Office + Storytelling) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center rounded-3xl border border-[#1E2822] bg-[#121814] p-8 lg:p-12 overflow-hidden">
            <div className="lg:col-span-6 relative aspect-video sm:aspect-[4/3] rounded-2xl overflow-hidden border border-[#1E2822]">
              <Image
                src="/assets/office.png"
                alt="Estudio Bunyip CR Executive Office"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#39FF14] font-bold font-heading">
                El Enfoque Solopreneur & Vibe Coding
              </span>
              <h3 className="font-heading text-3xl font-extrabold text-[#F4F5F0]">
                Sin Intermediarios. Trato Directo con el{" "}
                <span className="font-serif italic font-normal text-[#E2C044]">Desarrollador Principal</span>.
              </h3>
              <p className="text-xs sm:text-sm text-[#A1AAA2] leading-relaxed">
                A diferencia de las agencias tradicionales con procesos lentos y múltiples capas burocráticas, en Bunyip CR trabajas cara a cara con el arquitecto del software. Esto garantiza entregas en tiempo récord, comunicación fluida y resultados de máximo impacto visual.
              </p>
              <div className="pt-2">
                <Link
                  href="/el-enfoque"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-transparent text-[#E2C044] border border-[#E2C044]/60 hover:bg-[#E2C044] hover:text-[#0B100D] transition-all duration-300"
                >
                  <span>Conoce Nuestra Filosofía</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL DE CONVERSIÓN */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative">
          <div className="rounded-3xl bg-gradient-to-b from-[#121814] to-[#0B100D] border border-[#E2C044]/30 p-10 sm:p-16 space-y-6 shadow-[0_0_50px_rgba(226,192,68,0.08)]">
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#F4F5F0]">
              ¿Listo para Elevación Digital de Tu Firma?
            </h2>
            <p className="text-sm sm:text-base text-[#A1AAA2] max-w-xl mx-auto">
              Conversa directamente con nosotros en WhatsApp y obtén una evaluación gratuita de tu sitio actual o un presupuesto para tu nueva plataforma.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-heading font-semibold text-sm uppercase tracking-wider bg-[#39FF14] text-[#0B100D] hover:bg-[#39FF14]/90 transition-all duration-300 shadow-[0_0_25px_rgba(57,255,20,0.4)]"
              >
                <span>Hablemos por WhatsApp</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-heading font-semibold text-sm uppercase tracking-wider bg-[#0B100D] text-[#F4F5F0] border border-[#1E2822] hover:border-[#E2C044]/60 hover:text-[#E2C044] transition-all duration-300"
              >
                <span>Enviar Formulario Ejecutivo</span>
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
