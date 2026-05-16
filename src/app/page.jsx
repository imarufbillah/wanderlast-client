import FeaturedDestinations from "@/components/home/featured-destinations/FeaturedDestinations";
import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

export const dynamic = "force-dynamic";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedDestinations />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </>
  );
};

export default Home;
