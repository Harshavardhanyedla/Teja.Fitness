export const WHATSAPP_PRIMARY = "8121919926";
export const WHATSAPP_SECONDARY = "8297854262";
export const PHONE_PRIMARY = "8121919926";
export const PHONE_SECONDARY = "8297854262";

export const DEFAULT_WHATSAPP_MSG = encodeURIComponent(
  "Hello TEJA FITNESS STUDIO, I'm interested in joining your gym. Please share membership details."
);

export const getWhatsAppUrl = (customMsg?: string) => {
  const msg = customMsg ? encodeURIComponent(customMsg) : DEFAULT_WHATSAPP_MSG;
  return `https://wa.me/91${WHATSAPP_PRIMARY}?text=${msg}`;
};

export const BRANCHES = [
  {
    id: "akkayyapalem",
    name: "Akkayyapalem Branch",
    area: "Akkayyapalem",
    address: "Main Road, Near Highway Signal, Akkayyapalem, Visakhapatnam, AP",
    timing: "5:00 AM - 10:00 PM (Mon - Sat)",
    mapUrl: "https://maps.google.com/?q=Akkayyapalem+Visakhapatnam",
    phone: PHONE_PRIMARY,
    whatsappMsg: "Hello TEJA FITNESS STUDIO, I want to inquire about Akkayyapalem branch membership details.",
    image: "/images/branches/branch_akkayyapalem.jpg",
  },
  {
    id: "104-area",
    name: "104 Area Branch",
    area: "104 Area",
    address: "Opp. Industrial Estate Entrance, 104 Area, Visakhapatnam, AP",
    timing: "5:00 AM - 10:00 PM (Mon - Sat)",
    mapUrl: "https://maps.google.com/?q=104+Area+Visakhapatnam",
    phone: PHONE_PRIMARY,
    whatsappMsg: "Hello TEJA FITNESS STUDIO, I want to inquire about 104 Area branch membership details.",
    image: "/images/branches/branch_104_area.jpg",
  },
  {
    id: "murali-nagar",
    name: "Murali Nagar Branch",
    area: "Murali Nagar",
    address: "Near Water Tank, Murali Nagar, Visakhapatnam, AP",
    timing: "5:00 AM - 10:00 PM (Mon - Sat)",
    mapUrl: "https://maps.google.com/?q=Murali+Nagar+Visakhapatnam",
    phone: PHONE_SECONDARY,
    whatsappMsg: "Hello TEJA FITNESS STUDIO, I want to inquire about Murali Nagar branch membership details.",
    image: "/images/branches/branch_murali_nagar.jpg",
  },
  {
    id: "yendada",
    name: "Yendada Branch",
    area: "Yendada",
    address: "Near IT SEZ Road, Yendada, Visakhapatnam, AP",
    timing: "5:00 AM - 10:00 PM (Mon - Sat)",
    mapUrl: "https://maps.google.com/?q=Yendada+Visakhapatnam",
    phone: PHONE_SECONDARY,
    whatsappMsg: "Hello TEJA FITNESS STUDIO, I want to inquire about Yendada branch membership details.",
    image: "/images/branches/branch_yendada.jpg",
  },
];

export const MEMBERSHIP_PLANS = [
  {
    id: "1-month",
    duration: "1 Month",
    price: "3,000",
    rawPrice: 3000,
    perMonth: "₹3,000/mo",
    isPopular: false,
    tag: "STARTER PACK",
    features: [
      "Access to all Gym Zones",
      "General Fitness Guidance",
      "Locker & Shower Facility",
      "Steam Bath (Weekend Access)",
      "Free Body Composition Analysis",
    ],
    whatsappMsg: "Hello TEJA FITNESS STUDIO, I want to join the 1 Month Plan (₹3,000). Please share enrollment steps.",
  },
  {
    id: "3-months",
    duration: "3 Months",
    price: "6,500",
    rawPrice: 6500,
    perMonth: "₹2,166/mo",
    isPopular: true,
    tag: "MOST POPULAR",
    features: [
      "Full Gym & Cardio Zone Access",
      "Personalized Workout Chart",
      "Customized Nutrition & Diet Plan",
      "Weekly Body Composition Tracking",
      "Locker & Steam Bath Facility",
      "1 Complimentary Personal Training Session",
    ],
    whatsappMsg: "Hello TEJA FITNESS STUDIO, I want to join the 3 Months Plan (₹6,500). Please reserve my spot.",
  },
  {
    id: "6-months",
    duration: "6 Months",
    price: "12,000",
    rawPrice: 12000,
    perMonth: "₹2,000/mo",
    isPopular: false,
    tag: "TRANSFORMATION PACK",
    features: [
      "Unlimited Multi-Branch Access",
      "Dedicated Trainer Guidance",
      "Advanced Diet & Fat Loss Protocol",
      "Bi-Weekly Progress Assessment",
      "Steam Bath & Spa Zone",
      "Free Gym Shaker & T-Shirt",
    ],
    whatsappMsg: "Hello TEJA FITNESS STUDIO, I want to join the 6 Months Plan (₹12,000). Please contact me.",
  },
  {
    id: "12-months",
    duration: "12 Months",
    price: "18,000",
    rawPrice: 18000,
    perMonth: "₹1,500/mo",
    isPopular: false,
    tag: "BEST VALUE",
    features: [
      "VIP All-Branch Access Year-Round",
      "Priority Personal Trainer Booking",
      "Comprehensive Macro Diet Planning",
      "Free Supplementation Consultation",
      "Unlimited Locker & Steam Access",
      "2 Gift Passes for Friends/Family",
    ],
    whatsappMsg: "Hello TEJA FITNESS STUDIO, I want to join the 12 Months Annual VIP Plan (₹18,000). Please contact me.",
  },
];

