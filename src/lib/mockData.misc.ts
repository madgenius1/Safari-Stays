import { BlogPost, BlogCategory } from './types';

export const seasons = [
  {
    name: "Regular",
    multiplier: 1.0,
    dateRanges: [], // Default
  },
  {
    name: "Peak",
    multiplier: 1.3,
    dateRanges: [
      { start: "2026-06-01", end: "2026-08-31" },
      { start: "2026-12-15", end: "2026-12-31" },
    ],
  },
  {
    name: "Off-Peak",
    multiplier: 0.8,
    dateRanges: [
      { start: "2026-03-01", end: "2026-05-31" },
      { start: "2026-10-01", end: "2026-11-30" },
    ],
  },
];

export const vibeCategories = [
  {
    id: "urban",
    label: "Urban Chic",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800",
  },
  {
    id: "wild",
    label: "Wild Retreats",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800",
  },
  {
    id: "coastal",
    label: "Coastal Bliss",
    image:
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800",
  },
  {
    id: "mountain",
    label: "Mountain Escapes",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800",
  },
  {
    id: "lake",
    label: "Lake Serenity",
    image:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=800",
  },
];

export const blogCategories: BlogCategory[] = [
  {
    id: 'cat-1',
    slug: 'travel-guides',
    name: 'Travel Guides',
    description: 'Comprehensive guides to Kenya\'s destinations',
    color: '#2D4032',
  },
  {
    id: 'cat-2',
    slug: 'safari-tips',
    name: 'Safari Tips',
    description: 'Expert advice for unforgettable wildlife experiences',
    color: '#C5A059',
  },
  {
    id: 'cat-3',
    slug: 'local-culture',
    name: 'Local Culture',
    description: 'Insights into Kenyan traditions and communities',
    color: '#8B4513',
  },
  {
    id: 'cat-4',
    slug: 'digital-nomad',
    name: 'Digital Nomad',
    description: 'Working remotely from Kenya',
    color: '#4A90E2',
  },
  {
    id: 'cat-5',
    slug: 'travel-tips',
    name: 'Travel Tips',
    description: 'Practical advice for traveling in Kenya',
    color: '#E74C3C',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'ultimate-guide-maasai-mara',
    title: 'The Ultimate Guide to Planning Your Maasai Mara Safari',
    excerpt: 'Everything you need to know about visiting Africa\'s greatest wildlife reserve, from the best time to visit to where to stay and what to expect.',
    content: `
# The Ultimate Guide to Planning Your Maasai Mara Safari

The Maasai Mara is the crown jewel of Kenya's wildlife destinations. Home to the legendary Great Migration, incredible predator sightings, and the proud Maasai people, it's a bucket-list destination for wildlife enthusiasts worldwide.

## When to Visit

**For the Great Migration:** July to October is when millions of wildebeest cross the Mara River from Tanzania's Serengeti. This dramatic spectacle peaks in August-September.

**For General Wildlife:** The Mara is excellent year-round, but June-October and January-February offer the best game viewing as vegetation is lower and animals congregate around water sources.

**To Avoid Crowds:** November-December and March-June see fewer tourists. March-May is the "long rains" but offers lush landscapes and excellent photography.

## Getting There

**By Air:** Multiple daily flights from Nairobi's Wilson Airport (45 minutes, from Ksh 25,000). Most lodges offer airstrip pickups.

**By Road:** 5-6 hours from Nairobi via Narok. Road conditions vary; 4WD recommended during rainy seasons.

## Where to Stay

**Luxury:** Angama Mara, Mahali Mzuri, &Beyond Kichwa Tembo
**Mid-Range:** Mara Serena, Basecamp Mara
**Budget:** Various campsites along the Talek River

## What to Pack

- Neutral-colored clothing (khaki, green, brown)
- Wide-brimmed hat and sunglasses
- Binoculars (essential!)
- Camera with zoom lens (300mm minimum)
- Insect repellent
- Warm layers for early morning drives
- Dust bags for electronics

## Game Drive Tips

1. **Early mornings are golden** - Animals are most active at dawn
2. **Stay patient** - Wildlife watching requires time and quiet observation
3. **Listen to your guide** - Local guides have invaluable knowledge
4. **Respect park rules** - Stay in your vehicle and keep noise down
5. **Bring snacks and water** - Drives can last 4-6 hours

## Beyond Game Drives

- **Hot air balloon safari** - Magical sunrise experience (USD 450-500)
- **Maasai village visits** - Cultural immersion opportunities
- **Bush breakfasts** - Al fresco dining in the savannah
- **Sundowners** - Evening drinks with panoramic views

## Budget Considerations

**Conservative estimate for 3 days:**
- Accommodation: Ksh 45,000-150,000
- Park fees: Ksh 4,500/day (non-resident)
- Food (if not included): Ksh 3,000-5,000/day
- Transport: Ksh 25,000-50,000
- Activities: Ksh 10,000-30,000

**Total: Approximately Ksh 150,000-350,000 per person**

## Conservation Note

Your visit directly supports wildlife conservation and local Maasai communities. Choose lodges with strong conservation credentials and community programs.

## Final Tips

- Book accommodations 3-6 months in advance for peak season
- Purchase comprehensive travel insurance
- Check visa requirements (Kenya offers e-Visas)
- Bring sufficient cash (ATMs scarce in the Mara)
- Download offline maps
- Charge all devices before game drives

The Maasai Mara is truly magical. With proper planning, your safari will be an experience you'll treasure forever.
    `,
    coverImage: {
      url: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200',
      alt: 'Maasai Mara Sunset',
      type: 'hero',
    },
    category: blogCategories[0], // Travel Guides
    author: {
      name: 'Sarah Kimani',
      avatar: 'https://i.pravatar.cc/150?img=47',
      bio: 'Wildlife photographer and safari guide with 10+ years in the Mara',
      role: 'Safari Expert',
    },
    tags: ['Maasai Mara', 'Safari Planning', 'Wildlife', 'Great Migration'],
    relatedProperties: ['1'], // Maji Motoni Retreat
    publishedAt: '2026-01-15T09:00:00Z',
    readTime: 12,
    views: 2847,
    featured: true,
  },

  {
    id: 'post-2',
    slug: 'digital-nomad-nairobi-guide',
    title: 'Complete Digital Nomad Guide to Nairobi',
    excerpt: 'Fast WiFi, great coffee, and a thriving tech scene. Here\'s everything you need to know about working remotely from Kenya\'s capital.',
    content: `
# Complete Digital Nomad Guide to Nairobi

Nairobi, affectionately known as the "Silicon Savannah," has emerged as one of Africa's top destinations for digital nomads. With reliable internet, affordable living, and a vibrant expat community, it's the perfect base for remote work.

## Why Nairobi?

**Excellent Internet:** Fiber connections up to 250Mbps are widely available. Major areas have backup generators ensuring minimal downtime.

**Affordable:** Monthly expenses can range from Ksh 100,000-200,000 depending on lifestyle.

**Time Zone:** GMT+3 works well for Europe, Asia, and US East Coast calls.

**English-Speaking:** Business is conducted in English, making everything easier.

**Strategic Location:** Easy weekend trips to beaches, safaris, and mountains.

## Best Neighborhoods for Digital Nomads

### Westlands
- **Pros:** Central location, restaurants, nightlife, coworking spaces
- **Cons:** Can be noisy, higher rent
- **Rent:** Ksh 60,000-150,000/month for 1-bedroom
- **WiFi:** Excellent (200Mbps+)

### Kilimani
- **Pros:** Quieter than Westlands, good cafes, safer
- **Cons:** Less walking infrastructure
- **Rent:** Ksh 50,000-120,000/month
- **WiFi:** Excellent (150-250Mbps)

### Karen
- **Pros:** Spacious properties, gardens, expat community
- **Cons:** Far from city center, need a car
- **Rent:** Ksh 80,000-200,000/month for houses
- **WiFi:** Very good (100-200Mbps)

## Coworking Spaces

1. **Nairobi Garage** - Westlands, Ksh 15,000/month
2. **iHub** - Ngong Road, Ksh 12,000/month
3. **Worksmith** - Westlands, Day pass Ksh 800
4. **The Foundry** - Karen, Premium space with great coffee

## Best Cafes for Working

- **Java House** (Multiple locations) - Reliable WiFi, power outlets
- **Artcaffe** - Good food, quieter atmosphere
- **About Thyme** (Karen) - Garden seating, excellent coffee
- **CJ's** (Karen) - Popular with expats, great breakfast

## Internet & SIM Cards

**Best Carriers:**
- **Safaricom:** Most reliable, best coverage
- **Airtel:** Good value, improving coverage

**Data Plans:**
- 50GB: Ksh 2,500/month
- Unlimited home fiber: Ksh 5,000-8,000/month

## Monthly Budget Breakdown

**Conservative Budget:**
- Rent: Ksh 60,000
- Food: Ksh 30,000
- Transport: Ksh 15,000
- Internet: Ksh 6,000
- Coworking: Ksh 15,000
- Entertainment: Ksh 20,000
- **Total: Ksh 146,000 (~$1,100)**

**Comfortable Budget:**
- Rent: Ksh 100,000
- Food: Ksh 50,000
- Transport: Ksh 25,000
- Internet: Ksh 8,000
- Coworking: Ksh 20,000
- Entertainment: Ksh 40,000
- **Total: Ksh 243,000 (~$1,850)**

## Visa Information

**Tourist Visa:** 90 days, renewable once (Ksh 5,000)
**East Africa Tourist Visa:** Kenya, Uganda, Rwanda (90 days, USD 100)

*Note: Working on tourist visa is technically not permitted. Consult immigration lawyer for long-term plans.*

## Safety Tips

- Use Uber/Bolt after dark
- Don't display expensive items
- Stick to well-lit, busy areas at night
- Most residential areas have 24/7 security

## Networking & Community

- **Digital Nomads Kenya** (Facebook group)
- **Nairobi Expats** (Facebook group)
- **Tech meetups** at iHub and Nairobi Garage
- **Hash House Harriers** (running group)

## Weekends Away

From Nairobi, you can reach:
- Diani Beach: 1-hour flight
- Maasai Mara: 45-minute flight or 5-hour drive
- Mount Kenya: 3-hour drive
- Lake Naivasha: 1.5-hour drive

## Healthcare

**Recommended Hospitals:**
- Nairobi Hospital (Expensive but excellent)
- Aga Khan Hospital
- MP Shah Hospital

**Insurance:** Comprehensive international health insurance recommended (USD 100-300/month)

## Final Thoughts

Nairobi offers an unbeatable combination of modern amenities and African adventure. The community is welcoming, the food scene is diverse, and you're never far from an incredible weekend escape.

Ready to make the move? Join the growing community of digital nomads calling Nairobi home!
    `,
    coverImage: {
      url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200',
      alt: 'Nairobi City Skyline',
      type: 'hero',
    },
    category: blogCategories[3], // Digital Nomad
    author: {
      name: 'David Chen',
      avatar: 'https://i.pravatar.cc/150?img=12',
      bio: 'Software developer living and working remotely from Nairobi since 2023',
      role: 'Digital Nomad',
    },
    tags: ['Digital Nomad', 'Nairobi', 'Remote Work', 'Coworking'],
    relatedProperties: ['2', '7'], // Nairobi Sky Loft, Kilimani Executive
    publishedAt: '2026-01-20T10:00:00Z',
    readTime: 15,
    views: 3421,
    featured: true,
  },

  {
    id: 'post-3',
    slug: 'best-time-visit-kenya',
    title: 'When is the Best Time to Visit Kenya? A Month-by-Month Guide',
    excerpt: 'Kenya is a year-round destination, but timing your visit right can make all the difference. Here\'s what to expect each month.',
    content: `
# When is the Best Time to Visit Kenya?

Kenya is blessed with diverse microclimates and year-round wildlife viewing, but each season offers unique experiences. Here's your month-by-month guide.

## January - February: Peak Dry Season

**Weather:** Hot and dry (25-32°C)
**Wildlife:** Excellent game viewing as animals congregate at water sources
**Perfect For:** Safari enthusiasts, beach lovers
**Avoid If:** You dislike heat

**Highlights:**
- Baby animals everywhere (calving season)
- Clear skies for photography
- Perfect beach weather
- Fewer tourists than July-August

## March - May: Long Rains

**Weather:** Wet season (occasional afternoon showers)
**Wildlife:** Still good, but harder to spot in lush vegetation
**Perfect For:** Budget travelers, photographers (dramatic skies)
**Avoid If:** You want guaranteed sunny days

**Highlights:**
- Lowest prices of the year
- Lush, green landscapes
- Great for bird watching
- Fewer crowds

## June: Shoulder Season

**Weather:** Dry and pleasant (20-27°C)
**Wildlife:** Good viewing, migration starting
**Perfect For:** Value seekers, all activities
**Avoid If:** N/A - Great all-around month

**Highlights:**
- Rates between low and peak season
- Pleasant temperatures
- Migration beginning in Mara

## July - October: Peak Safari Season

**Weather:** Dry and mild (18-28°C)
**Wildlife:** Spectacular (Great Migration peaks)
**Perfect For:** Wildlife enthusiasts, first-time visitors
**Avoid If:** You want to avoid crowds and high prices

**Highlights:**
- Great Migration river crossings
- Excellent game viewing
- Minimal rain
- Perfect conditions for all activities

## November - December: Short Rains

**Weather:** Short afternoon showers
**Wildlife:** Excellent (post-rain freshness)
**Perfect For:** All-around travel
**Avoid If:** December 20-Jan 5 (expensive and busy)

**Highlights:**
- Beautiful landscapes
- Good prices (except Christmas)
- Migratory birds arrive
- Festive atmosphere in December

## Regional Variations

### Coast (Mombasa, Diani, Lamu)
- Best: December-March, July-October
- Avoid: April-June (heavy rains)
- Water sports peak: July-March (consistent winds)

### Mountains (Mount Kenya, Aberdares)
- Best: January-February, July-October
- Avoid: March-May (wet and cloudy)
- Coldest: July-August (bring warm clothes)

### LaKsh (Naivasha, Nakuru)
- Year-round destination
- Best bird watching: November-April
- Avoid: April (roads can be muddy)

## Safari Considerations by Season

**Dry Season (June-October, January-February):**
- Pros: Easy wildlife spotting, better roads
- Cons: More expensive, more tourists
- Best for: First-time safari-goers

**Wet Season (March-May, November-December):**
- Pros: Lush scenery, dramatic skies, lower prices
- Cons: Some roads impassable, mosquitoes more prevalent
- Best for: Photographers, return visitors

## Our Recommendations

**Best Overall Time:** June-July or January
- Good weather + Lower prices than peak + Good wildlife

**Budget Travel:** April-May
- Lowest prices, green landscapes, fewer crowds

**Ultimate Safari:** August-September
- Peak Migration, best wildlife viewing (if price is no object)

**Beach Holiday:** January-February
- Perfect weather, calm seas, less humid

**Avoiding Crowds:** March, November
- Good weather, lower prices, authentic experience

## Booking Advice

- **Peak Season (July-Oct):** Book 6-12 months ahead
- **Shoulder Season (Jun, Nov):** Book 3-6 months ahead
- **Low Season (Mar-May):** Can book last minute for best deals

Remember, Kenya is magnificent year-round. The "best" time depends on your priorities: Wildlife? Savings? Weather? Crowds? Choose accordingly!
    `,
    coverImage: {
      url: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&w=1200',
      alt: 'Kenya Seasons',
      type: 'hero',
    },
    category: blogCategories[4], // Travel Tips
    author: {
      name: 'Sarah Kimani',
      avatar: 'https://i.pravatar.cc/150?img=47',
      bio: 'Wildlife photographer and safari guide with 10+ years in the Mara',
      role: 'Safari Expert',
    },
    tags: ['Travel Planning', 'Best Time to Visit', 'Weather', 'Seasons'],
    publishedAt: '2026-01-10T08:00:00Z',
    readTime: 10,
    views: 4123,
    featured: true,
  },

  {
    id: 'post-4',
    slug: 'kenya-packing-list-safari',
    title: 'The Ultimate Kenya Safari Packing List',
    excerpt: 'Don\'t over-pack or forget essentials. Here\'s exactly what to bring for your Kenyan adventure, from clothing to photography gear.',
    content: `
# The Ultimate Kenya Safari Packing List

After guiding hundreds of safaris, here's my definitive packing list. Print this out and check off items as you pack!

## Clothing Essentials

### What to Wear on Safari
- **Neutral colors:** Khaki, olive, brown, beige (avoid bright colors and white)
- **Long-sleeve shirts:** Sun protection + mosquito barrier
- **Lightweight pants:** Convertible hiking pants ideal
- **Warm fleece/jacket:** Morning drives can be 10°C!
- **Wide-brimmed hat:** Essential for sun protection
- **Comfortable walking shoes:** Closed-toe for game walks
- **Sandals:** For lodge/camp evenings

### Beach Addition
- Swimwear
- Light beach cover-ups
- Flip-flops

## Photography Gear

### Essential
- **Camera body** (DSLR or mirrorless recommended)
- **Zoom lens:** 100-400mm minimum (wildlife is distant!)
- **Extra memory cards:** 64GB+ (RAW files are huge)
- **Extra batteries:** Charging limited in camps
- **Lens cleaning kit:** Dust is everywhere
- **Binoculars:** 8x42 or 10x42 ideal
- **Phone with good camera:** Backup + convenience

### Optional but Recommended
- **Gimbal/stabilizer:** For vehicle vibrations
- **Dry bag:** Dust protection
- **Portable hard drive:** Backup your photos

## Health & Toiletries

### Medical
- **Malaria prophylaxis:** Consult your doctor 4-6 weeks before
- **Prescription medications:** Bring extra + copy of prescriptions
- **Basic first aid kit:** Band-aids, antiseptic, pain relievers
- **Anti-diarrheal medication:** Just in case
- **Hand sanitizer:** Essential
- **Face masks:** For dusty roads

### Sun Protection
- **High SPF sunscreen:** 50+ recommended
- **Lip balm with SPF**
- **After-sun lotion**
- **Sunglasses:** UV protection essential

### Insect Protection
- **DEET insect repellent:** 30%+ concentration
- **Permethrin spray:** Treat clothes before trip
- **Anti-itch cream**

## Documents & Money

### Essential Documents
- **Passport:** Valid 6+ months beyond travel
- **Visa:** Apply for e-Visa before arrival
- **Travel insurance:** Comprehensive coverage
- **Vaccination certificate:** Yellow fever if coming from endemic country
- **Copies of everything:** Keep digital + physical copies

### Money Matters
- **Cash:** USD for tips, small expenses
- **Credit cards:** Visa/Mastercard widely accepted
- **Notify your bank:** Avoid card blocks

## Electronics

- **Phone + charger**
- **Power bank:** 20,000mAh+ recommended
- **Universal adapter:** UK-style plugs in Kenya
- **Headlamp/flashlight:** Essential for camps
- **E-reader/tablet:** For safari downtime

## Accessories

- **Daypack:** 20-30L for day trips
- **Reusable water bottle:** Camelbak or Nalgene
- **Dry bag:** Protect valuables from dust
- **Ziploc bags:** Multiple uses
- **Travel towel:** Quick-dry microfiber
- **Buff/neck gaiter:** Dust protection

## Don't Forget

- **Downloaded offline maps**
- **Guidebooks:** Kenya field guides (birds, mammals)
- **Notebook & pen:** Safari journal
- **Snacks:** Nuts, protein bars for game drives

## What NOT to Pack

- **Camo clothing:** Illegal in Kenya!
- **Drones:** Require permits (rarely granted in parks)
- **Too much:** Luggage limits often 15kg for bush flights

## Packing Tips

1. **Use packing cubes:** Organization is key
2. **Wear bulkiest items on plane:** Save luggage space
3. **Roll clothes:** More space, fewer wrinkles
4. **Pack essentials in carry-on:** In case luggage delays
5. **Leave room:** For souvenirs!

## Weather-Specific Additions

### Dry Season (June-Oct, Jan-Feb)
- Extra dust protection for electronics
- Warmer layers (mornings cold)

### Wet Season (Mar-May, Nov-Dec)
- Light rain jacket
- Waterproof bag covers
- Quick-dry clothing

## Final Checklist Before You Go

- [ ] Passport & visa
- [ ] Travel insurance
- [ ] Malaria medication started
- [ ] Bank notified of travel
- [ ] Copies of important documents (cloud + physical)
- [ ] Accommodations booked & confirmed
- [ ] Yellow fever certificate (if required)
- [ ] E-SIM or local SIM plan researched
- [ ] Emergency contacts saved
- [ ] Travel adapter tested

Happy packing! Remember: you're going to have an incredible time regardless of what you forget. Essentials can be bought in Nairobi if needed!
    `,
    coverImage: {
      url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200',
      alt: 'Travel Packing',
      type: 'hero',
    },
    category: blogCategories[4], // Travel Tips
    author: {
      name: 'James Mwangi',
      avatar: 'https://i.pravatar.cc/150?img=33',
      bio: 'Safari guide and travel blogger helping visitors make the most of Kenya',
      role: 'Travel Guide',
    },
    tags: ['Packing List', 'Safari Tips', 'Travel Preparation'],
    publishedAt: '2026-01-05T09:00:00Z',
    readTime: 8,
    views: 2956,
    featured: false,
  },

  {
    id: 'post-5',
    slug: 'swahili-culture-coast',
    title: 'Understanding Swahili Culture on the Kenyan Coast',
    excerpt: 'The Kenyan coast has a rich cultural heritage spanning centuries of trade, tradition, and Islamic influence. Here\'s what you should know.',
    content: `
# Understanding Swahili Culture on the Kenyan Coast

The Kenyan coast is where Africa meets Arabia and India, creating a unique Swahili culture that has thrived for over a thousand years. Understanding this rich heritage will deepen your coastal experience.

## What is Swahili Culture?

Swahili (from the Arabic "sahel" meaning coast) represents a blend of African, Arab, Persian, Indian, and later European influences. It's not just an ethnicity but a coastal way of life.

## Key Elements of Swahili Culture

### Language
- **KiSwahili** is the primary language
- Rich in Arabic loan words
- Proverbs and poetry highly valued
- English widely spoken in tourist areas

### Religion
- **Predominantly Islamic** (Sunni majority)
- Churches and Hindu temples also present
- Five daily prayers (call to prayer audible everywhere)
- Ramadan observance important
- Friday is the holy day

### Architecture
- **Lamu Old Town:** Best-preserved Swahili settlement
- Coral stone buildings
- Intricate carved wooden doors (status symbols)
- Inner courtyards for privacy
- Rooftop terraces (baraza)

### Dress
**Traditional:**
- Men: White kanzus (long robes), kofia (caps)
- Women: Colorful kangas and buibuis (veils)
- Modern dress common, especially in Mombasa

**Visitors Should:**
- Dress modestly, especially in Old Towns
- Cover shoulders and knees
- Women: consider carrying a scarf
- Swimwear only on beach, not streets

### Food Culture
**Staple Dishes:**
- **Biryani:** Spiced rice with meat
- **Pilau:** Fragrant rice dish
- **Samaki wa kupaka:** Fish in coconut sauce
- **Urojo:** Tangy soup from Zanzibar
- **Mkate wa ufuta:** Sesame seed bread
- **Mahamri:** Sweet fried bread
- **Fresh seafood:** Lobster, prawns, octopus

**Drinks:**
- **Kahawa:** Strong, spiced coffee
- **Madafu:** Fresh coconut water
- **Tamarind juice**

### Music & Dance
- **Taarab:** Poetry set to music (Arab influence)
- **Chakacha:** Coastal dance
- **Bwiti:** Traditional drums
- Musical events common during celebrations

## Swahili Customs & Etiquette

### Greetings
- HandshaKsh common (right hand only)
- "Jambo" (hello) or "Habari" (how are you?)
- Take time for greetings; rushing is rude
- Show respect to elders

### Hospitality
- Guests are sacred in Swahili culture
- Expect warm welcomes
- Remove shoes when entering homes
- Accept offered tea/coffee (refusing is impolite)

### Social Norms
- Public displays of affection minimal
- Left hand considered unclean (eat with right)
- Photography: always ask permission
- Friday afternoons: many shops closed for prayers
- During Ramadan: don't eat/drink publicly during daytime

## Historical Context

### Trading Heritage
- 1st-century trade with Arabia
- 8th-century Arab settlements
- 15th-century Portuguese arrival
- 19th-century Omani influence
- British colonial period
- Independence in 1963

### Key Historical Sites
- **Fort Jesus (Mombasa):** Portuguese fort built 1593
- **Lamu Old Town:** 700 years of Swahili life
- **Gede Ruins:** 13th-century Swahili town
- **Vasco da Gama Pillar (Malindi):** Portuguese monument

## Festivals & Celebrations

### Religious
- **Eid al-Fitr:** End of Ramadan (dates vary)
- **Eid al-Adha:** Festival of sacrifice
- **Maulidi:** Prophet's birthday celebration (especially Lamu)

### Cultural
- **Lamu Cultural Festival:** August
- **Mombasa Carnival:** November
- **Malindi Festival:** December

## Shopping & Crafts

### Traditional Crafts
- **Carved doors:** Intricate designs
- **Kangas:** Colorful printed cloth
- **Kikois:** Traditional sarongs
- **Silver jewelry:** Arab-influenced designs
- **Dhow models:** Hand-carved boats
- **Spices:** Cloves, cardamom, cinnamon

### Best Markets
- Old Town Market (Mombasa)
- Lamu Waterfront
- Malindi Market

## Dos and Don'ts

### Do:
- Dress modestly in towns
- Learn basic Swahili phrases
- Respect prayer times
- Bargain politely in markets
- Try local food
- Show interest in culture
- Remove shoes in homes/mosques

### Don't:
- Wear beach clothes in town
- Photograph people without permission
- Enter mosques unless invited (and dress appropriately)
- Show disrespect during prayer times
- Eat with left hand
- Public drinking (many Muslims don't drink alcohol)

## Responsible Tourism

- Support local businesses
- Learn about history before visiting sites
- Respect religious practices
- Don't participate in begging culture
- Be mindful of photography
- Ask questions respectfully

## Language Tips

**Essential Swahili Phrases:**
- Jambo - Hello
- Habari - How are you?
- Asante (sana) - Thank you (very much)
- Tafadhali - Please
- Ndiyo/Hapana - Yes/No
- Pole pole - Slowly (very common saying!)
- Hakuna matata - No worries
- Karibu - Welcome

## Final Thoughts

Swahili culture is warm, welcoming, and deeply rooted in hospitality. Show respect, be curious, and you'll be rewarded with genuine connections and unforgettable experiences.

The coast isn't just about beaches – it's about people, history, and a way of life that has thrived for centuries. Take time to understand it, and your visit will be infinitely richer.

*Karibu Kenya!* (Welcome to Kenya!)
    `,
    coverImage: {
      url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200',
      alt: 'Swahili Architecture Lamu',
      type: 'hero',
    },
    category: blogCategories[2], // Local Culture
    author: {
      name: 'Amina Hassan',
      avatar: 'https://i.pravatar.cc/150?img=45',
      bio: 'Lamu native and cultural heritage advocate sharing coastal traditions',
      role: 'Cultural Guide',
    },
    tags: ['Swahili Culture', 'Coastal Kenya', 'Lamu', 'Cultural Heritage'],
    relatedProperties: ['5', '13'], // Lamu Swahili House, Mombasa Old Town Riad
    publishedAt: '2025-12-28T10:00:00Z',
    readTime: 14,
    views: 1876,
    featured: false,
  },
];