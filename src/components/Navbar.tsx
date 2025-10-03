import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Instagram } from "lucide-react";
import logo from "@/assets/bbm-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-14 h-14">
              <img src={logo} alt="Logo PT BARITO BERLIAN MOTOR" />
            </div>
            <div className="hidden sm:block">
              <div className="font-oswald font-bold text-lg leading-tight">
                PT BARITO BERLIAN MOTOR
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* <button
              onClick={() => scrollToSection("beranda")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Beranda
            </button> */}
            <button
              onClick={() => scrollToSection("layanan")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Layanan
            </button>
            <button
              onClick={() => scrollToSection("kendaraan")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Kendaraan
            </button>
            <button
              onClick={() => scrollToSection("dealer")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Dealer Kami
            </button>
            <button
              onClick={() => scrollToSection("testimoni")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Testimoni
            </button>
            <button
              onClick={() => scrollToSection("kontak")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Hubungi Kami
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={() =>
                window.open("https://wa.me/6281262699800", "_blank")
              }
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={() =>
                window.open(
                  "https://instagram.com/mitsubishi.baritoberlian",
                  "_blank"
                )
              }
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </Button>
            <Button
              size="sm"
              className="gap-2 bg-primary hover:bg-primary/90"
              onClick={() => window.open("tel:05114705800", "_blank")}
            >
              <Phone className="h-4 w-4" />
              Telepon
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-4 animate-fade-in-up">
            <button
              onClick={() => scrollToSection("beranda")}
              className="block w-full text-left py-2 px-4 hover:bg-muted rounded-md transition-colors"
            >
              Beranda
            </button>
            <button
              onClick={() => scrollToSection("model-promo")}
              className="block w-full text-left py-2 px-4 hover:bg-muted rounded-md transition-colors"
            >
              Model & Promo
            </button>
            <button
              onClick={() => scrollToSection("layanan")}
              className="block w-full text-left py-2 px-4 hover:bg-muted rounded-md transition-colors"
            >
              Layanan
            </button>
            <button
              onClick={() => scrollToSection("dealer")}
              className="block w-full text-left py-2 px-4 hover:bg-muted rounded-md transition-colors"
            >
              Dealer Kami
            </button>
            <button
              onClick={() => scrollToSection("testimoni")}
              className="block w-full text-left py-2 px-4 hover:bg-muted rounded-md transition-colors"
            >
              Testimoni
            </button>
            <button
              onClick={() => scrollToSection("kontak")}
              className="block w-full text-left py-2 px-4 hover:bg-muted rounded-md transition-colors"
            >
              Hubungi Kami
            </button>
            <div className="flex flex-col space-y-2 pt-2">
              <Button
                variant="outline"
                size="sm"
                className="gap-2 justify-start"
                onClick={() =>
                  window.open("https://wa.me/6281262699800", "_blank")
                }
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="gap-2 justify-start"
                onClick={() =>
                  window.open(
                    "https://instagram.com/mitsubishi.baritoberlian",
                    "_blank"
                  )
                }
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </Button>
              <Button
                size="sm"
                className="gap-2 justify-start bg-primary hover:bg-primary/90"
                onClick={() => window.open("tel:05114705800", "_blank")}
              >
                <Phone className="h-4 w-4" />
                Telepon
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
