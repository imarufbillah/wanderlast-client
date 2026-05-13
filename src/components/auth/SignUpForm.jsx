"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import Link from "next/link";

const SignUpForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);
  const toggleConfirmPasswordVisibility = () =>
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);

  const handleSignUp = async (formData) => {
    const signUpData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email(signUpData);
    console.log(data, error);
  };

  return (
    <form action={handleSignUp} className="space-y-5">
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
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-surface text-text font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
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
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-surface text-text font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
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
            placeholder="Create a password"
            required
            className="w-full pl-10 pr-12 py-3 rounded-xl border border-border bg-surface text-text font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
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
            className="w-full pl-10 pr-12 py-3 rounded-xl border border-border bg-surface text-text font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
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
        className="w-full py-4 bg-linear-to-r from-accent to-accent-soft text-surface font-bold font-body text-base rounded-xl hover:shadow-[0_0_30px_rgba(19,218,233,0.4)] transition-all shadow-lg"
      >
        Create Account
      </button>
    </form>
  );
};

export default SignUpForm;
