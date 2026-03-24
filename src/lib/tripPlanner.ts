// TRIP PLANNER LOGIC - Safari Stays & Homes
// Smart matching algorithm for properties, activities, and itinerary generation

import { TripPreferences, TripPlan, DayItinerary, Property, Activity } from './types';
import { properties } from './mockData.properties';
import { activities } from './mockData.activities';
import { destinations } from './mockData.destinations';
import { vibeOptions } from './mockData.misc';

// MATCHING ALGORITHMS

/**
 * Match property to user preferences
 * Scores properties based on capacity, budget, location, and vibe
 */
export function matchProperty(preferences: TripPreferences): Property | null {
  const { budget, destination, guests, vibe, duration } = preferences;

  // Calculate budget allocation (60% to accommodation)
  const accommodationBudget = budget * 0.6;
  const pricePerNight = accommodationBudget / duration;

  // Filter properties by basic criteria
  let candidates = properties.filter((property) => {
    // Check capacity
    const hasCapacity = property.capacity.guests >= guests;
    
    // Check location (flexible matching)
    const matchesLocation = 
      property.location.destination?.toLowerCase().includes(destination.toLowerCase()) ||
      property.location.area.toLowerCase().includes(destination.toLowerCase()) ||
      destination.toLowerCase() === 'any';
    
    // Check price range (allow 20% flexibility)
    const withinBudget = property.pricing.basePrice <= pricePerNight * 1.2;
    
    return hasCapacity && matchesLocation && withinBudget && property.status === 'active';
  });

  if (candidates.length === 0) {
    // Relax location constraint if no matches
    candidates = properties.filter((property) => {
      const hasCapacity = property.capacity.guests >= guests;
      const withinBudget = property.pricing.basePrice <= pricePerNight * 1.3;
      return hasCapacity && withinBudget && property.status === 'active';
    });
  }

  if (candidates.length === 0) return null;

  // Score each candidate based on preferences
  const scored = candidates.map((property) => {
    let score = 0;

    // Vibe matching (most important)
    const vibeKeywords = vibe.flatMap((v) => {
      const vibeOption = vibeOptions.find((vo) => vo.id === v);
      return vibeOption?.keywords || [];
    });

    const propertyVibes = property.vibeCategories || [];
    const vibeMatches = propertyVibes.filter((pv) =>
      vibeKeywords.some((kw) => pv.includes(kw) || kw.includes(pv))
    ).length;
    score += vibeMatches * 20;

    // Price match (closer to budget is better)
    const priceDiff = Math.abs(property.pricing.basePrice - pricePerNight);
    const priceScore = Math.max(0, 20 - (priceDiff / pricePerNight) * 20);
    score += priceScore;

    // Exact capacity match bonus
    if (property.capacity.guests === guests) score += 10;

    // WiFi bonus for work retreats
    //if (property.wifi && property.wifi.speed >= 50) score += 5;

    // Featured property bonus
    if (property.featured) score += 5;

    // High rating bonus
    //if (property.rating >= 4.8) score += 10;

    return { property, score };
  });

  // Sort by score and return best match
  scored.sort((a, b) => b.score - a.score);
  return scored[0].property;
}

/**
 * Match activities to user preferences
 * Returns activities that fit budget, location, vibe, and group size
 */
export function matchActivities(
  preferences: TripPreferences,
  accommodationCost: number
): Activity[] {
  const { budget, destination, guests, vibe, duration } = preferences;

  // Calculate remaining budget for activities (20% of total budget)
  const activityBudget = budget * 0.2;

  // Get vibe keywords
  const vibeKeywords = vibe.flatMap((v) => {
    const vibeOption = vibeOptions.find((vo) => vo.id === v);
    return vibeOption?.keywords || [];
  });

  // Filter activities
  let candidates = activities.filter((activity) => {
    // Check location
    const destinationLower = destination.toLowerCase();
    const activityRegion = activity.region.toLowerCase();
    const activityLocation = activity.location.toLowerCase();
    
    const matchesLocation =
      activityRegion.includes(destinationLower) ||
      activityLocation.includes(destinationLower) ||
      destinationLower.includes(activityRegion) ||
      destination === 'any';

    // Check group size
    const fitsGroupSize = activity.groupSize.max >= guests;

    // Check if affordable
    const affordable = activity.price <= activityBudget * 0.7; // Leave buffer

    return matchesLocation && fitsGroupSize && affordable;
  });

  // Score activities based on vibe match
  const scored = candidates.map((activity) => {
    let score = 0;

    // Vibe matching
    const activityKeywords = [
      activity.category,
      activity.type,
      ...activity.bestFor.map((b) => b.toLowerCase()),
      ...activity.seoKeywords,
    ];

    const matches = vibeKeywords.filter((kw) =>
      activityKeywords.some((ak) => ak.includes(kw) || kw.includes(ak))
    ).length;

    score += matches * 10;

    // Featured activity bonus
    if (activity.featured) score += 15;

    // High rating bonus
    if (activity.reviews.averageRating >= 4.8) score += 10;

    // Price value score (lower price = higher score for budget travelers)
    const priceScore = Math.max(0, 10 - (activity.price / activityBudget) * 10);
    score += priceScore;

    return { activity, score };
  });

  // Sort by score
  scored.sort((a, b) => b.score - a.score);

  // Select activities that fit budget
  const selected: Activity[] = [];
  let totalCost = 0;
  const maxActivities = Math.min(duration + 1, 6); // 1-2 activities per day

  for (const { activity } of scored) {
    if (selected.length >= maxActivities) break;
    if (totalCost + activity.price <= activityBudget) {
      selected.push(activity);
      totalCost += activity.price;
    }
  }

  return selected;
}

