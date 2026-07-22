"use client";

import React from "react";
import { motion } from "framer-motion";
import { MEMBERSHIP_PLANS, getWhatsAppUrl } from "@/data/gymData";
import { Check, MessageSquare, Sparkles, Star, Zap } from "lucide-react";

export const MembershipPlans: React.FC = () => {
  return (
    <section id="membership" className="relative py-24 bg-[#0B0B0B] overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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
              AFFORDABLE LUXURY FITNESS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-bebas text-4xl sm:text-6xl font-extrabold text-white tracking-wide uppercase"
          >
            MEMBERSHIP <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#997A15]">PACKAGES</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-gray-300 font-light"
          >
            Transparent pricing with zero hidden charges. Choose the plan that matches your transformation goal.
          </motion.p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {MEMBERSHIP_PLANS.map((plan, index) => {
            const isPopular = plan.isPopular;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-3xl flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? "bg-[#141414] border-2 border-[#D4AF37] shadow-[0_0_35px_rgba(212,175,55,0.25)] lg:-translate-y-4 z-20"
                    : "bg-[#121212] border border-white/10 hover:border-[#D4AF37]/40 hover:shadow-xl"
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#997A15] text-black font-extrabold text-xs uppercase tracking-widest shadow-lg">
                    <Star className="w-3.5 h-3.5 fill-black" />
                    <span>MOST POPULAR</span>
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-extrabold tracking-widest text-[#D4AF37] uppercase bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/20">
                      {plan.tag}
                    </span>
                  </div>

                  {/* Plan Name */}
                  <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide uppercase">
                    {plan.duration}
                  </h3>

                  {/* Price */}
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-[#D4AF37]">₹</span>
                    <span className="font-bebas text-5xl sm:text-6xl font-extrabold text-white tracking-tight">
                      {plan.price}
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-gray-400 font-medium">{plan.perMonth}</p>

                  {/* Inclusions List */}
                  <div className="mt-8 pt-6 border-t border-white/10 space-y-3.5">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <div className="p-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="text-xs sm:text-sm text-gray-300 font-light leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="p-8 pt-0">
                  <a
                    href={getWhatsAppUrl(plan.whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl font-extrabold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg ${
                      isPopular
                        ? "bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#997A15] text-black hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                        : "bg-[#1F1F1F] border border-white/15 text-white hover:bg-[#D4AF37] hover:text-black hover:border-transparent"
                    }`}
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>Join Now</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Note Footer */}
        <div className="mt-12 text-center text-xs text-gray-400">
          <p>* Special discounts available for college students and couples. Contact us on WhatsApp for branch offers.</p>
        </div>

      </div>
    </section>
  );
};
