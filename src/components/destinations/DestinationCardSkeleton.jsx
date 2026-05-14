const DestinationCardSkeleton = () => (
  <div className="bg-surface rounded-3xl overflow-hidden shadow-lg animate-pulse">
    {/* Image placeholder */}
    <div className="aspect-4/5 bg-border" />
  </div>
);

const DestinationsGridSkeleton = ({ count = 6 }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
    {Array.from({ length: count }).map((_, i) => (
      <DestinationCardSkeleton key={i} />
    ))}
  </div>
);

export { DestinationCardSkeleton };
export default DestinationsGridSkeleton;
