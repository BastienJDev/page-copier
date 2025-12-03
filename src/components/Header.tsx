import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between" aria-label="Navigation principale">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2" aria-label="Easy-Seo Agency - Accueil">
            <span className="text-2xl font-bold text-primary">Easy-Seo</span>
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Agency</span>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8" role="navigation">
            <a href="#services" className="text-primary font-medium hover:text-primary/80 transition-colors">
              Services
            </a>
            <a href="#realisations" className="text-primary font-medium hover:text-primary/80 transition-colors">
              Réalisations
            </a>
            <a href="#recrutement" className="text-primary font-medium hover:text-primary/80 transition-colors">
              Recrutement
            </a>
          </div>

          {/* CTA Button */}
          <Button variant="cta" size="lg" aria-label="Nous contacter pour un devis SEO">
            Nous contacter
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
