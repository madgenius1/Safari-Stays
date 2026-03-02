"use client";

export default function CancellationPolicyPage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-instrument-serif mb-4">Cancellation Policy</h1>
        <p className="text-sm text-[#1A1A1A]/50 mb-12">Fair and transparent cancellations</p>

        <div className="space-y-8 text-[#1A1A1A]/80">
          <section>
            <h2 className="text-2xl font-bold mb-3">Standard Policy</h2>
            <div className="bg-white p-6 rounded-2xl border border-[#E8E3DB] space-y-4">
              <div>
                <p className="font-bold text-green-700 mb-2">✓ 14+ Days Before Check-In</p>
                <p>Full refund minus payment processing fees (usually 2-3%)</p>
              </div>
              <div>
                <p className="font-bold text-yellow-700 mb-2">⚠ 7-14 Days Before Check-In</p>
                <p>50% refund of total booking amount</p>
              </div>
              <div>
                <p className="font-bold text-red-700 mb-2">✗ Less Than 7 Days Before</p>
                <p>No refund (we understand it's strict, but hosts depend on bookings)</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">How to Cancel</h2>
            <p>Message us on WhatsApp at +254 700 000 000 with your booking reference. We'll process it within 24 hours and confirm via WhatsApp.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Refund Timeline</h2>
            <p>Approved refunds are processed within 5-7 business days. M-PESA refunds are usually instant. Bank transfers may take 3-5 days.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Emergency Situations</h2>
            <p>Medical emergencies, family emergencies, or other exceptional circumstances? Contact us. We're human and will work with you to find a fair solution.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Property Cancellations</h2>
            <p>If a host cancels your booking, you'll receive a full refund AND we'll help you find alternative accommodation at no extra charge.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">No-Shows</h2>
            <p>Didn't show up? No refund. Please cancel properly if plans change.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Experience Cancellations</h2>
            <p>Most experiences offer free cancellation up to 48 hours before start time. Check individual experience pages for specific policies.</p>
          </section>

          <div className="mt-12 p-6 bg-[#2D4032] text-white rounded-2xl">
            <p className="mb-4">
              <strong>Need to cancel or have questions?</strong>
            </p>
            <a
              href="https://wa.me/254759711145?text=Hi! I need to cancel my booking."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C5A059] px-6 py-3 rounded-full font-bold hover:bg-[#b08e4d] transition-colors"
            >
              Message Us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}