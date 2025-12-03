import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const testimonials = [
  {
    title: "Avis 1",
    text: "Un accompagnement SEO exceptionnel ! Notre trafic a doublé en 3 mois grâce à leur expertise et leur réactivité.",
    author: "Marie DUPONT",
  },
  {
    title: "Avis 2",
    text: "Très satisfait des résultats obtenus. L'équipe est professionnelle et les conseils sont toujours pertinents.",
    author: "Thomas MARTIN",
  },
  {
    title: "Avis 3",
    text: "Excellent travail sur notre référencement. Nos positions ont significativement progressé sur nos mots-clés stratégiques.",
    author: "Sophie BERNARD",
  },
  {
    title: "Avis 4",
    text: "Une vraie expertise SEO ! Ils ont su identifier et corriger tous les problèmes techniques de notre site.",
    author: "Hugues LAFONT",
  },
  {
    title: "Avis 5",
    text: "Partenaire de confiance pour notre stratégie digitale. Les résultats parlent d'eux-mêmes.",
    author: "Julie ROUSSEAU",
  },
  {
    title: "Avis 6",
    text: "Approche méthodique et résultats concrets. Je recommande vivement leurs services SEO.",
    author: "Pierre LEROY",
  },
];

const TestimonialCard = ({ title, text, author, showAuthor = false }: { title: string; text: string; author: string; showAuthor?: boolean }) => (
  <div className="bg-gray-200 rounded-xl p-6 min-w-[320px] max-w-[380px] mx-3 flex-shrink-0">
    <h3 className="text-primary font-bold text-lg mb-3 text-center">{title}</h3>
    <p className="text-foreground/80 text-sm text-center leading-relaxed">{text}</p>
    {showAuthor && (
      <div className="flex items-center gap-2 mt-4">
        <div className="w-8 h-8 rounded-full bg-blue-dark" />
        <span className="text-primary font-medium text-sm">{author}</span>
        <ExternalLink className="w-4 h-4 text-muted-foreground" />
      </div>
    )}
  </div>
);

const TestimonialsSection = () => {
  const topRow = testimonials.slice(0, 3);
  const bottomRow = testimonials.slice(3, 6);

  return (
    <section className="py-20 bg-gradient-to-b from-[#4A90D9] to-[#5B9FE8] overflow-hidden">
      <div className="relative">
        {/* Top row - scrolls right */}
        <div className="mb-6 overflow-hidden">
          <div className="flex animate-marquee-right">
            {[...topRow, ...topRow, ...topRow, ...topRow].map((testimonial, index) => (
              <TestimonialCard key={`top-${index}`} {...testimonial} />
            ))}
          </div>
        </div>

        {/* Bottom row - scrolls left */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee-left">
            {[...bottomRow, ...bottomRow, ...bottomRow, ...bottomRow].map((testimonial, index) => (
              <TestimonialCard key={`bottom-${index}`} {...testimonial} showAuthor={index === 0 || index === 3} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <Button 
          variant="outline" 
          size="xl" 
          className="bg-gray-100 border-gray-200 text-foreground hover:bg-gray-200"
        >
          Voir tous les avis
        </Button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
