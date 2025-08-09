import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { AlertTriangle } from "lucide-react";

export function AgeGate() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const ageVerified = localStorage.getItem("age_verified");
    if (!ageVerified) {
      setIsOpen(true);
    }
  }, []);

  const handleEnter = () => {
    localStorage.setItem("age_verified", "true");
    setIsOpen(false);
  };

  const handleExit = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-md modal-backdrop border-border">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900">
            <AlertTriangle className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
          </div>
          <DialogTitle className="text-xl font-bold">
            Vérification d'âge
          </DialogTitle>
          <DialogDescription className="text-base mt-2">
            Ce site est réservé aux personnes de <strong>18 ans et plus</strong>.
            <br />
            Les produits présentés contiennent de la nicotine.
            <br />
            Confirmez votre âge pour continuer.
          </DialogDescription>
        </DialogHeader>
        
        <DialogFooter className="flex-col sm:flex-row gap-2 mt-6">
          <Button 
            onClick={handleEnter}
            className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
          >
            J'ai 18 ans ou plus - Entrer
          </Button>
          <Button 
            onClick={handleExit}
            variant="outline" 
            className="flex-1"
          >
            Quitter le site
          </Button>
        </DialogFooter>
        
        <div className="text-xs text-muted-foreground text-center mt-4 p-4 bg-muted/50 rounded-lg">
          <p className="font-semibold mb-1">⚠️ Avertissement santé</p>
          <p>La nicotine crée une forte dépendance. Interdit aux mineurs et aux femmes enceintes.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}