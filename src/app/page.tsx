"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  ArrowRight,
  ShieldCheck,
  Award,
  Users,
  Building,
  GraduationCap,
  ChevronDown,
  CheckCircle,
  FileText,
  Clock,
  ExternalLink,
  Plane,
  Globe,
  Map,
  Sparkles,
  ListTodo
} from "lucide-react";
import { servicesData } from "@/data/services";
import { countriesData } from "@/data/countries";
import { blogData } from "@/data/blog";
import { successStoriesData } from "@/data/stories";
import CTA from "@/components/shared/CTA";
import { cn } from "@/lib/utils";

type CountryKey = "Canada" | "Australia" | "UK" | "USA" | "New Zealand";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<CountryKey>("Canada");
  const [activeMockupTab, setActiveMockupTab] = useState<"tracker" | "map" | "vetting">("tracker");
  
  // Spotlight coordinates state
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouseCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Departure board ticker state
  const [currentApprovalIndex, setCurrentApprovalIndex] = useState(0);
  const liveApprovals = [
    { flight: "EEC-098", dest: "VANCOUVER (YVR)", visa: "STUDY PERMIT", status: "APPROVED 🟢", student: "Kabir M.", time: "2m ago" },
    { flight: "EEC-214", dest: "MELBOURNE (MEL)", visa: "SUBCLASS 500", status: "GRANTED 🟢", student: "Priya N.", time: "12m ago" },
    { flight: "EEC-412", dest: "LONDON (LHR)", visa: "STUDY ROUTE", status: "ISSUED 🟢", student: "Aarav S.", time: "45m ago" },
    { flight: "EEC-602", dest: "SAN FRANCISCO (SFO)", visa: "F-1 STUDENT", status: "GRANTED 🟢", student: "Meera D.", time: "1h ago" },
    { flight: "EEC-781", dest: "AUCKLAND (AKL)", visa: "PATHWAY STUDENT", status: "APPROVED 🟢", student: "Liam W.", time: "3h ago" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentApprovalIndex((prev) => (prev + 1) % liveApprovals.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [liveApprovals.length]);

  const countryDashboardData: Record<CountryKey, {
    visaTitle: string;
    visaSub: string;
    studentName: string;
    studentDetails: string;
    universities: { name: string; status: string; statusColor: string }[];
    metricLabel: string;
    metricValue: string;
    metricPercent: string;
    metricTag: string;
  }> = {
    Canada: {
      visaTitle: "Visa Approved!",
      visaSub: "Canada Study Permit (SDS)",
      studentName: "Kabir M.",
      studentDetails: "Waterloo • M.Eng",
      universities: [
        { name: "Univ. of Waterloo", status: "Active Intake", statusColor: "text-emerald-600 bg-emerald-50" },
        { name: "McGill University", status: "LOA Vetted", statusColor: "text-emerald-600 bg-emerald-50" },
        { name: "University of Toronto", status: "File Submitted", statusColor: "text-secondary bg-secondary/5" }
      ],
      metricLabel: "My CRS Score Target",
      metricValue: "485",
      metricPercent: "98.2%",
      metricTag: "Highly Competitive Profile"
    },
    Australia: {
      visaTitle: "Visa Granted!",
      visaSub: "Student Subclass 500",
      studentName: "Priya N.",
      studentDetails: "Melbourne • MPH",
      universities: [
        { name: "Univ. of Melbourne", status: "CoE Issued", statusColor: "text-emerald-600 bg-emerald-50" },
        { name: "UNSW Sydney", status: "GS Cleared", statusColor: "text-emerald-600 bg-emerald-50" },
        { name: "Monash University", status: "Offer Extended", statusColor: "text-secondary bg-secondary/5" }
      ],
      metricLabel: "Genuine Student Check",
      metricValue: "PASS",
      metricPercent: "97.5%",
      metricTag: "GS Screening Approved"
    },
    UK: {
      visaTitle: "Visa Cleared!",
      visaSub: "UK Student Route",
      studentName: "Aarav S.",
      studentDetails: "Oxford • MBA",
      universities: [
        { name: "University of Oxford", status: "CAS Issued", statusColor: "text-emerald-600 bg-emerald-50" },
        { name: "Imperial College London", status: "Fee Confirmed", statusColor: "text-emerald-600 bg-emerald-50" },
        { name: "Univ. of Edinburgh", status: "Application Vetted", statusColor: "text-secondary bg-secondary/5" }
      ],
      metricLabel: "Points Requirement",
      metricValue: "70/70",
      metricPercent: "99.1%",
      metricTag: "Sponsorship Route Valid"
    },
    USA: {
      visaTitle: "F-1 Approved!",
      visaSub: "USA Student Visa",
      studentName: "Meera D.",
      studentDetails: "Stanford • M.S. Data",
      universities: [
        { name: "Stanford University", status: "I-20 Vetted", statusColor: "text-emerald-600 bg-emerald-50" },
        { name: "MIT", status: "SEVIS Paid", statusColor: "text-emerald-600 bg-emerald-50" },
        { name: "UC Berkeley", status: "Offer letter", statusColor: "text-secondary bg-secondary/5" }
      ],
      metricLabel: "Visa Interview Mock",
      metricValue: "READY",
      metricPercent: "95.8%",
      metricTag: "Embassy Prep Approved"
    },
    "New Zealand": {
      visaTitle: "Visa Confirmed!",
      visaSub: "NZ Student Pathway",
      studentName: "Liam W.",
      studentDetails: "Auckland • MS CS",
      universities: [
        { name: "University of Auckland", status: "Fee Paid", statusColor: "text-emerald-600 bg-emerald-50" },
        { name: "University of Otago", status: "Offer Issued", statusColor: "text-emerald-600 bg-emerald-50" },
        { name: "Victoria Univ. Wellington", status: "Medical Verified", statusColor: "text-secondary bg-secondary/5" }
      ],
      metricLabel: "Green List Pathway",
      metricValue: "ELIGIBLE",
      metricPercent: "96.4%",
      metricTag: "Direct Residency Match"
    }
  };

  const countryMapData: Record<CountryKey, {
    destinationName: string;
    path: string;
    airport: string;
    city: string;
  }> = {
    Canada: {
      destinationName: "Canada Hub",
      path: "M 60 140 Q 160 50 260 40",
      airport: "YVR / YYZ",
      city: "Vancouver"
    },
    Australia: {
      destinationName: "Australia Hub",
      path: "M 60 140 Q 180 170 280 150",
      airport: "MEL / SYD",
      city: "Sydney"
    },
    UK: {
      destinationName: "United Kingdom",
      path: "M 60 140 Q 120 70 200 50",
      airport: "LHR / MAN",
      city: "London"
    },
    USA: {
      destinationName: "United States",
      path: "M 60 140 Q 150 75 250 65",
      airport: "SFO / JFK",
      city: "San Francisco"
    },
    "New Zealand": {
      destinationName: "New Zealand",
      path: "M 60 140 Q 180 180 290 160",
      airport: "AKL / WLG",
      city: "Auckland"
    }
  };

  const sopVettingData: Record<CountryKey, {
    sopExcerpt: string;
    highlights: { text: string; label: string; details: string; status: string }[];
  }> = {
    Canada: {
      sopExcerpt: "My primary objective is to complete the M.Eng program at Waterloo. Post-graduation, the practical co-op experiences will enable me to gain industry exposure before returning to launch my technology consultancy in my home country...",
      highlights: [
        { text: "Waterloo", label: "DLI Vetted", details: "University of Waterloo (DLI #O19305471222) verified status.", status: "Verified" },
        { text: "returning to launch", label: "Intent to Return", details: "Non-immigrant intent clearly documented, matching SDS parameters.", status: "Approved" }
      ]
    },
    Australia: {
      sopExcerpt: "I am pursuing the Master of Public Health in Melbourne because the curriculum aligns directly with epidemiological sectors in my home state. The genuine student check is fully supported by our financial plan...",
      highlights: [
        { text: "Melbourne", label: "Institution Vetted", details: "Uni. of Melbourne (CRICOS 00116K) status confirmed.", status: "Verified" },
        { text: "genuine student check", label: "GS Check", details: "Meets Australian GS profile criteria for funding structure.", status: "Passed" }
      ]
    },
    UK: {
      sopExcerpt: "Obtaining an MBA from Oxford will provide high-level leadership tools. The Russell Group network provides connections that will support my return to manage our family's operations...",
      highlights: [
        { text: "Oxford", label: "Russell Group DLI", details: "University of Oxford sponsorship validated.", status: "Verified" },
        { text: "manage our family's", label: "Career Tie-Back", details: "Home country employment ties evaluated as highly solid.", status: "Strong" }
      ]
    },
    USA: {
      sopExcerpt: "My research interests in M.S. Data Science at Stanford focus on neural networks. I intend to fund my studies through personal savings and verified sponsorships, returning post-completion to...",
      highlights: [
        { text: "Stanford", label: "SEVP DLI Status", details: "Stanford University SEVIS record matching verified.", status: "Verified" },
        { text: "fund my studies", label: "Financial Check", details: "Liquid funds threshold of $75k vetted and cleared.", status: "Cleared" }
      ]
    },
    "New Zealand": {
      sopExcerpt: "The MS in Computer Science in Auckland offers a curriculum closely mapped to the Green List in-demand engineering codes. This will form a robust launchpad for my professional development in our native country...",
      highlights: [
        { text: "Auckland", label: "Tier-1 DLI Vetted", details: "University of Auckland enrollment offer code checked.", status: "Verified" },
        { text: "Green List", label: "Pathway Match", details: "Aligns with New Zealand Long Term Skill Shortage list.", status: "Eligible" }
      ]
    }
  };

  const stats = [
    { value: "98.2%", label: "Visa Success Rate", icon: ShieldCheck },
    { value: "12,000+", label: "Success Stories", icon: Users },
    { value: "500+", label: "Partner Universities", icon: GraduationCap },
    { value: "15+", label: "Years of Experience", icon: Award },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Profile Assessment",
      desc: "We evaluate your academic record, budgets, and career objectives to map matching pathways.",
    },
    {
      step: "02",
      title: "University & Visa Selection",
      desc: "Our advisors help shortlist the courses and visa streams best aligned with your profile.",
    },
    {
      step: "03",
      title: "Documentation & SOP Vetting",
      desc: "We check every statement of purpose (SOP) and financial file to remove any potential red flags.",
    },
    {
      step: "04",
      title: "Submission & Tracking",
      desc: "We file your visa application and monitor it closely, providing interview mock preps if needed.",
    },
  ];

  const faqPreview = [
    {
      q: "How long does the study visa process take?",
      a: "Depending on the country and intake season, processing ranges from 2 weeks (e.g., Canadian SDS or UK priority service) to 3 months. We suggest initiating the process at least 4 to 6 months before classes begin.",
    },
    {
      q: "Which test should I take: IELTS or PTE?",
      a: "Both tests are widely accepted by universities and immigration departments. PTE is fully computer-graded, which suits students who prefer templates, while IELTS is standard for academic reviews and in-person interviews.",
    },
    {
      q: "Are there scholarship opportunities for international students?",
      a: "Yes, many universities offer merit-based scholarships that cut down tuition costs by 10% to 50%. Our team helps structure applications to maximize your chances of obtaining these grants.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section
        onMouseMove={handleMouseMove}
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative min-h-[98vh] flex items-center overflow-hidden border-b py-16 md:py-24 bg-background"
      >
        {/* Modern grid blending overlay */}
        <div className="absolute inset-0 bg-white/70 mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.025)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        
        {/* Spotlight overlay following mouse coordinates */}
        <div
          style={{
            background: `radial-gradient(550px circle at ${mouseCoords.x}px ${mouseCoords.y}px, rgba(30, 64, 175, 0.045), transparent 80%)`,
          }}
          className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-300"
        />

        {/* Ambient glowing backdrops */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-secondary/5 rounded-full blur-[130px] pointer-events-none animate-pulse duration-[8000ms] z-0" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-accent/5 rounded-full blur-[110px] pointer-events-none animate-pulse duration-[6000ms] z-0" />

        {/* Absolute World Destination Dots */}
        <div className="absolute top-[25%] left-[45%] z-0 pointer-events-none hidden lg:block">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent/80"></span>
          </span>
        </div>
        <div className="absolute bottom-[35%] left-[20%] z-0 pointer-events-none hidden lg:block">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary/80"></span>
          </span>
        </div>

        {/* Absolute Passport Stamp SVG */}
        <div className="absolute top-[12%] right-[15%] opacity-[0.05] pointer-events-none transform rotate-12 hidden lg:block z-0 text-secondary">
          <svg width="120" height="120" viewBox="0 0 120 120" className="stroke-current fill-none">
            <circle cx="60" cy="60" r="50" strokeWidth="2" strokeDasharray="3 3" />
            <circle cx="60" cy="60" r="42" strokeWidth="1" />
            <text x="60" y="48" fontSize="6" fontWeight="bold" textAnchor="middle" letterSpacing="2" fill="currentColor">
              PASSPORT & VISA
            </text>
            <text x="60" y="62" fontSize="9" fontWeight="extrabold" textAnchor="middle" letterSpacing="1" fill="currentColor">
              * ARRIVED *
            </text>
            <text x="60" y="74" fontSize="6" fontWeight="bold" textAnchor="middle" letterSpacing="2" fill="currentColor">
              EEC ADMISSIONS
            </text>
            <path d="M 30 60 L 90 60" strokeWidth="0.75" />
          </svg>
        </div>

        {/* Absolute Visa Seal SVG */}
        <div className="absolute bottom-[20%] right-[32%] opacity-[0.04] pointer-events-none transform -rotate-12 hidden xl:block z-0 text-accent">
          <svg width="110" height="110" viewBox="0 0 100 100" className="stroke-current fill-none animate-spin-slow">
            <polygon points="50,5 64,36 98,36 70,57 81,91 50,70 19,91 30,57 2,36 36,36" strokeWidth="1" />
            <circle cx="50" cy="50" r="30" strokeWidth="1.5" strokeDasharray="2 2" />
            <text x="50" y="54" fontSize="7" fontWeight="bold" textAnchor="middle" fill="currentColor">OFFICIAL SEAL</text>
          </svg>
        </div>

        {/* Floating Flight Watermark */}
        <motion.div
          initial={{ x: "-15%", y: "70vh", opacity: 0 }}
          animate={{
            x: "115vw",
            y: "-15vh",
            opacity: [0, 0.04, 0.04, 0]
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute z-0 pointer-events-none text-primary"
        >
          <Plane className="w-56 h-56 transform -rotate-12" />
        </motion.div>

        {/* Floating Globe Watermark */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-16 left-12 opacity-[0.02] text-primary z-0 pointer-events-none hidden md:block"
        >
          <Globe className="w-64 h-64" />
        </motion.div>

        {/* Floating Graduation Cap Watermark */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-[30%] opacity-[0.03] text-primary z-0 pointer-events-none hidden lg:block"
        >
          <GraduationCap className="w-32 h-32" />
        </motion.div>

        {/* Floating Compass Watermark */}
        <motion.div
          animate={{ rotate: [0, -12, 12, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-16 left-1/4 opacity-[0.02] text-primary z-0 pointer-events-none hidden md:block"
        >
          <Compass className="w-36 h-36" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          {/* Left Text Column with staggered reveals */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12 }
              }
            }}
            className="lg:col-span-7 space-y-8 text-left"
          >
            {/* Premium Floating Notification Pill */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 }
              }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-white/20 shadow-lg shadow-primary/5 rounded-full px-4.5 py-1.5 text-xs text-primary z-10 w-fit pointer-events-auto"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="font-semibold text-[10.5px] text-foreground/80 font-sans tracking-wide">
                <span className="text-secondary font-bold">Intake Alert:</span> Fall SDS Study Permit Admissions Closing Soon
              </span>
            </motion.div>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
              }}
              className="font-heading text-4xl sm:text-6xl font-extrabold tracking-tight text-primary leading-[1.1]"
            >
              Shape Your Future <br />
              <span className="text-secondary bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Study & Settle Abroad</span>
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-foreground/75 text-base md:text-lg max-w-xl leading-relaxed font-normal"
            >
              Expert Education Consultant provides certified, transparent guidance for international visas, university applications, and language exams. Navigate your immigration journey with absolute confidence.
            </motion.p>

            {/* Creative Pathway Pill Selector */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 }
              }}
              className="space-y-3 pt-2"
            >
              <span className="text-[10px] font-bold text-foreground/50 uppercase tracking-widest block">
                Select your target country to preview pathway analytics:
              </span>
              <div className="flex flex-wrap gap-2">
                {(Object.keys(countryDashboardData) as CountryKey[]).map((cKey) => {
                  const flags = {
                    Canada: "🇨🇦",
                    Australia: "🇦🇺",
                    UK: "🇬🇧",
                    USA: "🇺🇸",
                    "New Zealand": "🇳🇿"
                  };
                  const isSelected = selectedCountry === cKey;
                  return (
                    <button
                      key={cKey}
                      onClick={() => setSelectedCountry(cKey)}
                      className={cn(
                        "flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold rounded-lg border transition-all duration-300 transform active:scale-95",
                        isSelected
                          ? "bg-primary text-white border-primary shadow-md shadow-primary/10"
                          : "bg-white/80 backdrop-blur-sm text-foreground/75 border-border hover:bg-neutral-50"
                      )}
                    >
                      <span>{flags[cKey]}</span>
                      <span>{cKey}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Link
                href="/book-consultation"
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-semibold hover:bg-secondary hover:shadow-lg hover:shadow-secondary/15 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="flex items-center justify-center gap-1 px-8 py-4 rounded-xl border border-border bg-white/80 backdrop-blur-sm text-primary font-semibold hover:bg-neutral-50 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-300"
              >
                Explore Services
              </Link>
            </motion.div>

            {/* Live split-flap style Airport Board Ticker */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 }
              }}
              className="pt-4 max-w-xl"
            >
              <div className="bg-primary/95 border border-primary/20 backdrop-blur-md rounded-2xl p-4 shadow-xl shadow-primary/10 text-left font-mono relative overflow-hidden">
                <div className="absolute top-3.5 right-4 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[9px] text-emerald-400 font-bold tracking-widest">LIVE TRANSIT FEED</span>
                </div>
                <h4 className="text-[9px] text-accent font-bold tracking-widest uppercase mb-3 border-b border-white/10 pb-1.5">
                  EEC GLOBAL VISA TRANSIT BOARD
                </h4>
                <div className="h-6 overflow-hidden relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentApprovalIndex}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="grid grid-cols-12 gap-1 text-xs text-white/90"
                    >
                      <div className="col-span-3 text-accent font-bold tracking-wider">{liveApprovals[currentApprovalIndex].flight}</div>
                      <div className="col-span-4 font-semibold truncate">{liveApprovals[currentApprovalIndex].dest}</div>
                      <div className="col-span-3 font-semibold text-emerald-400 truncate">{liveApprovals[currentApprovalIndex].visa}</div>
                      <div className="col-span-2 text-right text-[10px] text-white/40 pt-0.5 font-sans font-medium">{liveApprovals[currentApprovalIndex].time}</div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Quick credentials */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
              className="pt-6 border-t border-border flex flex-wrap items-center gap-x-8 gap-y-4 text-xs md:text-sm text-foreground/50 font-medium"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>IRCC & ICCRC Experts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>British Council Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>Pearson VUE Member</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Premium Interactive Admissions Portal Mockup (Glass UI) */}
          <div className="lg:col-span-5 hidden lg:flex justify-center relative h-[500px]">
            <div className="relative w-full max-w-md h-full flex flex-col justify-center">
              
              {/* Float Card 1: Visa Approval status (Glass UI) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`visa-${selectedCountry}`}
                  initial={{ opacity: 0, x: -30, y: -20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, x: -20, y: -10 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="absolute top-2 left-0 z-20 bg-white/90 border border-white/30 shadow-xl shadow-primary/5 rounded-2xl p-4 w-60 flex items-center gap-3 backdrop-blur-md text-left"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div className="text-xs">
                    <span className="font-bold text-primary block">{countryDashboardData[selectedCountry].visaTitle}</span>
                    <span className="text-foreground/50 text-[10px] block mt-0.5">{countryDashboardData[selectedCountry].visaSub}</span>
                    <div className="flex items-center gap-1.5 mt-1.5">
                      <span className="text-[9px] font-bold text-secondary bg-secondary/5 px-2 py-0.5 rounded">{countryDashboardData[selectedCountry].studentName}</span>
                      <span className="text-[10px] font-semibold text-emerald-600">{countryDashboardData[selectedCountry].studentDetails}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Main Card: Upgraded Multi-Tab Mock Portal (Glass UI) */}
              <div className="bg-white/80 border border-white/20 shadow-2xl rounded-3xl w-full h-[410px] flex flex-col relative z-10 overflow-hidden backdrop-blur-md">
                {/* Mockup Window Header */}
                <div className="bg-neutral-50/80 backdrop-blur border-b px-5 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                    <span className="text-[10px] font-mono text-foreground/40 ml-2 font-medium">EEC PORTAL v2.5</span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-500 bg-emerald-50 border border-emerald-100 rounded px-2.5 py-0.5">
                    ACTIVE
                  </span>
                </div>

                {/* Internal Card Tab Navigation */}
                <div className="border-b px-4 py-2 bg-white/50 backdrop-blur-sm flex items-center gap-1">
                  <button
                    onClick={() => setActiveMockupTab("tracker")}
                    className={cn(
                      "flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold rounded-lg transition-all",
                      activeMockupTab === "tracker"
                        ? "bg-primary text-white"
                        : "text-foreground/60 hover:bg-neutral-50"
                    )}
                  >
                    <ListTodo className="w-3.5 h-3.5" />
                    Tracker
                  </button>
                  <button
                    onClick={() => setActiveMockupTab("map")}
                    className={cn(
                      "flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold rounded-lg transition-all",
                      activeMockupTab === "map"
                        ? "bg-primary text-white"
                        : "text-foreground/60 hover:bg-neutral-50"
                    )}
                  >
                    <Map className="w-3.5 h-3.5" />
                    Flight Path
                  </button>
                  <button
                    onClick={() => setActiveMockupTab("vetting")}
                    className={cn(
                      "flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold rounded-lg transition-all",
                      activeMockupTab === "vetting"
                        ? "bg-primary text-white"
                        : "text-foreground/60 hover:bg-neutral-50"
                    )}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-accent fill-accent" />
                    SOP Vetting
                  </button>
                </div>

                {/* Interactive Dynamic Tab Body */}
                <div className="p-5 flex-1 overflow-y-auto bg-white/40">
                  <AnimatePresence mode="wait">
                    
                    {/* Tab 1: Checklist Tracker */}
                    {activeMockupTab === "tracker" && (
                      <motion.div
                        key="tab-tracker"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                      >
                        <div className="flex items-center gap-4 border-b pb-3 text-left">
                          <div className="relative w-12 h-12 flex items-center justify-center flex-shrink-0">
                            {/* Circular progress SVG dial */}
                            <svg className="w-full h-full transform -rotate-90">
                              <circle
                                cx="24"
                                cy="24"
                                r="20"
                                className="stroke-neutral-100 fill-none"
                                strokeWidth="3.5"
                              />
                              <motion.circle
                                cx="24"
                                cy="24"
                                r="20"
                                className="stroke-accent fill-none"
                                strokeWidth="3.5"
                                strokeDasharray="126"
                                initial={{ strokeDashoffset: 126 }}
                                animate={{ strokeDashoffset: 126 - (126 * parseFloat(countryDashboardData[selectedCountry].metricPercent)) / 100 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                              />
                            </svg>
                            <span className="absolute text-[9px] font-bold text-primary">
                              {countryDashboardData[selectedCountry].metricPercent}
                            </span>
                          </div>
                          <div>
                            <span className="text-[9px] font-bold text-foreground/45 uppercase tracking-wider block">Admissions Status</span>
                            <h4 className="font-heading font-extrabold text-xs text-primary">{countryDashboardData[selectedCountry].metricTag}</h4>
                          </div>
                        </div>

                        <div className="space-y-2 text-left">
                          {countryDashboardData[selectedCountry].universities.map((uni, idx) => (
                            <div key={idx} className="flex items-center justify-between p-2.5 bg-white/90 border border-border/40 rounded-xl">
                              <div className="flex items-center gap-2">
                                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                                <span className="font-semibold text-xs text-primary truncate max-w-[170px]">{uni.name}</span>
                              </div>
                              <span className={cn("text-[8px] font-bold px-2 py-0.5 rounded", uni.statusColor)}>
                                {uni.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Tab 2: Dotted SVG Flight Connection Path */}
                    {activeMockupTab === "map" && (
                      <motion.div
                        key="tab-map"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4 h-full flex flex-col justify-between"
                      >
                        <div className="flex items-center justify-between border-b pb-2.5 text-left">
                          <div>
                            <span className="text-[9px] font-bold text-foreground/45 uppercase tracking-wider block">Connection Route</span>
                            <h4 className="font-heading font-extrabold text-xs text-primary">Delhi Hub to {countryMapData[selectedCountry].city} ({countryMapData[selectedCountry].airport.split(" / ")[0]})</h4>
                          </div>
                          <Plane className="w-4 h-4 text-accent animate-pulse" />
                        </div>

                        <div className="relative border border-border/50 bg-neutral-950 rounded-2xl h-[170px] overflow-hidden flex items-center justify-center">
                          {/* SVG World grid network mockup */}
                          <svg viewBox="0 0 340 180" className="w-full h-full opacity-90 relative">
                            {/* Faint network grid lines */}
                            <line x1="20" y1="20" x2="320" y2="160" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="3 3" />
                            <line x1="20" y1="160" x2="320" y2="20" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="3 3" />
                            <circle cx="170" cy="90" r="60" stroke="rgba(255,255,255,0.03)" strokeWidth="1" fill="none" />
                            <circle cx="170" cy="90" r="100" stroke="rgba(255,255,255,0.02)" strokeWidth="1" fill="none" />

                            {/* Origin node (Delhi Hub) */}
                            <circle cx="60" cy="140" r="4.5" fill="#D4AF37" className="animate-pulse" />
                            <circle cx="60" cy="140" r="11" stroke="#D4AF37" strokeWidth="1.5" fill="none" className="opacity-30" />
                            <text x="60" y="157" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace" textAnchor="middle">DEL</text>

                            {/* Dynamic Bezier curved flight path */}
                            <motion.path
                              d={countryMapData[selectedCountry].path}
                              fill="none"
                              stroke="rgba(212, 175, 55, 0.4)"
                              strokeWidth="1.5"
                              strokeDasharray="4 4"
                              initial={{ strokeDashoffset: 100 }}
                              animate={{ strokeDashoffset: 0 }}
                              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Target destination node based on the curved path end point coords */}
                            <circle
                              cx={
                                selectedCountry === "Canada" ? 260 :
                                selectedCountry === "Australia" ? 280 :
                                selectedCountry === "UK" ? 200 :
                                selectedCountry === "USA" ? 250 : 290
                              }
                              cy={
                                selectedCountry === "Canada" ? 40 :
                                selectedCountry === "Australia" ? 150 :
                                selectedCountry === "UK" ? 50 :
                                selectedCountry === "USA" ? 65 : 160
                              }
                              r="4.5"
                              fill="#1E40AF"
                            />
                            <circle
                              cx={
                                selectedCountry === "Canada" ? 260 :
                                selectedCountry === "Australia" ? 280 :
                                selectedCountry === "UK" ? 200 :
                                selectedCountry === "USA" ? 250 : 290
                              }
                              cy={
                                selectedCountry === "Canada" ? 40 :
                                selectedCountry === "Australia" ? 150 :
                                selectedCountry === "UK" ? 50 :
                                selectedCountry === "USA" ? 65 : 160
                              }
                              r="11"
                              stroke="#1E40AF"
                              strokeWidth="1.5"
                              fill="none"
                              className="opacity-30 animate-ping duration-1000"
                            />
                            <text
                              x={
                                selectedCountry === "Canada" ? 260 :
                                selectedCountry === "Australia" ? 280 :
                                selectedCountry === "UK" ? 200 :
                                selectedCountry === "USA" ? 250 : 290
                              }
                              y={
                                selectedCountry === "Canada" ? 28 :
                                selectedCountry === "Australia" ? 138 :
                                selectedCountry === "UK" ? 38 :
                                selectedCountry === "USA" ? 53 : 148
                              }
                              fill="rgba(255,255,255,0.7)"
                              fontSize="8"
                              fontWeight="bold"
                              fontFamily="monospace"
                              textAnchor="middle"
                            >
                              {countryMapData[selectedCountry].airport.split(" / ")[0]}
                            </text>
                          </svg>

                          {/* CSS Flight path plane animation */}
                          <motion.div
                            key={`plane-${selectedCountry}`}
                            style={{
                              position: "absolute",
                              offsetPath: `path("${countryMapData[selectedCountry].path}")`,
                              offsetRotate: "auto",
                              left: 0,
                              top: 0
                            }}
                            animate={{
                              offsetDistance: ["0%", "100%"]
                            }}
                            transition={{
                              duration: 5.5,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                            className="pointer-events-none"
                          >
                            <Plane className="w-4 h-4 text-accent fill-accent transform rotate-90" />
                          </motion.div>
                        </div>
                      </motion.div>
                    )}

                    {/* Tab 3: SOP AI Vetting Document Mockup */}
                    {activeMockupTab === "vetting" && (
                      <motion.div
                        key="tab-vetting"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-3"
                      >
                        <div className="bg-white/80 border border-border/80 rounded-xl p-3 text-left space-y-2.5 font-mono text-[9.5px] text-foreground/80 leading-relaxed max-h-[125px] overflow-hidden relative">
                          <div className="flex items-center justify-between border-b pb-1.5 text-[8px] text-foreground/45">
                            <span>STATEMENT_OF_PURPOSE_DRAFT.TXT</span>
                            <span className="text-secondary font-bold">EEC SYSTEM AUDITED</span>
                          </div>
                          <p>
                            {/* Insert highlighting */}
                            {(() => {
                              const data = sopVettingData[selectedCountry];
                              let text = data.sopExcerpt;
                              data.highlights.forEach((h) => {
                                text = text.replace(
                                  h.text,
                                  `<span class="bg-amber-100 text-amber-900 border border-amber-200 px-1 rounded font-bold">${h.text}</span>`
                                );
                              });
                              return <span dangerouslySetInnerHTML={{ __html: text }} />;
                            })()}
                          </p>
                        </div>

                        {/* Audit Annotations details panel */}
                        <div className="grid grid-cols-2 gap-2 text-left">
                          {sopVettingData[selectedCountry].highlights.map((h, i) => (
                            <div key={i} className="bg-white/95 border border-border/60 p-2 rounded-xl shadow-sm">
                              <div className="flex items-center justify-between gap-1 mb-1">
                                <span className="text-[7.5px] font-bold text-foreground/45 uppercase tracking-wide truncate max-w-[80px]">{h.label}</span>
                                <span className="text-[7.5px] font-extrabold text-emerald-600 bg-emerald-50 px-1 rounded flex-shrink-0">{h.status}</span>
                              </div>
                              <span className="text-[9.5px] font-bold text-primary block truncate">{h.text}</span>
                              <p className="text-[8.5px] text-foreground/60 leading-tight mt-0.5 line-clamp-2">{h.details}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                  </AnimatePresence>
                </div>

                {/* Mockup Portal Footer details */}
                <div className="border-t px-5 py-3 bg-neutral-50/50 flex justify-between items-center text-[9px] font-semibold text-foreground/50">
                  <span>Admissions Coverage: 98.2%</span>
                  <span className="text-secondary font-bold">500+ DLI Institutions</span>
                </div>
              </div>

              {/* Float Card 2: Metrics / CRS dial (Glass UI) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`score-${selectedCountry}`}
                  initial={{ opacity: 0, x: 30, y: 25 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, x: 20, y: 15 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: 4, transition: { duration: 0.2 } }}
                  className="absolute bottom-2 right-0 z-20 bg-white/90 border border-white/30 shadow-xl shadow-primary/5 rounded-2xl p-4 w-56 text-left backdrop-blur-md space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-foreground/50 uppercase tracking-wide truncate max-w-[130px]">
                      {countryDashboardData[selectedCountry].metricLabel}
                    </span>
                    <div className="w-1.5 h-1.5 bg-accent rounded-full animate-ping" />
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading font-extrabold text-2xl text-primary">
                      {countryDashboardData[selectedCountry].metricValue}
                    </span>
                    {selectedCountry === "Canada" && <span className="text-foreground/45 text-[9px]">/ 600 points</span>}
                  </div>
                  <div className="flex items-center gap-1 text-[9.5px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100/50 rounded-lg p-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="truncate">{countryDashboardData[selectedCountry].metricTag}</span>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Stats Banner */}
      <section className="bg-primary text-white py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center space-y-2">
              <div className="mx-auto w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-accent">
                <stat.icon className="w-5 h-5" />
              </div>
              <p className="font-heading text-2xl md:text-3xl font-extrabold text-white">{stat.value}</p>
              <p className="text-white/60 text-xs md:text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Featured Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-16">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Expertise Areas</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-primary">
              Our Professional Immigration Services
            </h2>
            <p className="text-foreground/75 text-sm md:text-base">
              Navigate visa requirements and immigration parameters with highly-detailed, expert support templates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.values(servicesData).slice(0, 6).map((service) => (
              <div
                key={service.slug}
                className="group bg-white border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-neutral-50 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <Compass className="w-5 h-5 text-secondary group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-primary">{service.title}</h3>
                  <p className="text-foreground/70 text-xs md:text-sm leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-neutral-50 flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-xs font-semibold text-secondary group-hover:text-accent flex items-center gap-1 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-lg border border-border bg-white text-sm font-semibold hover:bg-neutral-50 transition-all"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Study Destinations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-16">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-accent font-heading">Global Networks</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-primary">
              Study Abroad Destinations
            </h2>
            <p className="text-foreground/75 text-sm">
              Acquire degrees from world-renowned campuses across highly-favored countries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {Object.values(countriesData).map((country) => (
              <Link
                key={country.slug}
                href={`/study-abroad/${country.slug}`}
                className="group relative rounded-2xl bg-neutral-50 border border-border p-6 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 hover:bg-white transition-all duration-300 text-left"
              >
                <div className="space-y-4">
                  <div className="text-4xl">{country.flag}</div>
                  <h3 className="font-heading text-lg font-bold text-primary group-hover:text-secondary transition-colors">
                    {country.name}
                  </h3>
                  <p className="text-xs text-foreground/60 leading-relaxed line-clamp-4">
                    {country.heroSubtitle}
                  </p>
                </div>
                <div className="pt-6 mt-6 flex items-center justify-between text-xs font-semibold text-foreground/50 border-t border-neutral-100 group-hover:text-accent">
                  <span>Explore Pathways</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Immigration Process */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-16">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Our Framework</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-primary">
              Step-by-Step Immigration Process
            </h2>
            <p className="text-foreground/70 text-sm">
              We guide you through a highly secure, structured process to ensure maximum approval rates.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="relative bg-white border border-border p-6 rounded-2xl shadow-sm text-left space-y-4">
                <span className="block font-heading text-4xl font-extrabold text-accent/25">{step.step}</span>
                <h3 className="font-heading text-lg font-bold text-primary">{step.title}</h3>
                <p className="text-foreground/70 text-xs md:text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">The EEC Advantage</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-primary">
              Why Clients Trust Expert Education Consultant
            </h2>
            <p className="text-foreground/75 text-sm md:text-base leading-relaxed">
              We stand apart from generic templates and fast-food consultancy agencies. Our advisory centers are structured upon individual validation, extreme data scrutiny, and direct university link privileges.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mt-1">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-semibold text-primary">Certified Consultant Teams</h4>
                  <p className="text-foreground/60 text-xs mt-0.5">Profiles assessed exclusively by registered and certified immigration specialists.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mt-1">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-semibold text-primary">98.2% Proven Visa Approvals</h4>
                  <p className="text-foreground/60 text-xs mt-0.5">High approval benchmarks backed by extensive document audits and cover letter creation.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mt-1">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-semibold text-primary">Absolute Transparency</h4>
                  <p className="text-foreground/60 text-xs mt-0.5">No hidden commissions, no dummy documentation, and structured installment setups.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-neutral-50 p-6 rounded-2xl border border-border space-y-2">
                <Building className="w-6 h-6 text-secondary" />
                <h4 className="font-heading font-semibold text-sm text-primary">Direct Admissions</h4>
                <p className="text-xs text-foreground/50">Direct links with top DLIs and colleges globally.</p>
              </div>
              <div className="bg-neutral-50 p-6 rounded-2xl border border-border space-y-2">
                <FileText className="w-6 h-6 text-secondary" />
                <h4 className="font-heading font-semibold text-sm text-primary">SOP Vetting</h4>
                <p className="text-xs text-foreground/50">Advocate-reviewed Statement of Purposes.</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-neutral-50 p-6 rounded-2xl border border-border space-y-2">
                <Clock className="w-6 h-6 text-secondary" />
                <h4 className="font-heading font-semibold text-sm text-primary">Fast Processing</h4>
                <p className="text-xs text-foreground/50">Real-time status tracking updates.</p>
              </div>
              <div className="bg-neutral-50 p-6 rounded-2xl border border-border space-y-2">
                <Users className="w-6 h-6 text-secondary" />
                <h4 className="font-heading font-semibold text-sm text-primary">Post-Landing Care</h4>
                <p className="text-xs text-foreground/50">Help with accommodation and local cards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Success Stories Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-16">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Testimonials</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-primary">
              EEC Visa Success Stories
            </h2>
            <p className="text-foreground/75 text-sm">
              Read how we have helped students and professionals relocate globally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStoriesData.slice(0, 3).map((story) => (
              <div
                key={story.id}
                className="bg-white border border-border p-6 rounded-2xl shadow-sm text-left flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: story.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-foreground/85 text-xs md:text-sm leading-relaxed italic">
                    &ldquo;{story.testimonial}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-neutral-50">
                  <div className="w-10 h-10 rounded-full bg-secondary/15 text-secondary flex items-center justify-center font-bold text-sm">
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

          <div className="pt-4">
            <Link
              href="/success-stories"
              className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-lg border border-border bg-white text-sm font-semibold hover:bg-neutral-50 transition-all"
            >
              <span>View All Testimonials</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Latest Blog Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-16">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Insights</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-primary">
              Latest from the Immigration Blog
            </h2>
            <p className="text-foreground/75 text-sm">
              Keep updated with the latest news, guidelines, and preparation blueprints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogData.map((post) => (
              <div
                key={post.slug}
                className="group bg-neutral-50 border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between text-left"
              >
                <div className="p-6 space-y-4">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-secondary bg-secondary/5 rounded-full px-3 py-1">
                    {post.category}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-primary group-hover:text-secondary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-foreground/70 text-xs md:text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                <div className="p-6 pt-0 mt-auto border-t border-neutral-100 flex items-center justify-between text-xs text-foreground/50">
                  <span>{post.date}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-semibold text-secondary hover:text-accent flex items-center gap-0.5 transition-colors"
                  >
                    <span>Read Article</span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ Preview */}
      <section className="py-20 bg-background border-t">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Help Center</span>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-primary">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="text-left space-y-4">
            {faqPreview.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="bg-white border border-border rounded-xl overflow-hidden transition-all duration-200">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex items-center justify-between w-full p-5 text-left font-heading font-bold text-sm md:text-base text-primary hover:bg-neutral-50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={cn("w-5 h-5 text-foreground/50 transition-transform", isOpen && "transform rotate-180")} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 pt-0 text-foreground/75 text-sm leading-relaxed border-t border-neutral-50">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="pt-4">
            <Link href="/faq" className="text-sm font-semibold text-secondary hover:text-accent hover:underline">
              View All Frequently Asked Questions &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Consultation CTA */}
      <CTA />
    </div>
  );
}
