import HeroSection from "@/components/hero";
import FeaturesSection from "@/components/features-section";
import StatsSection from "@/components/stats-section";
import HowItWorkSection from "@/components/how-it-work-section";
import Testimonial from "@/components/testimonial";
import FaqSection from "@/components/faq-section";
import CtaSection from "@/components/cta-section";

const Home = () => {
  return (
    <>
      <div className="grid-background"></div>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <HowItWorkSection />
      <Testimonial />
      <FaqSection />
      <CtaSection />
    </>
  );
};

export default Home;
