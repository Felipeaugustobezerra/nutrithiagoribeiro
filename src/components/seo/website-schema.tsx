export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",

    "@type": "WebSite",

    name: "Thiago Ribeiro",

    url: "https://nutrithiagoribeiro.com",

    description:
      "Consultoria personalizada para atletas e pessoas que buscam evolução física, performance e resultados reais.",

    publisher: {
      "@type": "Person",

      name: "Thiago Ribeiro",
    },

    inLanguage: "pt-BR",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
