const StatCardSkeleton = () => (
  <div className="rounded-2xl p-5 border border-border bg-surface animate-pulse space-y-3">
    <div className="w-10 h-10 rounded-xl bg-border" />
    <div className="h-8 w-12 bg-border rounded-lg" />
    <div className="h-4 w-28 bg-border rounded-lg" />
  </div>
);

const TravelStatsSkeleton = () => (
  <div>
    <div className="h-6 w-36 bg-border rounded-lg animate-pulse mb-4" />
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <StatCardSkeleton key={i} />
      ))}
    </div>
  </div>
);

export { StatCardSkeleton };
export default TravelStatsSkeleton;
