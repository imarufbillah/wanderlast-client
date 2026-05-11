import { Check } from "lucide-react";

const HighlightsSection = ({ highlights }) => {
  return (
    <div className="p-6 bg-surface rounded-2xl border border-border shadow-sm">
      <h2 className="text-xl sm:text-2xl font-bold text-primary font-heading mb-4">
        Trip <span className="text-accent">Highlights</span>
      </h2>
      <div className="space-y-3">
        {highlights.map((highlight, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="shrink-0 w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center mt-0.5">
              <Check className="w-4 h-4 text-accent" />
            </div>
            <span className="text-sm text-text font-body">{highlight}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighlightsSection;
