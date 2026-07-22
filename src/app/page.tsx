import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { MembershipPlans } from "@/components/MembershipPlans";
import { TrainingPrograms } from "@/components/TrainingPrograms";
import { Transformations } from "@/components/Transformations";
import { TrainersSection } from "@/components/TrainersSection";
import { GallerySection } from "@/components/GallerySection";
import { Testimonials } from "@/components/Testimonials";
import { BranchesSection } from "@/components/BranchesSection";
import { ContactSection } from "@/components/ContactSection";
import { WhatsAppCtaBanner } from "@/components/WhatsAppCtaBanner";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { MobileBottomBar } from "@/components/MobileBottomBar";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0B0B0B] text-gray-100 selection:bg-[#D4AF37] selection:text-black">
      {/* Top Navbar */}
      <Navbar />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. About Teja Fitness Studio & Statistics */}
      <AboutSection />

      {/* 3. Why Choose Us */}
      <WhyChooseUs />

      {/* 4. Membership Plans */}
      <MembershipPlans />

      {/* 5. Training Programs */}
      <TrainingPrograms />

      {/* 6. Body Transformations & Journey */}
      <Transformations />

      {/* 7. Certified Trainers */}
      <TrainersSection />

      {/* 8. Gym Masonry Gallery */}
      <GallerySection />

      {/* 9. Member Reviews & Testimonials */}
      <Testimonials />

      {/* 10. 4 Visakhapatnam Branches */}
      <BranchesSection />

      {/* 11. Contact & Quick Enquiry Form */}
      <ContactSection />

      {/* 12. WhatsApp Large Banner CTA */}
      <WhatsAppCtaBanner />

      {/* 13. FAQ Accordion */}
      <FaqSection />

      {/* 14. Footer */}
      <Footer />

      {/* Floating Elements */}
      <WhatsAppFloat />
      <MobileBottomBar />
    </main>
  );
}
