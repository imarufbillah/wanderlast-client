import { Clock, Users, Calendar, Award } from "lucide-react";

const QuickInfoGrid = ({ duration, groupSize, departureDate, difficulty }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="p-4 bg-surface rounded-2xl border border-border shadow-sm hover:shadow-md transition-all">
        <Clock className="w-6 h-6 text-accent mb-2" />
        <p className="text-xs text-text-muted font-body mb-1">Duration</p>
        <p className="text-sm font-bold text-primary font-body">{duration}</p>
      </div>
      <div className="p-4 bg-surface rounded-2xl border border-border shadow-sm hover:shadow-md transition-all">
        <Users className="w-6 h-6 text-accent mb-2" />
        <p className="text-xs text-text-muted font-body mb-1">Group Size</p>
        <p className="text-sm font-bold text-primary font-body">{groupSize}</p>
      </div>
      <div className="p-4 bg-surface rounded-2xl border border-border shadow-sm hover:shadow-md transition-all">
        <Calendar className="w-6 h-6 text-accent mb-2" />
        <p className="text-xs text-text-muted font-body mb-1">Departure</p>
        <p className="text-sm font-bold text-primary font-body">
          {new Date(departureDate).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </div>
      <div className="p-4 bg-surface rounded-2xl border border-border shadow-sm hover:shadow-md transition-all">
        <Award className="w-6 h-6 text-accent mb-2" />
        <p className="text-xs text-text-muted font-body mb-1">Difficulty</p>
        <p className="text-sm font-bold text-primary font-body">{difficulty}</p>
      </div>
    </div>
  );
};

export default QuickInfoGrid;
