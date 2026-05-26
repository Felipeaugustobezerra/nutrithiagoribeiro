import Image from "next/image";

import { FadeIn } from "@/components/shared/fade-in";

export function HeroImage() {
  return (
    <FadeIn delay={1}>
      <div
        className="
          relative
          hidden
          lg:block
        "
      >
        <div
          className="
            absolute
            inset-0
            rounded-[40px]
            bg-[#72F5C8]/20
            blur-3xl
          "
        />

        <div
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
          "
        >
          <Image
            src="/thiago.png"
            alt="Thiago Ribeiro"
            width={700}
            height={900}
            className="
              h-auto
              w-full
              object-cover
            "
            priority
          />
        </div>
      </div>
    </FadeIn>
  );
}
