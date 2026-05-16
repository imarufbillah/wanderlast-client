import { Suspense } from "react";
import {
  getAllDestinations,
  getAllCategories,
  getAllContinents,
} from "@/lib/data";
import DestinationsHeader from "@/components/destinations/DestinationsHeader";
import DestinationsClient from "@/components/destinations/DestinationsClient";
import LoadingState from "@/components/destinations/LoadingState";

export const dynamic = "force-dynamic";

const DestinationsPage = async () => {
  const [destinations, categories, continents] = await Promise.all([
    getAllDestinations(),
    getAllCategories(),
    getAllContinents(),
  ]);

  return (
    <div className="min-h-screen bg-background pt-16 md:pt-20">
      <DestinationsHeader />

      <Suspense fallback={<LoadingState />}>
        <DestinationsClient
          initialDestinations={destinations}
          categories={categories}
          continents={continents}
        />
      </Suspense>
    </div>
  );
};

export default DestinationsPage;
