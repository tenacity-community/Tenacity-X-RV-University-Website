export const metadata = {
  title: "Tenacity x RV University Hackathon",
  description: "RV University Fest",
};

import Hero from "@/components/hero-home";
// import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta2 from "@/components/cta2";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <BusinessCategories /> */}
      <FeaturesPlanet />
      <LargeTestimonial />
      <Cta />
      <br />
      <Cta2 />
    </>
  );
}
