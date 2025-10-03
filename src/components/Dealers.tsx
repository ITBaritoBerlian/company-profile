import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Navigation, MessageCircle } from "lucide-react";

const dealers = [
  {
    name: "Banjarbaru",
    address: "Jl. A. Yani Km. 22 Landasan Ulin",
    phone: "(0511) 470 5800",
    whatsappService: "0812-6269-9800",
    whatsappSales: "0821-6889-9800",
    mapUrl: "https://maps.google.com/?q=Jl.+A.+Yani+Km.+22+Landasan+Ulin+Banjarbaru",
  },
  {
    name: "Batulicin",
    address: "Jl. Raya Batulicin RT. 13/03, Tanah Bumbu",
    phone: "(0518) 75800",
    whatsappService: "0852-5139-6800",
    whatsappSales: "0812-5391-8000",
    mapUrl: "https://maps.google.com/?q=Jl.+Raya+Batulicin+RT.+13/03+Tanah+Bumbu",
  },
  {
    name: "Banjarmasin",
    address: "Jl. Gub. Soebardjo RT. 13 Basirih",
    phone: "(0511) 677 8000",
    whatsappBooking: "0852-8088-7800",
    mapUrl: "https://maps.google.com/?q=Jl.+Gub.+Soebardjo+RT.+13+Basirih+Banjarmasin",
  },
];

const Dealers = () => {
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
            3 lokasi strategis untuk melayani Anda dengan lebih baik
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
                <p className="text-muted-foreground mb-3 leading-relaxed">{dealer.address}</p>
                <div className="flex items-center gap-2 text-foreground mb-4">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href={`tel:${dealer.phone.replace(/[^0-9]/g, '')}`} className="hover:text-primary transition-colors">
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
                    onClick={() => window.open(`https://wa.me/62${dealer.whatsappService.replace(/^0/, '')}`, "_blank")}
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
                    onClick={() => window.open(`https://wa.me/62${dealer.whatsappSales.replace(/^0/, '')}`, "_blank")}
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
                    onClick={() => window.open(`https://wa.me/62${dealer.whatsappBooking.replace(/^0/, '')}`, "_blank")}
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

        {/* Map Placeholder */}
        <div className="rounded-xl overflow-hidden shadow-lg mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <div className="aspect-[21/9] bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
              <p className="text-xl font-semibold mb-2">Peta Lokasi Dealer</p>
              <p className="text-muted-foreground">3 cabang di Kalimantan untuk melayani Anda</p>
            </div>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-center">Hubungi Customer Service Kami</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Button
              variant="outline"
              className="gap-2 justify-start h-auto py-3"
              onClick={() => window.open("https://wa.me/6281262699800", "_blank")}
            >
              <MessageCircle className="h-5 w-5 text-primary flex-shrink-0" />
              <div className="text-left">
                <div className="text-xs text-muted-foreground">CS Service Banjarbaru</div>
                <div className="font-semibold">0812-6269-9800</div>
              </div>
            </Button>
            <Button
              variant="outline"
              className="gap-2 justify-start h-auto py-3"
              onClick={() => window.open("https://wa.me/6282168899800", "_blank")}
            >
              <MessageCircle className="h-5 w-5 text-primary flex-shrink-0" />
              <div className="text-left">
                <div className="text-xs text-muted-foreground">CS Sales Banjarbaru</div>
                <div className="font-semibold">0821-6889-9800</div>
              </div>
            </Button>
            <Button
              variant="outline"
              className="gap-2 justify-start h-auto py-3"
              onClick={() => window.open("https://wa.me/6285251396800", "_blank")}
            >
              <MessageCircle className="h-5 w-5 text-primary flex-shrink-0" />
              <div className="text-left">
                <div className="text-xs text-muted-foreground">CS Service Batulicin</div>
                <div className="font-semibold">0852-5139-6800</div>
              </div>
            </Button>
            <Button
              variant="outline"
              className="gap-2 justify-start h-auto py-3"
              onClick={() => window.open("https://wa.me/6281253918000", "_blank")}
            >
              <MessageCircle className="h-5 w-5 text-primary flex-shrink-0" />
              <div className="text-left">
                <div className="text-xs text-muted-foreground">CS Sales Batulicin</div>
                <div className="font-semibold">0812-5391-8000</div>
              </div>
            </Button>
            <Button
              variant="outline"
              className="gap-2 justify-start h-auto py-3 md:col-span-2 lg:col-span-1"
              onClick={() => window.open("https://wa.me/6285280887800", "_blank")}
            >
              <MessageCircle className="h-5 w-5 text-primary flex-shrink-0" />
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Booking Service Basirih</div>
                <div className="font-semibold">0852-8088-7800</div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dealers;
