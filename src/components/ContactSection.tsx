"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PHONE_PRIMARY, PHONE_SECONDARY, BRANCHES, getWhatsAppUrl } from "@/data/gymData";
import { Phone, MessageSquare, MapPin, Clock, Sparkles, Send, CheckCircle2 } from "lucide-react";

export const ContactSection: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("Akkayyapalem");
  const [goal, setGoal] = useState("Weight Loss");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMsg = `Hello TEJA FITNESS STUDIO!%0A%0A*Name:* ${encodeURIComponent(
      name
    )}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Preferred Branch:* ${encodeURIComponent(
      selectedBranch
    )}%0A*Goal:* ${encodeURIComponent(goal)}%0A*Message:* ${encodeURIComponent(
      message || "Interested in membership details"
    )}`;

    const whatsappUrl = `https://wa.me/91${PHONE_PRIMARY}?text=${formattedMsg}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="relative py-24 bg-[#0E0E0E] overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

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
              GET IN TOUCH WITH US
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-bebas text-4xl sm:text-6xl font-extrabold text-white tracking-wide uppercase"
          >
            CONTACT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#997A15]">TEJA FITNESS STUDIO</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-gray-300 font-light"
          >
            Have questions about membership plans, personal training, or branch timings? Contact us directly.
          </motion.p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Phone Numbers & Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-[#141414] border border-[#D4AF37]/30 space-y-6">
              <h3 className="font-bebas text-3xl text-white tracking-wide uppercase">
                DIRECT CONTACT NUMBERS
              </h3>

              <div className="space-y-4">
                {/* Primary Number */}
                <a
                  href={`tel:${PHONE_PRIMARY}`}
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#1D1D1D] border border-white/10 hover:border-[#D4AF37]/60 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-[#D4AF37] text-black">
                      <Phone className="w-5 h-5 font-bold" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider">PRIMARY DESK</span>
                      <h4 className="font-bebas text-2xl text-white tracking-wider">{PHONE_PRIMARY}</h4>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#D4AF37] group-hover:underline">Call Now &rarr;</span>
                </a>

                {/* Secondary Number */}
                <a
                  href={`tel:${PHONE_SECONDARY}`}
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#1D1D1D] border border-white/10 hover:border-[#D4AF37]/60 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-[#D4AF37] text-black">
                      <Phone className="w-5 h-5 font-bold" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider">SUPPORT DESK</span>
                      <h4 className="font-bebas text-2xl text-white tracking-wider">{PHONE_SECONDARY}</h4>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#D4AF37] group-hover:underline">Call Now &rarr;</span>
                </a>
              </div>

              {/* Quick Hours */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Clock className="w-5 h-5 text-[#D4AF37]" />
                  <span>Mon - Sat: 5:00 AM - 10:00 PM</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <MapPin className="w-5 h-5 text-[#D4AF37]" />
                  <span>4 Visakhapatnam Branches (Akkayyapalem, 104 Area, Murali Nagar, Yendada)</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Action Box */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#161616] to-[#0F0F0F] border border-emerald-500/30">
              <div className="flex items-center gap-3 mb-3">
                <MessageSquare className="w-6 h-6 text-emerald-400 fill-emerald-400" />
                <h4 className="font-bebas text-2xl text-white tracking-wide">INSTANT WHATSAPP CHAT</h4>
              </div>
              <p className="text-xs text-gray-300 font-light mb-5">
                Prefer texting? Send us a quick WhatsApp message and our team will respond within minutes.
              </p>
              <a
                href={getWhatsAppUrl("Hello TEJA FITNESS STUDIO, I want to inquire about membership plans and branch offers.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-500 text-black font-extrabold text-xs uppercase tracking-wider hover:bg-emerald-400 transition-colors shadow-lg"
              >
                <MessageSquare className="w-4 h-4 fill-black" />
                <span>Open WhatsApp Chat</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: WhatsApp Interactive Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-3xl bg-[#141414] border border-white/10 space-y-6 shadow-2xl"
            >
              <div>
                <h3 className="font-bebas text-3xl text-white tracking-wide uppercase">
                  QUICK ENQUIRY FORM
                </h3>
                <p className="text-xs text-gray-400 font-light mt-1">
                  Fill out this form to send a pre-filled WhatsApp message directly to our desk.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#1D1D1D] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter 10-digit mobile number"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#1D1D1D] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                    Preferred Branch
                  </label>
                  <select
                    value={selectedBranch}
                    onChange={(e) => setSelectedBranch(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#1D1D1D] border border-white/10 text-white focus:outline-none focus:border-[#D4AF37] transition-colors text-sm"
                  >
                    <option value="Akkayyapalem">Akkayyapalem Branch</option>
                    <option value="104 Area">104 Area Branch</option>
                    <option value="Murali Nagar">Murali Nagar Branch</option>
                    <option value="Yendada">Yendada Branch</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                    Primary Fitness Goal
                  </label>
                  <select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#1D1D1D] border border-white/10 text-white focus:outline-none focus:border-[#D4AF37] transition-colors text-sm"
                  >
                    <option value="Weight Loss">Weight Loss & Fat Burn</option>
                    <option value="Muscle Building">Muscle Building & Hypertrophy</option>
                    <option value="Personal Training">1-on-1 Personal Training</option>
                    <option value="Strength Conditioning">Strength & Powerlifting</option>
                    <option value="General Fitness">General Health & Fitness</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                  Additional Message (Optional)
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask about discounts, batch timings, personal training packages..."
                  className="w-full px-4 py-3.5 rounded-xl bg-[#1D1D1D] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#997A15] text-black font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:scale-105 transition-all"
              >
                <Send className="w-4 h-4 fill-black" />
                <span>Send WhatsApp Enquiry</span>
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
