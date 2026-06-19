"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Send, Check } from "lucide-react";
import { servicesData } from "@/data/services";
import { countriesData } from "@/data/countries";
import { coachingData } from "@/data/coaching";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-primary text-white border-t border-white/10 pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
        {/* Company Info & Brand */}
        <div className="lg:col-span-2 space-y-6">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/logo.png"
              alt="Expert Education Consultant Logo"
              width={40}
              height={40}
              className="object-contain bg-white/95 rounded-lg p-0.5"
            />
            <span className="font-heading font-bold text-xl tracking-tight text-white">
              Expert<span className="text-accent">Education</span>
            </span>
          </Link>
          <p className="text-white/70 text-sm max-w-sm leading-relaxed">
            Expert Education Consultant (EEC) is a premier overseas education and immigration consultancy. We empower students and professionals to build global careers with certified advice.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-accent transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-accent transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-accent transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Column 2: Visa Services */}
        <div className="space-y-4">
          <h4 className="font-heading text-sm font-semibold text-accent uppercase tracking-wider">Services</h4>
          <ul className="space-y-2.5 text-sm text-white/75">
            {Object.values(servicesData).slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-accent hover:underline transition-colors">
                  {s.title.replace(" Consultancy", "")}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="text-accent font-medium hover:underline">
                View All Services &rarr;
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Countries & Coaching */}
        <div className="space-y-4">
          <h4 className="font-heading text-sm font-semibold text-accent uppercase tracking-wider">Destinations</h4>
          <ul className="space-y-2.5 text-sm text-white/75 mb-6">
            {Object.values(countriesData).map((c) => (
              <li key={c.slug}>
                <Link href={`/study-abroad/${c.slug}`} className="hover:text-accent hover:underline transition-colors">
                  Study in {c.name}
                </Link>
              </li>
            ))}
          </ul>

          <h4 className="font-heading text-sm font-semibold text-accent uppercase tracking-wider">Coaching</h4>
          <ul className="space-y-2.5 text-sm text-white/75">
            {Object.values(coachingData).map((exam) => (
              <li key={exam.slug}>
                <Link href={`/coaching/${exam.slug}`} className="hover:text-accent hover:underline transition-colors">
                  {exam.name} Classes
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Newsletter & Contact info */}
        <div className="space-y-4">
          <h4 className="font-heading text-sm font-semibold text-accent uppercase tracking-wider">Newsletter</h4>
          <p className="text-white/70 text-xs leading-relaxed">
            Subscribe to get immigration policy shifts and global intake alerts.
          </p>

          <form onSubmit={handleSubscribe} className="relative flex items-center mt-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full bg-white/5 border border-white/10 text-white placeholder-white/40 text-xs rounded-lg px-4 py-3 pr-10 focus:outline-none focus:border-accent"
            />
            <button
              type="submit"
              className="absolute right-2 text-white/60 hover:text-accent transition-colors"
              aria-label="Subscribe"
            >
              {subscribed ? <Check className="w-4 h-4 text-emerald-400" /> : <Send className="w-4 h-4" />}
            </button>
          </form>

          {subscribed && (
            <span className="block text-emerald-400 text-xs font-medium animate-fade-in">
              Subscribed successfully! Thank you.
            </span>
          )}

          <div className="pt-4 space-y-2.5 text-xs text-white/70 border-t border-white/5">
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-accent" />
              <span>info@experteduconsultant.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-accent" />
              <span>+91-98765 43210</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-accent mt-0.5" />
              <span className="leading-tight">
                3rd Floor, Business Center,
                <br />
                Connaught Place, New Delhi, 110001
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Legal & Copyright */}
      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
        <p>
          &copy; {new Date().getFullYear()} Expert Education Consultant. All rights reserved.
          <span className="mx-2 text-white/20">|</span>
          Powered by{" "}
          <a
            href="https://digimarkpro.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent font-semibold transition-colors"
          >
            Digimark Pro
          </a>
        </p>
        <div className="flex gap-6">
          <Link href="/privacy-policy" className="hover:text-accent transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-and-conditions" className="hover:text-accent transition-colors">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
