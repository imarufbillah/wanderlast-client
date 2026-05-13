import DestinationCard from "./DestinationCard";

const DestinationsGrid = ({ destinations }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {destinations.map((destination) => (
        <DestinationCard key={destination._id} destination={destination} />
      ))}
    </div>
  );
};

export default DestinationsGrid;
