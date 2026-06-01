import type { Metadata } from "next";
import { LenisProvider } from "@/components/provider/lenis-provider";
import "./globals.css";
import { PersonSchema } from "@/components/seo/person-schema";
import { ServiceSchema } from "@/components/seo/service-schema";
import { WebsiteSchema } from "@/components/seo/website-schema";

export const metadata: Metadata = {
  metadataBase: new URL("https://nutrithiagoribeiro.com"),

  title: {
    default: "Thiago Ribeiro | Nutricionista e Coach Bodybuilder",

    template: "%s | Thiago Ribeiro",
  },

  description:
    "Consultoria personalizada para atletas e pessoas que buscam evolução física, performance e resultados reais.",

  keywords: [
    "nutricionista esportivo",
    "coach bodybuilder",
    "consultoria esportiva",
    "alta performance",
    "hipertrofia",
    "emagrecimento",
  ],

  authors: [
    {
      name: "Thiago Ribeiro",
    },
  ],
  openGraph: {
    type: "website",

    locale: "pt_BR",

    url: "https://nutrithiagoribeiro.com",

    siteName: "Thiago Ribeiro",

    title: "Thiago Ribeiro | Nutricionista e Coach Bodybuilder",

    description: "Consultoria personalizada para atletas e alta performance.",

    images: [
      {
        url: "/og-image.jpg",

        width: 1200,

        height: 630,

        alt: "Thiago Ribeiro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",

    title: "Thiago Ribeiro",

    description: "Consultoria personalizada para atletas.",

    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://nutrithiagoribeiro.com",
  },
  creator: "Thiago Ribeiro",

  category: "Fitness",

  robots: {
    index: true,

    follow: true,
  },
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
        <PersonSchema />
        <ServiceSchema />
        <WebsiteSchema />
        {children}
      </body>
    </html>
  );
}
