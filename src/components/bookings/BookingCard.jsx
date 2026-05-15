"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  CalendarDays,
  Users,
  MapPin,
  Trash2,
  ArrowRight,
  Loader2,
} from "lucide-react";
import BookingStatusBadge from "./BookingStatusBadge";
import { deleteBooking } from "@/lib/api-client";
import { useToast } from "@/components/ui/ToastContainer";

const BookingCard = ({ booking, onCancelled }) => {
  const toast = useToast();
  const [isCancelling, setIsCancelling] = useState(false);
  const [imgError, setImgError] = useState(false);

  const formattedDate = booking.departureDate
    ? new Date(booking.departureDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "—";

  // Derive status from departure date — extend with a real status field when API supports it
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const departure = new Date(booking.departureDate);
  const status =
    booking.status ?? (departure >= today ? "upcoming" : "completed");

  const handleCancel = async () => {
    setIsCancelling(true);
    try {
      await deleteBooking(booking._id);
      toast.success(`Booking for ${booking.destinationName} cancelled.`);
      onCancelled(booking._id);
    } catch (error) {
      toast.error(
        error.message || "Could not cancel booking. Please try again.",
      );
    } finally {
      setIsCancelling(false);
    }
  };

  return (
    <div className="group bg-surface rounded-3xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
      <div className="flex flex-col sm:flex-row">
        {/* Destination image */}
        <div className="relative w-full sm:w-44 h-44 sm:h-auto shrink-0 overflow-hidden">
          {booking.destinationImage && !imgError ? (
            <Image
              src={booking.destinationImage}
              alt={booking.destinationName}
              fill
              sizes="(max-width: 640px) 100vw, 176px"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full bg-linear-to-br from-secondary to-primary flex items-center justify-center">
              <MapPin className="w-8 h-8 text-accent/60" />
            </div>
          )}
          {/* Gradient overlay on mobile */}
          <div className="absolute inset-0 bg-linear-to-t from-primary/60 to-transparent sm:hidden" />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between flex-1 p-5 sm:p-6">
          <div>
            {/* Top row — name + status */}
            <div className="flex items-start justify-between gap-3 mb-3">
              <h3 className="text-base sm:text-lg font-bold font-heading text-text leading-tight">
                {booking.destinationName}
              </h3>
              <BookingStatusBadge status={status} />
            </div>

            {/* Meta info */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-text-muted font-body">
              <span className="flex items-center gap-1.5">
                <CalendarDays className="w-4 h-4 text-accent shrink-0" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-accent shrink-0" />
                {booking.travelers}{" "}
                {booking.travelers === "1" ? "traveler" : "travelers"}
              </span>
            </div>

            {/* Booking ID */}
            <p className="mt-3 text-xs text-text-muted/60 font-body">
              ID: {booking._id}
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 mt-5 pt-4 border-t border-border">
            <Link
              href={`/destinations/${booking.destinationId}`}
              className="flex items-center gap-1.5 text-sm font-semibold font-body text-accent hover:text-accent-soft transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-lg"
            >
              View destination
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {status === "upcoming" && (
              <button
                onClick={handleCancel}
                disabled={isCancelling}
                className="ml-auto flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold font-body text-red-500 border border-red-200 hover:bg-red-50 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2"
              >
                {isCancelling ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Trash2 className="w-3.5 h-3.5" />
                )}
                {isCancelling ? "Cancelling…" : "Cancel"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
