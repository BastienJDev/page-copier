import { Button } from "@/components/ui/button";
import { Users, Layout, Search, Code, Euro, BarChart3 } from "lucide-react";

const services = [
  { icon: Users, label: "COMMUNITY", color: "bg-green-500", position: "top-left" },
  { icon: Layout, label: "DESIGN", color: "bg-blue-400", position: "top-right" },
  { icon: Search, label: "SEARCH", color: "bg-yellow-500", position: "middle-left" },
  { icon: Code, label: "HTML", color: "bg-gray-500", position: "middle-right" },
  { icon: Euro, label: "PROFITS", color: "bg-amber-700", position: "bottom-left" },
  { icon: BarChart3, label: "ANALYSIS", color: "bg-red-500", position: "bottom-right" },
];

const WhyChooseSection = () => {
  return (
    <section
      className="py-20"
      style={{ background: 'linear-gradient(172deg, rgb(72, 133, 244) 0%, rgb(68, 96, 158) 100%)' }}
      id="why-choose"
      aria-labelledby="why-choose-title"
    >
      <div className="container mx-auto px-6">
        <div className="rounded-3xl p-10 md:p-16 bg-white border-4 border-[#5b9fe8]">
          {/* Title */}
          <h2 id="why-choose-title" className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Pourquoi choisir Easy-SEO Agency ?
          </h2>

          {/* SEO Wheel Diagram remplacé par l'image fournie */}
          <div className="max-w-4xl mx-auto mb-12 flex justify-center items-center">
            <div className="bg-white rounded-3xl p-6 md:p-8 w-full">
              <img src="/seo-diagram.png" alt="SEO Diagram" className="w-full max-w-2xl mx-auto rounded-2xl shadow-soft" />
            </div>
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
