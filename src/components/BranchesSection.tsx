"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BRANCHES, getWhatsAppUrl } from "@/data/gymData";
import { MapPin, Phone, MessageSquare, ExternalLink, Clock, Sparkles } from "lucide-react";

export const BranchesSection: React.FC = () => {
  return (
    <section id="branches" className="relative py-24 bg-[#0B0B0B] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

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
              CONVENIENT VISAKHAPATNAM LOCATIONS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-bebas text-4xl sm:text-6xl font-extrabold text-white tracking-wide uppercase"
          >
            OUR 4 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#997A15]">BRANCHES</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-gray-300 font-light"
          >
            Visit your nearest Teja Fitness Studio branch in Visakhapatnam. State-of-the-art facilities equipped for your body transformation.
          </motion.p>
        </div>

        {/* 4 Branch Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BRANCHES.map((branch, index) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="rounded-3xl bg-[#141414] border border-white/10 hover:border-[#D4AF37]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:shadow-[0_15px_35px_rgba(212,175,55,0.15)] group"
            >
              <div>
                {/* Branch Building Image Header */}
                <div className="relative h-56 w-full overflow-hidden bg-black">
                  <Image
                    src={branch.image}
                    alt={branch.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/30 to-transparent" />

                  {/* Branch Number Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#070707]/80 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] font-extrabold uppercase tracking-widest">
                    <span>BRANCH #{index + 1}</span>
                  </div>

                  <div className="absolute top-4 right-4 p-2 rounded-xl bg-[#070707]/80 backdrop-blur-md border border-white/20 text-[#D4AF37]">
                    <MapPin className="w-4 h-4" />
                  </div>
                </div>

                {/* Branch Info */}
                <div className="p-6 pt-4">
                  {/* Branch Name */}
                  <h3 className="font-bebas text-3xl text-white tracking-wide uppercase group-hover:text-[#D4AF37] transition-colors">
                    {branch.name}
                  </h3>

                  {/* Address */}
                  <p className="mt-2 text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                    {branch.address}
                  </p>

                  {/* Timings */}
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-xs text-gray-300">
                    <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>{branch.timing}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Maps, Call, WhatsApp */}
              <div className="p-6 pt-0 space-y-3">
                {/* Google Maps Button */}
                <a
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/40 text-gray-200 text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-[#D4AF37]" />
                  <span>Google Maps Location</span>
                </a>

                <div className="grid grid-cols-2 gap-2">
                  {/* Call Button */}
                  <a
                    href={`tel:${branch.phone}`}
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#1F1F1F] border border-white/10 hover:border-white/30 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Call</span>
                  </a>

                  {/* WhatsApp Button */}
                  <a
                    href={getWhatsAppUrl(branch.whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#997A15] text-black text-xs font-extrabold uppercase tracking-wider shadow-md hover:scale-105 transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-black" />
                    <span>WhatsApp</span>
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

