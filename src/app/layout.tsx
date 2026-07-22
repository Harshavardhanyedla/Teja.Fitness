import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TEJA FITNESS STUDIO | Premium Gym & Fitness Center in Visakhapatnam",
  description:
    "Transform your body at Teja Fitness Studio – Visakhapatnam's premier luxury fitness center with 4 branches in Akkayyapalem, 104 Area, Murali Nagar & Yendada. Personal training, weight loss, fat loss, strength training, and modern equipment.",
  keywords: [
    "Gym in Visakhapatnam",
    "Fitness Studio in Vizag",
    "Best Gym Near Me",
    "Personal Training Visakhapatnam",
    "Weight Loss Vizag",
    "Body Transformation Visakhapatnam",
    "Muscle Building",
    "Fitness Membership Vizag",
    "Strength Training Akkayyapalem",
    "Teja Fitness Studio",
  ],
  authors: [{ name: "Teja Fitness Studio" }],
  openGraph: {
    title: "TEJA FITNESS STUDIO | Visakhapatnam's Premier Luxury Gym",
    description:
      "4 Branches in Visakhapatnam: Akkayyapalem, 104 Area, Murali Nagar, Yendada. Join now for certified personal trainers, modern equipment, and guaranteed body transformation.",
    url: "https://tejafitnessstudio.com",
    siteName: "TEJA FITNESS STUDIO",
    images: [
      {
        url: "/images/hero_bg.jpg",
        width: 1200,
        height: 630,
        alt: "Teja Fitness Studio Visakhapatnam",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth dark h-full antialiased"
    >
      <body className="font-sans bg-[#0B0B0B] text-gray-100 min-h-full flex flex-col selection:bg-[#D4AF37] selection:text-black">
        {children}
      </body>
    </html>
  );
}


