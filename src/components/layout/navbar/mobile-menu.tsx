"use client";

import Link from "next/link";

import { useState } from "react";

import { Menu, X } from "lucide-react";

import { navigationItems } from "./navigation-items";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        aria-label="Abrir menu"
        className="
          relative
          z-[70]
          text-white
        "
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {isOpen && (
        <>
          {/* OVERLAY */}

          <div
            onClick={closeMenu}
            className="
              fixed
              inset-0

              z-[55]

              bg-black/60
              backdrop-blur-sm
            "
          />

          {/* MENU */}

          <div
            className="
              fixed
              left-0
              right-0
              top-20

              z-60
              items-center
              text-center
              flex
              flex-col
              gap-6

              border-b
              border-white/10

              bg-black

              p-6
              
  
            "
          >
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="
                    text-lg
                    text-white
                    transition-colors
                    
                    hover:text-[#72F5C8]
                  "
              >
                {item.label}
              </Link>
            ))}

            <a
              href="https://wa.me/5581996051733?text=Olá%20Thiago,%20gostaria%20de%20saber%20mais%20sobre%20a%20consultoria."
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="
                mt-4

                rounded-full

                bg-[#72F5C8]

                px-6
                py-4

                text-center
                font-semibold
                text-black
              "
            >
              Consultoria
            </a>
          </div>
        </>
      )}
    </div>
  );
}
