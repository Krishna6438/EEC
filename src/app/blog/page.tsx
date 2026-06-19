"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ExternalLink, Calendar, BookOpen, Clock } from "lucide-react";
import { blogData } from "@/data/blog";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTA from "@/components/shared/CTA";

export default function BlogHub() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Visa Updates", "Exam Prep"];

  // Filtered posts based on search & category
  const filteredPosts = useMemo(() => {
    return blogData.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = activeCategory === "All" || post.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const featuredPost = blogData[0]; // Canada SDS article

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="bg-white border-b py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />
          <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-primary tracking-tight">
            Immigration & Overseas Study Blog
          </h1>
          <p className="text-foreground/70 text-sm md:text-base max-w-2xl leading-relaxed">
            Gain expert insights, guidelines checklist, and test prep tips from our senior counselors.
          </p>
        </div>
      </section>

      {/* Main Blog section */}
      <section className="py-16 max-w-7xl mx-auto px-6 space-y-12">
        {/* Featured Post Card */}
        {featuredPost && activeCategory === "All" && searchQuery === "" && (
          <div className="group relative bg-white border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-6 p-6">
            <div className="lg:col-span-8 flex flex-col justify-between space-y-4 text-left">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-foreground/50">
                  <span className="bg-secondary/5 text-secondary px-3 py-1 rounded-full uppercase tracking-wider font-bold">
                    {featuredPost.category}
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-primary group-hover:text-secondary transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-secondary/15 text-secondary flex items-center justify-center font-bold text-xs">
                    {featuredPost.author.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-primary block">{featuredPost.author.name}</span>
                    <span className="text-[10px] text-foreground/45 block">{featuredPost.author.role}</span>
                  </div>
                </div>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-secondary hover:text-accent transition-colors"
                >
                  <span>Read Article</span>
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
            {/* Right decorative visual block */}
            <div className="lg:col-span-4 bg-neutral-50 rounded-2xl border border-border flex flex-col justify-center items-center p-8 text-center space-y-2 shadow-inner">
              <BookOpen className="w-12 h-12 text-secondary/35" />
              <h4 className="font-heading font-bold text-primary text-sm">Featured Read</h4>
              <p className="text-[11px] text-foreground/50 leading-relaxed">
                Stay updated with IRCC regulatory transitions, GIC capital shifts, and PGWP requirements.
              </p>
            </div>
          </div>
        )}

        {/* Filter controls */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-b pb-6">
          {/* Category buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-foreground/80 border-border hover:bg-neutral-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-80 flex items-center">
            <Search className="absolute left-3 w-4 h-4 text-foreground/45" />
            <input
              type="text"
              placeholder="Search articles or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-border text-xs rounded-lg pl-9 pr-4 py-3 focus:outline-none focus:border-secondary"
            />
          </div>
        </div>

        {/* Loop list */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12 text-foreground/50 text-sm">
            No articles found matching your criteria.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div
                key={post.slug}
                className="group bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between text-left"
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-1.5 text-xs text-foreground/45">
                    <span className="bg-secondary/5 text-secondary px-2.5 py-0.5 rounded-full uppercase tracking-wider font-bold text-[10px]">
                      {post.category}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-0.5">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-primary group-hover:text-secondary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-foreground/75 text-xs md:text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="p-6 pt-0 border-t border-neutral-50 flex items-center justify-between text-xs text-foreground/50">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
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
        )}
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
}
