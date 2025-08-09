import { Button } from "@/components/ui/button";
import { MessageCircle, Users, Phone, Camera } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/flavors";

interface SocialLinksProps {
  variant?: "header" | "cta" | "footer";
  productId?: string;
}

export function SocialLinks({ variant = "header", productId }: SocialLinksProps) {
  const getTelegramUrl = () => {
    return productId 
      ? `${SOCIAL_LINKS.telegram}?product=${productId}`
      : SOCIAL_LINKS.telegram;
  };

  const getWhatsAppUrl = () => {
    return productId 
      ? `${SOCIAL_LINKS.whatsapp}?text=Commande%20${encodeURIComponent(productId)}`
      : SOCIAL_LINKS.whatsapp;
  };

  if (variant === "header") {
    return (
      <div className="flex items-center gap-2">
        <Button size="sm" variant="ghost" className="p-2" asChild>
          <a href={getTelegramUrl()} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4" />
          </a>
        </Button>
        <Button size="sm" variant="ghost" className="p-2" asChild>
          <a href={SOCIAL_LINKS.discord} target="_blank" rel="noopener noreferrer">
            <Users className="h-4 w-4" />
          </a>
        </Button>
        <Button size="sm" variant="ghost" className="p-2" asChild>
          <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
            <Phone className="h-4 w-4" />
          </a>
        </Button>
        <Button size="sm" variant="ghost" className="p-2" asChild>
          <a href={SOCIAL_LINKS.snapchat} target="_blank" rel="noopener noreferrer">
            <Camera className="h-4 w-4" />
          </a>
        </Button>
      </div>
    );
  }

  if (variant === "cta") {
    return (
      <div className="flex flex-col sm:flex-row gap-3">
        <Button asChild className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
          <a href={getTelegramUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <MessageCircle className="h-4 w-4" />
            Commander Telegram
          </a>
        </Button>
        <Button asChild variant="outline" className="flex-1 border-green-500 text-green-400 hover:bg-green-500 hover:text-white">
          <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            Commander WhatsApp
          </a>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <a href={getTelegramUrl()} className="text-muted-foreground hover:text-foreground transition-colors">
        <MessageCircle className="h-5 w-5" />
      </a>
      <a href={SOCIAL_LINKS.discord} className="text-muted-foreground hover:text-foreground transition-colors">
        <Users className="h-5 w-5" />
      </a>
      <a href={getWhatsAppUrl()} className="text-muted-foreground hover:text-foreground transition-colors">
        <Phone className="h-5 w-5" />
      </a>
      <a href={SOCIAL_LINKS.snapchat} className="text-muted-foreground hover:text-foreground transition-colors">
        <Camera className="h-5 w-5" />
      </a>
    </div>
  );
}