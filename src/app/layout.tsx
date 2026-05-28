import type { Metadata } from "next";
import { LenisProvider } from "@/components/provider/lenis-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thiago Ribeiro",
  description:
    "Consultoria nutricional e coaching para atletas de alta performance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <LenisProvider />
        {children}
      </body>
    </html>
  );
}
