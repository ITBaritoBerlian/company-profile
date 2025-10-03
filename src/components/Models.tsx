import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, ChevronRight } from "lucide-react";

const models = [
  {
    name: "Mitsubishi Xpander",
    category: "MPV",
    features: ["7 Penumpang", "1.5L MIVEC", "Hemat BBM"],
    badge: "Best Seller",
    badgeColor: "bg-primary text-primary-foreground",
  },
  {
    name: "Mitsubishi Pajero Sport",
    category: "SUV",
    features: ["4WD", "Diesel Turbo", "Premium Interior"],
    badge: "Premium",
    badgeColor: "bg-secondary text-secondary-foreground",
  },
  {
    name: "Mitsubishi L300",
    category: "Commercial",
    features: ["Niaga", "Kargo Luas", "Handal"],
    badge: "Workhorse",
    badgeColor: "bg-muted text-muted-foreground",
  },
  {
    name: "FUSO Canter",
    category: "Truck",
    features: ["Heavy Duty", "Euro 4", "Efisien"],
    badge: "Industrial",
    badgeColor: "bg-accent text-accent-foreground",
  },
];

const Models = () => {
  return (
    <section id="model-promo" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary text-sm font-semibold uppercase tracking-wide">
              Model & Promo
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Pilihan Kendaraan Terbaik
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dari keluarga hingga bisnis, temukan kendaraan yang sesuai dengan kebutuhan Anda
          </p>
        </div>

        {/* Promo Banner */}
        <div className="mb-12 p-8 bg-gradient-to-r from-primary to-primary/80 rounded-xl text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 chevron-accent opacity-20" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                🎉 Promo Spesial Bulan Ini!
              </h3>
              <p className="text-primary-foreground/90 text-lg">
                Dapatkan penawaran terbaik untuk semua model Mitsubishi & FUSO
              </p>
            </div>
            <Button
              size="lg"
              variant="outline"
              className="bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/20 gap-2 whitespace-nowrap"
              onClick={() => window.open("https://wa.me/6282168899800", "_blank")}
            >
              Tanya Promo
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {models.map((model, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Placeholder for model image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 chevron-accent opacity-20" />
                <div className="relative z-10 text-center p-6">
                  <div className="text-6xl mb-2">🚗</div>
                  <div className="text-xl font-bold">{model.name}</div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge className={model.badgeColor}>
                    {model.badge}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{model.category}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{model.name}</h3>
                
                <ul className="space-y-2 mb-4">
                  {model.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full gap-2"
                  variant="outline"
                  onClick={() => window.open("https://wa.me/6282168899800", "_blank")}
                >
                  <MessageCircle className="h-4 w-4" />
                  Tanyakan Penawaran
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Tertarik dengan model lain? Hubungi kami untuk informasi lengkap
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 gap-2"
            onClick={() => window.open("https://wa.me/6282168899800", "_blank")}
          >
            <MessageCircle className="h-5 w-5" />
            Konsultasi Gratis via WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Models;
