import {
  RiFacebookFill,
  RiTwitterFill,
  RiInstagramFill,
} from "@remixicon/react";

// Navbar
export const navItems = [
  {
    id: 1,
    label: "Home",
    path: "/",
  },

  {
    id: 2,
    label: "About",
    path: "/#about",
  },

  {
    id: 3,
    label: "Services",
    path: "/#services",
  },

  {
    id: 4,
    label: "Portfolio",
    path: "/#portfolio",
  },

  {
    id: 5,
    label: "Films",
    submenu: [
      {
        label: "Wedding Films",
        path: "/films/wedding",
      },
      {
        label: "Pre-Wedding Films",
        path: "/films/prewedding",
      },
    ],
  },

  {
    id: 6,
    label: "FAQ",
    path: "/#faq",
  },

  {
    id: 7,
    label: "Testimonials",
    path: "/#testimonials",
  },
];

// Marquee
export const marqueeItems = [
  {
    label: "Candid Wedding",
  },
  {
    label: "Portraiture",
  },
  {
    label: "Fine Art Wedding",
  },
  {
    label: "Event Coverage",
  },
  {
    label: "Landscape Photography",
  },
  {
    label: "Branding Photography",
  },
];

// Socials
export const socialLinks = [
  {
    icon: RiFacebookFill,
  },
  {
    icon: RiTwitterFill,
  },
  {
    icon: RiInstagramFill,
  },
];

// import {
//   RiFacebookBoxFill,
//   RiTwitterXFill,
//   RiInstagramLine,
// } from "@remixicon/react";

// export const socialLinks = [
//   {
//     name: "Facebook",
//     icon: RiFacebookBoxFill,
//     url: "https://www.facebook.com/",
//     color: "bg-[#1877F2]", // Facebook Blue
//   },
//   {
//     name: "Twitter",
//     icon: RiTwitterXFill,
//     url: "https://twitter.com/",
//     color: "bg-black", // X (Twitter) Black
//   },
//   {
//     name: "Instagram",
//     icon: RiInstagramLine,
//     url: "https://www.instagram.com/",
//     color:
//       "bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#515bd4]", // Instagram Gradient
//   },
// ];

// Service
export const serviceHighlights = [
  {
    id: 1,
    label:
      "Capturing timeless moments with a focus on raw emotion and authentic storytelling.",
  },
  {
    id: 2,
    label:
      "Luxury wedding photography with cinematic aesthetics and creative direction.",
  },
  {
    id: 3,
    label: "Personalized shoots tailored to your story, style, and vision.",
  },
  {
    id: 4,
    label:
      "From shoot to final delivery — a refined, detail-oriented experience.",
  },
];

