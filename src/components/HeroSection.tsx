"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { getWhatsAppUrl } from "@/data/gymData";

export const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.log("Autoplay error:", err);
        });
      }
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
          className="w-full h-full object-cover filter brightness-[0.7] contrast-110 scale-105 pointer-events-none"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-athlete-working-out-with-heavy-ropes-in-the-gym-43093-large.mp4"
            type="video/mp4"
          />
          <source
            src="https://cdn.coverr.co/videos/coverr-crossfit-workout-with-ropes-2646/1080p.mp4"
            type="video/mp4"
          />
          <source
            src="https://cdn.coverr.co/videos/coverr-a-man-training-with-dumbbells-5452/1080p.mp4"
            type="video/mp4"
          />
        </video>

        {/* Ambient Dark Gradient & Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/40 to-[#070707]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_20%,_#070707_90%)] opacity-60" />
      </div>

      {/* Floating Gold Ambient Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,_rgba(212,175,55,0.12)_0%,_transparent_70%)] blur-3xl pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Top Capsule Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-6 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 shadow-lg"
        >
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-gray-200 uppercase">
            NOW OPEN IN VISAKHAPATNAM • 4 BRANCHES
          </span>
        </motion.div>

        {/* Main Signboard Focal Point: TEJA FITNESS STUDIO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center text-center"
        >
          {/* Logo Icon Accent */}
          <div className="relative w-20 h-20 sm:w-28 sm:h-28 mb-3 group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/images/logo.png"
              alt="TEJA FITNESS STUDIO Logo"
              width={128}
              height={128}
              className="w-full h-full object-contain filter drop-shadow-[0_0_25px_rgba(212,175,55,0.5)]"
            />
          </div>

          <h1 className="font-bebas text-6xl sm:text-8xl md:text-9xl xl:text-[9.5rem] font-extrabold tracking-wider uppercase leading-none drop-shadow-[0_10px_40px_rgba(0,0,0,0.95)]">
            <span className="text-white">TEJA </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF4D0] via-[#D4AF37] to-[#AA7C11] drop-shadow-[0_0_35px_rgba(212,175,55,0.45)]">
              FITNESS STUDIO
            </span>
          </h1>

          {/* Secondary Tagline: Transform Your Body, Build Your Discipline */}
          <p className="mt-4 sm:mt-6 font-bebas text-2xl sm:text-3xl md:text-4xl tracking-widest text-gray-200 uppercase font-bold drop-shadow-md">
            TRANSFORM YOUR BODY. <span className="text-[#D4AF37]">BUILD YOUR DISCIPLINE.</span>
          </p>
        </motion.div>

        {/* Subtitle Text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl font-light leading-relaxed text-center"
        >
          Premium Fitness Training Experience in Visakhapatnam. Re-engineered strength, elite conditioning, and state-of-the-art gym community across 4 branches.
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
