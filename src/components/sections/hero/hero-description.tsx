import { FadeIn } from "@/components/shared/fade-in";

export function HeroDescription() {
  return (
    <FadeIn delay={0.4}>
      <p
        className="
          mt-8
          max-w-2xl
          text-lg
          leading-relaxed
          text-zinc-400
        "
      >
        Consultoria personalizada para atletas e pessoas que buscam evolução
        real através de estratégia, nutrição e acompanhamento profissional.
      </p>
    </FadeIn>
  );
}
