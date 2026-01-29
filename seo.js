// seo.js – SEO local y por servicio para Coria & Asociados
document.addEventListener("DOMContentLoaded", function () {

  const page = window.location.pathname.split("/").pop();

  const pages = {
    "divorcios.html": {
      title: "Divorcios | Coria & Asociados",
      description: "Abogados especialistas en divorcios en Atoyac de Álvarez, San Jerónimo de Juárez y Tecpan de Galeana, Guerrero. Divorcio incausado, voluntario y contencioso.",
      keywords: "abogado de divorcios Atoyac de Álvarez, divorcio Guerrero, divorcio incausado, abogado familiar Tecpan",
      service: "Divorcios"
    },
    "custodias.html": {
      title: "Custodia y Patria Potestad | Coria & Asociados",
      description: "Asesoría legal en custodia, patria potestad y régimen de visitas en Atoyac de Álvarez, San Jerónimo de Juárez y Tecpan de Galeana.",
      keywords: "custodia legal Guerrero, patria potestad Atoyac, abogado familiar Tecpan",
      service: "Custodia y patria potestad"
    },
    "pensiones.html": {
      title: "Pensión Alimenticia | Coria & Asociados",
      description: "Abogados expertos en pensión alimenticia en Atoyac de Álvarez, San Jerónimo de Juárez y Tecpan de Galeana. Solicitud, aumento y ejecución.",
      keywords: "pensión alimenticia Guerrero, abogado familiar Atoyac, pensión hijos",
      service: "Pensión alimenticia"
    },
    "conflictosfamiliares.html": {
      title: "Conflictos Familiares | Coria & Asociados",
      description: "Defensa legal en conflictos familiares, violencia familiar y alienación parental en Guerrero.",
      keywords: "conflictos familiares Guerrero, violencia familiar Atoyac, abogado familiar",
      service: "Conflictos familiares"
    },
    "medidas.html": {
      title: "Medidas de Protección | Coria & Asociados",
      description: "Solicitud urgente de medidas de protección para menores y víctimas de violencia familiar en Guerrero.",
      keywords: "medidas de protección Guerrero, violencia familiar Tecpan, abogado familiar",
      service: "Medidas de protección"
    },
    "convenios.html": {
      title: "Convenios y Asesoría Legal | Coria & Asociados",
      description: "Elaboración de convenios familiares, mediación y asesoría legal preventiva en Guerrero.",
      keywords: "convenios familiares Guerrero, asesoría legal Atoyac, mediación familiar",
      service: "Convenios y asesoría legal"
    }
  };

  const current = pages[page] || {
    title: "Coria & Asociados | Abogados en Derecho Familiar en Guerrero",
    description: "Despacho de abogados especialistas en derecho familiar en Guerrero.",
    keywords: "abogado familiar Guerrero",
    service: "Servicios legales"
  };

  document.title = current.title;

  const metas = [
    { name: "description", content: current.description },
    { name: "keywords", content: current.keywords },
    { name: "author", content: "Coria & Asociados" }
  ];

  metas.forEach(data => {
    const meta = document.createElement("meta");
    meta.name = data.name;
    meta.content = data.content;
    document.head.appendChild(meta);
  });

  // Open Graph
  const og = [
    ["og:title", current.title],
    ["og:description", current.description],
    ["og:image", "https://licjaimecoria.com.mx/Logo.webp"],
    ["og:url", window.location.href],
    ["og:type", "website"]
  ];

  og.forEach(([property, content]) => {
    const meta = document.createElement("meta");
    meta.setAttribute("property", property);
    meta.content = content;
    document.head.appendChild(meta);
  });

  // Twitter
  const twitter = [
    ["twitter:card", "summary_large_image"],
    ["twitter:title", current.title],
    ["twitter:description", current.description],
    ["twitter:image", "https://licjaimecoria.com.mx/Logo.webp"]
  ];

  twitter.forEach(([name, content]) => {
    const meta = document.createElement("meta");
    meta.name = name;
    meta.content = content;
    document.head.appendChild(meta);
  });

  // JSON-LD Local SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Coria & Asociados",
    "image": "https://licjaimecoria.com.mx/Logo.webp",
    "url": window.location.origin,
    "telephone": "+52 742 100 6758",
    "priceRange": "$$",
    "areaServed": [
      "Atoyac de Álvarez, Guerrero, México",
      "San Jerónimo de Juárez, Guerrero, México",
      "Tecpan de Galeana, Guerrero, México"
    ],
    "serviceOffered": {
      "@type": "Service",
      "name": current.service
    },
    "sameAs": [
      "https://wa.me/527421006758"
    ]
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(jsonLd);
  document.head.appendChild(script);

});
