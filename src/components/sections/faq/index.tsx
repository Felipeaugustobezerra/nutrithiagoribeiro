"use client";

import { useState } from "react";

import { Container } from "@/components/shared/container";

import { SectionHeader } from "@/components/shared/section-header";

import { FAQItem } from "./faq-item";

import { faqItems } from "./faq-data";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function handleToggle(index: number) {
    setOpenIndex((prevIndex) => {
      if (prevIndex === index) {
        return null;
      }

      return index;
    });
  }

  return (
    <section id="faq" className="py-32 scroll-mt-32">
      <Container>
        <SectionHeader
          eyebrow="FAQ"
          title="Perguntas frequentes."
          description="
            Tire dúvidas sobre a consultoria
            e metodologia de acompanhamento.
          "
          centered
        />

        <div
          className="
            mx-auto
            mt-20
            flex
            max-w-4xl
            flex-col
            gap-6
          "
        >
          {faqItems.map((item, index) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
