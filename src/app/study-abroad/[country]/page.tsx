import React from "react";
import { notFound } from "next/navigation";
import { GraduationCap, Landmark, Home, ArrowRight, BookOpen, ShieldCheck } from "lucide-react";
import { countriesData } from "@/data/countries";
import { generatePageMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import FaqSection from "@/components/shared/FaqSection";
import CTA from "@/components/shared/CTA";

export async function generateStaticParams() {
  return Object.keys(countriesData).map((key) => ({
    country: key,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }) {
  const { country: countrySlug } = await params;
  const country = countriesData[countrySlug];
  if (!country) return {};
  return generatePageMetadata({
    title: `Study in ${country.name}`,
    description: country.overview,
    path: `/study-abroad/${countrySlug}`,
  });
}

export default async function CountryPage({ params }: { params: Promise<{ country: string }> }) {
  const { country: countrySlug } = await params;
  const country = countriesData[countrySlug];

  if (!country) {
    notFound();
  }

  return (
    <div className="bg-background min-h-screen">
      {/* 1. Header Hero */}
      <section className="bg-white border-b py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          <Breadcrumbs
            items={[
              { name: "Study Abroad", href: "/study-abroad" },
              { name: country.name, href: `/study-abroad/${country.slug}` },
            ]}
          />
          <div className="flex items-center gap-3">
            <span className="text-4xl">{country.flag}</span>
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Study Destination
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-primary tracking-tight">
            Study in {country.name}
          </h1>
          <p className="text-foreground/70 text-sm md:text-base max-w-3xl leading-relaxed">
            {country.heroSubtitle}
          </p>
        </div>
      </section>

      {/* 2. Main content grids */}
      <section className="py-16 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left detailed view */}
        <div className="lg:col-span-8 space-y-12">
          {/* Overview */}
          <div className="bg-white border border-border p-6 md:p-8 rounded-2xl shadow-sm space-y-4">
            <h2 className="font-heading text-xl font-bold text-primary border-b pb-3">Destination Overview</h2>
            <p className="text-foreground/75 text-sm md:text-base leading-relaxed">
              {country.overview}
            </p>
          </div>

          {/* Universities & Programs */}
          <div className="bg-white border border-border p-6 md:p-8 rounded-2xl shadow-sm space-y-6">
            <h2 className="font-heading text-xl font-bold text-primary border-b pb-3 flex items-center gap-2">
              <GraduationCap className="w-5.5 h-5.5 text-secondary" />
              Top Universities & Popular Programs
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-heading font-semibold text-primary text-sm uppercase tracking-wider mb-3">Top Institutions</h4>
                <ul className="space-y-2 text-sm text-foreground/75">
                  {country.topUniversities.map((uni, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>{uni}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-heading font-semibold text-primary text-sm uppercase tracking-wider mb-3">Popular Majors</h4>
                <ul className="space-y-2 text-sm text-foreground/75">
                  {country.popularPrograms.map((prog, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      <span>{prog}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Costs & Financials */}
          <div className="bg-white border border-border p-6 md:p-8 rounded-2xl shadow-sm space-y-6">
            <h2 className="font-heading text-xl font-bold text-primary border-b pb-3">Fee Structures & Living Costs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-neutral-50 border border-border rounded-xl space-y-2">
                <Landmark className="w-5 h-5 text-secondary" />
                <h4 className="font-heading font-semibold text-primary text-sm">Tuition Fees Range</h4>
                <p className="text-xs text-foreground/60 leading-relaxed">{country.tuitionFees}</p>
              </div>
              <div className="p-4 bg-neutral-50 border border-border rounded-xl space-y-2">
                <Home className="w-5 h-5 text-secondary" />
                <h4 className="font-heading font-semibold text-primary text-sm">Estimated Living Costs</h4>
                <p className="text-xs text-foreground/60 leading-relaxed">{country.livingCosts}</p>
              </div>
            </div>
          </div>

          {/* Scholarships */}
          <div className="bg-white border border-border p-6 md:p-8 rounded-2xl shadow-sm space-y-4">
            <h2 className="font-heading text-xl font-bold text-primary border-b pb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-secondary" />
              Scholarships & Financial Aid
            </h2>
            <p className="text-foreground/70 text-xs md:text-sm">
              Applying early can help secure merit-based scholarships. Here are some major funding sources available:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {country.scholarships.map((schol, idx) => (
                <div key={idx} className="p-3 bg-neutral-50 border border-border rounded-lg text-xs md:text-sm text-primary font-medium">
                  {schol}
                </div>
              ))}
            </div>
          </div>

          {/* Visa Guidelines & PR */}
          <div className="bg-white border border-border p-6 md:p-8 rounded-2xl shadow-sm space-y-6">
            <h2 className="font-heading text-xl font-bold text-primary border-b pb-3">Student Visa & PR Pathways</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-heading font-bold text-sm text-primary uppercase tracking-wide">Visa Regulations</h4>
                <p className="text-foreground/75 text-xs md:text-sm leading-relaxed">{country.studentVisaInfo}</p>
              </div>
              <div className="space-y-2 pt-4 border-t">
                <h4 className="font-heading font-bold text-sm text-primary uppercase tracking-wide">Career & PR Opportunities</h4>
                <p className="text-foreground/75 text-xs md:text-sm leading-relaxed">{country.careerOpportunities}</p>
                <p className="text-foreground/75 text-xs md:text-sm leading-relaxed mt-2 font-medium text-secondary bg-secondary/5 border border-secondary/10 rounded-lg p-3">
                  <strong>PR Pathway: </strong> {country.prPathway}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right sticky card */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-primary text-white p-6 rounded-2xl shadow-lg border border-white/5 space-y-6 lg:sticky lg:top-28">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-accent">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-lg font-bold">Relocation Support</h3>
            <p className="text-xs text-white/80 leading-relaxed">
              We help you manage application steps, secure bank loans, arrange currency cards, and source accommodation.
            </p>
            <div className="pt-4 border-t border-white/10">
              <a
                href="/book-consultation"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-accent text-primary font-bold hover:bg-white hover:text-primary transition-all text-sm"
              >
                <span>Apply to {country.name}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQs */}
      <section className="py-16 bg-white border-t border-b">
        <div className="max-w-7xl mx-auto px-6">
          <FaqSection faqs={country.faqs} title={`Study in ${country.name} FAQs`} />
        </div>
      </section>

      {/* 4. CTA */}
      <CTA />
    </div>
  );
}
