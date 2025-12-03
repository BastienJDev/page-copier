const stats = [
  {
    value: "+ 34%",
    label: "de CA grâce au SEO",
  },
  {
    value: "- 57%",
    label: "en coût d'acquisition",
  },
  {
    value: "x 40%",
    label: "de trafic qualifié en 6 mois",
  },
];

const StatsSection = () => {
  return (
    <section className="bg-blue-section py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-2">
                {stat.value}
              </div>
              <p className="text-primary-foreground/80 text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
