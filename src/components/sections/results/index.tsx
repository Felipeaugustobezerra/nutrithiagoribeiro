import { Container } from "@/components/shared/container";

import { SectionHeader } from "@/components/shared/section-header";

import { ResultCard } from "./result-card";

import { results } from "./result-data";

export function ResultsSection() {
  return (
    <section id="results" className="py-32 scroll-mt-32">
      <Container>
        <SectionHeader
          eyebrow="Resultados"
          title="Transformações reais."
          description="
            Resultados construídos através
            de estratégia e acompanhamento
            profissional.
          "
          centered
        />

        <div
          className="
            mt-20
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {results.map((result) => (
            <ResultCard
              key={result.name}
              name={result.name}
              goal={result.goal}
              image={result.image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
