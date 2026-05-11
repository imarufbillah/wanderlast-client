import { TextField, Label, Input, FieldError } from "@heroui/react";
import { Star } from "lucide-react";

const RatingReviewsSection = ({ defaultValues = {} }) => {
  return (
    <div>
      <h3 className="text-lg sm:text-xl font-bold text-primary font-heading mb-4 sm:mb-6 pb-3 border-b border-border">
        Rating & Reviews
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {/* Rating */}
        <TextField
          name="rating"
          type="number"
          isRequired
          defaultValue={defaultValues.rating}
        >
          <Label className="text-sm font-semibold text-text font-body mb-2 flex items-center gap-2">
            <Star className="w-4 h-4 text-accent" />
            Rating <span className="text-accent">*</span>
          </Label>
          <Input
            type="number"
            placeholder="4.8"
            min="0"
            max="5"
            step="0.1"
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text font-body placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
          />
          <FieldError className="text-xs text-red-500 mt-1.5 font-body" />
        </TextField>

        {/* Reviews Count */}
        <TextField
          name="reviewsCount"
          type="number"
          isRequired
          defaultValue={defaultValues.reviewsCount}
        >
          <Label className="text-sm font-semibold text-text font-body mb-2 block">
            Reviews Count <span className="text-accent">*</span>
          </Label>
          <Input
            type="number"
            placeholder="1247"
            min="0"
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text font-body placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
          />
          <FieldError className="text-xs text-red-500 mt-1.5 font-body" />
        </TextField>
      </div>
    </div>
  );
};

export default RatingReviewsSection;
