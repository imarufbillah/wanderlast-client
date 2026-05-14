import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { getBookingsByUserId } from "@/lib/data";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import BookingsHeader from "@/components/bookings/BookingsHeader";
import BookingsList from "@/components/bookings/BookingsList";

export const metadata = {
  title: "My Bookings — WanderLast",
  description: "View and manage your travel bookings.",
};

const BookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // Proxy ensures user is authenticated, but we still need session data
  const bookings = await getBookingsByUserId(session.user.id);

  return (
    <div className="min-h-screen bg-background pt-16 md:pt-20">
      <div className="px-4 xl:px-20 py-8 sm:py-12">
        <Breadcrumbs currentPageTitle="My Bookings" />
        <BookingsHeader count={bookings.length} />
        <BookingsList initialBookings={bookings} />
      </div>
    </div>
  );
};

export default BookingsPage;
