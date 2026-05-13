"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { useToast } from "@/components/ui/ToastContainer";
import { Eye, EyeOff, Mail, Lock, Loader2 } from "lucide-react";
import Link from "next/link";

const SignInForm = () => {
  const router = useRouter();
  const toast = useToast();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fieldError, setFieldError] = useState("");

  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  const handleSignIn = async (formData) => {
    setFieldError("");
    setIsLoading(true);

    const email = formData.get("email");
    const password = formData.get("password");

    const { data, error } = await authClient.signIn.email({ email, password });

    setIsLoading(false);

    if (error) {
      const message =
        error.message || "Invalid email or password. Please try again.";
      setFieldError(message);
      toast.error(message);
      return;
    }

    toast.success("Welcome back! Redirecting...");
    setTimeout(() => router.push("/"), 500);
  };

  return (
    <form action={handleSignIn} className="space-y-5">
      {/* Inline error banner */}
      {fieldError && (
        <div className="flex items-start gap-2 px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-500 text-sm font-body animate-fade-in">
          <span className="mt-0.5 shrink-0">⚠</span>
          <span>{fieldError}</span>
        </div>
      )}

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
            disabled={isLoading}
            className="w-full pl-10 pr-12 py-3 rounded-xl border border-border bg-surface text-text font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all disabled:opacity-60 disabled:cursor-not-allowed"
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
        disabled={isLoading}
        className="w-full py-4 bg-linear-to-r from-accent to-accent-soft text-surface font-bold font-body text-base rounded-xl hover:shadow-[0_0_30px_rgba(19,218,233,0.4)] transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:shadow-none"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Signing in...
          </>
        ) : (
          "Sign In"
        )}
      </button>
    </form>
  );
};

export default SignInForm;
