import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos | Bunyip CR",
  description: "Explora nuestros proyectos web vanguardistas y casos de éxito de alto nivel.",
};

const placeholderProjects = [
  {
    id: 1,
    name: "Autodecoración Escazú",
    description: "Polarizado automotriz, residencial e industrial. Alarmas, GPS y audio. Instalación profesional con garantía — a domicilio en todo el país.",
    achievements: [
      "Presencia online aumentada",
      "Mayor profesionalismo al contar con un sitio web de alta gama",
      "Ventaja competitiva clave en un sector donde no se acostumbra usar páginas web",
    ],
    image: "/project-assets/autodecoracion-escazu.png",
    url: "https://autodecoracion-escazu.vercel.app/",
    colorTheme: "#E03C31", // Accent Red from the project
    glowColor: "rgba(224, 60, 49, 0.15)", // Subtle red glow
  },
  {
    id: 2,
    name: "Maná — Sourdough & Baked Goods",
    status: "En progreso 🚀",
    description: "Micro-panadería artesanal de masa madre y repostería de alta calidad en San José. Identidad limpia, catálogo visual y contacto directo para pedidos.",
    achievements: [
      "Presencia digital boutique alineada a una marca artesanal premium",
      "Experiencia visual enfocado en resaltar la masa madre y catálogo",
      "Canalización ágil de consultas y pedidos directos por WhatsApp",
    ],
    image: "/project-assets/mana-bakery.png",
    url: "https://mana-bakery.netlify.app/",
    colorTheme: "#4A6B35", // Warm olive green from Mana's branding
    glowColor: "rgba(74, 107, 53, 0.25)",
  }
];

export default function ProyectosPage() {
  return (
    <div className="min-h-screen bg-[#0B100D] text-[#F4F5F0] flex flex-col font-sans selection:bg-[#39FF14]/30 selection:text-[#39FF14]">
      <Navbar />

      <main className="flex-1 pt-28 pb-16">
        <section className="relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E2C044]/5 blur-[120px] rounded-full pointer-events-none z-0" />
          
          <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-16 md:pt-24 pb-20">
            {/* Header Section */}
            <div className="mb-16 md:mb-24 flex flex-col items-center text-center max-w-4xl mx-auto">
              <div className="font-serif italic text-lg sm:text-xl text-[#E2C044] mb-6 tracking-wider opacity-90 uppercase">
                Portafolio de Casos
              </div>
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-[76px] text-[#F4F5F0] leading-[1.15] tracking-tight mb-8">
                Nuestros <span className="italic text-[#E2C044]">Proyectos</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-[#F4F5F0]/70 max-w-2xl leading-relaxed font-sans font-light">
                Casos de éxito y plataformas vanguardistas desarrolladas para clientes que exigen excelencia, velocidad y resultados tangibles.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {placeholderProjects.map((project, index) => (
                <div 
                  key={project.id}
                  className="group relative flex flex-col bg-[#121814]/70 backdrop-blur-md rounded-3xl border border-[#1E2822] overflow-hidden transition-all duration-500"
                  style={{ 
                    animationDelay: `${index * 150}ms`, 
                    animationFillMode: 'both',
                  }}
                >
                  {/* Dynamic border on hover via pseudo-element to use inline custom property */}
                  <style dangerouslySetInnerHTML={{__html: `
                    .project-card-${project.id}:hover {
                      border-color: ${project.colorTheme};
                      box-shadow: 0 0 40px ${project.glowColor};
                    }
                    .project-card-${project.id} .project-title-hover:hover,
                    .project-card-${project.id}:hover .project-title-hover {
                      color: ${project.colorTheme};
                    }
                    .project-card-${project.id} .project-btn-hover:hover {
                      background-color: ${project.colorTheme};
                      color: #0B100D;
                      border-color: ${project.colorTheme};
                    }
                    .project-card-${project.id} .project-icon-hover {
                      color: ${project.colorTheme};
                    }
                  `}} />

                  <div className={`project-card-${project.id} flex flex-col h-full border border-transparent transition-all duration-500`}>
                    {/* Image Container */}
                    <Link href={project.url} className="relative w-full h-72 sm:h-80 overflow-hidden block">
                      <div className="absolute inset-0 bg-[#0B100D]/40 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-multiply" />
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[20%] group-hover:grayscale-0"
                        unoptimized={true}
                      />
                    </Link>

                    {/* Content Container */}
                    <div className="p-8 sm:p-10 flex flex-col flex-grow relative z-20">
                      <div className="flex justify-between items-start mb-6 gap-4">
                        <h3 className="project-title-hover font-serif text-2xl sm:text-3xl text-[#F4F5F0] transition-colors leading-tight">
                          {project.name} {project.status && <span className="text-sm font-sans font-normal text-[#E2C044]/90 inline-block mt-1 sm:mt-0 sm:ml-2">({project.status})</span>}
                        </h3>
                        <Link 
                          href={project.url}
                          className="project-btn-hover w-12 h-12 rounded-full border border-[#1E2822] flex items-center justify-center text-[#F4F5F0] transition-all duration-300 shrink-0 group/link"
                          aria-label={`Visitar ${project.name}`}
                        >
                          <ArrowUpRight className="w-5 h-5 transform group-hover/link:scale-110 transition-transform" />
                        </Link>
                      </div>
                      
                      <p className="text-[#F4F5F0]/70 text-base font-light leading-relaxed mb-8 flex-grow">
                        {project.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-4 pt-8 border-t border-[#1E2822]/50">
                        <h4 className="text-xs uppercase tracking-widest text-[#F4F5F0]/50 font-bold mb-4 font-sans">
                          Impacto Logrado
                        </h4>
                        <ul className="space-y-3">
                          {project.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-[#F4F5F0]/80 font-light">
                              <CheckCircle2 className="project-icon-hover w-5 h-5 shrink-0 mt-0.5 opacity-80 group-hover:opacity-100 transition-opacity" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
