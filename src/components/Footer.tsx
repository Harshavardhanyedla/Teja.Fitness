"use client";

import React from "react";
import Image from "next/image";
import { PHONE_PRIMARY, PHONE_SECONDARY, BRANCHES, getWhatsAppUrl } from "@/data/gymData";
import { Phone, MessageSquare, MapPin, ExternalLink, Dumbbell } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/SocialIcons";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070707] text-gray-400 border-t border-[#D4AF37]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="TEJA FITNESS STUDIO Logo"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]"
                />
              </div>
              <div>
                <h3 className="font-bebas text-3xl tracking-widest text-white leading-none">
                  TEJA <span className="text-[#D4AF37]">FITNESS</span>
                </h3>
                <span className="text-[10px] tracking-[0.25em] text-gray-400 font-semibold uppercase">
                  Studio • 4 Vizag Branches
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm font-light text-gray-400 leading-relaxed max-w-sm">
              Visakhapatnam&apos;s premier professional gym dedicated to strength, fat loss, muscle building, and life-changing physical transformations.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/tejafitnessstudio_official/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 hover:bg-[#D4AF37] hover:text-black text-gray-300 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-emerald-500/20 hover:bg-emerald-500 text-emerald-400 hover:text-black transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>


          {/* Quick Links */}
          <div>
            <h4 className="font-bebas text-2xl text-white tracking-wide uppercase mb-4">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs uppercase font-semibold tracking-wider">
              <li>
                <a href="#home" className="hover:text-[#D4AF37] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#D4AF37] transition-colors">About Us</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#D4AF37] transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#membership" className="hover:text-[#D4AF37] transition-colors">Membership Plans</a>
              </li>
              <li>
                <a href="#programs" className="hover:text-[#D4AF37] transition-colors">Training Programs</a>
              </li>
              <li>
                <a href="#transformations" className="hover:text-[#D4AF37] transition-colors">Transformations</a>
              </li>
              <li>
                <a href="#trainers" className="hover:text-[#D4AF37] transition-colors">Certified Trainers</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#D4AF37] transition-colors">Gym Gallery</a>
              </li>
              <li>
                <a href="#branches" className="hover:text-[#D4AF37] transition-colors">Branches</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Branches List */}
          <div>
            <h4 className="font-bebas text-2xl text-white tracking-wide uppercase mb-4">
              4 VIZAG BRANCHES
            </h4>
            <ul className="space-y-3 text-xs">
              {BRANCHES.map((b) => (
                <li key={b.id} className="flex flex-col">
                  <a
                    href={b.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-gray-200 hover:text-[#D4AF37] transition-colors flex items-center gap-1"
                  >
                    <MapPin className="w-3 h-3 text-[#D4AF37]" />
                    <span>{b.name}</span>
                  </a>
                  <span className="text-[11px] text-gray-500 ml-4 font-light">{b.area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Numbers & Desk */}
          <div>
            <h4 className="font-bebas text-2xl text-white tracking-wide uppercase mb-4">
              PHONE ENQUIRIES
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-[10px] text-[#D4AF37] font-bold uppercase">Desk 1</span>
                <a
                  href={`tel:${PHONE_PRIMARY}`}
                  className="block text-sm font-bold text-white hover:text-[#D4AF37] transition-colors"
                >
                  +91 {PHONE_PRIMARY}
                </a>
              </div>

              <div>
                <span className="text-[10px] text-[#D4AF37] font-bold uppercase">Desk 2</span>
                <a
                  href={`tel:${PHONE_SECONDARY}`}
                  className="block text-sm font-bold text-white hover:text-[#D4AF37] transition-colors"
                >
                  +91 {PHONE_SECONDARY}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl("Hello TEJA FITNESS STUDIO, please share membership options.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#D4AF37] text-black font-extrabold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-black" />
                  <span>WhatsApp Desk</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright & Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 font-light gap-4">
          <p>© {new Date().getFullYear()} TEJA FITNESS STUDIO. All Rights Reserved. Visakhapatnam, Andhra Pradesh.</p>
          <p>Designed for High Conversion WhatsApp Enquiries.</p>
        </div>

      </div>
    </footer>
  );
};
