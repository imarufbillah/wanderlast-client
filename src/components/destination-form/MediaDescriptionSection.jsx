import { TextField, Label, Input, TextArea, FieldError } from "@heroui/react";
import { Image as ImageIcon } from "lucide-react";

const MediaDescriptionSection = ({ defaultValues = {} }) => {
  return (
    <div>
      <h3 className="text-lg sm:text-xl font-bold text-primary font-heading mb-4 sm:mb-6 pb-3 border-b border-border">
        Media & Description
      </h3>
      <div className="space-y-5 sm:space-y-6">
        {/* Image URL */}
        <TextField
          name="imageUrl"
          type="url"
          isRequired
          defaultValue={defaultValues.imageUrl}
        >
          <Label className="text-sm font-semibold text-text font-body mb-2 flex items-center gap-2">
            <ImageIcon className="w-4 h-4 text-accent" />
            Image URL <span className="text-accent">*</span>
          </Label>
          <Input
            type="url"
            placeholder="https://images.unsplash.com/photo-..."
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text font-body placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
          />
          <FieldError className="text-xs text-red-500 mt-1.5 font-body" />
          <p className="text-xs text-text-muted font-body mt-1.5">
            Provide a high-quality image URL for the destination banner
          </p>
        </TextField>

        {/* Description */}
        <TextField
          name="description"
          isRequired
          defaultValue={defaultValues.description}
        >
          <Label className="text-sm font-semibold text-text font-body mb-2 block">
            Description <span className="text-accent">*</span>
          </Label>
          <TextArea
            placeholder="Describe the travel experience, highlights, and what makes this destination special..."
            rows={6}
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text font-body placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
          />
          <FieldError className="text-xs text-red-500 mt-1.5 font-body" />
          <p className="text-xs text-text-muted font-body mt-1.5">
            Minimum 50 characters recommended
          </p>
        </TextField>
      </div>
    </div>
  );
};

export default MediaDescriptionSection;
