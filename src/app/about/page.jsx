import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  Users,
  Award,
  Heart,
  MapPin,
  Compass,
  Shield,
  Sparkles,
  ArrowRight,
  Target,
  Zap,
  Star,
} from "lucide-react";

export const metadata = {
  title: "About Us — WanderLast",
  description:
    "Discover the story behind WanderLast and our mission to make travel accessible, memorable, and transformative for everyone.",
};

// ─── Data ────────────────────────────────────────────────────────────────────

const STATS = [
  { icon: Globe, value: "80+", label: "Countries" },
  { icon: Users, value: "50K+", label: "Happy Travelers" },
  { icon: MapPin, value: "500+", label: "Destinations" },
  { icon: Award, value: "4.9", label: "Average Rating" },
];

const VALUES = [
  {
    icon: Heart,
    title: "Passion for Travel",
    description:
      "We believe travel is transformative. Every journey opens minds, builds connections, and creates stories worth sharing.",
  },
  {
    icon: Shield,
    title: "Trust & Safety",
    description:
      "Your safety is our priority. We partner with verified providers and maintain the highest standards for every destination.",
  },
  {
    icon: Sparkles,
    title: "Unforgettable Experiences",
    description:
      "We curate unique adventures that go beyond typical tourism, offering authentic cultural immersion and lasting memories.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "Join a global community of explorers. Share stories, get inspired, and connect with fellow travelers worldwide.",
  },
];

const TEAM = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "/assets/person1.png",
    bio: "Former travel journalist with 15+ years exploring 60+ countries.",
  },
  {
    name: "Michael Chen",
    role: "Head of Operations",
    image: "/assets/person2.png",
    bio: "Adventure enthusiast ensuring seamless travel experiences globally.",
  },
];

const MILESTONES = [
  {
    year: "2018",
    event: "WanderLast Founded",
    description: "Started with a dream to democratize travel",
  },
  {
    year: "2020",
    event: "10K Travelers",
    description: "Reached our first major milestone",
  },
  {
    year: "2023",
    event: "Global Expansion",
    description: "Expanded to 80+ countries worldwide",
  },
  {
    year: "2024",
    event: "50K+ Community",
    description: "Built a thriving community of explorers",
  },
];

// ─── Components ──────────────────────────────────────────────────────────────

const HeroSection = () => (
  <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
    {/* Background with gradient overlay */}
    <div className="absolute inset-0 bg-linear-to-br from-primary via-primary/95 to-secondary">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-soft rounded-full blur-3xl" />
      </div>
    </div>

    {/* Content */}
    <div className="relative z-10 px-4 xl:px-20 py-20 text-center max-w-4xl mx-auto">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30 mb-6">
        <Compass className="w-4 h-4 text-accent-soft" />
        <span className="text-sm font-semibold text-accent-soft font-body">
          About WanderLast
        </span>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-surface font-heading mb-6 leading-tight">
        We Turn Dreams Into{" "}
        <span className="text-accent-soft">Destinations</span>
      </h1>

      <p className="text-lg sm:text-xl text-surface/80 font-body leading-relaxed mb-8 max-w-2xl mx-auto">
        Founded by travelers, for travelers. We&apos;re on a mission to make the
        world more accessible, one unforgettable journey at a time.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/destinations"
          className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary font-bold font-body rounded-xl hover:bg-accent-soft active:scale-95 transition-all shadow-lg hover:shadow-xl focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          Explore Destinations
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-surface/10 backdrop-blur-sm text-surface font-semibold font-body rounded-xl border border-surface/30 hover:bg-surface/20 active:scale-95 transition-all focus-visible:ring-2 focus-visible:ring-surface focus-visible:ring-offset-2"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  </section>
);

const StatsSection = () => (
  <section className="px-4 xl:px-20 py-16 sm:py-20">
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      {STATS.map(({ icon: Icon, value, label }) => (
        <div
          key={label}
          className="relative group bg-surface rounded-3xl p-8 text-center border border-border hover:border-accent/30 transition-all hover:-translate-y-1 shadow-sm hover:shadow-lg"
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-accent/10 to-accent-soft/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
            <Icon className="w-8 h-8 text-accent" />
          </div>

          {/* Value */}
          <p className="text-4xl sm:text-5xl font-bold text-primary font-heading mb-2">
            {value}
          </p>

          {/* Label */}
          <p className="text-sm text-text-muted font-body">{label}</p>
        </div>
      ))}
    </div>
  </section>
);

