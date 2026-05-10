"use client";

import {
  Form,
  TextField,
  Label,
  Input,
  FieldError,
  Button,
  TextArea,
} from "@heroui/react";
import { useState } from "react";
import Link from "next/link";
import { X, Plus, Image, DollarSign, Calendar, Clock } from "lucide-react";

const NewDestination = () => {
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form data:", data);
    setIsPending(false);
    
    // Reset form after successful submission
    e.currentTarget.reset();
  };

  const categories = [
    "Beach",
    "Mountain",
    "City",
    "Adventure",
    "Cultural",
    "Luxury",
    "Wildlife",
    "Historical",
  ];

  return (
    <div className="min-h-screen bg-background py-20 md:py-24 px-4 xl:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary font-heading mb-2">
                Add New <span className="text-accent">Destination</span>
              </h1>
              <p className="text-sm sm:text-base text-text-muted font-body">
                Create a new travel destination package for your customers
              </p>
            </div>
            <Link
              href="/destinations"
              className="shrink-0 p-2.5 text-text-muted hover:text-accent hover:bg-background rounded-xl transition-all"
              aria-label="Close"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </Link>
          </div>
        </div>

        {/* Form */}
        <Form
          onSubmit={handleSubmit}
          className="bg-surface rounded-3xl shadow-xl border border-border/50 p-6 sm:p-8 md:p-10 lg:p-12"
        >
          <div className="space-y-8">
            {/* Basic Information Section */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-primary font-heading mb-4 sm:mb-6 pb-3 border-b border-border">
                Basic Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {/* Destination Name */}
                <div className="md:col-span-2">
                  <TextField name="destinationName" isRequired>
                    <Label className="text-sm font-semibold text-text font-body mb-2 block">
                      Destination Name <span className="text-accent">*</span>
                    </Label>
                    <Input
                      placeholder="e.g., Bali Paradise"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text font-body placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    />
                    <FieldError className="text-xs text-red-500 mt-1.5 font-body" />
                  </TextField>
                </div>

                {/* Country */}
                <TextField name="country" isRequired>
                  <Label className="text-sm font-semibold text-text font-body mb-2 block">
                    Country <span className="text-accent">*</span>
                  </Label>
                  <Input
                    placeholder="e.g., Indonesia"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text font-body placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  />
                  <FieldError className="text-xs text-red-500 mt-1.5 font-body" />
                </TextField>

                {/* Category */}
                <div>
                  <Label className="text-sm font-semibold text-text font-body mb-2 block">
                    Category <span className="text-accent">*</span>
                  </Label>
                  <select
                    name="category"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all cursor-pointer"
                  >
                    <option value="" className="text-text-muted">
                      Select category
                    </option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Pricing & Schedule Section */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-primary font-heading mb-4 sm:mb-6 pb-3 border-b border-border">
                Pricing & Schedule
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
                {/* Price */}
                <TextField name="price" type="number" isRequired>
                  <Label className="text-sm font-semibold text-text font-body mb-2 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-accent" />
                    Price (USD) <span className="text-accent">*</span>
                  </Label>
                  <Input
                    type="number"
                    placeholder="1299"
                    min="0"
                    step="0.01"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text font-body placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  />
                  <FieldError className="text-xs text-red-500 mt-1.5 font-body" />
                </TextField>

                {/* Duration */}
                <TextField name="duration" isRequired>
                  <Label className="text-sm font-semibold text-text font-body mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-accent" />
                    Duration <span className="text-accent">*</span>
                  </Label>
                  <Input
                    placeholder="7 Days / 6 Nights"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text font-body placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  />
                  <FieldError className="text-xs text-red-500 mt-1.5 font-body" />
                </TextField>

                {/* Departure Date */}
                <TextField name="departureDate" type="date" isRequired>
                  <Label className="text-sm font-semibold text-text font-body mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-accent" />
                    Departure Date <span className="text-accent">*</span>
                  </Label>
                  <Input
                    type="date"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  />
                  <FieldError className="text-xs text-red-500 mt-1.5 font-body" />
                </TextField>
              </div>
            </div>

            {/* Media & Description Section */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-primary font-heading mb-4 sm:mb-6 pb-3 border-b border-border">
                Media & Description
              </h3>
              <div className="space-y-5 sm:space-y-6">
                {/* Image URL */}
                <TextField name="imageUrl" type="url" isRequired>
                  <Label className="text-sm font-semibold text-text font-body mb-2 flex items-center gap-2">
                    <Image className="w-4 h-4 text-accent" />
                    Image URL <span className="text-accent">*</span>
                  </Label>
                  <Input
                    type="url"
                    placeholder="https://example.com/destination-image.jpg"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text font-body placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  />
                  <FieldError className="text-xs text-red-500 mt-1.5 font-body" />
                  <p className="text-xs text-text-muted font-body mt-1.5">
                    Provide a high-quality image URL for the destination banner
                  </p>
                </TextField>

                {/* Description */}
                <TextField name="description" isRequired>
                  <Label className="text-sm font-semibold text-text font-body mb-2 block">
                    Description <span className="text-accent">*</span>
                  </Label>
                  <TextArea
                    placeholder="Describe the travel experience, highlights, and what makes this destination special..."
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text font-body placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                  />
                  <FieldError className="text-xs text-red-500 mt-1.5 font-body" />
                  <p className="text-xs text-text-muted font-body mt-1.5">
                    Minimum 50 characters recommended
                  </p>
                </TextField>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4 pt-8 mt-8 border-t border-border">
            <Link
              href="/destinations"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-background text-text font-semibold font-body rounded-xl border-2 border-border hover:border-accent hover:text-accent transition-all text-sm sm:text-base"
            >
              <X className="w-4 h-4" />
              Cancel
            </Link>
            <Button
              type="submit"
              disabled={isPending}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-linear-to-r from-accent to-accent-soft text-surface font-bold font-body rounded-xl hover:shadow-[0_0_30px_rgba(19,218,233,0.4)] transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
            >
              {isPending ? (
                <>
                  <div className="w-4 h-4 border-2 border-surface/30 border-t-surface rounded-full animate-spin" />
                  Adding Package...
                </>
              ) : (
                <>
                  <Plus className="w-5 h-5" />
                  Add Travel Package
                </>
              )}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default NewDestination;