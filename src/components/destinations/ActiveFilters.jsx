"use client";

import { Filter, X } from "lucide-react";

const ActiveFilters = ({ hasActiveFilters, clearFilters }) => {
  if (!hasActiveFilters) return null;

  return (
    <div className="flex items-center justify-between gap-4 p-4 bg-accent/5 rounded-xl border border-accent/20">
      <div className="flex items-center gap-2 text-sm text-text-muted font-body">
        <Filter className="w-4 h-4 text-accent" />
        <span>Filters active</span>
      </div>
      <button
        onClick={clearFilters}
        className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-accent hover:text-accent-soft transition-colors"
      >
        <X className="w-4 h-4" />
        Clear All
      </button>
    </div>
  );
};

export default ActiveFilters;
