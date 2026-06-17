"use client";

import Link from "next/link";

import { cn } from "@/lib/utils/cn";

import { useActiveSection } from "@/hooks/use-active-section";

import { navigationItems } from "./navigation-items";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  const activeSection = useActiveSection();

  return (
    <header
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        
        border-b
        border-white/10

        bg-black/60
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto
          flex
          h-20
          max-w-7xl
          items-center
          justify-between
          px-6
        "
      >
        {/* LOGO */}

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

        {/* DESKTOP NAVIGATION */}

        <nav
          className="
            hidden
            items-center
            gap-8
            md:flex
          
          
          "
        >
          {navigationItems.map((item) => {
            const sectionId = item.href.replace("#", "");

            const isActive = activeSection === sectionId;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  `
                    relative
                    text-md
                    font-semibold
                    transition-colors
                  `,
                  isActive
                    ? "text-[#72F5C8]"
                    : "text-zinc-400 hover:text-white",
                )}
              >
                {item.label}

                {isActive && (
                  <span
                    className="
                      absolute
                      -bottom-2
                      left-0

                      h-[2px]
                      w-full

                      bg-[#72F5C8]
                    "
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT SIDE */}

        <div
          className="
            flex
            items-center
            gap-4
          "
        >
          {/* CTA DESKTOP */}

          <a
            href="https://wa.me/5581996051733?text=Olá%20Thiago,%20gostaria%20de%20saber%20mais%20sobre%20a%20consultoria."
            target="_blank"
            rel="noreferrer"
            className="
              hidden
              rounded-full
              bg-[#72F5C8]
              px-5
              py-3

              text-md
              font-semibold
              text-black

              transition-transform
              hover:scale-105

              md:inline-flex
            "
          >
            Consultoria
          </a>

          {/* MOBILE MENU */}

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
