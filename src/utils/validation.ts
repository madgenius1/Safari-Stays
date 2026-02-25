// Form Validation Utilities

// Email validation
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Phone number validation (Kenya format)
export function isValidKenyanPhone(phone: string): boolean {
  // Accepts: 0712345678, +254712345678, 254712345678, 712345678
  const cleaned = phone.replace(/\s+/g, '');
  const patterns = [
    /^0[17]\d{8}$/, // 0712345678
    /^\+254[17]\d{8}$/, // +254712345678
    /^254[17]\d{8}$/, // 254712345678
    /^[17]\d{8}$/, // 712345678
  ];
  return patterns.some((pattern) => pattern.test(cleaned));
}

// Format phone number to international format
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\s+/g, '').replace(/^\+/, '');

  if (cleaned.startsWith('0')) {
    return `254${cleaned.slice(1)}`;
  } else if (cleaned.startsWith('254')) {
    return cleaned;
  } else if (/^[17]\d{8}$/.test(cleaned)) {
    return `254${cleaned}`;
  }

  return cleaned;
}

// WhatsApp number validation
export function isValidWhatsAppNumber(phone: string): boolean {
  const formatted = formatPhoneNumber(phone);
  return /^254[17]\d{8}$/.test(formatted);
}

// Name validation
export function isValidName(name: string): boolean {
  return name.trim().length >= 2 && /^[a-zA-Z\s'-]+$/.test(name);
}

// Password strength validation
export function validatePasswordStrength(password: string): {
  isValid: boolean;
  score: number;
  feedback: string[];
} {
  const feedback: string[] = [];
  let score = 0;

  if (password.length < 8) {
    feedback.push('Password must be at least 8 characters');
  } else {
    score += 1;
  }

  if (password.length >= 12) score += 1;

  if (/[a-z]/.test(password)) score += 1;
  else feedback.push('Include lowercase letters');

  if (/[A-Z]/.test(password)) score += 1;
  else feedback.push('Include uppercase letters');

  if (/\d/.test(password)) score += 1;
  else feedback.push('Include numbers');

  if (/[^a-zA-Z\d]/.test(password)) score += 1;
  else feedback.push('Include special characters');

  return {
    isValid: score >= 4,
    score,
    feedback,
  };
}

// M-PESA transaction code validation
export function isValidMpesaCode(code: string): boolean {
  // M-PESA codes are typically 10 characters, alphanumeric
  return /^[A-Z0-9]{10}$/.test(code.toUpperCase());
}

// Credit card validation (basic Luhn algorithm)
export function isValidCreditCard(cardNumber: string): boolean {
  const cleaned = cardNumber.replace(/\s+/g, '');

  if (!/^\d{13,19}$/.test(cleaned)) return false;

  let sum = 0;
  let isEven = false;

  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned[i]);

    if (isEven) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }

    sum += digit;
    isEven = !isEven;
  }

  return sum % 10 === 0;
}

// URL validation
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

// Date validation
export function isValidDateString(date: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return false;
  const d = new Date(date);
  return d instanceof Date && !isNaN(d.getTime());
}

// Age validation (minimum age requirement)
export function meetsMinimumAge(birthDate: string, minimumAge: number): boolean {
  const birth = new Date(birthDate);
  const today = new Date();
  const age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    return age - 1 >= minimumAge;
  }

  return age >= minimumAge;
}

// Required field validation
export function isRequired(value: string | number | boolean | null | undefined): boolean {
  if (typeof value === 'string') return value.trim().length > 0;
  if (typeof value === 'number') return !isNaN(value);
  if (typeof value === 'boolean') return true;
  return value !== null && value !== undefined;
}

// Min/Max length validation
export function hasValidLength(
  value: string,
  min: number,
  max?: number
): { valid: boolean; error?: string } {
  if (value.length < min) {
    return { valid: false, error: `Minimum ${min} characters required` };
  }
  if (max && value.length > max) {
    return { valid: false, error: `Maximum ${max} characters allowed` };
  }
  return { valid: true };
}

// Number range validation
export function isInRange(
  value: number,
  min: number,
  max: number
): { valid: boolean; error?: string } {
  if (value < min) {
    return { valid: false, error: `Minimum value is ${min}` };
  }
  if (value > max) {
    return { valid: false, error: `Maximum value is ${max}` };
  }
  return { valid: true };
}

// Booking form validation
export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  specialRequests?: string;
}

export function validateBookingForm(data: BookingFormData): {
  valid: boolean;
  errors: Partial<Record<keyof BookingFormData, string>>;
} {
  const errors: Partial<Record<keyof BookingFormData, string>> = {};

  // Name validation
  if (!isRequired(data.name)) {
    errors.name = 'Name is required';
  } else if (!isValidName(data.name)) {
    errors.name = 'Please enter a valid name';
  }

  // Email validation
  if (!isRequired(data.email)) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Phone validation
  if (!isRequired(data.phone)) {
    errors.phone = 'Phone number is required';
  } else if (!isValidKenyanPhone(data.phone)) {
    errors.phone = 'Please enter a valid Kenyan phone number';
  }

  // Check-in validation
  if (!isRequired(data.checkIn)) {
    errors.checkIn = 'Check-in date is required';
  } else if (!isValidDateString(data.checkIn)) {
    errors.checkIn = 'Invalid date format';
  } else {
    const checkInDate = new Date(data.checkIn);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (checkInDate < today) {
      errors.checkIn = 'Check-in date must be in the future';
    }
  }

  // Check-out validation
  if (!isRequired(data.checkOut)) {
    errors.checkOut = 'Check-out date is required';
  } else if (!isValidDateString(data.checkOut)) {
    errors.checkOut = 'Invalid date format';
  } else if (data.checkIn && isValidDateString(data.checkIn)) {
    const checkInDate = new Date(data.checkIn);
    const checkOutDate = new Date(data.checkOut);
    if (checkOutDate <= checkInDate) {
      errors.checkOut = 'Check-out must be after check-in';
    }
  }

  // Guests validation
  const guestRange = isInRange(data.guests, 1, 20);
  if (!guestRange.valid) {
    errors.guests = guestRange.error;
  }

  // Special requests length
  if (data.specialRequests) {
    const lengthCheck = hasValidLength(data.specialRequests, 0, 500);
    if (!lengthCheck.valid) {
      errors.specialRequests = lengthCheck.error;
    }
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

// Contact form validation
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function validateContactForm(data: ContactFormData): {
  valid: boolean;
  errors: Partial<Record<keyof ContactFormData, string>>;
} {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  if (!isRequired(data.name)) {
    errors.name = 'Name is required';
  } else if (!isValidName(data.name)) {
    errors.name = 'Please enter a valid name';
  }

  if (!isRequired(data.email)) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!isRequired(data.subject)) {
    errors.subject = 'Subject is required';
  }

  const messageLength = hasValidLength(data.message, 10, 1000);
  if (!messageLength.valid) {
    errors.message = messageLength.error;
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

// Sanitize user input (prevent XSS)
export function sanitizeInput(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

// Format error messages for display
export function formatValidationErrors(
  errors: Record<string, string>
): string {
  return Object.values(errors).join('. ');
}