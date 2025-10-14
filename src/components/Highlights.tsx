import { Globe, Truck, Award, Clock } from "lucide-react";

const highlights = [
  {
    icon: Globe,
    title: "Global Freight Solutions",
    description: "Connecting continents with seamless logistics",
  },
  {
    icon: Truck,
    title: "Land, Sea & Air Transport",
    description: "Complete multi-modal transportation services",
  },
  {
    icon: Award,
    title: "Fast, Safe & Reliable",
    description: "Trusted delivery every single time",
  },
  {
    icon: Clock,
    title: "24/7 Customer Support",
    description: "Always here when you need us",
  },
];

export const Highlights = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-card hover:shadow-gold transition-smooth group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full gradient-gold shadow-gold group-hover:scale-110 transition-smooth">
                <highlight.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{highlight.title}</h3>
              <p className="text-muted-foreground">{highlight.description}</p>
            </div>
          ))}
        </div>

        {/* Featured Message */}
        <div className="mt-16 text-center">
          <blockquote className="text-2xl md:text-3xl font-light italic text-foreground max-w-4xl mx-auto">
            "At Clemson Logistics, we move more than goods — we{" "}
            <span className="text-gradient-gold font-semibold">move businesses forward</span>."
          </blockquote>
        </div>
      </div>
    </section>
  );
};
