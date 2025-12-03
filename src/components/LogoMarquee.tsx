const logos = [
  { name: "SEMRUSH", style: "font-bold text-orange-600" },
  { name: "Analytics", style: "font-medium", prefix: "📊" },
  { name: "Figma", style: "font-semibold text-foreground", prefix: "🎨" },
  { name: "Screaming Frog", style: "font-medium text-green-600", prefix: "🐸" },
  { name: "Notion", style: "font-semibold text-foreground", prefix: "📝" },
];

const LogoMarquee = () => {
  return (
    <section className="py-10 overflow-hidden border-y border-border/30 bg-background">
      <div className="relative">
        <div className="flex animate-marquee">
          {/* First set of logos */}
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center gap-2 mx-10 whitespace-nowrap"
            >
              {logo.prefix && <span className="text-xl opacity-70">{logo.prefix}</span>}
              <span className={`text-lg ${logo.style} opacity-60 hover:opacity-100 transition-opacity`}>
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
