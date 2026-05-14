import DestinationsGridSkeleton from "@/components/destinations/DestinationCardSkeleton";

const DestinationsLoading = () => (
  <div className="min-h-screen bg-background pt-16 md:pt-20">
    {/* Header skeleton */}
    <div className="px-4 xl:px-20 py-10 sm:py-14 animate-pulse">
      <div className="h-10 w-64 bg-border rounded-xl mb-3" />
      <div className="h-5 w-96 bg-border rounded-lg" />
    </div>

    {/* Search + filter skeleton */}
    <div className="px-4 xl:px-20 pb-8 space-y-4 animate-pulse">
      <div className="h-12 w-full bg-border rounded-2xl" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-12 bg-border rounded-xl" />
        ))}
      </div>
    </div>

    {/* Grid skeleton */}
    <div className="px-4 xl:px-20 pb-20">
      <div className="h-5 w-32 bg-border rounded-lg animate-pulse mb-8" />
      <DestinationsGridSkeleton count={6} />
    </div>
  </div>
);

export default DestinationsLoading;
