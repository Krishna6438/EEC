import React from "react";
import { notFound } from "next/navigation";
import { CheckCircle, FileText, ArrowRight, ShieldCheck } from "lucide-react";
import { servicesData } from "@/data/services";
import { generatePageMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import FaqSection from "@/components/shared/FaqSection";
import CTA from "@/components/shared/CTA";

export async function generateStaticParams() {
  return Object.keys(servicesData).map((key) => ({
    service: key,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }) {
  const { service: serviceSlug } = await params;
  const service = servicesData[serviceSlug];
  if (!service) return {};
  return generatePageMetadata({
    title: service.title,
    description: service.shortDescription,
    path: `/services/${serviceSlug}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service: serviceSlug } = await params;
  const service = servicesData[serviceSlug];

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-background min-h-screen">
      {/* 1. Header Hero */}
      <section className="bg-white border-b py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          <Breadcrumbs
            items={[
              { name: "Services", href: "/services" },
              { name: myTruncate(service.title), href: `/services/${service.slug}` },
            ]}
          />
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-secondary">
            Visa Solutions
          </span>
          <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-primary tracking-tight">
            {service.title}
          </h1>
          <p className="text-foreground/70 text-sm md:text-base max-w-3xl leading-relaxed">
            {service.heroSubtitle}
          </p>
        </div>
      </section>

      {/* 2. Overview Content */}
      <section className="py-16 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left main content */}
        <div className="lg:col-span-8 space-y-12">
          {/* Overview text */}
          <div className="bg-white border border-border p-6 md:p-8 rounded-2xl shadow-sm space-y-4">
            <h2 className="font-heading text-xl font-bold text-primary border-b pb-3">Service Overview</h2>
            <p className="text-foreground/75 text-sm md:text-base leading-relaxed">
              {service.overview}
            </p>
          </div>

          {/* Eligibility Checklist */}
          <div className="bg-white border border-border p-6 md:p-8 rounded-2xl shadow-sm space-y-4">
            <h2 className="font-heading text-xl font-bold text-primary border-b pb-3">Eligibility Requirements</h2>
            <ul className="space-y-3">
              {service.eligibility.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-foreground/75 leading-relaxed">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Required Documents */}
          <div className="bg-white border border-border p-6 md:p-8 rounded-2xl shadow-sm space-y-4">
            <h2 className="font-heading text-xl font-bold text-primary border-b pb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-secondary" />
              Required Documentation Checklist
            </h2>
            <p className="text-foreground/60 text-xs">
              Below is the baseline list of documents required. Our consultants compile a custom checklists checklist based on your individual profile.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {service.documents.map((doc, idx) => (
                <div key={idx} className="flex items-center gap-2 p-3 bg-neutral-50 border border-border rounded-lg text-xs md:text-sm text-primary font-medium">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step by step Process */}
          <div className="bg-white border border-border p-6 md:p-8 rounded-2xl shadow-sm space-y-6">
            <h2 className="font-heading text-xl font-bold text-primary border-b pb-3">Our Filing Process Flow</h2>
            <div className="relative border-l border-neutral-100 pl-6 space-y-8">
              {service.process.map((step) => (
                <div key={step.step} className="relative">
                  <div className="absolute -left-[37px] top-0 w-6 h-6 rounded-full bg-primary text-white border-2 border-white flex items-center justify-center text-[10px] font-bold shadow-md">
                    {step.step}
                  </div>
                  <h4 className="font-heading font-bold text-sm md:text-base text-primary">{step.title}</h4>
                  <p className="text-foreground/70 text-xs md:text-sm mt-1 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right sticky sidebar */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-primary text-white p-6 rounded-2xl shadow-lg border border-white/5 space-y-6 lg:sticky lg:top-28">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-accent">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-lg font-bold">Why EEC Visa Support?</h3>
            <ul className="space-y-4 text-xs md:text-sm text-white/80">
              {service.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-2 leading-relaxed">
                  <span className="text-accent mt-0.5">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <a
                href="/book-consultation"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-accent text-primary font-bold hover:bg-white hover:text-primary transition-all text-sm"
              >
                <span>Initiate Visa Process</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ Section */}
      <section className="py-16 bg-white border-t border-b">
        <div className="max-w-7xl mx-auto px-6">
          <FaqSection faqs={service.faqs} title={`${service.title} FAQs`} />
        </div>
      </section>

      {/* 4. Footer CTA */}
      <CTA />
    </div>
  );
}

function myTruncate(str: string) {
  return str.replace(" Consultancy", "");
}
