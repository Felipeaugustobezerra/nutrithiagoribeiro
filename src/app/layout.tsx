import type { Metadata } from "next";
import { LenisProvider } from "@/components/provider/lenis-provider";
import "./globals.css";
import { PersonSchema } from "@/components/seo/person-schema";
import { ServiceSchema } from "@/components/seo/service-schema";
import { WebsiteSchema } from "@/components/seo/website-schema";
import Script from "next/script";

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
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-T2DXNKR3');`}
        </Script>

        <LenisProvider />
        <PersonSchema />
        <ServiceSchema />
        <WebsiteSchema />
        {children}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T2DXNKR3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </body>
    </html>
  );
}
