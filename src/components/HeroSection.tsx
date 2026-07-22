"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { getWhatsAppUrl } from "@/data/gymData";

export const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Force immediate video playback on component mount
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.log("Autoplay prevented or video loading:", err);
      });
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 bg-[#070707]">
      {/* Background Cinematic Gym Video Loop */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero_bg.jpg"
          onCanPlay={(e) => e.currentTarget.play()}
          className="w-full h-full object-cover filter brightness-[0.55] contrast-125 scale-105 pointer-events-none"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-crossfit-workout-with-ropes-2646/1080p.mp4"
            type="video/mp4"
          />
          <source
            src="https://cdn.coverr.co/videos/coverr-a-man-training-with-dumbbells-5452/1080p.mp4"
            type="video/mp4"
          />
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-athlete-working-out-with-heavy-ropes-in-the-gym-43093-large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Ambient Dark Gradient & Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/60 to-[#070707]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#070707_90%)] opacity-85" />
      </div>

      {/* Floating Gold Ambient Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,_rgba(212,175,55,0.12)_0%,_transparent_70%)] blur-3xl pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Top Capsule Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-6 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 shadow-lg"
        >
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-gray-200 uppercase">
            NOW OPEN IN VISAKHAPATNAM
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl text-center"
        >
          <h1 className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight uppercase leading-[0.93] drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]">
            <span className="text-white block">TRANSFORM YOUR</span>
            <span className="text-white block">BODY.</span>
            <span className="block">
              <span className="text-white">BUILD YOUR </span>
              <span className="text-[#D4AF37] drop-shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                DISCIPLINE.
              </span>
            </span>
          </h1>
        </motion.div>

        {/* Subtitle Text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl font-light leading-relaxed text-center"
        >
          Premium Fitness Training Experience in Visakhapatnam. Re-engineered strength, elite conditioning, and state-of-the-art startup gym community.
        </motion.p>

        {/* Action Buttons Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
        >
          {/* Primary Pill Button: JOIN NOW */}
          <a
            href={getWhatsAppUrl("Hello TEJA FITNESS STUDIO, I'm interested in joining your gym. Please share membership details.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#D4AF37] hover:bg-yellow-400 text-black font-extrabold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.35)] hover:scale-105"
          >
            <span>JOIN NOW</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Secondary Button: EXPLORE MEMBERSHIPS */}
          <a
            href="#membership"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-white hover:text-[#D4AF37] font-bold text-xs uppercase tracking-wider transition-colors group"
          >
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
              <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
            </div>
            <span>EXPLORE MEMBERSHIPS</span>
          </a>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 sm:mt-20 inline-flex flex-col items-center gap-1 text-[10px] font-bold tracking-[0.25em] text-gray-400 hover:text-[#D4AF37] uppercase transition-colors"
        >
          <span>SCROLL DOWN</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-4 h-4 text-[#D4AF37]" />
          </motion.div>
        </motion.a>

      </div>
    </section>
  );
};
