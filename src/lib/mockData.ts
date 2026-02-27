// MASTER MOCK DATA INDEX - Safari Stays & Homes

export * from './types';
export { properties } from './mockData.properties';
export { destinations } from './mockData.destinations';
export { experiences } from './mockData.experiences';
export { blogPosts, blogCategories } from './mockData.blogPosts';
export { reviews, testimonials } from './mockData.reviews';
export { seasons, vibeCategories, faqs } from './mockData.misc';
export { activities, activityCategories, activityRegions, getActivitiesByRegion, getActivitiesByCategory, getFeaturedActivities, getActivityBySlug } from './mockData.activities';


// Import for utility functions
import { properties } from './mockData.properties';
import { destinations } from './mockData.destinations';
import { activities } from './mockData.activities';
import { experiences } from './mockData.experiences';
import { blogPosts, blogCategories } from './mockData.blogPosts';
import { faqs } from './mockData.misc';
import { reviews, testimonials } from './mockData.reviews';
import { seasons, vibeCategories, } from './mockData.misc';

// Legacy export for backward compatibility
export const vibes = vibeCategories;


export const mockDataStats = {
  properties: {
    total: properties.length,
    featured: properties.filter(p => p.featured).length,
    byStatus: {
      active: properties.filter(p => p.status === 'active').length,
      draft: properties.filter(p => p.status === 'draft').length,
      archived: properties.filter(p => p.status === 'archived').length,
    },
    byVibe: vibeCategories.reduce((acc, vibe) => {
      if (vibe.id !== 'all') {
        acc[vibe.id] = properties.filter(p => 
          p.vibeCategories?.includes(vibe.id)
        ).length;
      }
      return acc;
    }, {} as Record<string, number>),
    averagePrice: Math.round(
      properties.reduce((sum, p) => sum + p.pricing.basePrice, 0) / properties.length
    ),
  },
  destinations: {
    total: destinations.length,
    featured: destinations.filter(d => d.featured).length,
    totalProperties: destinations.reduce((sum, d) => sum + d.propertyCount, 0),
  },
  experiences: {
    total: experiences.length,
    featured: experiences.filter(e => e.featured).length,
    byCategory: {
      safari: experiences.filter(e => e.category === 'safari').length,
      cultural: experiences.filter(e => e.category === 'cultural').length,
      adventure: experiences.filter(e => e.category === 'adventure').length,
      'food-wine': experiences.filter(e => e.category === 'food-wine').length,
    },
    averagePrice: Math.round(
      experiences.reduce((sum, e) => sum + e.price, 0) / experiences.length
    ),
  },
  activities: {
    total: activities.length,
    featured: activities.filter(a => a.featured).length,
    byRegion: {
      diani: activities.filter(a => a.region === 'diani').length,
      watamu: activities.filter(a => a.region === 'watamu').length,
      malindi: activities.filter(a => a.region === 'malindi').length,
    },
    byCategory: {
      'water-sports': activities.filter(a => a.category === 'water-sports').length,
      photography: activities.filter(a => a.category === 'photography').length,
      adventure: activities.filter(a => a.category === 'adventure').length,
      wildlife: activities.filter(a => a.category === 'wildlife').length,
      cultural: activities.filter(a => a.category === 'cultural').length,
    },
    averagePrice: Math.round(
      activities.reduce((sum, a) => sum + a.price, 0) / activities.length
    ),
  },
  reviews: {
    total: reviews.length,
    verified: reviews.filter(r => r.verified).length,
    averageRating: Number((
      reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
    ).toFixed(1)),
  },
  testimonials: {
    total: testimonials.length,
    verified: testimonials.filter(t => t.verified).length,
  },
  faqs: {
    total: faqs.length,
     byCategory: {
       booking: faqs.filter(f => f.category === 'booking').length,
       payment: faqs.filter(f => f.category === 'payment').length,
       properties: faqs.filter(f => f.category === 'properties').length,
       wifi: faqs.filter(f => f.category === 'wifi').length,
       safety: faqs.filter(f => f.category === 'safety').length,
       cancellation: faqs.filter(f => f.category === 'cancellation').length,
       general: faqs.filter(f => f.category === 'general').length,
     },
   },
};

// UTILITY FUNCTIONS

/**
 * Get featured content across all types
 */
export const getFeaturedContent = () => ({
  properties: properties.filter(p => p.featured),
  destinations: destinations.filter(d => d.featured),
  experiences: experiences.filter(e => e.featured),
  blogPosts: blogPosts.filter(p => p.featured),
});

/**
 * Get properties by vibe category
 */
export const getPropertiesByVibe = (vibeId: string) => {
  if (vibeId === 'all') return properties;
  return properties.filter(p => p.vibeCategories?.includes(vibeId));
};

/**
 * Get properties by destination
 */
export const getPropertiesByDestination = (destinationName: string) => {
  return properties.filter(p => p.location.destination === destinationName);
};

/**
 * Get experiences by category
 */
export const getExperiencesByCategory = (category: string) => {
  return experiences.filter(e => e.category === category);
};

/**
 * Get blog posts by category
 */
export const getBlogPostsByCategory = (categorySlug: string) => {
  return blogPosts.filter(p => p.category.slug === categorySlug);
};

/**
 * Get reviews for a property
 */
export const getPropertyReviews = (propertyId: string) => {
  return reviews.filter(r => r.propertyId === propertyId);
};

/**
 * Get FAQs by category
 */
// export const getFAQsByCategory = (category: string) => {
//   return faqs.filter(f => f.category === category).sort((a, b) => 
//     (a.order || 999) - (b.order || 999)
//   );
// };

/**
 * Search properties
 */
export const searchProperties = (query: string) => {
  const lowerQuery = query.toLowerCase();
  return properties.filter(p => 
    p.name.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.location.area.toLowerCase().includes(lowerQuery) ||
    p.tagline.toLowerCase().includes(lowerQuery)
  );
};

// Log statistics on import (for development)
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  console.log('📊 Mock Data Loaded:', mockDataStats);
}