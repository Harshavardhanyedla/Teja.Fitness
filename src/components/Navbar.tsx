"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight, ChevronRight } from "lucide-react";
import { getWhatsAppUrl } from "@/data/gymData";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Programs", href: "#programs" },
    { name: "Memberships", href: "#membership" },
    { name: "Trainers", href: "#trainers" },
    { name: "Transformations", href: "#transformations" },
    { name: "Branches", href: "#branches" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#070707]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/images/logo.png"
              alt="TEJA FITNESS STUDIO Logo"
              width={64}
              height={64}
              className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bebas text-2xl tracking-widest text-white leading-none group-hover:text-[#D4AF37] transition-colors">
              TEJA
            </span>
            <span className="text-[9px] tracking-[0.25em] text-gray-300 font-bold uppercase leading-none mt-0.5">
              FITNESS STUDIO
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold tracking-wider text-gray-200 hover:text-[#D4AF37] transition-colors relative py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Top Right Pill CTA */}
        <div className="hidden md:flex items-center">
          <a
            href={getWhatsAppUrl("Hello TEJA FITNESS STUDIO, I want to join the gym. Please share membership details.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#D4AF37] hover:bg-yellow-400 text-black font-extrabold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:scale-105"
          >
            <span>JOIN NOW</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-200 hover:text-white bg-white/5 border border-white/10"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#D4AF37]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#070707]/98 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-3"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-gray-200 hover:text-[#D4AF37] py-2 border-b border-white/5"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
              </a>
            ))}

            <div className="pt-3">
              <a
                href={getWhatsAppUrl("Hello TEJA FITNESS STUDIO, I am interested in joining.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#D4AF37] text-black font-extrabold text-xs tracking-wider uppercase shadow-lg"
              >
                <span>JOIN NOW</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
