"use client";

import React from "react";
import { Phone, MessageSquare, Flame } from "lucide-react";
import { PHONE_PRIMARY, getWhatsAppUrl } from "@/data/gymData";

export const MobileBottomBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#0B0B0B]/95 backdrop-blur-xl border-t border-[#D4AF37]/30 p-2.5 shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        {/* Call Button */}
        <a
          href={`tel:${PHONE_PRIMARY}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#181818] border border-white/10 text-white hover:border-[#D4AF37]/50 active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-[10px] font-bold uppercase tracking-wider mt-1">Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={getWhatsAppUrl("Hello TEJA FITNESS STUDIO, I am interested in joining your gym. Please share membership details.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600/90 text-white font-bold active:scale-95 transition-all shadow-md"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
          <span className="text-[10px] font-extrabold uppercase tracking-wider mt-1">WhatsApp</span>
        </a>

        {/* Join Now CTA */}
        <a
          href={getWhatsAppUrl("Hello TEJA FITNESS STUDIO, I want to join immediately! Please share membership steps.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#997A15] text-black font-extrabold active:scale-95 transition-all shadow-lg"
        >
          <Flame className="w-4 h-4 fill-black" />
          <span className="text-[10px] font-extrabold uppercase tracking-wider mt-1">Join Now</span>
        </a>
      </div>
    </div>
  );
};
