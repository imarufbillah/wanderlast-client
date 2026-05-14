import Link from "next/link";
import { Compass, Luggage } from "lucide-react";

const EmptyBookings = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="relative mb-6">
        <div className="w-20 h-20 rounded-3xl bg-accent/10 flex items-center justify-center">
          <Luggage className="w-10 h-10 text-accent/60" />
        </div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-xl bg-background border border-border flex items-center justify-center">
          <Compass className="w-4 h-4 text-text-muted" />
        </div>
      </div>

      <h2 className="text-xl font-bold font-heading text-text mb-2">
        No trips booked yet
      </h2>
      <p className="text-text-muted font-body text-sm max-w-xs mb-8">
        Your upcoming and past bookings will appear here once you start
        exploring.
      </p>

      <Link
        href="/destinations"
        className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-primary font-bold font-body rounded-xl hover:bg-accent-soft transition-colors shadow-md hover:shadow-[0_0_20px_rgba(19,218,233,0.3)]"
      >
        <Compass className="w-4 h-4" />
        Explore Destinations
      </Link>
    </div>
  );
};

export default EmptyBookings;
