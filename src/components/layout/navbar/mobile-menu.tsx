"use client";

import { useState } from "react";

import { Menu, X } from "lucide-react";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} className="text-white">
        {isOpen ? <X /> : <Menu />}
      </button>

      {isOpen && (
        <div
          className="
            absolute
            left-0
            top-20
            flex
            w-full
            flex-col
            gap-6
            border-b
            border-white/10
            bg-black
            p-6
          "
        >
          <a href="#about">Sobre</a>
          <a href="#results">Resultados</a>
          <a href="#method">Método</a>
          <a href="#contact">Contato</a>
        </div>
      )}
    </div>
  );
}
