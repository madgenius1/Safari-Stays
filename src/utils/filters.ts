import { Property, Experience, BlogPost, Destination, SearchFilters } from "../lib/types";

// ============================================================================
// PROPERTY FILTERING
// ============================================================================

export function filterProperties(properties: Property[], filters: SearchFilters): Property[] {
  return properties.filter((property) => {
    // Location filter
    if (filters.location) {
      const locationLower = filters.location.toLowerCase();
      const matchesLocation =
        property.location.area.toLowerCase().includes(locationLower) ||
        property.location.destination?.toLowerCase().includes(locationLower) ||
        property.name.toLowerCase().includes(locationLower);
      if (!matchesLocation) return false;
    }

    // Guest capacity filter
    if (filters.guests && property.capacity.guests < filters.guests) {
      return false;
    }

    // Price range filter
    if (filters.priceRange) {
      const [min, max] = filters.priceRange;
      if (property.pricing.basePrice < min || property.pricing.basePrice > max) {
        return false;
      }
    }

    // Amenities filter
    if (filters.amenities && filters.amenities.length > 0) {
      const hasAllAmenities = filters.amenities.every((amenity) =>
        property.amenities.some((a) => a.toLowerCase().includes(amenity.toLowerCase()))
      );
      if (!hasAllAmenities) return false;
    }

    // Vibe categories filter
    if (filters.vibeCategories && filters.vibeCategories.length > 0) {
      const hasVibe = filters.vibeCategories.some((vibe) =>
        property.vibeCategories?.includes(vibe)
      );
      if (!hasVibe) return false;
    }

    // WiFi speed filter
    if (filters.wifiSpeed && property.wifiSpeed) {
      const speed = parseInt(property.wifiSpeed);
      if (isNaN(speed) || speed < filters.wifiSpeed) {
        return false;
      }
    }

    return true;
  });
}

export function sortProperties(
  properties: Property[],
  sortBy: "price-low" | "price-high" | "rating" | "featured"
): Property[] {
  const sorted = [...properties];

  switch (sortBy) {
    case "price-low":
      return sorted.sort((a, b) => a.pricing.basePrice - b.pricing.basePrice);
    case "price-high":
      return sorted.sort((a, b) => b.pricing.basePrice - a.pricing.basePrice);
    case "rating":
      return sorted.sort((a, b) => (b.averageRating || 0) - (a.averageRating || 0));
    case "featured":
      return sorted.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
      });
    default:
      return sorted;
  }
}

// ============================================================================
// SEARCH FUNCTIONALITY
// ============================================================================

export function searchProperties(properties: Property[], query: string): Property[] {
  if (!query.trim()) return properties;

  const lowerQuery = query.toLowerCase();

  return properties.filter((property) => {
    return (
      property.name.toLowerCase().includes(lowerQuery) ||
      property.description.toLowerCase().includes(lowerQuery) ||
      property.tagline.toLowerCase().includes(lowerQuery) ||
      property.location.area.toLowerCase().includes(lowerQuery) ||
      property.location.destination?.toLowerCase().includes(lowerQuery) ||
      property.amenities.some((a) => a.toLowerCase().includes(lowerQuery)) ||
      property.highlights.some((h) => h.toLowerCase().includes(lowerQuery))
    );
  });
}

export function searchExperiences(experiences: Experience[], query: string): Experience[] {
  if (!query.trim()) return experiences;

  const lowerQuery = query.toLowerCase();

  return experiences.filter((exp) => {
    return (
      exp.title.toLowerCase().includes(lowerQuery) ||
      exp.description.toLowerCase().includes(lowerQuery) ||
      exp.tagline.toLowerCase().includes(lowerQuery) ||
      exp.location.toLowerCase().includes(lowerQuery) ||
      exp.category.toLowerCase().includes(lowerQuery)
    );
  });
}

export function searchBlogPosts(posts: BlogPost[], query: string): BlogPost[] {
  if (!query.trim()) return posts;

  const lowerQuery = query.toLowerCase();

  return posts.filter((post) => {
    return (
      post.title.toLowerCase().includes(lowerQuery) ||
      post.excerpt.toLowerCase().includes(lowerQuery) ||
      post.content.toLowerCase().includes(lowerQuery) ||
      post.category.name.toLowerCase().includes(lowerQuery) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
    );
  });
}

// ============================================================================
// PAGINATION
// ============================================================================

export function paginateItems<T>(items: T[], page: number, itemsPerPage: number): T[] {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return items.slice(startIndex, endIndex);
}

export function getTotalPages(totalItems: number, itemsPerPage: number): number {
  return Math.ceil(totalItems / itemsPerPage);
}

// ============================================================================
// PRICE CALCULATIONS
// ============================================================================

export function calculateTotalPrice(
  basePrice: number,
  nights: number,
  seasonMultiplier: number = 1.0,
  cleaningFee: number = 0
): number {
  const nightlyRate = basePrice * seasonMultiplier;
  const subtotal = nightlyRate * nights;
  return subtotal + cleaningFee;
}

export function getPriceRange(properties: Property[]): [number, number] {
  if (properties.length === 0) return [0, 0];

  const prices = properties.map((p) => p.pricing.basePrice);
  return [Math.min(...prices), Math.max(...prices)];
}

// ============================================================================
// DATE UTILITIES
// ============================================================================

export function calculateNights(checkIn: string, checkOut: string): number {
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const diff = end.getTime() - start.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export function formatDateRange(checkIn: string, checkOut: string): string {
  const start = new Date(checkIn);
  const end = new Date(checkOut);

  const options: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" };
  const startStr = start.toLocaleDateString("en-US", options);
  const endStr = end.toLocaleDateString("en-US", options);

  return `${startStr} - ${endStr}`;
}

// ============================================================================
// VALIDATION
// ============================================================================

export function validateBookingDates(
  checkIn: string,
  checkOut: string
): { valid: boolean; error?: string } {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);

  if (checkInDate < today) {
    return { valid: false, error: "Check-in date must be in the future" };
  }

  if (checkOutDate <= checkInDate) {
    return { valid: false, error: "Check-out must be after check-in" };
  }

  const nights = calculateNights(checkIn, checkOut);
  if (nights < 1) {
    return { valid: false, error: "Minimum stay is 1 night" };
  }

  if (nights > 90) {
    return { valid: false, error: "Maximum stay is 90 nights" };
  }

  return { valid: true };
}

// ============================================================================
// HELPERS
// ============================================================================

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function getRandomItems<T>(array: T[], count: number): T[] {
  const shuffled = shuffleArray(array);
  return shuffled.slice(0, count);
}