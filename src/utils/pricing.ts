import { seasons } from "../lib/mockData";

export const calculateSeasonalPrice = (basePrice: number, checkIn: string, checkOut: string) => {
  if (!checkIn || !checkOut)
    return { totalPrice: 0, nightlyRate: basePrice, season: "Regular" };

  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const nights = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));

  if (nights <= 0)
    return { totalPrice: 0, nightlyRate: basePrice, season: "Regular" };

  // For simplicity, we use the season of the check-in date
  const checkInDateStr = start.toISOString().split("T")[0];

  let currentSeason = seasons[0]; // Regular
  for (const season of seasons) {
    for (const range of season.dateRanges) {
      if (checkInDateStr >= range.start && checkInDateStr <= range.end) {
        currentSeason = season;
        break;
      }
    }
  }

  const nightlyRate = basePrice * currentSeason.multiplier;
  const totalPrice = nightlyRate * nights;

  return {
    totalPrice,
    nightlyRate,
    season: currentSeason.name,
    nights,
  };
};
