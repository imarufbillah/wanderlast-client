import Link from "next/link";
import GoogleAuth from "@/components/auth/GoogleAuth";
import SignInForm from "@/components/auth/SignInForm";

const SignInPage = () => {
  return (
    <div className="min-h-screen bg-background pt-16 md:pt-20">
      <div className="flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary font-heading mb-3">
              Welcome Back
            </h1>
            <p className="text-text-muted font-body">
              Sign in to continue your adventure
            </p>
          </div>

          {/* Sign In Card */}
          <div className="bg-surface rounded-3xl shadow-xl border border-border p-8">
            {/* Google Sign In Button */}
            <GoogleAuth label="Sign in with Google" />

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-surface text-text-muted font-body">
                  Or sign in with email
                </span>
              </div>
            </div>

            {/* Sign In Form */}
            <SignInForm />

            {/* Sign Up Link */}
            <p className="text-center text-sm text-text-muted font-body mt-6">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="text-accent hover:underline font-semibold"
              >
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
