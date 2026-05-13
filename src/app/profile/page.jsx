import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import ProfileHero from "@/components/profile/ProfileHero";
import TravelStats from "@/components/profile/TravelStats";
import EditProfileForm from "@/components/profile/EditProfileForm";
import RecentActivity from "@/components/profile/RecentActivity";
import AccountInfo from "@/components/profile/AccountInfo";

export const metadata = {
  title: "My Profile — WanderLast",
  description: "Manage your profile and view your travel statistics.",
};

const ProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect("/signin");

  const user = session.user;

  // Placeholder stats — replace with real DB queries when bookings API is ready
  const stats = {
    totalBookings: 0,
    countriesVisited: 0,
    destinationsExplored: 0,
    tripsPlanned: 0,
  };

  return (
    <div className="min-h-screen bg-background pt-16 md:pt-20">
      <div className="px-4 xl:px-20 py-8 sm:py-12">
        {/* Hero — cover + avatar + name */}
        <ProfileHero user={user} />

        {/* Main content grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8">
          {/* Left column — edit form + account */}
          <div className="lg:col-span-1 space-y-6">
            <EditProfileForm user={user} />
            <AccountInfo user={user} />
          </div>

          {/* Right column — stats + activity */}
          <div className="lg:col-span-2 space-y-6">
            <TravelStats stats={stats} />
            <RecentActivity />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
