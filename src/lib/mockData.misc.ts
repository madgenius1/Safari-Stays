import { Season, VibeCategory, FAQItem } from "./types";

// ============================================================================
// SEASONS
// ============================================================================

export const seasons: Season[] = [
  {
    id: "season-1",
    name: "Regular",
    description: "Standard pricing for most of the year",
    multiplier: 1.0,
    dateRanges: [],
    color: "#6B7280",
  },
  {
    id: "season-2",
    name: "Peak",
    description:
      "High demand season - Great Migration period and European summer holidays",
    multiplier: 1.3,
    dateRanges: [
      { start: "2026-06-15", end: "2026-09-15" },
      { start: "2026-12-15", end: "2027-01-05" },
      { start: "2027-06-15", end: "2027-09-15" },
    ],
    color: "#C5A059",
    icon: "🔥",
  },
  {
    id: "season-3",
    name: "Off-Peak",
    description: "Best value season with lower prices",
    multiplier: 0.8,
    dateRanges: [
      { start: "2026-03-15", end: "2026-05-31" },
      { start: "2026-10-15", end: "2026-11-30" },
      { start: "2027-03-15", end: "2027-05-31" },
    ],
    color: "#10B981",
    icon: "💰",
  },
  {
    id: "season-4",
    name: "Festive",
    description: "Holiday season with premium pricing",
    multiplier: 1.5,
    dateRanges: [
      { start: "2026-12-20", end: "2027-01-06" },
      { start: "2026-04-10", end: "2026-04-20" }, // Easter
      { start: "2027-12-20", end: "2028-01-06" },
    ],
    color: "#DC2626",
    icon: "🎄",
  },
  {
    id: "season-5",
    name: "Migration",
    description:
      "Great Migration season in Maasai Mara - premium safari pricing",
    multiplier: 1.4,
    dateRanges: [
      { start: "2026-07-01", end: "2026-10-15" },
      { start: "2027-07-01", end: "2027-10-15" },
    ],
    color: "#2D4032",
    icon: "🦓",
  },
];

// ============================================================================
// VIBE CATEGORIES
// ============================================================================

export const vibeCategories: VibeCategory[] = [
  {
    id: "clear-kayak-photoshoot",
    label: "Clear Kayak Photoshoot",
    description: "Crystal-clear kayak photography sessions.",
    image:
      "https://safaristaysandhomes.com/assets/kayak-single-1-CFzhNAym.jpeg",
    color: "#1A1A1A",
  },
  {
    id: "beach-photoshoot",
    label: "Beach Photoshoot",
    description: "Beach photography with coastal backdrops.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800",
    color: "#4A5568",
  },
  {
    id: "wasini-island-experience",
    label: "Wasini Island Experience",
    description: "Explore Wasini Island with snorkeling, marine life, and Swahili culture.",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800",
    color: "#2D4032",
  },
  {
    id: "beach-horseriding",
    label: "Beach Horseriding",
    description: "Ride along the shoreline with breathtaking ocean views.",
    image:
      "https://safaristaysandhomes.com/assets/horse-riding-1-CiHFyIYM.jpeg",
    color: "#0EA5E9",
  },
  {
    id: "sunset-dhow-cruise",
    label: "Sunset Dhow Cruise",
    description: "Sail into the sunset on a traditional dhow with ocean breezes.",
    image:
      "https://images.unsplash.com/photo-1764259316867-1565f06e6ada?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#7C3AED",
  },
  {
    id: "jungle-hiking",
    label: "Jungle Hiking",
    description: "Guided hikes through lush forests and scenic nature trails.",
    image:
      "https://images.unsplash.com/photo-1709841367504-63d9b2dd9ad0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#06B6D4",
  },
  {
    id: "luxury-spa-experience",
    label: "Luxury SPA Experience",
    description: "Relax and unwind with premium spa and wellness treatments.",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800",
    color: "#C5A059",
  },
  {
    id: "stargazing",
    label: "Stargazing",
    description: "Experience magical nights under a sky full of stars.",
    image:
      "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=800",
    color: "#10B981",
  },
  {
    id: "street-food-tour",
    label: "Street Food Tour",
    description: "Taste authentic local flavors from vibrant street vendors.",
    image:
      "https://kenyapeaks.com/assets/uploads/biryani-in-mombasa-food-tour_6891b9830eaba.webp",
    color: "#F59E0B",
  },
  {
    id: "jet-skiing",
    label: "Jet Skiing",
    description: "High-speed ocean adventure for thrill seekers.",
    image:
      "https://images.unsplash.com/photo-1618858227841-9beacd3b5f6f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#EC4899",
  },
  {
    id: "mud-bath",
    label: "Mud Bath",
    description: "Rejuvenating natural mud treatments for skin and wellness.",
    image:
      "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=800",
    color: "#8B5CF6",
  },
  {
    id: "coastal-culture-tour",
    label: "Coastal Culture Tour",
    description: "Discover Swahili heritage, traditions, and coastal history.",
    image:
      "https://images.unsplash.com/photo-1643790399769-c7b9f3590f58?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#D97706",
  },
];

