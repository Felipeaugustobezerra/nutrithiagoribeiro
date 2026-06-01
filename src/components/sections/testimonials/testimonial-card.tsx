import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  image: string;
}

export function TestimonialCard({
  name,
  role,
  content,
  image,
}: TestimonialCardProps) {
  return (
    <div
      className="
        rounded-[32px]
        border
        border-white/10
        bg-white/5
        p-10
        backdrop-blur-xl
        justify-between
        flex
        flex-col
        items-center
        text-center 
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
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="mx-auto h-40 w-40 rounded- object-cover object-top"
        />

        <strong
          className="
            text-lg
            font-bold
          "
        >
          {name}
        </strong>

        <p className="mt-1 text-zinc-300">{role}</p>
      </div>
    </div>
  );
}
