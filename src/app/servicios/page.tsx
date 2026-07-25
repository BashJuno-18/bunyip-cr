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
  Sparkles,
  Layers,
  Search,
  Server,
  Code2,
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

      <main className="flex-1 pt-32 pb-20">
        {/* Header Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="rounded-3xl border border-[#1E2822] bg-[#121814]/70 backdrop-blur-xl p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#39FF14]/10 blur-[130px] rounded-full pointer-events-none" />
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B100D] border border-[#E2C044]/40 text-xs font-semibold text-[#E2C044] uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#39FF14]" />
              <span>Soluciones Digitales de Alta Gama</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#F4F5F0] max-w-3xl mx-auto leading-tight">
              Servicios Diseñados para{" "}
              <span className="font-serif italic font-normal text-[#E2C044]">Superar</span> a la Competencia
            </h1>
            <p className="text-sm sm:text-base text-[#A1AAA2] max-w-2xl mx-auto mt-4">
              Sin plantillas genéricas. Cada línea de código y cada micro-animación es construida a la medida para proyectar autoridad inmediata.
            </p>
          </div>
        </section>

        {/* SERVICIO 1: DESARROLLO WEB VANGUARDISTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl border border-[#1E2822] bg-[#121814] p-8 lg:p-12">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#0B100D] border border-[#39FF14]/40 text-[#39FF14]">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#E2C044] font-bold">
                    Servicio Principal • Pago Único
                  </span>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#F4F5F0]">
                    Desarrollo Web Vanguardista
                  </h2>
                </div>
              </div>

              <p className="text-sm text-[#A1AAA2] leading-relaxed">
                Plataforma multipágina desarrollada con la última arquitectura de Next.js (App Router). Ideal para firmas profesionales que buscan eliminar la dependencia de alquileres de software y obtener un activo digital propio de por vida.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  "Pago único sin mensualidades forzosas",
                  "Carga ultrarrápida (<0.8 segundos)",
                  "Diseño Adaptativo con Dark Mode por defecto",
                  "Embudo directo a WhatsApp & Correo",
                  "Tipografía editorial premium integrada",
                  "Cumplimiento 100/100 Lighthouse SEO",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-[#F4F5F0]">
                    <CheckCircle2 className="w-4 h-4 text-[#39FF14] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href={whatsappUrl("Desarrollo Web Vanguardista")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-heading font-semibold text-xs uppercase tracking-wider bg-[#39FF14] text-[#0B100D] hover:bg-[#39FF14]/90 transition-all duration-300 shadow-[0_0_20px_rgba(57,255,20,0.3)]"
                >
                  <span>Consultar Cotización Desarrollo</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-square rounded-2xl overflow-hidden border border-[#1E2822]">
              <Image
                src="/assets/stock-img-1.png"
                alt="Desarrollo Web Vanguardista Glassmorphism"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* SERVICIO 2: MANTENIMIENTO & EVOLUCIÓN */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl border border-[#1E2822] bg-[#121814] p-8 lg:p-12">
            <div className="lg:col-span-5 relative aspect-square rounded-2xl overflow-hidden border border-[#1E2822] order-2 lg:order-1">
              <Image
                src="/assets/stock-image-2.png"
                alt="Mantenimiento y Evolucion SEO"
                fill
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#0B100D] border border-[#E2C044]/40 text-[#E2C044]">
                  <Gauge className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#39FF14] font-bold">
                    Suscripción Opcional
                  </span>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#F4F5F0]">
                    Mantenimiento & Evolución SEO
                  </h2>
                </div>
              </div>

              <p className="text-sm text-[#A1AAA2] leading-relaxed">
                Asegura que tu plataforma se mantenga invulnerable, actualizada con nuevos contenidos y posicionada en los primeros resultados de búsqueda ejecutiva.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  "Alojamiento Global en Vercel Edge Server",
                  "Monitoreo 24/7 de tiempo de actividad",
                  "Actualizaciones periódicas de contenido",
                  "Optimización continua de palabras clave",
                  "Respaldos automatizados de seguridad",
                  "Informes mensuales de tráfico ejecutivo",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-[#F4F5F0]">
                    <CheckCircle2 className="w-4 h-4 text-[#E2C044] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href={whatsappUrl("Mantenimiento y Evolucion SEO")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-heading font-semibold text-xs uppercase tracking-wider bg-[#0B100D] text-[#E2C044] border border-[#E2C044]/60 hover:bg-[#E2C044] hover:text-[#0B100D] transition-all duration-300"
                >
                  <span>Consultar Planes de Mantenimiento</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICIO 3: CONSULTORÍA MODERNIZACIÓN IA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl border border-[#1E2822] bg-[#121814] p-8 lg:p-12">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#0B100D] border border-[#39FF14]/40 text-[#39FF14]">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#E2C044] font-bold">
                    Innovación Avanzada
                  </span>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#F4F5F0]">
                    Consultoría de Modernización IA
                  </h2>
                </div>
              </div>

              <p className="text-sm text-[#A1AAA2] leading-relaxed">
                Integramos modelos de Inteligencia Artificial directamente en tu ecosistema web para calificar prospectos automáticamente, responder consultas 24/7 y automatizar flujos operativos.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  "Agentes conversacionales calificados para firmas",
                  "Automatización de captura de prospectos",
                  "Integración con WhatsApp Business API",
                  "Formularios inteligentes adaptativos",
                  "Integración con CRMs corporativos",
                  "Estrategia de transformación digital a medida",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-[#F4F5F0]">
                    <CheckCircle2 className="w-4 h-4 text-[#39FF14] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href={whatsappUrl("Consultoria IA")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-heading font-semibold text-xs uppercase tracking-wider bg-[#39FF14] text-[#0B100D] hover:bg-[#39FF14]/90 transition-all duration-300 shadow-[0_0_20px_rgba(57,255,20,0.3)]"
                >
                  <span>Agendar Sesión de Consultoría IA</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-square rounded-2xl overflow-hidden border border-[#1E2822]">
              <Image
                src="/assets/stock-image-4.png"
                alt="Consultoria Inteligencia Artificial Bunyip"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
