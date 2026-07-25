import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ArrowUpRight } from "lucide-react";

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
              Metodología & Filosofía
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-[76px] text-[#F4F5F0] leading-[1.15] tracking-tight mb-8 px-4">
              Misticismo Tecnológico &{" "}
              <span className="italic text-[#E2C044]">Atención Personalizada</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[#F4F5F0]/70 max-w-3xl mx-auto leading-relaxed mb-12 font-sans font-light px-4">
              Inspirados en el Bunyip australiano —un símbolo místico de adaptabilidad y presencia— fusionamos ingeniería de software moderna con un modelo de operación solopreneur de alto nivel.
            </p>
          </div>
        </section>

        {/* ORIGEN DEL NOMBRE */}
        <section className="border-t border-[#F4F5F0]/10 py-24 sm:py-32 overflow-hidden relative">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#E2C044]/5 blur-[120px] rounded-full pointer-events-none z-0" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] w-full overflow-hidden shadow-2xl">
              <Image
                src="/assets/Hero-image.png"
                alt="Misticismo Tecnologico Bunyip CR"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105 filter contrast-125"
              />
            </div>
            <div className="space-y-8">
              <span className="font-serif italic text-[#E2C044] tracking-wide text-lg sm:text-xl">
                El Origen del Nombre
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F4F5F0] leading-tight tracking-tight uppercase">
                Adaptabilidad que Desafía lo Tradicional
              </h2>
              <p className="text-base sm:text-lg text-[#F4F5F0]/70 font-light leading-relaxed">
                El Bunyip es una criatura envuelta en misterio, respetada por su capacidad de habitar fluidamente diversos entornos. En la era digital, tu empresa necesita esa misma capacidad de adaptación rápida.
              </p>
              <p className="text-base sm:text-lg text-[#F4F5F0]/70 font-light leading-relaxed">
                No creamos sitios estáticos y obsoletos; diseñamos ecosistemas interactivos capaces de evolucionar con la velocidad de la Inteligencia Artificial y los estándares de consumo ejecutivo.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="group border-t border-[#F4F5F0]/20 pt-6">
                  <div className="font-serif text-4xl sm:text-5xl text-[#39FF14] mb-2">100%</div>
                  <p className="text-sm text-[#F4F5F0]/60 font-light">Código Propietario en TypeScript</p>
                </div>
                <div className="group border-t border-[#F4F5F0]/20 pt-6">
                  <div className="font-serif text-4xl sm:text-5xl text-[#E2C044] mb-2">0%</div>
                  <p className="text-sm text-[#F4F5F0]/60 font-light">Burocracia de Agencias Tradicionales</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VENTAJAS DEL MODELO SOLOPRENEUR */}
        <section className="border-t border-[#F4F5F0]/10 py-24 sm:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
              <span className="font-serif italic text-[#E2C044] tracking-wide text-lg sm:text-xl">
                Ventaja Competitiva
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F4F5F0] leading-tight tracking-tight uppercase">
                ¿Por Qué el Modelo Solopreneur Beneficia a Tu Firma?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
              {[
                {
                  title: "Comunicación Directa",
                  desc: "Trato personalizado de principio a fin. Sin gerentes de cuenta intermedia ni teléfonos descompuestos.",
                },
                {
                  title: "Tecnología Moderna y Ágil",
                  desc: "Aprovechamos el stack de Next.js, TypeScript y Tailwind CSS para iterar y desplegar en días, no en meses.",
                },
                {
                  title: "Calidad de Ejecución Boutique",
                  desc: "Limitamos el número de clientes simultáneos para brindar una dedicación del 100% a cada proyecto.",
                },
              ].map((item, idx) => (
                <div key={idx} className="group border-t border-[#F4F5F0]/20 pt-6">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#F4F5F0] mb-4 group-hover:text-[#E2C044] transition-colors uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#F4F5F0]/60 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OFFICE VISUAL */}
        <section className="border-t border-[#F4F5F0]/10 py-24 sm:py-32 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E2C044]/5 blur-[120px] rounded-full pointer-events-none z-0" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="relative aspect-[21/9] w-full overflow-hidden shadow-2xl">
              <Image
                src="/assets/office.png"
                alt="Bunyip Executive Studio Office"
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
              ¿Conversemos Sobre Tu Próximo Sitio Web?
            </h2>
            <p className="text-base sm:text-xl text-[#F4F5F0]/70 font-light max-w-2xl mx-auto leading-relaxed">
              Sin compromisos ni llamadas largas de ventas. Una conversación directa sobre tus objetivos.
            </p>
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 bg-[#F4F5F0] text-[#0B100D] font-sans font-bold text-xs sm:text-sm tracking-[0.2em] uppercase rounded-full hover:bg-[#E2C044] transition-colors duration-300 shadow-[0_0_30px_rgba(244,245,240,0.1)]"
              >
                Conectar en WhatsApp
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
