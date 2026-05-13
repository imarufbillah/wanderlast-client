"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, User, MapPin, LogOut } from "lucide-react";
import UserAvatar from "./UserAvatar";

const UserDropdown = ({
  user,
  isOpen,
  onToggle,
  onClose,
  onSignOut,
  isSigningOut,
  isScrolled,
  isHomePage,
}) => {
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const isDark = isScrolled || !isHomePage || isOpen;

  return (
    <div className="relative" ref={ref}>
      {/* Trigger */}
      <button
        onClick={onToggle}
        className={`flex items-center gap-2.5 px-3 py-1.5 rounded-xl transition-colors ${
          isOpen ? "bg-surface shadow-sm" : "hover:bg-accent/10"
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <UserAvatar user={user} />
        <div className="text-left hidden xl:block">
          <p
            className={`text-sm font-semibold font-body leading-tight ${
              isDark ? "text-text" : "text-surface"
            }`}
          >
            {user.name?.split(" ")[0]}
          </p>
          <p className="text-xs text-text-muted font-body leading-tight truncate max-w-28">
            {user.email}
          </p>
        </div>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            isDark ? "text-text-muted" : "text-surface/70"
          } ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown panel */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-64 bg-surface rounded-2xl shadow-xl border border-border overflow-hidden animate-scale-in z-50">
          {/* User info header */}
          <div className="px-4 py-3 bg-linear-to-br from-secondary/10 to-accent/5 border-b border-border">
            <div className="flex items-center gap-3">
              <UserAvatar user={user} />
              <div className="min-w-0">
                <p className="text-sm font-semibold font-body text-text truncate">
                  {user.name}
                </p>
                <p className="text-xs text-text-muted font-body truncate">
                  {user.email}
                </p>
                {user.emailVerified && (
                  <span className="inline-flex items-center gap-1 mt-0.5 text-xs text-success font-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-success inline-block" />
                    Verified
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Menu items */}
          <div className="py-1.5">
            <Link
              href="/profile"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-2.5 text-sm font-body text-text hover:bg-background hover:text-accent transition-colors"
            >
              <User className="w-4 h-4 shrink-0" />
              My Profile
            </Link>
            <Link
              href="/destinations"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-2.5 text-sm font-body text-text hover:bg-background hover:text-accent transition-colors"
            >
              <MapPin className="w-4 h-4 shrink-0" />
              Explore Destinations
            </Link>
          </div>

          {/* Sign out */}
          <div className="border-t border-border py-1.5">
            <button
              onClick={onSignOut}
              disabled={isSigningOut}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-body text-red-500 hover:bg-red-50 transition-colors disabled:opacity-50"
            >
              <LogOut className="w-4 h-4 shrink-0" />
              {isSigningOut ? "Signing out…" : "Sign Out"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
