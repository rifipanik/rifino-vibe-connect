import { Link } from "react-router-dom";
import { SocialLinks } from "./SocialLinks";
import { COUNTRY_INFO, CountryKey } from "@/lib/flavors";
import { Zap, MapPin, Clock, Mail, Phone } from "lucide-react";

interface FooterProps {
  selectedCountry: CountryKey;
}

export function Footer({ selectedCountry }: FooterProps) {
  const countryInfo = COUNTRY_INFO[selectedCountry];

  return (
    <footer className="border-t border-border bg-card mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">RifinoPanik</span>
            </div>
            <p className="text-muted-foreground mb-4 text-sm">
              Vapes jetables JNR premium. Style street, qualité sérieuse. 
              Livraison Suisse, France 74 et Maroc.
            </p>
            <SocialLinks variant="footer" />
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Accueil</Link></li>
              <li><Link to="/catalogue" className="text-muted-foreground hover:text-foreground transition-colors">Catalogue</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</Link></li>
              <li><Link to="/digitalisation" className="text-muted-foreground hover:text-foreground transition-colors">Digitalisation</Link></li>
            </ul>
          </div>

          {/* Infos Livraison */}
          <div>
            <h3 className="font-semibold mb-4">Livraison ({countryInfo.name})</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Délais: {countryInfo.deliveryTime}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Frais: {countryInfo.deliveryFee}</span>
              </div>
              <div className="text-xs text-muted-foreground mt-4">
                <p><strong>Horaires de réponse :</strong></p>
                <p>Telegram/WhatsApp: 24/7</p>
                <p>Discord/Snap: 9h-23h</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contact@rifinopanic.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+33 6 XX XX XX XX</span>
              </div>
              <div className="text-xs text-muted-foreground mt-4">
                <p>Adresse Maroc :</p>
                <p>Adresse à définir</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Legal Links */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <Link to="/mentions-legales" className="hover:text-foreground transition-colors">
                Mentions légales
              </Link>
              <Link to="/politique-confidentialite" className="hover:text-foreground transition-colors">
                Politique de confidentialité
              </Link>
              <Link to="/cookies" className="hover:text-foreground transition-colors">
                Cookies
              </Link>
            </div>

            {/* Age Warning */}
            <div className="flex items-center gap-2 text-sm">
              <span className="text-lg">🔞</span>
              <span className="text-muted-foreground">
                Site réservé aux +18 ans
              </span>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-6 text-sm text-muted-foreground">
            <p>&copy; 2024 RifinoPanik. Tous droits réservés.</p>
            <p className="mt-1 text-xs">
              ⚠️ La nicotine crée une forte dépendance. Interdit aux mineurs et aux femmes enceintes.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}