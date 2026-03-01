import Link from "next/link";
import Image from "next/image";
import { BsInstagram, BsTiktok, BsWhatsapp } from "react-icons/bs";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "Explore",
      links: [
        { name: "Stays", href: "/stays" },
        { name: "Destinations", href: "/destinations" },
        { name: "Activities", href: "/activities" },
        { name: "Experiences", href: "/experiences" },
        { name: "For Creators", href: "/content-creators" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Airport Transfers", href: "/transfers" },
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

  const socialLinks = [
    { icon: <BsInstagram size={20} />, href: "https://instagram.com/safari_stays_and_homes", label: "Instagram" },
    { icon: <BsTiktok size={20} />, href: "https://tiktok.com/@safari_stays_and_homes", label: "TikTok" },
    { icon: <BsWhatsapp size={20} />, href: "https://wa.me/254759711145", label: "WhatsApp" },
  ];

  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 pb-8">
      <div className="max-w-360 mx-auto px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">

          {/* Brand Column - Occupies 5/12 of the space on large screens */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.webp"
                alt="Zanari Logo"
                width={140}
                height={60}
                className="brightness-110 rounded-sm"
              />
            </Link>
            <p className="text-[#E8E3DB]/80 text-base leading-relaxed max-w-4xl">
              Experience the magic of Kenya with luxury accommodations,
              unforgettable excursions, and unique ocean adventures.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, idx) => (
                <Link
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="p-3 bg-white/5 hover:bg-[#C5A059] hover:text-black transition-all duration-300 rounded-full"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns - Occupies 7/12 of the space */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {sections.map((section) => (
              <div key={section.title} className="space-y-5">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A059]">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-[#E8E3DB] hover:text-[#C5A059] transition-colors text-sm font-light"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wide text-[#E8E3DB]/60">
          <p>© {currentYear} Safari Stays & Homes. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-white transition-colors">Email Us</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Legal</Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}