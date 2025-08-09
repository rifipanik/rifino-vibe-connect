import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SocialLinks } from "@/components/SocialLinks";
import { SOCIAL_LINKS, COUNTRY_INFO, CountryKey } from "@/lib/flavors";
import { MessageCircle, Phone, Users, Camera, Clock, Shield, Zap } from "lucide-react";

interface CommanderProps {
  selectedCountry?: CountryKey;
}

export function Commander({ selectedCountry = "CH" }: CommanderProps) {
  const countryInfo = COUNTRY_INFO[selectedCountry];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="h-4 w-4" />
            Commande instantanée
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Commander immédiatement
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choisissez votre plateforme préférée pour passer commande en quelques clics
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="banner-flavor neon--standard variant--blueberry group hover:neon--marquee transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <MessageCircle className="h-12 w-12 mx-auto mb-3 text-white" />
              <CardTitle className="text-2xl text-white">Telegram</CardTitle>
              <p className="text-white/80">Bot automatique • Réponse instantanée</p>
            </CardHeader>
            <CardContent className="pt-0">
              <Button asChild size="lg" className="w-full bg-white text-blue-600 hover:bg-white/90">
                <a href={SOCIAL_LINKS.telegram} target="_blank" rel="noopener noreferrer">
                  Commander sur Telegram
                </a>
              </Button>
              <div className="mt-4 space-y-2 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Réponse en moins de 5 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  <span>Paiement sécurisé</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="banner-flavor neon--standard variant--fraise group hover:neon--marquee transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <Phone className="h-12 w-12 mx-auto mb-3 text-black" />
              <CardTitle className="text-2xl text-black">WhatsApp</CardTitle>
              <p className="text-black/80">Contact direct • Support personnalisé</p>
            </CardHeader>
            <CardContent className="pt-0">
              <Button asChild size="lg" variant="outline" className="w-full bg-white text-green-600 border-green-600 hover:bg-green-600 hover:text-white">
                <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
                  Commander sur WhatsApp
                </a>
              </Button>
              <div className="mt-4 space-y-2 text-sm text-black/80">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Support 9h-22h</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  <span>Conseils personnalisés</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Secondary Options */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <Users className="h-10 w-10 mx-auto mb-3 text-purple-500" />
              <CardTitle>Discord</CardTitle>
              <p className="text-muted-foreground">Rejoignez notre communauté</p>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <a href={SOCIAL_LINKS.discord} target="_blank" rel="noopener noreferrer">
                  Rejoindre Discord
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <Camera className="h-10 w-10 mx-auto mb-3 text-yellow-500" />
              <CardTitle>Snapchat</CardTitle>
              <p className="text-muted-foreground">Stories et nouveautés</p>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <a href={SOCIAL_LINKS.snapchat} target="_blank" rel="noopener noreferrer">
                  Suivre sur Snapchat
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Delivery Info */}
        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="text-2xl">{countryInfo.flag}</div>
              Informations de livraison - {countryInfo.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <Badge variant="secondary" className="mb-2">Délais</Badge>
                <p className="font-medium">{countryInfo.deliveryTime}</p>
              </div>
              <div className="text-center">
                <Badge variant="secondary" className="mb-2">Monnaie</Badge>
                <p className="font-medium">{countryInfo.currency}</p>
              </div>
              <div className="text-center">
                <Badge variant="secondary" className="mb-2">Livraison</Badge>
                <p className="font-medium">Gratuite dès 50{countryInfo.currency}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Age Warning */}
        <div className="mt-8 text-center">
          <Badge variant="destructive" className="text-sm">
            ⚠️ Réservé aux personnes de 18 ans et plus
          </Badge>
        </div>
      </div>
    </div>
  );
}