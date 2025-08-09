import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SocialLinks } from "@/components/SocialLinks";
import { HelpCircle, MessageCircle, Shield, Truck, CreditCard, Clock } from "lucide-react";

export function FAQ() {
  const faqData = [
    {
      category: "Commande",
      icon: MessageCircle,
      color: "bg-blue-500",
      questions: [
        {
          q: "Comment commander ?",
          a: "Commandez directement via nos bots automatisés sur Telegram, WhatsApp, Discord ou Snapchat. Cliquez simplement sur les boutons 'Commander' depuis notre catalogue et vous serez redirigé vers la plateforme de votre choix. Notre bot vous guidera étape par étape."
        },
        {
          q: "Puis-je modifier ma commande ?",
          a: "Oui, tant que votre commande n'a pas été expédiée. Contactez-nous immédiatement via le même canal utilisé pour commander (Telegram recommandé pour une réponse rapide)."
        },
        {
          q: "Comment suivre ma commande ?",
          a: "Vous recevrez un numéro de suivi par message privé dès l'expédition. Vous pouvez également nous contacter à tout moment pour un point de situation."
        }
      ]
    },
    {
      category: "Livraison",
      icon: Truck,
      color: "bg-green-500",
      questions: [
        {
          q: "Livrez-vous en Suisse/France/Maroc ?",
          a: "Oui ! Nous livrons en Suisse (délais 24-48h), France région 74 (délais 24-72h), et Maroc (point de contact direct). Les frais de livraison varient selon votre localisation et sont affichés selon le pays sélectionné."
        },
        {
          q: "Quels sont les délais de livraison ?",
          a: "Suisse: 24-48h | France (74): 24-72h | Maroc: Contact direct pour organisation. Les commandes passées avant 16h sont généralement expédiées le jour même."
        },
        {
          q: "Livraison discrète ?",
          a: "Oui, tous nos colis sont expédiés dans des emballages neutres sans indication du contenu. Votre confidentialité est respectée."
        }
      ]
    },
    {
      category: "Produits",
      icon: HelpCircle,
      color: "bg-purple-500",
      questions: [
        {
          q: "Quels modèles JNR proposez-vous ?",
          a: "Nous proposons la gamme complète JNR : 9k, 15k, 16k, 18k et 22k taffes. Chaque modèle est disponible en plusieurs saveurs : mangue, fraise, fraise-pastèque, pina colada, blueberry et mixed berries."
        },
        {
          q: "Le stock affiché est-il réel ?",
          a: "Le stock est mis à jour régulièrement mais n'est pas en temps réel. En cas de rupture après commande, nous vous contactons immédiatement pour proposer une alternative ou un remboursement."
        },
        {
          q: "Produits authentiques ?",
          a: "Tous nos produits JNR sont authentiques, importés directement depuis l'UE avec certification d'origine. Nous ne vendons aucune contrefaçon."
        }
      ]
    },
    {
      category: "Légal & Sécurité",
      icon: Shield,
      color: "bg-red-500",
      questions: [
        {
          q: "Âge légal requis ?",
          a: "18 ans minimum obligatoire. Une vérification d'âge est effectuée à l'entrée du site et peut être demandée lors de la commande ou de la livraison."
        },
        {
          q: "Mentions légales ?",
          a: "Nos produits contiennent de la nicotine et créent une forte dépendance. Interdits aux mineurs et aux femmes enceintes. Conforme à la réglementation française, suisse et marocaine."
        },
        {
          q: "Protection des données ?",
          a: "Vos données personnelles sont protégées et ne sont jamais partagées avec des tiers. Consultez notre politique de confidentialité pour plus de détails."
        }
      ]
    },
    {
      category: "Paiement & SAV",
      icon: CreditCard,
      color: "bg-yellow-500",
      questions: [
        {
          q: "Modes de paiement acceptés ?",
          a: "Paiement sur notre site non disponible. Tous les paiements se font directement via nos bots (Telegram/WhatsApp/Discord/Snapchat) avec nos méthodes sécurisées : virement, crypto, espèces selon la région."
        },
        {
          q: "Politique de retours ?",
          a: "Retours acceptés sous 7 jours si produit défaillant ou non conforme. Aucun retour pour changement d'avis sur les saveurs (produits d'hygiène). Frais de retour à votre charge sauf défaut produit."
        },
        {
          q: "Garantie produit ?",
          a: "Garantie 30 jours contre les défauts de fabrication. En cas de problème, contactez-nous avec photos et nous procédons à l'échange immédiat."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Questions fréquentes</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trouvez rapidement les réponses à vos questions sur nos produits, livraisons et services
          </p>
        </div>

        {/* Quick Actions */}
        <Card className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border-blue-200 dark:border-blue-800">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Besoin d'aide immédiate ?</h3>
              <p className="text-muted-foreground mb-6">
                Contactez-nous directement pour une réponse personnalisée en moins de 5 minutes
              </p>
              <SocialLinks variant="cta" />
            </div>
          </CardContent>
        </Card>

        {/* FAQ by Category */}
        <div className="space-y-8">
          {faqData.map((category, index) => (
            <Card key={category.category} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${category.color} text-white`}>
                    <category.icon className="h-5 w-5" />
                  </div>
                  {category.category}
                  <Badge variant="outline" className="ml-auto">
                    {category.questions.length} questions
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, qIndex) => (
                    <AccordionItem key={qIndex} value={`${category.category}-${qIndex}`}>
                      <AccordionTrigger className="text-left hover:text-primary">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Help */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <Card className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Horaires de support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">📱 Telegram</span>
                  <Badge className="bg-green-500">24/7</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">💬 WhatsApp</span>
                  <Badge className="bg-green-500">24/7</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">🎮 Discord</span>
                  <Badge className="bg-blue-500">9h-23h</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">👻 Snapchat</span>
                  <Badge className="bg-yellow-500">9h-23h</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
            <CardHeader>
              <CardTitle>Règles importantes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-lg">🔞</span>
                <div>
                  <p className="font-medium">Âge minimum 18 ans</p>
                  <p className="text-sm text-muted-foreground">Vérification obligatoire</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg">⚠️</span>
                <div>
                  <p className="font-medium">Produits avec nicotine</p>
                  <p className="text-sm text-muted-foreground">Crée une forte dépendance</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg">🚫</span>
                <div>
                  <p className="font-medium">Interdit aux femmes enceintes</p>
                  <p className="text-sm text-muted-foreground">Risques pour la santé</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact CTA */}
        <Card className="mt-12 banner-flavor neon--standard variant--mangue animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Votre question n'est pas listée ?</h3>
            <p className="text-lg opacity-90 mb-6">
              Notre équipe support est là pour vous aider avec des réponses personnalisées
            </p>
            <SocialLinks variant="cta" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}