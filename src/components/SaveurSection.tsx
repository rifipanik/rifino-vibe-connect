import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function SaveurSection() {
  return (
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">Choisis ta saveur</h2>
            <p className="text-xl text-gray-300">Chaque saveur a son style, trouve le tien</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Mangue */}
            <Card className="card-flavor neon--standard variant--mangue street-hover overflow-hidden">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🥭</div>
                <h3 className="title-flavor text-2xl font-bold mb-3">Mangue</h3>
                <p className="text-flavor text-lg font-semibold mb-4">"Le soleil dans ta poche."</p>
                <p className="text-sm opacity-80 mb-4">Douceur tropicale, goût authentique</p>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold">
                  Voir les mangues
                </Button>
              </CardContent>
            </Card>

            {/* Fraise */}
            <Card className="card-flavor neon--standard variant--fraise street-hover overflow-hidden">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🍓</div>
                <h3 className="title-flavor text-2xl font-bold mb-3">Fraise</h3>
                <p className="text-flavor text-lg font-semibold mb-4">"Sucré, simple, irrésistible."</p>
                <p className="text-sm opacity-80 mb-4">Le classique qui ne déçoit jamais</p>
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold">
                  Voir les fraises
                </Button>
              </CardContent>
            </Card>

            {/* Fraise-Pastèque */}
            <Card className="card-flavor neon--standard variant--fraisepasteque street-hover overflow-hidden">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🍓🍉</div>
                <h3 className="title-flavor text-2xl font-bold mb-3">Fraise-Pastèque</h3>
                <p className="text-flavor text-lg font-semibold mb-4">"Le combo qui déchire."</p>
                <p className="text-sm opacity-80 mb-4">Duo rafraîchissant et gourmand</p>
                <Button className="w-full bg-gradient-to-r from-red-500 to-green-500 hover:from-red-600 hover:to-green-600 text-white font-bold">
                  Voir le combo
                </Button>
              </CardContent>
            </Card>

            {/* Pina Colada */}
            <Card className="card-flavor neon--standard variant--pinacolada street-hover overflow-hidden">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🥥🍍</div>
                <h3 className="title-flavor text-2xl font-bold mb-3">Pina Colada</h3>
                <p className="text-flavor text-lg font-semibold mb-4">"Les vacances à chaque puff."</p>
                <p className="text-sm opacity-80 mb-4">Évasion tropicale garantie</p>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                  Voir tropical
                </Button>
              </CardContent>
            </Card>

            {/* Blueberry */}
            <Card className="card-flavor neon--standard variant--blueberry street-hover overflow-hidden">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🫐</div>
                <h3 className="title-flavor text-2xl font-bold mb-3">Blueberry</h3>
                <p className="text-flavor text-lg font-semibold mb-4">"Du fruit, du frais, du style."</p>
                <p className="text-sm opacity-80 mb-4">Myrtille intense et naturelle</p>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold">
                  Voir blueberry
                </Button>
              </CardContent>
            </Card>

            {/* Mixed Berries */}
            <Card className="card-flavor neon--standard variant--mixedberries street-hover overflow-hidden">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🍇🍓🫐</div>
                <h3 className="title-flavor text-2xl font-bold mb-3">Mixed Berries</h3>
                <p className="text-flavor text-lg font-semibold mb-4">"Explosion de saveurs."</p>
                <p className="text-sm opacity-80 mb-4">Cocktail de fruits rouges</p>
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold">
                  Voir le mix
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
  );
}