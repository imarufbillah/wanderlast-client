import Link from "next/link";
import { MapPin, ArrowLeft } from "lucide-react";

const NotFoundState = () => {
  return (
    <div className="min-h-screen bg-background pt-16 md:pt-20 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-3xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
          <MapPin className="w-8 h-8 text-accent" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-heading text-primary mb-3">
          Destination <span className="text-accent">Not Found</span>
        </h1>
        <p className="text-text-muted font-body mb-8">
          The destination you're looking for doesn't exist or may have been
          removed.
        </p>
        <Link
          href="/destinations"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-primary font-bold font-body rounded-xl hover:bg-accent-soft active:scale-95 transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Destinations
        </Link>
      </div>
    </div>
  );
};

export default NotFoundState;
