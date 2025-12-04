import { Facebook, Instagram, Youtube, Star, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer style={{ background: 'linear-gradient(90deg, #111827 0%, #44609e 100%)' }}>
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <h3 className="text-3xl font-black italic text-white mb-1">
              Easy-Seo
            </h3>
            <span className="text-white text-xs tracking-widest">AGENCY</span>
            <p className="text-gray-300 text-base leading-relaxed mt-6">
              Easy-SEO Agency vous accompagne avec des services sur mesure tels que le{" "}
              <a href="#" className="underline hover:text-white">référencement sur Google</a>, ou sur les{" "}
              <a href="#" className="underline hover:text-white">I.A.</a> (en{" "}
              <a href="#" className="underline hover:text-white">local</a> comme à{" "}
              <a href="#" className="underline hover:text-white">l'international</a>).
            </p>
            <p className="text-gray-300 text-base mt-4">
              Demandez votre <a href="#" className="underline hover:text-white">devis gratuit</a> !
            </p>
          </div>

          {/* À propos Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-semibold text-white mb-6 underline underline-offset-8 decoration-2">À propos</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Notre histoire</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Témoignages</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Nos agences</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Partenaires</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-semibold text-white mb-6 underline underline-offset-8 decoration-2">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Audit SEO</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Refonte SEO</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Rédaction SEO</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Netlinking</a></li>
            </ul>
          </div>

          {/* Supports Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xl font-semibold text-white mb-6 underline underline-offset-8 decoration-2">Supports</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Formations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Outils SEO</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Trustpilot & Social Row */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-16 pt-8 border-t border-slate-600">
          <div className="flex items-center gap-3 mb-6 md:mb-0">
            <span className="text-white font-semibold text-lg">Excellent</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-7 h-7 bg-[#00B67A] flex items-center justify-center">
                  <Star className="w-4 h-4 text-white fill-white" />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1 ml-2">
              <Star className="w-5 h-5 text-[#00B67A] fill-[#00B67A]" />
              <span className="text-white font-semibold">Trustpilot</span>
            </div>
          </div>

          <nav className="flex items-center gap-6" aria-label="Réseaux sociaux">
            <a href="#" className="text-white hover:text-gray-300 transition-colors" aria-label="Suivez Easy-Seo sur Facebook" rel="noopener noreferrer">
              <Facebook className="w-6 h-6" aria-hidden="true" />
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors" aria-label="Suivez Easy-Seo sur Pinterest" rel="noopener noreferrer">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.425 1.81-2.425.853 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.827 3.33-.236.996.499 1.807 1.481 1.807 1.777 0 3.143-1.874 3.143-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors" aria-label="Suivez Easy-Seo sur Instagram" rel="noopener noreferrer">
              <Instagram className="w-6 h-6" aria-hidden="true" />
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors" aria-label="Suivez Easy-Seo sur TikTok" rel="noopener noreferrer">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors" aria-label="Suivez Easy-Seo sur YouTube" rel="noopener noreferrer">
              <Youtube className="w-6 h-6" aria-hidden="true" />
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors" aria-label="Suivez Easy-Seo sur LinkedIn" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6" aria-hidden="true" />
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors" aria-label="Suivez Easy-Seo sur Notion" rel="noopener noreferrer">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 2.02c-.42-.326-.98-.7-2.054-.607L3.01 2.687c-.467.047-.56.28-.374.466l1.823 1.055zM5.253 7.19v13.661c0 .747.373 1.027 1.213.98l14.523-.84c.84-.046.933-.56.933-1.166V6.396c0-.606-.233-.933-.746-.886l-15.177.886c-.56.047-.746.327-.746.794zm14.336.84c.094.42 0 .84-.42.886l-.7.14v10.264c-.607.327-1.166.514-1.633.514-.746 0-.933-.234-1.493-.933l-4.572-7.186v6.952l1.446.327s0 .84-1.166.84l-3.22.186c-.093-.186 0-.653.327-.746l.84-.233V9.163l-1.166-.093c-.094-.42.14-1.026.793-1.073l3.453-.233 4.759 7.279V8.357l-1.213-.14c-.094-.514.28-.886.746-.933l3.219-.187zM2.667 1.267L16.346.08c1.68-.14 2.1.047 2.8.56l3.86 2.707c.467.327.606.42.606.98v15.176c0 .606-.18 1.073-.793 1.12l-15.503.933c-.467.027-.7-.047-1.167-.653l-1.54-1.68c-.42-.466-.606-.84-.606-1.306V2.247c0-.607.14-1.12.607-1.12l-.143.14z"/>
              </svg>
            </a>
          </nav>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="py-6">
        <div className="container mx-auto px-6">
          {/* Copyright */}
          <p className="text-center text-gray-400 text-sm mb-3">
            © 2025, SWEET COMMERCE - 25 rue de Ponthieu 75008 Paris
          </p>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-gray-400">
            <a href="#" className="hover:text-white">Mentions Légales</a>
            <span>•</span>
            <a href="#" className="hover:text-white">CGV</a>
            <span>•</span>
            <a href="#" className="hover:text-white">CGU</a>
            <span>•</span>
            <a href="#" className="hover:text-white">Politique de retour</a>
            <span>•</span>
            <a href="#" className="hover:text-white">Politique d'expédition</a>
            <span>•</span>
            <a href="#" className="hover:text-white">Politique de confidentialité</a>
            <span>•</span>
            <a href="#" className="hover:text-white">RGPD</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
