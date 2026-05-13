import Link from "next/link";
import UserDropdown from "./UserDropdown";

const NavbarAuth = ({
  user,
  isPending,
  isUserMenuOpen,
  onToggleUserMenu,
  onCloseUserMenu,
  onSignOut,
  isSigningOut,
  isScrolled,
  isHomePage,
  getTextColor,
}) => {
  if (isPending) {
    return (
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-border animate-pulse" />
        <div className="w-20 h-4 rounded bg-border animate-pulse" />
      </div>
    );
  }

  if (user) {
    return (
      <UserDropdown
        user={user}
        isOpen={isUserMenuOpen}
        onToggle={onToggleUserMenu}
        onClose={onCloseUserMenu}
        onSignOut={onSignOut}
        isSigningOut={isSigningOut}
        isScrolled={isScrolled}
        isHomePage={isHomePage}
      />
    );
  }

  return (
    <div className="flex items-center gap-3">
      <Link
        href="/signin"
        className={`px-5 py-2 font-medium font-body transition-colors ${getTextColor()}`}
      >
        Login
      </Link>
      <Link
        href="/signup"
        className="px-5 py-2 bg-accent text-primary font-semibold font-body rounded-xl hover:bg-accent-soft transition-colors shadow-sm"
      >
        Sign Up
      </Link>
    </div>
  );
};

export default NavbarAuth;
