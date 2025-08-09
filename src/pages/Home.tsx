import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DEMO_PRODUCTS } from "@/data/products";
import { COUNTRY_INFO, CountryKey, flavorToVariant, SOCIAL_LINKS } from "@/lib/flavors";
import { ProductCard } from "@/components/ProductCard";
import { SocialLinks } from "@/components/SocialLinks";
import { SaveurSection } from "@/components/SaveurSection";
import { Zap, Truck, Shield, Clock, ArrowRight, Package, Battery, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface HomeProps {
  selectedCountry?: CountryKey;
}

export function Home({ selectedCountry = "CH" }: HomeProps) {
  const countryInfo = COUNTRY_INFO[selectedCountry];
  const featuredProducts = DEMO_PRODUCTS.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Hero Section */}
      <section className="banner-flavor neon--marquee variant--mangue py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="nopanik-title text-6xl md:text-8xl mb-4 leading-none" data-text="NOPANIK">
                NOPANIK
              </h1>
              <div className="text-2xl md:text-4xl font-bold mb-6 text-white">
                Vape ton style. Choisis ta saveur.
              </div>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              RifinoPanik, la vape qui t'accompagne partout en Suisse, 74, et au Maroc. 
              <span className="block mt-2 font-semibold text-yellow-300">Commande direct, sans stress.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold street-hover">
                <a href={SOCIAL_LINKS.telegram} target="_blank" rel="noopener noreferrer">
                  <Zap className="mr-2 h-5 w-5" />
                  Commander maintenant
                </a>
              </Button>
              <Button asChild size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold street-hover">
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
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-white">NOPANIK dans ta région</h2>
          <p className="text-center text-gray-300 mb-12">Tu commandes → on gère tout</p>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(COUNTRY_INFO).map(([key, info]) => (
              <Card key={key} className={`transition-all duration-300 street-hover ${selectedCountry === key ? 'ring-2 ring-yellow-400' : ''} bg-gray-800 border-gray-700`}>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{info.flag}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{info.name}</h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="h-4 w-4 text-yellow-400" />
                      <span>Délais: {info.deliveryTime}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Truck className="h-4 w-4 text-yellow-400" />
                      <span>Frais: {info.deliveryFee}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Saveurs Section */}
      <SaveurSection />

      {/* Featured Products */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Gamme mise en avant</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Nos JNR les plus stylés avec les saveurs qui cartonnent
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
            <Button asChild size="lg" className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold street-hover">
              <Link to="/catalogue" className="flex items-center gap-2">
                Voir tout le catalogue
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Offres & Nouveautés</h2>
            <p className="text-lg text-gray-300">
              NOPANIK avec nos packs stylés
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="banner-flavor neon--standard variant--fraise overflow-hidden street-hover">
              <CardContent className="p-6">
                <Badge className="badge-flavor variant--fraise mb-3">🔥 Pack Découverte</Badge>
                <h3 className="title-flavor text-xl font-bold mb-2">3 vapes = plus de vibes</h3>
                <p className="text-sm opacity-90 mb-4">"Goûte à tout, choisis ton préféré"</p>
                <div className="text-2xl font-bold mb-4 text-white">69 {countryInfo.currency}</div>
                <SocialLinks variant="cta" />
              </CardContent>
            </Card>

            <Card className="banner-flavor neon--standard variant--blueberry overflow-hidden street-hover">
              <CardContent className="p-6">
                <Badge className="badge-flavor variant--blueberry mb-3">❄️ Menthol Fresh</Badge>
                <h3 className="title-flavor text-xl font-bold mb-2">Pack Fraîcheur</h3>
                <p className="text-sm opacity-90 mb-4">"Fraîcheur garantie, style assuré"</p>
                <div className="text-2xl font-bold mb-4 text-white">75 {countryInfo.currency}</div>
                <SocialLinks variant="cta" />
              </CardContent>
            </Card>

            <Card className="banner-flavor neon--standard variant--mixedberries overflow-hidden street-hover">
              <CardContent className="p-6">
                <Badge className="badge-flavor variant--mixedberries mb-3">⭐ Édition Limitée</Badge>
                <h3 className="title-flavor text-xl font-bold mb-2">JNR 22k Special</h3>
                <p className="text-sm opacity-90 mb-4">"Essaye-les toutes, choisis ton équipe"</p>
                <div className="text-2xl font-bold mb-4 text-white">39 {countryInfo.currency}</div>
                <SocialLinks variant="cta" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Pourquoi NOPANIK ?</h2>
            <p className="text-xl text-yellow-300 font-semibold">"Parce que tu peux commander tranquille. Pas de galère, pas de mauvaise surprise. Juste ta vape, vite et bien."</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 street-hover bg-gray-800 border-gray-700">
              <Shield className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-lg font-semibold mb-2 text-white">Qualité garantie</h3>
              <p className="text-sm text-gray-300">Produits JNR authentiques, origine UE certifiée</p>
            </Card>
            
            <Card className="text-center p-6 street-hover bg-gray-800 border-gray-700">
              <Truck className="h-12 w-12 mx-auto mb-4 text-red-400" />
              <h3 className="text-lg font-semibold mb-2 text-white">Livraison rapide</h3>
              <p className="text-sm text-gray-300">24-48h en Suisse, 24-72h en France</p>
            </Card>
            
            <Card className="text-center p-6 street-hover bg-gray-800 border-gray-700">
              <Battery className="h-12 w-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-lg font-semibold mb-2 text-white">Longue autonomie</h3>
              <p className="text-sm text-gray-300">De 9k à 22k taffes selon tes besoins</p>
            </Card>
            
            <Card className="text-center p-6 street-hover bg-gray-800 border-gray-700">
              <Star className="h-12 w-12 mx-auto mb-4 text-purple-400" />
              <h3 className="text-lg font-semibold mb-2 text-white">Support réactif</h3>
              <p className="text-sm text-gray-300">Commande via Telegram, réponse immédiate</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="banner-flavor neon--marquee variant--pinacolada py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Prêt à commander ?
          </h2>
          <p className="text-lg mb-8 text-black/80 max-w-2xl mx-auto font-semibold">
            Rejoins notre communauté NOPANIK et commande direct via nos bots
          </p>
          <SocialLinks variant="cta" />
        </div>
      </section>
    </div>
  );
}