export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",

    "@type": "Person",

    name: "Thiago Ribeiro",

    jobTitle: "Nutricionista e Coach Bodybuilder",

    description:
      "Consultoria personalizada para atletas e pessoas que buscam evolução física, performance e resultados reais.",

    url: "https://nutrithiagoribeiro.com",

    image: "https://nutrithiagoribeiro.com/og-image.jpg",

    sameAs: ["https://instagram.com/SEU_INSTAGRAM"],

    knowsAbout: [
      "Nutrição Esportiva",
      "Hipertrofia",
      "Emagrecimento",
      "Bodybuilding",
      "Alta Performance",
    ],
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
