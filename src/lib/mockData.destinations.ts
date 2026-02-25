import { Destination } from './types';

export const destinations: Destination[] = [
  {
    id: 'dest-1',
    slug: 'nairobi',
    name: 'Nairobi',
    tagline: 'Where urban energy meets wild nature',
    description: 'Kenya\'s vibrant capital is a city of contrasts. From its bustling business districts and world-class restaurants to Nairobi National Park where lions roam with skyscrapers as a backdrop. Whether you\'re here for work or leisure, Nairobi offers sophisticated city living with easy access to wildlife experiences.',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920',
      alt: 'Nairobi Skyline',
      type: 'hero',
    },
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?auto=format&fit=crop&w=800',
        alt: 'Nairobi City Center',
      },
      {
        url: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=800',
        alt: 'Karura Forest',
      },
    ],
    highlights: [
      {
        title: 'Urban Convenience',
        description: 'World-class restaurants, shopping malls, and entertainment venues',
      },
      {
        title: 'Wildlife at Your Doorstep',
        description: 'Only capital city in the world with a national park within its boundaries',
      },
      {
        title: 'Tech Hub',
        description: 'Silicon Savannah with excellent internet and coworking spaces',
      },
      {
        title: 'Cultural Diversity',
        description: 'Museums, galleries, and vibrant arts scene',
      },
    ],
    bestFor: ['Digital Nomads', 'Business Travelers', 'City Lovers', 'Weekend Explorers'],
    gettingThere: {
      airport: 'Jomo Kenyatta International Airport (NBO)',
      distance: '15km from city center',
      transportOptions: ['Uber/Bolt (Ksh 1,500-2,500)', 'Airport Taxi (Ksh 2,500-3,500)', 'Airport Bus (Ksh 150)'],
      estimatedCost: 'Ksh 1,500-3,500',
    },
    localGuide: {
      restaurants: [
        {
          name: 'Carnivore Restaurant',
          description: 'Famous for its all-you-can-eat meat buffet and game meat',
          category: 'restaurant',
          priceRange: 'Ksh 3,000-5,000',
        },
        {
          name: 'Talisman',
          description: 'Elegant garden restaurant in Karen with international cuisine',
          category: 'restaurant',
          priceRange: 'Ksh 2,500-4,000',
        },
        {
          name: 'Java House',
          description: 'Popular chain for coffee and casual dining',
          category: 'cafe',
          priceRange: 'Ksh 800-1,500',
        },
      ],
      activities: [
        {
          name: 'Nairobi National Park',
          description: 'See lions, rhinos, and giraffes with city skyline backdrop',
          category: 'activity',
          priceRange: 'Ksh 1,500 entry',
        },
        {
          name: 'Giraffe Centre',
          description: 'Feed endangered Rothschild giraffes',
          category: 'activity',
          priceRange: 'Ksh 1,500',
        },
        {
          name: 'David Sheldrick Elephant Orphanage',
          description: 'Watch baby elephants being fed',
          category: 'activity',
          priceRange: 'Ksh 1,500',
        },
      ],
      shopping: [
        {
          name: 'Westgate Mall',
          description: 'Modern mall with international brands',
          category: 'shopping',
        },
        {
          name: 'Village Market',
          description: 'Upscale shopping and dining complex',
          category: 'shopping',
        },
      ],
      nightlife: [
        {
          name: 'Alchemist',
          description: 'Trendy bar with live music in Westlands',
          category: 'nightlife',
        },
      ],
    },
    climate: {
      bestMonths: ['January', 'February', 'July', 'August', 'September'],
      peakSeason: 'July-October, December-February',
      offPeakSeason: 'April-May (long rains)',
      temperature: '10-26°C year-round',
      rainfall: 'Two rainy seasons: March-May and October-November',
    },
    propertyCount: 8,
    coordinates: { lat: -1.2921, lng: 36.8219 },
    featured: true,
  },

  {
    id: 'dest-2',
    slug: 'diani-beach',
    name: 'Diani Beach',
    tagline: 'Kenya\'s most beautiful white sand paradise',
    description: 'Consistently ranked among Africa\'s best beaches, Diani boasts 25km of pristine white sand, turquoise waters, and swaying palm trees. Perfect for water sports, diving, and pure relaxation. The coral reefs offshore teem with marine life.',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1920',
      alt: 'Diani Beach Aerial View',
      type: 'hero',
    },
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800',
        alt: 'Diani Beach Sunset',
      },
    ],
    highlights: [
      {
        title: 'White Sand Perfection',
        description: '25km of powder-white beaches backed by palm trees',
      },
      {
        title: 'Water Sports Hub',
        description: 'Kite surfing, diving, snorkeling, and deep-sea fishing',
      },
      {
        title: 'Coral Reefs',
        description: 'Protected marine park with vibrant coral gardens',
      },
      {
        title: 'Year-Round Sunshine',
        description: 'Warm tropical climate perfect for beach holidays',
      },
    ],
    bestFor: ['Beach Lovers', 'Water Sports Enthusiasts', 'Families', 'Honeymooners'],
    gettingThere: {
      airport: 'Moi International Airport, Mombasa (MBA)',
      distance: '35km south of Mombasa',
      transportOptions: ['Private Transfer (Ksh 3,000-5,000)', 'Taxi (Ksh 4,000-6,000)', 'Rental Car'],
      estimatedCost: 'Ksh 3,000-6,000',
    },
    localGuide: {
      restaurants: [
        {
          name: 'Ali Barbour\'s Cave Restaurant',
          description: 'Unique dining in a natural coral cave',
          category: 'restaurant',
          priceRange: 'Ksh 5,000-8,000',
        },
        {
          name: 'Sails Beach Bar',
          description: 'Beachfront dining with fresh seafood',
          category: 'restaurant',
          priceRange: 'Ksh 2,000-4,000',
        },
      ],
      activities: [
        {
          name: 'Kite Surfing',
          description: 'Perfect conditions from June to March',
          category: 'activity',
          priceRange: 'Ksh 8,000-12,000/day',
        },
        {
          name: 'Diving & Snorkeling',
          description: 'Explore coral reefs and marine life',
          category: 'activity',
          priceRange: 'Ksh 5,000-10,000',
        },
        {
          name: 'Colobus Conservation',
          description: 'See rare colobus monkeys',
          category: 'activity',
          priceRange: 'Ksh 1,000',
        },
      ],
    },
    climate: {
      bestMonths: ['January', 'February', 'March', 'July', 'August', 'September', 'October'],
      peakSeason: 'December-March, July-October',
      offPeakSeason: 'April-June (long rains)',
      temperature: '22-32°C year-round',
      rainfall: 'April-June wettest, November-December short rains',
    },
    propertyCount: 3,
    coordinates: { lat: -4.3333, lng: 39.5667 },
    featured: true,
  },

  {
    id: 'dest-3',
    slug: 'maasai-mara',
    name: 'Maasai Mara',
    tagline: 'Africa\'s greatest wildlife theatre',
    description: 'The Maasai Mara needs no introduction. Home to the Great Migration, the Big Five, and the Maasai people, this is the Africa of your dreams. Rolling savannahs teeming with wildlife, dramatic river crossings, and unforgettable sunrises.',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1920',
      alt: 'Maasai Mara Landscape',
      type: 'hero',
    },
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1493246507139-91e8bef99c02?auto=format&fit=crop&w=800',
        alt: 'Wildebeest Migration',
      },
    ],
    highlights: [
      {
        title: 'The Great Migration',
        description: 'Witness millions of wildebeest cross the Mara River (July-October)',
      },
      {
        title: 'Big Five Sightings',
        description: 'Excellent chances to see lions, leopards, elephants, buffalo, and rhino',
      },
      {
        title: 'Maasai Culture',
        description: 'Visit traditional Maasai villages and learn about their way of life',
      },
      {
        title: 'Hot Air Ballooning',
        description: 'Soar over the savannah at sunrise',
      },
    ],
    bestFor: ['Safari Enthusiasts', 'Wildlife Photographers', 'Nature Lovers', 'Luxury Travelers'],
    gettingThere: {
      airport: 'Multiple airstrips within the Mara',
      distance: '5-6 hour drive from Nairobi or 45-minute flight',
      transportOptions: ['Domestic Flight (from Ksh 25,000)', 'Private Safari Transfer (Ksh 30,000-50,000)', 'Self-Drive'],
    },
    localGuide: {
      restaurants: [],
      activities: [
        {
          name: 'Game Drives',
          description: 'Morning and evening wildlife viewing',
          category: 'activity',
          priceRange: 'Usually included with accommodation',
        },
        {
          name: 'Hot Air Balloon Safari',
          description: 'Sunrise balloon flight over the Mara',
          category: 'activity',
          priceRange: 'USD 450-500',
        },
        {
          name: 'Cultural Village Visits',
          description: 'Learn about Maasai traditions',
          category: 'activity',
          priceRange: 'Ksh 2,000-5,000',
        },
      ],
    },
    climate: {
      bestMonths: ['July', 'August', 'September', 'October'],
      peakSeason: 'July-October (Migration season)',
      offPeakSeason: 'March-May (long rains)',
      temperature: '15-28°C',
      rainfall: 'March-May wettest period',
    },
    propertyCount: 2,
    coordinates: { lat: -1.4061, lng: 35.0050 },
    featured: true,
  },

  {
    id: 'dest-4',
    slug: 'lamu',
    name: 'Lamu Island',
    tagline: 'A timeless Swahili paradise',
    description: 'Step back in time to this UNESCO World Heritage Site. Lamu\'s car-free streets, dhow-filled harbor, and ancient architecture create an atmosphere unlike anywhere else in Kenya. Pure tranquility and authentic Swahili culture.',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1920',
      alt: 'Lamu Old Town',
      type: 'hero',
    },
    gallery: [],
    highlights: [
      {
        title: 'UNESCO Heritage Site',
        description: 'Best-preserved Swahili settlement in East Africa',
      },
      {
        title: 'No Cars',
        description: 'Travel by foot, donkey, or dhow boat',
      },
      {
        title: 'Pristine Beaches',
        description: 'Empty white sand beaches on Shela side',
      },
      {
        title: 'Rich History',
        description: '700 years of Swahili trading culture',
      },
    ],
    bestFor: ['Culture Seekers', 'Beach Lovers', 'Digital Detoxers', 'History Buffs'],
    gettingThere: {
      airport: 'Lamu Airport (LAU)',
      distance: '1.5 hour flight from Nairobi + boat transfer',
      transportOptions: ['Domestic Flight + Boat (from Ksh 20,000)', 'Road to Mokowe + Boat (long journey)'],
    },
    localGuide: {
      restaurants: [
        {
          name: 'Peponi Hotel Restaurant',
          description: 'Waterfront dining in Shela',
          category: 'restaurant',
          priceRange: 'Ksh 2,500-4,000',
        },
      ],
      activities: [
        {
          name: 'Dhow Sailing',
          description: 'Traditional sailing trips',
          category: 'activity',
          priceRange: 'Ksh 5,000-10,000',
        },
        {
          name: 'Shela Beach',
          description: '12km of pristine sand dunes',
          category: 'activity',
          priceRange: 'Free',
        },
      ],
    },
    climate: {
      bestMonths: ['July', 'August', 'September', 'October', 'December', 'January', 'February'],
      peakSeason: 'December-March, July-October',
      offPeakSeason: 'April-June',
      temperature: '24-32°C',
    },
    propertyCount: 1,
    coordinates: { lat: -2.2717, lng: 40.9020 },
    featured: true,
  },

  {
    id: 'dest-5',
    slug: 'nanyuki',
    name: 'Nanyuki',
    tagline: 'Gateway to Mount Kenya and conservancies',
    description: 'Sitting on the equator at the foot of Mount Kenya, Nanyuki offers cool highland air, world-class wildlife conservancies, and adventure opportunities. A haven for hikers, wildlife enthusiasts, and those seeking cooler temperatures.',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920',
      alt: 'Mount Kenya View',
      type: 'hero',
    },
    gallery: [],
    highlights: [
      {
        title: 'Mount Kenya',
        description: 'Africa\'s second-highest peak for hiking and climbing',
      },
      {
        title: 'Private Conservancies',
        description: 'Ol Pejeta and other world-class wildlife reserves',
      },
      {
        title: 'Cool Climate',
        description: 'Refreshing highland temperatures year-round',
      },
      {
        title: 'Rhino Sanctuary',
        description: 'Largest black rhino population in East Africa',
      },
    ],
    bestFor: ['Hikers', 'Wildlife Enthusiasts', 'Families', 'Adventure Seekers'],
    gettingThere: {
      airport: 'Nanyuki Airstrip',
      distance: '3-4 hour drive from Nairobi',
      transportOptions: ['Private Transfer (Ksh 20,000-30,000)', 'Bus (Ksh 1,000-1,500)', 'Domestic Flight'],
    },
    localGuide: {
      restaurants: [
        {
          name: 'Trout Tree Restaurant',
          description: 'Tree house restaurant serving fresh trout',
          category: 'restaurant',
          priceRange: 'Ksh 2,000-3,500',
        },
      ],
      activities: [
        {
          name: 'Ol Pejeta Conservancy',
          description: 'Big Five viewing and chimpanzee sanctuary',
          category: 'activity',
          priceRange: 'Ksh 7,000 entry',
        },
        {
          name: 'Mount Kenya Trekking',
          description: 'Multi-day hiKsh to Point Lenana',
          category: 'activity',
          priceRange: 'From Ksh 50,000',
        },
      ],
    },
    climate: {
      bestMonths: ['January', 'February', 'July', 'August', 'September', 'December'],
      peakSeason: 'July-October, December-February',
      offPeakSeason: 'March-May, November',
      temperature: '10-24°C',
    },
    propertyCount: 3,
    coordinates: { lat: 0.0167, lng: 37.0667 },
    featured: false,
  },

  {
    id: 'dest-6',
    slug: 'watamu',
    name: 'Watamu',
    tagline: 'Marine paradise and coral gardens',
    description: 'A quiet beach town with world-class snorkeling and diving. Watamu Marine National Park protects some of Kenya\'s best coral reefs, making this a haven for marine life enthusiasts and beach lovers seeking a more laid-back atmosphere.',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1920',
      alt: 'Watamu Beach',
      type: 'hero',
    },
    gallery: [],
    highlights: [
      {
        title: 'Marine National Park',
        description: 'Protected coral reefs teeming with fish',
      },
      {
        title: 'Turtle Conservation',
        description: 'Watch sea turtles nest and hatch',
      },
      {
        title: 'World-Class Diving',
        description: 'Crystal clear waters and vibrant coral',
      },
      {
        title: 'Quiet Beaches',
        description: 'Less crowded than Diani',
      },
    ],
    bestFor: ['Divers', 'Snorkelers', 'Nature Lovers', 'Quiet Seekers'],
    gettingThere: {
      airport: 'Malindi Airport (MYD)',
      distance: '120km north of Mombasa',
      transportOptions: ['Private Transfer (Ksh 10,000-15,000)', 'Bus to Malindi + Taxi'],
    },
    localGuide: {
      restaurants: [],
      activities: [
        {
          name: 'Snorkeling & Diving',
          description: 'Marine park excursions',
          category: 'activity',
          priceRange: 'Ksh 3,000-8,000',
        },
        {
          name: 'Turtle Watching',
          description: 'November-February nesting season',
          category: 'activity',
          priceRange: 'Donation-based',
        },
      ],
    },
    climate: {
      bestMonths: ['January', 'February', 'July', 'August', 'September', 'October'],
      peakSeason: 'December-March, July-October',
      offPeakSeason: 'April-June',
      temperature: '23-31°C',
    },
    propertyCount: 1,
    coordinates: { lat: -3.3667, lng: 40.0333 },
    featured: false,
  },

  {
    id: 'dest-7',
    slug: 'lake-naivasha',
    name: 'Lake Naivasha',
    tagline: 'Hippos, birdlife, and freshwater magic',
    description: 'A freshwater lake in the Great Rift Valley, surrounded by acacia forests and volcanic landscapes. Perfect for a weekend escape from Nairobi, offering boat safaris, birdwatching, and nearby national parks.',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1920',
      alt: 'Lake Naivasha',
      type: 'hero',
    },
    gallery: [],
    highlights: [
      {
        title: 'Freshwater Lake',
        description: 'Boat safaris among hippos and birds',
      },
      {
        title: '400+ Bird Species',
        description: 'Paradise for birdwatchers',
      },
      {
        title: 'Crescent Island',
        description: 'Walk among zebras and wildebeest',
      },
      {
        title: 'Near Hell\'s Gate',
        description: 'Combine with gorge hiking and rock climbing',
      },
    ],
    bestFor: ['Weekend Escapers', 'Birdwatchers', 'Families', 'Cyclists'],
    gettingThere: {
      airport: 'Nairobi (1.5 hour drive)',
      distance: '90km northwest of Nairobi',
      transportOptions: ['Private Car (Ksh 15,000-20,000)', 'Bus (Ksh 500)', 'Self-Drive'],
    },
    localGuide: {
      restaurants: [],
      activities: [
        {
          name: 'Boat Safari',
          description: 'Close encounters with hippos',
          category: 'activity',
          priceRange: 'Ksh 3,000-5,000',
        },
        {
          name: 'Crescent Island Walk',
          description: 'Walking safari among wildlife',
          category: 'activity',
          priceRange: 'Ksh 2,500',
        },
      ],
    },
    climate: {
      bestMonths: ['January', 'February', 'July', 'August', 'September', 'October'],
      peakSeason: 'Year-round destination',
      offPeakSeason: 'April-May',
      temperature: '12-26°C',
    },
    propertyCount: 1,
    coordinates: { lat: -0.7667, lng: 36.3500 },
    featured: false,
  },

  {
    id: 'dest-8',
    slug: 'mombasa',
    name: 'Mombasa',
    tagline: 'Historic coastal city with island vibes',
    description: 'Kenya\'s second-largest city is a melting pot of Swahili, Arab, Indian, and British cultures. Explore Fort Jesus, wander through Old Town\'s narrow streets, and enjoy some of Kenya\'s best seafood before heading to nearby beaches.',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?auto=format&fit=crop&w=1920',
      alt: 'Fort Jesus Mombasa',
      type: 'hero',
    },
    gallery: [],
    highlights: [
      {
        title: 'Fort Jesus',
        description: 'UNESCO World Heritage 16th-century Portuguese fort',
      },
      {
        title: 'Old Town',
        description: 'Narrow streets with Swahili-Arab architecture',
      },
      {
        title: 'Coastal Cuisine',
        description: 'Some of Kenya\'s best seafood and Swahili dishes',
      },
      {
        title: 'Beach Gateway',
        description: 'Easy access to Diani, Nyali, and other beaches',
      },
    ],
    bestFor: ['History Buffs', 'Food Lovers', 'Beach Hoppers', 'Culture Seekers'],
    gettingThere: {
      airport: 'Moi International Airport (MBA)',
      distance: 'City center',
      transportOptions: ['Taxi (Ksh 1,000-2,000)', 'Uber/Bolt', 'Train from Nairobi (5 hours)'],
    },
    localGuide: {
      restaurants: [
        {
          name: 'Tamarind Restaurant',
          description: 'Upscale seafood with dhow cruises',
          category: 'restaurant',
          priceRange: 'Ksh 3,000-5,000',
        },
      ],
      activities: [
        {
          name: 'Fort Jesus',
          description: 'Historic Portuguese fort museum',
          category: 'activity',
          priceRange: 'Ksh 1,200',
        },
        {
          name: 'Old Town Walking Tour',
          description: 'Explore historic quarter',
          category: 'activity',
          priceRange: 'Ksh 2,000-3,000',
        },
      ],
    },
    climate: {
      bestMonths: ['July', 'August', 'September', 'October', 'January', 'February'],
      peakSeason: 'December-March, July-October',
      offPeakSeason: 'April-June',
      temperature: '22-32°C',
    },
    propertyCount: 1,
    coordinates: { lat: -4.0435, lng: 39.6682 },
    featured: false,
  },
];