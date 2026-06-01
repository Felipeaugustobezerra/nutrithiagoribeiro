import { FadeIn } from "@/components/shared/fade-in";

const stats = [
  {
    value: "+100",
    label: "Alunos transformados",
  },
  {
    value: "+4",
    label: "Anos de experiência",
  },
  {
    value: "100%",
    label: "Personalizado",
  },
];

export function HeroStats() {
  return (
    <FadeIn delay={0.8}>
      <div
        className="
          mt-14
          grid
          grid-cols-3
          gap-8
        "
      >
        {stats.map((stat) => (
          <div key={stat.label}>
            <strong
              className="
                text-3xl
                font-black
              "
            >
              {stat.value}
            </strong>

            <p
              className="
                mt-2
                text-sm
                text-zinc-500
              "
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </FadeIn>
  );
}
