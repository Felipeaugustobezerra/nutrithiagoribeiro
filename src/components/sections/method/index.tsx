import { Container } from "@/components/shared/container";

import { SectionHeader } from "@/components/shared/section-header";

import { MethodStep } from "./method-step";

import { methodSteps } from "./method-data";

export function MethodSection() {
  return (
    <section id="method" className="py-32 scroll-mt-32">
      <Container>
        <SectionHeader
          eyebrow="Método"
          title="Uma estratégia construída para evolução real."
          description="
            Cada etapa foi pensada para maximizar
            performance, consistência e resultado.
          "
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
          {methodSteps.map((step) => (
            <MethodStep
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
