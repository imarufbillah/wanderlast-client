import { TextField, Label, Input, FieldError } from "@heroui/react";

const BasicInformationSection = ({ defaultValues = {} }) => {
  const categories = [
    "Beach",
    "Mountain",
    "City",
    "Adventure",
    "Cultural",
    "Luxury",
    "Wildlife",
    "Historical",
  ];

  const continents = [
    "Africa",
    "Antarctica",
    "Asia",
    "Europe",
    "North America",
    "Oceania",
    "South America",
  ];

  return (
    <div>
      <h3 className="text-lg sm:text-xl font-bold text-primary font-heading mb-4 sm:mb-6 pb-3 border-b border-border">
        Basic Information
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {/* Destination Name */}
        <div className="md:col-span-2">
          <TextField
            name="destinationName"
            isRequired
            defaultValue={defaultValues.destinationName}
          >
            <Label className="text-sm font-semibold text-text font-body mb-2 block">
              Destination Name <span className="text-accent">*</span>
            </Label>
            <Input
              placeholder="e.g., Bali Paradise"
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text font-body placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
            />
            <FieldError className="text-xs text-red-500 mt-1.5 font-body" />
          </TextField>
        </div>

        {/* Country */}
        <TextField
          name="country"
          isRequired
          defaultValue={defaultValues.country}
        >
          <Label className="text-sm font-semibold text-text font-body mb-2 block">
            Country <span className="text-accent">*</span>
          </Label>
          <Input
            placeholder="e.g., Indonesia"
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text font-body placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
          />
          <FieldError className="text-xs text-red-500 mt-1.5 font-body" />
        </TextField>

        {/* City */}
        <TextField name="city" isRequired defaultValue={defaultValues.city}>
          <Label className="text-sm font-semibold text-text font-body mb-2 block">
            City <span className="text-accent">*</span>
          </Label>
          <Input
            placeholder="e.g., Ubud"
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text font-body placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
          />
          <FieldError className="text-xs text-red-500 mt-1.5 font-body" />
        </TextField>

        {/* Continent */}
        <div>
          <Label className="text-sm font-semibold text-text font-body mb-2 block">
            Continent <span className="text-accent">*</span>
          </Label>
          <select
            name="continent"
            required
            defaultValue={defaultValues.continent || ""}
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all cursor-pointer"
          >
            <option value="">Select continent</option>
            {continents.map((continent) => (
              <option key={continent} value={continent}>
                {continent}
              </option>
            ))}
          </select>
        </div>

        {/* Category */}
        <div>
          <Label className="text-sm font-semibold text-text font-body mb-2 block">
            Category <span className="text-accent">*</span>
          </Label>
          <select
            name="category"
            required
            defaultValue={defaultValues.category || ""}
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all cursor-pointer"
          >
            <option value="">Select category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default BasicInformationSection;
