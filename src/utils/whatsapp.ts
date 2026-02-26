export const generateWhatsAppLink = (
  property,
  dates,
  guests,
  estimatedPrice,
) => {
  const phoneNumber = "254700000000"; // Replace with real concierge number
  const checkIn = dates?.start
    ? new Date(dates.start).toLocaleDateString()
    : "TBD";
  const checkOut = dates?.end
    ? new Date(dates.end).toLocaleDateString()
    : "TBD";

  const text = `Hi! I'm interested in booking *${property.name}* at Safari Stays & Homes.
  
📍 Location: ${property.location.area}
📅 Dates: ${checkIn} to ${checkOut}
👥 Guests: ${guests || 1}
💰 Estimated: KES ${estimatedPrice || "Price on request"}

Can you help me confirm availability?`;

  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${phoneNumber}?text=${encodedText}`;
};
