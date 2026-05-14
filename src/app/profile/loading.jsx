import TravelStatsSkeleton from "@/components/profile/StatCardSkeleton";

const ProfileLoading = () => (
  <div className="min-h-screen bg-background pt-16 md:pt-20">
    <div className="px-4 xl:px-20 py-8 sm:py-12 animate-pulse">
      {/* Hero skeleton */}
      <div className="relative mb-8">
        <div className="h-44 sm:h-56 w-full bg-border rounded-3xl" />
        <div className="px-6 sm:px-8 -mt-14 sm:-mt-16 flex items-end gap-4">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-border ring-4 ring-surface shrink-0" />
          <div className="pb-3 space-y-2">
            <div className="h-7 w-48 bg-border rounded-xl" />
            <div className="h-4 w-36 bg-border rounded-lg" />
          </div>
        </div>
      </div>

      {/* Content grid skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8">
        {/* Left column */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-surface rounded-3xl border border-border p-6 sm:p-8 space-y-5">
            <div className="h-6 w-28 bg-border rounded-lg" />
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="h-4 w-20 bg-border rounded" />
                <div className="h-11 w-full bg-border rounded-xl" />
              </div>
            ))}
            <div className="h-12 w-full bg-border rounded-xl" />
          </div>
          <div className="bg-surface rounded-3xl border border-border p-6 sm:p-8 space-y-4">
            <div className="h-6 w-20 bg-border rounded-lg" />
            <div className="h-16 w-full bg-border rounded-2xl" />
            <div className="h-14 w-full bg-border rounded-2xl" />
          </div>
        </div>

        {/* Right column */}
        <div className="lg:col-span-2 space-y-6">
          <TravelStatsSkeleton />
          <div className="bg-surface rounded-3xl border border-border p-6 sm:p-8 space-y-4">
            <div className="h-6 w-36 bg-border rounded-lg" />
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3 py-4 border-b border-border last:border-0">
                <div className="w-9 h-9 rounded-xl bg-border shrink-0" />
                <div className="flex-1 space-y-1.5">
                  <div className="h-4 w-36 bg-border rounded" />
                  <div className="h-3 w-24 bg-border rounded" />
                </div>
                <div className="h-6 w-16 bg-border rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProfileLoading;
