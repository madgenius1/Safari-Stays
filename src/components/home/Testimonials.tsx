import { motion } from "motion/react";

export default function Testimonials() {
  const reviews = [
    {
      user: "Sarah J.",
      role: "Content Creator",
      text: "The Wi-Fi was fast enough for my Zoom calls! And the natural light in the loft was a dream for my content.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b4b635e3?auto=format&fit=crop&w=100",
      isBusiness: false,
    },
    {
      user: "Safari Stays",
      role: "Admin",
      text: "We're so glad you enjoyed the fiber connection, Sarah! We personally test every speed before listing.",
      avatar: null,
      isBusiness: true,
    },
    {
      user: "Michael K.",
      role: "Digital Nomad",
      text: "Booking via WhatsApp felt so much more personal than Airbnb. It felt like I had a local friend helping me out.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100",
      isBusiness: false,
    },
  ];

  return (
    <section className="py-24 bg-[#FDFBF7]">
      <div className="max-w-360 mx-auto px-6">
        <div className="text-center mb-16">
          <span className="uppercase text-[#C5A059] text-sm font-medium mb-4">
            Client Reviews
          </span>
          <h2 className="text-4xl font-instrument-serif mt-4">
            What Our Guests Say
          </h2>
        </div>

        <div className="max-w-6xl mx-auto space-y-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: review.isBusiness ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex ${review.isBusiness ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl p-6 shadow-sm relative ${review.isBusiness
                    ? "bg-[#2D4032] text-white rounded-tr-none"
                    : "bg-white text-[#1A1A1A] rounded-tl-none border border-[#E8E3DB]"
                  }`}
              >
                {!review.isBusiness && (
                  <div className="flex items-center space-x-3 mb-3">
                    <img
                      alt={review.user}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="font-bold text-sm">{review.user}</span>
                    <span className="text-xs text-[#1A1A1A]/40">
                      {review.role}
                    </span>
                  </div>
                )}
                {review.isBusiness && (
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#C5A059] flex items-center justify-center text-[10px] font-bold">
                      S
                    </div>
                    <span className="font-bold text-sm">
                      Safari Stays Concierge
                    </span>
                  </div>
                )}
                <p className="text-sm leading-relaxed">{review.text}</p>
                <div
                  className={`absolute top-0 ${review.isBusiness ? "-right-2" : "-left-2"} w-0 h-0 border-8 border-transparent ${review.isBusiness
                      ? "border-l-[#2D4032] border-t-[#2D4032]"
                      : "border-r-white border-t-white"
                    }`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
