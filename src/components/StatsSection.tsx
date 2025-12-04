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

const AnimatedNumber = ({ prefix, value, suffix, duration = 2000 }: { prefix: string; value: number; suffix: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
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
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-2" style={{ fontFamily: "'Varela Round', sans-serif" }}>
      {prefix} {count}{suffix}
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-10" style={{ background: 'linear-gradient(110deg, rgb(72, 133, 244) 0%, rgb(68, 96, 158) 100%)' }} aria-label="Statistiques de performance SEO">
      <div className="container mx-auto px-6">
        <h2 className="sr-only">Nos résultats SEO en chiffres</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <article key={index} className="text-center">
              <AnimatedNumber prefix={stat.prefix} value={stat.value} suffix={stat.suffix} />
              <p className="text-primary-foreground/80 text-lg font-bold" style={{ fontFamily: "'Varela Round', sans-serif" }}>
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
