"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { createBooking } from "@/lib/api-client";
import { useToast } from "@/components/ui/ToastContainer";
import { TrendingUp, Shield, Check, Award, Loader2 } from "lucide-react";

const BookingCard = ({
  price,
  discountPrice,
  currency,
  hasDiscount,
  savings,
  discountPercent,
  departureDate,
  destination,
}) => {
  const router = useRouter();
  const toast = useToast();
  const { data: session } = authClient.useSession();
  const [isBooking, setIsBooking] = useState(false);

  const handleBooking = async (formData) => {
    if (!session?.user) {
      toast.error("Please sign in to book a destination.");
      router.push("/signin");
      return;
    }

    setIsBooking(true);

    const data = {
      travelers: formData.get("travelers"),
      departureDate: formData.get("departureDate"),
      userId: session.user.id,
      userName: session.user.name,
      userEmail: session.user.email,
      destinationId: destination._id,
      destinationName: destination.destinationName,
      destinationImage: destination.imageUrl,
    };

    try {
      await createBooking(data);
      toast.create(
        `${destination.destinationName} booked! Check My Bookings for details.`,
      );
    } catch (error) {
      toast.error(
        error.message || "Could not complete booking. Please try again.",
      );
    } finally {
      setIsBooking(false);
    }
  };

  return (
    <div className="p-6 sm:p-8 bg-linear-to-br from-accent/5 to-accent-soft/5 rounded-3xl border-2 border-accent/20 shadow-xl">
      {/* Price Section */}
      <div className="mb-6">
        {hasDiscount && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-success/20 rounded-full mb-3 border border-success/30">
            <TrendingUp className="w-4 h-4 text-success" />
            <span className="text-sm font-bold text-success font-body">
              Save ${savings} ({discountPercent}% OFF)
            </span>
          </div>
        )}
        <div className="flex items-baseline gap-3 mb-2">
          {hasDiscount && (
            <p className="text-2xl text-text-muted font-body line-through">
              ${price}
            </p>
          )}
          <p className="text-5xl font-bold text-accent font-heading">
            ${discountPrice || price}
          </p>
        </div>
        <p className="text-sm text-text-muted font-body">
          per person • {currency}
        </p>
      </div>

      {/* Booking Form */}
      <form action={handleBooking} className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-semibold text-text font-body mb-2">
            Number of Travelers
          </label>
          <select
            name="travelers"
            className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-text font-body focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:border-transparent transition-all cursor-pointer"
          >
            <option value="1">1 Person</option>
            <option value="2">2 People</option>
            <option value="3">3 People</option>
            <option value="4">4 People</option>
            <option value="5+">5+ People</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-text font-body mb-2">
            Departure Date
          </label>
          <input
            type="date"
            name="departureDate"
            defaultValue={
              departureDate
                ? new Date(departureDate).toISOString().split("T")[0]
                : ""
            }
            className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-text font-body focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:border-transparent transition-all"
          />
        </div>

        {/* Book Button */}
        <button
          type="submit"
          disabled={isBooking}
          className="w-full py-4 bg-linear-to-r from-accent to-accent-soft text-primary font-bold font-body rounded-xl hover:shadow-[0_0_30px_rgba(19,218,233,0.4)] active:scale-[0.98] transition-all shadow-lg text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:shadow-none flex items-center justify-center gap-2"
        >
          {isBooking ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Booking…
            </>
          ) : (
            "Book Now"
          )}
        </button>
      </form>

      {/* Trust Badges */}
      <div className="space-y-3 pt-6 border-t border-accent/20">
        <div className="flex items-center gap-3">
          <div className="shrink-0 w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
            <Shield className="w-4 h-4 text-accent" />
          </div>
          <span className="text-sm text-text font-body">
            Secure payment & data protection
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="shrink-0 w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
            <Check className="w-4 h-4 text-success" />
          </div>
          <span className="text-sm text-text font-body">
            Free cancellation up to 24 hours
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="shrink-0 w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
            <Award className="w-4 h-4 text-accent" />
          </div>
          <span className="text-sm text-text font-body">
            Best price guarantee
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
