import Image from "next/image";

interface ResultCardProps {
  name: string;
  goal: string;
  image: string;
}

export function ResultCard({ name, goal, image }: ResultCardProps) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
      "
    >
      {/* IMAGE */}

      <div className="relative h-[500px]">
        <Image
          src={image}
          alt={name}
          fill
          className="
            object-fill
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />
      </div>

      {/* OVERLAY */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black
          via-black/20
          to-transparent
        "
      />

      {/* CONTENT */}

      <div
        className="
          absolute
          bottom-0
          left-0
          z-10
          p-8
        "
      >
        <span
          className="
            inline-block
            rounded-full
            bg-[#72F5C8]
            px-4
            py-2
            text-xs
            font-semibold
            uppercase
            tracking-wider
            text-black
          "
        >
          {goal}
        </span>

        <h3
          className="
            mt-4
            text-3xl
            font-black
          "
        >
          {name}
        </h3>
      </div>
    </div>
  );
}
