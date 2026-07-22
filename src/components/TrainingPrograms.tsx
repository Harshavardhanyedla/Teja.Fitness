"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PROGRAMS, getWhatsAppUrl } from "@/data/gymData";
import {
  Dumbbell,
  Flame,
  Zap,
  RefreshCw,
  HeartPulse,
  Activity,
  UserCheck,
  Users,
  Sparkles,
  Trophy,
  ArrowRight,
  MessageSquare,
} from "lucide-react";

export const TrainingPrograms: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  const iconMap: Record<string, React.ReactNode> = {
    Dumbbell: <Dumbbell className="w-8 h-8 text-[#D4AF37]" />,
    Flame: <Flame className="w-8 h-8 text-[#D4AF37]" />,
    Zap: <Zap className="w-8 h-8 text-[#D4AF37]" />,
    RefreshCw: <RefreshCw className="w-8 h-8 text-[#D4AF37]" />,
    HeartPulse: <HeartPulse className="w-8 h-8 text-[#D4AF37]" />,
    Activity: <Activity className="w-8 h-8 text-[#D4AF37]" />,
    UserCheck: <UserCheck className="w-8 h-8 text-[#D4AF37]" />,
    Users: <Users className="w-8 h-8 text-[#D4AF37]" />,
    Sparkles: <Sparkles className="w-8 h-8 text-[#D4AF37]" />,
    Trophy: <Trophy className="w-8 h-8 text-[#D4AF37]" />,
  };

  return (
    <section id="programs" className="relative py-24 bg-[#0E0E0E] overflow-hidden">
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
              CUSTOMIZED TRAINING PROTOCOLS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-bebas text-4xl sm:text-6xl font-extrabold text-white tracking-wide uppercase"
          >
            OUR TRAINING <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#997A15]">PROGRAMS</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-gray-300 font-light"
          >
            From complete beginner kickstarts to elite powerlifting and fat burning — engineered for maximum results.
          </motion.p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((prog, index) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-[#141414] border border-white/10 hover:border-[#D4AF37]/60 transition-all duration-300 group flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(212,175,55,0.12)]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#1D1D1D] border border-white/10 flex items-center justify-center group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/10 transition-all">
                    {iconMap[prog.icon]}
                  </div>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                    PROGRAM #{index + 1}
                  </span>
                </div>

                <h3 className="font-bebas text-3xl text-white tracking-wide group-hover:text-[#D4AF37] transition-colors">
                  {prog.title}
                </h3>

                <p className="mt-3 text-sm text-gray-400 font-light leading-relaxed">
                  {prog.description}
                </p>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {prog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-semibold text-gray-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                <a
                  href={getWhatsAppUrl(`Hello TEJA FITNESS STUDIO, I want to inquire about the ${prog.title} program.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#D4AF37] uppercase tracking-wider group-hover:translate-x-1 transition-transform"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enquire Program</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
