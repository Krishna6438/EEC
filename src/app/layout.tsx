import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Chatbot from "@/components/shared/Chatbot";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Expert Education Consultant | Premium Immigration & Study Visa Agency",
  description:
    "Expert Education Consultant (EEC) is a premier international consultancy specializing in study visas, immigration, PR pathways, and coaching (IELTS, PTE, TOEFL) for Canada, Australia, UK, USA, and New Zealand.",
  metadataBase: new URL("https://experteduconsultant.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Expert Education Consultant | Premium Immigration & Study Visa Agency",
    description:
      "Your trusted partner for overseas education and immigration services. High visa success rates, transparent processing, and expert consultancy.",
    url: "https://experteduconsultant.com",
    siteName: "Expert Education Consultant",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Education Consultant | Premium Immigration & Study Visa",
    description:
      "Expert guidance for global study visas and professional immigration services.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", inter.variable, manrope.variable)}>
      <body className="font-sans antialiased bg-background text-foreground min-h-screen flex flex-col selection:bg-accent selection:text-primary">
        <Navbar />
        <main className="flex-grow pt-[80px] lg:pt-[88px]">
          {children}
        </main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
