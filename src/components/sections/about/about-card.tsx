interface AboutCardProps {
  title: string;
  description: string;
}

export function AboutCard({ title, description }: AboutCardProps) {
  return (
    <div
      className="
        rounded-[32px]
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
      "
    >
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
          text-zinc-400
        "
      >
        {description}
      </p>
    </div>
  );
}
