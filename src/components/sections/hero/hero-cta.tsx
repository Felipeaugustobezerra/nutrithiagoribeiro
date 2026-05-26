import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";

export function HeroCTA() {
  return (
    <FadeIn delay={0.6}>
      <div
        className="
          mt-10
          flex
          flex-col
          gap-4
          sm:flex-row
        "
      >
        <Button
          className="
            rounded-full
            bg-[#72F5C8]
            px-8
            py-4
            font-semibold
            text-black
            transition-all
            hover:scale-105
          "
        >
          COMEÇAR AGORA
        </Button>

        <Button
          variant="secondary"
          className="
            rounded-full
            border
            border-white/10
            px-8
            py-4
            font-semibold
            text-white
            backdrop-blur-xl
            hover:scale-105
          "
        >
          VER RESULTADOS
        </Button>
      </div>
    </FadeIn>
  );
}
