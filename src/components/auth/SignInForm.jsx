"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import Link from "next/link";

const SignInForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  const handleSignIn = async (formData) => {
    const signInData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email(signInData);
    console.log(data, error);
  };

  return (
    <form action={handleSignIn} className="space-y-5">
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
        <div className="flex items-center justify-between mb-2">
          <label className="block text-sm font-semibold text-text font-body">
            Password <span className="text-red-500">*</span>
          </label>
          <Link
            href="/forgot-password"
            className="text-xs text-accent hover:underline font-body font-semibold"
          >
            Forgot password?
          </Link>
        </div>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
          <input
            type={isPasswordVisible ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
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

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-4 bg-linear-to-r from-accent to-accent-soft text-surface font-bold font-body text-base rounded-xl hover:shadow-[0_0_30px_rgba(19,218,233,0.4)] transition-all shadow-lg"
      >
        Sign In
      </button>
    </form>
  );
};

export default SignInForm;
