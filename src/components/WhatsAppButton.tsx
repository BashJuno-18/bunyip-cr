"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappMessage = encodeURIComponent(
    "Hola Bunyip CR, me gustaría solicitar información sobre sus servicios web boutique."
  );
  const whatsappUrl = `https://wa.me/50683773255?text=${whatsappMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-3.5 rounded-full bg-[#121814] text-[#39FF14] border border-[#39FF14]/60 shadow-[0_0_25px_rgba(57,255,20,0.3)] hover:shadow-[0_0_35px_rgba(57,255,20,0.6)] hover:bg-[#39FF14] hover:text-[#0B100D] transition-all duration-300 group hover:scale-110"
    >
      <MessageCircle className="w-6 h-6 animate-pulse" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out text-xs font-bold uppercase tracking-wider pl-0 group-hover:pl-2">
        WhatsApp Directo
      </span>
    </a>
  );
}
