import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section id="kontak" className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
      <div className="absolute inset-0 chevron-accent opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full border border-primary-foreground/20">
            <span className="text-primary-foreground text-sm font-semibold uppercase tracking-wide">
              Hubungi Kami Sekarang
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Siap Dengan Mitsubishi Terbaik Anda?
          </h2>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Tim kami siap membantu Anda menemukan kendaraan yang tepat dan memberikan layanan terbaik untuk Mitsubishi Anda.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              variant="outline"
              className="bg-background text-foreground hover:bg-background/90 gap-2 text-base font-semibold h-14 px-8 border-0"
              onClick={() => window.open("https://wa.me/6281262699800", "_blank")}
            >
              <MessageCircle className="h-5 w-5" />
              Hubungi via WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/20 gap-2 text-base font-semibold h-14 px-8"
              onClick={() => window.open("https://instagram.com/mitsubishi.baritoberlian", "_blank")}
            >
              <Instagram className="h-5 w-5" />
              Ikuti Instagram Kami
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/20 gap-2 text-base font-semibold h-14 px-8"
              onClick={() => window.open("tel:05114705800", "_blank")}
            >
              <Phone className="h-5 w-5" />
              Telepon Dealer Terdekat
            </Button>
          </div>

          {/* Social Proof */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">1000+</div>
              <div className="text-sm text-primary-foreground/80">Pelanggan Puas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">3</div>
              <div className="text-sm text-primary-foreground/80">Lokasi Dealer</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">15+</div>
              <div className="text-sm text-primary-foreground/80">Tahun Berpengalaman</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">24/7</div>
              <div className="text-sm text-primary-foreground/80">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
