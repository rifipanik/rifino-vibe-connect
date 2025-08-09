import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { COUNTRY_INFO, CountryKey } from "@/lib/flavors";

interface CountrySelectorProps {
  selectedCountry: CountryKey;
  onCountryChange: (country: CountryKey) => void;
}

export function CountrySelector({ selectedCountry, onCountryChange }: CountrySelectorProps) {
  const currentCountry = COUNTRY_INFO[selectedCountry];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2 bg-card border-border hover:bg-muted">
          <span className="text-lg">{currentCountry.flag}</span>
          <span className="hidden sm:inline">{currentCountry.name}</span>
          <span className="text-xs text-muted-foreground">{currentCountry.currency}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {Object.entries(COUNTRY_INFO).map(([key, info]) => (
          <DropdownMenuItem
            key={key}
            onClick={() => onCountryChange(key as CountryKey)}
            className="flex items-center gap-3 cursor-pointer"
          >
            <span className="text-lg">{info.flag}</span>
            <div className="flex flex-col">
              <span className="text-sm font-medium">{info.name}</span>
              <span className="text-xs text-muted-foreground">
                {info.deliveryTime} • {info.currency}
              </span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}