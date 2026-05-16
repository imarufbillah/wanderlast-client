"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/ToastContainer";

const ContactForm = () => {
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Validate form
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call - replace with actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Success
      toast.success("Message sent successfully! We'll get back to you soon.");

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("Contact form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-primary font-body mb-2"
        >
          Your Name <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          className={`w-full px-4 py-3 bg-background border ${
            errors.name ? "border-error" : "border-border"
          } rounded-xl text-primary font-body placeholder:text-text-muted focus:outline-none focus:ring-2 ${
            errors.name ? "focus:ring-error" : "focus:ring-accent"
          } focus:border-transparent transition-all`}
          disabled={isSubmitting}
        />
        {errors.name && (
          <p className="mt-1.5 text-xs text-error font-body">{errors.name}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-primary font-body mb-2"
        >
          Email Address <span className="text-accent">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          className={`w-full px-4 py-3 bg-background border ${
            errors.email ? "border-error" : "border-border"
          } rounded-xl text-primary font-body placeholder:text-text-muted focus:outline-none focus:ring-2 ${
            errors.email ? "focus:ring-error" : "focus:ring-accent"
          } focus:border-transparent transition-all`}
          disabled={isSubmitting}
        />
        {errors.email && (
          <p className="mt-1.5 text-xs text-error font-body">{errors.email}</p>
        )}
      </div>

      {/* Subject Field */}
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-semibold text-primary font-body mb-2"
        >
          Subject <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="How can we help you?"
          className={`w-full px-4 py-3 bg-background border ${
            errors.subject ? "border-error" : "border-border"
          } rounded-xl text-primary font-body placeholder:text-text-muted focus:outline-none focus:ring-2 ${
            errors.subject ? "focus:ring-error" : "focus:ring-accent"
          } focus:border-transparent transition-all`}
          disabled={isSubmitting}
        />
        {errors.subject && (
          <p className="mt-1.5 text-xs text-error font-body">
            {errors.subject}
          </p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-primary font-body mb-2"
        >
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us more about your inquiry..."
          rows={6}
          className={`w-full px-4 py-3 bg-background border ${
            errors.message ? "border-error" : "border-border"
          } rounded-xl text-primary font-body placeholder:text-text-muted focus:outline-none focus:ring-2 ${
            errors.message ? "focus:ring-error" : "focus:ring-accent"
          } focus:border-transparent transition-all resize-none`}
          disabled={isSubmitting}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-error font-body">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full group relative px-6 py-4 bg-accent text-primary font-bold font-body rounded-xl hover:bg-accent-soft active:scale-[0.98] transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-accent disabled:active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
      >
        <span className="flex items-center justify-center gap-2">
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </span>
      </button>

      {/* Privacy Notice */}
      <p className="text-xs text-text-muted font-body text-center">
        By submitting this form, you agree to our{" "}
        <a href="/privacy" className="text-accent hover:text-accent-soft">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="/terms" className="text-accent hover:text-accent-soft">
          Terms of Service
        </a>
        .
      </p>
    </form>
  );
};

export default ContactForm;
