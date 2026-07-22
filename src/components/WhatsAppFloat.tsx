"use client";

import React from "react";
import { MessageSquare } from "lucide-react";
import { getWhatsAppUrl } from "@/data/gymData";
import { motion } from "framer-motion";

export const WhatsAppFloat: React.FC = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
      className="fixed bottom-20 sm:bottom-8 right-6 z-40"
    >
      <a
        href={getWhatsAppUrl("Hello TEJA FITNESS STUDIO, I am interested in joining your gym. Please share details.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with TEJA FITNESS STUDIO on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 text-white shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:scale-110 hover:shadow-[0_0_35px_rgba(16,185,129,0.8)] transition-all duration-300"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#D4AF37]"></span>
        </span>
        <MessageSquare className="w-7 h-7 fill-white" />

        {/* Tooltip on hover (desktop) */}
        <span className="absolute right-16 hidden lg:group-hover:flex items-center whitespace-nowrap px-3 py-1.5 rounded-lg bg-[#0B0B0B] border border-[#D4AF37]/40 text-[#D4AF37] font-bold text-xs shadow-xl">
          Chat on WhatsApp
        </span>
      </a>
    </motion.div>
  );
};
