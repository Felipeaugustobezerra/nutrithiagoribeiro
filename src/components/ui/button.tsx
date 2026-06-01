import { cn } from "@/lib/utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";

  isLoading?: boolean;
}

export function Button({
  variant = "primary",
  className,
  children,
  isLoading = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        `
          inline-flex
          items-center
          justify-center
          rounded-full
          px-8
          py-4
          font-semibold
          transition-all
          duration-300
          cursor-pointer
          disabled:cursor-not-allowed
          disabled:opacity-50
        `,

        variant === "primary" &&
          `
            bg-[#72F5C8]
            text-black
          `,

        variant === "secondary" &&
          `
            border
            border-white/10
            bg-white/5
            text-white
          `,

        className,
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? "Carregando..." : children}
    </button>
  );
}
