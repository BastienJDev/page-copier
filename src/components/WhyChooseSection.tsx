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
    <section className="py-20 bg-gradient-to-b from-[#4A90D9] to-[#5B9FE8]">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Pourquoi choisir Easy-SEO Agency ?
        </h2>

        {/* SEO Wheel Diagram */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-slate-800 rounded-3xl p-8 md:p-12 relative">
            {/* Central SEO Element */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" style={{ minWidth: '400px', minHeight: '300px' }}>
                  {/* Lines from center to each icon */}
                  <line x1="200" y1="150" x2="80" y2="50" stroke="white" strokeWidth="2" />
                  <line x1="200" y1="150" x2="320" y2="50" stroke="white" strokeWidth="2" />
                  <line x1="200" y1="150" x2="30" y2="150" stroke="white" strokeWidth="2" />
                  <line x1="200" y1="150" x2="370" y2="150" stroke="white" strokeWidth="2" />
                  <line x1="200" y1="150" x2="80" y2="250" stroke="white" strokeWidth="2" />
                  <line x1="200" y1="150" x2="320" y2="250" stroke="white" strokeWidth="2" />
                </svg>

                {/* Icon Grid */}
                <div className="grid grid-cols-3 gap-8 md:gap-16 relative z-10">
                  {/* Top row */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-green-500 flex items-center justify-center border-4 border-white">
                      <Users className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>
                    <span className="text-white text-xs mt-2 font-medium">COMMUNITY</span>
                  </div>
                  <div className="flex items-center justify-center">
                    {/* Empty space for layout */}
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-400 flex items-center justify-center border-4 border-white">
                      <Layout className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>
                    <span className="text-white text-xs mt-2 font-medium">DESIGN</span>
                  </div>

                  {/* Middle row */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-yellow-500 flex items-center justify-center border-4 border-white">
                      <Search className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>
                    <span className="text-white text-xs mt-2 font-medium">SEARCH</span>
                  </div>
                  <div className="flex flex-col items-center">
                    {/* Central SEO circle */}
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white flex flex-col items-center justify-center bg-slate-700">
                      <div className="w-12 h-10 bg-white rounded-t-lg mb-1 flex items-center justify-center">
                        <div className="w-8 h-8 text-orange-500">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                          </svg>
                        </div>
                      </div>
                      <span className="text-primary font-bold text-lg md:text-xl">SEO</span>
                      <span className="text-orange-400 text-xs font-medium">WHITE HAT</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-500 flex items-center justify-center border-4 border-white">
                      <Code className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>
                    <span className="text-white text-xs mt-2 font-medium">HTML</span>
                  </div>

                  {/* Bottom row */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-amber-700 flex items-center justify-center border-4 border-white">
                      <Euro className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>
                    <span className="text-white text-xs mt-2 font-medium">PROFITS</span>
                  </div>
                  <div className="flex items-center justify-center">
                    {/* Empty space for layout */}
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-red-500 flex items-center justify-center border-4 border-white">
                      <BarChart3 className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>
                    <span className="text-white text-xs mt-2 font-medium">ANALYSIS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="xl" 
            className="bg-gray-100 border-gray-200 text-foreground hover:bg-gray-200"
          >
            Réserver mon appel
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
