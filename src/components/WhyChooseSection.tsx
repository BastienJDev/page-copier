import { Button } from "@/components/ui/button";
import SeoWheel from "./SeoWheel";

const WhyChooseSection = () => {
  return (
    <section
      className="py-2 md:py-3"
      style={{ background: 'linear-gradient(172deg, rgb(72, 133, 244) 0%, rgb(68, 96, 158) 100%)' }}
      id="why-choose"
      aria-labelledby="why-choose-title"
    >
      <div className="container mx-auto px-6">
        <div className="rounded-3xl p-3 md:p-5 bg-white border-4 border-[#5b9fe8]">
          {/* Title */}
          <h2 id="why-choose-title" className="text-3xl md:text-4xl font-bold text-center mb-2 md:mb-4 text-foreground">
            Pourquoi choisir Easy-SEO Agency ?
          </h2>

          {/* SEO Wheel interactive avec vos visuels */}
          <div className="max-w-6xl lg:max-w-7xl mx-auto mb-4 md:mb-5 flex justify-center items-center">
            <SeoWheel />
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button 
              variant="outline" 
              size="xl" 
              className="bg-white text-[#193058] shadow-[4px_6px_0_#2d4a7c] hover:bg-[#2d4a7c] hover:text-white hover:shadow-none hover:translate-x-1 hover:translate-y-1.5 transition-all duration-150"
              aria-label="Réserver un appel de consultation SEO"
            >
              Réserver mon appel
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
