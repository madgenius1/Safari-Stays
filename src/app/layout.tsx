import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import WhatsAppWidget from "../components/layout/WhatsAppWidget";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#FDFBF7] text-[#1A1A1A] font-plus-jakarta-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
