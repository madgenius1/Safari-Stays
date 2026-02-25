// Date & Time Utilities for Safari Stays

// Format date for display
export function formatDate(date: string | Date, format: 'short' | 'long' | 'full' = 'short'): string {
  const d = typeof date === 'string' ? new Date(date) : date;

  const options: Intl.DateTimeFormatOptions = {
    short: { month: 'short', day: 'numeric', year: 'numeric' },
    long: { month: 'long', day: 'numeric', year: 'numeric' },
    full: { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' },
  }[format];

  return d.toLocaleDateString('en-US', options);
}

// Format date range
export function formatDateRange(checkIn: string | Date, checkOut: string | Date): string {
  const start = typeof checkIn === 'string' ? new Date(checkIn) : checkIn;
  const end = typeof checkOut === 'string' ? new Date(checkOut) : checkOut;

  const sameMonth = start.getMonth() === end.getMonth();
  const sameYear = start.getFullYear() === end.getFullYear();

  if (sameMonth && sameYear) {
    return `${start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${end.getDate()}, ${end.getFullYear()}`;
  } else if (sameYear) {
    return `${start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${end.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}, ${end.getFullYear()}`;
  } else {
    return `${formatDate(start, 'short')} - ${formatDate(end, 'short')}`;
  }
}

// Calculate nights between dates
export function calculateNights(checkIn: string | Date, checkOut: string | Date): number {
  const start = typeof checkIn === 'string' ? new Date(checkIn) : checkIn;
  const end = typeof checkOut === 'string' ? new Date(checkOut) : checkOut;
  const diff = end.getTime() - start.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

// Get today's date as YYYY-MM-DD
export function getTodayDate(): string {
  return new Date().toISOString().split('T')[0];
}

// Get tomorrow's date as YYYY-MM-DD
export function getTomorrowDate(): string {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().split('T')[0];
}

// Add days to a date
export function addDays(date: string | Date, days: number): Date {
  const d = typeof date === 'string' ? new Date(date) : new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

// Check if date is in the past
export function isPastDate(date: string | Date): boolean {
  const d = typeof date === 'string' ? new Date(date) : date;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return d < today;
}

// Check if date is today
export function isToday(date: string | Date): boolean {
  const d = typeof date === 'string' ? new Date(date) : date;
  const today = new Date();
  return (
    d.getDate() === today.getDate() &&
    d.getMonth() === today.getMonth() &&
    d.getFullYear() === today.getFullYear()
  );
}

// Get relative time (e.g., "2 days ago", "in 3 days")
export function getRelativeTime(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffMs = d.getTime() - now.getTime();
  const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Tomorrow';
  if (diffDays === -1) return 'Yesterday';
  if (diffDays > 0) return `In ${diffDays} days`;
  return `${Math.abs(diffDays)} days ago`;
}

// Get month name
export function getMonthName(monthIndex: number, format: 'short' | 'long' = 'long'): string {
  const date = new Date(2000, monthIndex, 1);
  return date.toLocaleDateString('en-US', { month: format });
}

// Get day name
export function getDayName(date: string | Date, format: 'short' | 'long' = 'long'): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', { weekday: format });
}

// Validate date string
export function isValidDate(dateString: string): boolean {
  const date = new Date(dateString);
  return date instanceof Date && !isNaN(date.getTime());
}

// Get season for a date (Kenya-specific)
export function getKenyaSeason(date: string | Date): 'peak' | 'off-peak' | 'migration' | 'festive' | 'regular' {
  const d = typeof date === 'string' ? new Date(date) : date;
  const month = d.getMonth() + 1; // 1-12
  const day = d.getDate();

  // Festive Season: Dec 20 - Jan 6
  if ((month === 12 && day >= 20) || (month === 1 && day <= 6)) {
    return 'festive';
  }

  // Migration Season: July 1 - Oct 15
  if ((month === 7) || (month === 8) || (month === 9) || (month === 10 && day <= 15)) {
    return 'migration';
  }

  // Peak Season: Jun 15 - Sep 15 (excluding migration overlap), Dec 15 - Jan 5
  if (
    (month === 6 && day >= 15) ||
    (month === 12 && day >= 15 && day < 20)
  ) {
    return 'peak';
  }

  // Off-Peak: Mar 15 - May 31, Oct 15 - Nov 30
  if (
    (month === 3 && day >= 15) ||
    (month === 4) ||
    (month === 5) ||
    (month === 10 && day >= 15) ||
    (month === 11)
  ) {
    return 'off-peak';
  }

  return 'regular';
}

// Format time (24h to 12h)
export function formatTime(time: string): string {
  const [hours, minutes] = time.split(':').map(Number);
  const period = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 || 12;
  return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;
}

// Get duration text
export function getDurationText(minutes: number): string {
  if (minutes < 60) return `${minutes} minutes`;
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (mins === 0) return `${hours} hour${hours > 1 ? 's' : ''}`;
  return `${hours} hour${hours > 1 ? 's' : ''} ${mins} minutes`;
}

// Calculate age (for guest age requirements)
export function calculateAge(birthDate: string | Date): number {
  const birth = typeof birthDate === 'string' ? new Date(birthDate) : birthDate;
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

// Get date range array
export function getDateRange(start: string | Date, end: string | Date): Date[] {
  const startDate = typeof start === 'string' ? new Date(start) : new Date(start);
  const endDate = typeof end === 'string' ? new Date(end) : new Date(end);
  const dates: Date[] = [];
  const current = new Date(startDate);

  while (current <= endDate) {
    dates.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }

  return dates;
}

// Check if dates overlap
export function datesOverlap(
  start1: string | Date,
  end1: string | Date,
  start2: string | Date,
  end2: string | Date
): boolean {
  const s1 = typeof start1 === 'string' ? new Date(start1) : start1;
  const e1 = typeof end1 === 'string' ? new Date(end1) : end1;
  const s2 = typeof start2 === 'string' ? new Date(start2) : start2;
  const e2 = typeof end2 === 'string' ? new Date(end2) : end2;

  return s1 <= e2 && e1 >= s2;
}

// Get booking deadline (e.g., 48 hours before check-in)
export function getBookingDeadline(checkIn: string | Date, hoursBeforeCheckIn: number = 48): Date {
  const checkInDate = typeof checkIn === 'string' ? new Date(checkIn) : new Date(checkIn);
  return new Date(checkInDate.getTime() - hoursBeforeCheckIn * 60 * 60 * 1000);
}

// Check if booking is still allowed
export function canStillBook(checkIn: string | Date, hoursBeforeCheckIn: number = 48): boolean {
  const deadline = getBookingDeadline(checkIn, hoursBeforeCheckIn);
  return new Date() < deadline;
}