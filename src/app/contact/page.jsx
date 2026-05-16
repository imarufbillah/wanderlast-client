import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Headphones,
  Globe,
  ArrowRight,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact Us — WanderLast",
  description:
    "Get in touch with WanderLast. We're here to help with your travel questions, bookings, and support needs.",
};

// ─── Data ────────────────────────────────────────────────────────────────────

const CONTACT_INFO = [
  {
    icon: Mail,
    title: "Email Us",
    primary: "hello@wanderlast.com",
    secondary: "support@wanderlast.com",
    href: "mailto:hello@wanderlast.com",
    description: "We'll respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    primary: "+1 (800) 555-1234",
    secondary: "Mon-Fri, 9AM-6PM EST",
    href: "tel:+18005551234",
    description: "Speak with our travel experts",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    primary: "123 Travel Street",
    secondary: "San Francisco, CA 94102",
    href: "https://maps.google.com",
    description: "Stop by our office",
  },
  {
    icon: Clock,
    title: "Business Hours",
    primary: "Monday - Friday",
    secondary: "9:00 AM - 6:00 PM EST",
    href: null,
    description: "We're here to help",
  },
];

const SUPPORT_OPTIONS = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our support team in real-time",
    action: "Start Chat",
    color: "accent",
  },
  {
    icon: Headphones,
    title: "Help Center",
    description: "Browse FAQs and helpful articles",
    action: "Visit Help Center",
    color: "secondary",
    href: "/help",
  },
  {
    icon: Globe,
    title: "Community Forum",
    description: "Connect with fellow travelers",
    action: "Join Forum",
    color: "success",
    href: "/community",
  },
];

const SOCIALS = [
  { icon: FaFacebookF, href: "#", label: "Facebook", color: "#1877F2" },
  { icon: FaInstagram, href: "#", label: "Instagram", color: "#E4405F" },
  { icon: FaXTwitter, href: "#", label: "X (Twitter)", color: "#000000" },
  { icon: FaYoutube, href: "#", label: "YouTube", color: "#FF0000" },
];

const FAQ_QUICK = [
  {
    question: "How do I book a destination?",
    answer:
      "Browse destinations, select your preferred trip, and complete the booking form.",
  },
  {
    question: "What's your cancellation policy?",
    answer:
      "Free cancellation up to 48 hours before departure. See our policy for details.",
  },
  {
    question: "Do you offer travel insurance?",
    answer:
      "Yes, we partner with leading providers to offer comprehensive travel insurance.",
  },
];

// ─── Components ──────────────────────────────────────────────────────────────

