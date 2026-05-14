import Link from "next/link";
import { MapPin, Clock, ArrowRight, Compass } from "lucide-react";

const STATUS_STYLES = {
  upcoming: "text-accent bg-accent/10",
  completed: "text-success bg-success/10",
  cancelled: "text-red-500 bg-red-50",
};

const ActivityRow = ({ booking }) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const departure = new Date(booking.departureDate);
  const status =
    booking.status ?? (departure >= today ? "upcoming" : "completed");

  const formattedDate = booking.departureDate
    ? new Date(booking.departureDate).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "—";

  return (
    <div className="flex items-center justify-between gap-4 py-4 border-b border-border last:border-0">
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-9 h-9 rounded-xl bg-background flex items-center justify-center shrink-0">
          <MapPin className="w-4 h-4 text-accent" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold font-body text-text truncate">
            {booking.destinationName}
          </p>
          <p className="text-xs text-text-muted font-body flex items-center gap-1 mt-0.5">
            <Clock className="w-3 h-3" />
            {formattedDate}
          </p>
        </div>
      </div>
      <span
        className={`shrink-0 text-xs font-semibold font-body px-2.5 py-1 rounded-full capitalize ${
          STATUS_STYLES[status] ?? STATUS_STYLES.upcoming
        }`}
      >
        {status}
      </span>
    </div>
  );
};

// Shows the 3 most recent bookings; receives real data from the profile page
const RecentActivity = ({ bookings = [] }) => {
  const recent = bookings.slice(0, 3);

  return (
    <div className="bg-surface rounded-3xl border border-border p-6 sm:p-8">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-bold font-heading text-text">
          Recent Activity
        </h2>
        {recent.length > 0 && (
          <Link
            href="/bookings"
            className="text-sm text-accent font-semibold font-body flex items-center gap-1 hover:gap-2 transition-all"
          >
            View all <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>

      {recent.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-14 h-14 rounded-2xl bg-background flex items-center justify-center mb-4">
            <Compass className="w-7 h-7 text-text-muted" />
          </div>
          <p className="text-text font-semibold font-body">No trips yet</p>
          <p className="text-sm text-text-muted font-body mt-1 max-w-xs">
            Your bookings and travel history will appear here once you start
            exploring.
          </p>
          <Link
            href="/destinations"
            className="mt-5 px-5 py-2.5 bg-accent text-primary font-semibold font-body text-sm rounded-xl hover:bg-accent-soft transition-colors"
          >
            Explore Destinations
          </Link>
        </div>
      ) : (
        <div>
          {recent.map((booking) => (
            <ActivityRow key={booking._id} booking={booking} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentActivity;
