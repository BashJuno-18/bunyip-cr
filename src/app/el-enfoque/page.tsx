import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Sparkles, Shield, Cpu, UserCheck, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "El Enfoque Boutique | Bunyip CR",
  description:
    "Conoce la filosofía y metodología de Bunyip CR. Un estudio web boutique atendido directamente por su fundador en Costa Rica.",
};

export default function ElEnfoquePage() {
  const whatsappMessage = encodeURIComponent(
    "Hola Bunyip CR, leí sobre su enfoque boutique y me gustaría agendar una reunión."
  );
  const whatsappUrl = `https://wa.me/50688888888?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-[#0B100D] text-[#F4F5F0] flex flex-col font-sans selection:bg-[#39FF14]/30 selection:text-[#39FF14]">
      <Navbar />

      <main className="flex-1 pt-32 pb-20">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="rounded-3xl border border-[#1E2822] bg-[#121814]/70 backdrop-blur-xl p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-80 h-80 bg-[#E2C044]/10 blur-[130px] rounded-full pointer-events-none" />
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B100D] border border-[#E2C044]/40 text-xs font-semibold text-[#E2C044] uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#39FF14]" />
              <span>Metodología & Filosofía</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#F4F5F0] max-w-3xl mx-auto leading-tight">
              Misticismo Tecnológico &{" "}
              <span className="font-serif italic font-normal text-[#E2C044]">Atención Personalizada</span>
            </h1>
            <p className="text-sm sm:text-base text-[#A1AAA2] max-w-2xl mx-auto mt-4">
              Inspirados en el Bunyip australiano —un símbolo místico de adaptabilidad y presencia— fusionamos ingeniería de software moderna con un modelo de operación solopreneur de alto nivel.
            </p>
          </div>
        </section>

        {/* Misticismo y Concepto */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center rounded-3xl border border-[#1E2822] bg-[#121814] p-8 lg:p-12">
            <div className="lg:col-span-6 relative aspect-square rounded-2xl overflow-hidden border border-[#1E2822]">
              <Image
                src="/assets/Hero-image.png"
                alt="Misticismo Tecnologico Bunyip CR"
                fill
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#39FF14] font-bold font-heading">
                El Origen del Nombre
              </span>
              <h2 className="font-heading text-3xl font-extrabold text-[#F4F5F0]">
                Adaptabilidad que Desafía lo Tradicional
              </h2>
              <p className="text-xs sm:text-sm text-[#A1AAA2] leading-relaxed">
                El Bunyip es una criatura envuelta en misterio, respetada por su capacidad de habitar fluidamente diversos entornos. En la era digital, tu empresa necesita esa misma capacidad de adaptación rápida.
              </p>
              <p className="text-xs sm:text-sm text-[#A1AAA2] leading-relaxed">
                No creamos sitios estáticos y obsoletos; diseñamos ecosistemas interactivos capaces de evolucionar con la velocidad de la Inteligencia Artificial y los estándares de consumo ejecutivo.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#0B100D] border border-[#1E2822]">
                  <div className="text-[#39FF14] font-bold text-lg font-heading">100%</div>
                  <div className="text-xs text-[#A1AAA2]">Código Propietario en TypeScript</div>
                </div>
                <div className="p-4 rounded-xl bg-[#0B100D] border border-[#1E2822]">
                  <div className="text-[#E2C044] font-bold text-lg font-heading">0%</div>
                  <div className="text-xs text-[#A1AAA2]">Burocracia de Agencias Tradicionales</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modelo Solopreneur & Vibe Coding */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="rounded-3xl border border-[#1E2822] bg-[#121814] p-8 lg:p-12">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#E2C044] font-bold font-heading">
                Ventaja Competitiva
              </span>
              <h2 className="font-heading text-3xl font-bold text-[#F4F5F0]">
                ¿Por Qué el Modelo Solopreneur Beneficia a Tu Firma?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-[#0B100D] border border-[#1E2822] space-y-4">
                <div className="p-3 rounded-xl bg-[#121814] w-fit text-[#39FF14]">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#F4F5F0]">
                  Comunicación Directa
                </h3>
                <p className="text-xs text-[#A1AAA2] leading-relaxed">
                  Trato personalizado de principio a fin. Sin gerentes de cuenta intermedia ni teléfonos descompuestos.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0B100D] border border-[#1E2822] space-y-4">
                <div className="p-3 rounded-xl bg-[#121814] w-fit text-[#E2C044]">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#F4F5F0]">
                  Vibe Coding de Alta Velocidad
                </h3>
                <p className="text-xs text-[#A1AAA2] leading-relaxed">
                  Aprovechamos el stack de Gemini Pro y Antigravity para iterar y desplegar en días, no en meses.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0B100D] border border-[#1E2822] space-y-4">
                <div className="p-3 rounded-xl bg-[#121814] w-fit text-[#39FF14]">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#F4F5F0]">
                  Calidad de Ejecución Boutique
                </h3>
                <p className="text-xs text-[#A1AAA2] leading-relaxed">
                  Limitamos el número de clientes simultáneos para brindar una dedicación del 100% a cada proyecto.
                </p>
              </div>
            </div>

            {/* Office Visual */}
            <div className="mt-12 relative aspect-[21/9] rounded-2xl overflow-hidden border border-[#1E2822]">
              <Image
                src="/assets/office.png"
                alt="Bunyip Executive Studio Office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-3xl bg-[#121814] border border-[#39FF14]/30 p-10 space-y-6">
            <h3 className="font-heading text-3xl font-extrabold text-[#F4F5F0]">
              ¿Conversemos Sobre Tu Próximo Sitio Web?
            </h3>
            <p className="text-xs sm:text-sm text-[#A1AAA2]">
              Sin compromisos ni llamadas largas de ventas. Una conversación directa sobre tus objetivos.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-heading font-semibold text-xs uppercase tracking-wider bg-[#39FF14] text-[#0B100D] shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:scale-105 transition-all"
            >
              <span>Conectar en WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