/**
 * Generate day-by-day itinerary
 */
export function generateItinerary(
  preferences: TripPreferences,
  property: Property,
  selectedActivities: Activity[]
): DayItinerary[] {
  const { duration, startDate } = preferences;
  const itinerary: DayItinerary[] = [];

  // Helper to get date string
  const getDateString = (dayNumber: number) => {
    if (!startDate) return `Day ${dayNumber}`;
    const date = new Date(startDate);
    date.setDate(date.getDate() + dayNumber - 1);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  // Day 1: Arrival
  itinerary.push({
    day: 1,
    date: getDateString(1),
    title: 'Arrival & Check-In',
    activities: [
      {
        time: '12:00 PM',
        activity: 'Arrive & Check-In',
        description: `Check into ${property.name}. Take time to settle in and explore your accommodation.`,
        location: property.location.area,
      },
      {
        time: '02:00 PM',
        activity: 'Lunch',
        description: 'Enjoy a welcome meal at a nearby restaurant.',
        cost: 1500,
      },
      {
        time: '04:00 PM',
        activity: 'Explore the Area',
        description: `Walk around ${property.location.area}, visit local shops, and get oriented.`,
      },
      {
        time: '07:00 PM',
        activity: 'Dinner',
        description: 'Try local cuisine at a recommended restaurant.',
        cost: 2000,
      },
    ],
    meals: {
      lunch: 'Local restaurant',
      dinner: 'Coastal cuisine',
    },
    estimatedCost: 3500,
  });

  // Middle days: Activities
  const activitiesPerDay = Math.floor(selectedActivities.length / Math.max(duration - 2, 1));
  let activityIndex = 0;

  for (let day = 2; day <= duration - 1 && day <= duration; day++) {
    const dayActivities = selectedActivities.slice(
      activityIndex,
      activityIndex + Math.max(activitiesPerDay, 1)
    );
    activityIndex += dayActivities.length;

    const dayItinerary: DayItinerary = {
      day,
      date: getDateString(day),
      title: dayActivities.length > 0 ? dayActivities[0].title : 'Free Day',
      activities: [
        {
          time: '08:00 AM',
          activity: 'Breakfast',
          description: 'Start your day with a hearty breakfast.',
          cost: 800,
        },
      ],
      meals: {
        breakfast: 'At accommodation or nearby cafe',
        lunch: 'Local spot',
        dinner: 'Recommended restaurant',
      },
      estimatedCost: 4000,
    };

    // Add main activities
    if (dayActivities.length > 0) {
      dayActivities.forEach((activity, idx) => {
        const startTime = idx === 0 ? '10:00 AM' : '02:00 PM';
        dayItinerary.activities.push({
          time: startTime,
          activity: activity.title,
          description: activity.subtitle,
          cost: activity.price,
          location: activity.location,
        });
        dayItinerary.estimatedCost += activity.price;
      });
    } else {
      // Free day activities
      dayItinerary.activities.push({
        time: '10:00 AM',
        activity: 'Leisure Time',
        description: 'Relax at the beach, pool, or explore on your own.',
      });
    }

    // Add meals
    dayItinerary.activities.push(
      {
        time: '01:00 PM',
        activity: 'Lunch',
        description: 'Midday meal at a local restaurant.',
        cost: 1500,
      },
      {
        time: '07:00 PM',
        activity: 'Dinner',
        description: 'Evening dining experience.',
        cost: 2500,
      }
    );

    itinerary.push(dayItinerary);
  }

  // Last day: Departure (if more than 1 day)
  if (duration > 1) {
    itinerary.push({
      day: duration,
      date: getDateString(duration),
      title: 'Check-Out & Departure',
      activities: [
        {
          time: '08:00 AM',
          activity: 'Breakfast',
          description: 'Final breakfast before departure.',
          cost: 800,
        },
        {
          time: '10:00 AM',
          activity: 'Check-Out',
          description: `Check out of ${property.name}. Take final photos and say goodbye.`,
        },
        {
          time: '12:00 PM',
          activity: 'Departure',
          description: 'Head to the airport or your next destination.',
        },
      ],
      meals: {
        breakfast: 'At accommodation',
      },
      estimatedCost: 1500,
    });
  }

  return itinerary;
}

/**
 * Calculate budget breakdown
 */
export function calculateBudget(
  preferences: TripPreferences,
  property: Property,
  selectedActivities: Activity[],
  itinerary: DayItinerary[]
) {
  const { duration } = preferences;

  const accommodationCost = property.pricing.basePrice * duration;
  const activitiesCost = selectedActivities.reduce((sum, a) => sum + a.price, 0);
  const mealsCost = itinerary.reduce((sum, day) => {
    const dayCost = day.activities
      .filter((a) => a.activity.toLowerCase().includes('lunch') || a.activity.toLowerCase().includes('dinner') || a.activity.toLowerCase().includes('breakfast'))
      .reduce((s, a) => s + (a.cost || 0), 0);
    return sum + dayCost;
  }, 0);
  const transportCost = Math.round(preferences.budget * 0.1); // Estimate 10% for transport

  const total = accommodationCost + activitiesCost + mealsCost + transportCost;
  const remaining = preferences.budget - total;

  return {
    accommodation: accommodationCost,
    activities: activitiesCost,
    meals: mealsCost,
    transport: transportCost,
    total,
    remaining,
  };
}

/**
 * Generate complete trip plan
 */
export function generateTripPlan(preferences: TripPreferences): TripPlan | null {
  // Match property
  const property = matchProperty(preferences);
  if (!property) return null;

  // Calculate accommodation cost
  const accommodationCost = property.pricing.basePrice * preferences.duration;

  // Match activities
  const selectedActivities = matchActivities(preferences, accommodationCost);

  // Generate itinerary
  const itinerary = generateItinerary(preferences, property, selectedActivities);

  // Calculate budget
  const budget = calculateBudget(preferences, property, selectedActivities, itinerary);

  // Get destination info
  const destinationInfo = destinations.find(
    (d) =>
      d.name.toLowerCase().includes(preferences.destination.toLowerCase()) ||
      preferences.destination.toLowerCase().includes(d.name.toLowerCase())
  );

  // Generate recommendations
  const recommendations = {
    restaurants: destinationInfo?.highlights.slice(0, 3).map((h) => h) || [
      'Local seafood restaurant',
      'Traditional Kenyan cuisine',
      'Beachfront dining',
    ],
    attractions: property.nearbyAttractions.slice(0, 5).map((a) => a.name),
    tips: [
      `Best time to visit ${preferences.destination}: ${destinationInfo?.bestTimeToVisit || 'Year-round'}`,
      `Pack sunscreen, light clothing, and comfortable shoes`,
      `Download offline maps before your trip`,
      `Keep emergency numbers: ${property.contact.phone}`,
      `Try local cuisine and support local businesses`,
    ],
  };

  // Build trip plan
  const tripPlan: TripPlan = {
    id: `trip-${Date.now()}`,
    preferences,
    accommodation: {
      property,
      totalNights: preferences.duration,
      totalCost: accommodationCost,
    },
    activities: selectedActivities.map((activity, idx) => ({
      activity,
      day: Math.floor(idx / 2) + 2, // Start from day 2
      timeSlot: idx % 2 === 0 ? 'morning' : 'afternoon',
    })),
    itinerary,
    budget,
    recommendations,
  };

  return tripPlan;
}

/**
 * Validate trip preferences
 */
export function validatePreferences(preferences: Partial<TripPreferences>): string[] {
  const errors: string[] = [];

  if (!preferences.budget || preferences.budget < 10000) {
    errors.push('Budget must be at least KES 10,000');
  }

  if (!preferences.destination) {
    errors.push('Please select a destination');
  }

  if (!preferences.guests || preferences.guests < 1) {
    errors.push('Number of guests must be at least 1');
  }

  if (preferences.guests && preferences.guests > 10) {
    errors.push('Maximum 10 guests per booking');
  }

  if (!preferences.vibe || preferences.vibe.length === 0) {
    errors.push('Please select at least one vibe');
  }

  if (!preferences.duration || preferences.duration < 1) {
    errors.push('Duration must be at least 1 night');
  }

  if (preferences.duration && preferences.duration > 30) {
    errors.push('Maximum duration is 30 nights');
  }

  return errors;
}