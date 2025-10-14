import { Globe, Zap, Users, Clock } from "lucide-react";

const reasons = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "We connect continents with reliability and speed.",
  },
  {
    icon: Zap,
    title: "Smart Operations",
    description: "Technology-driven logistics solutions.",
  },
  {
    icon: Users,
    title: "Professional Team",
    description: "Experts in supply chain and freight management.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Always available when you need us.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-secondary text-primary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Businesses Trust <span className="text-gradient-gold">Clemson Logistics</span>
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto">
            Delivering excellence through innovation, expertise, and unwavering commitment.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-primary-foreground/5 backdrop-blur-sm border border-primary/20 hover:border-primary transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full gradient-gold shadow-gold">
                <reason.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-primary-foreground/70">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="text-center max-w-4xl mx-auto p-8 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary/20 animate-fade-in">
          <blockquote className="text-2xl md:text-3xl font-light italic">
            "When it comes to logistics,{" "}
            <span className="text-gradient-gold font-semibold">trust isn't given</span> — it's
            earned through every delivery."
          </blockquote>
        </div>
      </div>
    </section>
  );
};
