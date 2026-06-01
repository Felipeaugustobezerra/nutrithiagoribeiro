interface MethodStepProps {
  number: string;
  title: string;
  description: string;
}

export function MethodStep({ number, title, description }: MethodStepProps) {
  return (
    <div
      className="
        relative
        rounded-[32px]
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
      "
    >
      {/* NUMBER */}

      <span
        className="
          text-6xl
          font-black
          text-[#72F5C8]/40
        "
      >
        {number}
      </span>

      {/* CONTENT */}

      <div className="mt-6">
        <h3
          className="
            text-2xl
            font-bold
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-4
            leading-relaxed
            text-zinc-300
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}
