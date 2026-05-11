import Link from "next/link";
import { ChevronLeft, Edit } from "lucide-react";
import DeleteDestination from "./DeleteDestination";

const TopNavigationBar = ({ destinationId, destinationName }) => {
  return (
    <div className="px-4 xl:px-20 py-6">
      <div className="flex items-center justify-between gap-4">
        {/* Back Button */}
        <Link
          href="/destinations"
          className="inline-flex items-center gap-2 px-4 py-2 bg-surface backdrop-blur-md rounded-full shadow-lg hover:shadow-xl transition-all text-primary font-body font-semibold border border-border hover:border-accent"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Back to Destinations</span>
        </Link>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href={`/destinations/${destinationId}/edit`}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 backdrop-blur-md rounded-full shadow-lg hover:shadow-xl transition-all text-accent font-body font-semibold border border-accent/20 hover:bg-accent/20"
          >
            <Edit className="w-5 h-5" />
            <span className="hidden sm:inline">Edit</span>
          </Link>
          <DeleteDestination
            id={destinationId}
            destinationName={destinationName}
          />
        </div>
      </div>
    </div>
  );
};

export default TopNavigationBar;