export const PROGRAMS = [
  {
    id: "strength",
    title: "Strength Training",
    description: "Build functional power, muscle density, and lift heavier with progressive overload routines.",
    icon: "Dumbbell",
    tags: ["Powerlifting", "Hypertrophy", "Form Focus"],
  },
  {
    id: "weight-loss",
    title: "Weight Loss & Fat Burning",
    description: "High-intensity calorie burning protocols coupled with targeted metabolic conditioning.",
    icon: "Flame",
    tags: ["Calorie Burn", "HIIT", "Cardio Blast"],
  },
  {
    id: "muscle-building",
    title: "Muscle Building",
    description: "Hypertrophy-focused training designed to sculpt, tone, and maximize lean muscle mass gains.",
    icon: "Zap",
    tags: ["Bodybuilding", "Volume", "Symmetry"],
  },
  {
    id: "recomposition",
    title: "Body Recomposition",
    description: "Simultaneously strip stubborn fat while preserving and building lean athletic muscle.",
    icon: "RefreshCw",
    tags: ["Fat Loss", "Lean Gain", "Diet Tracking"],
  },
  {
    id: "cardio",
    title: "Cardio & Endurance Zone",
    description: "State-of-the-art treadmills, spin bikes, and stairmasters for supreme stamina and heart health.",
    icon: "HeartPulse",
    tags: ["Stamina", "Heart Health", "Endurance"],
  },
  {
    id: "functional",
    title: "Functional Fitness",
    description: "Agility, core strength, kettlebell conditioning, and mobility exercises for daily athletic performance.",
    icon: "Activity",
    tags: ["Agility", "Core", "Mobility"],
  },
  {
    id: "personal-training",
    title: "1-on-1 Personal Training",
    description: "Dedicated certified trainer for 100% focused form instruction, custom diet, and fast results.",
    icon: "UserCheck",
    tags: ["1-on-1", "Custom Plan", "Fast Results"],
  },
  {
    id: "group-training",
    title: "Group Fitness Classes",
    description: "Energetic group workouts, Zumba, Functional HIIT circuits, and team motivation.",
    icon: "Users",
    tags: ["Community", "Energy", "Group HIIT"],
  },
  {
    id: "womens-fitness",
    title: "Women's Fitness Zone",
    description: "Tailored workout environment designed specifically for toning, glute strength, and female health.",
    icon: "Sparkles",
    tags: ["Safe Space", "Toning", "Female Guidance"],
  },
  {
    id: "beginner-advanced",
    title: "Beginner & Advanced Programs",
    description: "Structured pathways from absolute gym novices to elite competitive strength athletes.",
    icon: "Trophy",
    tags: ["All Levels", "Structured", "Progression"],
  },
];

