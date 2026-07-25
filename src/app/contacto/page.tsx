"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Sparkles, MessageSquare, Mail, Send, CheckCircle2, ArrowUpRight } from "lucide-react";

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
    // Preparamos enlace a WhatsApp o envío simulación
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

      <main className="flex-1 pt-32 pb-20">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="rounded-3xl border border-[#1E2822] bg-[#121814]/70 backdrop-blur-xl p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#39FF14]/10 blur-[130px] rounded-full pointer-events-none" />
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B100D] border border-[#E2C044]/40 text-xs font-semibold text-[#E2C044] uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#39FF14]" />
              <span>Contacto Ejecutivo</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#F4F5F0] max-w-3xl mx-auto leading-tight">
              Inicia la Transformación de Tu{" "}
              <span className="font-serif italic font-normal text-[#E2C044]">Presencia Digital</span>
            </h1>
            <p className="text-sm sm:text-base text-[#A1AAA2] max-w-2xl mx-auto mt-4">
              Estamos listos para evaluar tu proyecto o sitio actual. Elige la vía de comunicación de tu preferencia.
            </p>
          </div>
        </section>

        {/* Form & Info Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Form (7 cols) */}
            <div className="lg:col-span-7 rounded-3xl border border-[#1E2822] bg-[#121814] p-8 sm:p-10 shadow-2xl relative overflow-hidden">
              <h2 className="font-heading text-2xl font-bold text-[#F4F5F0] mb-2">
                Envía un Mensaje Directo
              </h2>
              <p className="text-xs text-[#A1AAA2] mb-8">
                Completa el formulario y te responderemos en menos de 24 horas hábiles.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#0B100D] border border-[#39FF14]/50 text-center space-y-4 animate-in fade-in duration-500">
                  <div className="w-12 h-12 rounded-full bg-[#39FF14]/20 text-[#39FF14] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#F4F5F0]">
                    ¡Mensaje Redirigido con Éxito!
                  </h3>
                  <p className="text-xs text-[#A1AAA2]">
                    Tu consulta ha sido canalizada a WhatsApp para una atención inmediata sin demoras.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold bg-[#121814] text-[#E2C044] border border-[#E2C044]/40 hover:bg-[#E2C044] hover:text-[#0B100D] transition-colors"
                  >
                    Enviar Otra Consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-[#A1AAA2] mb-2">
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
                        className="w-full px-4 py-3 rounded-xl bg-[#0B100D] border border-[#1E2822] text-sm text-[#F4F5F0] placeholder-[#A1AAA2]/40 focus:outline-none focus:border-[#39FF14] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#A1AAA2] mb-2">
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
                        className="w-full px-4 py-3 rounded-xl bg-[#0B100D] border border-[#1E2822] text-sm text-[#F4F5F0] placeholder-[#A1AAA2]/40 focus:outline-none focus:border-[#39FF14] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-[#A1AAA2] mb-2">
                        Firma / Empresa
                      </label>
                      <input
                        type="text"
                        value={formData.organizacion}
                        onChange={(e) =>
                          setFormData({ ...formData, organizacion: e.target.value })
                        }
                        placeholder="Ej: Bufete Morales & Asociados"
                        className="w-full px-4 py-3 rounded-xl bg-[#0B100D] border border-[#1E2822] text-sm text-[#F4F5F0] placeholder-[#A1AAA2]/40 focus:outline-none focus:border-[#39FF14] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#A1AAA2] mb-2">
                        Servicio de Interés
                      </label>
                      <select
                        value={formData.servicio}
                        onChange={(e) =>
                          setFormData({ ...formData, servicio: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#0B100D] border border-[#1E2822] text-sm text-[#F4F5F0] focus:outline-none focus:border-[#39FF14] transition-colors"
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

                  <div>
                    <label className="block text-xs font-medium text-[#A1AAA2] mb-2">
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
                      className="w-full px-4 py-3 rounded-xl bg-[#0B100D] border border-[#1E2822] text-sm text-[#F4F5F0] placeholder-[#A1AAA2]/40 focus:outline-none focus:border-[#39FF14] transition-colors"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-heading font-semibold text-xs uppercase tracking-wider bg-[#39FF14] text-[#0B100D] hover:bg-[#39FF14]/90 transition-all duration-300 shadow-[0_0_20px_rgba(57,255,20,0.3)] flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Formulario Ejecutivo</span>
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Contact Cards & Image (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* WhatsApp Card */}
              <div className="p-8 rounded-3xl border border-[#39FF14]/40 bg-[#121814] space-y-4 shadow-[0_0_30px_rgba(57,255,20,0.1)]">
                <div className="p-3 rounded-2xl bg-[#39FF14]/10 text-[#39FF14] w-fit">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-[#F4F5F0]">
                  ¿Prefieres Respuesta Inmediata?
                </h3>
                <p className="text-xs text-[#A1AAA2] leading-relaxed">
                  Inicia un chat directo en WhatsApp con el desarrollador principal sin intermediarios.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#39FF14] text-[#0B100D] hover:scale-105 transition-all shadow-[0_0_15px_rgba(57,255,20,0.3)]"
                >
                  <span>Chat Directo WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Graphic Asset */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#1E2822]">
                <Image
                  src="/assets/contact-section-img.png"
                  alt="Bunyip CR Contact Section Visual"
                  fill
                  className="object-cover"
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
