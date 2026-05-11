import { TextField, Label, Input, FieldError } from "@heroui/react";
import { Clock, Calendar, Users } from "lucide-react";

const ScheduleDetailsSection = ({
  defaultValues = {},
  departureDate,
  setDepartureDate,
}) => {
  const availabilityOptions = ["Available", "Limited", "Sold Out"];
  const difficultyLevels = ["Easy", "Moderate", "Challenging", "Difficult"];

  return (
    <div>
      <h3 className="text-lg sm:text-xl font-bold text-primary font-heading mb-4 sm:mb-6 pb-3 border-b border-border">
        Schedule & Details
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {/* Duration */}
        <TextField
          name="duration"
          isRequired
          defaultValue={defaultValues.duration}
        >
          <Label className="text-sm font-semibold text-text font-body mb-2 flex items-center gap-2">
            <Clock className="w-4 h-4 text-accent" />
            Duration <span className="text-accent">*</span>
          </Label>
          <Input
            placeholder="7 Days / 6 Nights"
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text font-body placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
          />
          <FieldError className="text-xs text-red-500 mt-1.5 font-body" />
        </TextField>

        {/* Departure Date */}
        <TextField
          name="departureDate"
          type="date"
          isRequired
          defaultValue={departureDate}
        >
          <Label className="text-sm font-semibold text-text font-body mb-2 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-accent" />
            Departure Date <span className="text-accent">*</span>
          </Label>
          <Input
            type="date"
            value={departureDate}
            onChange={(e) =>
              setDepartureDate && setDepartureDate(e.target.value)
            }
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
          />
          <FieldError className="text-xs text-red-500 mt-1.5 font-body" />
        </TextField>

        {/* Group Size */}
        <TextField
          name="groupSize"
          isRequired
          defaultValue={defaultValues.groupSize}
        >
          <Label className="text-sm font-semibold text-text font-body mb-2 flex items-center gap-2">
            <Users className="w-4 h-4 text-accent" />
            Group Size <span className="text-accent">*</span>
          </Label>
          <Input
            placeholder="2-10 People"
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text font-body placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
          />
          <FieldError className="text-xs text-red-500 mt-1.5 font-body" />
        </TextField>

        {/* Availability */}
        <div>
          <Label className="text-sm font-semibold text-text font-body mb-2 block">
            Availability <span className="text-accent">*</span>
          </Label>
          <select
            name="availability"
            required
            defaultValue={defaultValues.availability || "Available"}
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all cursor-pointer"
          >
            {availabilityOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Difficulty */}
        <div>
          <Label className="text-sm font-semibold text-text font-body mb-2 block">
            Difficulty <span className="text-accent">*</span>
          </Label>
          <select
            name="difficulty"
            required
            defaultValue={defaultValues.difficulty || ""}
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all cursor-pointer"
          >
            <option value="">Select difficulty</option>
            {difficultyLevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>

        {/* Best Season */}
        <TextField
          name="bestSeason"
          isRequired
          defaultValue={defaultValues.bestSeason}
        >
          <Label className="text-sm font-semibold text-text font-body mb-2 block">
            Best Season <span className="text-accent">*</span>
          </Label>
          <Input
            placeholder="April - October"
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text font-body placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
          />
          <FieldError className="text-xs text-red-500 mt-1.5 font-body" />
        </TextField>
      </div>
    </div>
  );
};

export default ScheduleDetailsSection;
