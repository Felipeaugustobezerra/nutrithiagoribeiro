"use client";
import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

export function HeroCTA() {
  function handleHeroCTA() {
    trackEvent(
      "hero_cta",

      "conversion",

      "consultoria",
    );
  }
  return (
    <FadeIn delay={0.6}>
      <div
        className="
          mt-10
          flex
          flex-col
          gap-4
          sm:flex-row
        "
      >
        <a
          href="https://wa.me/5581996051733?text=Olá%20Thiago,%20gostaria%20de%20saber%20mais%20sobre%20a%20consultoria."
          target="_blank"
          rel="noreferrer"
        >
          <Button onClick={handleHeroCTA}>CONSULTORIA</Button>
        </a>
        <a href="#results">
          <Button variant="secondary">VER RESULTADOS</Button>
        </a>
      </div>
    </FadeIn>
  );
}
