import { Luggage, Globe, MapPin, BookMarked } from "lucide-react";

const StatCard = ({ icon: Icon, label, value, accent = false }) => (
  <div
    className={`relative overflow-hidden rounded-2xl p-5 border transition-all hover:-translate-y-0.5 hover:shadow-md ${
      accent
        ? "bg-linear-to-br from-accent/15 to-accent-soft/10 border-accent/30"
        : "bg-surface border-border"
    }`}
  >
    {/* Background icon watermark */}
    <Icon
      className={`absolute -bottom-3 -right-3 w-20 h-20 opacity-5 ${
        accent ? "text-accent" : "text-text"
      }`}
    />

    <div
      className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
        accent ? "bg-accent/20" : "bg-background"
      }`}
    >
      <Icon
        className={`w-5 h-5 ${accent ? "text-accent" : "text-text-muted"}`}
      />
    </div>

    <p className="text-3xl font-bold font-heading text-text">{value}</p>
    <p className="text-sm text-text-muted font-body mt-0.5">{label}</p>
  </div>
);

const TravelStats = ({ stats }) => {
  const items = [
    {
      icon: Luggage,
      label: "Total Bookings",
      value: stats?.totalBookings ?? 0,
      accent: true,
    },
    {
      icon: Globe,
      label: "Countries Visited",
      value: stats?.countriesVisited ?? 0,
    },
    {
      icon: MapPin,
      label: "Destinations Explored",
      value: stats?.destinationsExplored ?? 0,
    },
    {
      icon: BookMarked,
      label: "Trips Planned",
      value: stats?.tripsPlanned ?? 0,
    },
  ];

  return (
    <div>
      <h2 className="text-lg font-bold font-heading text-text mb-4">
        Travel Statistics
      </h2>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        {items.map((item) => (
          <StatCard key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TravelStats;
