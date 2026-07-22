"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, ArrowRight, Sparkles } from "lucide-react";
import { getWhatsAppUrl } from "@/data/gymData";

export const WhatsAppCtaBanner: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-[#121212] via-[#1A1810] to-[#121212] border-y border-[#D4AF37]/30 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/15 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#161616] border border-[#D4AF37]/40 mb-6">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest">
              LIMITED PERIOD MEMBERSHIP OFFER
            </span>
          </div>

          <h2 className="font-bebas text-5xl sm:text-7xl font-extrabold text-white tracking-wide uppercase leading-tight">
            READY TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#997A15]">TRANSFORM YOURSELF?</span>
          </h2>

          <p className="mt-4 text-base sm:text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            Stop procrastinating your fitness goals. Get instant access to certified trainers, custom macro diets, and Visakhapatnam&apos;s best gym environment.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl("Hello TEJA FITNESS STUDIO, I'm interested in joining your gym. Please share membership details.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#997A15] text-black font-extrabold text-base tracking-wider uppercase shadow-[0_0_35px_rgba(212,175,55,0.4)] hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] hover:scale-105 transition-all duration-300"
            >
              <MessageSquare className="w-6 h-6 fill-black" />
              <span>Chat on WhatsApp</span>
              <ArrowRight className="w-5 h-5 ml-1" />
            </a>
          </div>

          <p className="mt-6 text-xs text-gray-400">
            * Direct message to Head Coach Teja • Response within 5-10 minutes
          </p>
        </motion.div>
      </div>
    </section>
  );
};
