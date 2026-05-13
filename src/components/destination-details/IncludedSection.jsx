import { Check } from "lucide-react";

const IncludedSection = ({ included }) => {
  return (
    <div className="p-6 bg-surface rounded-2xl border border-border shadow-sm">
      <h2 className="text-xl sm:text-2xl font-bold text-primary font-heading mb-4">
        What&apos;s <span className="text-accent">Included</span>
      </h2>
      <div className="space-y-3">
        {included.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="shrink-0 w-6 h-6 bg-success/10 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-success" />
            </div>
            <span className="text-sm text-text font-body">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IncludedSection;
