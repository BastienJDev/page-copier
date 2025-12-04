import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Maths Master",
    category: "Jeu mobile",
    image: "/placeholder.svg",
  },
  {
    title: "E-commerce Pro",
    category: "Site web",
    image: "/placeholder.svg",
  },
  {
    title: "Fitness App",
    category: "Application mobile",
    image: "/placeholder.svg",
  },
];

const PortfolioSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <section className="py-20 px-6 bg-background" id="realisations" aria-labelledby="portfolio-title">
      <div className="container mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span 
            className="inline-block px-6 py-2 rounded-full bg-white text-[16px] font-normal border-[1px] border-[#587cca] shadow-[1px_2px_5px_1px_#527bd5] transition-all duration-150 hover:shadow-none hover:translate-x-[1px] hover:translate-y-[2px] cursor-pointer font-exo"
            style={{ color: '#527bd5' }}
          >
            Nos réalisations clients
          </span>
        </div>

        {/* Title */}
        <div className="text-center mb-6">
          <h2 id="portfolio-title" className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-foreground">Des résultats,</span>
            <br />
            <span className="text-gradient">Pas des promesses.</span>
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Découvrez les projets que nous avons accompagnés vers le succès grâce à notre expertise SEO.
        </p>

        {/* Project Title */}
        <div className="text-center mb-6">
          <h3 className="text-lg">
            <span className="text-muted-foreground">{currentProject.title}</span>
            <span className="text-muted-foreground mx-2">-</span>
            <span className="font-medium text-foreground">{currentProject.category}</span>
          </h3>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Blue Background Area */}
          <div className="bg-gradient-to-br from-[#4A90D9] to-[#5B9FE8] rounded-3xl min-h-[400px] md:min-h-[500px] relative overflow-hidden">
            {/* Navigation Arrows - Inside blue area */}
            <button
              onClick={prevSlide}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Projet précédent"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" strokeWidth={1.5} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Projet suivant"
            >
              <ChevronRight className="w-6 h-6 text-foreground" strokeWidth={1.5} />
            </button>
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-20 left-20 text-white/30 text-6xl font-bold">+</div>
              <div className="absolute bottom-32 left-32 text-white/30 text-4xl font-bold">÷</div>
              <div className="absolute top-40 right-40 text-white/30 text-5xl font-bold">×</div>
              <div className="absolute bottom-20 right-20 text-white/30 text-3xl font-bold">=</div>
              <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-white/20 rounded-lg transform rotate-12" />
              <div className="absolute bottom-1/3 right-1/3 w-16 h-16 border border-white/20 rounded-lg transform -rotate-6" />
            </div>

            {/* Device mockups */}
            <div className="relative z-10 flex items-end justify-center h-full pt-8 pb-0">
              {/* Phone mockup - Main */}
              <div className="relative z-20 w-56 md:w-72 transform -rotate-2 translate-y-8">
                <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="bg-[#4FC3F7] rounded-[2rem] overflow-hidden aspect-[9/19]">
                    {/* Phone content */}
                    <div className="p-4 h-full flex flex-col">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                          <div className="w-5 h-5 bg-orange-500 rounded" />
                        </div>
                        <span className="text-white font-bold text-lg">Maths Master</span>
                        <div className="w-8 h-8 bg-orange-500 rounded-full" />
                      </div>
                      
                      {/* Fox avatar */}
                      <div className="flex justify-center mb-3">
                        <div className="w-12 h-12 bg-orange-400 rounded-full" />
                      </div>
                      
                      {/* CM1 Button */}
                      <div className="bg-orange-500 rounded-full py-2 px-6 mx-auto mb-4">
                        <span className="text-white font-bold">CM1</span>
                      </div>
                      
                      {/* Menu items */}
                      <div className="space-y-2 flex-1">
                        <div className="bg-[#3BA8D8] rounded-xl p-3 flex items-center gap-3">
                          <div className="w-10 h-10 bg-orange-500 rounded-lg" />
                          <div>
                            <p className="text-white font-semibold text-sm">Nombres entiers</p>
                            <p className="text-white/70 text-xs">2/14</p>
                          </div>
                        </div>
                        <div className="bg-[#3BA8D8] rounded-xl p-3 flex items-center gap-3">
                          <div className="w-10 h-10 bg-orange-500 rounded-lg" />
                          <div>
                            <p className="text-white font-semibold text-sm">Addition / soustraction</p>
                            <p className="text-white/70 text-xs">0/14</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tablet mockup - Secondary */}
              <div className="hidden md:block relative z-10 w-80 transform rotate-2 -translate-x-8 translate-y-12">
                <div className="bg-gray-900 rounded-[1.5rem] p-2 shadow-2xl">
                  <div className="bg-[#4FC3F7] rounded-[1.2rem] overflow-hidden aspect-[4/3]">
                    {/* Tablet content */}
                    <div className="p-4 h-full">
                      {/* Progress bar */}
                      <div className="flex justify-end mb-4">
                        <div className="w-32 h-2 bg-white/30 rounded-full overflow-hidden">
                          <div className="w-3/4 h-full bg-orange-500 rounded-full" />
                        </div>
                      </div>
                      
                      {/* Title */}
                      <p className="text-white font-bold text-center mb-6">Compter de 8 en 8</p>
                      
                      {/* Number sequence */}
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="text-white/60 text-xs">+ 8</div>
                        <div className="text-white/60 text-xs">+ 8</div>
                      </div>
                      
                      <div className="flex items-center justify-center gap-3">
                        <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center">
                          <span className="text-white font-bold text-xl">239</span>
                        </div>
                        <div className="w-14 h-14 bg-blue-300 rounded-xl border-2 border-dashed border-white/50" />
                      </div>
                      
                      {/* Number pad hint */}
                      <div className="flex justify-center gap-4 mt-6">
                        <span className="text-white/80">2</span>
                        <span className="text-white/80">3</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-6" : "bg-primary/30"
                }`}
                aria-label={`Aller au projet ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button 
            size="xl" 
            className="bg-[#4A5568] hover:bg-[#3D4654] text-white rounded-full px-10"
          >
            Nos accompagnements
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
