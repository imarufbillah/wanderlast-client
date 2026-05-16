"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Camera, Loader2 } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useToast } from "@/components/ui/ToastContainer";

const ProfileAvatar = ({ user }) => {
  const [imgError, setImgError] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);
  const toast = useToast();

  const initials = user?.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "?";

  const uploadToImgBB = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
      {
        method: "POST",
        body: formData,
      },
    );

    if (!response.ok) {
      throw new Error("Failed to upload image to ImgBB");
    }

    const data = await response.json();
    return data.data.url;
  };

  const handleFileSelect = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image size should be less than 5MB");
      return;
    }

    setIsUploading(true);

    try {
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);

      // Upload to ImgBB
      const imageUrl = await uploadToImgBB(file);

      // Update user image using Better Auth with ImgBB URL
      await authClient.updateUser({
        image: imageUrl,
      });

      toast.success("Profile photo updated successfully!");

      // Refresh the page to show new image
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error(error.message || "Failed to update profile photo");
      setPreviewUrl(null);
    } finally {
      setIsUploading(false);
    }
  };

  const handleAvatarClick = () => {
    if (!isUploading) {
      fileInputRef.current?.click();
    }
  };

  const displayImage = previewUrl || user?.image;

  return (
    <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 group">
      <div className="relative w-full h-full rounded-2xl ring-4 ring-surface overflow-hidden shadow-xl">
        {displayImage && !imgError ? (
          <Image
            src={
              previewUrl
                ? displayImage
                : displayImage.replace(/=s\d+-c$/, "=s400-c")
            }
            alt={user?.name ?? "Profile"}
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

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center cursor-pointer">
          {isUploading ? (
            <Loader2 className="w-8 h-8 text-surface animate-spin" />
          ) : (
            <Camera className="w-8 h-8 text-surface" />
          )}
        </div>

        {/* Click overlay */}
        <button
          onClick={handleAvatarClick}
          disabled={isUploading}
          className="absolute inset-0 w-full h-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-2xl disabled:cursor-not-allowed"
          aria-label="Change profile photo"
        />
      </div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
        aria-hidden="true"
      />

      {/* Camera badge */}
      <div className="absolute -bottom-1 -right-1 w-8 h-8 sm:w-9 sm:h-9 bg-accent rounded-xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
        {isUploading ? (
          <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary animate-spin" />
        ) : (
          <Camera className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
        )}
      </div>
    </div>
  );
};

export default ProfileAvatar;
