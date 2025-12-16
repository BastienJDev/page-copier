import { useState } from "react";

type SeoNode = {
  id: string;
  label: string;
  description: string;
  color: string;
  textColor: string;
  gradient: string;
  position: { x: number; y: number };
  tooltipOffset?: { x: number; y: number };
  path: string;
  image?: string;
};

const nodes: SeoNode[] = [
  {
    id: "google-business",
    label: "Google Business",
    description: "Optimisation de votre fiche locale pour attirer plus de clients proches et augmenter les appels/conversions.",
    color: "#f59b34",
    textColor: "#d47202",
    gradient: "radial-gradient(circle at 28% 28%, #fff7eb 0%, #ffd9a8 45%, #fff4e6 75%, #fdfaf5 100%)",
    position: { x: 29, y: 32 },
    tooltipOffset: { x: -24, y: -4 },
    path: "M50 50 C44 40 38 34 30 28",
    image: "/googlebusiness.png",
  },
  {
    id: "mots-cles",
    label: "Mots clés",
    description: "Recherche d'intention, volumes et concurrence pour cibler les requêtes réellement rentables.",
    color: "#78b8ff",
    textColor: "#3b82f6",
    gradient: "radial-gradient(circle at 28% 28%, #f4f8ff 0%, #d8e9ff 45%, #f3f8ff 85%)",
    position: { x: 72, y: 22 },
    tooltipOffset: { x: 10, y: -12 },
    path: "M50 50 C60 40 69 32 78 24",
    image: "/motcle.png",
  },
  {
    id: "contenu",
    label: "Contenu",
    description: "Plans éditoriaux, briefs SEO et optimisation on-page pour attirer et convertir votre audience.",
    color: "#8ad6a4",
    textColor: "#3a9a62",
    gradient: "radial-gradient(circle at 28% 28%, #f4fff7 0%, #d6f7e0 45%, #f3fff7 85%)",
    position: { x: 77, y: 58 },
    tooltipOffset: { x: 10, y: 6 },
    path: "M50 50 C63 53 73 54 84 56",
    image: "/contenu.png",
  },
  {
    id: "backlinks",
    label: "Backlinks",
    description: "Acquisition de liens éditoriaux sûrs pour renforcer la popularité et la confiance de votre domaine.",
    color: "#f59ca7",
    textColor: "#e06272",
    gradient: "radial-gradient(circle at 28% 28%, #fff5f7 0%, #ffd6de 45%, #fff6f8 85%)",
    position: { x: 64, y: 77 },
    tooltipOffset: { x: 6, y: 10 },
    path: "M50 50 C56 64 60 70 64 78",
    image: "/backlink.png",
  },
  {
    id: "technique",
    label: "Technique",
    description: "Performance, indexabilité, schémas et analyse des logs pour un site rapide et parfaitement crawlable.",
    color: "#b7a5ff",
    textColor: "#7a65d6",
    gradient: "radial-gradient(circle at 28% 28%, #f7f4ff 0%, #e3dbff 45%, #f8f4ff 85%)",
    position: { x: 35, y: 79 },
    tooltipOffset: { x: -8, y: 14 },
    path: "M50 50 C44 62 38 72 34 82",
    image: "/technique.png",
  },
  {
    id: "maillage",
    label: "Maillage interne",
    description: "Architecture, silos et liens contextuels pour propulser les pages stratégiques et répartir l'autorité.",
    color: "#c2c2c2",
    textColor: "#7a7a7a",
    gradient: "radial-gradient(circle at 28% 28%, #f8f8f8 0%, #e8e8e8 45%, #fbfbfb 85%)",
    position: { x: 21, y: 55 },
    tooltipOffset: { x: -26, y: 6 },
    path: "M50 50 C40 54 32 56 24 58",
    image: "/maillage.png",
  },
];

const SeoWheel = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeNode = activeId ? nodes.find((node) => node.id === activeId) : null;
  const defaultImage = "/seo-base.png";
  const displayImage = activeNode?.image ?? defaultImage;
  const displayAlt = activeNode?.label ? `Visuel ${activeNode.label}` : "Visuel SEO";
  const handleActivate = (id: string | null) => {
    setActiveId(id);
  };

  return (
    <div
      className="relative w-full max-w-[1400px] xl:max-w-[1500px] mx-auto aspect-[748/450] rounded-[28px] bg-transparent shadow-none overflow-visible"
      onMouseLeave={() => handleActivate(null)}
    >
      <div className="absolute inset-0">
        <img
          src={displayImage}
          alt={displayAlt}
          className="h-full w-full object-contain pointer-events-none select-none"
          draggable={false}
        />
      </div>

      {/* Zones cliquables/hover invisibles */}
      <div className="absolute inset-0">
        {nodes.map((node) => {
          const isActive = activeId === node.id;

          return (
            <div
              key={node.id}
              className="absolute"
              style={{ left: `${node.position.x}%`, top: `${node.position.y}%`, transform: "translate(-50%, -50%)" }}
            >
              <button
                type="button"
                onMouseEnter={() => handleActivate(node.id)}
                onFocus={() => handleActivate(node.id)}
                onBlur={() => handleActivate(null)}
                onClick={() => handleActivate(isActive ? null : node.id)}
                className="relative inline-flex h-28 w-28 md:h-36 md:w-36 lg:h-40 lg:w-40 items-center justify-center rounded-full bg-transparent focus:outline-none focus-visible:ring-4 focus-visible:ring-[#5b9fe8]/40"
                aria-describedby={`${node.id}-tooltip`}
              >
                <span className="sr-only">{node.label}</span>
              </button>

              {isActive && (
                <span id={`${node.id}-tooltip`} className="sr-only">
                  {node.description}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Center */}
      {/* Suppression du visuel central : l'image fournie sert de base */}
    </div>
  );
};

export default SeoWheel;
