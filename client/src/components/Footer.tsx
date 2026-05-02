import { Link } from "wouter";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram, Send } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="glass-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Logo className="mb-4" />
            <p className="text-sm text-muted-foreground mb-2">
              4+ years crewing management experience
            </p>
            <p className="text-sm text-muted-foreground">
              Specializing in Container Vessels, Bulk-Carriers, Tankers, Passenger Ship's and Yachts fleets
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" data-testid="footer-link-about">
                  <span className="text-muted-foreground hover:text-foreground cursor-pointer">About Company</span>
                </Link>
              </li>
              <li>
                <Link href="/ship-owners" data-testid="footer-link-ship-owners">
                  <span className="text-muted-foreground hover:text-foreground cursor-pointer">For Ship-Owners</span>
                </Link>
              </li>
              <li>
                <Link href="/seafarers" data-testid="footer-link-seafarers">
                  <span className="text-muted-foreground hover:text-foreground cursor-pointer">For Seafarers</span>
                </Link>
              </li>
              <li>
                <Link href="/vacancies" data-testid="footer-link-vacancies">
                  <span className="text-muted-foreground hover:text-foreground cursor-pointer">Vacancies</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-primary" />
                <a href="mailto:c2vseajobs@gmail.com" className="text-muted-foreground hover:text-foreground" data-testid="footer-email">
                  c2vseajobs@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-primary" />
                <a href="https://wa.me/380978458147" className="text-muted-foreground hover:text-foreground" data-testid="footer-phone">
                  +380978458147 (Whatsapp, Telegram)
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-primary" />
                <div className="text-muted-foreground text-xs leading-relaxed">
                  <p>Psychological support for Seafarers and their families 24/7:</p>
                  <a href="tel:+380938298652" className="hover:text-foreground">+380 93 829 86 52</a> (Whatsapp, Telegram) / <a href="https://t.me/ProdiusAn" target="_blank" rel="noopener noreferrer" className="hover:text-foreground underline">t.me/ProdiusAn</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                <span className="text-muted-foreground" data-testid="footer-address">
                  Ukraine, Odesa City, Prokhorovska 77
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex flex-wrap gap-3 mb-6">
              <a href="https://www.linkedin.com/company/110849089" target="_blank" rel="noopener noreferrer" className="hover-elevate p-2 rounded-md" data-testid="social-linkedin">
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61581552804551" target="_blank" rel="noopener noreferrer" className="hover-elevate p-2 rounded-md" data-testid="social-facebook">
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a href="https://www.instagram.com/_aura_sea/" target="_blank" rel="noopener noreferrer" className="hover-elevate p-2 rounded-md" data-testid="social-instagram">
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a href="https://t.me/AURASEA_crew" target="_blank" rel="noopener noreferrer" className="hover-elevate p-2 rounded-md" data-testid="social-telegram">
                <Send className="w-5 h-5 text-primary" />
              </a>
            </div>
            <div>
              <Link href="/privacy" data-testid="footer-link-privacy">
                <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer">
                  Privacy Policy
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AURA SEA. All rights reserved. | Crewing with Care</p>
        </div>
      </div>
    </footer>
  );
}
