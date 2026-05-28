interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
}

export function TestimonialCard({ name, role, content }: TestimonialCardProps) {
  return (
    <div
      className="
        rounded-[32px]
        border
        border-white/10
        bg-white/5
        p-10
        backdrop-blur-xl
      "
    >
      <p
        className="
          text-xl
          leading-relaxed
          text-zinc-300
        "
      >
        “{content}”
      </p>

      <div className="mt-8">
        <strong
          className="
            text-lg
            font-bold
          "
        >
          {name}
        </strong>

        <p className="mt-1 text-zinc-500">{role}</p>
      </div>
    </div>
  );
}
