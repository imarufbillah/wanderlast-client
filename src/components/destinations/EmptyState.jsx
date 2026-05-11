import { MapPin, Search } from "lucide-react";

const EmptyState = ({ hasActiveFilters, clearFilters }) => {
  return (
    <div className="text-center py-20">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-6">
        {hasActiveFilters ? (
          <Search className="w-10 h-10 text-accent" />
        ) : (
          <MapPin className="w-10 h-10 text-accent" />
        )}
      </div>
      <h3 className="text-2xl font-bold text-primary font-heading mb-3">
        {hasActiveFilters
          ? "No Destinations Found"
          : "No Destinations Available"}
      </h3>
      <p className="text-text-muted font-body mb-6">
        {hasActiveFilters ? (
          <>
            Try adjusting your search or filters to find what you&apos;re
            looking for.
          </>
        ) : (
          <>We couldn&apos;t find any destinations. Please try again later.</>
        )}
      </p>
      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="px-6 py-3 bg-accent text-surface font-semibold font-body rounded-xl hover:bg-accent-soft transition-colors shadow-lg"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );
};

export default EmptyState;
