import React from "react";
import { notFound } from "next/navigation";
import { Calendar, Clock, BookOpen, User, CheckCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { coachingData } from "@/data/coaching";
import { generatePageMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import FaqSection from "@/components/shared/FaqSection";
import CTA from "@/components/shared/CTA";

export async function generateStaticParams() {
  return Object.keys(coachingData).map((key) => ({
    exam: key,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ exam: string }> }) {
  const { exam: examSlug } = await params;
  const exam = coachingData[examSlug];
  if (!exam) return {};
  return generatePageMetadata({
    title: exam.name,
    description: exam.overview,
    path: `/coaching/${examSlug}`,
  });
}

export default async function CoachingPage({ params }: { params: Promise<{ exam: string }> }) {
  const { exam: examSlug } = await params;
  const exam = coachingData[examSlug];

  if (!exam) {
    notFound();
  }

  return (
    <div className="bg-background min-h-screen">
      {/* 1. Header Hero */}
      <section className="bg-white border-b py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          <Breadcrumbs
            items={[
              { name: "Coaching", href: "/coaching" },
              { name: exam.name, href: `/coaching/${exam.slug}` },
            ]}
          />
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-secondary">
            Exam Prep Classes
          </span>
          <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-primary tracking-tight">
            {exam.name}
          </h1>
          <p className="text-foreground/70 text-sm md:text-base max-w-3xl leading-relaxed">
            {exam.tagline}
          </p>
        </div>
      </section>

      {/* 2. Page grids */}
      <section className="py-16 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left side course information */}
        <div className="lg:col-span-8 space-y-12">
          {/* Overview */}
          <div className="bg-white border border-border p-6 md:p-8 rounded-2xl shadow-sm space-y-4">
            <h2 className="font-heading text-xl font-bold text-primary border-b pb-3">Course Overview</h2>
            <p className="text-foreground/75 text-sm md:text-base leading-relaxed">
              {exam.overview}
            </p>
          </div>

          {/* Module-wise Structure */}
          <div className="bg-white border border-border p-6 md:p-8 rounded-2xl shadow-sm space-y-4">
            <h2 className="font-heading text-xl font-bold text-primary border-b pb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-secondary" />
              Course Structure
            </h2>
            <div className="space-y-4 pt-2">
              {exam.structure.map((item, idx) => (
                <div key={idx} className="p-4 bg-neutral-50 border border-border rounded-xl space-y-1">
                  <h4 className="font-heading font-bold text-sm text-primary">{item.section}</h4>
                  <p className="text-xs text-foreground/60 leading-relaxed">{item.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Batch Timings */}
          <div className="bg-white border border-border p-6 md:p-8 rounded-2xl shadow-sm space-y-4">
            <h2 className="font-heading text-xl font-bold text-primary border-b pb-3 flex items-center gap-2">
              <Clock className="w-5 h-5 text-secondary" />
              Batch Schedules
            </h2>
            <p className="text-foreground/60 text-xs">
              Flexible batch options designed for working professionals and university students alike:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {exam.batchTimings.map((time, idx) => (
                <div key={idx} className="p-3 bg-neutral-50 border border-border rounded-lg text-xs md:text-sm text-primary font-medium flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>{time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Study Materials */}
          <div className="bg-white border border-border p-6 md:p-8 rounded-2xl shadow-sm space-y-4">
            <h2 className="font-heading text-xl font-bold text-primary border-b pb-3">Included Study Materials</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {exam.materials.map((mat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-foreground/75 leading-relaxed">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>{mat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Faculty Profiles */}
          <div className="bg-white border border-border p-6 md:p-8 rounded-2xl shadow-sm space-y-4">
            <h2 className="font-heading text-xl font-bold text-primary border-b pb-3">Certified Faculty Instructors</h2>
            <div className="space-y-6 pt-2">
              {exam.faculty.map((member, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-neutral-50 border border-border rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-secondary/15 text-secondary flex items-center justify-center font-bold text-sm flex-shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-heading font-bold text-sm text-primary">{member.name}</h4>
                    <span className="text-[10px] uppercase font-bold text-accent tracking-wider block">
                      {member.designation}
                    </span>
                    <p className="text-foreground/70 text-xs leading-relaxed pt-1">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right sticky action card */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-primary text-white p-6 rounded-2xl shadow-lg border border-white/5 space-y-6 lg:sticky lg:top-28">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-accent">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-lg font-bold">Course Details</h3>
            <div className="space-y-2.5 text-xs text-white/80">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Duration</span>
                <span className="font-semibold text-white">{exam.duration.split(" programs")[0]}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Mock Tests</span>
                <span className="font-semibold text-white">Full Length Saturdays</span>
              </div>
              <div className="flex justify-between">
                <span>Course Fee</span>
                <span className="font-semibold text-accent">{exam.price.split(" | ")[0]}</span>
              </div>
            </div>

            <p className="text-[11px] text-white/50 leading-relaxed pt-2">
              *Fee includes access to online test portal and diagnostic books. Installments options are available for 8-weeks modules.
            </p>

            <div className="pt-4 border-t border-white/10">
              <a
                href="/book-consultation"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-accent text-primary font-bold hover:bg-white hover:text-primary transition-all text-sm"
              >
                <span>Enroll in Class</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQs */}
      <section className="py-16 bg-white border-t border-b">
        <div className="max-w-7xl mx-auto px-6">
          <FaqSection faqs={exam.faqs} title={`${exam.name} FAQs`} />
        </div>
      </section>

      {/* 4. CTA */}
      <CTA />
    </div>
  );
}