const HeroSection = () => (
  <section className="relative bg-linear-to-br from-primary via-primary/95 to-secondary py-20 sm:py-24 overflow-hidden">
    {/* Background decoration */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 left-20 w-72 h-72 bg-accent rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-soft rounded-full blur-3xl" />
    </div>

    {/* Content */}
    <div className="relative z-10 px-4 xl:px-20 text-center max-w-4xl mx-auto">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30 mb-6">
        <MessageCircle className="w-4 h-4 text-accent-soft" />
        <span className="text-sm font-semibold text-accent-soft font-body">
          Get in Touch
        </span>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-surface font-heading mb-6 leading-tight">
        We&apos;re Here to <span className="text-accent-soft">Help</span>
      </h1>

      <p className="text-lg sm:text-xl text-surface/80 font-body leading-relaxed max-w-2xl mx-auto">
        Have questions about your next adventure? Our travel experts are ready
        to assist you every step of the way.
      </p>
    </div>
  </section>
);

const ContactInfoSection = () => (
  <section className="px-4 xl:px-20 py-16 sm:py-20">
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {CONTACT_INFO.map(
        ({ icon: Icon, title, primary, secondary, href, description }) => (
          <div
            key={title}
            className="group bg-surface rounded-3xl p-6 border border-border hover:border-accent/30 transition-all hover:-translate-y-1 shadow-sm hover:shadow-lg"
          >
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-12 h-12 bg-linear-to-br from-accent/10 to-accent-soft/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
              <Icon className="w-6 h-6 text-accent" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-primary font-heading mb-3">
              {title}
            </h3>

            {/* Primary info */}
            {href ? (
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="block text-accent hover:text-accent-soft font-semibold font-body mb-1 transition-colors"
              >
                {primary}
              </a>
            ) : (
              <p className="text-accent font-semibold font-body mb-1">
                {primary}
              </p>
            )}

            {/* Secondary info */}
            <p className="text-sm text-text-muted font-body mb-3">
              {secondary}
            </p>

            {/* Description */}
            <p className="text-xs text-text-muted font-body">{description}</p>
          </div>
        ),
      )}
    </div>
  </section>
);

const MainContactSection = () => (
  <section className="px-4 xl:px-20 pb-16 sm:pb-20">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
        {/* Left: Contact Form (3 cols) */}
        <div className="lg:col-span-3">
          <div className="bg-surface rounded-3xl p-8 sm:p-10 border border-border shadow-lg">
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary font-heading mb-3">
                Send Us a Message
              </h2>
              <p className="text-text-muted font-body">
                Fill out the form below and we&apos;ll get back to you as soon
                as possible.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>

        {/* Right: Additional Info (2 cols) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Support Options */}
          <div className="bg-surface rounded-3xl p-6 border border-border shadow-sm">
            <h3 className="text-xl font-bold text-primary font-heading mb-6">
              Other Ways to Reach Us
            </h3>

            <div className="space-y-4">
              {SUPPORT_OPTIONS.map(
                ({ icon: Icon, title, description, action, color, href }) => (
                  <div
                    key={title}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-background hover:bg-accent/5 transition-colors group"
                  >
                    <div className="shrink-0 w-10 h-10 bg-linear-to-br from-accent/10 to-accent-soft/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-primary font-heading mb-1">
                        {title}
                      </h4>
                      <p className="text-xs text-text-muted font-body mb-2">
                        {description}
                      </p>
                      {href ? (
                        <Link
                          href={href}
                          className="text-xs font-semibold text-accent hover:text-accent-soft transition-colors"
                        >
                          {action} →
                        </Link>
                      ) : (
                        <button className="text-xs font-semibold text-accent hover:text-accent-soft transition-colors">
                          {action} →
                        </button>
                      )}
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-surface rounded-3xl p-6 border border-border shadow-sm">
            <h3 className="text-xl font-bold text-primary font-heading mb-4">
              Follow Us
            </h3>
            <p className="text-sm text-text-muted font-body mb-6">
              Stay connected for travel inspiration and updates
            </p>

            <div className="flex items-center gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-11 h-11 rounded-xl flex items-center justify-center bg-background text-text-muted hover:text-accent hover:bg-accent/10 transition-all hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick FAQ */}
          <div className="bg-linear-to-br from-accent/5 to-accent-soft/5 rounded-3xl p-6 border border-accent/20">
            <h3 className="text-xl font-bold text-primary font-heading mb-4">
              Quick Answers
            </h3>

            <div className="space-y-4">
              {FAQ_QUICK.map(({ question, answer }) => (
                <div key={question}>
                  <h4 className="text-sm font-semibold text-primary font-body mb-1">
                    {question}
                  </h4>
                  <p className="text-xs text-text-muted font-body leading-relaxed">
                    {answer}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/help"
              className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-accent hover:text-accent-soft transition-colors"
            >
              View All FAQs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const MapSection = () => (
  <section className="px-4 xl:px-20 pb-16 sm:pb-20">
    <div className="max-w-7xl mx-auto">
      <div className="relative bg-linear-to-br from-primary via-secondary to-primary rounded-3xl overflow-hidden border border-border shadow-lg h-96">
        {/* Placeholder for map - you can integrate Google Maps or Mapbox here */}
        <div className="absolute inset-0 bg-primary/40 backdrop-blur-sm flex items-center justify-center">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-56 h-56 bg-accent-soft rounded-full blur-3xl" />
          </div>
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 backdrop-blur-sm rounded-2xl border border-accent/30 mx-auto mb-4">
              <MapPin className="w-8 h-8 text-accent-soft" />
            </div>
            <p className="text-lg font-semibold text-surface font-heading mb-2">
              Visit Our Office
            </p>
            <p className="text-sm text-surface/70 font-body mb-6">
              123 Travel Street, San Francisco, CA 94102
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-primary font-semibold font-body rounded-xl hover:bg-accent-soft active:scale-95 transition-all shadow-xl focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Get Directions
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ─── Main Page ───────────────────────────────────────────────────────────────

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background pt-16 md:pt-20">
      <HeroSection />
      <ContactInfoSection />
      <MainContactSection />
      <MapSection />
    </div>
  );
};

export default ContactPage;
