import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, ChevronRight, FileText } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

import Sprite3DViewer from "@/components/Sprite3DViewer";

import pajeroSportImg from "@/assets/pajero-sport.png";
import l300Img from "@/assets/l300.png";
import tritonImg from "@/assets/triton.png";
import xpanderImg from "@/assets/xpander.png";
import xpanderCrossImg from "@/assets/xpander-cross.png";
import destinatorImg from "@/assets/destinator.png";
import brosurPajero from "@/assets/brosur/new-pajero-sport.pdf";
import brosurL300 from "@/assets/brosur/l300.pdf";
import brosurTriton from "@/assets/brosur/all-new-triton.pdf";
import brosurXpander from "@/assets/brosur/xpander.pdf";
import brosurXpanderCross from "@/assets/brosur/new-xpander-cross.pdf";
import brosurDestinator from "@/assets/brosur/destinator.pdf";
import { customerServices } from "@/data/cs";

/**
 * Contoh: frames Pajero. Ganti dengan punyamu sendiri.
 * Simpan gambar berurutan: 0001.png...0036.png (atau nama lain tapi berurutan).
 */
const pajeroFrames = Array.from(
  { length: 23 },
  (_, i) =>
    new URL(`../assets/3d/pajero-2025/${i + 1}.avif`, import.meta.url).href
);

const l300Frames = Array.from(
  { length: 24 },
  (_, i) => new URL(`../assets/3d/l300/${i + 1}.avif`, import.meta.url).href
);

const tritonFrames = Array.from(
  { length: 8 },
  (_, i) => new URL(`../assets/3d/triton/${i + 1}.avif`, import.meta.url).href
);
const xpanderFrames = Array.from(
  { length: 24 },
  (_, i) => new URL(`../assets/3d/xpander/${i + 1}.avif`, import.meta.url).href
);
const xpanderCrossFrames = Array.from(
  { length: 24 },
  (_, i) =>
    new URL(`../assets/3d/xpander-cross/${i + 1}.avif`, import.meta.url).href
);
const destinatorFrames = Array.from(
  { length: 7 },
  (_, i) =>
    new URL(`../assets/3d/destinator/${i + 1}.avif`, import.meta.url).href
);

type Model = {
  name: string;
  category: string;
  description: string;
  features: string[];
  badge?: string;
  badgeColor?: string;
  image: string;
  frames?: string[]; // optional: daftar frame untuk 3D
  brochureUrl?: string; // optional: link brosur PDF
};

const models: Model[] = [
  {
    name: "NEW PAJERO SPORT",
    category: "SUV Premium",
    description:
      "SUV premium dengan mesin diesel turbo, sistem 4WD canggih, dan fitur keselamatan lengkap.",
    features: [
      "Mesin 2.4L MIVEC Turbo Diesel 181 PS",
      "4WD Super Select II + Off-road Mode",
      "Diamond Sense Safety (ACC, FCM, BSW, RCTA)",
    ],
    image: pajeroSportImg,
    frames: pajeroFrames,
    brochureUrl: brosurPajero,
  },
  {
    name: "L300",
    category: "Pick Up Niaga",
    description:
      "Pick-up legendaris yang bandel, irit, dan sanggup mengangkut hingga 1 ton untuk kebutuhan bisnis Anda.",
    features: [
      "Mesin Diesel 2.268 cc Euro4",
      "Daya Angkut 1 Ton",
      "Kabin Luas & Nyaman",
    ],
    image: l300Img,
    frames: l300Frames,
    brochureUrl: brosurL300,
  },
  {
    name: "ALL-NEW TRITON",
    category: "Pick Up",
    description:
      "Pick-up modern dengan mesin tangguh, pilihan 4WD, dan fitur keselamatan lengkap untuk kerja maupun gaya hidup aktif.",
    features: [
      "Mesin 2.4L MIVEC Diesel Turbo 181 PS",
      "Pilihan 2WD & 4WD Super Select II",
      "6 Mode Berkendara + Fitur Safety Lengkap",
    ],
    image: tritonImg,
    frames: tritonFrames,
    brochureUrl: brosurTriton,
  },
  {
    name: "NEW XPANDER",
    category: "MPV",
    description:
      "MPV keluarga modern dengan kabin luas, mesin efisien, dan fitur keselamatan lengkap.",
    features: [
      "7 Penumpang dengan Kabin Lapang & Nyaman",
      "Mesin 1.5L MIVEC + Transmisi CVT Halus",
      'Head Unit 9" + Android Auto & Apple CarPlay',
    ],
    image: xpanderImg,
    frames: xpanderFrames,
    brochureUrl: brosurXpander,
  },
  {
    name: "NEW XPANDER CROSS",
    category: "Crossover MPV",
    description:
      "Crossover keluarga dengan desain tangguh, ground clearance tinggi, dan fitur keselamatan modern.",
    features: [
      "Ground Clearance 220–225 mm + Suspensi Khusus",
      "Mesin 1.5L MIVEC + Transmisi CVT Halus",
      "Active Yaw Control, 6 Airbags & Kamera 360°",
    ],
    image: xpanderCrossImg,
    frames: xpanderCrossFrames,
    brochureUrl: brosurXpanderCross,
  },
  {
    name: "DESTINATOR",
    category: "7-Seater SUV / Crossover",
    description:
      "SUV 7 penumpang turbo terbaru dengan desain premium, kabin nyaman, dan fitur keselamatan modern.",
    features: [
      "Mesin 1.5L Turbo 163 PS",
      "Ground Clearance 244 mm",
      "Adaptive Cruise Control + Kamera 360°",
    ],
    image: destinatorImg,
    frames: destinatorFrames,
    brochureUrl: brosurDestinator,
  },
];

