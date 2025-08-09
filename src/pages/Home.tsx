import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DEMO_PRODUCTS } from "@/data/products";
import { COUNTRY_INFO, CountryKey, flavorToVariant, SOCIAL_LINKS } from "@/lib/flavors";
import { ProductCard } from "@/components/ProductCard";
import { SocialLinks } from "@/components/SocialLinks";
import { Zap, Truck, Shield, Clock, ArrowRight, Package, Battery, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface HomeProps {
  selectedCountry?: CountryKey;
}

export function Home({ selectedCountry = "CH" }: HomeProps) {
  const countryInfo = COUNTRY_INFO[selectedCountry];
  const featuredProducts = DEMO_PRODUCTS.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="banner-flavor neon--marquee variant--mangue py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="badge-flavor variant--mangue mb-6 px-4 py-2 text-sm font-semibold">
              ⚡ JNR Vapes Premium
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 hero-text-glow leading-tight">
              Vapes jetables JNR
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Puissance, saveurs, mobilité
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
              RifinoPanik : le catalogue street & sérieux, pour vapoteurs en Suisse, frontière 74 et Maroc.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-4 bg-white text-black hover:bg-gray-100 font-bold">
                <a href={SOCIAL_LINKS.telegram} target="_blank" rel="noopener noreferrer">
                  <Zap className="mr-2 h-5 w-5" />
                  Commander immédiatement
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-black">
                <Link to="/offres">
                  <Package className="mr-2 h-5 w-5" />
                  Découvrir nos offres
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Country Info Cards */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Livraison dans votre région</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(COUNTRY_INFO).map(([key, info]) => (
              <Card key={key} className={`transition-all duration-300 hover:scale-105 ${selectedCountry === key ? 'ring-2 ring-primary' : ''}`}>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{info.flag}</div>
                  <h3 className="text-xl font-bold mb-2">{info.name}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>Délais: {info.deliveryTime}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Truck className="h-4 w-4" />
                      <span>Frais: {info.deliveryFee}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Gamme mise en avant</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos vapes JNR les plus populaires avec différentes autonomies et saveurs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard 
                key={product.id}
                product={product}
                selectedCountry={selectedCountry}
              />
            ))}
          </div>
          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/catalogue" className="flex items-center gap-2">
                Voir tout le catalogue
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Offres & Nouveautés</h2>
            <p className="text-lg text-muted-foreground">
              Packs découverte et éditions limitées
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="banner-flavor neon--standard variant--fraise overflow-hidden">
              <CardContent className="p-6">
                <Badge className="badge-flavor variant--fraise mb-3">🔥 Pack Découverte</Badge>
                <h3 className="text-xl font-bold mb-2">Découverte Fruits</h3>
                <p className="text-sm opacity-90 mb-4">3 saveurs fruités différentes pour découvrir nos meilleures vapes</p>
                <div className="text-2xl font-bold mb-4">69 {countryInfo.currency}</div>
                <SocialLinks variant="cta" />
              </CardContent>
            </Card>

            <Card className="banner-flavor neon--standard variant--blueberry overflow-hidden">
              <CardContent className="p-6">
                <Badge className="badge-flavor variant--blueberry mb-3">❄️ Menthol Fresh</Badge>
                <h3 className="text-xl font-bold mb-2">Pack Fraîcheur</h3>
                <p className="text-sm opacity-90 mb-4">Collection de saveurs mentholées et rafraîchissantes</p>
                <div className="text-2xl font-bold mb-4">75 {countryInfo.currency}</div>
                <SocialLinks variant="cta" />
              </CardContent>
            </Card>

            <Card className="banner-flavor neon--standard variant--mixedberries overflow-hidden">
              <CardContent className="p-6">
                <Badge className="badge-flavor variant--mixedberries mb-3">⭐ Édition Limitée</Badge>
                <h3 className="text-xl font-bold mb-2">JNR 22k Special</h3>
                <p className="text-sm opacity-90 mb-4">Nouvelles saveurs exclusives en quantité limitée</p>
                <div className="text-2xl font-bold mb-4">39 {countryInfo.currency}</div>
                <SocialLinks variant="cta" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi choisir RifinoPanik ?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2">Qualité garantie</h3>
              <p className="text-sm text-muted-foreground">Produits JNR authentiques, origine UE certifiée</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Truck className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2">Livraison rapide</h3>
              <p className="text-sm text-muted-foreground">24-48h en Suisse, 24-72h en France</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Battery className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2">Longue autonomie</h3>
              <p className="text-sm text-muted-foreground">De 9k à 22k taffes selon vos besoins</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Star className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2">Support réactif</h3>
              <p className="text-sm text-muted-foreground">Commande via Telegram, réponse immédiate</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="banner-flavor neon--marquee variant--pinacolada py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à commander ?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Rejoignez notre communauté et commandez directement via nos bots automatisés
          </p>
          <SocialLinks variant="cta" />
        </div>
      </section>
    </div>
  );
}