"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import NavbarBrand from "./navbar/NavbarBrand";
import NavLinks from "./navbar/NavLinks";
import NavbarAuth from "./navbar/NavbarAuth";
import MobileMenu from "./navbar/MobileMenu";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user ?? null;

  // Scroll behavior — hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsMobileMenuOpen(false);
        setIsUserMenuOpen(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleSignOut = async () => {
    setIsSigningOut(true);
    await authClient.signOut();
    setIsUserMenuOpen(false);
    setIsMobileMenuOpen(false);
    setIsSigningOut(false);
    router.push("/");
    router.refresh();
  };

  // ── Style helpers ─────────────────────────────────────────────────────────
  const getNavbarBackground = () => {
    if (isScrolled)
      return "bg-surface/80 backdrop-blur-xl shadow-lg border-b border-border/50";
    if (isHomePage) return "bg-transparent border-b border-surface/20";
    return "bg-surface/80 backdrop-blur-xl shadow-sm border-b border-border/50";
  };

  const getTextColor = (isActive = false) => {
    if (isActive) return "text-accent font-semibold";
    if (isScrolled || !isHomePage) return "text-text hover:text-accent";
    return "text-surface/90 hover:text-accent";
  };

  const getBrandColor = () =>
    isScrolled || !isHomePage ? "text-accent" : "text-surface";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${getNavbarBackground()}`}
    >
      <div className="w-full px-4 xl:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <NavbarBrand colorClass={getBrandColor()} />

          <NavLinks pathname={pathname} getTextColor={getTextColor} />

          <div className="hidden lg:flex items-center">
            <NavbarAuth
              user={user}
              isPending={isPending}
              isUserMenuOpen={isUserMenuOpen}
              onToggleUserMenu={() => setIsUserMenuOpen((prev) => !prev)}
              onCloseUserMenu={() => setIsUserMenuOpen(false)}
              onSignOut={handleSignOut}
              isSigningOut={isSigningOut}
              isScrolled={isScrolled}
              isHomePage={isHomePage}
              getTextColor={getTextColor}
            />
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className={`lg:hidden p-2 transition-colors ${getTextColor()}`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <MobileMenu
          pathname={pathname}
          user={user}
          isPending={isPending}
          isSigningOut={isSigningOut}
          onClose={() => setIsMobileMenuOpen(false)}
          onSignOut={handleSignOut}
        />
      )}
    </nav>
  );
};

export default Navbar;
