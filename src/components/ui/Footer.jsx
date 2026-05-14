import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import NewsletterForm from "./footer/NewsletterForm";

// ─── Data ────────────────────────────────────────────────────────────────────

const LINKS = {
  explore: [
    { label: "Destinations", href: "/destinations" },
    { label: "Tours", href: "/tours" },
    { label: "Featured Trips", href: "/destinations?filter=featured" },
    { label: "My Bookings", href: "/bookings" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
  support: [
    { label: "Help Center", href: "/help" },
    { label: "Cancellation Policy", href: "/cancellation" },
    { label: "Travel Insurance", href: "/insurance" },
    { label: "Safety Guidelines", href: "/safety" },
  ],
};

const SOCIALS = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaXTwitter, href: "#", label: "X (Twitter)" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
];

// ─── Sub-components (all server) ─────────────────────────────────────────────

const FooterLinkGroup = ({ title, links }) => (
  <div>
    <p className="text-xs font-bold font-body uppercase tracking-[0.15em] text-surface/40 mb-5">
      {title}
    </p>
    <ul className="space-y-3">
      {links.map(({ label, href }) => (
        <li key={label}>
          <Link
            href={href}
            className="text-sm font-body text-surface/65 hover:text-accent transition-colors"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

// ─── Footer ──────────────────────────────────────────────────────────────────

const Footer = () => {
  return (
    <footer className="bg-primary border-t border-surface/8">
      {/* Main grid */}
      <div className="px-4 xl:px-20 pt-16 sm:pt-20 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column — spans 2 cols on lg */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-6">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="relative w-10 h-10">
                <Image
                  src="/assets/logo.png"
                  alt="Wanderlast"
                  fill
                  sizes="40px"
                  className="object-contain group-hover:scale-105 transition-transform"
                />
              </div>
              <span className="text-xl font-bold font-heading text-accent">
                Wanderlast
              </span>
            </Link>

            <p className="text-sm font-body text-surface/55 leading-relaxed max-w-xs">
              Discover breathtaking destinations and create unforgettable
              memories. Your next adventure is just one click away.
            </p>

            <div className="space-y-2.5">
              <a
                href="mailto:hello@wanderlast.com"
                className="flex items-center gap-2.5 text-sm font-body text-surface/55 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4 text-accent/70 shrink-0" />
                hello@wanderlast.com
              </a>
              <a
                href="tel:+18005551234"
                className="flex items-center gap-2.5 text-sm font-body text-surface/55 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4 text-accent/70 shrink-0" />
                +1 (800) 555-1234
              </a>
              <span className="flex items-center gap-2.5 text-sm font-body text-surface/55">
                <MapPin className="w-4 h-4 text-accent/70 shrink-0" />
                San Francisco, CA, USA
              </span>
            </div>
          </div>

          {/* Link columns */}
          <FooterLinkGroup title="Explore" links={LINKS.explore} />
          <FooterLinkGroup title="Company" links={LINKS.company} />
          <FooterLinkGroup title="Support" links={LINKS.support} />
        </div>

        {/* Newsletter strip */}
        <div className="mt-14 pt-10 border-t border-surface/8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <p className="text-base font-bold font-heading text-surface mb-1">
                Get travel inspiration in your inbox
              </p>
              <p className="text-sm font-body text-surface/45">
                Weekly destination guides, deals, and tips. No spam, ever.
              </p>
            </div>
            {/* Only this island is a client component */}
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-surface/8 px-4 xl:px-20 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-body text-surface/35 text-center sm:text-left">
            © {new Date().getFullYear()} Wanderlast. All rights reserved.
          </p>

          <div className="flex items-center gap-1">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-surface/35 hover:text-accent hover:bg-surface/8 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
