"use client";

import React from "react";
import { PlayCircle, Star } from "lucide-react";
import { successStoriesData } from "@/data/stories";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTA from "@/components/shared/CTA";

export default function SuccessStories() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="bg-white border-b py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          <Breadcrumbs items={[{ name: "Success Stories", href: "/success-stories" }]} />
          <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-primary tracking-tight">
            Our Clients&apos; Success Stories
          </h1>
          <p className="text-foreground/70 text-sm md:text-base max-w-2xl leading-relaxed">
            Read real-world testimonials of students and professionals who successfully relocated or enrolled abroad through our consultancy.
          </p>
        </div>
      </section>

      {/* Grid List */}
      <section className="py-20 max-w-7xl mx-auto px-6 space-y-16">
        {/* Success Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStoriesData.map((story) => (
            <div
              key={story.id}
              className="bg-white border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({ length: story.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed italic">
                  &ldquo;{story.testimonial}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-6 border-t border-neutral-50">
                <div className="w-11 h-11 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold text-sm">
                  {story.avatar}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-primary">{story.name}</h4>
                  <span className="text-[10px] uppercase font-bold text-accent tracking-wider block">
                    {story.visaType} &bull; {story.country}
                  </span>
                  <span className="text-[11px] text-foreground/45 block mt-0.5">
                    {story.university}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Testimonials Mock Section */}
        <div className="pt-12 border-t space-y-8 text-center">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-accent font-heading">Video Reviews</span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">Video Testimonials</h2>
            <p className="text-foreground/70 text-xs md:text-sm">
              Watch our alumni share their application timelines and exam coaching experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="group relative rounded-2xl bg-neutral-50 border border-border aspect-video flex flex-col items-center justify-center cursor-pointer overflow-hidden shadow-inner hover:bg-neutral-100 transition-all duration-300"
              >
                {/* Play Button overlay */}
                <PlayCircle className="w-12 h-12 text-secondary group-hover:text-accent group-hover:scale-110 transition-all z-10" />
                <span className="text-xs text-foreground/50 mt-2 font-semibold z-10">
                  {item === 1 && "Canada Study Visa Experience"}
                  {item === 2 && "Australia Subclass 500 Journey"}
                  {item === 3 && "IELTS Band 8.5 Testimonial"}
                </span>

                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
}
