import servicesImage from "@/assets/services-port.jpg";
import { Plane, Warehouse, FileCheck, Network, PackageCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Plane,
    title: "Freight & Cargo Transport",
    description: "Reliable shipment of goods across land, air, and sea with precision tracking.",
  },
  {
    icon: Warehouse,
    title: "Warehousing & Distribution",
    description: "Secure storage and streamlined distribution networks for all business sizes.",
  },
  {
    icon: FileCheck,
    title: "Customs Clearance",
    description: "Hassle-free import/export handling by experienced professionals.",
  },
  {
    icon: Network,
    title: "Supply Chain Management",
    description: "End-to-end planning and optimization for maximum efficiency.",
  },
  {
    icon: PackageCheck,
    title: "Last-Mile Delivery",
    description: "Fast, accurate deliveries from our hubs to your customer's door.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            What We Do <span className="text-gradient-gold">Best</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Clemson Logistics offers end-to-end logistics services designed for today's global
            business environment.
          </p>
        </div>

        {/* Services Image */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-elevated animate-fade-in">
          <img
            src={servicesImage}
            alt="Modern shipping port with cargo containers during golden hour"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-gold transition-smooth group animate-fade-in bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-lg gradient-gold flex items-center justify-center mb-4 shadow-gold group-hover:scale-110 transition-smooth">
                  <service.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
