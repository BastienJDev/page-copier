import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: 'Pourquoi faut-il constamment "faire vivre" sa fiche Google?',
    answer: "Une fiche Google active et régulièrement mise à jour envoie des signaux positifs à l'algorithme. Publications, photos, réponses aux avis : chaque interaction renforce votre visibilité locale.",
  },
  {
    question: "Que faites-vous pour optimiser les fiches Google My Business?",
    answer: "Nous optimisons tous les aspects de votre fiche : catégories, descriptions, attributs, photos, horaires, et nous mettons en place une stratégie de publications régulières pour maximiser votre visibilité.",
  },
  {
    question: "Pourquoi les avis clients sont essentiels et comment nous facilitons leur collecte?",
    answer: "Les avis sont un facteur de classement majeur. Nous mettons en place des systèmes automatisés de sollicitation d'avis et vous aidons à répondre de manière optimale à chaque retour client.",
  },
  {
    question: "Garantissez-vous que mon classement va s'améliorer?",
    answer: "Nous ne pouvons pas garantir une position spécifique car Google seul contrôle son algorithme. En revanche, nous garantissons l'application des meilleures pratiques SEO qui ont fait leurs preuves.",
  },
  {
    question: "Est-ce que vous pouvez améliorer tous les profils Google?",
    answer: "Oui, nous intervenons sur tous types de profils Google Business : commerces, restaurants, professions libérales, entreprises de services, etc. Chaque stratégie est adaptée à votre secteur.",
  },
  {
    question: "Comment fonctionne la collaboration avec <span class='text-primary'>MAVIZ</span>?",
    answer: "Notre collaboration commence par un audit complet, suivi d'un plan d'action personnalisé. Vous bénéficiez d'un suivi mensuel avec des rapports détaillés et un interlocuteur dédié.",
    hasHtml: true,
  },
  {
    question: "Comment rendez-vous conforme ma fiche Google My Business?",
    answer: "Nous vérifions et corrigeons toutes les informations selon les guidelines Google : nom, adresse, téléphone, catégories, et nous supprimons tout élément pouvant entraîner une pénalité.",
  },
];

const FAQSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question.replace(/<[^>]*>/g, ''),
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-20 px-6 bg-background" id="faq" aria-labelledby="faq-title">
      {/* FAQ Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <div className="container mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="inline-block px-6 py-2 rounded-full border border-primary/30 text-primary text-sm font-medium">
            Questions fréquentes sur le SEO
          </span>
        </div>

        {/* Title */}
        <div className="text-center mb-6">
          <h2 id="faq-title" className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-foreground">Vos questions,</span>
            <br />
            <span className="text-gradient">Nos réponses.</span>
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Retrouvez les réponses aux questions les plus fréquentes sur nos services de référencement naturel.
        </p>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto relative">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-gray-50 rounded-xl border-none px-4"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-4 [&[data-state=open]>svg]:text-accent [&>svg]:text-accent [&>svg]:transition-transform">
                    {faq.hasHtml ? (
                      <span dangerouslySetInnerHTML={{ __html: faq.question }} />
                    ) : (
                      faq.question
                    )}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          {/* Plus/Minus Button */}
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="absolute -bottom-10 -right-24 w-14 h-14 rounded-xl border border-gray-200 bg-white shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            {isExpanded ? (
              <Minus className="w-6 h-6 text-gray-400" />
            ) : (
              <Plus className="w-6 h-6 text-gray-400" />
            )}
          </button>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="max-w-4xl mx-auto mt-20 space-y-12 animate-fade-in">
            {/* Section 1 */}
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Agence de développement d'applications Web et Mobile en France
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Les applications mobiles ont révolutionné notre interaction en ligne. Aujourd'hui, les entreprises leaders à travers le monde ont développé des applications mobiles dédiées. Une application mobile au design soigné, dotée de fonctionnalités personnalisées et intuitives, peut s'avérer un atout majeur pour votre <a href="#" className="text-primary underline">croissance</a>. <strong className="text-foreground">Easyweb</strong>, votre partenaire expert en développement d'applications mobiles en France, met son savoir-faire au service de la complexité du monde mobile pour vous offrir des solutions sur mesure, adaptées précisément à vos besoins. Depuis nos débuts, nous nous sommes affirmés comme une agence de développement d'applications mobiles de référence en France.
                </p>
                <p>
                  Notre succès repose sur une analyse approfondie, une approche technologique centrée sur le client et une soif constante d'innovation, nous propulsant au rang des acteurs majeurs du développement d'applications mobiles. Figurant parmi les meilleures entreprises de logiciels en France, nous nous engageons à intégrer les dernières avancées technologiques pour vous fournir des <a href="#" className="text-primary underline">solutions logicielles</a> complètes. Notre agence propose à ses clients des produits de haute qualité et des services d'excellence dans le <a href="#" className="text-primary underline">développement d'applications</a> Android et iOS, la création d'applications e-commerce, le développement <a href="#" className="text-primary underline">d'applications de réseaux sociaux</a>, et bien plus encore. En tant qu'agence web innovante en France, <strong className="text-foreground">Easyweb</strong> conçoit des sites web robustes et intuitifs qui offrent une expérience utilisateur unique.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                Mettre en place une stratégie de marketing digital efficace
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Mettre en place une stratégie de marketing digital efficace, c'est avant tout partir de vos objectifs réels : visibilité, acquisition, notoriété, conversion ou fidélisation. Il ne s'agit pas d'empiler des actions au hasard, mais de structurer un plan clair, avec les bons canaux, les bons messages et les bons outils. SEO, publicité en ligne, contenu, réseaux sociaux, emailing, automatisation : chaque levier, de la <a href="#" className="text-primary underline">prospection LinkedIn</a> à la <a href="#" className="text-primary underline">gestion de campagne Google Ads</a>, a un rôle précis à jouer. Chez Easyweb, on commence toujours par une phase d'analyse : votre audience, votre positionnement, vos concurrents et vos ressources. Ensuite, on construit une stratégie qui colle à vos moyens et qui sert votre croissance. L'enjeu n'est pas de tout faire, mais de faire ce qui fonctionne, de façon régulière et mesurable.
                </p>
                
                <h4 className="text-xl font-bold text-foreground mt-8 mb-4">
                  Le rôle du marketing digital dans l'acquisition de clients
                </h4>
                <p>
                  Le marketing digital joue un rôle central dans l'acquisition de clients. Il permet de capter l'attention au bon moment, sur les bons canaux, avec un message adapté à chaque étape du parcours. Contrairement aux approches classiques, il offre une capacité de ciblage fine et un suivi précis des performances. SEO, SEA, réseaux sociaux, emailing, contenu : chaque levier, qu'il s'agisse de <a href="#" className="text-primary underline">branding</a>, de <a href="#" className="text-primary underline">consulting SEO</a> ou de <a href="#" className="text-primary underline">prospection BtoB</a>, peut être activé pour attirer des prospects qualifiés.
                </p>
                <p>
                  Chez Easyweb, on ne cherche pas à "faire du digital" pour cocher une case. On conçoit des actions marketing qui servent directement votre acquisition. Cela passe par une bonne compréhension de votre audience, des outils adaptés à vos cycles de vente, et une méthode claire pour transformer le trafic en résultats mesurables. L'acquisition ne se joue pas sur un coup, mais sur une stratégie bien structurée.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQSection;
