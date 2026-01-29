// seo.js - SEO profesional completo para licjaimecoria.com.mx
document.addEventListener("DOMContentLoaded", function() {
  // Meta description
  const metaDescription = document.createElement('meta');
  metaDescription.name = "description";
  metaDescription.content = "Coria & Asociados, abogados especialistas en derecho familiar con más de 25 años de experiencia en Atoyac de Álvarez, San Jerónimo de Juárez y Tecpan de Galeana, Guerrero. Divorcios, pensión alimenticia, custodia y asesoría legal profesional.";
  document.head.appendChild(metaDescription);

  // Meta keywords
  const metaKeywords = document.createElement('meta');
  metaKeywords.name = "keywords";
  metaKeywords.content = "abogado familiar Atoyac de Álvarez, abogado familiar San Jerónimo de Juárez, abogado familiar Tecpan de Galeana, divorcios Guerrero, custodia legal Guerrero, pensión alimenticia Guerrero";
  document.head.appendChild(metaKeywords);

  // Meta author
  const metaAuthor = document.createElement('meta');
  metaAuthor.name = "author";
  metaAuthor.content = "Coria & Asociados";
  document.head.appendChild(metaAuthor);

  // Open Graph
  const ogTags = [
    {property: "og:title", content: "Coria & Asociados | Abogados en Derecho Familiar en Guerrero"},
    {property: "og:description", content: "Servicios legales profesionales en Atoyac de Álvarez, San Jerónimo de Juárez y Tecpan de Galeana. Más de 25 años de experiencia en derecho familiar."},
    {property: "og:image", content: "https://licjaimecoria.com.mx/Logo.webp"},
    {property: "og:url", content: "https://licjaimecoria.com.mx"},
    {property: "og:type", content: "website"}
  ];
  ogTags.forEach(tag => {
    const meta = document.createElement('meta');
    meta.setAttribute('property', tag.property);
    meta.content = tag.content;
    document.head.appendChild(meta);
  });

  // Twitter Card
  const twitterTags = [
    {name: "twitter:card", content: "summary_large_image"},
    {name: "twitter:title", content: "Coria & Asociados | Abogados en Derecho Familiar en Guerrero"},
    {name: "twitter:description", content: "Servicios legales en Atoyac de Álvarez, San Jerónimo de Juárez y Tecpan de Galeana. Divorcios, custodia y pensión alimenticia."},
    {name: "twitter:image", content: "https://licjaimecoria.com.mx/Logo.webp"}
  ];
  twitterTags.forEach(tag => {
    const meta = document.createElement('meta');
    meta.name = tag.name;
    meta.content = tag.content;
    document.head.appendChild(meta);
  });

  // JSON-LD profesional completo
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        "@id": "https://licjaimecoria.com.mx#legalservice",
        "name": "Coria & Asociados",
        "legalName": "Coria & Asociados",
        "founder": "Lic. Jaime Coria",
        "image": "https://licjaimecoria.com.mx/Logo.webp",
        "url": "https://licjaimecoria.com.mx",
        "telephone": "+52 742 100 6758",
        "address": [
          {"@type": "PostalAddress","addressLocality": "Atoyac de Álvarez","addressRegion": "Guerrero","addressCountry": "MX"},
          {"@type": "PostalAddress","addressLocality": "San Jerónimo de Juárez","addressRegion": "Guerrero","addressCountry": "MX"},
          {"@type": "PostalAddress","addressLocality": "Tecpan de Galeana","addressRegion": "Guerrero","addressCountry": "MX"}
        ],
        "openingHours": ["Mo-Fr 09:00-17:00"],
        "priceRange": "$$",
        "areaServed": [
          {"@type":"Place","name":"Atoyac de Álvarez, Guerrero, México"},
          {"@type":"Place","name":"San Jerónimo de Juárez, Guerrero, México"},
          {"@type":"Place","name":"Tecpan de Galeana, Guerrero, México"}
        ],
        "sameAs": ["https://wa.me/527421006758"]
      },
      {
        "@type": "Service",
        "name": "Divorcios",
        "provider": {"@id": "https://licjaimecoria.com.mx#legalservice"}
      },
      {
        "@type": "Service",
        "name": "Custodia y patria potestad",
        "provider": {"@id": "https://licjaimecoria.com.mx#legalservice"}
      },
      {
        "@type": "Service",
        "name": "Pensión alimenticia",
        "provider": {"@id": "https://licjaimecoria.com.mx#legalservice"}
      },
      {
        "@type": "Service",
        "name": "Conflictos familiares",
        "provider": {"@id": "https://licjaimecoria.com.mx#legalservice"}
      },
      {
        "@type": "Service",
        "name": "Medidas de protección",
        "provider": {"@id": "https://licjaimecoria.com.mx#legalservice"}
      },
      {
        "@type": "Service",
        "name": "Convenios familiares",
        "provider": {"@id": "https://licjaimecoria.com.mx#legalservice"}
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://licjaimecoria.com.mx#breadcrumbs",
        "itemListElement": [
          {"@type": "ListItem","position":1,"name":"Inicio","item":"https://licjaimecoria.com.mx/"},
          {"@type": "ListItem","position":2,"name":"Servicios","item":"https://licjaimecoria.com.mx/#servicios"},
          {"@type": "ListItem","position":3,"name":"Contacto","item":"https://licjaimecoria.com.mx/#contacto"}
        ]
      },
      {
        "@type": "ContactPoint",
        "@id": "https://licjaimecoria.com.mx#contact",
        "telephone": "+52 742 100 6758",
        "contactType": "customer service",
        "areaServed": "MX",
        "availableLanguage": "es",
        "url": "https://wa.me/527421006758"
      }
    ]
  });
  document.head.appendChild(script);
});