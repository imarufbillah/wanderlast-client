"use client";

import { useState, useEffect, useRef } from "react";
import { X, Lock, Eye, EyeOff, Loader2, ShieldCheck } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useToast } from "@/components/ui/ToastContainer";

const inputClass = (hasError) =>
  `w-full pl-10 pr-12 py-3 rounded-xl border bg-background text-text font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all disabled:opacity-60 disabled:cursor-not-allowed placeholder:text-text-muted/60 ${
    hasError ? "border-red-400" : "border-border"
  }`;

const PasswordField = ({
  label,
  name,
  value,
  onChange,
  disabled,
  placeholder,
}) => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <label className="block text-sm font-semibold text-text font-body mb-2">
        {label}
      </label>
      <div className="relative">
        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
        <input
          type={visible ? "text" : "password"}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required
          className={inputClass(false)}
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text transition-colors"
          tabIndex={-1}
        >
          {visible ? (
            <EyeOff className="w-4 h-4" />
          ) : (
            <Eye className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
};

const ChangePasswordModal = ({ isOpen, onClose }) => {
  const toast = useToast();
  const overlayRef = useRef(null);

  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleChange = (e) => {
    setErrors({});
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const errs = {};
    if (form.newPassword.length < 8)
      errs.newPassword = "New password must be at least 8 characters.";
    if (form.newPassword !== form.confirmPassword)
      errs.confirmPassword = "Passwords do not match.";
    if (form.currentPassword === form.newPassword)
      errs.newPassword =
        "New password must be different from current password.";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setIsLoading(true);

    const { error } = await authClient.changePassword({
      currentPassword: form.currentPassword,
      newPassword: form.newPassword,
      revokeOtherSessions: true,
    });

    setIsLoading(false);

    if (error) {
      const message =
        error.message ?? "Failed to change password. Please try again.";
      setErrors({ general: message });
      toast.error(message);
      return;
    }

    toast.save(
      "Password changed successfully. Other sessions have been signed out.",
    );
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/60 backdrop-blur-sm animate-fade-in"
    >
      <div className="w-full max-w-md bg-surface rounded-3xl shadow-2xl border border-border animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h2 className="text-base font-bold font-heading text-text">
                Change Password
              </h2>
              <p className="text-xs text-text-muted font-body">
                Other active sessions will be signed out
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-text-muted hover:text-text hover:bg-background active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
          {/* General error */}
          {errors.general && (
            <div className="flex items-start gap-2 px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-500 text-sm font-body animate-fade-in">
              <span className="shrink-0 mt-0.5">⚠</span>
              <span>{errors.general}</span>
            </div>
          )}

          <PasswordField
            label="Current Password"
            name="currentPassword"
            value={form.currentPassword}
            onChange={handleChange}
            disabled={isLoading}
            placeholder="Enter your current password"
          />

          <div>
            <PasswordField
              label="New Password"
              name="newPassword"
              value={form.newPassword}
              onChange={handleChange}
              disabled={isLoading}
              placeholder="Min. 8 characters"
            />
            {errors.newPassword && (
              <p className="mt-1.5 text-xs text-red-500 font-body animate-fade-in">
                {errors.newPassword}
              </p>
            )}
          </div>

          <div>
            <PasswordField
              label="Confirm New Password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              disabled={isLoading}
              placeholder="Re-enter new password"
            />
            {errors.confirmPassword && (
              <p className="mt-1.5 text-xs text-red-500 font-body animate-fade-in">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className="flex-1 py-3 rounded-xl border border-border text-text font-semibold font-body text-sm hover:bg-background active:scale-95 transition-all disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 py-3 bg-linear-to-r from-accent to-accent-soft text-primary font-bold font-body text-sm rounded-xl hover:shadow-[0_0_20px_rgba(19,218,233,0.35)] active:scale-[0.98] transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Updating…
                </>
              ) : (
                "Update Password"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
