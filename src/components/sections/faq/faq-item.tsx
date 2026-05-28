import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;

  isOpen: boolean;

  onToggle: () => void;
}

export function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div
      className="
        rounded-[24px]
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
      "
    >
      {/* BUTTON */}

      <button
        onClick={onToggle}
        className="
          flex
          w-full
          items-center
          justify-between
          p-6
          text-left
        "
      >
        <span
          className="
            text-lg
            font-semibold
          "
        >
          {question}
        </span>

        <ChevronDown
          className={`
            transition-transform
            duration-300
            ${isOpen ? "rotate-180" : ""}
          `}
        />
      </button>

      {/* CONTENT */}

      {isOpen && (
        <div className="px-6 pb-6">
          <p
            className="
              leading-relaxed
              text-zinc-400
            "
          >
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}
