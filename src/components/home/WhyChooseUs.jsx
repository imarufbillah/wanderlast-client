import Link from "next/link";
import {
  ShieldCheck,
  Headphones,
  BadgeDollarSign,
  Map,
  Star,
  Zap,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: Map,
    title: "Curated Destinations",
    description:
      "Every destination is hand-picked and verified by our travel experts — no filler, only the best.",
    accent: true,
  },
  {
    icon: BadgeDollarSign,
    title: "Best Price Guarantee",
    description:
      "Find a lower price elsewhere and we'll match it. Transparent pricing with zero hidden fees.",
    accent: false,
  },
  {
    icon: ShieldCheck,
    title: "Safe & Secure Booking",
    description:
      "Your payments and personal data are protected with bank-grade encryption at every step.",
    accent: false,
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Our travel specialists are available around the clock — before, during, and after your trip.",
    accent: false,
  },
  {
    icon: Zap,
    title: "Instant Confirmation",
    description:
      "Book in minutes and receive your confirmation immediately. No waiting, no uncertainty.",
    accent: false,
  },
  {
    icon: Star,
    title: "Trusted by Thousands",
    description:
      "Over 50,000 happy travelers have explored the world with us. Join the community.",
    accent: false,
  },
];

const STATS = [
  { value: "500+", label: "Destinations" },
  { value: "50K+", label: "Happy Travelers" },
  { value: "80+", label: "Countries" },
  { value: "4.9", label: "Avg. Rating" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const FeatureCard = ({ icon: Icon, title, description, accent }) => (
  <div
    className={`group relative rounded-3xl p-6 sm:p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden ${
      accent
        ? "bg-linear-to-br from-secondary to-primary border-transparent"
        : "bg-surface border-border hover:border-accent/40"
    }`}
  >
    {/* Decorative circle */}
    <div
      className={`absolute -top-6 -right-6 w-28 h-28 rounded-full transition-transform duration-500 group-hover:scale-125 ${
        accent ? "bg-accent/10" : "bg-accent/5"
      }`}
    />

    {/* Icon */}
    <div
      className={`relative w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${
        accent ? "bg-accent/15" : "bg-accent/10"
      }`}
    >
      <Icon className="w-6 h-6 text-accent" />
    </div>

    <h3
      className={`text-base sm:text-lg font-bold font-heading mb-2 ${
        accent ? "text-surface" : "text-text"
      }`}
    >
      {title}
    </h3>
    <p
      className={`text-sm font-body leading-relaxed ${
        accent ? "text-surface/65" : "text-text-muted"
      }`}
    >
      {description}
    </p>
  </div>
);

const StatItem = ({ value, label, isLast }) => (
  <div
    className={`text-center py-2 ${!isLast ? "border-r border-border" : ""}`}
  >
    <p className="text-3xl sm:text-4xl font-bold font-heading text-primary">
      {value}
    </p>
    <p className="text-sm text-text-muted font-body mt-1">{label}</p>
  </div>
);

// ─── Section ─────────────────────────────────────────────────────────────────

const WhyChooseUs = () => {
  return (
    <section
      className="relative py-20 sm:py-24 md:py-28 px-4 xl:px-20 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #eef6f8 0%, #f7fbfc 50%, #edf2f7 100%)" }}
    >
      {/* Top edge fade from previous section */}
      <div className="absolute top-0 inset-x-0 h-24 bg-linear-to-b from-background to-transparent pointer-events-none" />

      {/* Ambient blobs */}
      <div className="absolute top-10 right-0 w-72 h-72 bg-accent/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative">
        {/* Section header — asymmetric two-column */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 sm:mb-16">
          {/* Left — label + heading */}
          <div className="lg:max-w-xl">
            <p className="text-xs font-bold font-body uppercase tracking-[0.2em] text-accent mb-4">
              Why Wanderlast
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-primary leading-[1.1]">
              Travel
              <br />
              <span className="relative inline-block">
                smarter
                {/* Accent underline */}
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-linear-to-r from-accent to-accent-soft rounded-full" />
              </span>
              {", not"}
              <br />
              harder.
            </h2>
          </div>

          {/* Right — description + link */}
          <div className="lg:max-w-xs lg:pb-2 flex flex-col gap-5">
            <p className="text-text-muted font-body text-base sm:text-lg leading-relaxed">
              We handle every detail so you can focus on what matters — the
              experience.
            </p>
            <Link
              href="/destinations"
              className="self-start inline-flex items-center gap-2 text-sm font-semibold font-body text-primary border-b-2 border-accent pb-0.5 hover:text-accent transition-colors"
            >
              Start exploring
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 max-w-2xl mx-auto mb-16 sm:mb-20 py-7 px-6 sm:px-10 bg-surface rounded-3xl border border-border shadow-sm">
          {STATS.map((stat, i) => (
            <StatItem
              key={stat.label}
              {...stat}
              isLast={i === STATS.length - 1}
            />
          ))}
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
