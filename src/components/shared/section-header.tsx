interface SectionHeaderProps {
  eyebrow?: string;

  title: string;

  description?: string;

  centered?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div
      className={`
        max-w-3xl
        ${centered ? "mx-auto text-center" : ""}
      `}
    >
      {eyebrow && (
        <span
          className="
            mb-4
            inline-block
            text-sm
            font-medium
            uppercase
            tracking-[0.2em]
            text-[#72F5C8]
          "
        >
          {eyebrow}
        </span>
      )}

      <h2
        className="
          text-4xl
          font-black
          leading-tight
          tracking-tight
          md:text-5xl
        "
      >
        {title}
      </h2>

      {description && (
        <p
          className="
            mt-6
            text-lg
            leading-relaxed
            text-zinc-300
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}