// ============================================================================
// FAQs
// ============================================================================

export const faqs: FAQItem[] = [
  // BOOKING & PAYMENT
  {
    id: "faq-1",
    question: "How do I book a property?",
    answer:
      "Booking is simple! Just click the \"Book via WhatsApp\" button on any property page. You'll be connected with our team who will help you check availability, answer questions, and confirm your booking. We use WhatsApp because it's faster and more personal than traditional booking systems.",
    category: "booking",
    order: 1,
  },
  {
    id: "faq-2",
    question: "What payment methods do you accept?",
    answer:
      "We accept multiple payment methods including bank transfers (MPESA, bank deposits), credit/debit cards (Visa, Mastercard), and PayPal. Payment details will be shared via WhatsApp after you confirm your booking. We require a 50% deposit to secure your reservation, with the balance due 7 days before check-in.",
    category: "payment",
    order: 2,
  },
  {
    id: "faq-3",
    question: "Is there a booking fee?",
    answer:
      "No! We don't charge any booking fees. The price you see is the price you pay. We believe in transparency, so all costs (including cleaning fees and any applicable taxes) are shown upfront in the booking summary.",
    category: "booking",
    order: 3,
  },
  {
    id: "faq-4",
    question: "Can I modify or cancel my booking?",
    answer:
      "Yes, cancellations and modifications are possible. Our standard policy: Free cancellation up to 14 days before check-in (full refund minus payment processing fees). 7-14 days before: 50% refund. Less than 7 days: No refund. However, we're flexible and will work with you in case of emergencies or unexpected circumstances. Contact us via WhatsApp to discuss your situation.",
    category: "cancellation",
    order: 4,
  },

  // PROPERTIES & AMENITIES
  {
    id: "faq-5",
    question: "Are the WiFi speeds accurate?",
    answer:
      "Absolutely! We test WiFi speeds at every property before listing. All listed speeds are actual tested download speeds. We understand how important reliable internet is, especially for remote workers and content creators. If you experience speeds significantly lower than advertised, we'll work to resolve it immediately or help you relocate to another property.",
    category: "wifi",
    order: 1,
  },
  {
    id: "faq-6",
    question: "How are properties verified?",
    answer:
      'Every property undergoes our rigorous 50-point verification process before listing. We personally visit each property to check: WiFi speeds, cleanliness standards, safety features, amenities accuracy, neighborhood safety, and host responsiveness. We also collect guest feedback continuously to ensure standards remain high. Only properties meeting our criteria receive the "Safari Stays Verified" badge.',
    category: "properties",
    order: 2,
  },
  {
    id: "faq-7",
    question: "What's included in the nightly rate?",
    answer:
      "The nightly rate includes accommodation and utilities (electricity, water, WiFi). Some properties also include cleaning, linens, and toiletries – check the specific property listing. Meals, airport transfers, and activities are typically additional unless stated otherwise. All fees (cleaning fee, service charge) are shown separately before you book so there are no surprises.",
    category: "booking",
    order: 5,
  },
  {
    id: "faq-8",
    question: "Is there 24/7 support?",
    answer:
      "Yes! Our WhatsApp support team is available 24/7 for urgent issues (lockouts, emergencies, etc.). For general questions, we respond within 1-2 hours during business hours (8am-10pm EAT). Each property also has a local contact for immediate on-site assistance.",
    category: "general",
    order: 1,
  },

  // SAFETY & SECURITY
  {
    id: "faq-9",
    question: "Are the properties safe?",
    answer:
      "Safety is our top priority. All urban properties have 24/7 security (guards, CCTV, or gated compounds). Safari properties follow strict wildlife safety protocols. We also verify: working locks, fire safety equipment, first aid kits, emergency contact procedures, and secure parking where applicable. We provide detailed safety information for each property before your arrival.",
    category: "safety",
    order: 1,
  },
  {
    id: "faq-10",
    question: "What if I have an emergency during my stay?",
    answer:
      "Contact us immediately via WhatsApp – we have 24/7 emergency support. Each property listing also includes local emergency numbers (police, ambulance, hospital). For medical emergencies, we can arrange transport to the nearest hospital. For property issues, we'll send someone to help within 30-60 minutes in urban areas. Your safety and comfort are our priority.",
    category: "safety",
    order: 2,
  },

  // TRAVEL & LOGISTICS
  {
    id: "faq-11",
    question: "Do I need a visa to visit Kenya?",
    answer:
      "Most visitors need a visa. US, UK, EU, and many other nationalities can apply for an e-Visa online before travel ($50 USD for 90-day single entry). Application takes 2-7 days. Some nationalities get visa-on-arrival. Check Kenya's immigration website or contact us for guidance specific to your nationality. We can help with the application process if needed!",
    category: "general",
    order: 2,
  },
  {
    id: "faq-12",
    question: "Can you arrange airport transfers?",
    answer:
      "Yes! We can arrange safe, reliable airport pickups to any of our properties. Cost varies by distance: Nairobi (JKIA) pickups typically KES 2,000-3,500. Mombasa (MBA) pickups to Diani around KES 4,000-6,000. Just let us know your flight details when booking, and we'll have a driver waiting with a name sign at arrivals.",
    category: "general",
    order: 3,
  },
  {
    id: "faq-13",
    question: "What about travel insurance?",
    answer:
      "We strongly recommend comprehensive travel insurance covering medical emergencies, trip cancellations, and lost luggage. Kenya has excellent private hospitals but they require payment upfront or insurance proof. Popular providers: World Nomads, SafetyWing, Allianz. Make sure your policy covers safari activities if you're planning game drives.",
    category: "general",
    order: 4,
  },

  // SPECIFIC CONCERNS
  {
    id: "faq-14",
    question: "Is tap water safe to drink?",
    answer:
      "In Nairobi and major cities, tap water is generally treated but we recommend bottled water to be safe. Most properties provide complimentary bottled water. In safari areas, properties have filtered or bottled water. Always use bottled or filtered water for drinking. Tap water is fine for showering and brushing teeth.",
    category: "general",
    order: 5,
  },
  {
    id: "faq-15",
    question: "What about malaria precautions?",
    answer:
      "Malaria risk varies by region: Low risk in Nairobi (high altitude). Moderate risk at the coast and Lake Victoria. Higher risk in safari areas. Consult your doctor 4-6 weeks before travel about antimalarial medication. We recommend: Mosquito repellent (DEET 30%+), Long sleeves at dawn/dusk, Sleeping under bed nets (provided at safari properties), Window screens (all our properties have them). Most importantly, take antimalarial medication if prescribed.",
    category: "safety",
    order: 3,
  },
  {
    id: "faq-16",
    question: "Can I work remotely from the properties?",
    answer:
      'Absolutely! Many of our guests are digital nomads. All properties list accurate WiFi speeds. Properties marked "Creator-Friendly" or "Work Retreat" have dedicated workspaces, good lighting, and backup power. Nairobi properties typically have the fastest internet (150-250Mbps). Even safari properties now offer reliable Starlink connections (50-150Mbps). Let us know your requirements, and we\'ll match you with the perfect property.',
    category: "wifi",
    order: 2,
  },
  {
    id: "faq-17",
    question: "Are pets allowed?",
    answer:
      "Pet policies vary by property. Some properties welcome pets (usually with an additional cleaning fee). Safari properties typically don't allow pets due to wildlife. Filter for \"Pet-Friendly\" properties or ask us via WhatsApp – we'll find suitable options if you're traveling with your furry friend.",
    category: "properties",
    order: 3,
  },
  {
    id: "faq-18",
    question: "What's the best time to visit Kenya?",
    answer:
      "Kenya is great year-round, but timing depends on your priorities: Great Migration (Maasai Mara): July-October, Best weather overall: January-February and June-October, Budget travelers: March-May (lower prices, occasional rain), Beach season: December-March (hot & dry), Bird watching: November-April (migratory birds). We can help you choose the best time based on your interests and budget!",
    category: "general",
    order: 6,
  },
];
