"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, User } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if scrolled past threshold (50px)
      setIsScrolled(currentScrollY > 50);

      // Show/hide navbar based on scroll direction
      if (currentScrollY < 10) {
        // Always show at top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px - hide
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Close mobile menu when hiding
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations" },
    { name: "Tours", href: "/tours" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // Determine navbar background based on page and scroll state
  const getNavbarBackground = () => {
    if (isScrolled) {
      return "bg-surface/80 backdrop-blur-xl shadow-lg border-b border-border/50";
    }
    if (isHomePage) {
      return "bg-transparent border-b border-surface/20";
    }
    return "bg-surface/80 backdrop-blur-xl shadow-sm border-b border-border/50";
  };

  // Determine text color based on page and scroll state
  const getTextColor = (isActive = false) => {
    if (isActive) {
      return "text-accent font-semibold";
    }
    if (isScrolled || !isHomePage) {
      return "text-text hover:text-accent";
    }
    return "text-surface/90 hover:text-accent";
  };

  const getBrandColor = () => {
    if (isScrolled || !isHomePage) {
      return "text-accent";
    }
    return "text-surface";
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${getNavbarBackground()}`}
    >
      <div className="w-full px-4 xl:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left: Logo and Brand */}
          <Link href="/" className="flex items-center gap-1 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/assets/logo.png"
                alt="Wanderlast Logo"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                className="object-contain transition-transform group-hover:scale-105"
                priority
              />
            </div>
            <span
              className={`text-xl md:text-2xl font-bold font-heading transition-colors ${getBrandColor()}`}
            >
              Wanderlast
            </span>
          </Link>

          {/* Center: Nav Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-medium font-body transition-colors relative group ${getTextColor(isActive)}`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Right: Auth Buttons (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              className={`flex items-center gap-2 px-4 py-2 font-body transition-colors ${getTextColor()}`}
            >
              <User className="w-5 h-5" />
              <span className="font-medium">Profile</span>
            </button>
            <Link
              href="/signin"
              className={`px-5 py-2 font-medium font-body transition-colors ${getTextColor()}`}
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-5 py-2 bg-accent text-surface font-medium font-body rounded-lg hover:bg-accent-soft transition-colors shadow-sm"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-surface/95 backdrop-blur-xl border-t border-border/50">
          <div className="px-4 xl:px-6 py-4 space-y-3">
            {/* Mobile Nav Links */}
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-4 py-2 rounded-lg transition-colors font-medium font-body ${
                    isActive
                      ? "bg-accent/10 text-accent font-semibold"
                      : "text-text hover:text-accent hover:bg-background"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Mobile Auth Buttons */}
            <div className="pt-4 border-t border-border space-y-2">
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2 text-text hover:bg-background rounded-lg transition-colors font-body">
                <User className="w-5 h-5" />
                <span className="font-medium">Profile</span>
              </button>
              <Link
                href="/signin"
                className="block w-full text-center px-4 py-2 text-text hover:bg-background rounded-lg transition-colors font-medium font-body"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="block w-full text-center px-4 py-2 bg-accent text-surface font-medium font-body rounded-lg hover:bg-accent-soft transition-colors shadow-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
