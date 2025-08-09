import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SocialLinks } from "@/components/SocialLinks";
import { Bot, Zap, Clock, Shield, Smartphone, MessageCircle, Users, Phone, Camera, ArrowRight, CheckCircle, Star } from "lucide-react";

export function Digitalisation() {
  const platforms = [
    {
      name: "Telegram",
      icon: MessageCircle,
      color: "bg-blue-500",
      features: ["Catalogue automatisé", "Prix en temps réel", "Suivi commandes", "Support 24/7"],
      advantages: ["Interface intuitive", "Paiements sécurisés", "Livraison trackée", "Communauté active"],
      link: "{{TELEGRAM_LINK}}"
    },
    {
      name: "WhatsApp",
      icon: Phone,
      color: "bg-green-500",
      features: ["Bot intelligent", "Menu interactif", "Confirmations instantanées", "Photos produits"],
      advantages: ["Familier pour tous", "Notifications push", "Messages vocaux", "Partage facile"],
      link: "{{WHATSAPP_LINK}}"
    },
    {
      name: "Discord",
      icon: Users,
      color: "bg-indigo-500",
      features: ["Serveur communauté", "Salons par catégorie", "Événements exclusifs", "Gaming rewards"],
      advantages: ["Ambiance gaming", "Offres VIP", "Events spéciaux", "Chat vocal"],
      link: "{{DISCORD_INVITE}}"
    },
    {
      name: "Snapchat",
      icon: Camera,
      color: "bg-yellow-500",
      features: ["Stories produits", "AR filters", "Géolocalisation", "Snap exclusifs"],
      advantages: ["Contenu visuel", "Stories éphémères", "Réalité augmentée", "Jeune audience"],
      link: "{{SNAP_LINK}}"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Rapidité",
      description: "Commande en 30 secondes, confirmation immédiate, traitement automatisé"
    },
    {
      icon: Shield,
      title: "Sécurité",
      description: "Chiffrement end-to-end, paiements sécurisés, données protégées"
    },
    {
      icon: Clock,
      title: "Disponibilité",
      description: "Bots actifs 24/7, support humain aux heures d'ouverture"
    },
    {
      icon: Smartphone,
      title: "Simplicité",
      description: "Interface familière, pas d'app à installer, fonctionne partout"
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
            🤖 Digitalisation
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Écosystème d'achat
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              100% automatisé
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez comment nos bots intelligents révolutionnent l'expérience d'achat de vapes. 
            Commandez via vos plateformes préférées avec une technologie de pointe.
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {platforms.map((platform, index) => (
            <Card key={platform.name} className="group hover:shadow-xl transition-all duration-500 animate-fade-in-up hover:scale-105" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="text-center">
                <div className={`mx-auto p-4 rounded-full ${platform.color} text-white mb-4 group-hover:scale-110 transition-transform`}>
                  <platform.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">{platform.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-sm text-muted-foreground uppercase tracking-wide">Fonctionnalités</h4>
                  <ul className="space-y-1">
                    {platform.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-sm text-muted-foreground uppercase tracking-wide">Avantages</h4>
                  <ul className="space-y-1">
                    {platform.advantages.map((advantage, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Star className="h-3 w-3 text-yellow-500" />
                        {advantage}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button asChild className={`w-full mt-4 ${platform.color.replace('bg-', 'bg-')} hover:opacity-90`}>
                  <a href={platform.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <platform.icon className="h-4 w-4" />
                    Accéder
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How it Works */}
        <Card className="mb-16 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30 border-purple-200 dark:border-purple-800">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold mb-4">Comment ça fonctionne ?</CardTitle>
            <p className="text-lg text-muted-foreground">
              Un processus simplifié en 4 étapes pour une expérience d'achat optimale
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Choisir plateforme", desc: "Sélectionnez votre messagerie préférée", icon: Smartphone },
                { step: "2", title: "Parcourir catalogue", desc: "Naviguez dans nos produits via le bot", icon: Bot },
                { step: "3", title: "Commander", desc: "Ajoutez au panier et confirmez", icon: CheckCircle },
                { step: "4", title: "Recevoir", desc: "Suivi en temps réel jusqu'à livraison", icon: Zap }
              ].map((item, index) => (
                <div key={item.step} className="text-center animate-fade-in-up" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                  <div className="relative mb-4">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {item.step}
                    </div>
                    <div className="absolute -top-2 -right-2 bg-white dark:bg-gray-900 rounded-full p-2 shadow-lg">
                      <item.icon className="h-4 w-4 text-purple-500" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Avantages pour nos clients</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={benefit.title} className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${0.8 + index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="mx-auto w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2 text-lg">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Showcase */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="animate-fade-in-up" style={{ animationDelay: "1.2s" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-blue-500" />
                Intelligence artificielle
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Nos bots utilisent une IA avancée pour comprendre vos préférences et vous proposer les produits parfaits.
              </p>
              <ul className="space-y-2">
                {[
                  "Recommandations personnalisées",
                  "Gestion automatique des stocks",
                  "Calcul instantané des frais",
                  "Réponses naturelles 24/7"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up" style={{ animationDelay: "1.3s" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-500" />
                Sécurité & Confidentialité
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Vos données et transactions sont protégées par les plus hauts standards de sécurité.
              </p>
              <ul className="space-y-2">
                {[
                  "Chiffrement end-to-end",
                  "Aucune donnée partagée",
                  "Paiements sécurisés",
                  "Conformité RGPD"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="banner-flavor neon--marquee variant--blueberry text-center animate-fade-in-up" style={{ animationDelay: "1.4s" }}>
          <CardContent className="p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Rejoignez l'expérience digitale
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Découvrez la nouvelle façon d'acheter vos vapes. Simple, rapide, sécurisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <Button asChild size="lg" className="flex-1 bg-white text-black hover:bg-gray-100">
                <a href="{{TELEGRAM_LINK}}" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Commencer sur Telegram
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="flex-1 border-white text-white hover:bg-white hover:text-black">
                <a href="/catalogue" className="flex items-center gap-2">
                  Voir le catalogue
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}