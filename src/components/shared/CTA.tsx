import React from "react";
import Link from "next/link";
import { MessageSquare, Phone, ArrowRight } from "lucide-react";

interface CTAProps {
  title?: string;
  subtitle?: string;
}

export default function CTA({
  title = "Ready to Begin Your International Journey?",
  subtitle = "Book your private 1-on-1 consultation session with our certified advisors today. Let's build your path to global study or career success.",
}: CTAProps) {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative rounded-3xl bg-primary text-white p-8 md:p-16 shadow-2xl overflow-hidden border border-white/5">
          {/* Subtle background ambient details */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-block text-xs font-semibold tracking-widest text-accent uppercase bg-white/5 border border-white/10 rounded-full px-4 py-1.5">
              Secure Consultation
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              {title}
            </h2>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/book-consultation"
                className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-xl bg-accent text-primary font-semibold hover:bg-white hover:text-primary transition-all duration-300 shadow-lg shadow-accent/15"
              >
                <span>Book Free Session</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 text-white font-semibold border border-white/10 hover:bg-white/20 transition-all duration-300"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-4 text-white/80 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call +91-98765 43210</span>
              </a>
            </div>

            <p className="text-white/40 text-xs pt-4">
              *No obligations. Strictly confidential profiles assessment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
