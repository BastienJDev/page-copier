const publicBase = import.meta.env.BASE_URL || "/";

const logos = [
  { src: `${publicBase}logos/analytics.png`, alt: "Google Analytics" },
  { src: `${publicBase}logos/notion.svg`, alt: "Notion" },
  { src: `${publicBase}logos/figma.svg`, alt: "Figma" },
  { src: `${publicBase}logos/screaming-frog.svg`, alt: "Screaming Frog" },
  { src: `${publicBase}logos/semrush.svg`, alt: "Semrush" },
];

const marqueeItems = [...logos, ...logos, ...logos, ...logos];

const LogoMarquee = () => {
  return (
    <section className="pt-12 pb-2 overflow-hidden border-y border-border/30 bg-background">
      <div className="w-full overflow-hidden">
        <div className="relative w-full overflow-hidden">
          <div className="flex items-center gap-12 md:gap-16 min-w-[200%] whitespace-nowrap animate-marquee-loop-50 will-change-transform">
            {marqueeItems.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-[110px] h-[32px] opacity-50 hover:opacity-100 transition-opacity duration-200 shrink-0"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`h-[24px] max-w-[100px] w-auto object-contain drop-shadow-sm shrink-0 ${
                    logo.alt === "Figma" ? "scale-[0.7]" : ""
                  } ${logo.alt === "Notion" ? "scale-[1.12]" : ""}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="invisible h-[24px]" aria-hidden />
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
