"use client";

import React from "react";
import { motion } from "framer-motion";
import { WHY_CHOOSE_US } from "@/data/gymData";
import {
  Award,
  ShieldCheck,
  Target,
  TrendingDown,
  Dumbbell,
  Zap,
  Layers,
  Sparkles,
  Smile,
  Clock,
  Utensils,
  Lock,
} from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  // Map string icon names to Lucide Icon components
  const iconMap: Record<string, React.ReactNode> = {
    Award: <Award className="w-7 h-7 text-[#D4AF37]" />,
    ShieldCheck: <ShieldCheck className="w-7 h-7 text-[#D4AF37]" />,
    Target: <Target className="w-7 h-7 text-[#D4AF37]" />,
    TrendingDown: <TrendingDown className="w-7 h-7 text-[#D4AF37]" />,
    Dumbbell: <Dumbbell className="w-7 h-7 text-[#D4AF37]" />,
    Zap: <Zap className="w-7 h-7 text-[#D4AF37]" />,
    Layers: <Layers className="w-7 h-7 text-[#D4AF37]" />,
    Sparkles: <Sparkles className="w-7 h-7 text-[#D4AF37]" />,
    Smile: <Smile className="w-7 h-7 text-[#D4AF37]" />,
    Clock: <Clock className="w-7 h-7 text-[#D4AF37]" />,
    Utensils: <Utensils className="w-7 h-7 text-[#D4AF37]" />,
    Lock: <Lock className="w-7 h-7 text-[#D4AF37]" />,
  };

  return (
    <section id="why-us" className="relative py-24 bg-[#0E0E0E] overflow-hidden">
      {/* Background Gold Ambient Gradient */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#161616] border border-[#D4AF37]/30 mb-4"
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest">
              THE TEJA FITNESS ADVANTAGE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-bebas text-4xl sm:text-6xl font-extrabold text-white tracking-wide uppercase"
          >
            WHY CHOOSE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#997A15]">TEJA FITNESS STUDIO</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-gray-300 font-light"
          >
            We don&apos;t just sell gym access — we deliver an elite environment engineered for continuous progress, injury prevention, and lifestyle transformations.
          </motion.p>
        </div>

        {/* 12 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl bg-[#141414] border border-white/10 hover:border-[#D4AF37]/60 transition-all duration-300 group hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-[#1F1F1F] border border-white/10 flex items-center justify-center mb-5 group-hover:border-[#D4AF37]/40 group-hover:bg-[#D4AF37]/10 transition-all">
                  {iconMap[item.icon] || <Award className="w-7 h-7 text-[#D4AF37]" />}
                </div>

                <h3 className="font-bebas text-2xl text-white tracking-wide group-hover:text-[#D4AF37] transition-colors leading-tight">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest group-hover:text-[#D4AF37] transition-colors">
                  0{index + 1} // VIZAG
                </span>
                <div className="w-2 h-2 rounded-full bg-[#D4AF37]/30 group-hover:bg-[#D4AF37] transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
