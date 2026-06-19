import React from "react";
import Image from "next/image";
import { Shield, Target, Users, Eye, Quote } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTA from "@/components/shared/CTA";

export default function About() {
  const values = [
    {
      title: "Absolute Integrity",
      desc: "We provide truthful profile assessments. If a profile has zero visa chances, we state it transparently rather than taking commissions.",
      icon: Shield,
    },
    {
      title: "Methodical Precision",
      desc: "Our case audits examine every detail (tax records, transcripts, gaps) to eliminate documentation mistakes before embassy submissions.",
      icon: Target,
    },
    {
      title: "Constant Support",
      desc: "From initial coaching classes to visa checks and finding post-arrival accommodation, we stay alongside our clients.",
      icon: Users,
    },
  ];

  const timeline = [
    { year: "2011", title: "Inception", desc: "Expert Education Consultant launched with a single advisor office in New Delhi." },
    { year: "2015", title: "Global Expansion", desc: "Acquired direct DLI partnership agreements with 50+ Canadian colleges." },
    { year: "2019", title: "Test prep launch", desc: "Opened digital coaching suites for IELTS and PTE prep, hiring master trainers." },
    { year: "2024", title: "Admissions Milestone", desc: "Crossed 10,000+ successful student enrollment approvals across 5 countries." },
  ];

  const team = [
    {
      name: "Gaurav Handa",
      role: "Founder & Managing Director",
      bio: "Registered ICCRC advisor with 15+ years experience auditing high-complexity skilled work permits and study visa filings.",
      image: "/images/md.png"
    },
    {
      name: "Dr. Sarah Jenkins",
      role: "Chief IELTS Master Trainer",
      bio: "Ex-IELTS Examiner and CELTA trainer with a doctoral degree in English Linguistics. Guides academic module preparation.",
      image: ""
    },
    {
      name: "Ms. Priyanka Sen",
      role: "Head of Australia Admissions",
      bio: "Specializes in Student Subclass 500 processing and meeting Australian Genuine Student (GS) criteria profiles.",
      image: ""
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Header */}
      <section className="bg-white border-b py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          <Breadcrumbs items={[{ name: "About Us", href: "/about" }]} />
          <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-primary tracking-tight">
            About Expert Education Consultant
          </h1>
          <p className="text-foreground/70 text-sm md:text-base max-w-2xl leading-relaxed">
            Discover our history, core principles, and the certified specialists committed to managing your global migration.
          </p>
        </div>
      </section>

      {/* Company Story & Vision */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-accent font-heading">Our Origin</span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
            Empowering Global Aspirations Since 2011
          </h2>
          <div className="space-y-4 text-foreground/75 text-sm md:text-base leading-relaxed">
            <p>
              Expert Education Consultant (EEC) was founded on a simple truth: overseas education and immigration processing should be governed by transparency, precision, and verified credentials—not inflated sales templates.
            </p>
            <p>
              What started as a boutique advisory office in New Delhi has expanded into a global network. We partner directly with leading universities in Canada, Australia, UK, USA, and New Zealand. Our team comprises registered ICCRC specialists, native English training instructors, and corporate legal consultants.
            </p>
          </div>

          {/* Mission & Vision cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            <div className="bg-white border border-border p-6 rounded-2xl space-y-3 shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                <Target className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-primary text-base">Our Mission</h4>
              <p className="text-xs text-foreground/60 leading-relaxed">
                Provide ethical guidance, vetting every application to match embassy expectations and help families study or settle safely.
              </p>
            </div>
            <div className="bg-white border border-border p-6 rounded-2xl space-y-3 shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                <Eye className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-primary text-base">Our Vision</h4>
              <p className="text-xs text-foreground/60 leading-relaxed">
                Build the world&apos;s most trusted, digital-first international education portal, enabling seamless transfers.
              </p>
            </div>
          </div>
        </div>

        {/* MD Statement Card */}
        <div className="lg:col-span-5 bg-primary text-white p-8 rounded-3xl shadow-xl border border-white/5 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/15 rounded-full blur-2xl" />
          <div className="space-y-6 z-10 relative">
            <Quote className="w-10 h-10 text-accent opacity-50" />
            <h3 className="font-heading text-lg font-bold text-white tracking-tight">
              A Personal Note from Our MD
            </h3>
            <p className="text-white/80 text-xs md:text-sm leading-relaxed italic">
              &ldquo;Applying to study or work abroad is a major financial and life decision. It shouldn&apos;t be handled by sales agents tracking monthly targets. We build structured, honest profile assessments to guarantee that your investment delivers genuine global residency returns.&rdquo;
            </p>
          </div>
          <div className="pt-8 border-t border-white/10 mt-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 relative flex-shrink-0">
              <Image
                src="/images/md.png"
                alt="Gaurav Handa, Managing Director"
                width={40}
                height={40}
                className="object-cover object-top"
              />
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm text-white">Gaurav Handa</h4>
              <span className="text-[10px] text-accent uppercase tracking-wider block font-semibold">
                Managing Director, EEC
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white border-t border-b">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-16">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-accent font-heading">Our Foundations</span>
            <h2 className="font-heading text-3xl font-bold text-primary">Core Ethical Values</h2>
            <p className="text-foreground/70 text-sm">
              We stand by our code of conduct on every single profile submission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div key={idx} className="bg-neutral-50 border border-border p-6 rounded-2xl text-left space-y-4 shadow-inner">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-accent">
                  <val.icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-primary">{val.title}</h3>
                <p className="text-foreground/75 text-xs md:text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Team */}
      <section className="py-20 max-w-7xl mx-auto px-6 text-center space-y-16">
        <div className="max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-accent font-heading">Certified Advisors</span>
          <h2 className="font-heading text-3xl font-bold text-primary">Meet Our Leadership Team</h2>
          <p className="text-foreground/70 text-sm">
            Expert academic coaches, visa advocates, and legal advisors managing your immigration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div key={i} className="bg-white border border-border p-6 rounded-2xl shadow-sm text-left flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                {member.image ? (
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-border relative flex-shrink-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={48}
                      height={48}
                      className="object-cover object-top"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center font-extrabold text-secondary text-lg">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </div>
                )}
                <h3 className="font-heading font-bold text-lg text-primary">{member.name}</h3>
                <span className="text-xs font-bold text-accent uppercase tracking-wider block">
                  {member.role}
                </span>
                <p className="text-foreground/75 text-xs leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-neutral-50 border-t">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-16">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-accent font-heading">The Journey</span>
            <h2 className="font-heading text-3xl font-bold text-primary">EEC Timeline & Milestones</h2>
            <p className="text-foreground/75 text-sm">
              Tracing our path from a local consultancy to an international overseas admissions hub.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((step, idx) => (
              <div key={idx} className="bg-white border border-border p-6 rounded-2xl text-left space-y-3 shadow-sm relative">
                <span className="text-2xl font-extrabold font-heading text-accent block">{step.year}</span>
                <h3 className="font-heading font-bold text-sm text-primary">{step.title}</h3>
                <p className="text-foreground/60 text-xs leading-relaxed">{step.desc}</p>
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
