"use client";

import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/analytics";

import { MessageCircle } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  function handleWhatsAppClick() {
    trackEvent("click_whatsapp", "conversion", "floating_button");
  }

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 400);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <a
      href="https://wa.me/5581996051733?text=Olá%20Thiago,%20gostaria%20de%20saber%20mais%20sobre%20a%20consultoria."
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-50

        flex
        items-center
        gap-3
      "
    >
      {/* TOOLTIP */}

      <div
        className="
          hidden
          rounded-full
          bg-zinc-900
          px-4
          py-2
          text-sm
          text-white
          shadow-lg

          md:block
        "
      >
        Fale com Thiago
      </div>

      {/* BUTTON */}

      <button
        onClick={handleWhatsAppClick}
        className="
          flex
          h-16
          w-16

          items-center
          justify-center

          rounded-full

          bg-[#25D366]

          shadow-lg

          transition-all
          duration-300

          hover:scale-110
        "
      >
        <FaWhatsapp
          className="
            h-8
            w-8
            text-white
          "
        />
      </button>
    </a>
  );
}
