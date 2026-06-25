"use client";
import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";

export function HeroCTA() {
  return (
    <FadeIn delay={0.6}>
      <div
        className="
          mt-10

      grid

      grid-cols-2

      max-w-125
        "
      >
        <a
          href="https://wa.me/5581996051733?text=Olá%20Thiago,%20gostaria%20de%20saber%20mais%20sobre%20a%20consultoria."
          target="_blank"
          rel="noreferrer"
          className="w-full"
          aria-label="Solicitar consultoria personalizada"
          onClick={(e) => {
            e.preventDefault();

            trackEvent("click_consultoria");

            setTimeout(() => {
              window.open(
                "https://wa.me/5581996051733?text=Olá%20Thiago...",

                "_blank",
              );
            }, 500);
          }}
        >
          <Button>CONSULTORIA</Button>
        </a>
        <a
          href="#results"
          onClick={() => trackEvent("click_resultados")}
          aria-label="Ver resultados"
        >
          <Button variant="secondary">RESULTADOS</Button>
        </a>
      </div>
    </FadeIn>
  );
}
