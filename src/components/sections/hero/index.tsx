import { Container } from "@/components/shared/container";

import { HeroBadge } from "./hero-badge";
import { HeroCTA } from "./hero-cta";
import { HeroDescription } from "./hero-description";
import { HeroImage } from "./hero-image";
import { HeroStats } from "./hero-stats";
import { HeroTitle } from "./hero-title";

export function HeroSection() {
  return (
    <section
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        pt-32 
        scroll-mt-32
      "
    >
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#72F5C8]/20
          blur-3xl
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      <Container>
        <div
          className="
            relative
            z-10
            grid
            items-center
            gap-20
            lg:grid-cols-2
          "
        >
          <div>
            <HeroBadge />

            <HeroTitle />

            <HeroDescription />

            <HeroCTA />

            <HeroStats />
          </div>

          <HeroImage />
        </div>
      </Container>
    </section>
  );
}
