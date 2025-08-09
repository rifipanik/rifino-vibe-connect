import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Product } from "@/data/products";
import { flavorToVariant, COUNTRY_INFO, CountryKey } from "@/lib/flavors";
import { SocialLinks } from "./SocialLinks";
import { Battery, Package } from "lucide-react";

interface ProductCardProps {
  product: Product;
  selectedCountry: CountryKey;
  onViewProduct?: (product: Product) => void;
}

export function ProductCard({ product, selectedCountry, onViewProduct }: ProductCardProps) {
  const variant = flavorToVariant(product.saveurs[0] || "");
  const currency = COUNTRY_INFO[selectedCountry].currency;
  const price = product.prix[selectedCountry];

  const getStockInfo = () => {
    if (product.stock === 0) {
      return { label: "Rupture", className: "bg-destructive text-destructive-foreground" };
    }
    if (product.stock <= 5) {
      return { label: `Faible stock : ${product.stock}`, className: "bg-yellow-600 text-white" };
    }
    return { label: `En stock : ${product.stock}`, className: "bg-green-600 text-white" };
  };

  const stockInfo = getStockInfo();

  return (
    <Card className={`card-flavor neon--standard ${variant} group transition-all duration-300 hover:scale-[1.02] animate-fade-in-up overflow-hidden`}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex flex-wrap gap-1">
            {product.badges.map((badge) => (
              <Badge key={badge} className={`badge-flavor ${variant} text-xs`}>
                {badge}
              </Badge>
            ))}
          </div>
          <Badge className={`text-xs ${stockInfo.className}`}>
            {stockInfo.label}
          </Badge>
        </div>

        <div className="aspect-[4/3] rounded-xl mb-4 bg-black/20 flex items-center justify-center overflow-hidden relative">
          {product.images[0] && product.images[0] !== "{{IMG_JNR_9K_MANGUE_1}}" ? (
            <img 
              src={product.images[0]} 
              alt={product.nom}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          ) : (
            <div className="text-center p-6">
              <Package className="h-12 w-12 mx-auto mb-2 opacity-60" />
              <p className="text-sm opacity-70">Visuel 3D à venir</p>
            </div>
          )}
        </div>

        <h3 className="text-lg font-bold mb-2 line-clamp-2">{product.nom}</h3>
        
        <div className="flex items-center gap-4 text-sm opacity-90 mb-3">
          <div className="flex items-center gap-1">
            <Battery className="h-4 w-4" />
            <span>~{product.autonomie.toLocaleString()}</span>
          </div>
          <div className="text-xs px-2 py-1 bg-black/20 rounded">
            {product.nicotine}
          </div>
        </div>

        <p className="text-sm opacity-80 line-clamp-2 mb-4">{product.description}</p>

        <div className="text-xl font-bold mb-4">
          {price} {currency}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <div className="w-full space-y-2">
          <SocialLinks variant="cta" productId={product.id} />
          {onViewProduct && (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => onViewProduct(product)}
              className="w-full"
            >
              Voir détails
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}