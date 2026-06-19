"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Award, Globe, BookOpen, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { servicesData } from "@/data/services";
import { countriesData } from "@/data/countries";
import { coachingData } from "@/data/coaching";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      href: "/services",
      dropdown: Object.values(servicesData).map((s) => ({
        name: s.title.replace(" Consultancy", ""),
        href: `/services/${s.slug}`,
      })),
      icon: Award,
    },
    {
      name: "Study Abroad",
      href: "/study-abroad",
      dropdown: Object.values(countriesData).map((c) => ({
        name: c.name,
        href: `/study-abroad/${c.slug}`,
      })),
      icon: Globe,
    },
    {
      name: "Coaching",
      href: "/coaching",
      dropdown: Object.values(coachingData).map((exam) => ({
        name: exam.name,
        href: `/coaching/${exam.slug}`,
      })),
      icon: BookOpen,
    },
    { name: "Success Stories", href: "/success-stories" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          scrolled
            ? "bg-white/80 backdrop-blur-md border-border py-4 shadow-sm"
            : "bg-transparent border-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3.5">
            <Image
              src="/images/logo.png"
              alt="Expert Education Consultant Logo"
              width={42}
              height={42}
              className="object-contain"
              priority
            />
            <span className="font-heading font-bold text-xl text-primary tracking-tight hidden sm:block">
              Expert<span className="text-accent">Education</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const hasDropdown = !!link.dropdown;
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/");

              return (
                <div
                  key={link.name}
                  className="relative group py-2"
                  onMouseEnter={() => hasDropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                >
                  {hasDropdown ? (
                    <button
                      className={cn(
                        "flex items-center space-x-1 font-heading text-sm font-medium transition-colors hover:text-secondary",
                        isActive ? "text-secondary font-semibold" : "text-foreground/80"
                      )}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          activeDropdown === link.name && "transform rotate-180 text-secondary"
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        "font-heading text-sm font-medium transition-colors hover:text-secondary",
                        pathname === link.href ? "text-secondary font-semibold" : "text-foreground/80"
                      )}
                    >
                      {link.name}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {hasDropdown && (
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 mt-2 w-64 rounded-xl bg-white border border-border p-4 shadow-xl z-50 grid gap-2"
                        >
                          <div className="text-xs font-semibold text-foreground/40 uppercase tracking-wider mb-1 flex items-center gap-1.5 border-b pb-2">
                            {link.icon && React.createElement(link.icon, { className: "w-3.5 h-3.5" })}
                            {link.name} Directory
                          </div>
                          {link.dropdown?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="group/item flex items-center justify-between p-2 rounded-lg text-sm text-foreground/80 hover:bg-neutral-50 hover:text-secondary transition-colors"
                            >
                              <span>{subItem.name}</span>
                              <ChevronRight className="w-4 h-4 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all" />
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <Link
              href="/book-consultation"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-secondary hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Book Consultation
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-40 lg:hidden"
            />

            {/* Sidebar Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 p-6 flex flex-col shadow-2xl overflow-y-auto lg:hidden"
            >
              <div className="flex items-center justify-between pb-6 border-b">
                <Link href="/" className="flex items-center space-x-3" onClick={() => setMobileMenuOpen(false)}>
                  <Image
                    src="/images/logo.png"
                    alt="Expert Education Consultant Logo"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                  <span className="font-heading font-bold text-lg text-primary tracking-tight">
                    Expert<span className="text-accent">Education</span>
                  </span>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-neutral-100 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 py-6 space-y-6">
                {navLinks.map((link) => {
                  const hasDropdown = !!link.dropdown;
                  const isExpanded = mobileExpanded === link.name;

                  return (
                    <div key={link.name} className="space-y-2">
                      {hasDropdown ? (
                        <div>
                          <button
                            onClick={() => setMobileExpanded(isExpanded ? null : link.name)}
                            className="flex items-center justify-between w-full text-left font-heading text-base font-medium py-1 text-foreground hover:text-secondary transition-colors"
                          >
                            <span>{link.name}</span>
                            <ChevronDown
                              className={cn(
                                "w-5 h-5 transition-transform duration-200",
                                isExpanded && "transform rotate-180 text-secondary"
                              )}
                            />
                          </button>
                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="pl-4 mt-2 border-l-2 border-neutral-100 space-y-2.5 overflow-hidden"
                              >
                                {link.dropdown?.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block py-1 text-sm text-foreground/75 hover:text-secondary transition-colors"
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block font-heading text-base font-medium py-1 text-foreground hover:text-secondary transition-colors"
                        >
                          {link.name}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="border-t pt-6 space-y-4">
                <Link
                  href="/book-consultation"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full py-3 rounded-lg bg-primary text-white text-center font-semibold hover:bg-secondary transition-colors"
                >
                  Book Consultation
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
