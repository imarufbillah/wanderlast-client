"use client";

import { useState } from "react";
import Image from "next/image";

const ProfileAvatar = ({ user }) => {
  const [imgError, setImgError] = useState(false);

  const initials = user?.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "?";

  return (
    <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0">
      <div className="relative w-full h-full rounded-2xl ring-4 ring-surface overflow-hidden shadow-xl">
        {user?.image && !imgError ? (
          <Image
            src={user.image.replace(/=s\d+-c$/, "=s400-c")}
            alt={user.name ?? "Profile"}
            fill
            sizes="(max-width: 640px) 96px, 112px"
            quality={100}
            className="object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-linear-to-br from-accent to-secondary flex items-center justify-center">
            <span className="text-3xl sm:text-4xl font-bold font-heading text-surface">
              {initials}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileAvatar;
