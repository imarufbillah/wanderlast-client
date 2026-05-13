import Link from "next/link";
import { User, LogOut } from "lucide-react";
import UserAvatar from "./UserAvatar";
import { NAV_LINKS } from "./NavLinks";

const MobileMenu = ({
  pathname,
  user,
  isPending,
  isSigningOut,
  onClose,
  onSignOut,
}) => {
  return (
    <div className="lg:hidden bg-surface/95 backdrop-blur-xl border-t border-border/50 animate-fade-in">
      <div className="px-4 xl:px-6 py-4 space-y-1">
        {/* Nav links */}
        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              onClick={onClose}
              className={`block px-4 py-2.5 rounded-xl transition-colors font-medium font-body ${
                isActive
                  ? "bg-accent/10 text-accent font-semibold"
                  : "text-text hover:text-accent hover:bg-background"
              }`}
            >
              {link.name}
            </Link>
          );
        })}

        {/* Auth section */}
        {isPending ? (
          <div className="flex items-center gap-3 px-4 py-2 pt-4 border-t border-border">
            <div className="w-8 h-8 rounded-full bg-border animate-pulse" />
            <div className="w-32 h-4 rounded bg-border animate-pulse" />
          </div>
        ) : user ? (
          <div className="pt-4 border-t border-border space-y-1">
            {/* User info card */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-linear-to-br from-secondary/10 to-accent/5">
              <UserAvatar user={user} size="sm" />
              <div className="min-w-0">
                <p className="text-sm font-semibold font-body text-text truncate">
                  {user.name}
                </p>
                <p className="text-xs text-text-muted font-body truncate">
                  {user.email}
                </p>
              </div>
            </div>

            <Link
              href="/profile"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-body text-text hover:bg-background hover:text-accent transition-colors"
            >
              <User className="w-4 h-4 shrink-0" />
              My Profile
            </Link>

            <button
              onClick={onSignOut}
              disabled={isSigningOut}
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-body text-red-500 hover:bg-red-50 transition-colors disabled:opacity-50"
            >
              <LogOut className="w-4 h-4 shrink-0" />
              {isSigningOut ? "Signing out…" : "Sign Out"}
            </button>
          </div>
        ) : (
          <div className="pt-4 border-t border-border space-y-2">
            <Link
              href="/signin"
              onClick={onClose}
              className="block w-full text-center px-4 py-2.5 text-text hover:bg-background rounded-xl transition-colors font-medium font-body"
            >
              Login
            </Link>
            <Link
              href="/signup"
              onClick={onClose}
              className="block w-full text-center px-4 py-2.5 bg-accent text-primary font-semibold font-body rounded-xl hover:bg-accent-soft transition-colors shadow-sm"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
