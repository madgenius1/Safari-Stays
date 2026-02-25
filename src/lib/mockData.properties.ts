import { Property } from './types';

export const properties: Property[] = [
  // ============================================================================
  // SAFARI & WILDLIFE PROPERTIES
  // ============================================================================
  {
    id: '1',
    slug: 'maji-motoni-retreat',
    name: 'Maji Motoni Retreat',
    tagline: 'Eco-Luxury in the heart of the Mara',
    description: 'Experience the magic of the Savannah in our fully solar-powered luxury villa. Designed for digital nomads and families who want to disconnect from the noise but stay connected to the world. Floor-to-ceiling windows frame the endless plains where wildlife roams freely. Wake up to the sounds of nature and watch the sunrise paint the Mara in golden hues.',
    location: {
      area: 'Maasai Mara',
      destination: 'Maasai Mara',
      coordinates: { lat: -1.48, lng: 35.12 },
    },
    pricing: {
      basePrice: 45000,
      currency: 'Ksh',
      cleaningFee: 5000,
    },
    capacity: {
      guests: 4,
      bedrooms: 2,
      beds: 2,
      bathrooms: 2,
    },
    amenities: ['WiFi', 'Pool', 'Private Chef', 'Safari Drives', 'Solar Power', 'Fireplace', 'Binoculars', 'Library'],
    highlights: ['Starlink WiFi 150Mbps', 'Panoramic Mara Views', 'Eco-Friendly', 'Wildlife from Balcony'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200',
        alt: 'Maji Motoni Exterior with Mara Plains',
        type: 'hero',
      },
      {
        url: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800',
        alt: 'Master Bedroom with Savanna View',
        type: 'gallery',
      },
      {
        url: 'https://images.unsplash.com/photo-1493246507139-91e8bef99c02?auto=format&fit=crop&w=800',
        alt: 'Wildlife Viewing from Private Balcony',
        type: 'gallery',
      },
      {
        url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800',
        alt: 'Infinity Pool Overlooking Plains',
        type: 'gallery',
      },
    ],
    nearbyAttractions: [
      { name: 'Mara River Crossing', distance: '15km', type: 'safari' },
      { name: 'Maasai Village Cultural Tour', distance: '5km', type: 'culture' },
      { name: 'Bush Breakfast Spot', distance: '8km', type: 'activity' },
    ],
    wifiSpeed: '150 Mbps',
    featured: true,
    vibeCategories: ['wild', 'luxury'],
    averageRating: 4.9,
    reviewCount: 27,
    status: 'active',
  },

  {
    id: '4',
    slug: 'ol-pejeta-conservancy-villa',
    name: 'Ol Pejeta Conservancy Villa',
    tagline: 'Where rhinos roam and luxury resides',
    description: 'Nestled within the Ol Pejeta Conservancy, this exclusive villa offers front-row seats to one of Africa\'s greatest conservation stories. Watch rhinos, elephants, and the last two northern white rhinos on Earth from your private deck. Perfect for wildlife photographers and conservation enthusiasts.',
    location: {
      area: 'Nanyuki, Laikipia',
      destination: 'Nanyuki',
      coordinates: { lat: 0.01, lng: 36.95 },
    },
    pricing: {
      basePrice: 52000,
      currency: 'Ksh',
      cleaningFee: 6000,
    },
    capacity: {
      guests: 6,
      bedrooms: 3,
      beds: 3,
      bathrooms: 3,
    },
    amenities: ['WiFi', 'Game Drives', 'Private Guide', 'Chef Service', 'Telescope', 'Camera Equipment', 'Conservancy Access'],
    highlights: ['Photography Paradise', 'Rhino Sanctuary Access', 'Mount Kenya Views', 'Conservation Experience'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200',
        alt: 'Villa with Mount Kenya Backdrop',
        type: 'hero',
      },
      {
        url: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&w=800',
        alt: 'Wildlife at Waterhole',
        type: 'gallery',
      },
    ],
    nearbyAttractions: [
      { name: 'Chimpanzee Sanctuary', distance: '2km', type: 'attraction' },
      { name: 'Sweetwaters Conservancy', distance: '5km', type: 'safari' },
    ],
    wifiSpeed: '100 Mbps',
    featured: true,
    vibeCategories: ['wild', 'luxury'],
    averageRating: 4.8,
    reviewCount: 19,
    status: 'active',
  },

  // ============================================================================
  // COASTAL PROPERTIES
  // ============================================================================
  {
    id: '3',
    slug: 'diani-azure-villa',
    name: 'Diani Azure Villa',
    tagline: 'Turquoise waters at your doorstep',
    description: 'Our premier beachfront property in Diani. Wake up to the sound of the Indian Ocean and enjoy breakfast prepared by our in-house chef. The villa features Swahili architecture blended with modern luxury, including a rooftop terrace perfect for sunset cocktails. Direct beach access means the white sands are just steps away.',
    location: {
      area: 'Galu Beach, Diani',
      destination: 'Diani',
      coordinates: { lat: -4.33, lng: 39.56 },
    },
    pricing: {
      basePrice: 35000,
      currency: 'Ksh',
      cleaningFee: 4000,
    },
    capacity: {
      guests: 8,
      bedrooms: 4,
      beds: 5,
      bathrooms: 4,
    },
    amenities: ['Private Beach Access', 'Pool', 'Private Chef', 'Air Conditioning', 'WiFi', 'Kayaks', 'Snorkel Gear', 'BBQ Grill'],
    highlights: ['Ocean View', 'White Sand Beach', 'Kayaks Included', 'Rooftop Terrace'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200',
        alt: 'Azure Villa Beachfront Exterior',
        type: 'hero',
      },
      {
        url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800',
        alt: 'Infinity Pool with Ocean Views',
        type: 'gallery',
      },
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800',
        alt: 'Private Beach at Sunset',
        type: 'gallery',
      },
    ],
    nearbyAttractions: [
      { name: 'Kite Surfing School', distance: '0.2km', type: 'activity' },
      { name: 'Ali Barbour\'s Cave Restaurant', distance: '3km', type: 'dining' },
      { name: 'Diani Reef Beach', distance: '1km', type: 'attraction' },
    ],
    wifiSpeed: '50 Mbps',
    featured: true,
    vibeCategories: ['coastal', 'luxury'],
    averageRating: 4.7,
    reviewCount: 34,
    status: 'active',
  },

  {
    id: '5',
    slug: 'lamu-swahili-house',
    name: 'Lamu Swahili House',
    tagline: 'Timeless elegance in a UNESCO World Heritage site',
    description: 'Step back in time in this beautifully restored 18th-century Swahili house in Lamu\'s Old Town. Featuring traditional carved doors, coral stone walls, and a rooftop terrace with panoramic ocean views. Experience authentic Swahili culture while enjoying modern comforts.',
    location: {
      area: 'Lamu Old Town',
      destination: 'Lamu',
      coordinates: { lat: -2.27, lng: 40.90 },
    },
    pricing: {
      basePrice: 28000,
      currency: 'Ksh',
      cleaningFee: 3000,
    },
    capacity: {
      guests: 4,
      bedrooms: 2,
      beds: 2,
      bathrooms: 2,
    },
    amenities: ['WiFi', 'Rooftop Terrace', 'Traditional Architecture', 'Air Conditioning', 'Library', 'Dhow Trips Arranged'],
    highlights: ['UNESCO Heritage Site', 'Ocean Views', 'Cultural Immersion', 'No Cars Island'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200',
        alt: 'Traditional Swahili Architecture',
        type: 'hero',
      },
      {
        url: 'https://images.unsplash.com/photo-1562095241-8c6714fd4178?auto=format&fit=crop&w=800',
        alt: 'Rooftop Terrace at Sunset',
        type: 'gallery',
      },
    ],
    nearbyAttractions: [
      { name: 'Lamu Fort', distance: '0.5km', type: 'culture' },
      { name: 'Dhow Sailing', distance: '0.3km', type: 'activity' },
      { name: 'Shela Beach', distance: '2km', type: 'attraction' },
    ],
    wifiSpeed: '30 Mbps',
    vibeCategories: ['coastal', 'cultural'],
    averageRating: 4.9,
    reviewCount: 41,
    status: 'active',
  },

  {
    id: '6',
    slug: 'watamu-coral-garden-cottage',
    name: 'Watamu Coral Garden Cottage',
    tagline: 'Dive into marine paradise',
    description: 'A charming beachfront cottage in the heart of Watamu Marine National Park. Perfect for divers and snorkelers, with some of Kenya\'s best coral reefs just offshore. The cottage features an open-air design that brings the ocean breeze right into your living space.',
    location: {
      area: 'Watamu Beach',
      destination: 'Watamu',
      coordinates: { lat: -3.37, lng: 40.03 },
    },
    pricing: {
      basePrice: 22000,
      currency: 'Ksh',
      cleaningFee: 2500,
    },
    capacity: {
      guests: 4,
      bedrooms: 2,
      beds: 2,
      bathrooms: 2,
    },
    amenities: ['WiFi', 'Beach Access', 'Snorkel Gear', 'Dive Arrangements', 'Outdoor Shower', 'Garden'],
    highlights: ['Marine Park Access', 'World-Class Diving', 'Turtle Watching', 'Coral Reefs'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200',
        alt: 'Beachfront Cottage',
        type: 'hero',
      },
    ],
    nearbyAttractions: [
      { name: 'Watamu Marine Park', distance: '0.1km', type: 'attraction' },
      { name: 'Gede Ruins', distance: '8km', type: 'culture' },
    ],
    wifiSpeed: '40 Mbps',
    vibeCategories: ['coastal', 'adventure'],
    averageRating: 4.6,
    reviewCount: 22,
    status: 'active',
  },

  // ============================================================================
  // URBAN / CITY PROPERTIES
  // ============================================================================
  {
    id: '2',
    slug: 'the-nairobi-sky-loft',
    name: 'The Nairobi Sky Loft',
    tagline: 'Urban Sophistication in Westlands',
    description: 'A sleek, modern loft designed for creators and business travelers. Floor-to-ceiling windows provide the perfect natural light for your next shoot or video call. The open-plan design features a dedicated workspace with dual monitors, a professional ring light, and backdrop options. Located in the heart of Westlands, you\'re minutes from cafes, restaurants, and coworking spaces.',
    location: {
      area: 'Westlands, Nairobi',
      destination: 'Nairobi',
      coordinates: { lat: -1.26, lng: 36.80 },
    },
    pricing: {
      basePrice: 18000,
      currency: 'Ksh',
      cleaningFee: 2000,
    },
    capacity: {
      guests: 2,
      bedrooms: 1,
      beds: 1,
      bathrooms: 1,
    },
    amenities: ['Gym', 'High-Speed WiFi', 'Rooftop Pool', 'Concierge', 'Ring Light', 'Work Desk', 'Smart TV', '24/7 Security'],
    highlights: ['Fiber WiFi 250Mbps', 'City Skyline Views', 'Content Studio Ready', 'Walking Distance to Everything'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200',
        alt: 'Modern Loft Interior',
        type: 'hero',
      },
      {
        url: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800',
        alt: 'Fully Equipped Kitchen',
        type: 'gallery',
      },
      {
        url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800',
        alt: 'Bedroom with City Views',
        type: 'gallery',
      },
    ],
    nearbyAttractions: [
      { name: 'Sarit Centre Mall', distance: '0.5km', type: 'shopping' },
      { name: 'Alchemist Bar', distance: '1km', type: 'nightlife' },
      { name: 'Karura Forest', distance: '3km', type: 'attraction' },
    ],
    wifiSpeed: '250 Mbps',
    featured: true,
    vibeCategories: ['urban', 'creator-friendly'],
    averageRating: 4.8,
    reviewCount: 56,
    status: 'active',
  },

  {
    id: '7',
    slug: 'kilimani-executive-apartment',
    name: 'Kilimani Executive Apartment',
    tagline: 'Business class living in the heart of Nairobi',
    description: 'This fully-serviced executive apartment is perfect for business travelers and diplomats. Located in the upscale Kilimani neighborhood, it offers hotel-quality service with the comfort of home. Features include a home office, meeting room access, and daily housekeeping.',
    location: {
      area: 'Kilimani, Nairobi',
      destination: 'Nairobi',
      coordinates: { lat: -1.29, lng: 36.78 },
    },
    pricing: {
      basePrice: 22000,
      currency: 'Ksh',
      cleaningFee: 2500,
    },
    capacity: {
      guests: 3,
      bedrooms: 2,
      beds: 2,
      bathrooms: 2,
    },
    amenities: ['WiFi', 'Workspace', 'Gym', 'Pool', 'Daily Housekeeping', 'Laundry Service', 'Secure Parking', 'Generator Backup'],
    highlights: ['Business Ready', 'Fiber Internet', 'Prime Location', 'Serviced Daily'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200',
        alt: 'Executive Apartment Living Room',
        type: 'hero',
      },
    ],
    nearbyAttractions: [
      { name: 'Yaya Centre', distance: '0.8km', type: 'shopping' },
      { name: 'Junction Mall', distance: '2km', type: 'shopping' },
      { name: 'Nairobi Hospital', distance: '1.5km', type: 'transport' },
    ],
    wifiSpeed: '200 Mbps',
    vibeCategories: ['urban', 'business'],
    averageRating: 4.7,
    reviewCount: 38,
    status: 'active',
  },

  {
    id: '8',
    slug: 'karen-garden-villa',
    name: 'Karen Garden Villa',
    tagline: 'Suburban tranquility with urban access',
    description: 'Experience the best of both worlds in this stunning villa in Karen. Set on an acre of landscaped gardens, yet just 20 minutes from the city center. Perfect for families seeking space and security while staying connected to Nairobi\'s business districts.',
    location: {
      area: 'Karen, Nairobi',
      destination: 'Nairobi',
      coordinates: { lat: -1.32, lng: 36.70 },
    },
    pricing: {
      basePrice: 38000,
      currency: 'Ksh',
      cleaningFee: 4500,
    },
    capacity: {
      guests: 8,
      bedrooms: 4,
      beds: 5,
      bathrooms: 4,
    },
    amenities: ['WiFi', 'Pool', 'Large Garden', 'BBQ Area', 'Playroom', 'Staff Quarters', 'Security', 'Garage'],
    highlights: ['Family-Friendly', 'Gated Community', 'Near International Schools', 'Spacious Grounds'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200',
        alt: 'Karen Villa Exterior',
        type: 'hero',
      },
    ],
    nearbyAttractions: [
      { name: 'Giraffe Centre', distance: '3km', type: 'attraction' },
      { name: 'Karen Blixen Museum', distance: '2km', type: 'culture' },
      { name: 'The Hub Karen', distance: '1.5km', type: 'shopping' },
    ],
    wifiSpeed: '150 Mbps',
    vibeCategories: ['urban', 'family'],
    averageRating: 4.9,
    reviewCount: 29,
    status: 'active',
  },

  // ============================================================================
  // LAKE & MOUNTAIN PROPERTIES
  // ============================================================================
  {
    id: '9',
    slug: 'lake-naivasha-retreat',
    name: 'Lake Naivasha Waterfront Retreat',
    tagline: 'Where hippos and luxury meet',
    description: 'Wake up to hippos grazing on your lawn at this exclusive lakefront property. Surrounded by acacia trees and overlooking Lake Naivasha, this retreat offers a unique blend of wildlife viewing and relaxation. Perfect for bird watchers and nature enthusiasts.',
    location: {
      area: 'Lake Naivasha',
      destination: 'Naivasha',
      coordinates: { lat: -0.72, lng: 36.43 },
    },
    pricing: {
      basePrice: 32000,
      currency: 'Ksh',
      cleaningFee: 3500,
    },
    capacity: {
      guests: 6,
      bedrooms: 3,
      beds: 3,
      bathrooms: 3,
    },
    amenities: ['WiFi', 'Lake Access', 'Boat Trips', 'Bird Watching', 'Fireplace', 'Garden', 'Outdoor Dining'],
    highlights: ['Lakefront Location', 'Hippo Viewing', '400+ Bird Species', 'Boat Included'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200',
        alt: 'Lake Naivasha at Sunset',
        type: 'hero',
      },
    ],
    nearbyAttractions: [
      { name: 'Crescent Island', distance: '5km', type: 'attraction' },
      { name: 'Hell\'s Gate National Park', distance: '15km', type: 'safari' },
      { name: 'Boat Safaris', distance: '0km', type: 'activity' },
    ],
    wifiSpeed: '80 Mbps',
    featured: true,
    vibeCategories: ['lake', 'wildlife'],
    averageRating: 4.8,
    reviewCount: 31,
    status: 'active',
  },

  {
    id: '10',
    slug: 'lake-victoria-eco-lodge',
    name: 'Lake Victoria Eco-Lodge',
    tagline: 'Sustainable luxury on Africa\'s largest lake',
    description: 'Experience the vastness of Lake Victoria from this eco-friendly lodge. Built with sustainable materials and powered by solar energy, it offers stunning sunsets over the lake while maintaining a minimal environmental footprint.',
    location: {
      area: 'Kisumu, Lake Victoria',
      destination: 'Kisumu',
      coordinates: { lat: -0.09, lng: 34.77 },
    },
    pricing: {
      basePrice: 25000,
      currency: 'Ksh',
      cleaningFee: 2800,
    },
    capacity: {
      guests: 4,
      bedrooms: 2,
      beds: 2,
      bathrooms: 2,
    },
    amenities: ['WiFi', 'Solar Power', 'Lake Access', 'Fishing Trips', 'Kayaks', 'Organic Garden', 'Eco-Friendly'],
    highlights: ['Sustainable Design', 'Fishing Paradise', 'Sunset Views', 'Local Community Tours'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200',
        alt: 'Lake Victoria Sunset',
        type: 'hero',
      },
    ],
    nearbyAttractions: [
      { name: 'Kisumu Museum', distance: '8km', type: 'culture' },
      { name: 'Impala Sanctuary', distance: '5km', type: 'attraction' },
    ],
    wifiSpeed: '60 Mbps',
    vibeCategories: ['lake', 'eco'],
    averageRating: 4.5,
    reviewCount: 18,
    status: 'active',
  },

  {
    id: '11',
    slug: 'mount-kenya-alpine-cabin',
    name: 'Mount Kenya Alpine Cabin',
    tagline: 'Mountain majesty and crisp air',
    description: 'Perched at 2,800 meters, this cozy alpine cabin offers breathtaking views of Mount Kenya\'s peaks. Perfect for hikers, photographers, and anyone seeking crisp mountain air and star-filled nights. Features a wood-burning fireplace and panoramic windows.',
    location: {
      area: 'Nanyuki, Mount Kenya',
      destination: 'Nanyuki',
      coordinates: { lat: 0.07, lng: 37.07 },
    },
    pricing: {
      basePrice: 28000,
      currency: 'Ksh',
      cleaningFee: 3000,
    },
    capacity: {
      guests: 4,
      bedrooms: 2,
      beds: 2,
      bathrooms: 2,
    },
    amenities: ['WiFi', 'Fireplace', 'Hiking Trails', 'Mountain Guides Available', 'Telescope', 'Heated Rooms'],
    highlights: ['Mountain Views', 'Stargazing', 'Hiking Paradise', 'Cool Climate'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200',
        alt: 'Mountain Cabin with Peak Views',
        type: 'hero',
      },
    ],
    nearbyAttractions: [
      { name: 'Mount Kenya Climbing Routes', distance: '5km', type: 'activity' },
      { name: 'Solio Ranch', distance: '20km', type: 'safari' },
    ],
    wifiSpeed: '50 Mbps',
    vibeCategories: ['mountain', 'adventure'],
    averageRating: 4.7,
    reviewCount: 24,
    status: 'active',
  },

  // ============================================================================
  // BUDGET-FRIENDLY & UNIQUE PROPERTIES
  // ============================================================================
  {
    id: '12',
    slug: 'nakuru-cozy-bungalow',
    name: 'Nakuru Cozy Bungalow',
    tagline: 'Affordable comfort near flamingo paradise',
    description: 'A charming budget-friendly bungalow perfect for solo travelers and couples. Located just 30 minutes from Lake Nakuru National Park, famous for its flamingos and rhinos. Simple, clean, and comfortable with all the essentials.',
    location: {
      area: 'Nakuru Town',
      destination: 'Nakuru',
      coordinates: { lat: -0.30, lng: 36.08 },
    },
    pricing: {
      basePrice: 12000,
      currency: 'Ksh',
      cleaningFee: 1500,
    },
    capacity: {
      guests: 2,
      bedrooms: 1,
      beds: 1,
      bathrooms: 1,
    },
    amenities: ['WiFi', 'Kitchen', 'Parking', 'Garden', 'Work Desk'],
    highlights: ['Budget-Friendly', 'Near Lake Nakuru', 'Local Experience', 'Clean & Safe'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200',
        alt: 'Cozy Bungalow Exterior',
        type: 'hero',
      },
    ],
    nearbyAttractions: [
      { name: 'Lake Nakuru National Park', distance: '25km', type: 'safari' },
      { name: 'Menengai Crater', distance: '10km', type: 'attraction' },
    ],
    wifiSpeed: '30 Mbps',
    vibeCategories: ['budget', 'wildlife'],
    averageRating: 4.4,
    reviewCount: 47,
    status: 'active',
  },

  {
    id: '13',
    slug: 'mombasa-old-town-riad',
    name: 'Mombasa Old Town Riad',
    tagline: 'Arabian nights on the Kenyan coast',
    description: 'A beautifully restored Swahili-Arab townhouse in Mombasa\'s historic Old Town. Features traditional carved doors, inner courtyard, and rooftop terrace with fort views. Immerse yourself in centuries of coastal trading history.',
    location: {
      area: 'Old Town, Mombasa',
      destination: 'Mombasa',
      coordinates: { lat: -4.05, lng: 39.67 },
    },
    pricing: {
      basePrice: 24000,
      currency: 'Ksh',
      cleaningFee: 2500,
    },
    capacity: {
      guests: 6,
      bedrooms: 3,
      beds: 3,
      bathrooms: 3,
    },
    amenities: ['WiFi', 'Rooftop Terrace', 'Traditional Architecture', 'Air Conditioning', 'Courtyard', 'Cultural Tours'],
    highlights: ['Historic Building', 'Fort Views', 'Walking Distance to Market', 'Authentic Swahili'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200',
        alt: 'Historic Riad Courtyard',
        type: 'hero',
      },
    ],
    nearbyAttractions: [
      { name: 'Fort Jesus', distance: '0.3km', type: 'culture' },
      { name: 'Old Town Market', distance: '0.2km', type: 'shopping' },
    ],
    wifiSpeed: '40 Mbps',
    vibeCategories: ['cultural', 'historic'],
    averageRating: 4.8,
    reviewCount: 35,
    status: 'active',
  },

  {
    id: '14',
    slug: 'samburu-desert-camp',
    name: 'Samburu Desert Camp',
    tagline: 'Luxury under the stars in warrior country',
    description: 'Experience the raw beauty of Northern Kenya in this luxury tented camp. Set along the Ewaso Ng\'iro River, watch elephants drink at sunset while you relax in your spacious canvas tent with en-suite bathroom. Includes cultural visits to Samburu villages.',
    location: {
      area: 'Samburu National Reserve',
      destination: 'Samburu',
      coordinates: { lat: 0.53, lng: 37.53 },
    },
    pricing: {
      basePrice: 48000,
      currency: 'Ksh',
      cleaningFee: 5500,
    },
    capacity: {
      guests: 2,
      bedrooms: 1,
      beds: 1,
      bathrooms: 1,
    },
    amenities: ['WiFi', 'All-Inclusive', 'Game Drives', 'Cultural Tours', 'Private Chef', 'Stargazing', 'River Views'],
    highlights: ['Luxury Camping', 'Unique Wildlife', 'Samburu Culture', 'Desert Landscapes'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200',
        alt: 'Luxury Desert Camp',
        type: 'hero',
      },
    ],
    nearbyAttractions: [
      { name: 'Samburu National Reserve', distance: '0km', type: 'safari' },
      { name: 'Samburu Village', distance: '3km', type: 'culture' },
    ],
    wifiSpeed: '40 Mbps',
    featured: true,
    vibeCategories: ['wild', 'luxury', 'cultural'],
    averageRating: 5.0,
    reviewCount: 16,
    status: 'active',
  },

  {
    id: '15',
    slug: 'nyeri-coffee-estate-cottage',
    name: 'Nyeri Coffee Estate Cottage',
    tagline: 'Wake up to the aroma of fresh coffee',
    description: 'Stay in the heart of Kenya\'s coffee country. This charming cottage sits within a working coffee estate, offering guests a chance to learn about coffee production from bean to cup. Includes coffee tasting sessions and farm tours.',
    location: {
      area: 'Nyeri, Central Highlands',
      destination: 'Nyeri',
      coordinates: { lat: -0.42, lng: 36.95 },
    },
    pricing: {
      basePrice: 20000,
      currency: 'Ksh',
      cleaningFee: 2200,
    },
    capacity: {
      guests: 4,
      bedrooms: 2,
      beds: 2,
      bathrooms: 2,
    },
    amenities: ['WiFi', 'Coffee Tours', 'Farm-to-Table Meals', 'Garden', 'Fireplace', 'Bird Watching'],
    highlights: ['Coffee Experience', 'Agricultural Tourism', 'Fresh Air', 'Educational'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200',
        alt: 'Coffee Estate Cottage',
        type: 'hero',
      },
    ],
    nearbyAttractions: [
      { name: 'Aberdare National Park', distance: '30km', type: 'safari' },
      { name: 'Baden-Powell Museum', distance: '8km', type: 'culture' },
    ],
    wifiSpeed: '50 Mbps',
    vibeCategories: ['mountain', 'agricultural', 'educational'],
    averageRating: 4.6,
    reviewCount: 28,
    status: 'active',
  },
];