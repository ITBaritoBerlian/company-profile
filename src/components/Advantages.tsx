import { Shield, Award, Wrench, Headphones } from "lucide-react";

const advantages = [
  {
    icon: Award,
    title: "Dealer Resmi & Teknisi Tersertifikasi",
    description:
      "Tenaga ahli bersertifikat dari pabrikan untuk layanan terbaik",
  },
  {
    icon: Shield,
    title: "Suku Cadang Asli Pabrikan",
    description: "Garansi keaslian 100% untuk performa optimal kendaraan",
  },
  {
    icon: Wrench,
    title: "Fasilitas Bodi & Cat Profesional",
    description: "Teknologi modern untuk hasil finishing sempurna",
  },
  {
    icon: Headphones,
    title: "Layanan Pelanggan Responsif",
    description: "Dukungan via WhatsApp & telepon kapan saja Anda butuhkan",
  },
];

const Advantages = () => {
  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary text-sm font-semibold uppercase tracking-wide">
              Mengapa Kami?
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Keunggulan Kami
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Komitmen kami untuk memberikan yang terbaik bagi setiap pelanggan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <advantage.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3">{advantage.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
