"use client";

import { useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { Container } from "@/components/shared/container";

import { SectionHeader } from "@/components/shared/section-header";

import { testimonials } from "./testimonials-data";

import { TestimonialCard } from "./testimonial-card";

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  function handleNextTestimonial() {
    setActiveIndex((prevIndex) => {
      if (prevIndex === testimonials.length - 1) {
        return 0;
      }

      return prevIndex + 1;
    });
  }

  function handlePreviousTestimonial() {
    setActiveIndex((prevIndex) => {
      if (prevIndex === 0) {
        return testimonials.length - 1;
      }

      return prevIndex - 1;
    });
  }

  return (
    <section id="testimonials" className="py-20 scroll-mt-32">
      <Container>
        <SectionHeader
          eyebrow="Depoimentos"
          title="Resultados que falam por si."
          description="
            Veja a experiência de atletas e alunos
            que transformaram seu físico.
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
          <TestimonialCard
            name={testimonials[activeIndex].name}
            role={testimonials[activeIndex].role}
            content={testimonials[activeIndex].content}
            image={testimonials[activeIndex].image}
          />

          {/* CONTROLS */}

          <div
            className="
              mt-10
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <button
              onClick={handlePreviousTestimonial}
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/5
                transition-all
                hover:scale-105
              "
            >
              <ChevronLeft />
            </button>

            <button
              onClick={handleNextTestimonial}
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-[#72F5C8]
                text-black
                transition-all
                hover:scale-105
              "
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
