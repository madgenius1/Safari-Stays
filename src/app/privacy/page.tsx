"use client";

export default function PrivacyPage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-instrument-serif mb-4">Privacy Policy</h1>
        <p className="text-sm text-[#1A1A1A]/50 mb-12">Last Updated: February 23, 2026</p>

        <div className="space-y-8 text-[#1A1A1A]/80">
          <section>
            <h2 className="text-2xl font-bold mb-3">What We Collect</h2>
            <p>Name, email, phone, booking details, payment info (securely processed), preferences.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">How We Use It</h2>
            <p>To process bookings, communicate with you, improve services, send booking confirmations and updates.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Who We Share With</h2>
            <p>Property owners (necessary details only), payment processors (encrypted), no one else without your consent.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Your Rights</h2>
            <p>Access your data, request corrections, delete your account, opt out of marketing.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Security</h2>
            <p>We use encryption, secure servers, and follow industry standards. No system is 100% secure, but we do our best.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Cookies</h2>
            <p>We use cookies to improve experience. You can disable them, but some features may not work.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Contact</h2>
            <p>Privacy questions? WhatsApp +254 700 000 000 or email hello@safaristays.co.ke</p>
          </section>
        </div>
      </div>
    </div>
  );
}