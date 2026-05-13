import { ShieldCheck, CalendarDays, MapPin } from "lucide-react";
import ProfileAvatar from "./ProfileAvatar";

const ProfileHero = ({ user }) => {
  const memberSince = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <div className="relative">
      {/* Cover banner */}
      <div className="h-44 sm:h-56 w-full bg-linear-to-br from-secondary via-primary to-secondary/80 rounded-3xl overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-8 w-32 h-32 rounded-full border-2 border-accent" />
          <div className="absolute top-12 left-24 w-16 h-16 rounded-full border border-accent-soft" />
          <div className="absolute bottom-4 right-12 w-24 h-24 rounded-full border-2 border-accent-soft" />
          <div className="absolute top-6 right-32 w-10 h-10 rounded-full border border-accent" />
          <div className="absolute bottom-8 left-1/3 w-20 h-20 rounded-full border border-accent/60" />
        </div>
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle, #13dae9 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* Avatar + name row */}
      <div className="px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 -mt-14 sm:-mt-16">
          {/* Avatar */}
          <ProfileAvatar user={user} />

          {/* Quick meta — visible on sm+ */}
          <div className="hidden sm:flex items-center gap-4 pb-3 text-sm text-text-muted font-body">
            {memberSince && (
              <span className="flex items-center gap-1.5">
                <CalendarDays className="w-4 h-4 text-accent" />
                Member since {memberSince}
              </span>
            )}
            {user?.emailVerified && (
              <span className="flex items-center gap-1.5 text-success font-semibold">
                <ShieldCheck className="w-4 h-4" />
                Verified
              </span>
            )}
          </div>
        </div>

        {/* Name + email */}
        <div className="mt-3 sm:mt-2">
          <h1 className="text-2xl sm:text-3xl font-bold font-heading text-text">
            {user?.name ?? "Traveler"}
          </h1>
          <p className="text-text-muted font-body text-sm mt-0.5">
            {user?.email}
          </p>

          {/* Mobile meta */}
          <div className="flex flex-wrap items-center gap-3 mt-2 sm:hidden text-xs text-text-muted font-body">
            {memberSince && (
              <span className="flex items-center gap-1">
                <CalendarDays className="w-3.5 h-3.5 text-accent" />
                Since {memberSince}
              </span>
            )}
            {user?.emailVerified && (
              <span className="flex items-center gap-1 text-success font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                Verified
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHero;
