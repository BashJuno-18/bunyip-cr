"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Send, CheckCircle2, MessageSquare, ArrowUpRight } from "lucide-react";

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    organizacion: "",
    servicio: "Desarrollo Web Vanguardista",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = encodeURIComponent(
      `Hola Bunyip CR, mi nombre es ${formData.nombre} de ${formData.organizacion || "Firma Profesional"}. Me interesa el servicio de ${formData.servicio}. Mensaje: ${formData.mensaje}`
    );
    window.open(`https://wa.me/50688888888?text=${whatsappMsg}`, "_blank");
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/50688888888?text=${encodeURIComponent(
    "Hola Bunyip CR, quisiera realizar una consulta directa."
  )}`;

  return (
    <div className="min-h-screen bg-[#0B100D] text-[#F4F5F0] flex flex-col font-sans selection:bg-[#39FF14]/30 selection:text-[#39FF14]">
      <Navbar />

      <main className="flex-1 pt-28 pb-16">
        {/* HERO SECTION */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden -mt-28">
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
              Contacto Ejecutivo
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-[76px] text-[#F4F5F0] leading-[1.15] tracking-tight mb-8 px-4">
              Inicia la Transformación de Tu{" "}
              <span className="italic text-[#E2C044]">Presencia Digital</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[#F4F5F0]/70 max-w-2xl mx-auto leading-relaxed font-sans font-light px-4">
              Estamos listos para evaluar tu proyecto o sitio actual. Elige la vía de comunicación de tu preferencia.
            </p>
          </div>
        </section>

        {/* FORM & CONTACT SECTION */}
        <section className="border-t border-[#F4F5F0]/10 py-24 sm:py-32 relative overflow-hidden">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#E2C044]/5 blur-[120px] rounded-full pointer-events-none z-0" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
            {/* LEFT: Form */}
            <div>
              <div className="space-y-8 mb-12">
                <h2 className="font-serif text-3xl sm:text-5xl text-[#F4F5F0] leading-tight tracking-tight uppercase">
                  Envía un Mensaje Directo
                </h2>
                <p className="text-base sm:text-lg text-[#F4F5F0]/70 font-light leading-relaxed">
                  Completa el formulario y te responderemos en menos de 24 horas hábiles.
                </p>
              </div>

              {submitted ? (
                <div className="space-y-6 pt-8 border-t border-[#F4F5F0]/20">
                  <div className="w-14 h-14 rounded-full bg-[#E2C044]/20 text-[#E2C044] flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F5F0]">
                    Mensaje Redirigido con Éxito
                  </h3>
                  <p className="text-base text-[#F4F5F0]/70 font-light leading-relaxed">
                    Tu consulta ha sido canalizada a WhatsApp para una atención inmediata sin demoras.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent text-[#F4F5F0] font-sans font-bold text-xs sm:text-sm tracking-[0.2em] uppercase rounded-full border border-[#F4F5F0]/30 hover:border-[#E2C044] hover:text-[#E2C044] transition-colors duration-300"
                  >
                    Enviar Otra Consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="group border-t border-[#F4F5F0]/20 pt-6">
                      <label className="block text-xs font-medium text-[#F4F5F0]/50 uppercase tracking-wider mb-3">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.nombre}
                        onChange={(e) =>
                          setFormData({ ...formData, nombre: e.target.value })
                        }
                        placeholder="Ej: Lic. Gabriel Morales"
                        className="w-full bg-transparent border-b border-[#F4F5F0]/20 pb-3 text-sm text-[#F4F5F0] placeholder-[#F4F5F0]/30 focus:outline-none focus:border-[#E2C044] transition-colors font-light"
                      />
                    </div>
                    <div className="group border-t border-[#F4F5F0]/20 pt-6">
                      <label className="block text-xs font-medium text-[#F4F5F0]/50 uppercase tracking-wider mb-3">
                        Correo Ejecutivo *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="gabriel@firma.cr"
                        className="w-full bg-transparent border-b border-[#F4F5F0]/20 pb-3 text-sm text-[#F4F5F0] placeholder-[#F4F5F0]/30 focus:outline-none focus:border-[#E2C044] transition-colors font-light"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="group border-t border-[#F4F5F0]/20 pt-6">
                      <label className="block text-xs font-medium text-[#F4F5F0]/50 uppercase tracking-wider mb-3">
                        Firma / Empresa
                      </label>
                      <input
                        type="text"
                        value={formData.organizacion}
                        onChange={(e) =>
                          setFormData({ ...formData, organizacion: e.target.value })
                        }
                        placeholder="Ej: Bufete Morales & Asociados"
                        className="w-full bg-transparent border-b border-[#F4F5F0]/20 pb-3 text-sm text-[#F4F5F0] placeholder-[#F4F5F0]/30 focus:outline-none focus:border-[#E2C044] transition-colors font-light"
                      />
                    </div>
                    <div className="group border-t border-[#F4F5F0]/20 pt-6">
                      <label className="block text-xs font-medium text-[#F4F5F0]/50 uppercase tracking-wider mb-3">
                        Servicio de Interés
                      </label>
                      <select
                        value={formData.servicio}
                        onChange={(e) =>
                          setFormData({ ...formData, servicio: e.target.value })
                        }
                        className="w-full bg-transparent border-b border-[#F4F5F0]/20 pb-3 text-sm text-[#F4F5F0] focus:outline-none focus:border-[#E2C044] transition-colors font-light"
                      >
                        <option value="Desarrollo Web Vanguardista">
                          Desarrollo Web Vanguardista
                        </option>
                        <option value="Mantenimiento & Evolución SEO">
                          Mantenimiento & Evolución SEO
                        </option>
                        <option value="Consultoría IA">
                          Consultoría de Modernización IA
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="group border-t border-[#F4F5F0]/20 pt-6">
                    <label className="block text-xs font-medium text-[#F4F5F0]/50 uppercase tracking-wider mb-3">
                      Detalles del Proyecto / Mensaje *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.mensaje}
                      onChange={(e) =>
                        setFormData({ ...formData, mensaje: e.target.value })
                      }
                      placeholder="Cuéntanos brevemente sobre los objetivos de tu plataforma web..."
                      className="w-full bg-transparent border-b border-[#F4F5F0]/20 pb-3 text-sm text-[#F4F5F0] placeholder-[#F4F5F0]/30 focus:outline-none focus:border-[#E2C044] transition-colors resize-none font-light"
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#F4F5F0] text-[#0B100D] font-sans font-bold text-xs sm:text-sm tracking-[0.2em] uppercase rounded-full hover:bg-[#E2C044] transition-colors duration-300"
                    >
                      <Send className="w-4 h-4" />
                      <span>Enviar Formulario Ejecutivo</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* RIGHT: WhatsApp Card + Image */}
            <div className="space-y-12 lg:pt-24">
              {/* WhatsApp Card */}
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-full bg-[#E2C044]/10 text-[#E2C044] flex items-center justify-center">
                  <MessageSquare className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F5F0] leading-tight">
                  ¿Prefieres Respuesta Inmediata?
                </h3>
                <p className="text-base text-[#F4F5F0]/70 font-light leading-relaxed">
                  Inicia un chat directo en WhatsApp con el desarrollador principal sin intermediarios.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-10 py-4 bg-[#F4F5F0] text-[#0B100D] font-sans font-bold text-xs sm:text-sm tracking-[0.2em] uppercase rounded-full hover:bg-[#E2C044] transition-colors duration-300"
                >
                  Chat Directo WhatsApp
                </a>
              </div>

              {/* Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden shadow-2xl">
                <Image
                  src="/assets/contact-section-img.png"
                  alt="Bunyip CR Contact Section Visual"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105 filter contrast-125"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
