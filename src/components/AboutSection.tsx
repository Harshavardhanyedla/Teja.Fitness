"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Award, Users, Shield, Sparkles, Building2, Flame } from "lucide-react";

// Count-up helper component
const CountUpStat: React.FC<{ end: number; suffix?: string; title: string; subtitle: string }> = ({
  end,
  suffix = "",
  title,
  subtitle,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const stepTime = 30;
      const steps = Math.ceil(duration / stepTime);
      const increment = end / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <div
      ref={ref}
      className="relative p-6 rounded-2xl bg-[#121212] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300 group hover:shadow-[0_0_25px_rgba(212,175,55,0.15)]"
    >
      <div className="flex flex-col items-center text-center">
        <span className="font-bebas text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#997A15] group-hover:scale-110 transition-transform duration-300">
          {count}
          {suffix}
        </span>
        <h4 className="mt-2 text-base font-bold text-white uppercase tracking-wider">{title}</h4>
        <p className="mt-1 text-xs text-gray-400 font-medium">{subtitle}</p>
      </div>
    </div>
  );
};

export const AboutSection: React.FC = () => {
  const highlights = [
    { title: "Experienced Trainers", desc: "Certified coaches with over a decade of combined fitness expertise." },
    { title: "Premium Equipment", desc: "Biometrically calibrated, imported heavy duty machines for safety." },
    { title: "Friendly Environment", desc: "Inclusive, encouraging culture where everyone belongs." },
    { title: "100% Personal Guidance", desc: "Customized workout routines tailored strictly to your goals." },
    { title: "Hygienic & Sanitized", desc: "Daily sanitized workout floor, lockers, and clean shower rooms." },
    { title: "Driven Motivation", desc: "Unmatched energy, music, and community passion every single day." },
  ];

  return (
    <section id="about" className="relative py-24 bg-[#0B0B0B] overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

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
              ABOUT TEJA FITNESS STUDIO
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-bebas text-4xl sm:text-6xl font-extrabold text-white tracking-wide uppercase"
          >
            VISAKHAPATNAM&apos;S PREMIER <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#997A15]">FITNESS DESTINATION</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-gray-300 font-light leading-relaxed"
          >
            Founded with a mission to deliver elite strength training and guaranteed body transformations. Across our 4 state-of-the-art branches in Visakhapatnam, we empower members with certified coaching, hygienic facilities, and unwavering community support.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 relative"
          >
            <div className="relative h-[420px] sm:h-[500px] rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl group">
              <Image
                src="/images/trainer_teja.jpg"
                alt="Teja Fitness Studio Founder and Gym Floor"
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-80" />
              
              {/* Badge overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#0B0B0B]/85 backdrop-blur-md border border-[#D4AF37]/40 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-[#F3E5AB] to-[#D4AF37] text-black">
                    <Flame className="w-6 h-6 font-bold" />
                  </div>
                  <div>
                    <h4 className="font-bebas text-2xl text-white tracking-wide">100% RESULTS DRIVEN</h4>
                    <p className="text-xs text-gray-300">Customized diet, strength programming & daily accountability.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Highlights Checklist */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-5 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <h4 className="text-sm font-bold text-white tracking-wide group-hover:text-[#D4AF37] transition-colors">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-xs text-gray-400 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Animated Statistics Section */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wider">
              OUR NUMBERS SPEAK FOR THEMSELVES
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6">
            <CountUpStat end={4} title="Branches" subtitle="Akkayyapalem, 104 Area, Murali Nagar, Yendada" />
            <CountUpStat end={1000} suffix="+" title="Members" subtitle="Active Fitness Enthusiasts" />
            <CountUpStat end={15} suffix="+" title="Certified Trainers" subtitle="1-on-1 Guidance Experts" />
            <CountUpStat end={100} suffix="%" title="Modern Equipment" subtitle="Biometrically Calibrated" />
            <CountUpStat end={8} suffix="+" title="Years Excellence" subtitle="Transforming Vizag" />
          </div>
        </div>

      </div>
    </section>
  );
};