export const TRAINERS = [
  {
    id: "teja",
    name: "Master Teja",
    role: "Head Coach & Founder",
    specialization: "Body Recomposition & Strength",
    experience: "10+ Years Exp",
    bio: "Certified Master Trainer with a proven track record of transforming 800+ clients in Visakhapatnam. Specializes in heavy compound lifting and sustainable fat loss.",
    image: "/images/trainer_teja.jpg",
  },
  {
    id: "sarah",
    name: "Coach Sarah",
    role: "Senior Fitness Specialist",
    specialization: "Women's Fitness & High-Intensity HIIT",
    experience: "6+ Years Exp",
    bio: "Passionate about empowering women through strength conditioning, core stability, and post-pregnancy body restoration.",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "vikram",
    name: "Coach Vikram",
    role: "Functional & Strength Lead",
    specialization: "Powerlifting & Bodybuilding",
    experience: "8+ Years Exp",
    bio: "State-level powerlifter dedicated to perfecting member technique, preventing injuries, and maximizing muscle hypertrophy.",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=600",
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Professional Certified Trainers",
    description: "Qualified fitness experts who guide every rep, posture, and set for maximum safety.",
    icon: "Award",
  },
  {
    title: "Modern Premium Equipment",
    description: "Imported biometrically calibrated plate-loaded and pin-selected machines.",
    icon: "ShieldCheck",
  },
  {
    title: "1-on-1 Personal Guidance",
    description: "Tailored workout routines customized to your exact body type and goals.",
    icon: "Target",
  },
  {
    title: "Scientific Weight Loss Programs",
    description: "Proven metabolic fat loss protocols with guaranteed visible monthly results.",
    icon: "TrendingDown",
  },
  {
    title: "Strength & Power Zone",
    description: "Dedicated power racks, deadlift platforms, and heavy dumbbell ranges up to 50kg.",
    icon: "Dumbbell",
  },
  {
    title: "High Performance Cardio",
    description: "Commercial grade treadmills with screen displays, elliptical cross-trainers & rowers.",
    icon: "Zap",
  },
  {
    title: "Functional & Core Turf",
    description: "Spacious artificial grass turf for kettlebells, battle ropes, plyo boxes & agility drills.",
    icon: "Layers",
  },
  {
    title: "Guaranteed Body Transformation",
    description: "Structured 90-day blueprint combining strength work and personalized diet tracking.",
    icon: "Sparkles",
  },
  {
    title: "Friendly & Motivating Environment",
    description: "Clean, hygienic, inclusive culture where every member feels welcomed and driven.",
    icon: "Smile",
  },
  {
    title: "Flexible Gym Timings",
    description: "Open from 5:00 AM to 10:00 PM so you never miss a workout around your work schedule.",
    icon: "Clock",
  },
  {
    title: "Customized Diet Guidance",
    description: "Macro-calculated nutrition plans aligned with traditional South Indian & fitness diets.",
    icon: "Utensils",
  },
  {
    title: "Safe & Hygienic Workout Space",
    description: "Sanitized equipment after every session, air-conditioned floor, and CCTV security.",
    icon: "Lock",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Kalyan Kumar",
    branch: "Akkayyapalem Branch",
    rating: 5,
    result: "Lost 14 kg in 4 Months",
    review:
      "Teja Fitness Studio completely changed my lifestyle. Master Teja and the trainers pay personal attention to every member. Equipment is top notch and always clean!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 2,
    name: "Priyanka R.",
    branch: "Yendada Branch",
    rating: 5,
    result: "Gained Strength & Toned Body",
    review:
      "As a beginner woman, I was hesitant to start gymming. But Coach Sarah and the team created a super comfortable environment. Best gym in Vizag hands down!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 3,
    name: "Suresh Varma",
    branch: "104 Area Branch",
    rating: 5,
    result: "Gained 6 kg Lean Muscle",
    review:
      "The 3-month package with personal diet plan gave me amazing muscle growth. Heavy dumbbell collection and powerlifting racks are incredible.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
  },
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    category: "Interior",
    title: "Luxury Power Zone",
    image: "/images/hero_bg.jpg",
  },
  {
    id: 2,
    category: "Equipment",
    title: "Heavy Dumbbell Racks",
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    category: "Workout",
    title: "Squat & Power Rack",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    category: "Cardio",
    title: "Cardio & Endurance Area",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    category: "Members",
    title: "Personal Training Session",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    category: "Interior",
    title: "Aesthetic LED Floor",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800",
  },
];

export const FAQS = [
  {
    q: "What are your gym operating hours?",
    a: "Teja Fitness Studio is open from 5:00 AM to 10:00 PM Monday through Saturday across all 4 branches in Visakhapatnam. Sunday morning timings are 6:00 AM to 12:00 PM.",
  },
  {
    q: "Do you provide 1-on-1 personal training?",
    a: "Yes! We have certified personal trainers at all 4 branches. Personal training includes custom workout plans, dedicated continuous guidance during sessions, and weekly diet adjustments.",
  },
  {
    q: "Is diet guidance included with the membership?",
    a: "Yes! All 3-Month, 6-Month, and 12-Month membership packages come with complimentary customized nutrition and macro diet charts tailored to South Indian food preferences.",
  },
  {
    q: "Can complete beginners join Teja Fitness Studio?",
    a: "Absolutely! Over 60% of our members started as complete beginners. Our trainers guide you through basic gym etiquette, proper exercise form, and light workouts in your initial weeks.",
  },
  {
    q: "Is vehicle parking available at the branches?",
    a: "Yes, dedicated 2-wheeler and 4-wheeler parking space is available at all our branch locations (Akkayyapalem, 104 Area, Murali Nagar, and Yendada).",
  },
  {
    q: "Which membership plan is best for me?",
    a: "Our 3 Months Plan (₹6,500) is our most popular option for body transformations as it allows enough time to see visible muscle building and fat loss results while giving you maximum savings.",
  },
];
