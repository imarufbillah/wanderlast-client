import FeaturedDestinations from "@/components/home/FeaturedDestinations";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedDestinations />
    </>
  );
}
