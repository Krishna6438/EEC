import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { getBreadcrumbSchema } from "@/lib/seo";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schemaItems = [
    { name: "Home", item: "/" },
    ...items.map((item) => ({ name: item.name, item: item.href })),
  ];

  return (
    <>
      {/* Schema.org BreadcrumbList Integration */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema(schemaItems)),
        }}
      />

      <nav aria-label="Breadcrumb" className="py-3 flex items-center space-x-2 text-xs font-medium text-foreground/60 overflow-x-auto whitespace-nowrap">
        <Link
          href="/"
          className="flex items-center gap-1 hover:text-secondary transition-colors"
        >
          <Home className="w-3.5 h-3.5" />
          <span className="sr-only">Home</span>
        </Link>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <React.Fragment key={item.href}>
              <ChevronRight className="w-3.5 h-3.5 text-foreground/30 flex-shrink-0" />
              {isLast ? (
                <span className="text-foreground/90 font-semibold truncate" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-secondary transition-colors truncate"
                >
                  {item.name}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </>
  );
}
