import FeaturedDestinations from "@/components/home/featured-destinations/FeaturedDestinations";
import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedDestinations />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
};

export default Home;
