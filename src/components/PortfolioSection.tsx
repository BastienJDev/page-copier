import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        {/* Project Title */}
        <div className="text-center mb-8">
          <span className="text-muted-foreground">{currentProject.title}</span>
          <span className="text-muted-foreground mx-2">-</span>
          <span className="font-semibold text-foreground">{currentProject.category}</span>
        </div>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center hover:bg-muted transition-colors"
            aria-label="Projet précédent"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center hover:bg-muted transition-colors"
            aria-label="Projet suivant"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Project Display */}
          <div className="bg-gradient-to-br from-[#4A90D9] to-[#5B9FE8] rounded-3xl p-8 md:p-12 min-h-[400px] md:min-h-[500px] flex items-center justify-center relative overflow-hidden">
            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 border border-white/30 rounded-lg transform rotate-12" />
              <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/30 rounded-lg transform -rotate-6" />
              <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/30 rounded-lg transform rotate-45" />
            </div>

            {/* Device mockups placeholder */}
            <div className="relative z-10 flex items-center justify-center gap-4">
              {/* Phone mockup */}
              <div className="w-48 md:w-64 h-80 md:h-96 bg-foreground/90 rounded-[2.5rem] p-2 shadow-2xl transform -rotate-3">
                <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-xl mx-auto mb-4" />
                    <p className="text-foreground font-semibold">{currentProject.title}</p>
                    <p className="text-muted-foreground text-sm">{currentProject.category}</p>
                  </div>
                </div>
              </div>

              {/* Tablet mockup (hidden on mobile) */}
              <div className="hidden md:block w-72 h-80 bg-foreground/90 rounded-[1.5rem] p-2 shadow-2xl transform rotate-2 translate-y-8">
                <div className="w-full h-full bg-white rounded-[1.2rem] overflow-hidden flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="w-20 h-20 bg-primary/20 rounded-xl mx-auto mb-4" />
                    <p className="text-foreground font-semibold">{currentProject.title}</p>
                    <p className="text-muted-foreground text-sm">Aperçu du projet</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
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
      </div>
    </section>
  );
};

export default PortfolioSection;
