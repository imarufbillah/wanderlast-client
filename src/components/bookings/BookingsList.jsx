"use client";

import { useState } from "react";
import BookingCard from "./BookingCard";
import EmptyBookings from "./EmptyBookings";

const BookingsList = ({ initialBookings }) => {
  const [bookings, setBookings] = useState(initialBookings);

  const handleCancelled = (cancelledId) => {
    setBookings((prev) => prev.filter((b) => b._id !== cancelledId));
  };

  if (bookings.length === 0) return <EmptyBookings />;

  return (
    <div className="space-y-4">
      {bookings.map((booking) => (
        <BookingCard
          key={booking._id}
          booking={booking}
          onCancelled={handleCancelled}
        />
      ))}
    </div>
  );
};

export default BookingsList;
