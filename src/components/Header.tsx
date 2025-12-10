import { Button } from "@/components/ui/button";
import logoEasySeo from "@/assets/logo_easy_seo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between" aria-label="Navigation principale">
          {/* Logo */}
          <a href="/" aria-label="Easy-Seo Agency - Accueil">
            <img src={logoEasySeo} alt="Easy-Seo Agency" className="h-11" />
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-12" role="navigation">
            <a href="#services" className="slot-link font-exo font-extrabold text-lg">
              <span className="slot-line current text-gradient-nav">Services</span>
              <span className="slot-line next text-gradient-nav">Services</span>
            </a>
            <a href="#realisations" className="slot-link font-exo font-extrabold text-lg">
              <span className="slot-line current text-gradient-nav">Réalisations</span>
              <span className="slot-line next text-gradient-nav">Réalisations</span>
            </a>
            <a href="#recrutement" className="slot-link font-exo font-extrabold text-lg">
              <span className="slot-line current text-gradient-nav">Recrutement</span>
              <span className="slot-line next text-gradient-nav">Recrutement</span>
            </a>
          </div>

          {/* CTA Button */}
          <button 
            className="text-white text-[14px] font-bold px-4 py-2 rounded-[12px] transition-all duration-150 shadow-[3px_5px_0_#2d4a7c] hover:shadow-none hover:translate-x-1 hover:translate-y-1.5 border-[0.8px] border-[#161b33]"
            style={{ 
              fontFamily: "'Varela', sans-serif",
              background: 'linear-gradient(110deg, #4885f4 0%, #44609e 100%)'
            }}
            aria-label="Nous contacter pour un devis SEO"
          >
            Nous contacter
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
