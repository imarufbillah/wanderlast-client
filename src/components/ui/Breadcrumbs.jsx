"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

const Breadcrumbs = ({ currentPageTitle }) => {
  const pathname = usePathname();

  // Pages that are in the navbar - don't show breadcrumbs on these
  const navPages = ["/", "/destinations", "/tours", "/about", "/contact"];

  // Don't show breadcrumbs on pages that are in the navbar
  if (navPages.includes(pathname)) return null;

  const segments = pathname.split("/").filter(Boolean);

  // Format segment for display
  const formatSegment = (segment) => {
    // Handle special cases
    if (segment === "new") return "New";
    if (segment === "edit") return "Edit";

    // Capitalize first letter and replace hyphens with spaces
    return segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <nav
      className="flex items-center gap-2 text-sm mb-6"
      aria-label="Breadcrumb"
    >
      <Link
        href="/"
        className="flex items-center gap-1.5 text-text-muted hover:text-accent transition-colors group"
      >
        <Home className="w-4 h-4" />
        <span className="font-body">Home</span>
      </Link>

      {segments.map((segment, index) => {
        const href = "/" + segments.slice(0, index + 1).join("/");
        const isLast = index === segments.length - 1;
        const label = formatSegment(segment);

        // Check if this is an ID (MongoDB ObjectIds or UUIDs)
        const isId = segment.length === 24 || segment.match(/^[a-f0-9]{24}$/i);

        // Skip rendering IDs in the middle of the path
        if (isId && !isLast) return null;

        return (
          <div key={href} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-text-muted" />
            {isLast ? (
              <span className="text-primary font-semibold font-body">
                {isId && currentPageTitle ? currentPageTitle : label}
              </span>
            ) : (
              <Link
                href={href}
                className="text-text-muted hover:text-accent transition-colors font-body"
              >
                {label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
