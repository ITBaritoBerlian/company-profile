import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Navigation, MessageCircle } from "lucide-react";
import { dealers } from "@/data/dealers";

const Dealers = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="dealer" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 chevron-accent opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary text-sm font-semibold uppercase tracking-wide">
              Lokasi Kami
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Dealer Kami di Kalimantan
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {dealers.length} lokasi strategis untuk melayani Anda dengan lebih
            baik
          </p>
        </div>

        {/* Dealers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {dealers.map((dealer, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{dealer.name}</h3>
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  {dealer.address}
                </p>
                <div className="flex items-center gap-2 text-foreground mb-4">
                  <Phone className="h-4 w-4 text-primary" />
                  <a
                    href={`tel:${dealer.phone.replace(/[^0-9]/g, "")}`}
                    className="hover:text-primary transition-colors"
                  >
                    {dealer.phone}
                  </a>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                {dealer.whatsappService && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full gap-2 justify-start"
                    onClick={() =>
                      window.open(
                        `https://wa.me/62${dealer.whatsappService.replace(
                          /^0/,
                          ""
                        )}`,
                        "_blank"
                      )
                    }
                  >
                    <MessageCircle className="h-4 w-4" />
                    CS Service: {dealer.whatsappService}
                  </Button>
                )}
                {dealer.whatsappSales && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full gap-2 justify-start"
                    onClick={() =>
                      window.open(
                        `https://wa.me/62${dealer.whatsappSales.replace(
                          /^0/,
                          ""
                        )}`,
                        "_blank"
                      )
                    }
                  >
                    <MessageCircle className="h-4 w-4" />
                    CS Sales: {dealer.whatsappSales}
                  </Button>
                )}
                {dealer.whatsappBooking && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full gap-2 justify-start"
                    onClick={() =>
                      window.open(
                        `https://wa.me/62${dealer.whatsappBooking.replace(
                          /^0/,
                          ""
                        )}`,
                        "_blank"
                      )
                    }
                  >
                    <MessageCircle className="h-4 w-4" />
                    Booking: {dealer.whatsappBooking}
                  </Button>
                )}
              </div>

              <Button
                className="w-full gap-2 bg-primary hover:bg-primary/90"
                onClick={() => window.open(dealer.mapUrl, "_blank")}
              >
                <Navigation className="h-4 w-4" />
                Arahkan via Google Maps
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dealers;
