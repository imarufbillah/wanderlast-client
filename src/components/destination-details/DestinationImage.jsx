"use client";

import Image from "next/image";
import { Heart, Share2, Sparkles, TrendingUp } from "lucide-react";

const DestinationImage = ({
  imageUrl,
  destinationName,
  featured,
  popular,
  hasDiscount,
  discountPercent,
}) => {
  return (
    <div className="relative">
      <div className="sticky top-24">
        <div className="relative aspect-4/5 rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src={imageUrl}
            alt={destinationName}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
            priority
            className="object-cover"
          />

          {/* Subtle Gradient Overlay - Bottom only */}
          <div className="absolute inset-0 bg-linear-to-t from-primary/40 via-transparent to-transparent" />

          {/* Action Buttons - Top Right */}
          <div className="absolute top-4 right-4 flex items-center gap-3 z-10">
            <button className="p-3 bg-surface/90 backdrop-blur-md rounded-full shadow-lg hover:bg-surface hover:scale-110 transition-all text-primary">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-3 bg-surface/90 backdrop-blur-md rounded-full shadow-lg hover:bg-surface hover:scale-110 transition-all text-primary">
              <Share2 className="w-5 h-5" />
            </button>
          </div>

          {/* Badges - Bottom Left */}
          <div className="absolute bottom-4 left-4 flex flex-wrap items-center gap-2">
            {featured && (
              <div className="flex items-center gap-1.5 px-3 py-2 bg-accent backdrop-blur-md rounded-full shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-surface" />
                <span className="text-xs font-bold text-surface font-body">
                  Featured
                </span>
              </div>
            )}
            {popular && (
              <div className="flex items-center gap-1.5 px-3 py-2 bg-success backdrop-blur-md rounded-full shadow-lg">
                <TrendingUp className="w-3.5 h-3.5 text-surface" />
                <span className="text-xs font-bold text-surface font-body">
                  Popular
                </span>
              </div>
            )}
          </div>

          {/* Discount Badge - Top Left */}
          {hasDiscount && (
            <div className="absolute top-4 left-4">
              <div className="flex items-center gap-1.5 px-4 py-2 bg-success backdrop-blur-md rounded-full shadow-lg">
                <TrendingUp className="w-4 h-4 text-surface" />
                <span className="text-sm font-bold text-surface font-body">
                  Save {discountPercent}%
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DestinationImage;
