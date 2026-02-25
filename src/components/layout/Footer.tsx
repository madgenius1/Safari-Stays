export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "Explore",
      links: [
        { name: "Stays", href: "/stays" },
        { name: "Destinations", href: "/destinations" },
        { name: "Experiences", href: "/experiences" },
        { name: "Verified Homes", href: "/verified-homes" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "How it Works", href: "/how-it-works" },
        { name: "Host With Us", href: "/host-with-us" },
        { name: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact", href: "/contact" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cancellation Policy", href: "/cancellation-policy" },
      ],
    },
  ];

  return (
    <footer className="bg-[#1A1A1A] text-white pt-20 pb-10">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <h2 className="text-3xl font-instrument-serif">Safari Stays</h2>
            <p className="text-[#E8E3DB] text-sm leading-relaxed max-w-xs">
              Premium, WhatsApp-first booking platform for curated Kenyan
              accommodations and experiences.
            </p>
          </div>

          {/* Links */}
          {sections.map((section) => (
            <div key={section.title} className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#C5A059]">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[#E8E3DB] hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-[#E8E3DB]">
          <p>© {currentYear} Safari Stays & Homes. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">
              Instagram
            </a>
            <a href="#" className="hover:text-white">
              Twitter
            </a>
            <a href="#" className="hover:text-white">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
