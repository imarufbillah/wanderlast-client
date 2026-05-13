"use client";

import { Tag, Globe, DollarSign, ArrowUpDown } from "lucide-react";
import CustomSelect from "@/components/ui/CustomSelect";

const priceOptions = [
  { value: "all", label: "All Prices" },
  { value: "0-500", label: "$0 - $500" },
  { value: "500-1000", label: "$500 - $1,000" },
  { value: "1000-2000", label: "$1,000 - $2,000" },
  { value: "2000+", label: "$2,000+" },
];

const sortOptions = [
  { value: "default", label: "Default" },
  { value: "featured", label: "Featured First" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "name", label: "Name (A-Z)" },
];

const FilterBar = ({
  categoryFilter,
  setCategoryFilter,
  continentFilter,
  setContinentFilter,
  priceRange,
  setPriceRange,
  sortBy,
  setSortBy,
  categories = [],
  continents = [],
}) => {
  const categoryOptions = [
    { value: "all", label: "All Categories" },
    ...categories.map((c) => ({ value: c, label: c })),
  ];

  const continentOptions = [
    { value: "all", label: "All Continents" },
    ...continents.map((c) => ({ value: c, label: c })),
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Category Filter */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-text font-body block">
          Category
        </label>
        <CustomSelect
          value={categoryFilter}
          onChange={setCategoryFilter}
          options={categoryOptions}
          placeholder="Select category"
          icon={Tag}
        />
      </div>

      {/* Continent Filter */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-text font-body block">
          Continent
        </label>
        <CustomSelect
          value={continentFilter}
          onChange={setContinentFilter}
          options={continentOptions}
          placeholder="Select continent"
          icon={Globe}
        />
      </div>

      {/* Price Range Filter */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-text font-body block">
          Price Range
        </label>
        <CustomSelect
          value={priceRange}
          onChange={setPriceRange}
          options={priceOptions}
          placeholder="Select price range"
          icon={DollarSign}
        />
      </div>

      {/* Sort By */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-text font-body block">
          Sort By
        </label>
        <CustomSelect
          value={sortBy}
          onChange={setSortBy}
          options={sortOptions}
          placeholder="Sort by"
          icon={ArrowUpDown}
        />
      </div>
    </div>
  );
};

export default FilterBar;
