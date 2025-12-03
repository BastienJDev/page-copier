import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";

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
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="inline-block px-6 py-2 rounded-full border border-primary/30 text-primary text-sm font-medium">
            Besoin d'une stratégie de référencement ?
          </span>
        </div>

        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-foreground">Pensée pour Google,</span>
            <br />
            <span className="text-gradient">Conçue pour vous.</span>
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Une méthode sur-mesure qui s'aligne aux exigences de Google et aux objectifs de votre business.
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
          
          {/* Plus Button */}
          <button className="absolute -bottom-10 -right-8 w-14 h-14 rounded-xl border border-gray-200 bg-white shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors">
            <Plus className="w-6 h-6 text-gray-400" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