const StorySection = () => (
  <section className="px-4 xl:px-20 py-16 sm:py-20">
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Image */}
        <div className="relative">
          <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/hero-banner.png"
              alt="Travel adventure"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-primary/60 to-transparent" />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-6 -right-6 bg-accent text-primary px-6 py-4 rounded-2xl shadow-xl">
            <p className="text-sm font-semibold font-body mb-1">Since 2018</p>
            <p className="text-2xl font-bold font-heading">6+ Years</p>
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
            <Target className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-accent font-body">
              Our Story
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary font-heading mb-6 leading-tight">
            Born from a Love of <span className="text-accent">Exploration</span>
          </h2>

          <div className="space-y-4 text-text font-body leading-relaxed">
            <p>
              WanderLast began in 2018 when our founder, Sarah Johnson, realized
              that planning meaningful travel experiences was unnecessarily
              complicated and expensive.
            </p>
            <p>
              After years of traveling as a journalist and experiencing both the
              magic and challenges of exploring new places, she envisioned a
              platform that would make authentic travel accessible to everyone.
            </p>
            <p>
              Today, we&apos;ve helped over 50,000 travelers discover 500+
              destinations across 80+ countries. But we&apos;re just getting
              started.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-3">
              <div className="w-12 h-12 rounded-full border-2 border-surface bg-accent/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-surface overflow-hidden">
                <Image
                  src="/assets/person1.png"
                  alt="Traveler"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-surface overflow-hidden">
                <Image
                  src="/assets/person2.png"
                  alt="Traveler"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-primary font-body">
                Join 50,000+ travelers
              </p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
                <span className="text-xs text-text-muted ml-1">(4.9/5)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ValuesSection = () => (
  <section className="px-4 xl:px-20 py-16 sm:py-20 bg-linear-to-b from-background to-secondary/5">
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
          <Zap className="w-4 h-4 text-accent" />
          <span className="text-sm font-semibold text-accent font-body">
            Our Values
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary font-heading mb-4">
          What Drives Us Forward
        </h2>
        <p className="text-lg text-text-muted font-body max-w-2xl mx-auto">
          Our core values guide every decision we make and every experience we
          create.
        </p>
      </div>

      {/* Values Grid */}
      <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
        {VALUES.map(({ icon: Icon, title, description }, index) => (
          <div
            key={title}
            className="group relative bg-surface rounded-3xl p-8 border border-border hover:border-accent/30 transition-all hover:-translate-y-1 shadow-sm hover:shadow-lg"
          >
            {/* Number badge */}
            <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
              <span className="text-sm font-bold text-accent font-heading">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Icon */}
            <div className="inline-flex items-center justify-center w-14 h-14 bg-linear-to-br from-accent/10 to-accent-soft/10 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
              <Icon className="w-7 h-7 text-accent" />
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-primary font-heading mb-3">
              {title}
            </h3>
            <p className="text-text-muted font-body leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TimelineSection = () => (
  <section className="px-4 xl:px-20 py-16 sm:py-20">
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
          <Compass className="w-4 h-4 text-accent" />
          <span className="text-sm font-semibold text-accent font-body">
            Our Journey
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary font-heading mb-4">
          Milestones That Matter
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

        {/* Timeline items */}
        <div className="space-y-8">
          {MILESTONES.map(({ year, event, description }, index) => (
            <div key={year} className="relative pl-20">
              {/* Year badge */}
              <div className="absolute left-0 w-16 h-16 bg-accent text-primary rounded-2xl flex items-center justify-center font-bold font-heading text-sm shadow-lg">
                {year}
              </div>

              {/* Content card */}
              <div className="bg-surface rounded-2xl p-6 border border-border hover:border-accent/30 transition-all shadow-sm hover:shadow-md">
                <h3 className="text-xl font-bold text-primary font-heading mb-2">
                  {event}
                </h3>
                <p className="text-text-muted font-body">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const TeamSection = () => (
  <section className="px-4 xl:px-20 py-16 sm:py-20 bg-linear-to-b from-secondary/5 to-background">
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
          <Users className="w-4 h-4 text-accent" />
          <span className="text-sm font-semibold text-accent font-body">
            Meet the Team
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary font-heading mb-4">
          The Faces Behind WanderLast
        </h2>
        <p className="text-lg text-text-muted font-body max-w-2xl mx-auto">
          Passionate travelers dedicated to making your journey extraordinary.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid sm:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
        {TEAM.map(({ name, role, image, bio }) => (
          <div
            key={name}
            className="group bg-surface rounded-3xl overflow-hidden border border-border hover:border-accent/30 transition-all hover:-translate-y-2 shadow-sm hover:shadow-xl"
          >
            {/* Image */}
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-primary/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-primary font-heading mb-1">
                {name}
              </h3>
              <p className="text-accent font-semibold font-body mb-3">{role}</p>
              <p className="text-text-muted font-body text-sm leading-relaxed">
                {bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="px-4 xl:px-20 py-16 sm:py-20">
    <div className="max-w-4xl mx-auto">
      <div className="relative bg-linear-to-br from-primary via-secondary to-primary rounded-4xl p-12 sm:p-16 text-center overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-56 h-56 bg-accent-soft rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30 mb-6">
            <Sparkles className="w-4 h-4 text-accent-soft" />
            <span className="text-sm font-semibold text-accent-soft font-body">
              Start Your Journey
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-surface font-heading mb-6">
            Ready to Explore the World?
          </h2>

          <p className="text-lg text-surface/80 font-body mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who&apos;ve discovered their dream
            destinations with WanderLast.
          </p>

          <Link
            href="/destinations"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary font-bold font-body rounded-xl hover:bg-accent-soft active:scale-95 transition-all shadow-xl hover:shadow-2xl focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            Browse Destinations
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

// ─── Main Page ───────────────────────────────────────────────────────────────

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background pt-16 md:pt-20">
      <HeroSection />
      <StatsSection />
      <StorySection />
      <ValuesSection />
      <TimelineSection />
      <TeamSection />
      <CTASection />
    </div>
  );
};

export default AboutPage;