// Portfolio
export const portfolioSectionItems = [
  {
    id: 1,
    imgUrl: "/images/portfolio-img-1.jpg",
    title: "Karandeep & Heer Wedding",
    date: "December 2023",
    category: "Wedding",
    description:
      "A grand celebration of love where tradition met elegance. Karandeep and Heer’s wedding was filled with heartfelt rituals, vibrant colors, and unforgettable moments that beautifully marked the beginning of their forever.",
    slug: "karandeep-heer-wedding",
    gallery: [
      "/images/one-1.jpg",
      "/images/one-2.jpg",
      "/images/one-3.jpg",
      "/images/one-4.jpg",
      "/images/one-5.jpg",
    ],
  },
  {
    id: 2,
    imgUrl: "/images/portfolio-img-2.jpg",
    title: "Dhruv & Khushi Wedding",
    date: "February 2024",
    category: "Wedding",
    description:
      "Dhruv and Khushi’s wedding was a mesmerizing blend of romance and joy. Every frame captured their genuine emotions, from intimate ceremonies to lively celebrations that radiated warmth and happiness.",
    slug: "dhruv-khushi-wedding",
    gallery: [
      "/images/two-1.png",
      "/images/two-2.png",
      "/images/two-3.png",
      "/images/two-4.png",
      "/images/two-5.png",
    ],
  },
  {
    id: 3,
    imgUrl: "/images/portfolio-img-3.jpg",
    title: "Punit & Payal",
    date: "November 2023",
    category: "Pre-Wedding",
    description:
      "A timeless love story captured in its purest form. Punit and Payal’s journey unfolded through graceful moments, soft glances, and heartfelt smiles, creating memories to cherish for a lifetime.",
    slug: "a-love-story-in-frames",
    gallery: [
      "/images/two-1.png",
      "/images/two-2.png",
      "/images/two-3.png",
      "/images/two-4.png",
      "/images/two-5.png",
    ],
  },
  {
    id: 4,
    imgUrl: "/images/portfolio-img-4.jpg",
    title: "Ivor & Alanna",
    date: "January 2024",
    category: "Pre-Wedding",
    description:
      "Set against a dreamy backdrop, Ivor and Alanna’s pre-wedding shoot was a vision of elegance and romance. Each photograph reflected their chemistry, capturing love in its most magical essence.",
    slug: "pre-wedding-dreams",
    gallery: [
      "/images/two-1.png",
      "/images/two-2.png",
      "/images/two-3.png",
      "/images/two-4.png",
      "/images/two-5.png",
    ],
  },
  {
    id: 5,
    imgUrl: "/images/portfolio-img-5.jpg",
    title: "Kashyap & Ridhima",
    date: "October 2023",
    category: "Engagement",
    description:
      "Moments filled with anticipation and joy before saying ‘I do.’ Kashyap and Ridhima’s story radiated charm and intimacy, beautifully documenting the emotions leading up to their special day.",
    slug: "moments-before-i-do",
    gallery: [
      "/images/two-1.png",
      "/images/two-2.png",
      "/images/two-3.png",
      "/images/two-4.png",
      "/images/two-5.png",
    ],
  },
  {
    id: 6,
    imgUrl: "/images/portfolio-img-6.jpg",
    title: "Ranveer & Ashika",
    date: "March 2024",
    category: "Wedding",
    description:
      "A celebration of love captured with artistic brilliance. Ranveer and Ashika’s wedding showcased vibrant traditions, candid emotions, and cinematic frames that brought their story to life.",
    slug: "captured-with-love",
    gallery: [
      "/images/two-1.png",
      "/images/two-2.png",
      "/images/two-3.png",
      "/images/two-4.png",
      "/images/two-5.png",
    ],
  },
  {
    id: 7,
    imgUrl: "/images/portfolio-img-7.jpg",
    title: "Janvi Dharmik Scotland Prewedding",
    location: "Scotland",
    category: "Destination Pre-Wedding",
    description:
      "Amidst the rolling highlands and timeless castles of Scotland, their love story unfolded like a cinematic dream.",
    date: "2024",
    slug: "janvi-dharmik-scotland-prewedding",
    gallery: [
      "/images/two-1.png",
      "/images/two-2.png",
      "/images/two-3.png",
      "/images/two-4.png",
      "/images/two-5.png",
    ],
  },
  {
    id: 8,
    imgUrl: "/images/portfolio-img-8.jpg",
    title: "Aashka Shanil Wedding Fairmont Jaipur",
    location: "Jaipur",
    category: "Destination Wedding",
    description:
      "Aashka and Shanil's wedding unfolded like a mesmerizing dream, where elegance met enchantment in a royal celebration.",
    date: "2024",
    slug: "aashka-shanil-wedding-fairmont-jaipur",
    gallery: [
      "/images/two-1.png",
      "/images/two-2.png",
      "/images/two-3.png",
      "/images/two-4.png",
      "/images/two-5.png",
    ],
  },
  {
    id: 9,
    imgUrl: "/images/portfolio-img-9.jpg",
    title: "Piyush X Aariva",
    location: "Surat",
    category: "Wedding",
    description:
      "A night to remember! A dazzling celebration filled with glamour, enchanting fireworks, and unforgettable moments.",
    date: "2023",
    slug: "piyush-aariva-wedding",
    gallery: [
      "/images/two-1.png",
      "/images/two-2.png",
      "/images/two-3.png",
      "/images/two-4.png",
      "/images/two-5.png",
    ],
  },
  {
    id: 10,
    imgUrl: "/images/portfolio-img-10.jpg",
    title: "Rohan X Ananya",
    location: "Udaipur",
    category: "Destination Wedding",
    description:
      "A royal celebration set against the serene lakes of Udaipur, capturing timeless elegance and heartfelt moments.",
    date: "2024",
    slug: "rohan-ananya-wedding",
    gallery: [
      "/images/two-1.png",
      "/images/two-2.png",
      "/images/two-3.png",
      "/images/two-4.png",
      "/images/two-5.png",
    ],
  },
  {
    id: 11,
    imgUrl: "/images/portfolio-img-11.jpg",
    title: "Aarav X Meera",
    location: "Jaipur",
    category: "Wedding",
    description:
      "A majestic wedding filled with vibrant traditions, regal décor, and unforgettable memories in the Pink City.",
    date: "2023",
    slug: "aarav-meera-wedding",
    gallery: [
      "/images/two-1.png",
      "/images/two-2.png",
      "/images/two-3.png",
      "/images/two-4.png",
      "/images/two-5.png",
    ],
  },
  {
    id: 12,
    imgUrl: "/images/portfolio-img-12.jpg",
    title: "Kunal X Riya",
    location: "Goa",
    category: "Beach Wedding",
    description:
      "A dreamy beachside celebration where love met the waves and golden sunsets framed every precious moment.",
    date: "2024",
    slug: "kunal-riya-beach-wedding",
    gallery: [
      "/images/two-1.png",
      "/images/two-2.png",
      "/images/two-3.png",
      "/images/two-4.png",
      "/images/two-5.png",
    ],
  },
  {
    id: 13,
    imgUrl: "/images/portfolio-img-13.jpg",
    title: "Dev X Priya",
    location: "Mumbai",
    category: "Wedding",
    description:
      "A glamorous city wedding that beautifully blended modern elegance with cherished traditions.",
    date: "2023",
    slug: "dev-priya-mumbai-wedding",
    gallery: [
      "/images/two-1.png",
      "/images/two-2.png",
      "/images/two-3.png",
      "/images/two-4.png",
      "/images/two-5.png",
    ],
  },
  {
    id: 14,
    imgUrl: "/images/portfolio-img-14.jpg",
    title: "Ishaan X Kavya",
    location: "Delhi",
    category: "Wedding",
    description:
      "An opulent celebration in the heart of Delhi, radiating charm, sophistication, and joyous emotions.",
    date: "2024",
    slug: "ishaan-kavya-delhi-wedding",
    gallery: [
      "/images/two-1.png",
      "/images/two-2.png",
      "/images/two-3.png",
      "/images/two-4.png",
      "/images/two-5.png",
    ],
  },
  {
    id: 15,
    imgUrl: "/images/portfolio-img-15.jpg",
    title: "Arjun X Nisha",
    location: "Bali",
    category: "Destination Wedding",
    description:
      "A romantic destination wedding in Bali, where tropical beauty met timeless love and serenity.",
    date: "2023",
    slug: "arjun-nisha-bali-wedding",
    gallery: [
      "/images/two-1.png",
      "/images/two-2.png",
      "/images/two-3.png",
      "/images/two-4.png",
      "/images/two-5.png",
    ],
  },
];

