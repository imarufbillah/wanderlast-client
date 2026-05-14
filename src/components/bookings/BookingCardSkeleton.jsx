const BookingCardSkeleton = () => (
  <div className="bg-surface rounded-3xl border border-border overflow-hidden animate-pulse">
    <div className="flex flex-col sm:flex-row">
      {/* Image */}
      <div className="w-full sm:w-44 h-44 bg-border shrink-0" />
      {/* Content */}
      <div className="flex-1 p-5 sm:p-6 space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div className="h-5 w-40 bg-border rounded-lg" />
          <div className="h-6 w-20 bg-border rounded-full" />
        </div>
        <div className="space-y-2">
          <div className="h-4 w-32 bg-border rounded-lg" />
          <div className="h-4 w-24 bg-border rounded-lg" />
        </div>
        <div className="h-3 w-48 bg-border rounded-lg" />
        <div className="pt-4 border-t border-border flex items-center justify-between">
          <div className="h-4 w-28 bg-border rounded-lg" />
          <div className="h-8 w-20 bg-border rounded-xl" />
        </div>
      </div>
    </div>
  </div>
);

const BookingsListSkeleton = ({ count = 3 }) => (
  <div className="space-y-4">
    {Array.from({ length: count }).map((_, i) => (
      <BookingCardSkeleton key={i} />
    ))}
  </div>
);

export { BookingCardSkeleton };
export default BookingsListSkeleton;
