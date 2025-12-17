import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LogoMarquee from "@/components/LogoMarquee";
import StatsSection from "@/components/StatsSection";
import StrategySection from "@/components/StrategySection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import FAQSection from "@/components/FAQSection";
import TrustpilotSection from "@/components/TrustpilotSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <LogoMarquee />
        <StatsSection />
        <StrategySection />
        <TestimonialsSection />
        <PortfolioSection />
        <WhyChooseSection />
        <FAQSection />
        <TrustpilotSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
