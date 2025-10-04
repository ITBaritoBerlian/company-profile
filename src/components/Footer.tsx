import { scrollToSection } from "@/lib/utils";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/BBM-LOGO.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14">
                <img src={logo} alt="Logo PT BARITO BERLIAN MOTOR" />
              </div>
              <div className="block">
                <div className="font-mmcBold font-bold text-base leading-tight">
                  PT BARITO BERLIAN MOTOR
                </div>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed mb-4">
              Dealer resmi Mitsubishi Motors & FUSO di Kalimantan. Melayani
              penjualan, perawatan kendaraan, suku cadang, dan bodi & cat dengan
              standar kualitas terbaik.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/mitsubishi.baritoberlian"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-oswald font-bold text-lg mb-4">
              Navigasi Cepat
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("layanan")}
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Layanan
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("kendaraan")}
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Kendaraan
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("dealer")}
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Dealer Kami
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("testimoni")}
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Testimoni
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("kontak")}
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Hubungi Kami
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-oswald font-bold text-lg mb-4">Kontak Utama</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold mb-1">Banjarbaru</div>
                  <div className="text-sm text-secondary-foreground/80">
                    Jl. A. Yani Km. 22 Landasan Ulin
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="tel:05114705800"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  (0511) 470 5800
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@baritoberlian.com"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  info@baritoberlian.com
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="font-oswald font-bold text-lg mb-4">
              Jam Operasional
            </h3>
            <ul className="space-y-3 text-sm text-secondary-foreground/80">
              <li className="flex justify-between">
                <span>Senin - Jumat</span>
                <span className="font-semibold">08:00 - 17:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sabtu</span>
                <span className="font-semibold">08:00 - 15:00</span>
              </li>
              {/* <li className="flex justify-between">
                <span>Minggu</span>
                <span className="font-semibold">08:00 - 14:00</span>
              </li> */}
              <li className="pt-3 border-t border-secondary-foreground/10">
                <div className="text-primary font-semibold">
                  Customer Service 24/7
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-secondary-foreground/60 text-center md:text-left">
              © {new Date().getFullYear()} PT BARITO BERLIAN MOTOR. All rights
              reserved.
            </div>
            <div className="flex items-center gap-4 text-sm text-secondary-foreground/60">
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
