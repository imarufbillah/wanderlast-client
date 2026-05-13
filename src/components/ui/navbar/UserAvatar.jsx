"use client";

import { useState } from "react";
import Image from "next/image";

const UserAvatar = ({ user, size = "md" }) => {
  const [imgError, setImgError] = useState(false);
  const sizeClass = size === "sm" ? "w-8 h-8 text-xs" : "w-9 h-9 text-sm";

  const initials = user?.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "?";

  if (user?.image && !imgError) {
    return (
      <div
        className={`${sizeClass} relative rounded-full overflow-hidden shrink-0 ring-2 ring-accent/30`}
      >
        <Image
          src={user.image}
          alt={user.name ?? "User"}
          fill
          sizes="40px"
          className="object-cover"
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  return (
    <div
      className={`${sizeClass} rounded-full bg-linear-to-br from-accent to-secondary flex items-center justify-center shrink-0 ring-2 ring-accent/30`}
    >
      <span className="font-semibold font-body text-surface">{initials}</span>
    </div>
  );
};

export default UserAvatar;
