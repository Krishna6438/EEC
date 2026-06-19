import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, Bookmark, Globe } from "lucide-react";
import { blogData } from "@/data/blog";
import { generatePageMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTA from "@/components/shared/CTA";

export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);
  if (!post) return {};
  return generatePageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
    type: "article",
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Get related posts (excluding current post)
  const relatedPosts = blogData.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="bg-background min-h-screen">
      {/* Article Header */}
      <section className="bg-white border-b py-12">
        <div className="max-w-4xl mx-auto px-6 space-y-4 text-left">
          <Breadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: myTruncate(post.title, 25), href: `/blog/${post.slug}` },
            ]}
          />

          <div className="flex items-center gap-2 text-xs font-semibold text-foreground/45">
            <span className="bg-secondary/5 text-secondary px-3 py-1 rounded-full uppercase tracking-wider font-bold">
              {post.category}
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-0.5">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
          </div>

          <h1 className="font-heading text-2xl md:text-4xl font-extrabold text-primary leading-tight">
            {post.title}
          </h1>

          <p className="text-foreground/70 text-sm md:text-base leading-relaxed border-l-2 border-accent pl-4 italic">
            {post.excerpt}
          </p>

          <div className="pt-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary/15 text-secondary flex items-center justify-center font-bold text-sm">
              {post.author.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <div>
              <span className="text-xs font-bold text-primary block">{post.author.name}</span>
              <span className="text-[10px] text-foreground/45 block">{post.author.role}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Article Body */}
        <article className="lg:col-span-8 bg-white border border-border p-6 md:p-10 rounded-3xl shadow-sm text-left">
          <div className="prose prose-sm md:prose-base max-w-none text-foreground/80 leading-relaxed space-y-6">
            {post.content.split("\n\n").map((para, index) => {
              const cleanPara = para.trim();
              if (!cleanPara) return null;

              // Check if it's a heading
              if (cleanPara.startsWith("###")) {
                return (
                  <h3 key={index} className="font-heading text-lg md:text-xl font-bold text-primary pt-4 border-b pb-2">
                    {cleanPara.replace("###", "").trim()}
                  </h3>
                );
              }

              // Check if it's a list item
              if (cleanPara.startsWith("-")) {
                return (
                  <ul key={index} className="list-disc pl-5 space-y-2 text-xs md:text-sm">
                    {cleanPara.split("\n").map((li, i) => (
                      <li key={i} className="pl-1">
                        {li.replace("-", "").trim()}
                      </li>
                    ))}
                  </ul>
                );
              }

              // Default paragraph
              return (
                <p key={index} className="text-xs md:text-sm whitespace-pre-line">
                  {cleanPara}
                </p>
              );
            })}
          </div>

          {/* Tags list */}
          <div className="pt-8 mt-8 border-t border-neutral-100 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="text-[11px] font-semibold text-foreground/50 bg-neutral-50 border border-border px-3 py-1 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
        </article>

        {/* Right Side: Sidebar */}
        <aside className="lg:col-span-4 space-y-8 text-left">
          {/* Back button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="bg-white border border-border p-6 rounded-2xl shadow-sm space-y-4">
              <h4 className="font-heading font-bold text-primary text-sm uppercase tracking-wider border-b pb-2 flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-accent" />
                Related Reads
              </h4>
              <div className="space-y-4">
                {relatedPosts.map((rPost) => (
                  <div key={rPost.slug} className="space-y-1">
                    <Link href={`/blog/${rPost.slug}`} className="font-heading font-bold text-sm text-primary hover:text-secondary transition-colors line-clamp-2">
                      {rPost.title}
                    </Link>
                    <span className="text-[10px] text-foreground/45 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {rPost.readTime}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* General Ad banner */}
          <div className="bg-primary text-white p-6 rounded-2xl shadow-lg border border-white/5 space-y-4">
            <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-accent">
              <Globe className="w-5 h-5" />
            </div>
            <h4 className="font-heading font-bold text-sm">Need Relocation Help?</h4>
            <p className="text-white/70 text-[11px] leading-relaxed">
              We audit profiles, evaluate IELTS prep needs, and guide you through study/settlement paths with full safety.
            </p>
            <Link
              href="/book-consultation"
              className="w-full flex items-center justify-center py-2.5 rounded-lg bg-accent text-primary font-bold text-xs hover:bg-white transition-all"
            >
              Get Free Evaluation
            </Link>
          </div>
        </aside>
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
}

function myTruncate(str: string, length: number) {
  if (str.length <= length) return str;
  return str.substring(0, length) + "...";
}
