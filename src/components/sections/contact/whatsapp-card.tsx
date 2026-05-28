import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

import { createWhatsAppLink } from "@/lib/utils/whatsapp";

export function WhatsAppCard() {
  const whatsappLink = createWhatsAppLink({
    phone: "5581996051733",

    message: "Olá Thiago! Gostaria de saber mais sobre a consultoria.",
  });

  return (
    <div
      className="
        rounded-[32px]
        border
        border-white/10
        bg-white/5
        p-10
        text-center
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          bg-[#72F5C8]/10
        "
      >
        <MessageCircle
          className="
            h-10
            w-10
            text-[#72F5C8]
          "
        />
      </div>

      <h3
        className="
          mt-8
          text-3xl
          font-black
        "
      >
        Fale diretamente no WhatsApp
      </h3>

      <p
        className="
          mx-auto
          mt-6
          max-w-2xl
          leading-relaxed
          text-zinc-400
        "
      >
        Entre em contato para iniciar sua evolução com acompanhamento
        personalizado e estratégia focada em resultado real.
      </p>

      <div className="mt-10">
        <a href={whatsappLink} target="_blank" rel="noreferrer">
          <Button>CHAMAR NO WHATSAPP</Button>
        </a>
      </div>
    </div>
  );
}
