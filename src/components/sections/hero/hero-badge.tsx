import { FadeIn } from "@/components/shared/fade-in";

export function HeroBadge() {
  return (
    <FadeIn>
      <span
        className="
          mx-auto
          lg:mx-0 
          mb-10
          flex
          w-fit
          items-center
          justify-center
          gap-2
          rounded-full
          border
          border-[#72F5C8]/20
          bg-[#72F5C8]/10
          px-5
          py-2
          text-lg
          text-[#72F5C8]
        "
      >
        Alta Performance
      </span>
    </FadeIn>
  );
}
