import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Check } from "lucide-react";

const reviews = [
  {
    title: "Trop belle ceinture de très ...",
    text: "Trop belle ceinture de très bonne qualité !",
    author: "Client",
    date: "Il y a 3 jours",
    verified: false,
  },
  {
    title: "Second achat",
    text: "Suite a un premier achat non concluant. La boutique de la ceinture m'a fait un avoir...",
    author: "Client",
    date: "Il y a 6 jours",
    verified: true,
  },
  {
    title: "Qualité , rapidité",
    text: "J'ai reçu ma ceinture rapidement, le cuir de celle-ci est de qualité, prix correct",
    author: "Jean-marie Pécot",
    date: "29 octobre",
    verified: true,
  },
  {
    title: "Ceinture de qualité bcp de...",
    text: "Ceinture de qualité bcp de choix",
    author: "Eddy Baradel",
    date: "29 octobre",
    verified: true,
  },
];

const StarRating = ({ filled = 5 }: { filled?: number }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <div key={i} className={`w-5 h-5 ${i < filled ? "bg-green-500" : "bg-gray-300"} flex items-center justify-center`}>
        <Star className="w-3 h-3 text-white fill-white" />
      </div>
    ))}
  </div>
);

const TrustpilotSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        {/* Trustpilot Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Star className="w-8 h-8 text-green-500 fill-green-500" />
            <span className="text-3xl font-bold text-foreground">Trustpilot</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-xl font-semibold text-foreground">Excellent</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-green-500 flex items-center justify-center">
                  <Star className="w-5 h-5 text-white fill-white" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Avis précédent"
          >
            <ChevronLeft className="w-5 h-5 text-gray-400" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Avis suivant"
          >
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <StarRating />
                  {review.verified && (
                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                      <Check className="w-3 h-3" />
                      <span>Vérifié</span>
                    </div>
                  )}
                </div>
                <h4 className="font-semibold text-foreground text-sm mb-2 line-clamp-1">{review.title}</h4>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{review.text}</p>
                <div className="text-xs">
                  <span className="text-primary font-medium">{review.author},</span>
                  <span className="text-muted-foreground"> {review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trustpilot Footer */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground text-sm">
            Une note de <strong className="text-foreground">4.7</strong> sur 5 sur la base de{" "}
            <a href="#" className="text-foreground underline font-medium">2 536 avis</a>. Nos avis 5 étoiles.
          </p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <Star className="w-5 h-5 text-green-500 fill-green-500" />
            <span className="font-semibold text-foreground">Trustpilot</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustpilotSection;
