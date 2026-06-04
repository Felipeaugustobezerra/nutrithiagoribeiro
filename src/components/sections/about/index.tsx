import { Container } from "@/components/shared/container";

import { SectionHeader } from "@/components/shared/section-header";

import { AboutCard } from "./about-card";

import { aboutItems } from "./about-data";

export function AboutSection() {
  return (
    <section id="about" className="py-32 scroll-mt-32">
      <Container>
        <SectionHeader
          eyebrow="Sobre Thiago Ribeiro"
          title="Mais de 7 anos transformando vidas através da nutrição e performance."
          description="

    Nutricionista e Coachbuilding especializado em alta performance,

    hipertrofia e emagrecimento. Cada protocolo é desenvolvido

    de forma personalizada, considerando rotina, objetivos e

    necessidades individuais para garantir resultados reais e duradouros.

  "
        />

        <div
          className="
            mt-20
            grid
            gap-8
            md:grid-cols-3
          "
        >
          {aboutItems.map((item) => (
            <AboutCard
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
