import Link from "next/link";

import { Container } from "@/components/shared/container";

import { MobileMenu } from "./mobile-menu";

const navigation = [
  {
    label: "Sobre",
    href: "#about",
  },
  {
    label: "Resultados",
    href: "#results",
  },
  {
    label: "Método",
    href: "#method",
  },
  {
    label: "Contato",
    href: "#contact",
  },
];

export function Navbar() {
  return (
    <header
      className="
        fixed
        top-0
        z-50
        w-full
        border-b
        border-white/5
        bg-black/40
        backdrop-blur-xl
      "
    >
      <Container>
        <div
          className="
            flex
            h-20
            items-center
            justify-between
          "
        >
          <Link
            href="/"
            className="
              text-xl
              font-black
              tracking-tight
            "
          >
            THIAGO
            <span className="text-[#72F5C8]">RIBEIRO</span>
          </Link>

          <nav
            className="
              hidden
              items-center
              gap-10
              md:flex
            "
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
                  text-sm
                  text-zinc-300
                  transition-colors
                  hover:text-white
                "
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <button
              className="
                rounded-full
                bg-[#72F5C8]
                px-6
                py-3
                text-sm
                font-semibold
                text-black
                transition-transform
                hover:scale-105
              "
            >
              COMEÇAR AGORA
            </button>
          </div>

          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
