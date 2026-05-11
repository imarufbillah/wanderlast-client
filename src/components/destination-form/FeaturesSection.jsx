import { TextField, Label, TextArea, FieldError } from "@heroui/react";

const FeaturesSection = ({ defaultValues = {} }) => {
  return (
    <div>
      <h3 className="text-lg sm:text-xl font-bold text-primary font-heading mb-4 sm:mb-6 pb-3 border-b border-border">
        Features
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {/* Highlights */}
        <TextField
          name="highlights"
          isRequired
          defaultValue={
            defaultValues.highlights
              ? Array.isArray(defaultValues.highlights)
                ? defaultValues.highlights.join(", ")
                : defaultValues.highlights
              : ""
          }
        >
          <Label className="text-sm font-semibold text-text font-body mb-2 block">
            Highlights <span className="text-accent">*</span>
          </Label>
          <TextArea
            placeholder="Uluwatu Temple, Ubud Monkey Forest, Seminyak Beach (comma-separated)"
            rows={3}
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text font-body placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
          />
          <FieldError className="text-xs text-red-500 mt-1.5 font-body" />
          <p className="text-xs text-text-muted font-body mt-1.5">
            Separate items with commas
          </p>
        </TextField>

        {/* Included */}
        <TextField
          name="included"
          isRequired
          defaultValue={
            defaultValues.included
              ? Array.isArray(defaultValues.included)
                ? defaultValues.included.join(", ")
                : defaultValues.included
              : ""
          }
        >
          <Label className="text-sm font-semibold text-text font-body mb-2 block">
            What&apos;s Included <span className="text-accent">*</span>
          </Label>
          <TextArea
            placeholder="Hotel, Breakfast, Airport Pickup (comma-separated)"
            rows={3}
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text font-body placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
          />
          <FieldError className="text-xs text-red-500 mt-1.5 font-body" />
          <p className="text-xs text-text-muted font-body mt-1.5">
            Separate items with commas
          </p>
        </TextField>
      </div>

      {/* Checkboxes */}
      <div className="flex flex-wrap gap-6 mt-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            name="featured"
            defaultChecked={defaultValues.featured}
            className="w-4 h-4 rounded border-border text-accent focus:ring-2 focus:ring-accent cursor-pointer"
          />
          <span className="text-sm font-medium text-text font-body">
            Featured Destination
          </span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            name="popular"
            defaultChecked={defaultValues.popular}
            className="w-4 h-4 rounded border-border text-accent focus:ring-2 focus:ring-accent cursor-pointer"
          />
          <span className="text-sm font-medium text-text font-body">
            Popular Destination
          </span>
        </label>
      </div>
    </div>
  );
};

export default FeaturesSection;
