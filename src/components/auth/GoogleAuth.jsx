"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { useToast } from "@/components/ui/ToastContainer";
import { Loader2 } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

const GoogleAuth = ({ label = "Sign up with Google" }) => {
  const router = useRouter();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleAuth = async () => {
    setIsLoading(true);

    const { data, error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });

    if (error) {
      setIsLoading(false);
      toast.error(error.message || "Google sign-in failed. Please try again.");
      return;
    }

    // callbackURL handles the redirect; keep spinner until navigation
    toast.success("Redirecting to Google...");
  };

  return (
    <button
      type="button"
      onClick={handleGoogleAuth}
      disabled={isLoading}
      className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-surface border border-border rounded-xl hover:bg-background active:scale-95 transition-all font-body font-semibold text-text disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
    >
      {isLoading ? (
        <Loader2 className="w-5 h-5 animate-spin text-text-muted" />
      ) : (
        <FcGoogle className="w-5 h-5" />
      )}
      {isLoading ? "Redirecting..." : label}
    </button>
  );
};

export default GoogleAuth;
