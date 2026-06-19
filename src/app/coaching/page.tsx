"use client";

import React from "react";
import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import { coachingData } from "@/data/coaching";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTA from "@/components/shared/CTA";

export default function CoachingHub() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="bg-white border-b py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          <Breadcrumbs items={[{ name: "Coaching", href: "/coaching" }]} />
          <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-primary tracking-tight">
            Language & Test Preparation Coaching
          </h1>
          <p className="text-foreground/70 text-sm md:text-base max-w-2xl leading-relaxed">
            Achieve target bands in IELTS, PTE, or TOEFL under certified master instructors with full computer simulation mock setups.
          </p>
        </div>
      </section>

      {/* Grid listing */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.values(coachingData).map((exam) => (
            <div
              key={exam.slug}
              className="group bg-white border border-border p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-neutral-50 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <BookOpen className="w-6 h-6 text-secondary group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary group-hover:text-secondary transition-colors">
                  {exam.name}
                </h3>
                <span className="text-xs font-semibold text-accent uppercase tracking-wider block">
                  {exam.duration}
                </span>
                <p className="text-foreground/75 text-sm leading-relaxed">
                  {exam.tagline}
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-neutral-50 flex items-center justify-between text-sm font-semibold text-foreground/50 group-hover:text-accent">
                <span>View Batches & Course Structure</span>
                <div className="flex items-center gap-1">
                  <span className="text-xs">Explore Course</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              <Link href={`/coaching/${exam.slug}`} className="absolute inset-0 z-10" aria-label={`Read more about ${exam.name}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Trust banner */}
      <section className="py-16 bg-primary text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 space-y-6 relative z-10">
          <BookOpen className="w-12 h-12 text-accent mx-auto" />
          <h2 className="font-heading text-2xl md:text-3xl font-bold">Unsure of your current band levels?</h2>
          <p className="text-white/70 text-sm md:text-base leading-relaxed">
            Attend a free 1-hour trial class and sit for an initial diagnostic test to locate weak modules.
          </p>
          <div className="pt-2">
            <Link
              href="/book-consultation"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent text-primary font-bold hover:bg-white hover:text-primary transition-all"
            >
              Request Free Trial Class
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
}
