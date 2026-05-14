"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { useToast } from "@/components/ui/ToastContainer";
import { Eye, EyeOff, Mail, Lock, User, Loader2 } from "lucide-react";
import Link from "next/link";

const SignUpForm = () => {
  const router = useRouter();
  const toast = useToast();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});

  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);
  const toggleConfirmPasswordVisibility = () =>
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);

  const handleSignUp = async (formData) => {
    setFieldErrors({});
    setIsLoading(true);

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    // Client-side validation
    const errors = {};
    if (password.length < 8) {
      errors.password = "Password must be at least 8 characters.";
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
    }
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setIsLoading(false);
      return;
    }

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
    });

    setIsLoading(false);

    if (error) {
      const message =
        error.message || "Something went wrong. Please try again.";
      setFieldErrors({ general: message });
      toast.error(message);
      return;
    }

    toast.success("Account created! Welcome to WanderLast.");
    setTimeout(() => router.push("/"), 500);
  };

  return (
    <form action={handleSignUp} className="space-y-5">
      {/* General error banner */}
      {fieldErrors.general && (
        <div className="flex items-start gap-2 px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-500 text-sm font-body animate-fade-in">
          <span className="mt-0.5 shrink-0">⚠</span>
          <span>{fieldErrors.general}</span>
        </div>
      )}

      {/* Name Input */}
      <div>
        <label className="block text-sm font-semibold text-text font-body mb-2">
          Full Name <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            required
            disabled={isLoading}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-surface text-text font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          />
        </div>
      </div>

      {/* Email Input */}
      <div>
        <label className="block text-sm font-semibold text-text font-body mb-2">
          Email Address <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            disabled={isLoading}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-surface text-text font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          />
        </div>
      </div>

      {/* Password Input */}
      <div>
        <label className="block text-sm font-semibold text-text font-body mb-2">
          Password <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
          <input
            type={isPasswordVisible ? "text" : "password"}
            name="password"
            placeholder="Create a password (min. 8 characters)"
            required
            disabled={isLoading}
            className={`w-full pl-10 pr-12 py-3 rounded-xl border bg-surface text-text font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all disabled:opacity-60 disabled:cursor-not-allowed ${
              fieldErrors.password ? "border-red-500" : "border-border"
            }`}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text transition-colors focus:outline-none"
          >
            {isPasswordVisible ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        </div>
        {fieldErrors.password && (
          <p className="mt-1.5 text-xs text-red-500 font-body animate-fade-in">
            {fieldErrors.password}
          </p>
        )}
      </div>

      {/* Confirm Password Input */}
      <div>
        <label className="block text-sm font-semibold text-text font-body mb-2">
          Confirm Password <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
          <input
            type={isConfirmPasswordVisible ? "text" : "password"}
            name="confirmPassword"
            placeholder="Re-enter your password"
            required
            disabled={isLoading}
            className={`w-full pl-10 pr-12 py-3 rounded-xl border bg-surface text-text font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all disabled:opacity-60 disabled:cursor-not-allowed ${
              fieldErrors.confirmPassword ? "border-red-500" : "border-border"
            }`}
          />
          <button
            type="button"
            onClick={toggleConfirmPasswordVisibility}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text transition-colors focus:outline-none"
          >
            {isConfirmPasswordVisible ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        </div>
        {fieldErrors.confirmPassword && (
          <p className="mt-1.5 text-xs text-red-500 font-body animate-fade-in">
            {fieldErrors.confirmPassword}
          </p>
        )}
      </div>

      {/* Terms & Conditions */}
      <p className="text-xs text-text-muted font-body text-center">
        By signing up, you agree to our{" "}
        <Link
          href="/terms"
          className="text-accent hover:underline font-semibold"
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          href="/privacy"
          className="text-accent hover:underline font-semibold"
        >
          Privacy Policy
        </Link>
      </p>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-4 bg-accent text-primary font-bold font-body text-base rounded-xl hover:bg-accent-soft hover:shadow-[0_0_30px_rgba(19,218,233,0.4)] active:scale-[0.98] transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Creating account...
          </>
        ) : (
          "Create Account"
        )}
      </button>
    </form>
  );
};

export default SignUpForm;
