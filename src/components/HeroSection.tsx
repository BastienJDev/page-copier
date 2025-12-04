import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 px-6" aria-labelledby="hero-title">
      <div className="container mx-auto text-center">
        {/* Hero Title */}
        <div className="mb-6 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="font-exo font-semibold text-[60px]" style={{ background: 'linear-gradient(90deg, #44609e 0%, #4885f4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Le SEO,</span>
            <br />
            <span className="font-peace-sans font-normal" style={{ background: 'linear-gradient(110deg, #4885f4 0%, #44609e 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>simplement.</span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-[16px] max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in-up animation-delay-200" style={{ animationFillMode: 'forwards', fontFamily: "'Varela Round', sans-serif", fontWeight: 400, color: '#161b33' }}>
          Easy-Seo est une agence 100 % spécialisée en référencement naturel. Nous construisons des stratégies SEO sur-mesure, performantes et durables.
        </p>

        {/* CTA Button */}
        <div className="mb-16 opacity-0 animate-fade-in-up animation-delay-400" style={{ animationFillMode: 'forwards' }}>
          <button 
            className="text-white text-[18px] font-bold px-10 py-4 rounded-[15px] transition-all duration-150 shadow-[4px_6px_0_#2d4a7c] hover:shadow-none hover:translate-x-1 hover:translate-y-1.5"
            style={{ 
              fontFamily: "'Varela Round', sans-serif",
              background: 'linear-gradient(110deg, #4885f4 0%, #44609e 100%)'
            }}
            aria-label="Recevoir mon audit SEO gratuit"
          >
            Recevoir mon audit SEO
          </button>
        </div>

        {/* Video Section */}
        <figure className="relative max-w-4xl mx-auto opacity-0 animate-fade-in-up animation-delay-600" style={{ animationFillMode: 'forwards' }}>
          <div className="relative rounded-2xl overflow-hidden shadow-video">
            {/* Video - Placez votre fichier vidéo dans /public/video-presentation.mp4 */}
            <video 
              src="/video-presentation.mp4"
              poster="/video-thumbnail.jpg"
              className="w-full h-full object-cover aspect-video"
              controls
              muted
              loop
              playsInline
            />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default HeroSection;
