import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
        <Link
          href="https://wa.me/5581996051733?text=Olá%20Thiago,%20gostaria%20de%20saber%20mais%20sobre%20a%20consultoria."
          target="_blank"
          rel="noreferrer"
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
            CONSULTORIA
          </Button>
        </Link>
        <Link href="#results">
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
        </Link>
      </div>
    </FadeIn>
  );
}
