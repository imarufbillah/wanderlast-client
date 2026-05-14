import { getDestinationById } from "@/lib/data";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import NotFoundState from "@/components/destination-details/NotFoundState";
import TopNavigationBar from "@/components/destination-details/TopNavigationBar";
import DestinationImage from "@/components/destination-details/DestinationImage";
import DestinationHeader from "@/components/destination-details/DestinationHeader";
import QuickInfoGrid from "@/components/destination-details/QuickInfoGrid";
import DescriptionSection from "@/components/destination-details/DescriptionSection";
import BookingCard from "@/components/destination-details/BookingCard";
import HighlightsSection from "@/components/destination-details/HighlightsSection";
import IncludedSection from "@/components/destination-details/IncludedSection";
import BestSeasonSection from "@/components/destination-details/BestSeasonSection";

const DestinationDetails = async ({ params }) => {
  const { id } = await params;

  const destination = await getDestinationById(id);

  if (!destination) {
    return <NotFoundState />;
  }

  const hasDiscount = destination.discountPrice;
  const savings = hasDiscount
    ? destination.price - destination.discountPrice
    : 0;
  const discountPercent = hasDiscount
    ? Math.round((savings / destination.price) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-background pt-16 md:pt-20">
      {/* Breadcrumbs */}
      <div className="px-4 xl:px-20 pt-6">
        <Breadcrumbs currentPageTitle={destination.destinationName} />
      </div>

      {/* Top Navigation Bar */}
      <TopNavigationBar
        destinationId={destination._id}
        destinationName={destination.destinationName}
      />

      {/* Main Content - Split Layout */}
      <section className="px-4 xl:px-20 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Image */}
            <DestinationImage
              imageUrl={destination.imageUrl}
              destinationName={destination.destinationName}
              featured={destination.featured}
              popular={destination.popular}
              hasDiscount={hasDiscount}
              discountPercent={discountPercent}
            />

            {/* Right Column - Details */}
            <div className="space-y-6 sm:space-y-8">
              <DestinationHeader
                category={destination.category}
                destinationName={destination.destinationName}
                city={destination.city}
                country={destination.country}
                rating={destination.rating}
                reviewsCount={destination.reviewsCount}
                availability={destination.availability}
              />

              <QuickInfoGrid
                duration={destination.duration}
                groupSize={destination.groupSize}
                departureDate={destination.departureDate}
                difficulty={destination.difficulty}
              />

              <DescriptionSection description={destination.description} />

              <BookingCard
                price={destination.price}
                discountPrice={destination.discountPrice}
                currency={destination.currency}
                hasDiscount={hasDiscount}
                savings={savings}
                discountPercent={discountPercent}
                departureDate={destination.departureDate}
                destination={destination}
              />

              <HighlightsSection highlights={destination.highlights} />

              <IncludedSection included={destination.included} />

              <BestSeasonSection bestSeason={destination.bestSeason} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationDetails;
