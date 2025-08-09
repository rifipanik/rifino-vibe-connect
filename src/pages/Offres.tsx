import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SocialLinks } from "@/components/SocialLinks";
import { DEMO_PRODUCTS, Product } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { CountryKey } from "@/lib/flavors";
import { Gift, Sparkles, Star, TrendingUp, Package } from "lucide-react";

interface OffresProps {
  selectedCountry?: CountryKey;
}

export function Offres({ selectedCountry = "CH" }: OffresProps) {
  // Filtrer les produits par catégories
  const topVentes = DEMO_PRODUCTS.filter(p => p.badges.includes("Top vente"));
  const nouveautes = DEMO_PRODUCTS.filter(p => p.badges.includes("Nouveauté"));
  const editionsLimitees = DEMO_PRODUCTS.filter(p => p.badges.includes("Édition limitée"));

  const packs = [
    {
      id: "pack-decouverte",
      title: "Pack Découverte",
      subtitle: "3 saveurs différentes",
      price: { CH: 65, FR: 62, MA: 580 },
      originalPrice: { CH: 75, FR: 72, MA: 660 },
      description: "Parfait pour découvrir nos meilleures saveurs",
      badge: "Économie 15%",
      variant: "variant--mixedberries",
      products: ["Mangue", "Fraise", "Blueberry"]
    },
    {
      id: "pack-premium",
      title: "Pack Premium",
      subtitle: "5 vapes haute autonomie",
      price: { CH: 140, FR: 135, MA: 1250 },
      originalPrice: { CH: 160, FR: 155, MA: 1400 },
      description: "Les modèles 18k et 22k pour une expérience longue durée",
      badge: "Économie 20%",
      variant: "variant--pinacolada",
      products: ["JNR 18k", "JNR 22k", "Édition limitée"]
    },
    {
      id: "pack-tropical",
      title: "Pack Tropical",
      subtitle: "Saveurs exotiques",
      price: { CH: 85, FR: 82, MA: 750 },
      originalPrice: { CH: 95, FR: 92, MA: 850 },
      description: "Évadez-vous avec nos saveurs tropicales",
      badge: "Nouveau",
      variant: "variant--mangue",
      products: ["Mangue", "Pina Colada", "Tropical Mix"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Gift className="h-4 w-4" />
            Offres spéciales
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Découvrez nos offres
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Packs exclusifs, nouveautés et éditions limitées à prix avantageux
          </p>
        </div>

        {/* Packs Spéciaux */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Package className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Packs Spéciaux</h2>
            <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
              Économies garanties
            </Badge>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {packs.map((pack) => (
              <Card key={pack.id} className={`card-flavor neon--standard ${pack.variant} group transition-all duration-300 hover:scale-[1.02] overflow-hidden`}>
                <CardHeader className="relative">
                  <div className="absolute -top-2 -right-2">
                    <Badge className="bg-red-500 text-white font-bold">
                      {pack.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{pack.title}</CardTitle>
                  <p className="text-sm opacity-90">{pack.subtitle}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-2xl font-bold">
                        {pack.price[selectedCountry]} {selectedCountry === 'CH' ? 'CHF' : selectedCountry === 'FR' ? '€' : 'MAD'}
                      </span>
                      <span className="text-sm line-through opacity-60">
                        {pack.originalPrice[selectedCountry]}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-sm opacity-80 text-center">{pack.description}</p>
                  
                  <div className="space-y-2">
                    <p className="text-xs font-medium opacity-90">Inclus :</p>
                    {pack.products.map((product, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs opacity-80">
                        <div className="w-1.5 h-1.5 rounded-full bg-current opacity-60"></div>
                        {product}
                      </div>
                    ))}
                  </div>
                  
                  <SocialLinks variant="cta" productId={pack.id} />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Top Ventes */}
        {topVentes.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Top Ventes</h2>
              <Badge variant="secondary">Les plus populaires</Badge>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {topVentes.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  selectedCountry={selectedCountry} 
                />
              ))}
            </div>
          </section>
        )}

        {/* Nouveautés */}
        {nouveautes.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Nouveautés</h2>
              <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
                Fraîchement arrivées
              </Badge>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {nouveautes.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  selectedCountry={selectedCountry} 
                />
              ))}
            </div>
          </section>
        )}

        {/* Éditions Limitées */}
        {editionsLimitees.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Star className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Éditions Limitées</h2>
              <Badge variant="destructive">Quantités limitées</Badge>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {editionsLimitees.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  selectedCountry={selectedCountry} 
                />
              ))}
            </div>
          </section>
        )}

        {/* CTA Final */}
        <Card className="banner-flavor neon--marquee variant--blueberry text-center py-12">
          <CardContent>
            <h3 className="text-3xl font-bold text-white mb-4">
              Prêt à commander ?
            </h3>
            <p className="text-white/80 mb-6 max-w-md mx-auto">
              Rejoignez des milliers de clients satisfaits et découvrez la qualité RifinoPanik
            </p>
            <SocialLinks variant="cta" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}