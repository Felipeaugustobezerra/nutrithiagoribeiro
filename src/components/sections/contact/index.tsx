import { Container } from "@/components/shared/container";

import { SectionHeader } from "@/components/shared/section-header";

import { WhatsAppCard } from "./whatsapp-card";

export function ContactSection() {
  return (
    <section id="contact" className="py-32 scroll-mt-32">
      <Container>
        <SectionHeader
          eyebrow="Contato"
          title="Comece sua transformação."
          description="
            Fale diretamente com Thiago Ribeiro
            para iniciar seu acompanhamento.
          "
          centered
        />

        <div
          className="
            mx-auto
            mt-20
            max-w-4xl
          "
        >
          <WhatsAppCard />
        </div>
      </Container>
    </section>
  );
}