const branches = [
  { name: "Banjarbaru & Banjarmasin", phone: "6282168899800" },
  { name: "Batulicin", phone: "6281253918000" },
];

const Models = () => {
  // state untuk modal
  const [open, setOpen] = React.useState(false);
  const [openBranch, setOpenBranch] = React.useState(false);
  const [activeModel, setActiveModel] = React.useState<Model | null>(null);

  const open3D = (m: Model) => {
    setActiveModel(m);
    setOpen(true);
  };

  const handleContact = (phone: string) => {
    window.open(`https://wa.me/${phone}`, "_blank");
    setOpenBranch(false);
  };

  return (
    <section id="kendaraan" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
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
            Dari keluarga hingga bisnis, temukan kendaraan yang sesuai dengan
            kebutuhan Anda
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
                Dapatkan penawaran terbaik untuk semua model Mitsubishi &amp;
                FUSO
              </p>
            </div>
            <Button
              size="lg"
              variant="outline"
              className="bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/20 gap-2 whitespace-nowrap"
              onClick={() => setOpenBranch(true)}
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
                {/* tombol 3D di atas gambar */}
                <Button
                  size="sm"
                  variant="outline"
                  className="absolute right-3 top-3 z-10 bg-background/60 backdrop-blur-sm"
                  onClick={() => open3D(model)}
                >
                  Pratinjau 360°
                </Button>

                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  {model.badge && (
                    <Badge className={model.badgeColor}>{model.badge}</Badge>
                  )}
                  <span className="text-sm text-muted-foreground">
                    {model.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2">{model.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {model.description}
                </p>

                <ul className="space-y-2 mb-4">
                  {model.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() =>
                    window.open(model.brochureUrl || "/brosur.pdf", "_blank")
                  }
                  className="group relative w-full overflow-hidden rounded-lg border bg-gradient-to-r from-primary/10 via-primary/5 to-transparent px-4 py-3 mb-4 text-left transition hover:from-primary/20 hover:via-primary/10"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary/15 text-primary">
                        <FileText className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          Lihat brosur lengkap
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Spesifikasi, varian & fitur selengkapnya
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                  </div>

                  {/* aksen blur */}
                  <span className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
                </button>

                {/* Tombol Penawaran */}
                <Button
                  className="w-full gap-2 mb-2"
                  variant="outline"
                  onClick={() => setOpenBranch(true)}
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
            onClick={() => setOpenBranch(true)}
          >
            <MessageCircle className="h-5 w-5" />
            Konsultasi Gratis via WhatsApp
          </Button>
        </div>
      </div>

      {/* MODAL 3D */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle>{activeModel?.name ?? "3D Preview"}</DialogTitle>
            <DialogDescription>
              Geser kiri/kanan pada gambar untuk memutar tampilan 360°
            </DialogDescription>
          </DialogHeader>

          <div className="relative">
            <Sprite3DViewer
              frames={activeModel?.frames ?? []}
              height={420}
              autoSpin={false}
              spinFps={90}
            />
            {!activeModel?.frames?.length && (
              <p className="mt-3 text-sm text-muted-foreground">
                Model ini belum memiliki rangkaian gambar 3D. Tambahkan array
                frames agar preview aktif.
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>
      {/* Modal */}
      <Dialog open={openBranch} onOpenChange={setOpenBranch}>
        <DialogContent className="sm:max-w-2xl rounded-2xl border shadow-2xl p-0 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary/90 to-primary px-6 py-5 text-primary-foreground">
            <DialogHeader className="p-0">
              <DialogTitle className="text-xl">
                Pilih Customer Service
              </DialogTitle>
              <DialogDescription className="text-primary-foreground/90">
                Silakan pilih kontak CS yang ingin Anda hubungi
              </DialogDescription>
            </DialogHeader>
          </div>

          {/* Body */}
          <div className="p-6">
            {/* daftar CS */}
            <div className="space-y-3 py-1">
              {customerServices.map((cs, idx) => (
                <Button
                  key={idx}
                  className="w-full justify-between rounded-xl bg-card/80 hover:bg-accent/40 border text-left px-4 py-3 transition-all hover:shadow-md hover:-translate-y-[1px]"
                  variant="secondary"
                  onClick={() => handleContact(cs.phone)} // kirim juga nama produk
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 opacity-80 text-primary" />
                    <span className="font-medium text-black">{cs.label}</span>
                  </span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
                </Button>
              ))}
            </div>

            {/* garis halus pemisah */}
            <div className="mt-5 border-t" />

            <DialogFooter className="mt-4">
              <Button variant="outline" onClick={() => setOpenBranch(false)}>
                Batal
              </Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Models;
