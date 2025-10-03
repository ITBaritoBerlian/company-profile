import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, ChevronRight } from "lucide-react";
import pajeroSportImg from "@/assets/pajero-sport.png";
import l300Img from "@/assets/l300.png";
import tritonImg from "@/assets/triton.png";
import xpanderImg from "@/assets/xpander.png";
import xpanderCrossImg from "@/assets/xpander-cross.png";

const models = [
  {
    name: "Mitsubishi Pajero Sport",
    category: "SUV Premium",
    description: "SUV tangguh dengan teknologi 4WD dan mesin diesel turbo yang bertenaga untuk petualangan tanpa batas.",
    features: ["4WD Super Select", "2.4L MIVEC Diesel Turbo", "7 Penumpang", "Fitur Keselamatan Lengkap"],
    badge: "Premium",
    badgeColor: "bg-primary text-primary-foreground",
    image: pajeroSportImg,
  },
  {
    name: "Mitsubishi L300",
    category: "Pick Up Niaga",
    description: "Kendaraan niaga legendaris yang handal untuk bisnis Anda dengan daya angkut optimal.",
    features: ["Mesin Bandel", "Daya Angkut 1 Ton", "Irit BBM", "Perawatan Mudah"],
    badge: "Workhorse",
    badgeColor: "bg-secondary text-secondary-foreground",
    image: l300Img,
  },
  {
    name: "Mitsubishi Triton",
    category: "Pick Up",
    description: "Pick up modern dengan performa tangguh, cocok untuk kerja maupun gaya hidup aktif.",
    features: ["2.4L MIVEC Diesel", "4WD Available", "Kabin Luas", "Suspensi Nyaman"],
    badge: "Tough",
    badgeColor: "bg-accent text-accent-foreground",
    image: tritonImg,
  },
  {
    name: "New Xpander",
    category: "MPV",
    description: "MPV keluarga terlaris dengan desain modern, kabin lapang, dan efisiensi bahan bakar terbaik.",
    features: ["7 Penumpang", "1.5L MIVEC", "Kabin Luas", "Hemat BBM"],
    badge: "Best Seller",
    badgeColor: "bg-primary text-primary-foreground",
    image: xpanderImg,
  },
  {
    name: "Xpander Cross",
    category: "Crossover MPV",
    description: "Varian crossover dari Xpander dengan tampilan lebih adventure dan fitur lebih lengkap.",
    features: ["Ground Clearance Tinggi", "Desain Adventure", "Teknologi Canggih", "Nyaman & Stylish"],
    badge: "Adventure",
    badgeColor: "bg-muted text-muted-foreground",
    image: xpanderCrossImg,
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {models.map((model, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Model image */}
              <div className="aspect-[4/3] bg-background relative overflow-hidden">
                <img 
                  src={model.image} 
                  alt={model.name}
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge className={model.badgeColor}>
                    {model.badge}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{model.category}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{model.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {model.description}
                </p>
                
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
