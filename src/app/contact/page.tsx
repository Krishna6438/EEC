"use client";

import React from "react";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ContactForm from "@/components/forms/ContactForm";

export default function Contact() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="bg-white border-b py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          <Breadcrumbs items={[{ name: "Contact Us", href: "/contact" }]} />
          <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-primary tracking-tight">
            Contact Our Advisors
          </h1>
          <p className="text-foreground/70 text-sm md:text-base max-w-2xl leading-relaxed">
            Have questions regarding applications, visas, or test prep classes? Reach out or visit our Connaught Place office.
          </p>
        </div>
      </section>

      {/* Main Split Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Office Info */}
        <div className="lg:col-span-5 space-y-8 text-left">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-accent font-heading">Connect Directly</span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">Office Directory</h2>
            <p className="text-foreground/75 text-sm leading-relaxed">
              We respond to digital inquiries and callback submissions within 24 business hours. Visit us during active hours.
            </p>
          </div>

          <div className="space-y-6 text-sm text-foreground/85">
            {/* Address */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-white border border-border flex items-center justify-center text-secondary shadow-sm flex-shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-primary">Head Office Address</h4>
                <p className="text-foreground/60 text-xs mt-0.5">
                  3rd Floor, Business Center, Connaught Place, New Delhi, Delhi 110001, India
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-white border border-border flex items-center justify-center text-secondary shadow-sm flex-shrink-0 mt-0.5">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-primary">Support Lines</h4>
                <p className="text-foreground/60 text-xs mt-0.5">
                  Admissions: +91-98765 43210 <br />
                  Visa Support: +91-98765 01234
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-white border border-border flex items-center justify-center text-secondary shadow-sm flex-shrink-0 mt-0.5">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-primary">Email Addresses</h4>
                <p className="text-foreground/60 text-xs mt-0.5">
                  General: info@experteduconsultant.com <br />
                  MD Desk: md@experteduconsultant.com
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-white border border-border flex items-center justify-center text-secondary shadow-sm flex-shrink-0 mt-0.5">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-primary">Business Hours</h4>
                <p className="text-foreground/60 text-xs mt-0.5">
                  Monday &ndash; Saturday: 09:30 AM &ndash; 06:30 PM <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {/* WhatsApp Quick CTA */}
          <div className="bg-emerald-50 border border-emerald-100 p-5 rounded-2xl space-y-3">
            <h4 className="font-heading font-bold text-emerald-800 text-sm flex items-center gap-1.5">
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              Need Immediate Answers?
            </h4>
            <p className="text-emerald-700 text-xs leading-relaxed">
              Skip email forms and chat directly with an online intake advisor on WhatsApp. Available during active hours.
            </p>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors"
            >
              Start WhatsApp Chat
            </a>
          </div>

          {/* Map placeholder */}
          <div className="border border-border rounded-2xl h-48 bg-neutral-100 relative overflow-hidden flex flex-col justify-center items-center shadow-inner">
            <MapPin className="w-8 h-8 text-secondary/35 animate-bounce" />
            <span className="text-xs text-foreground/50 font-semibold mt-1">Connaught Place Map Center</span>
            <span className="text-[10px] text-foreground/40 mt-0.5">Interactive Google Maps integration details</span>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
