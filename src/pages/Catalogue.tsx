import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/ProductCard";
import { DEMO_PRODUCTS } from "@/data/products";
import { FLAVORS, AUTONOMIES, CountryKey } from "@/lib/flavors";
import { Search, Filter, SlidersHorizontal } from "lucide-react";

interface CatalogueProps {
  selectedCountry?: CountryKey;
}

export function Catalogue({ selectedCountry = "CH" }: CatalogueProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([]);
  const [selectedAutonomies, setSelectedAutonomies] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState<"popular" | "new" | "stock" | "autonomy">("popular");

  const filteredProducts = useMemo(() => {
    let filtered = DEMO_PRODUCTS.filter(product => {
      const matchesSearch = product.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.saveurs.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesFlavors = selectedFlavors.length === 0 || 
                            product.saveurs.some(s => selectedFlavors.includes(s));
      
      const matchesAutonomies = selectedAutonomies.length === 0 ||
                               selectedAutonomies.includes(product.autonomie);

      return matchesSearch && matchesFlavors && matchesAutonomies;
    });

    // Sort products
    switch (sortBy) {
      case "new":
        filtered = filtered.filter(p => p.badges.includes("Nouveauté"));
        break;
      case "stock":
        filtered = filtered.sort((a, b) => b.stock - a.stock);
        break;
      case "autonomy":
        filtered = filtered.sort((a, b) => b.autonomie - a.autonomie);
        break;
      default: // popular
        filtered = filtered.sort((a, b) => {
          const aPopular = a.badges.includes("Top vente") || a.badges.includes("Populaire");
          const bPopular = b.badges.includes("Top vente") || b.badges.includes("Populaire");
          if (aPopular && !bPopular) return -1;
          if (!aPopular && bPopular) return 1;
          return 0;
        });
    }

    return filtered;
  }, [searchTerm, selectedFlavors, selectedAutonomies, sortBy]);

  const toggleFlavor = (flavor: string) => {
    setSelectedFlavors(prev => 
      prev.includes(flavor) 
        ? prev.filter(f => f !== flavor)
        : [...prev, flavor]
    );
  };

  const toggleAutonomy = (autonomy: number) => {
    setSelectedAutonomies(prev =>
      prev.includes(autonomy)
        ? prev.filter(a => a !== autonomy)
        : [...prev, autonomy]
    );
  };

  const clearFilters = () => {
    setSelectedFlavors([]);
    setSelectedAutonomies([]);
    setSearchTerm("");
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Catalogue JNR</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez toute notre gamme de vapes jetables JNR avec filtres par saveur et autonomie
          </p>
        </div>

        {/* Filters Bar */}
        <div className="sticky top-20 z-40 bg-background/95 backdrop-blur border border-border rounded-xl p-6 mb-8 animate-fade-in-up">
          {/* Search */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher par nom ou saveur..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button
              variant="outline"
              onClick={clearFilters}
              className="flex items-center gap-2"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Effacer filtres
            </Button>
          </div>

          {/* Flavor Filters */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Saveurs
            </h3>
            <div className="flex flex-wrap gap-2">
              {FLAVORS.map(flavor => {
                const isSelected = selectedFlavors.includes(flavor);
                return (
                  <Badge
                    key={flavor}
                    variant={isSelected ? "default" : "outline"}
                    className={`cursor-pointer transition-all hover:scale-105 ${
                      isSelected ? "ring-2 ring-primary/50" : ""
                    }`}
                    onClick={() => toggleFlavor(flavor)}
                  >
                    {flavor.replace("-", " ")}
                  </Badge>
                );
              })}
            </div>
          </div>

          {/* Autonomy Filters */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-3">Autonomie</h3>
            <div className="flex flex-wrap gap-2">
              {AUTONOMIES.map(autonomy => {
                const isSelected = selectedAutonomies.includes(autonomy);
                return (
                  <Badge
                    key={autonomy}
                    variant={isSelected ? "default" : "outline"}
                    className={`cursor-pointer transition-all hover:scale-105 ${
                      isSelected ? "ring-2 ring-primary/50" : ""
                    }`}
                    onClick={() => toggleAutonomy(autonomy)}
                  >
                    {autonomy.toLocaleString()}
                  </Badge>
                );
              })}
            </div>
          </div>

          {/* Sort Options */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Trier par</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { key: "popular", label: "Populaires" },
                { key: "new", label: "Nouveautés" },
                { key: "stock", label: "Stock" },
                { key: "autonomy", label: "Autonomie ↓" }
              ].map(option => (
                <Button
                  key={option.key}
                  variant={sortBy === option.key ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSortBy(option.key as any)}
                >
                  {option.label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              Produits ({filteredProducts.length})
            </h2>
            {(selectedFlavors.length > 0 || selectedAutonomies.length > 0) && (
              <p className="text-sm text-muted-foreground">
                Filtres actifs: {selectedFlavors.length + selectedAutonomies.length}
              </p>
            )}
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <div key={product.id} style={{ animationDelay: `${index * 0.1}s` }}>
                  <ProductCard 
                    product={product}
                    selectedCountry={selectedCountry}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">Aucun produit trouvé</h3>
              <p className="text-muted-foreground mb-4">
                Essayez de modifier vos critères de recherche
              </p>
              <Button onClick={clearFilters} variant="outline">
                Effacer tous les filtres
              </Button>
            </div>
          )}
        </div>

        {/* Commander Immédiatement Section */}
        <div className="banner-flavor neon--marquee variant--mangue rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Commander immédiatement</h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Commande ultra-rapide via nos bots automatisés. Réponse en moins de 5 minutes !
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Button asChild className="flex-1 bg-blue-600 hover:bg-blue-700">
              <a href="{{TELEGRAM_LINK}}" target="_blank" rel="noopener noreferrer">
                📱 Telegram
              </a>
            </Button>
            <Button asChild className="flex-1 bg-green-600 hover:bg-green-700">
              <a href="{{WHATSAPP_LINK}}" target="_blank" rel="noopener noreferrer">
                💬 WhatsApp
              </a>
            </Button>
            <Button asChild className="flex-1 bg-indigo-600 hover:bg-indigo-700">
              <a href="{{DISCORD_INVITE}}" target="_blank" rel="noopener noreferrer">
                🎮 Discord
              </a>
            </Button>
            <Button asChild className="flex-1 bg-yellow-600 hover:bg-yellow-700">
              <a href="{{SNAP_LINK}}" target="_blank" rel="noopener noreferrer">
                👻 Snapchat
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}