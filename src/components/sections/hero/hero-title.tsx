import { FadeIn } from "@/components/shared/fade-in";

export function HeroTitle() {
  return (
    <FadeIn delay={0.2}>
      <h1
        className="
          max-w-3xl
          text-5xl
          font-black
          leading-[1]
          tracking-tight
          md:text-7xl
        "
      >
        Transforme seu físico em alta performance.
      </h1>
    </FadeIn>
  );
}
