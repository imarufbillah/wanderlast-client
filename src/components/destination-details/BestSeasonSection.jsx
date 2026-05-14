import { Calendar } from "lucide-react";

const BestSeasonSection = ({ bestSeason }) => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-primary font-heading mb-4">
        Best Time to Visit
      </h3>
      <div className="p-6 bg-linear-to-br from-accent/5 to-accent-soft/5 rounded-2xl border border-accent/20">
        <div className="flex items-start gap-4">
          <div className="shrink-0 p-3 bg-accent/10 rounded-xl">
            <Calendar className="w-6 h-6 text-accent" />
          </div>
          <div>
            <p className="text-base text-text font-body leading-relaxed">
              {bestSeason}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeasonSection;
