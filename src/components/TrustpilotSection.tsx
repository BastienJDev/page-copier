import { useEffect, useState } from "react";
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slides = Array.from({ length: Math.ceil(reviews.length / 2) }, (_, i) =>
    reviews.slice(i * 2, i * 2 + 2)
  );

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, isHovered ? 5000 : 2000);
    return () => clearInterval(interval);
  }, [isHovered, slides.length]);

  return (
    <section className="py-10 px-6 bg-background">
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
        <div
          className="relative max-w-5xl mx-auto overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full border border-gray-200 bg-white items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Avis précédent"
          >
            <ChevronLeft className="w-5 h-5 text-gray-400" />
          </button>

          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full border border-gray-200 bg-white items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Avis suivant"
          >
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          {/* Reviews Carousel */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((pair, slideIdx) => (
              <div key={slideIdx} className="min-w-full px-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pair.map((review, idx) => (
                    <div key={idx} className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm h-full">
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
