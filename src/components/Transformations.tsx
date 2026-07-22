"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Trophy, Dumbbell, Utensils, Repeat, Award, Quote, MessageSquare } from "lucide-react";
import { getWhatsAppUrl } from "@/data/gymData";

export const Transformations: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Structured Workout",
      desc: "Custom heavy compound lifting & targeted cardio designed around your current strength level.",
      icon: <Dumbbell className="w-6 h-6 text-[#D4AF37]" />,
    },
    {
      num: "02",
      title: "Calibrated Diet",
      desc: "Personalized protein-rich meal chart tailored to traditional South Indian non-veg & veg foods.",
      icon: <Utensils className="w-6 h-6 text-[#D4AF37]" />,
    },
    {
      num: "03",
      title: "Unwavering Consistency",
      desc: "Daily trainer check-ins, accountability tracking, and motivation to keep you on schedule.",
      icon: <Repeat className="w-6 h-6 text-[#D4AF37]" />,
    },
    {
      num: "04",
      title: "Guaranteed Result",
      desc: "Noticeable body fat reduction, muscle tone, strength gains and energy within 30-90 days.",
      icon: <Award className="w-6 h-6 text-[#D4AF37]" />,
    },
  ];

  return (
    <section id="transformations" className="relative py-24 bg-[#0B0B0B] overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#161616] border border-[#D4AF37]/30 mb-4"
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest">
              REAL PEOPLE • REAL RESULTS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-bebas text-4xl sm:text-6xl font-extrabold text-white tracking-wide uppercase"
          >
            BODY <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#997A15]">TRANSFORMATIONS</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-gray-300 font-light"
          >
            See how hundreds of Vizag locals rebuilt their confidence, shed excess body fat, and gained athletic strength.
          </motion.p>
        </div>

        {/* Featured Transformation Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative h-[380px] sm:h-[480px] rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl group"
          >
            <Image
              src="/images/transformation.jpg"
              alt="Teja Fitness Studio Before After Body Transformation Showcase"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#0B0B0B]/85 backdrop-blur-md border border-[#D4AF37]/30">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">MEMBER RESULT</span>
                  <h4 className="font-bebas text-2xl text-white">SURESH VARMA // 90-DAY SHRED</h4>
                  <p className="text-xs text-gray-300">Lost 12 kg Fat • Gained 4 kg Muscle Mass</p>
                </div>
                <div className="px-4 py-2 rounded-xl bg-[#D4AF37] text-black font-extrabold text-xs uppercase tracking-wider">
                  Akkayyapalem
                </div>
              </div>
            </div>
          </motion.div>

          {/* Motivational Quote & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-[#141414] border border-[#D4AF37]/30 relative overflow-hidden">
              <Quote className="w-16 h-16 text-[#D4AF37]/15 absolute top-4 right-4" />
              
              <h3 className="font-bebas text-3xl text-white tracking-wide uppercase">
                &ldquo;DISCIPLINE IS DOING WHAT NEEDS TO BE DONE, EVEN WHEN YOU DON&apos;T FEEL LIKE DOING IT.&rdquo;
              </h3>

              <p className="mt-4 text-sm text-gray-300 font-light leading-relaxed">
                Your dream physique is not created by luck. It is the result of structured training, daily macro guidance, and expert personal trainers by your side.
              </p>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37] text-black flex items-center justify-center font-bebas text-2xl font-bold">
                  TF
                </div>
                <div>
                  <h5 className="font-bold text-white text-sm">TEJA FITNESS BLUEPRINT</h5>
                  <p className="text-xs text-[#D4AF37]">Visakhapatnam, AP</p>
                </div>
              </div>
            </div>

            <a
              href={getWhatsAppUrl("Hello TEJA FITNESS STUDIO, I want to start my body transformation journey. Please contact me.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-2xl bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#997A15] text-black font-extrabold text-sm uppercase tracking-wider shadow-lg hover:scale-105 transition-all"
            >
              <MessageSquare className="w-5 h-5 fill-black" />
              <span>Start Your Transformation</span>
            </a>
          </motion.div>
        </div>

        {/* The 4 Step Transformation Journey */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wider">
              THE 4-STEP TRANSFORMATION JOURNEY
            </h3>
            <p className="text-sm text-gray-400 font-light">How we take you from step zero to peak physical condition</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-[#141414] border border-white/10 hover:border-[#D4AF37]/50 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-[#1F1F1F] border border-white/10 group-hover:bg-[#D4AF37]/10 transition-colors">
                    {step.icon}
                  </div>
                  <span className="font-bebas text-3xl text-gray-600 group-hover:text-[#D4AF37] transition-colors">
                    {step.num}
                  </span>
                </div>

                <h4 className="font-bebas text-2xl text-white tracking-wide">{step.title}</h4>
                <p className="mt-2 text-xs text-gray-400 font-light leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
