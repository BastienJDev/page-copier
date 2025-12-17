import { useState } from "react";
import { Facebook, Instagram, Youtube, Star, Linkedin, X } from "lucide-react";
import logoEasySeoWhite from "@/assets/logo_easy_seo_white.png";
const notionLogo = "/logos/notion.png";

const Footer = () => {
  const [showGift, setShowGift] = useState(true);
  const [giftModalOpen, setGiftModalOpen] = useState(false);

  return (
    <footer style={{ background: 'linear-gradient(0deg, #111827 0%, #44609e 100%)' }} className="relative overflow-hidden">
      {/* Triangle cadeau bas gauche */}
      {showGift && (
        <div
          className="hidden md:block absolute bottom-0 left-0 z-20 w-[180px] h-[170px] cursor-pointer"
          onClick={() => setGiftModalOpen(true)}
        >
          <div
            className="absolute inset-0 shadow-[0_10px_24px_-8px_rgba(0,0,0,0.35)]"
            style={{ background: "#fff", clipPath: "polygon(0 100%, 0 0, 100% 100%)" }}
          />
          <div
              className="absolute text-[#161b33] font-semibold leading-tight"
            style={{
              top: "50%",
              left: "6px",
              transform: "rotate(43deg)",
              transformOrigin: "center",
            }}
          >
            <div className="flex items-center gap-2">
              <span className="block text-[19px]">Votre cadeau</span>
              <span className="block text-xl mt-[2px]">🎁</span>
            </div>
          </div>
          <button
            type="button"
            className="absolute bottom-3 left-[190px] w-8 h-8 rounded-full bg-[#0b1220]/85 text-white flex items-center justify-center border border-white/70 shadow-sm hover:bg-[#0b1220] transition"
            onClick={(e) => { e.stopPropagation(); setShowGift(false); }}
            aria-label="Fermer la section cadeau"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16 flex flex-col items-center">
        {/* Newsletter */}
        <div className="w-full max-w-5xl mx-auto mb-14">
          <div className="flex flex-col gap-8 bg-white/10 border border-white/20 rounded-2xl px-6 md:px-8 py-8 shadow-lg shadow-black/10 newsletter-cta">
            <div className="flex flex-col items-center text-center gap-4 newsletter-top">
              <img src={logoEasySeoWhite} alt="Easy-Seo Agency" className="h-12 w-auto drop-shadow-sm" />
              <div className="text-center newsletter-text">
                <p className="text-xs uppercase tracking-[0.24em] text-gray-200">Newsletter SEO</p>
                <p className="text-2xl md:text-3xl font-semibold text-white leading-snug">
                  Bons plans, checklist et documentation gratuite
                </p>
              </div>
            </div>

            <form
              className="flex w-full flex-col lg:flex-row items-stretch lg:items-center gap-3 newsletter-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Votre email pro"
                className="w-full lg:flex-1 px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white text-center placeholder:text-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4885f4] focus:border-transparent transition"
              />
              <button
                type="submit"
                className="w-full lg:w-auto whitespace-nowrap px-6 py-3 rounded-xl text-white font-semibold shadow-[4px_6px_0_#1e2f52] hover:shadow-none hover:translate-x-1 hover:translate-y-1.5 transition border border-[#161b33] text-center"
                style={{ background: 'linear-gradient(110deg, #4885f4 0%, #44609e 100%)' }}
              >
                Je m&apos;inscris
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[6fr_repeat(3,_1fr)] gap-12 w-full max-w-5xl mx-auto items-start justify-items-center text-center md:text-left">
          {/* Brand Column */}
          <div className="flex flex-col items-center md:items-start w-full gap-4 max-w-4xl lg:self-center text-center md:text-center md:col-span-3 lg:col-span-1 mb-10 md:mb-12">
            <p className="text-gray-300 text-base leading-relaxed">
              Easy-SEO Agency vous accompagne avec des services sur mesure
              tels que le référencement sur Google, ou sur les I.A. (en local comme à l&apos;international).
            </p>
            <p className="text-gray-300 text-base mt-2 lg:mt-0 text-center w-full">
              Demandez votre <a href="#" className="underline hover:text-white">devis gratuit</a> !
            </p>
          </div>

          {/* À propos Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left lg:pl-24 md:col-span-1">
            <h4 className="text-xl font-semibold text-white mb-6 underline underline-offset-8 decoration-2">À propos</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Notre histoire</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Témoignages</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Nos agences</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Partenaires</a></li>
              </ul>
            </div>

          {/* Services Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left lg:pl-24 md:col-span-1">
            <h4 className="text-xl font-semibold text-white mb-6 underline underline-offset-8 decoration-2">Services</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Audit SEO</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Refonte SEO</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors xl:whitespace-nowrap">Rédaction SEO</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Netlinking</a></li>
              </ul>
            </div>

          {/* Supports Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left lg:pl-24 md:col-span-1">
            <h4 className="text-xl font-semibold text-white mb-6 underline underline-offset-8 decoration-2">Supports</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Formations</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Outils SEO</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
        </div>

        {/* Trustpilot & Social Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full mt-12 pt-6 border-t border-slate-700/60 gap-4 md:pl-32">
          <div className="flex items-center gap-3">
            <span className="text-white font-semibold text-lg">Excellent</span>
            <div className="flex rounded-sm overflow-hidden">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-[#00B67A] flex items-center justify-center">
                  <Star className="w-4 h-4 text-white fill-white" />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 ml-1.5">
              <Star className="w-5 h-5 text-[#00B67A] fill-[#00B67A]" />
              <span className="text-white font-semibold">Trustpilot</span>
            </div>
          </div>

          <nav className="flex items-center gap-5 text-white" aria-label="Réseaux sociaux">
            <a href="#" className="hover:text-gray-300 transition-colors" aria-label="Suivez Easy-Seo sur Facebook" rel="noopener noreferrer">
              <Facebook className="w-6 h-6" aria-hidden="true" />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors" aria-label="Suivez Easy-Seo sur Pinterest" rel="noopener noreferrer">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.425 1.81-2.425.853 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.827 3.33-.236.996.499 1.807 1.481 1.807 1.777 0 3.143-1.874 3.143-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors" aria-label="Suivez Easy-Seo sur Instagram" rel="noopener noreferrer">
              <Instagram className="w-6 h-6" aria-hidden="true" />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors" aria-label="Suivez Easy-Seo sur TikTok" rel="noopener noreferrer">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors" aria-label="Suivez Easy-Seo sur YouTube" rel="noopener noreferrer">
              <Youtube className="w-6 h-6" aria-hidden="true" />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors" aria-label="Suivez Easy-Seo sur LinkedIn" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6" aria-hidden="true" />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors" aria-label="Suivez Easy-Seo sur Notion" rel="noopener noreferrer">
              <img
                src={notionLogo}
                alt="Notion Logo"
                className="w-7 h-7 transition-opacity duration-200"
                style={{ filter: "brightness(0) invert(1)" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              />
            </a>
          </nav>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="py-1">
        <div className="container mx-auto px-6">
          {/* Copyright */}
          <p className="text-center text-gray-400 text-sm mb-3">
            © 2025, SWEET COMMERCE - 25 rue de Ponthieu 75008 Paris
          </p>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-gray-400 relative">
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

      {/* Modal cadeau */}
      {giftModalOpen && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4" onClick={() => setGiftModalOpen(false)}>
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 text-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center shadow hover:bg-slate-900 transition"
              onClick={() => setGiftModalOpen(false)}
              aria-label="Fermer la popup cadeau"
            >
              <X className="w-4 h-4" />
            </button>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Votre cadeau</h3>
            <p className="text-slate-700">
              Découvrez votre offre spéciale. Cliquez pour fermer cette fenêtre.
            </p>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
