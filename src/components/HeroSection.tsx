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
            className="text-white text-[18px] font-normal px-10 py-4 rounded-full transition-all duration-150 shadow-[4px_6px_0_#2d4a7c] hover:shadow-none hover:translate-x-1 hover:translate-y-1.5"
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
            {/* Video Thumbnail */}
            <div className="aspect-video relative bg-foreground/95">
              <img 
                src="/video-thumbnail.jpg" 
                alt="Présentation vidéo d'Easy-Seo Agency montrant les résultats SEO obtenus pour nos clients"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  className="w-20 h-20 bg-[#FF0000] rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group"
                  aria-label="Lire la vidéo de présentation Easy-Seo sur YouTube"
                >
                  <Play className="w-10 h-10 text-white fill-white ml-1 group-hover:scale-110 transition-transform" aria-hidden="true" />
                </button>
              </div>

              {/* Stats Overlays - Top Left */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <div className="bg-background/95 rounded-xl px-4 py-2 shadow-card backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                      <span className="text-xs">🐼</span>
                    </div>
                    <span className="font-semibold text-foreground">Easy-Seo Agency</span>
                  </div>
                </div>
                
                <div className="bg-background/95 rounded-xl px-4 py-2 shadow-card backdrop-blur-sm">
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="text-primary font-bold">696K</div>
                    </div>
                    <div className="text-center">
                      <div className="text-emerald-500 font-bold">19.5M</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Stats Card */}
              <div className="absolute top-4 right-4 bg-background/95 rounded-xl px-4 py-3 shadow-card backdrop-blur-sm">
                <div className="flex gap-4 text-xs">
                  <div className="text-center">
                    <div className="text-primary font-bold text-base">15.8K</div>
                  </div>
                  <div className="text-center">
                    <div className="text-primary font-bold text-base">773K</div>
                  </div>
                  <div className="text-center">
                    <div className="text-muted-foreground font-bold text-base">2%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-muted-foreground font-bold text-base">22.8</div>
                  </div>
                </div>
              </div>

              {/* Bottom Stats */}
              <div className="absolute bottom-24 left-1/2 -translate-x-1/2 bg-background/95 rounded-xl px-6 py-3 shadow-card backdrop-blur-sm">
                <div className="flex gap-8 text-xs">
                  <div className="text-center">
                    <div className="text-muted-foreground text-[10px] mb-1">Total clicks</div>
                    <div className="text-primary font-bold text-xl">53.4K</div>
                  </div>
                  <div className="text-center">
                    <div className="text-muted-foreground text-[10px] mb-1">Total impressions</div>
                    <div className="text-purple-500 font-bold text-xl">2.98M</div>
                  </div>
                  <div className="text-center">
                    <div className="text-muted-foreground text-[10px] mb-1">Average CTR</div>
                    <div className="text-foreground font-bold text-xl">1.8%</div>
                  </div>
                </div>
              </div>

              {/* YouTube Badge */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white/90 text-sm">
                <span>Regarder sur</span>
                <div className="bg-[#FF0000] text-white px-2 py-0.5 rounded text-xs font-bold flex items-center gap-1">
                  <Play className="w-3 h-3 fill-current" />
                  YouTube
                </div>
              </div>

              {/* Bottom text */}
              <div className="absolute bottom-4 right-4">
                <span className="text-white text-2xl font-bold">
                  et <span className="text-coral">même</span>
                </span>
              </div>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
};

export default HeroSection;
