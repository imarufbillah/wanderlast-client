"use client";

import { Search, X } from "lucide-react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted pointer-events-none" />
      <input
        type="search"
        placeholder="Search by destination, country, or city..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-border bg-surface text-text font-body placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all shadow-sm"
      />
      {searchQuery && (
        <button
          onClick={() => setSearchQuery("")}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-background rounded-lg transition-colors"
          aria-label="Clear search"
        >
          <X className="w-4 h-4 text-text-muted" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
