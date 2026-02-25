import { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: "website" | "article";
  canonicalUrl?: string;
  noindex?: boolean;
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  ogImage = "https://safaristays.com/og-image.jpg",
  ogType = "website",
  canonicalUrl,
  noindex = false,
}: SEOProps): Metadata {
  const siteName = "Safari Stays & Homes";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: "Safari Stays & Homes" }],
    robots: noindex ? "noindex,nofollow" : "index,follow",
    openGraph: {
      title: fullTitle,
      description,
      type: ogType,
      siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    ...(canonicalUrl && {
      alternates: {
        canonical: canonicalUrl,
      },
    }),
  };
}

// Generate JSON-LD structured data
export function generateStructuredData(type: "Property" | "Article" | "Organization", data: any) {
  const baseContext = "https://schema.org";

  switch (type) {
    case "Property":
      return {
        "@context": baseContext,
        "@type": "LodgingBusiness",
        name: data.name,
        description: data.description,
        image: data.images?.[0]?.url,
        address: {
          "@type": "PostalAddress",
          addressLocality: data.location?.area,
          addressCountry: "KE",
        },
        geo: data.location?.coordinates && {
          "@type": "GeoCoordinates",
          latitude: data.location.coordinates.lat,
          longitude: data.location.coordinates.lng,
        },
        priceRange: data.pricing?.basePrice
          ? `KES ${data.pricing.basePrice}`
          : undefined,
        aggregateRating: data.averageRating && {
          "@type": "AggregateRating",
          ratingValue: data.averageRating,
          reviewCount: data.reviewCount,
        },
      };

    case "Article":
      return {
        "@context": baseContext,
        "@type": "Article",
        headline: data.title,
        description: data.excerpt,
        image: data.coverImage?.url,
        datePublished: data.publishedAt,
        author: {
          "@type": "Person",
          name: data.author?.name,
        },
        publisher: {
          "@type": "Organization",
          name: "Safari Stays & Homes",
        },
      };

    case "Organization":
      return {
        "@context": baseContext,
        "@type": "Organization",
        name: "Safari Stays & Homes",
        description:
          "Premium verified stays across Kenya. WhatsApp-first booking, tested WiFi speeds, and local expertise.",
        url: "https://safaristays.com",
        logo: "https://safaristays.com/logo.png",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+254-700-000-000",
          contactType: "Customer Service",
          availableLanguage: ["English", "Swahili"],
        },
        sameAs: [
          "https://instagram.com/safaristays",
          "https://facebook.com/safaristays",
        ],
      };

    default:
      return null;
  }
}

// Helper to inject structured data into page
export function StructuredData({ data }: { data: any }) {
  if (!data) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}