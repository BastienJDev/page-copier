import { Facebook, Instagram, Youtube, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-bold italic mb-4">
              Easy-Seo
              <span className="text-xs font-normal block">AGENCY</span>
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Easy-SEO Agency vous accompagne avec des services sur mesure tels que le{" "}
              <a href="#" className="underline hover:text-white">référencement sur Google</a>, ou sur les{" "}
              <a href="#" className="underline hover:text-white">I.A.</a> (en{" "}
              <a href="#" className="underline hover:text-white">local</a> comme à{" "}
              <a href="#" className="underline hover:text-white">l'international</a>).
            </p>
            <p className="text-gray-300 text-sm mt-4">
              Demandez votre <a href="#" className="underline hover:text-white">devis gratuit</a> !
            </p>
          </div>

          {/* À propos Column */}
          <div>
            <h4 className="text-xl font-semibold mb-6 underline underline-offset-8">À propos</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Notre histoire</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Témoignages</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Nos agences</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Partenaires</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-xl font-semibold mb-6 underline underline-offset-8">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Audit SEO</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Refonte SEO</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Rédaction SEO</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Netlinking</a></li>
            </ul>
          </div>

          {/* Supports Column */}
          <div>
            <h4 className="text-xl font-semibold mb-6 underline underline-offset-8">Supports</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Formations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Outils SEO</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Trustpilot & Social Row */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-12 pt-8 border-t border-slate-700">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="font-semibold">Excellent</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-6 h-6 bg-green-500 flex items-center justify-center">
                  <Star className="w-4 h-4 text-white fill-white" />
                </div>
              ))}
            </div>
            <Star className="w-5 h-5 text-green-500 fill-green-500 ml-2" />
            <span className="font-semibold">Trustpilot</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.425 1.81-2.425.853 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.827 3.33-.236.996.499 1.807 1.481 1.807 1.777 0 3.143-1.874 3.143-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-slate-900 py-6">
        <div className="container mx-auto px-6">
          {/* Payment Icons */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-white rounded px-2 py-1 text-xs font-bold text-blue-600">VISA</div>
            <div className="bg-orange-500 rounded px-2 py-1 text-xs font-bold text-white">MC</div>
            <div className="bg-blue-600 rounded px-2 py-1 text-xs font-bold text-white">AMEX</div>
            <div className="bg-blue-800 rounded px-2 py-1 text-xs font-bold text-white">PayPal</div>
            <div className="bg-black rounded px-2 py-1 text-xs font-bold text-white">Pay</div>
            <div className="bg-white rounded px-2 py-1 text-xs font-bold text-gray-800">GPay</div>
          </div>

          {/* Copyright */}
          <p className="text-center text-gray-400 text-sm mb-2">
            © 2025, SWEET COMMERCE - 25 rue de Ponthieu 75008 Paris
          </p>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-gray-400">
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
