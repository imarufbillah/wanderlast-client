import BookingsListSkeleton from "@/components/bookings/BookingCardSkeleton";

const BookingsLoading = () => (
  <div className="min-h-screen bg-background pt-16 md:pt-20">
    <div className="px-4 xl:px-20 py-8 sm:py-12">
      {/* Header skeleton */}
      <div className="mb-8 animate-pulse">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-2xl bg-border" />
          <div className="h-8 w-40 bg-border rounded-xl" />
        </div>
        <div className="h-4 w-48 bg-border rounded-lg ml-13" />
      </div>

      <BookingsListSkeleton count={3} />
    </div>
  </div>
);

export default BookingsLoading;
