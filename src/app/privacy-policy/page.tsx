import React from "react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export default function PrivacyPolicy() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="bg-white border-b py-12">
        <div className="max-w-4xl mx-auto px-6 space-y-3">
          <Breadcrumbs items={[{ name: "Privacy Policy", href: "/privacy-policy" }]} />
          <h1 className="font-heading text-3xl font-bold text-primary">Privacy Policy</h1>
          <p className="text-foreground/50 text-xs">Last updated: June 19, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 max-w-4xl mx-auto px-6">
        <div className="bg-white border border-border p-8 rounded-2xl shadow-sm text-left space-y-6 text-sm text-foreground/75 leading-relaxed">
          <p>
            At Expert Education Consultant, we value and respect your privacy. This privacy document outlines how we collect, handle, and store user credentials, SOP drafts, academic transcripts, and personal contact info.
          </p>

          <h3 className="font-heading font-bold text-primary text-base pt-2">1. Data We Collect</h3>
          <p>
            We collect personal details (such as your name, phone number, email address, target academic destinations, qualifications, and transcripts) that you voluntarily submit through our booking wizards, contact forms, or direct emails.
          </p>

          <h3 className="font-heading font-bold text-primary text-base pt-2">2. How We Use Data</h3>
          <p>
            Your information is used strictly to evaluate program eligibility, file visa applications, update you on university intakes, coordinate mock coaching schedules, and handle customer service questions. We do not sell or lease profile information to third-party marketing companies.
          </p>

          <h3 className="font-heading font-bold text-primary text-base pt-2">3. Storage & Protection</h3>
          <p>
            All physical transcript documents, reference letters, and banking statements submitted for visa preparation are stored in secure cloud systems. Access is restricted to certified consultants managing your specific application file.
          </p>
        </div>
      </section>
    </div>
  );
}
