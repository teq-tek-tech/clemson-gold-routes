import { Linkedin, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
export const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <footer className="bg-secondary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">C</span>
              </div>
              <span className="text-lg font-bold">
                CLEMSON <span className="text-primary">LOGISTICS</span>
              </span>
            </div>
            <p className="text-primary-foreground/70 mb-4">
              Delivering trust and moving the world through reliable global logistics solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-smooth">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-smooth">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-smooth">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection("home")} className="text-primary-foreground/70 hover:text-primary transition-smooth">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")} className="text-primary-foreground/70 hover:text-primary transition-smooth">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="text-primary-foreground/70 hover:text-primary transition-smooth">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="text-primary-foreground/70 hover:text-primary transition-smooth">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Our Services</h3>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>Freight & Cargo Transport</li>
              <li>Warehousing & Distribution</li>
              <li>Customs Clearance</li>
              <li>Supply Chain Management</li>
              <li>Last-Mile Delivery</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-primary-foreground/70">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>16021 Elegant ct. Suite A, Bowie, MD 20716</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:info@clemsonlogistics.com" className="text-primary-foreground/70 hover:text-primary transition-smooth">
                  info@clemsonlogistics.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+23278593836" className="text-primary-foreground/70 hover:text-primary transition-smooth">+15712150688</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © {new Date().getFullYear()} Clemson Logistics. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>;
};