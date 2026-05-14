import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/cta-banner.png"
          alt="Aerial view of a tropical island with crystal clear water"
          fill
          sizes="100vw"
          className="object-cover object-center"
          quality={90}
        />
        {/* Layered overlay — darker at edges, lighter in center to let the image breathe */}
        <div className="absolute inset-0 bg-linear-to-b from-primary/70 via-primary/50 to-primary/75" />
        <div className="absolute inset-0 bg-linear-to-r from-primary/40 via-transparent to-primary/40" />
      </div>

      {/* Content */}
      <div className="relative px-4 xl:px-20 py-24 sm:py-32 md:py-40 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-6">
          <MapPin className="w-4 h-4 text-accent" />
          <span className="text-xs font-bold font-body uppercase tracking-[0.2em] text-accent">
            Your next adventure awaits
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-surface leading-[1.05] mb-6 max-w-4xl">
          The world is{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-accent">waiting</span>
            {/* Glow behind the word */}
            <span className="absolute inset-0 blur-2xl bg-accent/30 rounded-full scale-150 pointer-events-none" />
          </span>
          <br className="hidden sm:block" /> for you.
        </h2>

        {/* Subtext */}
        <p className="text-surface/75 font-body text-base sm:text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
          Over 500 curated destinations. Seamless booking. Memories that last a
          lifetime. Start your journey today.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/destinations"
            className="group inline-flex items-center gap-2.5 px-8 py-4 bg-accent text-primary font-bold font-body rounded-2xl hover:bg-accent-soft active:scale-[0.98] transition-all shadow-[0_0_40px_rgba(19,218,233,0.35)] hover:shadow-[0_0_60px_rgba(19,218,233,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary text-base"
          >
            Explore Destinations
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 bg-surface/10 backdrop-blur-sm text-surface font-semibold font-body rounded-2xl border border-surface/25 hover:bg-surface/20 hover:border-surface/40 active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-surface/50 focus-visible:ring-offset-2 focus-visible:ring-offset-primary text-base"
          >
            Create Free Account
          </Link>
        </div>

        {/* Trust line */}
        <p className="mt-8 text-xs text-surface/40 font-body">
          No credit card required · Free to join · Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTASection;
