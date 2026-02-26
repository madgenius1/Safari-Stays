import type { Metadata } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import WhatsAppWidget from "../components/layout/WhatsAppWidget";
import { ToastProvider } from "../components/shared/Toast";

// Font configurations
const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

// Metadata
export const metadata: Metadata = {
  title: {
    default: "Safari Stays & Homes | Premium Kenya Travel Marketplace",
    template: "%s | Safari Stays & Homes",
  },
  description:
    "Discover verified stays across Kenya. From pristine beaches to endless savannahs, book your perfect accommodation with tested WiFi speeds and WhatsApp-first service.",
  keywords: [
    "Kenya accommodation",
    "safari lodges Kenya",
    "beach houses Kenya",
    "Nairobi rentals",
    "Diani Beach villas",
    "Maasai Mara lodges",
    "Kenya vacation rentals",
    "digital nomad Kenya",
    "Kenya travel",
    "verified properties Kenya",
  ],
  authors: [{ name: "Safari Stays & Homes" }],
  creator: "Safari Stays & Homes",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://safaristays.come",
    siteName: "Safari Stays & Homes",
    title: "Safari Stays & Homes | Premium Kenya Travel Marketplace",
    description:
      "Discover verified stays across Kenya with tested WiFi speeds and WhatsApp-first booking.",
    images: [
      {
        url: "https://safaristays.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Safari Stays & Homes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Safari Stays & Homes",
    description: "Premium verified stays across Kenya",
    images: ["https://safaristays.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${plusJakartaSans.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#2D4032" />
      </head>

      <body className="font-sans antialiased bg-safari-bone text-safari-charcoal overflow-x-hidden">
        <ToastProvider>
          {/* Skip to main content link for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-safari-green focus:text-white focus:rounded-xl focus:font-bold focus:shadow-2xl"
          >
            Skip to main content
          </a>

          {/* Navigation */}
          <Navbar />

          {/* Main Content */}
          <main id="main-content" className="min-h-screen">
            {children}
          </main>

          {/* Footer */}
          <Footer />

          {/* WhatsApp Widget */}
          <WhatsAppWidget />
        </ToastProvider>
      </body>
    </html>
  );
}