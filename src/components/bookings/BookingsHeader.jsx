import { Luggage } from "lucide-react";

const BookingsHeader = ({ count }) => {
  return (
    <div className="mb-8 sm:mb-10">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-2xl bg-accent/10 flex items-center justify-center">
          <Luggage className="w-5 h-5 text-accent" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold font-heading text-text">
          My Bookings
        </h1>
      </div>
      <p className="text-text-muted font-body text-sm sm:text-base pl-13">
        {count === 0
          ? "You have no bookings yet."
          : `You have ${count} ${count === 1 ? "booking" : "bookings"}.`}
      </p>
    </div>
  );
};

export default BookingsHeader;
