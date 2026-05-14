"use client";

import { useState } from "react";
import { User, Phone, Globe, FileText, Loader2, Check } from "lucide-react";
import { useToast } from "@/components/ui/ToastContainer";
import { authClient } from "@/lib/auth-client";

const inputClass =
  "w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-text font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all disabled:opacity-60 disabled:cursor-not-allowed placeholder:text-text-muted/60";

const Field = ({ label, icon: Icon, children }) => (
  <div>
    <label className="block text-sm font-semibold text-text font-body mb-2">
      {label}
    </label>
    <div className="relative">
      <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
      {children}
    </div>
  </div>
);

const EditProfileForm = ({ user }) => {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  const [form, setForm] = useState({
    name: user?.name ?? "",
    phone: user?.phone ?? "",
    nationality: user?.nationality ?? "",
    bio: user?.bio ?? "",
  });

  const handleChange = (e) => {
    setSaved(false);
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { error } = await authClient.updateUser({
      name: form.name,
      phone: form.phone,
      nationality: form.nationality,
      bio: form.bio,
    });

    setIsLoading(false);

    if (error) {
      toast.error(
        error.message ?? "Failed to update profile. Please try again.",
      );
      return;
    }

    setSaved(true);
    toast.success("Profile updated successfully.");
  };

  return (
    <div className="bg-surface rounded-3xl border border-border p-6 sm:p-8">
      <h2 className="text-lg font-bold font-heading text-text mb-6">
        Edit Profile
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Full Name */}
        <Field label="Full Name" icon={User}>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            disabled={isLoading}
            className={inputClass}
          />
        </Field>

        {/* Phone */}
        <Field label="Phone Number" icon={Phone}>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            disabled={isLoading}
            className={inputClass}
          />
        </Field>

        {/* Nationality */}
        <Field label="Nationality" icon={Globe}>
          <input
            type="text"
            name="nationality"
            value={form.nationality}
            onChange={handleChange}
            placeholder="e.g. Bangladeshi"
            disabled={isLoading}
            className={inputClass}
          />
        </Field>

        {/* Bio */}
        <div>
          <label className="block text-sm font-semibold text-text font-body mb-2">
            Bio
          </label>
          <div className="relative">
            <FileText className="absolute left-3 top-3.5 w-4 h-4 text-text-muted pointer-events-none" />
            <textarea
              name="bio"
              value={form.bio}
              onChange={handleChange}
              placeholder="Tell us a little about yourself and your travel style…"
              rows={4}
              disabled={isLoading}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-text font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all disabled:opacity-60 disabled:cursor-not-allowed placeholder:text-text-muted/60 resize-none"
            />
          </div>
        </div>

        {/* Email — read-only */}
        <div className="pt-1">
          <label className="block text-sm font-semibold text-text font-body mb-2">
            Email Address
          </label>
          <p className="pl-3 py-3 text-sm font-body text-text-muted bg-border/30 rounded-xl border border-border/60 select-all">
            {user?.email}
          </p>
          <p className="text-xs text-text-muted font-body mt-1.5">
            Email cannot be changed here.
          </p>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3.5 bg-linear-to-r from-accent to-accent-soft text-primary font-bold font-body rounded-xl hover:shadow-[0_0_24px_rgba(19,218,233,0.35)] active:scale-[0.98] transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Saving…
            </>
          ) : saved ? (
            <>
              <Check className="w-4 h-4" />
              Saved
            </>
          ) : (
            "Save Changes"
          )}
        </button>
      </form>
    </div>
  );
};

export default EditProfileForm;
