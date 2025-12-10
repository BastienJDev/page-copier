import { useEffect, useState, useRef } from "react";

const stats = [
  {
    prefix: "+",
    value: 34,
    suffix: "%",
    label: "de CA grâce au SEO",
  },
  {
    prefix: "-",
    value: 57,
    suffix: "%",
    label: "en coût d'acquisition",
  },
  {
    prefix: "x",
    value: 40,
    suffix: "%",
    label: "de trafic qualifié en 6 mois",
  },
];

const AnimatedNumber = ({ prefix, value, suffix, duration = 2000, delayMs = 0 }: { prefix: string; value: number; suffix: string; duration?: number; delayMs?: number }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const timeout = setTimeout(() => {
            let start = 0;
            const end = value;
            const increment = end / (duration / 16);
            
            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCount(end);
                clearInterval(timer);
              } else {
                setCount(Math.floor(start));
              }
            }, 16);

            return () => clearInterval(timer);
          }, delayMs);

          return () => clearTimeout(timeout);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, duration, delayMs, hasAnimated]);

  return (
    <div
      ref={ref}
      className="w-full text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold text-primary-foreground mb-2 text-center"
      style={{ fontFamily: "'Varela', sans-serif" }}
    >
      {prefix} {count}
      {suffix}
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-10" style={{ background: 'linear-gradient(172deg, rgb(72, 133, 244) 0%, rgb(68, 96, 158) 100%)' }} aria-label="Statistiques de performance SEO">
      <div className="w-full">
        <h2 className="sr-only">Nos résultats SEO en chiffres</h2>
        <div className="grid grid-cols-1 md:grid-cols-[33%_34%_33%] w-full gap-6 md:gap-0 items-center max-w-full mx-auto divide-y-2 md:divide-y-0 md:divide-x-2 md:divide-white/80">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center px-0 md:px-0 h-full min-h-[150px] md:min-h-[180px]"
            >
              <article className="w-full h-full flex flex-col items-center justify-center text-center gap-2 py-2 md:py-3">
                <AnimatedNumber prefix={stat.prefix} value={stat.value} suffix={stat.suffix} delayMs={index * 500} />
                <p className="text-primary-foreground/80 text-lg font-bold" style={{ fontFamily: "'Varela', sans-serif" }}>
                  <strong>{stat.label}</strong>
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
