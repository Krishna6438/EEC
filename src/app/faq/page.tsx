"use client";

import React, { useState } from "react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import FaqSection from "@/components/shared/FaqSection";
import CTA from "@/components/shared/CTA";

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("General");

  const categories = ["General", "Study Visa", "Coaching", "Financials"];

  const faqsData = {
    General: [
      {
        question: "Where are your offices located?",
        answer: "Our head office is in Connaught Place, New Delhi, India. We also provide online visual consults globally, serving clients across South Asia, the Middle East, and beyond.",
      },
      {
        question: "Do you charge fees for the initial evaluation?",
        answer: "No, our initial profile audit and credentials checks are completely free of cost. We believe in providing upfront transparency before you commit to any application costs.",
      },
      {
        question: "How do I book a consultation session?",
        answer: "You can book directly via our online multi-step scheduler on the /book-consultation route, or drop a text on our official WhatsApp number.",
      },
    ],
    "Study Visa": [
      {
        question: "Can I apply to multiple countries simultaneously?",
        answer: "Yes, many students apply to both Canada and Australia or UK and USA concurrently to maximize options. Our team can manage multi-country profiles efficiently.",
      },
      {
        question: "What is a Designated Learning Institution (DLI)?",
        answer: "A DLI is a school approved by a provincial or territorial government to host international students in Canada. Securing a study permit requires an acceptance letter from a valid DLI.",
      },
      {
        question: "What happens if my visa gets refused?",
        answer: "We offer professional refusal audits. We retrieve your official case file notes (such as GCMS notes in Canada), revise credentials, adjust statement of purposes, and re-file to overcome denials.",
      },
    ],
    Coaching: [
      {
        question: "What is the typical class size for IELTS or PTE?",
        answer: "We maintain small batch sizes (maximum 12-15 students per class) to guarantee personal attention, speaking review dialogues, and detailed writing critiques.",
      },
      {
        question: "Are mock tests included in the coaching price?",
        answer: "Yes, full-length, exam-accurate mock tests conducted every Saturday are included in the course tuition fees. We also provide diagnostic reports pointing out grammar/spelling errors.",
      },
      {
        question: "Do you offer online classes?",
        answer: "Yes, we run fully live virtual classes via Zoom with interactive whiteboards and record all sessions for self-paced revisions.",
      },
    ],
    Financials: [
      {
        question: "Can you help me secure an education loan?",
        answer: "We have direct tie-ups with leading nationalized and private banks. We help compile required visa-approved loan sanction letters without extra charges.",
      },
      {
        question: "What are the common refund policies?",
        answer: "We hold clear refund schedules. If your university application is rejected, we refund the processing fee or map you to another matching course without additional charges.",
      },
    ],
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="bg-white border-b py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          <Breadcrumbs items={[{ name: "FAQ", href: "/faq" }]} />
          <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-primary tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-foreground/70 text-sm md:text-base max-w-2xl leading-relaxed">
            Find immediate answers regarding admissions, visa regulations, schedules, and test coaching fees.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 max-w-4xl mx-auto px-6 space-y-8">
        {/* Category filters */}
        <div className="flex flex-wrap gap-2 justify-center border-b pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-xs font-semibold rounded-lg border transition-all ${
                activeCategory === cat
                  ? "bg-primary text-white border-primary shadow-sm"
                  : "bg-white text-foreground/80 border-border hover:bg-neutral-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Accordion list */}
        <div className="bg-white border border-border p-6 md:p-8 rounded-2xl shadow-sm">
          <FaqSection
            faqs={faqsData[activeCategory as keyof typeof faqsData]}
            title={`${activeCategory} Queries`}
          />
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
}
