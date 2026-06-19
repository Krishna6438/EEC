import { Metadata } from "next";

export const SITE_URL = "https://experteduconsultant.com";

interface MetadataProps {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}

export function generatePageMetadata({
  title,
  description,
  path,
  type = "website",
}: MetadataProps): Metadata {
  const canonicalUrl = `${SITE_URL}${path}`;

  return {
    title: `${title} | Expert Education Consultant`,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${title} | Expert Education Consultant`,
      description,
      url: canonicalUrl,
      type,
      siteName: "Expert Education Consultant",
      images: [
        {
          url: `${SITE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Expert Education Consultant`,
      description,
      images: [`${SITE_URL}/og-image.jpg`],
    },
  };
}

export function getBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item.startsWith("http") ? item.item : `${SITE_URL}${item.item}`,
    })),
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${SITE_URL}/#organization`,
    name: "Expert Education Consultant",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    sameAs: [
      "https://facebook.com/experteduconsultant",
      "https://instagram.com/experteduconsultant",
      "https://linkedin.com/company/experteduconsultant",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9876543210",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
  };
}
