"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX, FiUser } from "react-icons/fi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations" },
    { name: "Tours", href: "/tours" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-surface border-b border-border z-50 shadow-sm">
      <div className="w-full px-4 xl:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left: Logo and Brand */}
          <Link href="/" className="flex items-center gap-1 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/assets/logo.png"
                alt="Wanderlast Logo"
                fill
                className="object-contain transition-transform group-hover:scale-105"
                priority
              />
            </div>
            <span className="text-xl md:text-2xl font-bold text-accent font-heading">
              Wanderlast
            </span>
          </Link>

          {/* Center: Nav Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-text hover:text-accent font-medium font-body transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right: Auth Buttons (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 text-text hover:text-accent font-body transition-colors">
              <FiUser className="w-5 h-5" />
              <span className="font-medium">Profile</span>
            </button>
            <Link
              href="/login"
              className="px-5 py-2 text-text hover:text-accent font-medium font-body transition-colors"
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
            className="lg:hidden p-2 text-text hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-surface border-t border-border">
          <div className="px-4 xl:px-6 py-4 space-y-3">
            {/* Mobile Nav Links */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-4 py-2 text-text hover:text-accent hover:bg-background rounded-lg transition-colors font-medium font-body"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Auth Buttons */}
            <div className="pt-4 border-t border-border space-y-2">
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2 text-text hover:bg-background rounded-lg transition-colors font-body">
                <FiUser className="w-5 h-5" />
                <span className="font-medium">Profile</span>
              </button>
              <Link
                href="/login"
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
