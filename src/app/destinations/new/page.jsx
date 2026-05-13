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
import { useRouter } from "next/navigation";
import {
  X,
  Plus,
  Image as ImageIcon,
  DollarSign,
  Calendar,
  Clock,
  Users,
  Star,
  TrendingUp,
} from "lucide-react";
import { useToast } from "@/components/ui/ToastContainer";

const NewDestination = () => {
  const router = useRouter();
  const toast = useToast();
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);

    const formData = new FormData(e.currentTarget);

    // Store form reference before async operation
    const form = e.currentTarget;

    // Process form data
    const data = {
      destinationName: formData.get("destinationName"),
      country: formData.get("country"),
      city: formData.get("city"),
      continent: formData.get("continent"),
      category: formData.get("category"),
      price: formData.get("price"),
      discountPrice: formData.get("discountPrice") || null,
      currency: formData.get("currency"),
      rating: parseFloat(formData.get("rating")),
      reviewsCount: parseInt(formData.get("reviewsCount")),
      duration: formData.get("duration"),
      departureDate: formData.get("departureDate"),
      groupSize: formData.get("groupSize"),
      availability: formData.get("availability"),
      featured: formData.get("featured") === "on",
      popular: formData.get("popular") === "on",
      difficulty: formData.get("difficulty"),
      bestSeason: formData.get("bestSeason"),
      highlights: formData
        .get("highlights")
        .split(",")
        .map((h) => h.trim())
        .filter((h) => h),
      included: formData
        .get("included")
        .split(",")
        .map((i) => i.trim())
        .filter((i) => i),
      imageUrl: formData.get("imageUrl"),
      description: formData.get("description"),
    };

    try {
      // API call
      const req = await fetch("http://localhost:5000/destinations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!req.ok) {
        const errorData = await req.json().catch(() => ({}));
        toast.error(
          errorData.message ||
            "Failed to create destination. Please try again.",
        );
        setIsPending(false);
        return;
      }

      toast.success("Destination created successfully!");

      // Reset form after successful submission
      form.reset();

      // Redirect to destinations page after a short delay
      setTimeout(() => {
        router.push("/destinations");
        router.refresh();
      }, 1000);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(
        "An error occurred while creating. Please check your connection.",
      );
      setIsPending(false);
    }
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

  const continents = [
    "Africa",
    "Antarctica",
    "Asia",
    "Europe",
    "North America",
    "Oceania",
    "South America",
  ];

  const currencies = ["USD", "EUR", "GBP", "JPY", "AUD", "CAD"];

  const availabilityOptions = ["Available", "Limited", "Sold Out"];

  const difficultyLevels = ["Easy", "Moderate", "Challenging", "Difficult"];

  return (
    <div className="min-h-screen bg-background pt-16 md:pt-20">
      <div className="py-16 sm:py-20 md:py-24 px-4 xl:px-20">
        <div className="max-w-6xl mx-auto">
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

                  {/* City */}
                  <TextField name="city" isRequired>
                    <Label className="text-sm font-semibold text-text font-body mb-2 block">
                      City <span className="text-accent">*</span>
                    </Label>
                    <Input
                      placeholder="e.g., Ubud"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text font-body placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    />
                    <FieldError className="text-xs text-red-500 mt-1.5 font-body" />
                  </TextField>

                  {/* Continent */}
                  <div>
                    <Label className="text-sm font-semibold text-text font-body mb-2 block">
                      Continent <span className="text-accent">*</span>
                    </Label>
                    <select
                      name="continent"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all cursor-pointer"
                    >
                      <option value="">Select continent</option>
                      {continents.map((continent) => (
                        <option key={continent} value={continent}>
                          {continent}
                        </option>
                      ))}
                    </select>
                  </div>

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
                      <option value="">Select category</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Pricing Section */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-primary font-heading mb-4 sm:mb-6 pb-3 border-b border-border">
                  Pricing
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
                  {/* Price */}
                  <TextField name="price" type="number" isRequired>
                    <Label className="text-sm font-semibold text-text font-body mb-2 flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-accent" />
                      Price <span className="text-accent">*</span>
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

                  {/* Discount Price */}
                  <TextField name="discountPrice" type="number">
                    <Label className="text-sm font-semibold text-text font-body mb-2 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-accent" />
                      Discount Price
                    </Label>
                    <Input
                      type="number"
                      placeholder="999"
                      min="0"
                      step="0.01"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text font-body placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    />
                    <FieldError className="text-xs text-red-500 mt-1.5 font-body" />
                  </TextField>

                  {/* Currency */}
                  <div>
                    <Label className="text-sm font-semibold text-text font-body mb-2 block">
                      Currency <span className="text-accent">*</span>
                    </Label>
                    <select
                      name="currency"
                      required
                      defaultValue="USD"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all cursor-pointer"
                    >
                      {currencies.map((currency) => (
                        <option key={currency} value={currency}>
                          {currency}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Schedule & Details Section */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-primary font-heading mb-4 sm:mb-6 pb-3 border-b border-border">
                  Schedule & Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
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

                  {/* Group Size */}
                  <TextField name="groupSize" isRequired>
                    <Label className="text-sm font-semibold text-text font-body mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4 text-accent" />
                      Group Size <span className="text-accent">*</span>
                    </Label>
                    <Input
                      placeholder="2-10 People"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text font-body placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    />
                    <FieldError className="text-xs text-red-500 mt-1.5 font-body" />
                  </TextField>

                  {/* Availability */}
                  <div>
                    <Label className="text-sm font-semibold text-text font-body mb-2 block">
                      Availability <span className="text-accent">*</span>
                    </Label>
                    <select
                      name="availability"
                      required
                      defaultValue="Available"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all cursor-pointer"
                    >
                      {availabilityOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Difficulty */}
                  <div>
                    <Label className="text-sm font-semibold text-text font-body mb-2 block">
                      Difficulty <span className="text-accent">*</span>
                    </Label>
                    <select
                      name="difficulty"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all cursor-pointer"
                    >
                      <option value="">Select difficulty</option>
                      {difficultyLevels.map((level) => (
                        <option key={level} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Best Season */}
                  <TextField name="bestSeason" isRequired>
                    <Label className="text-sm font-semibold text-text font-body mb-2 block">
                      Best Season <span className="text-accent">*</span>
                    </Label>
                    <Input
                      placeholder="April - October"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text font-body placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    />
                    <FieldError className="text-xs text-red-500 mt-1.5 font-body" />
                  </TextField>
                </div>
              </div>

              {/* Rating & Reviews Section */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-primary font-heading mb-4 sm:mb-6 pb-3 border-b border-border">
                  Rating & Reviews
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  {/* Rating */}
                  <TextField name="rating" type="number" isRequired>
                    <Label className="text-sm font-semibold text-text font-body mb-2 flex items-center gap-2">
                      <Star className="w-4 h-4 text-accent" />
                      Rating <span className="text-accent">*</span>
                    </Label>
                    <Input
                      type="number"
                      placeholder="4.8"
                      min="0"
                      max="5"
                      step="0.1"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text font-body placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    />
                    <FieldError className="text-xs text-red-500 mt-1.5 font-body" />
                  </TextField>

                  {/* Reviews Count */}
                  <TextField name="reviewsCount" type="number" isRequired>
                    <Label className="text-sm font-semibold text-text font-body mb-2 block">
                      Reviews Count <span className="text-accent">*</span>
                    </Label>
                    <Input
                      type="number"
                      placeholder="1247"
                      min="0"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text font-body placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    />
                    <FieldError className="text-xs text-red-500 mt-1.5 font-body" />
                  </TextField>
                </div>
              </div>

              {/* Features Section */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-primary font-heading mb-4 sm:mb-6 pb-3 border-b border-border">
                  Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  {/* Highlights */}
                  <TextField name="highlights" isRequired>
                    <Label className="text-sm font-semibold text-text font-body mb-2 block">
                      Highlights <span className="text-accent">*</span>
                    </Label>
                    <TextArea
                      placeholder="Uluwatu Temple, Ubud Monkey Forest, Seminyak Beach (comma-separated)"
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text font-body placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                    />
                    <FieldError className="text-xs text-red-500 mt-1.5 font-body" />
                    <p className="text-xs text-text-muted font-body mt-1.5">
                      Separate items with commas
                    </p>
                  </TextField>

                  {/* Included */}
                  <TextField name="included" isRequired>
                    <Label className="text-sm font-semibold text-text font-body mb-2 block">
                      What&apos;s Included{" "}
                      <span className="text-accent">*</span>
                    </Label>
                    <TextArea
                      placeholder="Hotel, Breakfast, Airport Pickup (comma-separated)"
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text font-body placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                    />
                    <FieldError className="text-xs text-red-500 mt-1.5 font-body" />
                    <p className="text-xs text-text-muted font-body mt-1.5">
                      Separate items with commas
                    </p>
                  </TextField>
                </div>

                {/* Checkboxes */}
                <div className="flex flex-wrap gap-6 mt-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="featured"
                      className="w-4 h-4 rounded border-border text-accent focus:ring-2 focus:ring-accent cursor-pointer"
                    />
                    <span className="text-sm font-medium text-text font-body">
                      Featured Destination
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="popular"
                      className="w-4 h-4 rounded border-border text-accent focus:ring-2 focus:ring-accent cursor-pointer"
                    />
                    <span className="text-sm font-medium text-text font-body">
                      Popular Destination
                    </span>
                  </label>
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
                      <ImageIcon className="w-4 h-4 text-accent" />
                      Image URL <span className="text-accent">*</span>
                    </Label>
                    <Input
                      type="url"
                      placeholder="https://images.unsplash.com/photo-..."
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text font-body placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    />
                    <FieldError className="text-xs text-red-500 mt-1.5 font-body" />
                    <p className="text-xs text-text-muted font-body mt-1.5">
                      Provide a high-quality image URL for the destination
                      banner
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
    </div>
  );
};

export default NewDestination;
