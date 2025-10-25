import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import clemsonLogo from "@/assets/clemson-logo.png";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? "bg-secondary/95 backdrop-blur-md shadow-elevated" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={clemsonLogo} alt="Clemson Logistics Logo" className="h-12 w-auto" />
            <span className="text-xl font-bold text-primary-foreground">
              THE CLEMSON <span className="text-primary">LOGISTICS</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-primary-foreground hover:text-primary transition-smooth font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-primary-foreground hover:text-primary transition-smooth font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-primary-foreground hover:text-primary transition-smooth font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("why-choose-us")}
              className="text-primary-foreground hover:text-primary transition-smooth font-medium"
            >
              Why Us
            </button>
            <Button variant="hero" onClick={() => scrollToSection("contact")}>
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left text-primary-foreground hover:text-primary transition-smooth font-medium py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-primary-foreground hover:text-primary transition-smooth font-medium py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left text-primary-foreground hover:text-primary transition-smooth font-medium py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("why-choose-us")}
              className="block w-full text-left text-primary-foreground hover:text-primary transition-smooth font-medium py-2"
            >
              Why Us
            </button>
            <Button variant="hero" className="w-full" onClick={() => scrollToSection("contact")}>
              Contact Us
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
