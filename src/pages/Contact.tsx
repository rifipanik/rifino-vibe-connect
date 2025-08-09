import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SocialLinks } from "@/components/SocialLinks";
import { COUNTRY_INFO, CountryKey } from "@/lib/flavors";
import { MapPin, Clock, Phone, Mail, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactProps {
  selectedCountry?: CountryKey;
}

export function Contact({ selectedCountry = "CH" }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: selectedCountry,
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", phone: "", country: selectedCountry, message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une question ? Besoin d'aide ? Contactez-nous via le formulaire ou directement sur nos plateformes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="animate-fade-in-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Formulaire de contact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nom *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Téléphone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+33 6 12 34 56 78"
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium mb-2">
                      Pays *
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-border rounded-md bg-background"
                      required
                    >
                      {Object.entries(COUNTRY_INFO).map(([key, info]) => (
                        <option key={key} value={key}>
                          {info.flag} {info.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Votre message..."
                    rows={6}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Envoyer le message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <Card className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle>Contact rapide</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Pour une réponse immédiate, contactez-nous directement :
                </p>
                <SocialLinks variant="cta" />
                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                  <p className="text-sm font-medium text-blue-700 dark:text-blue-300">
                    💡 Recommandé : Commande via bot Telegram pour un traitement ultra-rapide
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Zones desservies */}
            <Card className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Zones desservies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(COUNTRY_INFO).map(([key, info]) => (
                  <div key={key} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                    <span className="text-2xl">{info.flag}</span>
                    <div>
                      <h4 className="font-semibold">{info.name}</h4>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <div className="flex items-center gap-2">
                          <Clock className="h-3 w-3" />
                          <span>Délais: {info.deliveryTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>💰</span>
                          <span>Frais: {info.deliveryFee}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Horaires */}
            <Card className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Horaires de réponse
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Telegram / WhatsApp</span>
                    <span className="text-green-600 font-semibold">24/7</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Discord / Snapchat</span>
                    <span className="text-blue-600 font-semibold">9h-23h</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Email</span>
                    <span className="text-orange-600 font-semibold">24-48h</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                  <p className="text-xs text-muted-foreground">
                    * Réponse moyenne sous 5 minutes sur Telegram pendant les heures d'ouverture
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Coordonnées */}
            <Card className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <CardHeader>
                <CardTitle>Coordonnées</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>contact@rifinopanic.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>+33 6 XX XX XX XX</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <span className="text-sm">Adresse Maroc (à définir)</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Mini */}
        <Card className="mt-12 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <CardHeader>
            <CardTitle>Questions fréquentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Comment commander ?</h4>
                <p className="text-sm text-muted-foreground">
                  Via Telegram/WhatsApp/Discord/Snap, boutons en un clic depuis le catalogue.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Délais de livraison ?</h4>
                <p className="text-sm text-muted-foreground">
                  24-48h Suisse, 24-72h France 74, contact direct Maroc.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Âge minimum ?</h4>
                <p className="text-sm text-muted-foreground">
                  18 ans minimum. Vérification d'âge obligatoire à l'inscription.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}