// FAQ
export const faqItems = [
  {
    id: 1,
    title: "What type of photography do you specialize in?",
    text: "I specialize in wedding, pre-wedding, portrait, and event photography, focusing on capturing natural emotions and timeless moments.",
  },
  {
    id: 2,
    title: "How can I book a photography session?",
    text: "You can book a session by contacting me through the contact form on my website or via WhatsApp/Instagram. I’ll get back to you within 24 hours.",
  },
  {
    id: 3,
    title: "Do you travel for shoots?",
    text: "Yes, I’m available for travel both within the city and for destination shoots. Travel and accommodation charges may apply depending on the location.",
  },
  {
    id: 4,
    title: "Can I choose the location for the shoot?",
    text: "Absolutely! You can suggest a location, or I can recommend the best spots based on your vision and lighting conditions.",
  },
  {
    id: 5,
    title: "How long does it take to receive the final photos?",
    text: "Typically, you will receive your edited photos within 1–3 weeks, depending on the type of shoot.",
  },
  {
    id: 6,
    title: "Do you provide edited photos or raw files?",
    text: "I deliver professionally edited, high-resolution images. Raw files are not provided as they are part of the editing workflow.",
  },
  {
    id: 7,
    title: "What is your editing style?",
    text: "My editing style is clean, natural, and timeless, enhancing colors and emotions without over-processing the images.",
  },
  {
    id: 8,
    title: "What are your pricing and packages?",
    text: "Pricing depends on the type of shoot and requirements. Please contact me for detailed packages tailored to your needs.",
  },
  {
    id: 9,
    title: "How much advance is required to confirm a booking?",
    text: "A 30–50% advance payment is required to secure your booking date. The remaining amount can be paid after the shoot.",
  },
  {
    id: 10,
    title: "What happens if the shoot gets canceled or rescheduled?",
    text: "In case of rescheduling, I’ll try my best to accommodate a new date. Cancellation policies depend on the notice period and booking terms.",
  },
];

// Testimonials
export const testimonialItems = [
  {
    id: 1,
    name: "Riya Sharma",
    location: "Mumbai, Maharashtra",
    text: "The work is truly exceptional. Every detail was handled with care, and the end result exceeded my expectations.",
  },
  {
    id: 2,
    name: "Aditya Singh",
    location: "Delhi",
    text: "A fantastic experience! Professional, creative, and attentive. I would recommend this service to anyone without hesitation.",
  },
  {
    id: 3,
    name: "Meera Patel",
    location: "Ahmedabad, Gujarat",
    text: "Extremely satisfied with the results. The team is very talented and understands exactly what the client needs.",
  },
  {
    id: 4,
    name: "Vikram Rao",
    location: "Bangalore, Karnataka",
    text: "The process was smooth, and the output was outstanding. Truly professional work from start to finish.",
  },
  {
    id: 5,
    name: "Ananya Gupta",
    location: "Kolkata, West Bengal",
    text: "Highly creative and very easy to work with. The final results were beyond what I imagined.",
  },
  {
    id: 6,
    name: "Rohit Mehta",
    location: "Pune, Maharashtra",
    text: "Attention to detail and creative vision made this experience memorable. Highly recommended!",
  },
  {
    id: 7,
    name: "Sneha Joshi",
    location: "Jaipur, Rajasthan",
    text: "Professional, punctual, and talented! Working with them was a wonderful experience from start to finish.",
  },
  {
    id: 8,
    name: "Arjun Kumar",
    location: "Chennai, Tamil Nadu",
    text: "Absolutely delighted with the results. The work is thoughtful, creative, and very impactful.",
  },
  {
    id: 9,
    name: "Isha Verma",
    location: "Lucknow, Uttar Pradesh",
    text: "The team turned ideas into reality with precision and creativity. Truly a pleasure to work with!",
  },
  {
    id: 10,
    name: "Karan Thakur",
    location: "Hyderabad, Telangana",
    text: "An amazing experience! Professionalism and creativity at its best. Couldn’t have asked for better results.",
  },
];

