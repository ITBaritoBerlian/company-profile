import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Budi Santoso",
    location: "Banjarbaru",
    rating: 5,
    text: "Pelayanan sangat memuaskan! Teknisi profesional dan servis cepat. Xpander saya selalu dalam kondisi prima berkat perawatan di sini.",
    vehicle: "Mitsubishi Xpander",
  },
  {
    name: "Siti Nurhaliza",
    location: "Batulicin",
    rating: 5,
    text: "Dealer terpercaya dengan harga kompetitif. Sales sangat membantu dalam memilih unit yang tepat untuk kebutuhan keluarga kami.",
    vehicle: "Mitsubishi Pajero Sport",
  },
  {
    name: "Ahmad Hidayat",
    location: "Banjarmasin",
    rating: 5,
    text: "Suku cadang asli dan garansi resmi membuat saya tenang. Tidak perlu khawatir dengan kualitas parts yang dipasang.",
    vehicle: "FUSO Canter",
  },
  {
    name: "Dewi Lestari",
    location: "Banjarbaru",
    rating: 5,
    text: "CS sangat responsif via WhatsApp. Booking servis mudah dan tidak perlu menunggu lama. Highly recommended!",
    vehicle: "Mitsubishi Xpander Cross",
  },
  {
    name: "Eko Prasetyo",
    location: "Batulicin",
    rating: 5,
    text: "Fasilitas bodi & cat sangat bagus. Mobil saya yang sempat lecet sekarang kembali seperti baru. Hasil pengecatan sempurna!",
    vehicle: "Mitsubishi Triton",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section id="testimoni" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 chevron-accent opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary text-sm font-semibold uppercase tracking-wide">
              Testimoni
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Kata Pelanggan Kami
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pengalaman nyata dari pelanggan setia PT BARITO BERLIAN MOTOR
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 hidden md:flex rounded-full bg-background shadow-lg"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 hidden md:flex rounded-full bg-background shadow-lg"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getVisibleTestimonials().map((testimonial, index) => (
              <Card
                key={`${testimonial.name}-${index}`}
                className="p-6 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-border pt-4">
                  <div className="font-bold text-lg">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  <div className="text-xs text-primary mt-1 font-medium">{testimonial.vehicle}</div>
                </div>
              </Card>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
