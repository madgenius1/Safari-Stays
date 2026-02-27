"use client"

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Stays", href: "/stays" },
    { name: "Destinations", href: "/destinations" },
    { name: "Activities", href: "/activities" },
    { name: "Experiences", href: "/experiences" },
    { name: "For Creators", href: "/content-creators" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-[#FDFBF7] shadow-sm py-3 md:py-4"
        : "bg-transparent py-4 md:py-6"
        }`}
    >
      <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={`text-xl sm:text-2xl font-instrument-serif transition-colors ${isScrolled ? "text-[#1A1A1A]" : "text-gray-700"}`}
        >
          <Image
            src="/images/logo.webp"
            alt="Zanari Logo"
            width={120}
            height={80}
            className="rounded-sm"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`
    relative pb-1 text-lg font-medium transition-colors duration-300 group
    ${isScrolled ? "text-[#1A1A1A]" : "text-gray-300"}
    hover:text-[#C5A059]
  `}
            >
              {link.name}

              {/* Custom Animated Underline */}
              <span
                className={`
      absolute left-0 bottom-0 h-0.5 w-0 bg-[#C5A059] 
      transition-all duration-300 ease-out 
      group-hover:w-full
    `}
              />
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <a
            href="https://wa.me/254700000000?text=Hi! I need help planning my Kenya trip."
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center space-x-2 px-6 py-2.5 rounded-full border transition-all ${isScrolled
              ? "border-[#2D4032] text-[#2D4032] hover:bg-[#2D4032] hover:text-white"
              : "border-white text-white hover:bg-white hover:text-[#2D4032]"
              }`}
          >
            <span className="text-sm font-semibold">Plan My Trip</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X
              className={isScrolled ? "text-[#1A1A1A]" : "text-white"}
              size={24}
            />
          ) : (
            <Menu
              className={isScrolled ? "text-[#1A1A1A]" : "text-white"}
              size={24}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#FDFBF7] border-t border-[#E8E3DB] p-6 lg:hidden shadow-xl"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-[#1A1A1A] hover:text-[#C5A059] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/254700000000?text=Hi! I need help planning my Kenya trip."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#C5A059] text-white py-4 rounded-xl font-bold text-center hover:bg-[#b08e4d] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Plan My Trip
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav >
  );
}
