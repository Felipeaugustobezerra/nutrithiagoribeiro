import { Container } from "@/components/shared/container";

import { FooterSocials } from "./footer-socials";

export function Footer() {
  return (
    <footer
      className="
        border-t
        border-white/10
        py-16
      "
    >
      <Container>
        <div className="text-center">
          {/* BRAND */}

          <h2
            className="
              text-3xl
              font-black
              tracking-tight
            "
          >
            THIAGO
            <span className="text-[#72F5C8]">RIBEIRO</span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              leading-relaxed
              text-zinc-400
            "
          >
            Consultoria premium focada em alta performance, transformação física
            e evolução real.
          </p>

          <FooterSocials />

          {/* COPYRIGHT */}

          <div
            className="
              mt-10
              border-t
              border-white/20
              pt-4
            "
          >
            <p className="text-lg font-bold text-zinc-400">
              © {new Date().getFullYear()} Thiago Ribeiro. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
