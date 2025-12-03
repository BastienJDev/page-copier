import { Button } from "@/components/ui/button";
import { ClipboardCheck, Settings, FileText, Link } from "lucide-react";
import { useState } from "react";

const services = [
  {
    title: "Audit & Stratégie",
    description: "Technique, contenu, structure, concurrence : on part sur des bases solides.",
    icon: ClipboardCheck,
    timeline: "2 semaines",
    timelineDescription: "Phase d'analyse\n(création du plan d'action)",
  },
  {
    title: "Refonte Technique",
    description: "On optimise votre site pour Google : vitesse, balises, accessibilité, indexation.",
    icon: Settings,
    timeline: "30 jours",
    timelineDescription: "Optimisations de l'interface\n(fondations SEO)",
  },
  {
    title: "Contenu & Mots-clés",
    description: "Stratégie éditoriale avec rédaction optimisée pour un référencement durable.",
    icon: FileText,
    timeline: "le 2e mois",
    timelineDescription: "Enrichissement de la\nsémantique On-Page",
  },
  {
    title: "Netlinking & Growth",
    description: "Création de liens entrants qualitatifs pour asseoir votre notoriété et vos positions.",
    icon: Link,
    timeline: "le 3e mois",
    timelineDescription: "Backlinks & Croissance\norganique progressive",
  },
];

const StrategySection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-background" id="services" aria-labelledby="strategy-title">
      <div className="container mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="inline-block px-6 py-2 rounded-full border border-primary/30 text-primary text-sm font-medium">
            Notre méthodologie SEO
          </span>
        </div>

        {/* Title */}
        <div className="text-center mb-6">
          <h2 id="strategy-title" className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-foreground">Pensée pour Google,</span>
            <br />
            <span className="text-gradient">Conçue pour vous.</span>
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Une méthode sur-mesure qui s'aligne aux exigences de Google et aux objectifs de votre business.
        </p>

        {/* Services Grid */}
        <div className="relative max-w-5xl mx-auto mb-12">
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-primary/20 rounded-2xl overflow-hidden"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {services.map((service, index) => {
              const isHovered = hoveredIndex === index;
              const hasHover = hoveredIndex !== null;
              
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  className={`relative p-6 flex flex-col cursor-pointer transition-all duration-300 ${
                    isHovered ? "bg-primary/5 scale-105 z-10" : hasHover ? "scale-95 opacity-70" : ""
                  } ${
                    index < services.length - 1 ? "lg:border-r border-primary/20" : ""
                  } ${index < 2 ? "md:border-b lg:border-b-0 border-primary/20" : ""}`}
                >
                {/* Service Content */}
                <div className="flex-1 text-center mb-8">
                  <h3 className="text-primary font-semibold text-lg mb-3 italic">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                  {/* Horizontal line */}
                  <div className="absolute top-4 left-0 right-0 h-[2px] bg-primary/30" />
                  
                  {/* Icon circle */}
                  <div className="relative flex justify-center mb-4">
                    <div className="w-10 h-10 rounded-full border-2 border-primary/30 bg-background flex items-center justify-center z-10">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>

                  {/* Timeline info */}
                  <div className="text-center">
                    <div className="text-primary font-semibold mb-1">
                      {service.timeline}
                    </div>
                    <p className="text-muted-foreground text-xs whitespace-pre-line">
                      {service.timelineDescription}
                    </p>
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button variant="hero" size="xl">
            Démarrer mon projet SEO
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