// Films
interface Film {
  id: number;
  title: string;
  location: string;
  description: string;
  youtubeId: string;
}

// Wedding Films
export const weddingFilms = [
  {
    id: 1,
    title: "Anil & Bina Wedding",
    location: "Malad",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque.",
    youtubeId: "CoNIg2vf0_w",
  },
  {
    id: 2,
    title: "Bhumin & Kinjal Wedding",
    location: "Borivalli",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque. ",
    youtubeId: "d_xk0tcyrt8",
  },
  {
    id: 3,
    title: "Pratik & Roshni Wedding",
    location: "Mumbai",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque. ",
    youtubeId: "YPolUjLHG4k",
  },
];

// Pre-Wedding Films
export const preWeddingFilms = [
  {
    id: 1,
    title: "Tarang & Aashita",
    location: "Udaipur",
    description:
      "Captured amidst the royal charm of Udaipur, this pre-wedding film tells a heartfelt story of love, laughter, and timeless romance.",
    youtubeId: "MkNtgoPr-TE",
  },
  {
    id: 2,
    title: "Kevin & Prachi",
    location: "Jaipur",
    description:
      "A dreamy celebration of love set against the majestic palaces of Jaipur, beautifully portraying a journey toward forever.",
    youtubeId: "eV8XvqJGNZA",
  },
  {
    id: 3,
    title: "Harshita & Rahul",
    location: "Goa",
    description:
      "A romantic beachside prelude to their wedding, filled with golden sunsets, laughter, and unforgettable memories.",
    youtubeId: "hopMHZrO7Mw",
  },
];

// My Service Data
interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  features: string[];
}

export const services = [
  {
    id: 1,
    title: "Wedding Photography",
    description:
      "Capture your special day with timeless, elegant, and emotional storytelling.",
    price: "₹80,000 – ₹2,50,000",
    features: [
      "Full-Day Coverage",
      "Professional Editing",
      "HD Digital Album",
      "Candid Photography",
      "Pre-Wedding Consultation",
    ],
  },
  {
    id: 2,
    title: "Cinematic Wedding Films",
    description:
      "Experience your wedding through beautifully crafted cinematic storytelling.",
    price: "₹1,20,000 – ₹3,50,000",
    features: [
      "4K Cinematic Video",
      "Drone Coverage",
      "Highlight Film",
      "Teaser Video",
      "Creative Storytelling",
    ],
  },
  {
    id: 3,
    title: "Pre-Wedding Shoots",
    description:
      "Romantic and creative pre-wedding shoots at stunning locations.",
    price: "₹30,000 – ₹90,000",
    features: [
      "Location Assistance",
      "Creative Direction",
      "Professional Editing",
      "Outfit Guidance",
      "High-Resolution Images",
    ],
  },
  {
    id: 4,
    title: "Event Photography",
    description:
      "Professional coverage for corporate, social, and private events.",
    price: "₹15,000 – ₹60,000",
    features: [
      "Corporate Events",
      "Birthday Parties",
      "Concerts & Shows",
      "Award Ceremonies",
      "Same-Day Highlights",
    ],
  },
];

// Footer Data

// Type Definitions
export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  id: number;
  title: string;
  links: FooterLink[];
}

export const footerList: FooterSection[] = [
  {
    id: 1,
    title: "Home",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/#about" },
      { label: "Service", href: "/#services" },
      { label: "Portfolio", href: "/#portfolio" },
      { label: "Films", href: "/#films" },
      { label: "FAQ", href: "/#faq" },
      { label: "Testimonials", href: "/#testimonials" },
    ],
  },
  {
    id: 2,
    title: "Films",
    links: [
      { label: "Wedding", href: "/films#wedding" },
      { label: "Pre-Wedding", href: "/films#pre-wedding" },
    ],
  },
];
