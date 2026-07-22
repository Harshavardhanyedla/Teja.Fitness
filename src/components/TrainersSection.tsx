"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TRAINERS, getWhatsAppUrl } from "@/data/gymData";
import { Sparkles, Award, MessageSquare } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/SocialIcons";

export const TrainersSection: React.FC = () => {
  return (
    <section id="trainers" className="relative py-24 bg-[#0E0E0E] overflow-hidden">
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
              CERTIFIED COACHING TEAM
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-bebas text-4xl sm:text-6xl font-extrabold text-white tracking-wide uppercase"
          >
            MEET OUR EXPERT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#997A15]">TRAINERS</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-gray-300 font-light"
          >
            Dedicated personal trainers committed to your form, safety, diet accountability, and peak physical achievements.
          </motion.p>
        </div>

        {/* Trainers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRAINERS.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="rounded-3xl bg-[#141414] border border-white/10 overflow-hidden group hover:border-[#D4AF37]/60 transition-all duration-300 hover:shadow-[0_15px_35px_rgba(212,175,55,0.15)] flex flex-col justify-between"
            >
              <div>
                {/* Photo Header */}
                <div className="relative h-80 w-full overflow-hidden bg-black">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-90" />

                  {/* Experience Badge */}
                  <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#0B0B0B]/80 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
                    <Award className="w-3.5 h-3.5" />
                    <span>{trainer.experience}</span>
                  </div>
                </div>

                {/* Trainer Info */}
                <div className="p-8 pt-2">
                  <span className="text-[11px] font-bold tracking-widest text-[#D4AF37] uppercase">
                    {trainer.role}
                  </span>

                  <h3 className="font-bebas text-3xl text-white tracking-wide mt-1">
                    {trainer.name}
                  </h3>

                  <p className="text-xs font-semibold text-gray-300 mt-1">
                    Specialization: <span className="text-[#D4AF37]">{trainer.specialization}</span>
                  </p>

                  <p className="mt-4 text-xs text-gray-400 font-light leading-relaxed">
                    {trainer.bio}
                  </p>
                </div>
              </div>

              {/* Bottom Actions & Social Icons */}
              <div className="px-8 pb-8 pt-4 border-t border-white/5 flex items-center justify-between">
                <a
                  href={getWhatsAppUrl(`Hello TEJA FITNESS STUDIO, I want to book a personal training trial session with ${trainer.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-extrabold text-[#D4AF37] uppercase tracking-wider hover:underline"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Book Trial</span>
                </a>

                <div className="flex items-center gap-2">
                  <a
                    href="https://www.instagram.com/tejafitnessstudio_official/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-white/5 hover:bg-[#D4AF37] hover:text-black text-gray-300 transition-colors"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

