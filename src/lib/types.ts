// TYPE DEFINITIONS - Safari Stays & Homes

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Image {
  url: string;
  alt: string;
  type?: 'hero' | 'gallery' | 'thumbnail';
  caption?: string;
}

export interface PriceInfo {
  basePrice: number;
  currency: 'Ksh' | 'USD';
  cleaningFee?: number;
  securityDeposit?: number;
}

export interface Capacity {
  guests: number;
  bedrooms: number;
  beds?: number;
  bathrooms: number;
}

export interface Location {
  area: string;
  destination?: string;
  coordinates: Coordinates;
  address?: string;
  mapUrl?: string;
}

export interface NearbyAttraction {
  name: string;
  distance: string;
  type: 'restaurant' | 'cafe' | 'attraction' | 'shopping' | 'transport' | 'activity' | 'dining' | 'nightlife' | 'culture' | 'safari';
  description?: string;
  priceRange?: string;
}

export interface Review {
  id: string;
  author: string;
  avatar?: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  propertyId?: string;
}

export interface Host {
  name: string;
  avatar?: string;
  bio?: string;
  responseTime: string;
  languages: string[];
}

// PROPERTY / STAY TYPES

export interface Property {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  location: Location;
  pricing: PriceInfo;
  capacity: Capacity;
  amenities: string[];
  highlights: string[];
  images: Image[];
  nearbyAttractions: NearbyAttraction[];
  wifiSpeed?: string;
  host?: Host;
  reviews?: Review[];
  averageRating?: number;
  reviewCount?: number;
  featured?: boolean;
  vibeCategories?: string[];
  status?: 'active' | 'draft' | 'archived';
}

// DESTINATION TYPES

export interface DestinationHighlight {
  title: string;
  description: string;
  icon?: string;
}

export interface LocalTip {
  name: string;
  description: string;
  category: 'restaurant' | 'cafe' | 'activity' | 'shopping' | 'nightlife' | 'culture';
  priceRange?: string;
  image?: string;
  distance?: string;
}

export interface GettingThere {
  airport: string;
  distance: string;
  transportOptions: string[];
  estimatedCost?: string;
}

export interface Climate {
  bestMonths: string[];
  peakSeason: string;
  offPeakSeason: string;
  temperature?: string;
  rainfall?: string;
}

export interface Destination {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  coverImage: Image;
  gallery: Image[];
  highlights: DestinationHighlight[];
  bestFor: string[];
  gettingThere: GettingThere;
  localGuide: {
    restaurants: LocalTip[];
    activities: LocalTip[];
    shopping?: LocalTip[];
    nightlife?: LocalTip[];
  };
  climate: Climate;
  propertyCount: number;
  coordinates: Coordinates;
  featured?: boolean;
}

// EXPERIENCE TYPES

export interface GroupSize {
  min: number;
  max: number;
}

export interface Availability {
  daysAvailable: number[]; // 0-6 (Sunday-Saturday)
  startTimes: string[];
  seasonalAvailability?: string;
}

export interface Experience {
  id: string;
  slug: string;
  title: string;
  category: 'safari' | 'cultural' | 'adventure' | 'food-wine' | 'wellness' | 'photography';
  tagline: string;
  description: string;
  duration: string;
  groupSize: GroupSize;
  price: number;
  currency: 'Ksh' | 'USD';
  highlights: string[];
  included: string[];
  notIncluded: string[];
  location: string;
  meetingPoint: string;
  coordinates?: Coordinates;
  coverImage: Image;
  gallery: Image[];
  availability: Availability;
  difficulty?: 'easy' | 'moderate' | 'challenging';
  featured?: boolean;
  reviews?: Review[];
  averageRating?: number;
}

// BLOG POST TYPES

export interface BlogCategory {
  id: string;
  slug: string;
  name: string;
  description: string;
  color?: string;
}

export interface Author {
  name: string;
  avatar: string;
  bio: string;
  role?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: Image;
  category: BlogCategory;
  author: Author;
  tags: string[];
  relatedProperties?: string[]; // Property IDs
  publishedAt: string;
  readTime: number; // minutes
  views?: number;
  featured?: boolean;
}

// SEASON TYPES

export interface DateRange {
  start: string; // ISO date
  end: string;   // ISO date
}

export interface Season {
  id: string;
  name: 'Regular' | 'Peak' | 'Off-Peak' | 'Festive' | 'Migration';
  description: string;
  multiplier: number;
  dateRanges: DateRange[];
  color?: string;
  icon?: string;
}

// VIBE CATEGORY TYPES

export interface VibeCategory {
  id: string;
  label: string;
  description?: string;
  image: string;
  color?: string;
}

// TESTIMONIAL TYPES

export interface Testimonial {
  id: string;
  author: string;
  avatar: string;
  role?: string;
  comment: string;
  rating: number;
  propertyId?: string;
  experienceId?: string;
  date: string;
  verified: boolean;
}

// FAQ TYPES

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'booking' | 'payment' | 'properties' | 'wifi' | 'safety' | 'cancellation' | 'general';
  order?: number;
}
//Transfer types
export type VehicleType = 'Sedan' | 'Minivan' | 'Executive SUV';

export interface RateConfig {
  base: number;
  perKm: number;
  capacity: number;
}

export const VEHICLE_RATES: Record<VehicleType, RateConfig> = {
  'Sedan': { base: 1000, perKm: 40, capacity: 3 },
  'Minivan': { base: 2000, perKm: 60, capacity: 7 },
  'Executive SUV': { base: 5000, perKm: 120, capacity: 4 },
};

// UTILITY TYPES

export interface PricingCalculation {
  basePrice: number;
  nights: number;
  seasonalRate: number;
  season: string;
  cleaningFee: number;
  securityDeposit?: number;
  total: number;
  breakdown: {
    nightly: number;
    subtotal: number;
    fees: number;
  };
}

export interface SearchFilters {
  location?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: number;
  priceRange?: [number, number];
  amenities?: string[];
  vibeCategories?: string[];
  wifiSpeed?: number;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

//ACTIVITY TYPES
export interface Activity {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  location: string;
  region: 'diani' | 'watamu' | 'malindi';
  category: 'water-sports' | 'photography' | 'adventure' | 'wildlife' | 'cultural';
  type: string;
  price: number;
  originalPrice?: number;
  currency: string;
  duration: string;
  groupSize: {
    min: number;
    max: number;
  };
  difficulty: 'easy' | 'moderate' | 'hard' | 'extreme';
  featured: boolean;
  bestFor: string[];
  coverImage: Image;
  gallery: Image[];
  description: string;
  highlights: string[];
  included: string[];
  notIncluded: string[];
  itinerary?: Array<{
    time: string;
    activity: string;
  }>;
  meetingPoint: string;
  coordinates: Coordinates;
  availability: {
    daysAvailable: number[];
    startTimes: string[];
    seasonalNotes?: string;
  };
  whatToBring: string[];
  importantInfo: string[];
  cancellationPolicy: string;
  reviews: {
    averageRating: number;
    totalReviews: number;
  };
  seoKeywords: string[];
}
