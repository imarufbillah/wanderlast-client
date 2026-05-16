"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useToast } from "@/components/ui/ToastContainer";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import ActiveFilters from "./ActiveFilters";
import DestinationsGrid from "./DestinationsGrid";
import EmptyState from "./EmptyState";

const DestinationsClient = ({
  initialDestinations,
  categories,
  continents,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const toast = useToast();

  // Check for unauthorized error from proxy redirect
  useEffect(() => {
    if (searchParams.get("error") === "unauthorized") {
      toast.error("You need admin privileges to access that page");
      // Remove error param from URL
      const params = new URLSearchParams(searchParams);
      params.delete("error");
      const newUrl = params.toString() ? `${pathname}?${params}` : pathname;
      router.replace(newUrl, { scroll: false });
    }
  }, [searchParams, pathname, router, toast]);

  // Initialize state from URL params
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || "",
  );
  const [categoryFilter, setCategoryFilter] = useState(
    searchParams.get("category") || "all",
  );
  const [continentFilter, setContinentFilter] = useState(
    searchParams.get("continent") || "all",
  );
  const [priceRange, setPriceRange] = useState(
    searchParams.get("price") || "all",
  );
  const [sortBy, setSortBy] = useState(searchParams.get("sort") || "default");
  const [featuredOnly, setFeaturedOnly] = useState(
    searchParams.get("filter") === "featured",
  );

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();

    if (searchQuery) params.set("search", searchQuery);
    if (categoryFilter !== "all") params.set("category", categoryFilter);
    if (continentFilter !== "all") params.set("continent", continentFilter);
    if (priceRange !== "all") params.set("price", priceRange);
    if (sortBy !== "default") params.set("sort", sortBy);
    if (featuredOnly) params.set("filter", "featured");

    const queryString = params.toString();
    const newUrl = queryString ? `${pathname}?${queryString}` : pathname;

    // Update URL without triggering a navigation
    router.replace(newUrl, { scroll: false });
  }, [
    searchQuery,
    categoryFilter,
    continentFilter,
    priceRange,
    sortBy,
    featuredOnly,
    pathname,
    router,
  ]);

  // Filter and sort destinations
  const filteredAndSortedDestinations = useMemo(() => {
    let filtered = [...initialDestinations];

    // Featured filter (from URL)
    if (featuredOnly) {
      filtered = filtered.filter((dest) => dest.featured === true);
    }

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (dest) =>
          dest.destinationName
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          dest.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
          dest.city.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    // Category filter
    if (categoryFilter !== "all") {
      filtered = filtered.filter((dest) => dest.category === categoryFilter);
    }

    // Continent filter
    if (continentFilter !== "all") {
      filtered = filtered.filter((dest) => dest.continent === continentFilter);
    }

    // Price range filter
    if (priceRange !== "all") {
      filtered = filtered.filter((dest) => {
        const price = dest.discountPrice || dest.price;
        switch (priceRange) {
          case "0-500":
            return price <= 500;
          case "500-1000":
            return price > 500 && price <= 1000;
          case "1000-2000":
            return price > 1000 && price <= 2000;
          case "2000+":
            return price > 2000;
          default:
            return true;
        }
      });
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        filtered.sort(
          (a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price),
        );
        break;
      case "price-high":
        filtered.sort(
          (a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price),
        );
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "name":
        filtered.sort((a, b) =>
          a.destinationName.localeCompare(b.destinationName),
        );
        break;
      case "featured":
        filtered.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        });
        break;
      case "default":
      default:
        // No sorting - keep original order from API
        break;
    }

    return filtered;
  }, [
    initialDestinations,
    searchQuery,
    categoryFilter,
    continentFilter,
    priceRange,
    sortBy,
    featuredOnly,
  ]);

  // Check if any filters are active
  const hasActiveFilters =
    searchQuery ||
    categoryFilter !== "all" ||
    continentFilter !== "all" ||
    priceRange !== "all" ||
    featuredOnly;

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("");
    setCategoryFilter("all");
    setContinentFilter("all");
    setPriceRange("all");
    setFeaturedOnly(false);
    setSortBy("default");
  };

  return (
    <>
      {/* Search & Filter Section */}
      <section className="pb-8 px-4 xl:px-20">
        <div className="space-y-4">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          <FilterBar
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
            continentFilter={continentFilter}
            setContinentFilter={setContinentFilter}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            sortBy={sortBy}
            setSortBy={setSortBy}
            categories={categories}
            continents={continents}
          />

          <ActiveFilters
            hasActiveFilters={hasActiveFilters}
            clearFilters={clearFilters}
          />
        </div>
      </section>

      {/* Destinations Grid Section */}
      <section className="pb-16 sm:pb-20 md:pb-24 px-4 xl:px-20">
        {/* Results Count */}
        <div className="mb-8">
          <p className="text-text-muted font-body text-sm sm:text-base">
            Showing{" "}
            <span className="font-semibold text-primary">
              {filteredAndSortedDestinations.length}
            </span>{" "}
            {filteredAndSortedDestinations.length === 1
              ? "destination"
              : "destinations"}
            {hasActiveFilters && (
              <span className="text-accent"> (filtered)</span>
            )}
          </p>
        </div>

        {/* Grid or Empty State */}
        {filteredAndSortedDestinations.length > 0 ? (
          <DestinationsGrid destinations={filteredAndSortedDestinations} />
        ) : (
          <EmptyState
            hasActiveFilters={hasActiveFilters}
            clearFilters={clearFilters}
          />
        )}
      </section>
    </>
  );
};

export default DestinationsClient;
