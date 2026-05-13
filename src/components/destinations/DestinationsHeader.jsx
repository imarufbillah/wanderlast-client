import Link from "next/link";
import { Plus } from "lucide-react";

const DestinationsHeader = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 xl:px-20">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary font-heading mb-4">
            All <span className="text-accent">Destinations</span>
          </h1>
          <p className="text-base sm:text-lg text-text-muted font-body">
            Discover amazing places around the world and start planning your
            next adventure
          </p>
        </div>

        {/* Add New Destination Button */}
        <Link
          href="/destinations/new"
          className="shrink-0 flex items-center justify-center gap-2 px-6 py-3.5 bg-linear-to-r from-accent to-accent-soft text-surface font-bold font-body rounded-xl hover:shadow-[0_0_30px_rgba(19,218,233,0.4)] transition-all shadow-lg"
        >
          <Plus className="w-5 h-5" />
          <span className="hidden sm:inline">Add New Destination</span>
          <span className="sm:hidden">Add New</span>
        </Link>
      </div>
    </section>
  );
};

export default DestinationsHeader;
