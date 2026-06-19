"use client";

import React from "react";
import Link from "next/link";
import { Compass, Award, ArrowRight } from "lucide-react";
import { servicesData } from "@/data/services";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTA from "@/components/shared/CTA";

export default function ServicesHub() {
  return (
    <div className="bg-background min-h-screen">
      {/* Page Header */}
      <section className="bg-white border-b py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          <Breadcrumbs items={[{ name: "Services", href: "/services" }]} />
          <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-primary tracking-tight">
            Our Visa & Consultancy Services
          </h1>
          <p className="text-foreground/70 text-sm md:text-base max-w-2xl leading-relaxed">
            Professional visa solutions and corporate legal advisories. Explore our directories to match your migration profile requirements.
          </p>
        </div>
      </section>

      {/* Grid List */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.values(servicesData).map((service) => (
            <div
              key={service.slug}
              className="group bg-white border border-border p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-neutral-50 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <Compass className="w-6 h-6 text-secondary group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-foreground/75 text-sm leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-neutral-50 flex items-center justify-between text-sm font-semibold text-foreground/50 group-hover:text-accent">
                <span>View Requirements & Process</span>
                <div className="flex items-center gap-1">
                  <span className="text-xs">Explore</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              <Link href={`/services/${service.slug}`} className="absolute inset-0 z-10" aria-label={`Read more about ${service.title}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Trust banner */}
      <section className="py-16 bg-primary text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 space-y-6 relative z-10">
          <Award className="w-12 h-12 text-accent mx-auto" />
          <h2 className="font-heading text-2xl md:text-3xl font-bold">Unsure which program fits your background?</h2>
          <p className="text-white/70 text-sm md:text-base leading-relaxed">
            Take a 10-minute online profile check or book a 1-on-1 advisor slot to analyze your CRS scores, qualifications, and budget limits.
          </p>
          <div className="pt-2">
            <Link
              href="/book-consultation"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent text-primary font-bold hover:bg-white hover:text-primary transition-all"
            >
              Check My Eligibility
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
}
