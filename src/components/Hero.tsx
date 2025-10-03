import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench } from "lucide-react";
import heroImage from "@/assets/hero-mitsubishi.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Mitsubishi Motors Lineup"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/60" />
        <div className="absolute inset-0 chevron-accent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-4xl">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30">
            <span className="text-primary-foreground text-sm font-medium">
              🏆 Dealer Resmi #1 di Kalimantan
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in-up">
            Dealer Resmi Mitsubishi Motors & FUSO di Kalimantan
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-4 max-w-3xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <span className="font-semibold">Penjualan • Servis • Suku Cadang • Bodi & Cat</span>
          </p>
          
          <p className="text-base md:text-lg text-primary-foreground/80 mb-10 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Layanan resmi untuk pengalaman berkendara terbaik. Teknisi tersertifikasi, suku cadang asli, dan fasilitas modern di seluruh Kalimantan.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-base font-semibold h-14 px-8 shadow-lg hover:shadow-xl transition-all"
              onClick={() => scrollToSection("model-promo")}
            >
              Lihat Model & Promo
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/20 gap-2 text-base font-semibold h-14 px-8"
              onClick={() => window.open("https://wa.me/6281262699800", "_blank")}
            >
              <Wrench className="h-5 w-5" />
              Booking Servis
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">3</div>
              <div className="text-sm text-primary-foreground/80">Lokasi Dealer</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">15+</div>
              <div className="text-sm text-primary-foreground/80">Tahun Pengalaman</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-primary-foreground/80">Suku Cadang Asli</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-primary-foreground/80">Customer Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
