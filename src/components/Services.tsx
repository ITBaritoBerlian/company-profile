import { Car, Wrench, PackageCheck, Paintbrush } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Car,
    title: "Penjualan Kendaraan Baru",
    description:
      "Konsultasi kebutuhan pribadi & bisnis dengan pilihan unit terlengkap dari Mitsubishi Motors & FUSO.",
    color: "text-primary",
  },
  {
    icon: Wrench,
    title: "Perawatan Berkala",
    description:
      "Teknisi tersertifikasi dengan peralatan standar pabrikan untuk perawatan optimal kendaraan Anda.",
    color: "text-primary",
  },
  {
    icon: PackageCheck,
    title: "Suku Cadang Asli",
    description:
      "Jaminan keaslian & garansi pabrikan untuk semua suku cadang yang kami sediakan.",
    color: "text-primary",
  },
  {
    icon: Paintbrush,
    title: "Bodi & Cat",
    description:
      "Perbaikan panel & pengecatan profesional dengan hasil finishing sempurna seperti baru.",
    color: "text-primary",
  },
];

const Services = () => {
  return (
    <section
      id="layanan"
      className="py-10 bg-muted/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 chevron-accent opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary text-sm font-semibold uppercase tracking-wide">
              Layanan Resmi
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Layanan Lengkap & Profesional
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Didukung teknisi tersertifikasi dan fasilitas modern untuk kepuasan
            pelanggan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group bg-card border-border animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className={`h-7 w-7 ${service.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Additional Info Bar */}
        {/* <div className="mt-16 p-6 bg-primary/5 rounded-lg border border-primary/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-2">Konten ini menegaskan layanan resmi</h3>
              <p className="text-muted-foreground">
                Penjualan • Servis • Suku Cadang • Bodi & Cat — Semua dalam satu tempat
              </p>
            </div>
            <div className="flex gap-3">
              <div className="px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-sm font-semibold text-primary">✓ Garansi Resmi</span>
              </div>
              <div className="px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-sm font-semibold text-primary">✓ Teknisi Bersertifikat</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Services;
