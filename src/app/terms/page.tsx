"use client";

export default function TermsPage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-instrument-serif mb-4">Terms of Service</h1>
        <p className="text-sm text-[#1A1A1A]/50 mb-12">Last Updated: February 23, 2026</p>

        <div className="space-y-8 text-[#1A1A1A]/80">
          <section>
            <h2 className="text-2xl font-bold mb-3">1. Acceptance</h2>
            <p>By using Safari Stays, you accept these terms. Don't agree? Please don't book.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">2. Bookings</h2>
            <p>50% deposit required. Balance due 7 days before check-in. Provide accurate info, respect properties, follow house rules.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">3. Payment</h2>
            <p>Accepted: M-PESA, bank transfer, cards, PayPal. Prices in Ksh. No hidden fees.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">4. Cancellations</h2>
            <p>Free cancellation 14+ days before. 50% refund 7-14 days. No refund &lt;7 days. See <a href="/cancellation-policy" className="text-[#C5A059] hover:underline">full policy</a>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">5. User Conduct</h2>
            <p>Don't exceed occupancy. No unauthorized parties. Report damage. Leave property clean.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">6. Liability</h2>
            <p>We facilitate bookings. Not liable for property issues or personal injury. Get travel insurance.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">7. Contact</h2>
            <p>Questions? WhatsApp +254 700 000 000 or email hello@safaristays.co.ke</p>
          </section>
        </div>
      </div>
    </div>
  );
}