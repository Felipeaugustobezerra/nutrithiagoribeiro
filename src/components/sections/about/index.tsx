import { Container } from "@/components/shared/container";

import { SectionHeader } from "@/components/shared/section-header";

import { AboutCard } from "./about-card";

import { aboutItems } from "./about-data";

export function AboutSection() {
  return (
    <section id="about" className="py-32 scroll-mt-32">
      <Container>
        <SectionHeader
          eyebrow="Sobre"
          title="Consultoria focada em resultado real."
          description="
            Estratégia, acompanhamento e metodologia
            para transformar seu físico e performance.
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
