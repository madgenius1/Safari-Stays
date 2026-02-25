import { CheckCircle, ShieldCheck, Headphones, Globe } from "lucide-react";

export default function TrustBar() {
  const items = [
    {
      icon: <ShieldCheck size={24} />,
      title: "Verified Properties",
      desc: "Every home is personally inspected by our team.",
    },
    {
      icon: <Headphones size={24} />,
      title: "24/7 WhatsApp Support",
      desc: "Real humans, ready to help you on your favorite app.",
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Concierge Quality",
      desc: "Local insights and expert tips for every destination.",
    },
    {
      icon: <Globe size={24} />,
      title: "Seamless Bookings",
      desc: "No complicated forms. Just direct conversation.",
    },
  ];

  return (
    <section className="bg-[#2D4032] py-16 text-white">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="text-[#C5A059] bg-white/10 p-4 rounded-full">
                {item.icon}
              </div>
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-white/60 text-sm max-w-[200px]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
