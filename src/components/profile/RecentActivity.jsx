import Link from "next/link";
import { MapPin, Clock, ArrowRight, Compass } from "lucide-react";

// Placeholder activity items — replace with real booking data when API is ready
const MOCK_ACTIVITY = [
  {
    id: 1,
    type: "booking",
    destination: "Santorini, Greece",
    date: "May 2, 2026",
    status: "Upcoming",
    statusColor: "text-accent bg-accent/10",
  },
  {
    id: 2,
    type: "booking",
    destination: "Bali, Indonesia",
    date: "Mar 15, 2026",
    status: "Completed",
    statusColor: "text-success bg-success/10",
  },
  {
    id: 3,
    type: "booking",
    destination: "Kyoto, Japan",
    date: "Jan 8, 2026",
    status: "Completed",
    statusColor: "text-success bg-success/10",
  },
];

const ActivityRow = ({ item }) => (
  <div className="flex items-center justify-between gap-4 py-4 border-b border-border last:border-0">
    <div className="flex items-center gap-3 min-w-0">
      <div className="w-9 h-9 rounded-xl bg-background flex items-center justify-center shrink-0">
        <MapPin className="w-4 h-4 text-accent" />
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold font-body text-text truncate">
          {item.destination}
        </p>
        <p className="text-xs text-text-muted font-body flex items-center gap-1 mt-0.5">
          <Clock className="w-3 h-3" />
          {item.date}
        </p>
      </div>
    </div>
    <span
      className={`shrink-0 text-xs font-semibold font-body px-2.5 py-1 rounded-full ${item.statusColor}`}
    >
      {item.status}
    </span>
  </div>
);

const RecentActivity = ({ isEmpty = false }) => {
  const items = isEmpty ? [] : MOCK_ACTIVITY;

  return (
    <div className="bg-surface rounded-3xl border border-border p-6 sm:p-8">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-bold font-heading text-text">
          Recent Activity
        </h2>
        {items.length > 0 && (
          <Link
            href="/bookings"
            className="text-sm text-accent font-semibold font-body flex items-center gap-1 hover:gap-2 transition-all"
          >
            View all <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>

      {items.length === 0 ? (
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
          {items.map((item) => (
            <ActivityRow key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentActivity;
