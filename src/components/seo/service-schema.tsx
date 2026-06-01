export function ServiceSchema() {
  const schema = {
    "@context": "https://schema.org",

    "@type": "ProfessionalService",

    name: "Consultoria Nutricional Thiago Ribeiro",

    description:
      "Consultoria personalizada para atletas e pessoas que buscam evolução física, performance e resultados reais.",

    provider: {
      "@type": "Person",

      name: "Thiago Ribeiro",
    },

    serviceType: "Consultoria Nutricional Esportiva",

    areaServed: {
      "@type": "Country",

      name: "Brasil",
    },

    url: "https://nutrithiagoribeiro.com",
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
