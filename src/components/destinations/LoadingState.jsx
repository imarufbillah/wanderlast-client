import DestinationsGridSkeleton from "./DestinationCardSkeleton";

// Used as the Suspense fallback inside DestinationsPage
const LoadingState = () => (
  <div className="px-4 xl:px-20 pb-20">
    <div className="h-5 w-32 bg-border rounded-lg animate-pulse mb-8" />
    <DestinationsGridSkeleton count={6} />
  </div>
);

export default LoadingState;
