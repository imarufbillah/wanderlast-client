"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Wanderlast completely changed how I travel. Every detail was taken care of — from the moment I booked to the second I landed back home. I've never felt so stress-free on a trip.",
    name: "Sarah Mitchell",
    role: "Solo Traveler · Visited Bali & Japan",
    image: "/assets/person1.png",
    rating: 5,
    highlight: "stress-free",
  },
  {
    id: 2,
    quote:
      "I was skeptical at first, but the curated destinations are genuinely world-class. Our family trip to Switzerland was flawless. The kids are already asking when we're going again.",
    name: "James Okafor",
    role: "Family Traveler · Visited Switzerland",
    image: "/assets/person2.png",
    rating: 5,
    highlight: "world-class",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const StarRating = ({ count }) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-4 h-4 text-accent fill-accent" />
    ))}
  </div>
);

// ─── Component ───────────────────────────────────────────────────────────────

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState("next"); // "next" | "prev"
  const [animating, setAnimating] = useState(false);

  const total = TESTIMONIALS.length;

  const go = useCallback(
    (index, dir) => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setActive(index);
        setAnimating(false);
      }, 280);
    },
    [animating],
  );

  const next = useCallback(
    () => go((active + 1) % total, "next"),
    [active, total, go],
  );

  const prev = useCallback(
    () => go((active - 1 + total) % total, "prev"),
    [active, total, go],
  );

  // Auto-advance every 6s
  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  const t = TESTIMONIALS[active];

  // Highlight a keyword in the quote with accent color
  const renderQuote = (quote, word) => {
    const parts = quote.split(word);
    return parts.map((part, i) =>
      i < parts.length - 1 ? (
        <span key={i}>
          {part}
          <span className="text-accent">{word}</span>
        </span>
      ) : (
        <span key={i}>{part}</span>
      ),
    );
  };

  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24 md:py-28 px-4 xl:px-20"
      style={{ backgroundColor: "#e8edf2" }}
    >
      {/* Dot grid — dark dots on light bg */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #041322 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-12 sm:mb-16">
          <span className="h-px flex-1 bg-primary/10" />
          <p className="text-xs font-bold font-body uppercase tracking-[0.2em] text-accent">
            What Travelers Say
          </p>
          <span className="h-px flex-1 bg-primary/10" />
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Giant decorative quote mark */}
          <span
            className="absolute -top-6 -left-2 sm:-left-6 text-[10rem] sm:text-[14rem] font-heading font-bold text-primary/6 leading-none select-none pointer-events-none"
            aria-hidden="true"
          >
            &quot;
          </span>

          {/* Slide */}
          <div
            className={`transition-all duration-280 ${
              animating
                ? direction === "next"
                  ? "opacity-0 translate-x-6"
                  : "opacity-0 -translate-x-6"
                : "opacity-100 translate-x-0"
            }`}
          >
            {/* Quote text */}
            <blockquote className="relative text-xl sm:text-2xl md:text-3xl font-heading font-medium text-primary/85 leading-relaxed mb-10 sm:mb-12 max-w-3xl">
              &quot;{renderQuote(t.quote, t.highlight)}&quot;
            </blockquote>

            {/* Person row */}
            <div className="flex items-center gap-5">
              {/* Avatar */}
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0">
                <div className="w-full h-full rounded-2xl overflow-hidden ring-2 ring-accent/40">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                {/* Verified dot */}
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-[#e8edf2]" />
              </div>

              {/* Name + role + stars */}
              <div>
                <p className="text-base font-bold font-heading text-primary">
                  {t.name}
                </p>
                <p className="text-xs text-text-muted font-body mt-0.5 mb-2">
                  {t.role}
                </p>
                <StarRating count={t.rating} />
              </div>
            </div>
          </div>

          {/* Navigation row */}
          <div className="flex items-center justify-between mt-12 sm:mt-14">
            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i, i > active ? "next" : "prev")}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#e8edf2] ${
                    i === active
                      ? "w-8 h-2.5 bg-accent"
                      : "w-2.5 h-2.5 bg-primary/15 hover:bg-primary/30"
                  }`}
                />
              ))}
            </div>

            {/* Prev / Next arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-11 h-11 rounded-2xl border border-primary/15 text-primary/50 hover:border-accent hover:text-accent hover:bg-accent/8 transition-all flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#e8edf2] active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-11 h-11 rounded-2xl border border-primary/15 text-primary/50 hover:border-accent hover:text-accent hover:bg-accent/8 transition-all flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#e8edf2] active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-12 pt-8 border-t border-primary/8 flex items-center gap-3">
          <div className="flex -space-x-2">
            {TESTIMONIALS.map((item) => (
              <div
                key={item.id}
                className="w-7 h-7 rounded-full overflow-hidden ring-2 ring-[#e8edf2] relative"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="28px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <p className="text-sm text-text-muted font-body">
            Joined by{" "}
            <span className="text-primary font-semibold">50,000+</span> happy
            travelers worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
