"use client";

import { useState } from "react";
import { Mail, ArrowRight, Check } from "lucide-react";
import { useToast } from "@/components/ui/ToastContainer";

const NewsletterForm = () => {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    // Wire to a real email API when ready
    setSubmitted(true);
    setEmail("");
    toast.success("You're subscribed! Welcome to the Wanderlast community.");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 w-full lg:w-auto"
    >
      <div className="relative flex-1 lg:w-72">
        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-surface/30 pointer-events-none" />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="w-full pl-10 pr-4 py-3 rounded-xl bg-surface/8 border border-surface/12 text-surface text-sm font-body placeholder:text-surface/30 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
        />
      </div>
      <button
        type="submit"
        className="shrink-0 flex items-center gap-2 px-5 py-3 bg-accent text-primary font-bold font-body text-sm rounded-xl hover:bg-accent-soft active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
      >
        {submitted ? (
          <>
            <Check className="w-4 h-4" />
            Done
          </>
        ) : (
          <>
            Subscribe
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
};

export default NewsletterForm;
