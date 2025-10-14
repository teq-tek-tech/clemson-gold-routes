import aboutImage from "@/assets/about-team.jpg";
import { Target, Eye, Heart } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-slide-in-left">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={aboutImage}
                alt="Clemson Logistics professional team collaborating"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-in-right">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Who <span className="text-gradient-gold">We Are</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Clemson Logistics was founded with one mission — to simplify logistics and empower
              global trade. We believe that trust, transparency, and timeliness are the true pillars
              of world-class logistics.
            </p>

            {/* Mission, Vision, Values */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg gradient-gold flex items-center justify-center shadow-gold">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To redefine logistics through reliability, technology, and human connection.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg gradient-gold flex items-center justify-center shadow-gold">
                  <Eye className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To become the most trusted name in global logistics across Africa and beyond.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg gradient-gold flex items-center justify-center shadow-gold">
                  <Heart className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Our Values</h3>
                  <p className="text-muted-foreground">
                    Integrity • Innovation • Efficiency • Partnership
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
