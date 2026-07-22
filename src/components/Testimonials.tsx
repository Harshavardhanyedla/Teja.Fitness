"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/data/gymData";
import { Sparkles, Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="relative py-24 bg-[#0E0E0E] overflow-hidden">
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
              MEMBER REVIEWS & RECOGNITION
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-bebas text-4xl sm:text-6xl font-extrabold text-white tracking-wide uppercase"
          >
            WHAT OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#997A15]">MEMBERS SAY</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-gray-300 font-light"
          >
            Trusted by over 1,000 active members across 4 branches in Visakhapatnam.
          </motion.p>
        </div>

        {/* Testimonials Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-[#141414] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 relative flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(212,175,55,0.12)]"
            >
              <Quote className="w-12 h-12 text-[#D4AF37]/15 absolute top-6 right-6" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>

                {/* Result Tag */}
                <span className="inline-block text-[11px] font-extrabold text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/30 mb-4">
                  {item.result}
                </span>

                {/* Review Text */}
                <p className="text-sm text-gray-300 font-light italic leading-relaxed">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>

              {/* User Avatar & Info */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#D4AF37]/40">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{item.name}</h4>
                  <p className="text-xs text-[#D4AF37]">{item.branch}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
