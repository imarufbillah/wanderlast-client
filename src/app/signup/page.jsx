import Link from "next/link";
import { Suspense } from "react";
import GoogleAuth from "@/components/auth/GoogleAuth";
import SignUpForm from "@/components/auth/SignUpForm";

const SignUpPage = () => {
  return (
    <div className="min-h-screen bg-background pt-16 md:pt-20">
      <div className="flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary font-heading mb-3">
              Create Account
            </h1>
            <p className="text-text-muted font-body">
              Join WanderLast and start your adventure
            </p>
          </div>

          {/* Sign Up Card */}
          <div className="bg-surface rounded-3xl shadow-xl border border-border p-8">
            {/* Google Sign Up Button */}
            <Suspense
              fallback={
                <div className="w-full h-12 bg-surface animate-pulse rounded-xl" />
              }
            >
              <GoogleAuth />
            </Suspense>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-surface text-text-muted font-body">
                  Or sign up with email
                </span>
              </div>
            </div>

            {/* Sign Up Form */}
            <SignUpForm />

            {/* Sign In Link */}
            <p className="text-center text-sm text-text-muted font-body mt-6">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="text-accent hover:underline font-semibold"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
