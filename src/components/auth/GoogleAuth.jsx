"use client";

import { authClient } from "@/lib/auth-client";
import { FcGoogle } from "react-icons/fc";

const GoogleAuth = () => {
  const handleGoogleSignUp = () => {
    const { data, error } = authClient.signIn.social({
      provider: "google",
    });
    console.log(data, error);
  };

  return (
    <button
      type="button"
      onClick={handleGoogleSignUp}
      className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-surface border-2 border-border rounded-xl hover:bg-background transition-all font-body font-semibold text-text"
    >
      <FcGoogle className="w-5 h-5" />
      Sign up with Google
    </button>
  );
};

export default GoogleAuth;
