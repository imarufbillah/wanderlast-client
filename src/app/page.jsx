import FeaturedDestinations from "@/components/home/featured-destinations/FeaturedDestinations";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/ui/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedDestinations />
    </>
  );
};

export default Home;
