import { useState, cloneElement, isValidElement } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { AgeGate } from "./AgeGate";
import { Button } from "@/components/ui/button";
import { CountryKey, SOCIAL_LINKS } from "@/lib/flavors";
import { MessageCircle } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [selectedCountry, setSelectedCountry] = useState<CountryKey>("CH");

  // Clone children with selectedCountry prop if they accept it
  const childrenWithProps = isValidElement(children) 
    ? cloneElement(children, { selectedCountry } as any)
    : children;

  return (
    <>
      <AgeGate />
      <div className="min-h-screen flex flex-col">
        <Header 
          selectedCountry={selectedCountry} 
          onCountryChange={setSelectedCountry} 
        />
        <main className="flex-1">
          {childrenWithProps}
        </main>
        <Footer selectedCountry={selectedCountry} />
        
        {/* Fixed CTA Button */}
        <Button 
          asChild 
          className="fixed-cta animate-scale-in"
        >
          <a 
            href={SOCIAL_LINKS.telegram}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <MessageCircle className="h-4 w-4" />
            Commander
          </a>
        </Button>
      </div>
    </>
  );
}