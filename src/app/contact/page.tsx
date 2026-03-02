"use client";

import { motion } from "motion/react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

export default function ContactPage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-32 pb-24">
      <div className="max-w-360 mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mx-auto mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-instrument-serif text-[#1A1A1A] mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-[#1A1A1A]/70 leading-relaxed font-instrument-serif italic">
            Have questions? Need help planning? We're here for you 24/7.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-instrument-serif mb-8">
              Let's Talk
            </h2>

            <div className="space-y-6">
              {/* WhatsApp */}
              <Link
                href="https://wa.me/254700000000?text=Hi! I'd like to get in touch."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-4 p-6 bg-white rounded-2xl border border-[#E8E3DB] hover:border-[#C5A059] hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center shrink-0">
                  <BsWhatsapp size={24} className="text-[#25D366]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 group-hover:text-[#C5A059] transition-colors">
                    WhatsApp (Preferred)
                  </h3>
                  <p className="text-sm text-[#1A1A1A]/70 mb-2">
                    Fastest way to reach us—instant responses!
                  </p>
                  <p className="text-sm font-semibold text-[#25D366]">
                    +254 700 000 000
                  </p>
                </div>
              </Link>

              {/* Email */}
              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl border border-[#E8E3DB]">
                <div className="w-12 h-12 bg-[#C5A059]/10 rounded-full flex items-center justify-center shrink-0">
                  <Mail size={24} className="text-[#C5A059]" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-sm text-[#1A1A1A]/70 mb-2">
                    For detailed inquiries
                  </p>
                  <a
                    href="mailto:hello@safaristays.co.ke"
                    className="text-sm font-semibold text-[#C5A059] hover:underline"
                  >
                    hello@safaristays.co.ke
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl border border-[#E8E3DB]">
                <div className="w-12 h-12 bg-[#C5A059]/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone size={24} className="text-[#C5A059]" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Phone</h3>
                  <p className="text-sm text-[#1A1A1A]/70 mb-2">
                    Call us during business hours
                  </p>
                  <p className="text-sm font-semibold text-[#1A1A1A]">
                    +254 700 000 000
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl border border-[#E8E3DB]">
                <div className="w-12 h-12 bg-[#C5A059]/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin size={24} className="text-[#C5A059]" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Office</h3>
                  <p className="text-sm text-[#1A1A1A]/70">
                    Westlands, Nairobi
                    <br />
                    Kenya
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl border border-[#E8E3DB]">
                <div className="w-12 h-12 bg-[#C5A059]/10 rounded-full flex items-center justify-center shrink-0">
                  <Clock size={24} className="text-[#C5A059]" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">WhatsApp Support</h3>
                  <p className="text-sm text-[#1A1A1A]/70">
                    Available 24/7
                    <br />
                    <span className="text-xs">
                      (Urgent issues handled immediately)
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-instrument-serif mb-8">
              Send Us a Message
            </h2>

            <div className="bg-white rounded-2xl border border-[#E8E3DB] p-8">
              <p className="text-sm text-[#1A1A1A]/70 mb-6">
                For the fastest response, we recommend using WhatsApp. But if you
                prefer email, fill out the form below and we'll get back to you
                within 24 hours.
              </p>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-[#E8E3DB] rounded-xl focus:outline-none focus:border-[#C5A059] transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-[#E8E3DB] rounded-xl focus:outline-none focus:border-[#C5A059] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-[#E8E3DB] rounded-xl focus:outline-none focus:border-[#C5A059] transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-[#E8E3DB] rounded-xl focus:outline-none focus:border-[#C5A059] transition-colors resize-none"
                    placeholder="Tell us more..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2D4032] text-white py-4 rounded-xl font-bold hover:bg-[#1f2d23] transition-colors"
                >
                  Send Message
                </button>

                <p className="text-xs text-center text-[#1A1A1A]/50">
                  Or chat with us instantly on{" "}
                  <a
                    href="https://wa.me/254759711145"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] font-semibold hover:underline"
                  >
                    WhatsApp
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-[#2D4032] text-white rounded-3xl p-12">
          <h3 className="text-3xl text-white font-instrument-serif mb-4">
            Ready to Book Your Stay?
          </h3>
          <p className="text-lg mb-8 text-white/80 mx-auto">
            Browse our verified properties and start planning your Kenya adventure.
          </p>
          <div className="flex lg:flex-row flex-col gap-4 items-center justify-center">
            <Link
              href="/stays"
              className="inline-block bg-[#C5A059] text-white px-8 py-4 rounded-full font-bold hover:bg-[#b08e4d] transition-colors"
            >
              Explore Stays
            </Link>
            <Link
              href="/activities"
              className="inline-block bg-[#C5A059] text-white px-8 py-4 rounded-full font-bold hover:bg-[#b08e4d] transition-colors"
            >
              Explore Activities
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}