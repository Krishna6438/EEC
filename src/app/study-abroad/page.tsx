"use client";

import React from "react";
import Link from "next/link";
import { Globe, ArrowRight } from "lucide-react";
import { countriesData } from "@/data/countries";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTA from "@/components/shared/CTA";

export default function StudyAbroadHub() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="bg-white border-b py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          <Breadcrumbs items={[{ name: "Study Abroad", href: "/study-abroad" }]} />
          <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-primary tracking-tight">
            Study Abroad Destinations
          </h1>
          <p className="text-foreground/70 text-sm md:text-base max-w-2xl leading-relaxed">
            Acquire world-class degrees at top universities. Choose your destination and map out your academic visa journey.
          </p>
        </div>
      </section>

      {/* Grid of Countries */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.values(countriesData).map((country) => (
            <div
              key={country.slug}
              className="group bg-white border border-border p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="text-5xl">{country.flag}</div>
                <h3 className="font-heading text-2xl font-bold text-primary group-hover:text-secondary transition-colors">
                  Study in {country.name}
                </h3>
                <p className="text-foreground/75 text-sm leading-relaxed line-clamp-4">
                  {country.heroSubtitle}
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-neutral-50 flex items-center justify-between text-sm font-semibold text-foreground/50 group-hover:text-accent">
                <span>View Universities & Costs</span>
                <div className="flex items-center gap-1">
                  <span className="text-xs">Explore</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              <Link href={`/study-abroad/${country.slug}`} className="absolute inset-0 z-10" aria-label={`Read more about studying in ${country.name}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Help banner */}
      <section className="py-16 bg-primary text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 space-y-6 relative z-10">
          <Globe className="w-12 h-12 text-accent mx-auto" />
          <h2 className="font-heading text-2xl md:text-3xl font-bold">Unsure where you qualify?</h2>
          <p className="text-white/70 text-sm md:text-base leading-relaxed">
            Every country has distinct academic benchmarks, living cost ratios, and PR opportunities. Let our expert career counselors evaluate your criteria.
          </p>
          <div className="pt-2">
            <Link
              href="/book-consultation"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent text-primary font-bold hover:bg-white hover:text-primary transition-all"
            >
              Book Profiling Session
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
}
