import { Suspense } from "react";
import { getAllDestinations } from "@/lib/data";
import DestinationsHeader from "@/components/destinations/DestinationsHeader";
import DestinationsClient from "@/components/destinations/DestinationsClient";
import LoadingState from "@/components/destinations/LoadingState";

const DestinationsPage = async () => {
  const destinations = await getAllDestinations();

  return (
    <div className="min-h-screen bg-background pt-16 md:pt-20">
      <DestinationsHeader />
      
      <Suspense fallback={<LoadingState />}>
        <DestinationsClient initialDestinations={destinations} />
      </Suspense>
    </div>
  );
};

export default DestinationsPage;
