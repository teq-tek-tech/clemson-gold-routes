import { MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
export const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    (e.target as HTMLFormElement).reset();
  };
  return <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Let's Move Your Business <span className="text-gradient-gold">Forward</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have a shipment, question, or partnership in mind? Get in touch with our friendly
            support team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <Card className="border-0 shadow-lg bg-card">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center flex-shrink-0 shadow-gold">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Office Address</h3>
                  <p className="text-muted-foreground">
                    CLEMSON LOGISTICS HQ
                    <br />
                    16021 Elegant ct. Suite A<br />
                    Bowie, MD 20716
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-card">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center flex-shrink-0 shadow-gold">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Email</h3>
                  <a href="mailto:info@clemsonlogistics.com" className="text-primary hover:text-primary-dark transition-smooth">
                    info@clemsonlogistics.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-card">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center flex-shrink-0 shadow-gold">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Phone</h3>
                  <a href="tel:+23278593836" className="text-primary hover:text-primary-dark transition-smooth">+15712150688</a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="border-0 shadow-elevated bg-card">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                      Full Name
                    </label>
                    <Input id="name" name="name" type="text" required placeholder="John Doe" className="w-full" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                      Email Address
                    </label>
                    <Input id="email" name="email" type="email" required placeholder="john@example.com" className="w-full" />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                      Phone Number
                    </label>
                    <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 123-4567" className="w-full" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                      Message
                    </label>
                    <Textarea id="message" name="message" required placeholder="Tell us about your logistics needs..." rows={4} className="w-full" />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};