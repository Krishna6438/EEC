"use client";

import React from "react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import BookingForm from "@/components/forms/BookingForm";

export default function BookConsultation() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="bg-white border-b py-12">
        <div className="max-w-7xl mx-auto px-6 space-y-3 text-center md:text-left">
          <Breadcrumbs items={[{ name: "Book Consultation", href: "/book-consultation" }]} />
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-secondary">
            1-on-1 Advisory
          </span>
          <h1 className="font-heading text-3xl md:text-4xl font-extrabold text-primary tracking-tight">
            Schedule Your Consultation
          </h1>
          <p className="text-foreground/70 text-sm md:text-base max-w-2xl leading-relaxed">
            Fill in the multi-step profile builder below to reserve a private video session or office call slot with our consultants.
          </p>
        </div>
      </section>

      {/* Form Area */}
      <section className="py-16 px-6">
        <BookingForm />
      </section>
    </div>
  );
}
