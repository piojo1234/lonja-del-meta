/**
 * LONJA DE AVALÚOS DEL META S.A.S.
 * Centralized Data Model for Services, Lonja Pericial Catalog & Portfolio
 */

const LONJA_DATA = {
  company: {
    name: "LONJA DE AVALÚOS DEL META S.A.S.",
    shortName: "Lonja de Avalúos",
    tagline: "Soluciones inmobiliarias, jurídicas, catastrales y territoriales",
    subtitle: "Especialistas en avalúos y gestión catastral",
    nit: "901.482.391-4",
    raaRegistry: "AVAL-META-2026-CO",
    lawReference: "Ley 1673 de 2013 • Decreto 556 de 2014 • Res. IGAC 620/2008",
    phone: "+57 312 366 1758",
    phoneClean: "573123661758",
    email: "contacto@lonjadeavaluosdelmeta.com",
    address: "Calle 38 # 31-20, Edificio Barzal Empresarial, Villavicencio, Meta",
    coordinates: "04°08'40\"N 73°37'50\"W",
    elevation: "467 m.s.n.m."
  },

  // 5 Corporate Pillars
  corporateServices: [
    {
      id: "avaluos-peritajes",
      code: "SRV-01",
      title: "Avalúos y Peritajes",
      subtitle: "Inmuebles, maquinaria, derechos y dictámenes judiciales",
      description: "Determinación técnica del valor comercial, de reposición o renta bajo normas NIIF y estándares internacionales IVSC. Dictámenes con validez ante banca, juzgados y DIAN.",
      features: [
        "Avalúos urbanos: apartamentos, casas, locales, centros comerciales y bodegas",
        "Avalúos rurales: fincas ganaderas, agrícolas, haciendas y servidumbres petroleras",
        "Maquinaria pesada, vehículos de carga y plantas industriales especializadas",
        "Dictámenes periciales para procesos divisorios, expropiaciones y sucesiones",
        "Valoración de intangibles, marcas, derechos de posesión y daño emergente"
      ],
      standards: "NIIF / IFRS 13 • RAA Registro Abierto de Avaluadores",
      timeline: "3 a 5 días hábiles",
      tag: "Alta Demanda"
    },
    {
      id: "servicios-juridicos",
      code: "SRV-02",
      title: "Servicios Jurídicos",
      subtitle: "Estudios de títulos, saneamiento y asesoría inmobiliaria",
      description: "Blindaje legal integral de transacciones inmobiliarias y resolución de contingencias de propiedad. Trazabilidad registral a 20 y 30 años sin puntos ciegos.",
      features: [
        "Estudios de títulos de tradición profunda (20 a 30 años)",
        "Saneamiento de falsa tradición, posesiones y títulos precarios",
        "Aclaraciones de área, linderos y englobes/desenglobes notariales",
        "Estructuración de contratos de promesa de compraventa y fiducia",
        "Acompañamiento jurídico en litigios de restitución y prescripción adquisitiva"
      ],
      standards: "Estatuto Notarial y Registral • SNR Superintendencia",
      timeline: "2 a 4 días hábiles",
      tag: "Seguridad Legal"
    },
    {
      id: "catastro-territorio",
      code: "SRV-03",
      title: "Catastro y Territorio",
      subtitle: "Cartografía, SIG, estudios y consultoría multipropósito",
      description: "Ingeniería topográfica de alta resolución, fotogrametría aérea con dron (GNSS RTK) y cruces geoespaciales entre catastro físico, jurídico y fiscal.",
      features: [
        "Vuelos fotogramétricos con dron y ortofotomapas métricos georreferenciados",
        "Levantamientos topográficos planimétricos y altimétricos con estación y GNSS",
        "Conciliación de discrepancias entre cabida física y folio de matrícula",
        "Modelación de capas en Sistemas de Información Geográfica (QGIS / ArcGIS)",
        "Estudios de afectación ambiental, rondas hídricas y retiros de protección"
      ],
      standards: "IGAC Res. 620/2008 • Catastro Multipropósito",
      timeline: "4 a 7 días hábiles",
      tag: "Geotecnología"
    },
    {
      id: "negocios-inmobiliarios",
      code: "SRV-04",
      title: "Negocios Inmobiliarios",
      subtitle: "Comercialización y asesoría en inversiones de alto patrimonio",
      description: "Intermediación corporativa basada en análisis econométrico, no en simple corretaje. Conexión de activos estratégicos con inversionistas calificados.",
      features: [
        "Comercialización selectiva de fincas de recreo, lotes de desarrollo y bodegas",
        "Modelación financiera de rentabilidad (Flujo de Caja, TIR, VPN y Cap Rate)",
        "Estructuración de esquemas de asociación y desarrollo parcelario",
        "Búsqueda especializada de predios conforme a requerimientos de expansión",
        "Due diligence inmobiliario preventivo antes de firmar cualquier opción"
      ],
      standards: "Análisis Econométrico Inmobiliario",
      timeline: "Acompañamiento continuo",
      tag: "Inversión"
    },
    {
      id: "tramites-estudios",
      code: "SRV-05",
      title: "Trámites y Estudios",
      subtitle: "Viabilidad predial, certificados y diagnósticos normativos",
      description: "Gestión ágil ante Curadurías Urbanas, Secretarías de Planeación, IGAC y Oficinas de Registro de Instrumentos Públicos en el Departamento del Meta.",
      features: [
        "Conceptos técnicos de viabilidad predial y aprovechamiento del suelo (POT)",
        "Diagnósticos de licencias de construcción, urbanismo y parcelación",
        "Gestión de certificados de tradición, paz y salvos municipales y catastrales",
        "Incorporaciones de mejoras y actualizaciones de construcciones en ficha predial",
        "Trámites de cambio de uso de suelo y solicitudes de desenglobe catastral"
      ],
      standards: "Planes de Ordenamiento Territorial (POT)",
      timeline: "Variable según entidad",
      tag: "Agilidad"
    }
  ],

  // Centralized Lonja Catalog: Official Pericial Services & Appraiser Technical Tools
  catalogProducts: [
    // ==========================================
    // 1. SERVICIOS PARA CLIENTES Y PROPIETARIOS
    // ==========================================
    {
      id: "avaluo-comercial-oficial",
      audience: "cliente",
      category: "servicios-clientes",
      subCategory: "avaluos-oficiales",
      name: "Avalúo Comercial Certificado RAA",
      badge: "Aprobado por Bancos & Juzgados",
      targetAudience: "Propietarios, Compradores y Empresas en Villavicencio y Meta",
      priceDisplay: "Tarifa Oficial RAA según Ley 1673",
      priceValue: 750000,
      format: "Dictamen Técnico Certificado RAA con Póliza",
      summary: "Tasación pericial oficial para casas, apartamentos, locales y bodegas en el Meta. Válido para créditos hipotecarios, sucesiones, compraventas y estados financieros NIIF.",
      deliverables: [
        "Dictamen técnico pericial foliado y firmado por perito colegiado RAA",
        "Cálculo econométrico bajo métodos de mercado y reposición técnica",
        "Inspección ocular con anexo fotográfico exhaustivo y ficha catastral",
        "Certificado de vigencia de registro ante la SIC / Corporación RAA",
        "Póliza de responsabilidad civil profesional del avaluador asignado"
      ],
      popular: true
    },
    {
      id: "compra-segura",
      audience: "cliente",
      category: "servicios-clientes",
      subCategory: "seguridad-inmobiliaria",
      name: "Compra Segura de Inmueble",
      badge: "Servicio de Blindaje Patrimonial",
      targetAudience: "Compradores e Inversionistas en Villavicencio y Meta",
      priceDisplay: "Tarifa Oficial: $850.000 COP",
      priceValue: 850000,
      format: "Servicio Pericial Llave en Mano",
      summary: "Estudio de títulos a 20 años en Villavicencio y Meta, revisión catastral IGAC, análisis urbanístico POT y asesoría preventiva integral antes de desembolsar dinero.",
      deliverables: [
        "Dictamen jurídico de tradición y libertad con semáforo de riesgo",
        "Cruce cartográfico IGAC vs. Registro SNR",
        "Verificación de usos de suelo y afectaciones viales/ambientales POT",
        "Validación preliminar de coherencia entre precio pedido y mercado real",
        "Reunión de 45 min con abogado inmobiliario especialista"
      ],
      popular: true
    },
    {
      id: "finca-segura",
      audience: "cliente",
      category: "servicios-clientes",
      subCategory: "seguridad-inmobiliaria",
      name: "Finca Segura (Diagnóstico Agro-Jurídico)",
      badge: "Especial Rural Meta & Llanos",
      targetAudience: "Compradores y Propietarios Rurales de los Llanos Orientales",
      priceDisplay: "Tarifa Oficial: $1.450.000 COP",
      priceValue: 1450000,
      format: "Diagnóstico Agro-Jurídico Certificado RAA",
      summary: "Diagnóstico jurídico rural, restricciones de baldíos ANT, Reserva Forestal Ley 2da, rondas de caños/ríos, servidumbres petroleras y tasación de campo en el Meta.",
      deliverables: [
        "Inspección de antecedentes de baldíos y clarificación ANT",
        "Análisis de restricciones de Reserva Forestal Ley 2da y ronda hídrica",
        "Verificación de fajas de servidumbre eléctrica, petrolera o vial",
        "Estimación de valor comercial por hectárea según aptitud agropecuaria",
        "Ficha técnica consolidada en PDF con mapas satelitales"
      ],
      popular: true
    },
    {
      id: "predio-al-dia",
      audience: "cliente",
      category: "servicios-clientes",
      subCategory: "saneamiento-catastro",
      name: "Predio al Día (Saneamiento Catastral)",
      badge: "Saneamiento Catastral",
      targetAudience: "Propietarios con Inconsistencias Físicas o Jurídicas",
      priceDisplay: "Tarifa Oficial: $650.000 COP",
      priceValue: 650000,
      format: "Auditoría Técnica y Hoja de Ruta RAA",
      summary: "Diagnóstico pericial de diferencias entre áreas de escritura notarial, catastro IGAC y registro SNR en Villavicencio y Meta, con la hoja de ruta de corrección.",
      deliverables: [
        "Tabla comparativa de áreas: Física vs. Jurídica vs. Catastral",
        "Identificación de causales de discrepancia (error de digitación, cabida)",
        "Ruta crítica de trámites ante IGAC o Notaría",
        "Minuta o formato guía para el derecho de petición o rectificación",
        "Acompañamiento paso a paso hasta radicación"
      ],
      popular: false
    },
    {
      id: "pack-ofertas-villavicencio-2026",
      audience: "avaluador",
      category: "ofertas-mercado",
      name: "Pack Ofertas de Mercado Depuradas: Villavicencio (Meta) 2026",
      badge: "3 Muestras 50001-U01 a U03",
      targetAudience: "Avaluadores RAA, Peritos y Analistas Inmobiliarios",
      priceDisplay: "Banco de Datos: $85.000 COP",
      priceValue: 85000,
      format: "3 Fichas PDF + Archivo KMZ con Fotos",
      summary: "3 Ofertas de mercado reales investigadas, depuradas y georreferenciadas bajo codificación DIVIPOLA (50001) en Comuna 4 (Abajamcito y Prados de Siberia). Con factor de negociación del 5%, valor residual de terreno ($/m²), fotos de fachada y estadística muestral (Media $1.137.819 /m², CV 3.20%).",
      deliverables: [
        "3 Fichas Técnicas individuales en PDF con cálculo de valor residual y factor de negociación",
        "Archivo KMZ georreferenciado con fotos de fachada incrustadas para Google Earth y QGIS",
        "Coordenadas GPS de precisión, folio y verificación telefónica de cada oferente",
        "Cumplimiento total de requisitos metodológicos de la Resolución IGAC 620 de 2008 y 0941 de 2026",
        "Licencia de uso pericial para incorporar como anexo formal en tus informes periciales"
      ],
      samplePreview: {
        badge: "VISTA PREVIA PROTEGIDA",
        title: "Oferta 50001-U01 · Villavicencio (Meta)",
        sector: "Comuna 4 · Calle 36A Sector Abajamcito",
        unitValue: "🔒 $ 1.096.485 /m² (Muestra Protegida)",
        type: "Casa urbana de 2 pisos (66 m² terreno)",
        factor: "Factor de Negociación: 5% investigado in situ",
        coords: "04°08'22.4\"N 73°35'19.1\"W (Villavicencio, Meta)",
        photoUrl: "assets/img/muestra_villavo_o1.jpg",
        pdfUrl: "assets/downloads/Ficha_Comercial_Villavicencio_O1.pdf"
      },
      popular: true
    },
    {
      id: "capa-catastral-urbana-villavicencio",
      audience: "avaluador",
      category: "ofertas-mercado",
      name: "Capa Catastral Vectorial Urbana: Villavicencio (Meta) 2026",
      badge: "142.264 Predios Urbanos",
      targetAudience: "Avaluadores Urbanos, Topógrafos y Peritos Catastrales",
      priceDisplay: "Cartografía SIG: $140.000 COP",
      priceValue: 140000,
      format: "Archivo KMZ (Formal 115k + Informal 27k) para Google Earth & QGIS",
      summary: "Cartografía predial vectorial del casco urbano completo de Villavicencio (Meta) con 115.035 predios formales y 27.229 predios informales delimitados con su código predial nacional oficial para verificación de linderos y colindancias.",
      deliverables: [
        "142.264 polígonos prediales vectoriales en formato KMZ (Capas Formal e Informal)",
        "Identificador de Código Predial Nacional (30 dígitos) por predio",
        "Compatibilidad nativa con Google Earth Pro, QGIS, ArcGIS y Global Mapper",
        "Visualización instantánea de forma, frente, fondo y colindantes",
        "Licencia de uso profesional para cartografía pericial"
      ],
      popular: false
    },
    {
      id: "capa-catastral-rural-villavicencio",
      audience: "avaluador",
      category: "ofertas-mercado",
      name: "Capa Catastral Vectorial Rural: Villavicencio (Meta) 2026",
      badge: "34.279 Predios Rurales",
      targetAudience: "Avaluadores Rurales, Agrónomos e Ingenieros Catastrales",
      priceDisplay: "Cartografía SIG: $130.000 COP",
      priceValue: 130000,
      format: "Archivo KMZ (Formal 26k + Informal 8.2k) para Google Earth & QGIS",
      summary: "Polígonos catastrales vectoriales de 26.039 predios rurales formales y 8.240 predios rurales informales en la jurisdicción del municipio de Villavicencio (Meta) para inspección técnica pericial, servidumbres y análisis de linderos.",
      deliverables: [
        "34.279 polígonos de predios rurales en formato KMZ (Capas Formal e Informal)",
        "Códigos catastrales oficiales nacionales por predio",
        "Ideal para verificación de accesos viales, ríos, rondas y vecinos",
        "Carga rápida en celular mediante Google Earth Mobile para trabajo en campo",
        "Licencia de uso pericial ilimitada para tus avalúos"
      ],
      popular: false
    },
    {
      id: "defensa-valor-predial",
      audience: "cliente",
      category: "servicios-clientes",
      subCategory: "saneamiento-catastro",
      name: "Defensa del Valor Predial (Revisión IGAC)",
      badge: "Ahorro Tributario Legal",
      targetAudience: "Contribuyentes del Impuesto Predial en Villavicencio y Meta",
      priceDisplay: "Tarifa Oficial: $790.000 COP",
      priceValue: 790000,
      format: "Peritaje de Autoavalúo y Reclamación IGAC",
      summary: "Revisión pericial del avalúo catastral oficial y memorial técnico para reclamaciones de revisión de avalúo ante el IGAC o la Secretaría de Hacienda Municipal.",
      deliverables: [
        "Auditoría del boletín catastral y componentes de terreno y construcción",
        "Identificación de sobreestimación del avalúo catastral sobre el mercado",
        "Elaboración del informe técnico pericial de soporte a la solicitud",
        "Memorial de sustentación jurídica y fáctica para el trámite de revisión",
        "Cálculo del ahorro estimado en impuesto predial para los próximos años"
      ],
      popular: true
    },
    {
      id: "peritaje-integral",
      audience: "cliente",
      category: "servicios-clientes",
      subCategory: "peritaje-judicial",
      name: "Peritaje Integral Judicial (Art. 226 CGP)",
      badge: "Validez Procesal Ante Juzgados",
      targetAudience: "Abogados Litigantes, Procesos Civiles, Particiones y Sucesiones",
      priceDisplay: "Honorarios Dictamen: $1.800.000 COP",
      priceValue: 1800000,
      format: "Dictamen Pericial Certificado RAA",
      summary: "Avalúo pericial, soporte técnico metodológico y dictamen pericial conforme al encargo judicial bajo el Código General del Proceso ante despachos de Colombia.",
      deliverables: [
        "Dictamen estructurado conforme al Art. 226 del CGP",
        "Inspección ocular con registro fotográfico exhaustivo y cadena de custodia",
        "Memoria de cálculo econométrico con coeficientes de correlación",
        "Certificado de idoneidad RAA del perito avaluador",
        "Disponibilidad para sustentación y contradicción en audiencia judicial"
      ],
      popular: false
    },
    {
      id: "pack-ofertas-villavicencio-2026",
      audience: "avaluador",
      category: "ofertas-mercado",
      name: "Pack Ofertas de Mercado Depuradas: Villavicencio (Meta) 2026",
      badge: "3 Muestras 50001-U01 a U03",
      targetAudience: "Avaluadores RAA, Peritos y Analistas Inmobiliarios",
      priceDisplay: "Banco de Datos: $85.000 COP",
      priceValue: 85000,
      format: "3 Fichas PDF + Archivo KMZ con Fotos",
      summary: "3 Ofertas de mercado reales investigadas, depuradas y georreferenciadas bajo codificación DIVIPOLA (50001) en Comuna 4 (Abajamcito y Prados de Siberia). Con factor de negociación del 5%, valor residual de terreno ($/m²), fotos de fachada y estadística muestral (Media $1.137.819 /m², CV 3.20%).",
      deliverables: [
        "3 Fichas Técnicas individuales en PDF con cálculo de valor residual y factor de negociación",
        "Archivo KMZ georreferenciado con fotos de fachada incrustadas para Google Earth y QGIS",
        "Coordenadas GPS de precisión, folio y verificación telefónica de cada oferente",
        "Cumplimiento total de requisitos metodológicos de la Resolución IGAC 620 de 2008 y 0941 de 2026",
        "Licencia de uso pericial para incorporar como anexo formal en tus informes periciales"
      ],
      samplePreview: {
        badge: "VISTA PREVIA PROTEGIDA",
        title: "Oferta 50001-U01 · Villavicencio (Meta)",
        sector: "Comuna 4 · Calle 36A Sector Abajamcito",
        unitValue: "🔒 $ 1.096.485 /m² (Muestra Protegida)",
        type: "Casa urbana de 2 pisos (66 m² terreno)",
        factor: "Factor de Negociación: 5% investigado in situ",
        coords: "04°08'22.4\"N 73°35'19.1\"W (Villavicencio, Meta)",
        photoUrl: "assets/img/muestra_villavo_o1.jpg",
        pdfUrl: "assets/downloads/Ficha_Comercial_Villavicencio_O1.pdf"
      },
      popular: true
    },
    {
      id: "capa-catastral-urbana-villavicencio",
      audience: "avaluador",
      category: "ofertas-mercado",
      name: "Capa Catastral Vectorial Urbana: Villavicencio (Meta) 2026",
      badge: "142.264 Predios Urbanos",
      targetAudience: "Avaluadores Urbanos, Topógrafos y Peritos Catastrales",
      priceDisplay: "Cartografía SIG: $140.000 COP",
      priceValue: 140000,
      format: "Archivo KMZ (Formal 115k + Informal 27k) para Google Earth & QGIS",
      summary: "Cartografía predial vectorial del casco urbano completo de Villavicencio (Meta) con 115.035 predios formales y 27.229 predios informales delimitados con su código predial nacional oficial para verificación de linderos y colindancias.",
      deliverables: [
        "142.264 polígonos prediales vectoriales en formato KMZ (Capas Formal e Informal)",
        "Identificador de Código Predial Nacional (30 dígitos) por predio",
        "Compatibilidad nativa con Google Earth Pro, QGIS, ArcGIS y Global Mapper",
        "Visualización instantánea de forma, frente, fondo y colindantes",
        "Licencia de uso profesional para cartografía pericial"
      ],
      popular: false
    },
    {
      id: "capa-catastral-rural-villavicencio",
      audience: "avaluador",
      category: "ofertas-mercado",
      name: "Capa Catastral Vectorial Rural: Villavicencio (Meta) 2026",
      badge: "34.279 Predios Rurales",
      targetAudience: "Avaluadores Rurales, Agrónomos e Ingenieros Catastrales",
      priceDisplay: "Cartografía SIG: $130.000 COP",
      priceValue: 130000,
      format: "Archivo KMZ (Formal 26k + Informal 8.2k) para Google Earth & QGIS",
      summary: "Polígonos catastrales vectoriales de 26.039 predios rurales formales y 8.240 predios rurales informales en la jurisdicción del municipio de Villavicencio (Meta) para inspección técnica pericial, servidumbres y análisis de linderos.",
      deliverables: [
        "34.279 polígonos de predios rurales en formato KMZ (Capas Formal e Informal)",
        "Códigos catastrales oficiales nacionales por predio",
        "Ideal para verificación de accesos viales, ríos, rondas y vecinos",
        "Carga rápida en celular mediante Google Earth Mobile para trabajo en campo",
        "Licencia de uso pericial ilimitada para tus avalúos"
      ],
      popular: false
    },
    {
      id: "territorio-empresarial",
      audience: "cliente",
      category: "servicios-clientes",
      subCategory: "b2b-corporativo",
      name: "Territorio Empresarial & Servidumbres",
      badge: "B2B Corporativo & Agroindustria",
      targetAudience: "Empresas de Infraestructura, Hidrocarburos y Agroindustria",
      priceDisplay: "Tarifa Corporativa: Según Escala RAA",
      priceValue: 0,
      format: "Consultoría Territorial, SIG & Catastro",
      summary: "Consultoría en información predial masiva, cartografía catastral y estudios socioeconómicos territoriales para servidumbres y macroproyectos en la Orinoquía.",
      deliverables: [
        "Base de datos georreferenciada de polígonos prediales",
        "Matriz de afectaciones viales, ambientales y servidumbres",
        "Fichas de identificación de propietarios y estado registral",
        "Mapas temáticos exportables en formatos Shapefile, GeoJSON y KML",
        "Mesa de trabajo y asesoría técnica para adquisición de franjas"
      ],
      popular: false
    },
    {
      id: "pack-ofertas-villavicencio-2026",
      audience: "avaluador",
      category: "ofertas-mercado",
      name: "Pack Ofertas de Mercado Depuradas: Villavicencio (Meta) 2026",
      badge: "3 Muestras 50001-U01 a U03",
      targetAudience: "Avaluadores RAA, Peritos y Analistas Inmobiliarios",
      priceDisplay: "Banco de Datos: $85.000 COP",
      priceValue: 85000,
      format: "3 Fichas PDF + Archivo KMZ con Fotos",
      summary: "3 Ofertas de mercado reales investigadas, depuradas y georreferenciadas bajo codificación DIVIPOLA (50001) en Comuna 4 (Abajamcito y Prados de Siberia). Con factor de negociación del 5%, valor residual de terreno ($/m²), fotos de fachada y estadística muestral (Media $1.137.819 /m², CV 3.20%).",
      deliverables: [
        "3 Fichas Técnicas individuales en PDF con cálculo de valor residual y factor de negociación",
        "Archivo KMZ georreferenciado con fotos de fachada incrustadas para Google Earth y QGIS",
        "Coordenadas GPS de precisión, folio y verificación telefónica de cada oferente",
        "Cumplimiento total de requisitos metodológicos de la Resolución IGAC 620 de 2008 y 0941 de 2026",
        "Licencia de uso pericial para incorporar como anexo formal en tus informes periciales"
      ],
      samplePreview: {
        badge: "VISTA PREVIA PROTEGIDA",
        title: "Oferta 50001-U01 · Villavicencio (Meta)",
        sector: "Comuna 4 · Calle 36A Sector Abajamcito",
        unitValue: "🔒 $ 1.096.485 /m² (Muestra Protegida)",
        type: "Casa urbana de 2 pisos (66 m² terreno)",
        factor: "Factor de Negociación: 5% investigado in situ",
        coords: "04°08'22.4\"N 73°35'19.1\"W (Villavicencio, Meta)",
        photoUrl: "assets/img/muestra_villavo_o1.jpg",
        pdfUrl: "assets/downloads/Ficha_Comercial_Villavicencio_O1.pdf"
      },
      popular: true
    },
    {
      id: "capa-catastral-urbana-villavicencio",
      audience: "avaluador",
      category: "ofertas-mercado",
      name: "Capa Catastral Vectorial Urbana: Villavicencio (Meta) 2026",
      badge: "142.264 Predios Urbanos",
      targetAudience: "Avaluadores Urbanos, Topógrafos y Peritos Catastrales",
      priceDisplay: "Cartografía SIG: $140.000 COP",
      priceValue: 140000,
      format: "Archivo KMZ (Formal 115k + Informal 27k) para Google Earth & QGIS",
      summary: "Cartografía predial vectorial del casco urbano completo de Villavicencio (Meta) con 115.035 predios formales y 27.229 predios informales delimitados con su código predial nacional oficial para verificación de linderos y colindancias.",
      deliverables: [
        "142.264 polígonos prediales vectoriales en formato KMZ (Capas Formal e Informal)",
        "Identificador de Código Predial Nacional (30 dígitos) por predio",
        "Compatibilidad nativa con Google Earth Pro, QGIS, ArcGIS y Global Mapper",
        "Visualización instantánea de forma, frente, fondo y colindantes",
        "Licencia de uso profesional para cartografía pericial"
      ],
      popular: false
    },
    {
      id: "capa-catastral-rural-villavicencio",
      audience: "avaluador",
      category: "ofertas-mercado",
      name: "Capa Catastral Vectorial Rural: Villavicencio (Meta) 2026",
      badge: "34.279 Predios Rurales",
      targetAudience: "Avaluadores Rurales, Agrónomos e Ingenieros Catastrales",
      priceDisplay: "Cartografía SIG: $130.000 COP",
      priceValue: 130000,
      format: "Archivo KMZ (Formal 26k + Informal 8.2k) para Google Earth & QGIS",
      summary: "Polígonos catastrales vectoriales de 26.039 predios rurales formales y 8.240 predios rurales informales en la jurisdicción del municipio de Villavicencio (Meta) para inspección técnica pericial, servidumbres y análisis de linderos.",
      deliverables: [
        "34.279 polígonos de predios rurales en formato KMZ (Capas Formal e Informal)",
        "Códigos catastrales oficiales nacionales por predio",
        "Ideal para verificación de accesos viales, ríos, rondas y vecinos",
        "Carga rápida en celular mediante Google Earth Mobile para trabajo en campo",
        "Licencia de uso pericial ilimitada para tus avalúos"
      ],
      popular: false
    },

    // ==========================================
    // 2. HERRAMIENTAS TÉCNICAS PARA AVALUADORES
    // ==========================================
    {
      id: "combo-master-territorial-granada",
      audience: "avaluador",
      category: "ofertas-mercado",
      name: "Combo Máster Territorial: Granada (Meta) 2026",
      badge: "Pack Integral Territorio",
      targetAudience: "Peritos Colegiados RAA y Firmas Valuatorias",
      priceDisplay: "Inversión Combo: $240.000 COP",
      priceValue: 240000,
      format: "ZIP Completo: 6 PDFs + 3 Archivos KMZ + Matriz Excel",
      summary: "El arsenal pericial definitivo para tasar en Granada: 6 Ofertas depuradas en PDF + KMZ con fotos + Capa Urbana (20.846 predios) + Capa Rural (8.662 predios) + Matriz de Homogeneización en Excel con datos pre-cargados.",
      deliverables: [
        "Pack completo de 6 ofertas depuradas en PDF de alta resolución y KMZ con fotos integradas",
        "Capa catastral urbana con 20.846 predios vectoriales en KMZ para Google Earth Pro y QGIS",
        "Capa catastral rural con 8.662 predios vectoriales en KMZ para delimitación de fincas y linderos",
        "Matriz de Homogeneización en Excel formulada con los datos de las 6 ofertas pre-cargados",
        "Ahorro estimado de 16 horas de trabajo de campo, viáticos de viaje y llamadas a oferentes"
      ],
      samplePreview: {
        badge: "ARSENAL PERICIAL COMPLETO",
        title: "Combo Territorial Granada (Meta) 2026",
        sector: "Zona Urbana (20.846 predios) + Rural (8.662 predios)",
        unitValue: "6 Ofertas Depuradas + 2 Capas Catastrales",
        type: "Urbano, Rural, Comercial y Fincas",
        factor: "Matriz Excel con ofertas cargadas y Coeficiente de Variación CV < 10%",
        coords: "Municipio de Granada, Meta (Orinoquía)",
        photoUrl: "assets/img/muestra_o1.jpg",
        pdfUrl: "assets/docs/Ficha_Muestra_Granada_O1.pdf"
      },
      popular: true
    },
    {
      id: "ficha-individual-50313",
      audience: "avaluador",
      category: "ofertas-mercado",
      name: "Ficha Comercial Individual Georreferenciada (Cod. 50313)",
      badge: "Micro-Licencia $7.000 COP",
      targetAudience: "Avaluadores RAA que requieren 1 sola muestra específica",
      priceDisplay: "Ficha Individual: $7.000 COP",
      priceValue: 7000,
      format: "PDF Sin Censura + Punto KMZ + Contacto Directo",
      summary: "Adquiere únicamente la muestra de mercado que necesitas para tu informe en Granada (Meta). Incluye fotografía original sin marcas, teléfono verificado del vendedor, valor residual $/m² depurado y factor de negociación.",
      deliverables: [
        "1 Ficha Técnica comercial oficial en PDF de alta resolución sin censura",
        "Teléfono de contacto verificado y nombre del oferente / propietario",
        "Valor residual de terreno por m² depurado bajo Res. IGAC 620 de 2008",
        "Punto georreferenciado en KMZ para Google Earth Pro",
        "Licencia de uso pericial individual con folio RAA"
      ],
      samplePreview: {
        badge: "VISTA PREVIA PROTEGIDA",
        title: "Oferta 50313-01 · Granada (Meta)",
        sector: "Barrio Primero de Junio (Carrera 16 # 14-17)",
        unitValue: "🔒 $ •••.••• /m² (Desbloquear por $7.000 COP)",
        type: "Casa-lote urbano con frente a vía principal",
        factor: "Factor de Negociación: 🔒 0.•• (Oculto)",
        coords: "03°32'19.5\"N 73°42'32.0\"W (Granada, Meta)",
        photoUrl: "assets/img/muestra_o1.jpg",
        pdfUrl: "assets/downloads/Ficha_Comercial_O1.pdf"
      },
      popular: true
    },
    {
      id: "pack-ofertas-granada-2026",
      audience: "avaluador",
      category: "ofertas-mercado",
      name: "Pack Ofertas de Mercado Depuradas: Granada (Meta) 2026",
      badge: "6 Muestras 50313-01 a 06",
      targetAudience: "Avaluadores RAA, Peritos y Analistas Inmobiliarios",
      priceDisplay: "Banco de Datos: $95.000 COP",
      priceValue: 95000,
      format: "6 Fichas PDF + Archivo KMZ con Fotos",
      summary: "6 Ofertas de mercado reales investigadas, depuradas y georreferenciadas bajo codificación DIVIPOLA (50313-01 a 50313-06). Con factor de negociación, valor residual de terreno ($/m²) y fotos de fachada para sustentar tu método de comparación.",
      deliverables: [
        "6 Fichas Técnicas individuales en PDF con cálculo de valor residual y factor de negociación",
        "Archivo KMZ georreferenciado con fotos de fachada incrustadas para Google Earth y QGIS",
        "Coordenadas GPS de precisión, folio y teléfono de contacto verificado de cada oferente",
        "Cumplimiento total de requisitos metodológicos de la Resolución IGAC 620 de 2008",
        "Licencia de uso pericial para incorporar como anexo formal en tus informes periciales"
      ],
      samplePreview: {
        badge: "VISTA PREVIA PROTEGIDA",
        title: "Oferta 50313-01 · Granada (Meta)",
        sector: "Barrio Primero de Junio (Carrera 16 # 14-17)",
        unitValue: "🔒 $ 1.007.359 /m² (Muestra Protegida)",
        type: "Casa-lote urbano con frente a vía principal",
        factor: "Factor de Negociación: 10% investigado in situ",
        coords: "03°32'19.5\"N 73°42'32.0\"W (-73.7088970, 3.5387457)",
        photoUrl: "assets/img/muestra_o1.jpg",
        pdfUrl: "assets/downloads/Ficha_Comercial_O1.pdf"
      },
      popular: true
    },
    {
      id: "capa-catastral-urbana-granada",
      audience: "avaluador",
      category: "ofertas-mercado",
      name: "Capa Catastral Vectorial Urbana: Granada (Meta) 2026",
      badge: "20.846 Predios Urbanos",
      targetAudience: "Avaluadores Urbanos, Topógrafos y Peritos Catastrales",
      priceDisplay: "Cartografía SIG: $120.000 COP",
      priceValue: 120000,
      format: "Archivo KMZ / KML para Google Earth & QGIS",
      summary: "Cartografía predial vectorial del casco urbano completo de Granada (Meta) con 20.846 predios delimitados con su código predial nacional oficial para verificación de linderos y colindancias.",
      deliverables: [
        "20.846 polígonos prediales vectoriales en formato KMZ",
        "Identificador de Código Predial Nacional (30 dígitos) por predio",
        "Compatibilidad nativa con Google Earth Pro, QGIS, ArcGIS y Global Mapper",
        "Visualización instantánea de forma, frente, fondo y colindantes",
        "Licencia de uso profesional para cartografía pericial"
      ],
      popular: false
    },
    {
      id: "pack-ofertas-villavicencio-2026",
      audience: "avaluador",
      category: "ofertas-mercado",
      name: "Pack Ofertas de Mercado Depuradas: Villavicencio (Meta) 2026",
      badge: "3 Muestras 50001-U01 a U03",
      targetAudience: "Avaluadores RAA, Peritos y Analistas Inmobiliarios",
      priceDisplay: "Banco de Datos: $85.000 COP",
      priceValue: 85000,
      format: "3 Fichas PDF + Archivo KMZ con Fotos",
      summary: "3 Ofertas de mercado reales investigadas, depuradas y georreferenciadas bajo codificación DIVIPOLA (50001) en Comuna 4 (Abajamcito y Prados de Siberia). Con factor de negociación del 5%, valor residual de terreno ($/m²), fotos de fachada y estadística muestral (Media $1.137.819 /m², CV 3.20%).",
      deliverables: [
        "3 Fichas Técnicas individuales en PDF con cálculo de valor residual y factor de negociación",
        "Archivo KMZ georreferenciado con fotos de fachada incrustadas para Google Earth y QGIS",
        "Coordenadas GPS de precisión, folio y verificación telefónica de cada oferente",
        "Cumplimiento total de requisitos metodológicos de la Resolución IGAC 620 de 2008 y 0941 de 2026",
        "Licencia de uso pericial para incorporar como anexo formal en tus informes periciales"
      ],
      samplePreview: {
        badge: "VISTA PREVIA PROTEGIDA",
        title: "Oferta 50001-U01 · Villavicencio (Meta)",
        sector: "Comuna 4 · Calle 36A Sector Abajamcito",
        unitValue: "🔒 $ 1.096.485 /m² (Muestra Protegida)",
        type: "Casa urbana de 2 pisos (66 m² terreno)",
        factor: "Factor de Negociación: 5% investigado in situ",
        coords: "04°08'22.4\"N 73°35'19.1\"W (Villavicencio, Meta)",
        photoUrl: "assets/img/muestra_villavo_o1.jpg",
        pdfUrl: "assets/downloads/Ficha_Comercial_Villavicencio_O1.pdf"
      },
      popular: true
    },
    {
      id: "capa-catastral-urbana-villavicencio",
      audience: "avaluador",
      category: "ofertas-mercado",
      name: "Capa Catastral Vectorial Urbana: Villavicencio (Meta) 2026",
      badge: "142.264 Predios Urbanos",
      targetAudience: "Avaluadores Urbanos, Topógrafos y Peritos Catastrales",
      priceDisplay: "Cartografía SIG: $140.000 COP",
      priceValue: 140000,
      format: "Archivo KMZ (Formal 115k + Informal 27k) para Google Earth & QGIS",
      summary: "Cartografía predial vectorial del casco urbano completo de Villavicencio (Meta) con 115.035 predios formales y 27.229 predios informales delimitados con su código predial nacional oficial para verificación de linderos y colindancias.",
      deliverables: [
        "142.264 polígonos prediales vectoriales en formato KMZ (Capas Formal e Informal)",
        "Identificador de Código Predial Nacional (30 dígitos) por predio",
        "Compatibilidad nativa con Google Earth Pro, QGIS, ArcGIS y Global Mapper",
        "Visualización instantánea de forma, frente, fondo y colindantes",
        "Licencia de uso profesional para cartografía pericial"
      ],
      popular: false
    },
    {
      id: "capa-catastral-rural-villavicencio",
      audience: "avaluador",
      category: "ofertas-mercado",
      name: "Capa Catastral Vectorial Rural: Villavicencio (Meta) 2026",
      badge: "34.279 Predios Rurales",
      targetAudience: "Avaluadores Rurales, Agrónomos e Ingenieros Catastrales",
      priceDisplay: "Cartografía SIG: $130.000 COP",
      priceValue: 130000,
      format: "Archivo KMZ (Formal 26k + Informal 8.2k) para Google Earth & QGIS",
      summary: "Polígonos catastrales vectoriales de 26.039 predios rurales formales y 8.240 predios rurales informales en la jurisdicción del municipio de Villavicencio (Meta) para inspección técnica pericial, servidumbres y análisis de linderos.",
      deliverables: [
        "34.279 polígonos de predios rurales en formato KMZ (Capas Formal e Informal)",
        "Códigos catastrales oficiales nacionales por predio",
        "Ideal para verificación de accesos viales, ríos, rondas y vecinos",
        "Carga rápida en celular mediante Google Earth Mobile para trabajo en campo",
        "Licencia de uso pericial ilimitada para tus avalúos"
      ],
      popular: false
    },
    {
      id: "capa-catastral-rural-granada",
      audience: "avaluador",
      category: "ofertas-mercado",
      name: "Capa Catastral Vectorial Rural: Granada (Meta) 2026",
      badge: "8.662 Predios Rurales",
      targetAudience: "Avaluadores Rurales, Agrónomos e Ingenieros Catastrales",
      priceDisplay: "Cartografía SIG: $120.000 COP",
      priceValue: 120000,
      format: "Archivo KMZ / KML para Google Earth & QGIS",
      summary: "Polígonos catastrales vectoriales de 8.662 predios y fincas rurales en el municipio de Granada (Meta) para inspección técnica pericial, servidumbres y análisis de linderos.",
      deliverables: [
        "8.662 polígonos de predios rurales en formato KMZ",
        "Códigos catastrales oficiales nacionales por predio",
        "Ideal para verificación de accesos viales, ríos, rondas y vecinos",
        "Carga rápida en celular mediante Google Earth Mobile para trabajo en campo",
        "Licencia de uso pericial ilimitada para tus avalúos"
      ],
      popular: false
    },
    {
      id: "combo-master-territorial-villavicencio",
      audience: "avaluador",
      category: "ofertas-mercado",
      name: "Combo Máster Territorial: Villavicencio (Meta) 2026",
      badge: "Arsenal Pericial Completo",
      targetAudience: "Peritos Colegiados RAA y Firmas Valuatorias",
      priceDisplay: "Inversión Combo: $290.000 COP",
      priceValue: 290000,
      format: "ZIP Completo: 3 PDFs + 5 Archivos KMZ + Licencia",
      summary: "El arsenal pericial definitivo para tasar en la capital del Meta: 3 Ofertas depuradas en PDF (Comuna 4) + KMZ con fotos + Capa Urbana Formal (115.035 predios) + Capa Urbana Informal (27.229 predios) + Capa Rural Formal (26.039 predios) + Capa Rural Informal (8.240 predios). Total: 176.543 predios vectoriales.",
      deliverables: [
        "Pack completo de 3 ofertas depuradas en PDF de alta resolución y KMZ con fotos integradas",
        "Capa catastral urbana formal con 115.035 predios vectoriales en KMZ para Google Earth Pro y QGIS",
        "Capa catastral urbana informal con 27.229 predios vectoriales para análisis de asentamientos",
        "Capa catastral rural formal (26.039 predios) e informal (8.240 predios) para delimitación de predios rurales",
        "Ahorro estimado de más de 20 horas de trabajo de campo, viáticos y llamadas a oferentes"
      ],
      samplePreview: {
        badge: "ARSENAL PERICIAL VILLAVICENCIO",
        title: "Combo Territorial Villavicencio 2026",
        sector: "Casco Urbano (142k predios) + Rural (34k predios)",
        unitValue: "3 Ofertas Depuradas + 4 Capas Catastrales",
        type: "Urbano Formal, Informal, Rural y Expansión",
        factor: "Estadística Comuna 4: Media $ 1.137.819 /m², CV = 3.20%",
        coords: "Villavicencio, Meta (Comuna 4 - Abajamcito)",
        photoUrl: "assets/img/muestra_villavo_o1.jpg",
        pdfUrl: "assets/docs/Ficha_Muestra_Villavicencio_O1.pdf"
      },
      popular: true
    },
    {
      id: "ficha-individual-50001",
      audience: "avaluador",
      category: "ofertas-mercado",
      name: "Ficha Comercial Individual Georreferenciada: Villavicencio (Cod. 50001)",
      badge: "Micro-Licencia $7.000 COP",
      targetAudience: "Avaluadores RAA que requieren 1 sola muestra específica",
      priceDisplay: "Ficha Individual: $7.000 COP",
      priceValue: 7000,
      format: "PDF Sin Censura + Punto KMZ + Contacto Directo",
      summary: "Adquiere únicamente la muestra de mercado que necesitas para tu informe en Villavicencio (Meta). Incluye fotografía original sin marcas, teléfono verificado del vendedor, valor residual $/m² depurado y factor de negociación.",
      deliverables: [
        "1 Ficha Técnica comercial oficial en PDF de alta resolución sin censura",
        "Teléfono de contacto verificado y datos de localización de la oferta",
        "Valor residual de terreno por m² depurado bajo Res. IGAC 620 de 2008 / Res. 0941 de 2026",
        "Punto georreferenciado en KMZ para Google Earth Pro",
        "Licencia de uso pericial individual con folio RAA"
      ],
      samplePreview: {
        badge: "VISTA PREVIA PROTEGIDA",
        title: "Oferta 50001-U01 · Villavicencio (Meta)",
        sector: "Comuna 4 · Calle 36A Sector Abajamcito",
        unitValue: "🔒 $ 1.096.485 /m² (Muestra Protegida)",
        type: "Casa urbana de 2 pisos (66 m² terreno)",
        factor: "Factor de Negociación: 5% investigado in situ",
        coords: "04°08'22.4\"N 73°35'19.1\"W (Villavicencio, Meta)",
        photoUrl: "assets/img/muestra_villavo_o1.jpg",
        pdfUrl: "assets/downloads/Ficha_Comercial_Villavicencio_O1.pdf"
      },
      popular: false
    },

    {
      id: "pack-ofertas-villavicencio-2026",
      audience: "avaluador",
      category: "ofertas-mercado",
      name: "Pack Ofertas de Mercado Depuradas: Villavicencio (Meta) 2026",
      badge: "3 Muestras 50001-U01 a U03",
      targetAudience: "Avaluadores RAA, Peritos y Analistas Inmobiliarios",
      priceDisplay: "Banco de Datos: $85.000 COP",
      priceValue: 85000,
      format: "3 Fichas PDF + Archivo KMZ con Fotos",
      summary: "3 Ofertas de mercado reales investigadas, depuradas y georreferenciadas bajo codificación DIVIPOLA (50001) en Comuna 4 (Abajamcito y Prados de Siberia). Con factor de negociación del 5%, valor residual de terreno ($/m²), fotos de fachada y estadística muestral (Media $1.137.819 /m², CV 3.20%).",
      deliverables: [
        "3 Fichas Técnicas individuales en PDF con cálculo de valor residual y factor de negociación",
        "Archivo KMZ georreferenciado con fotos de fachada incrustadas para Google Earth y QGIS",
        "Coordenadas GPS de precisión, folio y verificación telefónica de cada oferente",
        "Cumplimiento total de requisitos metodológicos de la Resolución IGAC 620 de 2008 y 0941 de 2026",
        "Licencia de uso pericial para incorporar como anexo formal en tus informes periciales"
      ],
      samplePreview: {
        badge: "VISTA PREVIA PROTEGIDA",
        title: "Oferta 50001-U01 · Villavicencio (Meta)",
        sector: "Comuna 4 · Calle 36A Sector Abajamcito",
        unitValue: "🔒 $ 1.096.485 /m² (Muestra Protegida)",
        type: "Casa urbana de 2 pisos (66 m² terreno)",
        factor: "Factor de Negociación: 5% investigado in situ",
        coords: "04°08'22.4\"N 73°35'19.1\"W (Villavicencio, Meta)",
        photoUrl: "assets/img/muestra_villavo_o1.jpg",
        pdfUrl: "assets/downloads/Ficha_Comercial_Villavicencio_O1.pdf"
      },
      popular: true
    },
    {
      id: "capa-catastral-urbana-villavicencio",
      audience: "avaluador",
      category: "ofertas-mercado",
      name: "Capa Catastral Vectorial Urbana: Villavicencio (Meta) 2026",
      badge: "142.264 Predios Urbanos",
      targetAudience: "Avaluadores Urbanos, Topógrafos y Peritos Catastrales",
      priceDisplay: "Cartografía SIG: $140.000 COP",
      priceValue: 140000,
      format: "Archivo KMZ (Formal 115k + Informal 27k) para Google Earth & QGIS",
      summary: "Cartografía predial vectorial del casco urbano completo de Villavicencio (Meta) con 115.035 predios formales y 27.229 predios informales delimitados con su código predial nacional oficial para verificación de linderos y colindancias.",
      deliverables: [
        "142.264 polígonos prediales vectoriales en formato KMZ (Capas Formal e Informal)",
        "Identificador de Código Predial Nacional (30 dígitos) por predio",
        "Compatibilidad nativa con Google Earth Pro, QGIS, ArcGIS y Global Mapper",
        "Visualización instantánea de forma, frente, fondo y colindantes",
        "Licencia de uso profesional para cartografía pericial"
      ],
      popular: false
    },
    {
      id: "capa-catastral-rural-villavicencio",
      audience: "avaluador",
      category: "ofertas-mercado",
      name: "Capa Catastral Vectorial Rural: Villavicencio (Meta) 2026",
      badge: "34.279 Predios Rurales",
      targetAudience: "Avaluadores Rurales, Agrónomos e Ingenieros Catastrales",
      priceDisplay: "Cartografía SIG: $130.000 COP",
      priceValue: 130000,
      format: "Archivo KMZ (Formal 26k + Informal 8.2k) para Google Earth & QGIS",
      summary: "Polígonos catastrales vectoriales de 26.039 predios rurales formales y 8.240 predios rurales informales en la jurisdicción del municipio de Villavicencio (Meta) para inspección técnica pericial, servidumbres y análisis de linderos.",
      deliverables: [
        "34.279 polígonos de predios rurales en formato KMZ (Capas Formal e Informal)",
        "Códigos catastrales oficiales nacionales por predio",
        "Ideal para verificación de accesos viales, ríos, rondas y vecinos",
        "Carga rápida en celular mediante Google Earth Mobile para trabajo en campo",
        "Licencia de uso pericial ilimitada para tus avalúos"
      ],
      popular: false
    },
    {
      id: "plantilla-urbana-master",
      audience: "avaluador",
      category: "plantillas-avaluos",
      name: "Plantilla Máster: Avalúo Comercial Urbano",
      badge: "Word + Excel RAA",
      targetAudience: "Avaluadores RAA y Peritos Colegiados",
      priceDisplay: "Licencia Profesional: $180.000 COP",
      priceValue: 180000,
      format: "Archivos editables .DOCX + .XLSX",
      summary: "Informe editable con estructura NIIF / RAA completa para casas, apartamentos y locales. Incluye instructivo, frases técnicas y fórmulas automáticas.",
      deliverables: [
        "Estructura de 28 capítulos lista para radicar en entidades financieras",
        "Sección automatizada de caracterización física y acabados",
        "Matriz de cálculo del método de comparación de mercado en Excel enlazada",
        "Ficha técnica normalizada y anexo fotográfico estandarizado",
        "Guía paso a paso en PDF con 3 ejemplos reales completos"
      ],
      popular: true
    },
    {
      id: "plantilla-rural-agro",
      audience: "avaluador",
      category: "plantillas-avaluos",
      name: "Plantilla Máster: Avalúo Rural y Agropecuario",
      badge: "Especial Rural",
      targetAudience: "Avaluadores de Inmuebles Especiales y Fincas",
      priceDisplay: "Licencia Profesional: $240.000 COP",
      priceValue: 240000,
      format: "Archivos editables .DOCX + .XLSX",
      summary: "Informe pericial integral para fincas, haciendas y predios agropecuarios. Con módulos para cultivos permanentes, pastos, cercas, aguas y vías.",
      deliverables: [
        "Módulo de discriminación de clases agrológicas del suelo",
        "Tablas de inventario de construcciones rurales, cercas y corrales",
        "Metodología de costo de reposición para mejoras agropecuarias",
        "Capítulo de análisis de servidumbres de paso y acueducto",
        "Instructivo metodológico con jurisprudencia del IGAC"
      ],
      popular: true
    },
    {
      id: "plantilla-maquinaria-equipo",
      audience: "avaluador",
      category: "plantillas-avaluos",
      name: "Plantilla Pericial: Maquinaria y Equipo Fijo",
      badge: "Ingeniería Mecánica",
      targetAudience: "Peritos Técnicos y Tasadores de Maquinaria",
      priceDisplay: "Licencia Profesional: $190.000 COP",
      priceValue: 190000,
      format: "Archivos editables .DOCX + .XLSX",
      summary: "Modelo para tasación de plantas de proceso, vehículos pesados, maquinaria amarilla y equipos industriales bajo norma Ross-Heidecke.",
      deliverables: [
        "Ficha de inspección mecánica y estado de mantenimiento preventivo",
        "Matriz de depreciación por edad y estado de conservación",
        "Cálculo de vida útil remanente y valor residual de salvamento",
        "Modelo de dictamen con anexo fotográfico técnico de placas y seriales"
      ],
      popular: false
    },
    {
      id: "pack-ofertas-villavicencio-2026",
      audience: "avaluador",
      category: "ofertas-mercado",
      name: "Pack Ofertas de Mercado Depuradas: Villavicencio (Meta) 2026",
      badge: "3 Muestras 50001-U01 a U03",
      targetAudience: "Avaluadores RAA, Peritos y Analistas Inmobiliarios",
      priceDisplay: "Banco de Datos: $85.000 COP",
      priceValue: 85000,
      format: "3 Fichas PDF + Archivo KMZ con Fotos",
      summary: "3 Ofertas de mercado reales investigadas, depuradas y georreferenciadas bajo codificación DIVIPOLA (50001) en Comuna 4 (Abajamcito y Prados de Siberia). Con factor de negociación del 5%, valor residual de terreno ($/m²), fotos de fachada y estadística muestral (Media $1.137.819 /m², CV 3.20%).",
      deliverables: [
        "3 Fichas Técnicas individuales en PDF con cálculo de valor residual y factor de negociación",
        "Archivo KMZ georreferenciado con fotos de fachada incrustadas para Google Earth y QGIS",
        "Coordenadas GPS de precisión, folio y verificación telefónica de cada oferente",
        "Cumplimiento total de requisitos metodológicos de la Resolución IGAC 620 de 2008 y 0941 de 2026",
        "Licencia de uso pericial para incorporar como anexo formal en tus informes periciales"
      ],
      samplePreview: {
        badge: "VISTA PREVIA PROTEGIDA",
        title: "Oferta 50001-U01 · Villavicencio (Meta)",
        sector: "Comuna 4 · Calle 36A Sector Abajamcito",
        unitValue: "🔒 $ 1.096.485 /m² (Muestra Protegida)",
        type: "Casa urbana de 2 pisos (66 m² terreno)",
        factor: "Factor de Negociación: 5% investigado in situ",
        coords: "04°08'22.4\"N 73°35'19.1\"W (Villavicencio, Meta)",
        photoUrl: "assets/img/muestra_villavo_o1.jpg",
        pdfUrl: "assets/downloads/Ficha_Comercial_Villavicencio_O1.pdf"
      },
      popular: true
    },
    {
      id: "capa-catastral-urbana-villavicencio",
      audience: "avaluador",
      category: "ofertas-mercado",
      name: "Capa Catastral Vectorial Urbana: Villavicencio (Meta) 2026",
      badge: "142.264 Predios Urbanos",
      targetAudience: "Avaluadores Urbanos, Topógrafos y Peritos Catastrales",
      priceDisplay: "Cartografía SIG: $140.000 COP",
      priceValue: 140000,
      format: "Archivo KMZ (Formal 115k + Informal 27k) para Google Earth & QGIS",
      summary: "Cartografía predial vectorial del casco urbano completo de Villavicencio (Meta) con 115.035 predios formales y 27.229 predios informales delimitados con su código predial nacional oficial para verificación de linderos y colindancias.",
      deliverables: [
        "142.264 polígonos prediales vectoriales en formato KMZ (Capas Formal e Informal)",
        "Identificador de Código Predial Nacional (30 dígitos) por predio",
        "Compatibilidad nativa con Google Earth Pro, QGIS, ArcGIS y Global Mapper",
        "Visualización instantánea de forma, frente, fondo y colindantes",
        "Licencia de uso profesional para cartografía pericial"
      ],
      popular: false
    },
    {
      id: "capa-catastral-rural-villavicencio",
      audience: "avaluador",
      category: "ofertas-mercado",
      name: "Capa Catastral Vectorial Rural: Villavicencio (Meta) 2026",
      badge: "34.279 Predios Rurales",
      targetAudience: "Avaluadores Rurales, Agrónomos e Ingenieros Catastrales",
      priceDisplay: "Cartografía SIG: $130.000 COP",
      priceValue: 130000,
      format: "Archivo KMZ (Formal 26k + Informal 8.2k) para Google Earth & QGIS",
      summary: "Polígonos catastrales vectoriales de 26.039 predios rurales formales y 8.240 predios rurales informales en la jurisdicción del municipio de Villavicencio (Meta) para inspección técnica pericial, servidumbres y análisis de linderos.",
      deliverables: [
        "34.279 polígonos de predios rurales en formato KMZ (Capas Formal e Informal)",
        "Códigos catastrales oficiales nacionales por predio",
        "Ideal para verificación de accesos viales, ríos, rondas y vecinos",
        "Carga rápida en celular mediante Google Earth Mobile para trabajo en campo",
        "Licencia de uso pericial ilimitada para tus avalúos"
      ],
      popular: false
    },
    {
      id: "plantilla-dictamen-judicial",
      audience: "avaluador",
      category: "plantillas-avaluos",
      name: "Plantilla Dictamen Pericial Judicial (Art. 226 CGP)",
      badge: "Jurídico Procesal",
      targetAudience: "Peritos en Litigios y Abogados",
      priceDisplay: "Licencia Profesional: $210.000 COP",
      priceValue: 210000,
      format: "Archivo editable .DOCX",
      summary: "Formato riguroso blindado procesalmente para rendir dictámenes ante juzgados civiles, laborales y administrativos en Colombia.",
      deliverables: [
        "Cumplimiento explícito de los numerales del artículo 226 del CGP",
        "Manifestación jurada de idoneidad e imparcialidad estandarizada",
        "Sección para objeciones previas y fundamentos técnicos irrebatibles",
        "Checklist de formalidades y requisitos antes de la audiencia"
      ],
      popular: false
    },
    {
      id: "pack-ofertas-villavicencio-2026",
      audience: "avaluador",
      category: "ofertas-mercado",
      name: "Pack Ofertas de Mercado Depuradas: Villavicencio (Meta) 2026",
      badge: "3 Muestras 50001-U01 a U03",
      targetAudience: "Avaluadores RAA, Peritos y Analistas Inmobiliarios",
      priceDisplay: "Banco de Datos: $85.000 COP",
      priceValue: 85000,
      format: "3 Fichas PDF + Archivo KMZ con Fotos",
      summary: "3 Ofertas de mercado reales investigadas, depuradas y georreferenciadas bajo codificación DIVIPOLA (50001) en Comuna 4 (Abajamcito y Prados de Siberia). Con factor de negociación del 5%, valor residual de terreno ($/m²), fotos de fachada y estadística muestral (Media $1.137.819 /m², CV 3.20%).",
      deliverables: [
        "3 Fichas Técnicas individuales en PDF con cálculo de valor residual y factor de negociación",
        "Archivo KMZ georreferenciado con fotos de fachada incrustadas para Google Earth y QGIS",
        "Coordenadas GPS de precisión, folio y verificación telefónica de cada oferente",
        "Cumplimiento total de requisitos metodológicos de la Resolución IGAC 620 de 2008 y 0941 de 2026",
        "Licencia de uso pericial para incorporar como anexo formal en tus informes periciales"
      ],
      samplePreview: {
        badge: "VISTA PREVIA PROTEGIDA",
        title: "Oferta 50001-U01 · Villavicencio (Meta)",
        sector: "Comuna 4 · Calle 36A Sector Abajamcito",
        unitValue: "🔒 $ 1.096.485 /m² (Muestra Protegida)",
        type: "Casa urbana de 2 pisos (66 m² terreno)",
        factor: "Factor de Negociación: 5% investigado in situ",
        coords: "04°08'22.4\"N 73°35'19.1\"W (Villavicencio, Meta)",
        photoUrl: "assets/img/muestra_villavo_o1.jpg",
        pdfUrl: "assets/downloads/Ficha_Comercial_Villavicencio_O1.pdf"
      },
      popular: true
    },
    {
      id: "capa-catastral-urbana-villavicencio",
      audience: "avaluador",
      category: "ofertas-mercado",
      name: "Capa Catastral Vectorial Urbana: Villavicencio (Meta) 2026",
      badge: "142.264 Predios Urbanos",
      targetAudience: "Avaluadores Urbanos, Topógrafos y Peritos Catastrales",
      priceDisplay: "Cartografía SIG: $140.000 COP",
      priceValue: 140000,
      format: "Archivo KMZ (Formal 115k + Informal 27k) para Google Earth & QGIS",
      summary: "Cartografía predial vectorial del casco urbano completo de Villavicencio (Meta) con 115.035 predios formales y 27.229 predios informales delimitados con su código predial nacional oficial para verificación de linderos y colindancias.",
      deliverables: [
        "142.264 polígonos prediales vectoriales en formato KMZ (Capas Formal e Informal)",
        "Identificador de Código Predial Nacional (30 dígitos) por predio",
        "Compatibilidad nativa con Google Earth Pro, QGIS, ArcGIS y Global Mapper",
        "Visualización instantánea de forma, frente, fondo y colindantes",
        "Licencia de uso profesional para cartografía pericial"
      ],
      popular: false
    },
    {
      id: "capa-catastral-rural-villavicencio",
      audience: "avaluador",
      category: "ofertas-mercado",
      name: "Capa Catastral Vectorial Rural: Villavicencio (Meta) 2026",
      badge: "34.279 Predios Rurales",
      targetAudience: "Avaluadores Rurales, Agrónomos e Ingenieros Catastrales",
      priceDisplay: "Cartografía SIG: $130.000 COP",
      priceValue: 130000,
      format: "Archivo KMZ (Formal 26k + Informal 8.2k) para Google Earth & QGIS",
      summary: "Polígonos catastrales vectoriales de 26.039 predios rurales formales y 8.240 predios rurales informales en la jurisdicción del municipio de Villavicencio (Meta) para inspección técnica pericial, servidumbres y análisis de linderos.",
      deliverables: [
        "34.279 polígonos de predios rurales en formato KMZ (Capas Formal e Informal)",
        "Códigos catastrales oficiales nacionales por predio",
        "Ideal para verificación de accesos viales, ríos, rondas y vecinos",
        "Carga rápida en celular mediante Google Earth Mobile para trabajo en campo",
        "Licencia de uso pericial ilimitada para tus avalúos"
      ],
      popular: false
    },
    {
      id: "matriz-homogeneizacion-pro",
      audience: "avaluador",
      category: "calculadoras-matrices",
      name: "Matriz Pro de Homogeneización de Mercado",
      badge: "Excel Automatizado RAA",
      targetAudience: "Avaluadores, Inmobiliarias y Analistas",
      priceDisplay: "Herramienta Pericial: $160.000 COP",
      priceValue: 160000,
      format: "Libro Excel con Macros y Validación",
      summary: "Matriz estadística automatizada con factores de negociación, fondo/frente, área, estrato, acabados y coeficiente de variación de Pearson.",
      deliverables: [
        "Cálculo automático de media aritmética, desviación estándar y CV (%)",
        "Filtro automático de valores atípicos (Criterio de Chauvenet y Chauvenet-Dixon)",
        "Ajuste por factor de negociación documentado en mercado local",
        "Gráfico de dispersión y recta de regresión lineal generados en 1 clic",
        "Exportación de tabla resumen lista para pegar en el informe Word"
      ],
      popular: true
    },
    {
      id: "calculadora-depreciacion-ross",
      audience: "avaluador",
      category: "calculadoras-matrices",
      name: "Calculadora de Depreciación Ross-Heidecke + Fitto",
      badge: "Excel Automatizado",
      targetAudience: "Tasadores e Ingenieros Civiles",
      priceDisplay: "Herramienta Pericial: $120.000 COP",
      priceValue: 120000,
      format: "Plantilla de Cálculo Dinámico",
      summary: "Calculadora de costo de reposición a nuevo (CRN) con coeficientes exactos de edad y conservación según la tabla alemana de Heidecke.",
      deliverables: [
        "Catálogo de los 9 estados de conservación estandarizados",
        "Cálculo automático del porcentaje de depreciación acumulada",
        "Ajuste por mantenimiento y obsolescencia funcional",
        "Desglose por ítems constructivos (estructura, mampostería, acabados)"
      ],
      popular: false
    },
    {
      id: "pack-ofertas-villavicencio-2026",
      audience: "avaluador",
      category: "ofertas-mercado",
      name: "Pack Ofertas de Mercado Depuradas: Villavicencio (Meta) 2026",
      badge: "3 Muestras 50001-U01 a U03",
      targetAudience: "Avaluadores RAA, Peritos y Analistas Inmobiliarios",
      priceDisplay: "Banco de Datos: $85.000 COP",
      priceValue: 85000,
      format: "3 Fichas PDF + Archivo KMZ con Fotos",
      summary: "3 Ofertas de mercado reales investigadas, depuradas y georreferenciadas bajo codificación DIVIPOLA (50001) en Comuna 4 (Abajamcito y Prados de Siberia). Con factor de negociación del 5%, valor residual de terreno ($/m²), fotos de fachada y estadística muestral (Media $1.137.819 /m², CV 3.20%).",
      deliverables: [
        "3 Fichas Técnicas individuales en PDF con cálculo de valor residual y factor de negociación",
        "Archivo KMZ georreferenciado con fotos de fachada incrustadas para Google Earth y QGIS",
        "Coordenadas GPS de precisión, folio y verificación telefónica de cada oferente",
        "Cumplimiento total de requisitos metodológicos de la Resolución IGAC 620 de 2008 y 0941 de 2026",
        "Licencia de uso pericial para incorporar como anexo formal en tus informes periciales"
      ],
      samplePreview: {
        badge: "VISTA PREVIA PROTEGIDA",
        title: "Oferta 50001-U01 · Villavicencio (Meta)",
        sector: "Comuna 4 · Calle 36A Sector Abajamcito",
        unitValue: "🔒 $ 1.096.485 /m² (Muestra Protegida)",
        type: "Casa urbana de 2 pisos (66 m² terreno)",
        factor: "Factor de Negociación: 5% investigado in situ",
        coords: "04°08'22.4\"N 73°35'19.1\"W (Villavicencio, Meta)",
        photoUrl: "assets/img/muestra_villavo_o1.jpg",
        pdfUrl: "assets/downloads/Ficha_Comercial_Villavicencio_O1.pdf"
      },
      popular: true
    },
    {
      id: "capa-catastral-urbana-villavicencio",
      audience: "avaluador",
      category: "ofertas-mercado",
      name: "Capa Catastral Vectorial Urbana: Villavicencio (Meta) 2026",
      badge: "142.264 Predios Urbanos",
      targetAudience: "Avaluadores Urbanos, Topógrafos y Peritos Catastrales",
      priceDisplay: "Cartografía SIG: $140.000 COP",
      priceValue: 140000,
      format: "Archivo KMZ (Formal 115k + Informal 27k) para Google Earth & QGIS",
      summary: "Cartografía predial vectorial del casco urbano completo de Villavicencio (Meta) con 115.035 predios formales y 27.229 predios informales delimitados con su código predial nacional oficial para verificación de linderos y colindancias.",
      deliverables: [
        "142.264 polígonos prediales vectoriales en formato KMZ (Capas Formal e Informal)",
        "Identificador de Código Predial Nacional (30 dígitos) por predio",
        "Compatibilidad nativa con Google Earth Pro, QGIS, ArcGIS y Global Mapper",
        "Visualización instantánea de forma, frente, fondo y colindantes",
        "Licencia de uso profesional para cartografía pericial"
      ],
      popular: false
    },
    {
      id: "capa-catastral-rural-villavicencio",
      audience: "avaluador",
      category: "ofertas-mercado",
      name: "Capa Catastral Vectorial Rural: Villavicencio (Meta) 2026",
      badge: "34.279 Predios Rurales",
      targetAudience: "Avaluadores Rurales, Agrónomos e Ingenieros Catastrales",
      priceDisplay: "Cartografía SIG: $130.000 COP",
      priceValue: 130000,
      format: "Archivo KMZ (Formal 26k + Informal 8.2k) para Google Earth & QGIS",
      summary: "Polígonos catastrales vectoriales de 26.039 predios rurales formales y 8.240 predios rurales informales en la jurisdicción del municipio de Villavicencio (Meta) para inspección técnica pericial, servidumbres y análisis de linderos.",
      deliverables: [
        "34.279 polígonos de predios rurales en formato KMZ (Capas Formal e Informal)",
        "Códigos catastrales oficiales nacionales por predio",
        "Ideal para verificación de accesos viales, ríos, rondas y vecinos",
        "Carga rápida en celular mediante Google Earth Mobile para trabajo en campo",
        "Licencia de uso pericial ilimitada para tus avalúos"
      ],
      popular: false
    },
    {
      id: "matriz-presupuestos-costo",
      audience: "avaluador",
      category: "calculadoras-matrices",
      name: "Matriz de Costo de Reposición y APU de Construcción",
      badge: "Costos Meta & Llanos 2026",
      targetAudience: "Constructores, Arquitectos y Peritos",
      priceDisplay: "Herramienta Pericial: $190.000 COP",
      priceValue: 190000,
      format: "Base de Datos de Precios Unitarios",
      summary: "Base de datos actualizada con precios unitarios de mano de obra y materiales para Villavicencio y Meta, con cálculo directo de m² construido.",
      deliverables: [
        "120+ APUs de construcción tradicional y liviana para los Llanos",
        "Factor de AIU (Administración, Imprevistos, Utilidades) configurable",
        "Tipologías constructivas tipo VIS, media, alta y campestre",
        "Actualizado con costos de fletes y materiales vigentes para 2026"
      ],
      popular: false
    },
    {
      id: "pack-ofertas-villavicencio-2026",
      audience: "avaluador",
      category: "ofertas-mercado",
      name: "Pack Ofertas de Mercado Depuradas: Villavicencio (Meta) 2026",
      badge: "3 Muestras 50001-U01 a U03",
      targetAudience: "Avaluadores RAA, Peritos y Analistas Inmobiliarios",
      priceDisplay: "Banco de Datos: $85.000 COP",
      priceValue: 85000,
      format: "3 Fichas PDF + Archivo KMZ con Fotos",
      summary: "3 Ofertas de mercado reales investigadas, depuradas y georreferenciadas bajo codificación DIVIPOLA (50001) en Comuna 4 (Abajamcito y Prados de Siberia). Con factor de negociación del 5%, valor residual de terreno ($/m²), fotos de fachada y estadística muestral (Media $1.137.819 /m², CV 3.20%).",
      deliverables: [
        "3 Fichas Técnicas individuales en PDF con cálculo de valor residual y factor de negociación",
        "Archivo KMZ georreferenciado con fotos de fachada incrustadas para Google Earth y QGIS",
        "Coordenadas GPS de precisión, folio y verificación telefónica de cada oferente",
        "Cumplimiento total de requisitos metodológicos de la Resolución IGAC 620 de 2008 y 0941 de 2026",
        "Licencia de uso pericial para incorporar como anexo formal en tus informes periciales"
      ],
      samplePreview: {
        badge: "VISTA PREVIA PROTEGIDA",
        title: "Oferta 50001-U01 · Villavicencio (Meta)",
        sector: "Comuna 4 · Calle 36A Sector Abajamcito",
        unitValue: "🔒 $ 1.096.485 /m² (Muestra Protegida)",
        type: "Casa urbana de 2 pisos (66 m² terreno)",
        factor: "Factor de Negociación: 5% investigado in situ",
        coords: "04°08'22.4\"N 73°35'19.1\"W (Villavicencio, Meta)",
        photoUrl: "assets/img/muestra_villavo_o1.jpg",
        pdfUrl: "assets/downloads/Ficha_Comercial_Villavicencio_O1.pdf"
      },
      popular: true
    },
    {
      id: "capa-catastral-urbana-villavicencio",
      audience: "avaluador",
      category: "ofertas-mercado",
      name: "Capa Catastral Vectorial Urbana: Villavicencio (Meta) 2026",
      badge: "142.264 Predios Urbanos",
      targetAudience: "Avaluadores Urbanos, Topógrafos y Peritos Catastrales",
      priceDisplay: "Cartografía SIG: $140.000 COP",
      priceValue: 140000,
      format: "Archivo KMZ (Formal 115k + Informal 27k) para Google Earth & QGIS",
      summary: "Cartografía predial vectorial del casco urbano completo de Villavicencio (Meta) con 115.035 predios formales y 27.229 predios informales delimitados con su código predial nacional oficial para verificación de linderos y colindancias.",
      deliverables: [
        "142.264 polígonos prediales vectoriales en formato KMZ (Capas Formal e Informal)",
        "Identificador de Código Predial Nacional (30 dígitos) por predio",
        "Compatibilidad nativa con Google Earth Pro, QGIS, ArcGIS y Global Mapper",
        "Visualización instantánea de forma, frente, fondo y colindantes",
        "Licencia de uso profesional para cartografía pericial"
      ],
      popular: false
    },
    {
      id: "capa-catastral-rural-villavicencio",
      audience: "avaluador",
      category: "ofertas-mercado",
      name: "Capa Catastral Vectorial Rural: Villavicencio (Meta) 2026",
      badge: "34.279 Predios Rurales",
      targetAudience: "Avaluadores Rurales, Agrónomos e Ingenieros Catastrales",
      priceDisplay: "Cartografía SIG: $130.000 COP",
      priceValue: 130000,
      format: "Archivo KMZ (Formal 26k + Informal 8.2k) para Google Earth & QGIS",
      summary: "Polígonos catastrales vectoriales de 26.039 predios rurales formales y 8.240 predios rurales informales en la jurisdicción del municipio de Villavicencio (Meta) para inspección técnica pericial, servidumbres y análisis de linderos.",
      deliverables: [
        "34.279 polígonos de predios rurales en formato KMZ (Capas Formal e Informal)",
        "Códigos catastrales oficiales nacionales por predio",
        "Ideal para verificación de accesos viales, ríos, rondas y vecinos",
        "Carga rápida en celular mediante Google Earth Mobile para trabajo en campo",
        "Licencia de uso pericial ilimitada para tus avalúos"
      ],
      popular: false
    },
    {
      id: "kit-inspeccion-campo",
      audience: "avaluador",
      category: "kits-sig",
      name: "Kit Técnico de Inspección Predial de Campo",
      badge: "Formatos Imprimibles y Móviles",
      targetAudience: "Avaluadores de Campo y Topógrafos",
      priceDisplay: "Kit Pericial: $95.000 COP",
      priceValue: 95000,
      format: "PDF Interactivo + Formularios Móviles",
      summary: "Formularios estandarizados de recolección de datos en sitio: fichas de levantamiento, checklist de acabados y libreta de campo.",
      deliverables: [
        "Ficha técnica de inspección para predios urbanos y de propiedad horizontal",
        "Ficha de campo para predios rurales con inventario de fuentes de agua",
        "Plantilla para toma de coordenadas GNSS con registro fotográfico",
        "Checklist de 40 puntos para no olvidar ningún detalle en la visita"
      ],
      popular: false
    },
    {
      id: "pack-ofertas-villavicencio-2026",
      audience: "avaluador",
      category: "ofertas-mercado",
      name: "Pack Ofertas de Mercado Depuradas: Villavicencio (Meta) 2026",
      badge: "3 Muestras 50001-U01 a U03",
      targetAudience: "Avaluadores RAA, Peritos y Analistas Inmobiliarios",
      priceDisplay: "Banco de Datos: $85.000 COP",
      priceValue: 85000,
      format: "3 Fichas PDF + Archivo KMZ con Fotos",
      summary: "3 Ofertas de mercado reales investigadas, depuradas y georreferenciadas bajo codificación DIVIPOLA (50001) en Comuna 4 (Abajamcito y Prados de Siberia). Con factor de negociación del 5%, valor residual de terreno ($/m²), fotos de fachada y estadística muestral (Media $1.137.819 /m², CV 3.20%).",
      deliverables: [
        "3 Fichas Técnicas individuales en PDF con cálculo de valor residual y factor de negociación",
        "Archivo KMZ georreferenciado con fotos de fachada incrustadas para Google Earth y QGIS",
        "Coordenadas GPS de precisión, folio y verificación telefónica de cada oferente",
        "Cumplimiento total de requisitos metodológicos de la Resolución IGAC 620 de 2008 y 0941 de 2026",
        "Licencia de uso pericial para incorporar como anexo formal en tus informes periciales"
      ],
      samplePreview: {
        badge: "VISTA PREVIA PROTEGIDA",
        title: "Oferta 50001-U01 · Villavicencio (Meta)",
        sector: "Comuna 4 · Calle 36A Sector Abajamcito",
        unitValue: "🔒 $ 1.096.485 /m² (Muestra Protegida)",
        type: "Casa urbana de 2 pisos (66 m² terreno)",
        factor: "Factor de Negociación: 5% investigado in situ",
        coords: "04°08'22.4\"N 73°35'19.1\"W (Villavicencio, Meta)",
        photoUrl: "assets/img/muestra_villavo_o1.jpg",
        pdfUrl: "assets/downloads/Ficha_Comercial_Villavicencio_O1.pdf"
      },
      popular: true
    },
    {
      id: "capa-catastral-urbana-villavicencio",
      audience: "avaluador",
      category: "ofertas-mercado",
      name: "Capa Catastral Vectorial Urbana: Villavicencio (Meta) 2026",
      badge: "142.264 Predios Urbanos",
      targetAudience: "Avaluadores Urbanos, Topógrafos y Peritos Catastrales",
      priceDisplay: "Cartografía SIG: $140.000 COP",
      priceValue: 140000,
      format: "Archivo KMZ (Formal 115k + Informal 27k) para Google Earth & QGIS",
      summary: "Cartografía predial vectorial del casco urbano completo de Villavicencio (Meta) con 115.035 predios formales y 27.229 predios informales delimitados con su código predial nacional oficial para verificación de linderos y colindancias.",
      deliverables: [
        "142.264 polígonos prediales vectoriales en formato KMZ (Capas Formal e Informal)",
        "Identificador de Código Predial Nacional (30 dígitos) por predio",
        "Compatibilidad nativa con Google Earth Pro, QGIS, ArcGIS y Global Mapper",
        "Visualización instantánea de forma, frente, fondo y colindantes",
        "Licencia de uso profesional para cartografía pericial"
      ],
      popular: false
    },
    {
      id: "capa-catastral-rural-villavicencio",
      audience: "avaluador",
      category: "ofertas-mercado",
      name: "Capa Catastral Vectorial Rural: Villavicencio (Meta) 2026",
      badge: "34.279 Predios Rurales",
      targetAudience: "Avaluadores Rurales, Agrónomos e Ingenieros Catastrales",
      priceDisplay: "Cartografía SIG: $130.000 COP",
      priceValue: 130000,
      format: "Archivo KMZ (Formal 26k + Informal 8.2k) para Google Earth & QGIS",
      summary: "Polígonos catastrales vectoriales de 26.039 predios rurales formales y 8.240 predios rurales informales en la jurisdicción del municipio de Villavicencio (Meta) para inspección técnica pericial, servidumbres y análisis de linderos.",
      deliverables: [
        "34.279 polígonos de predios rurales en formato KMZ (Capas Formal e Informal)",
        "Códigos catastrales oficiales nacionales por predio",
        "Ideal para verificación de accesos viales, ríos, rondas y vecinos",
        "Carga rápida en celular mediante Google Earth Mobile para trabajo en campo",
        "Licencia de uso pericial ilimitada para tus avalúos"
      ],
      popular: false
    },
    {
      id: "kit-fichas-mercado",
      audience: "avaluador",
      category: "kits-sig",
      name: "Kit de Fichas de Recolección de Ofertas de Mercado",
      badge: "Inteligencia de Datos",
      targetAudience: "Investigadores Inmobiliarios y Peritos",
      priceDisplay: "Kit Pericial: $85.000 COP",
      priceValue: 85000,
      format: "Formatos digitales y hojas de control",
      summary: "Guía técnica para indagar ofertas reales: preguntas clave para inmobiliarias, verificación de precios de cierre y trazabilidad de contactos.",
      deliverables: [
        "Guión telefónico y presencial de indagación de factor de negociación",
        "Ficha individual de homologación con evidencia (fotos, enlace, teléfono)",
        "Control de registro de oferta para blindaje ante auditorías bancarias",
        "Protocolo para descarte de ofertas infladas o especulativas"
      ],
      popular: false
    },
    {
      id: "pack-ofertas-villavicencio-2026",
      audience: "avaluador",
      category: "ofertas-mercado",
      name: "Pack Ofertas de Mercado Depuradas: Villavicencio (Meta) 2026",
      badge: "3 Muestras 50001-U01 a U03",
      targetAudience: "Avaluadores RAA, Peritos y Analistas Inmobiliarios",
      priceDisplay: "Banco de Datos: $85.000 COP",
      priceValue: 85000,
      format: "3 Fichas PDF + Archivo KMZ con Fotos",
      summary: "3 Ofertas de mercado reales investigadas, depuradas y georreferenciadas bajo codificación DIVIPOLA (50001) en Comuna 4 (Abajamcito y Prados de Siberia). Con factor de negociación del 5%, valor residual de terreno ($/m²), fotos de fachada y estadística muestral (Media $1.137.819 /m², CV 3.20%).",
      deliverables: [
        "3 Fichas Técnicas individuales en PDF con cálculo de valor residual y factor de negociación",
        "Archivo KMZ georreferenciado con fotos de fachada incrustadas para Google Earth y QGIS",
        "Coordenadas GPS de precisión, folio y verificación telefónica de cada oferente",
        "Cumplimiento total de requisitos metodológicos de la Resolución IGAC 620 de 2008 y 0941 de 2026",
        "Licencia de uso pericial para incorporar como anexo formal en tus informes periciales"
      ],
      samplePreview: {
        badge: "VISTA PREVIA PROTEGIDA",
        title: "Oferta 50001-U01 · Villavicencio (Meta)",
        sector: "Comuna 4 · Calle 36A Sector Abajamcito",
        unitValue: "🔒 $ 1.096.485 /m² (Muestra Protegida)",
        type: "Casa urbana de 2 pisos (66 m² terreno)",
        factor: "Factor de Negociación: 5% investigado in situ",
        coords: "04°08'22.4\"N 73°35'19.1\"W (Villavicencio, Meta)",
        photoUrl: "assets/img/muestra_villavo_o1.jpg",
        pdfUrl: "assets/downloads/Ficha_Comercial_Villavicencio_O1.pdf"
      },
      popular: true
    },
    {
      id: "capa-catastral-urbana-villavicencio",
      audience: "avaluador",
      category: "ofertas-mercado",
      name: "Capa Catastral Vectorial Urbana: Villavicencio (Meta) 2026",
      badge: "142.264 Predios Urbanos",
      targetAudience: "Avaluadores Urbanos, Topógrafos y Peritos Catastrales",
      priceDisplay: "Cartografía SIG: $140.000 COP",
      priceValue: 140000,
      format: "Archivo KMZ (Formal 115k + Informal 27k) para Google Earth & QGIS",
      summary: "Cartografía predial vectorial del casco urbano completo de Villavicencio (Meta) con 115.035 predios formales y 27.229 predios informales delimitados con su código predial nacional oficial para verificación de linderos y colindancias.",
      deliverables: [
        "142.264 polígonos prediales vectoriales en formato KMZ (Capas Formal e Informal)",
        "Identificador de Código Predial Nacional (30 dígitos) por predio",
        "Compatibilidad nativa con Google Earth Pro, QGIS, ArcGIS y Global Mapper",
        "Visualización instantánea de forma, frente, fondo y colindantes",
        "Licencia de uso profesional para cartografía pericial"
      ],
      popular: false
    },
    {
      id: "capa-catastral-rural-villavicencio",
      audience: "avaluador",
      category: "ofertas-mercado",
      name: "Capa Catastral Vectorial Rural: Villavicencio (Meta) 2026",
      badge: "34.279 Predios Rurales",
      targetAudience: "Avaluadores Rurales, Agrónomos e Ingenieros Catastrales",
      priceDisplay: "Cartografía SIG: $130.000 COP",
      priceValue: 130000,
      format: "Archivo KMZ (Formal 26k + Informal 8.2k) para Google Earth & QGIS",
      summary: "Polígonos catastrales vectoriales de 26.039 predios rurales formales y 8.240 predios rurales informales en la jurisdicción del municipio de Villavicencio (Meta) para inspección técnica pericial, servidumbres y análisis de linderos.",
      deliverables: [
        "34.279 polígonos de predios rurales en formato KMZ (Capas Formal e Informal)",
        "Códigos catastrales oficiales nacionales por predio",
        "Ideal para verificación de accesos viales, ríos, rondas y vecinos",
        "Carga rápida en celular mediante Google Earth Mobile para trabajo en campo",
        "Licencia de uso pericial ilimitada para tus avalúos"
      ],
      popular: false
    },
    {
      id: "modelo-cartografico-qgis",
      audience: "avaluador",
      category: "kits-sig",
      name: "Modelo Cartográfico Predial para QGIS (Plantilla .QGZ)",
      badge: "Proyecto SIG Listo",
      targetAudience: "Topógrafos, Ingenieros y Geógrafos",
      priceDisplay: "Licencia Cartográfica: $250.000 COP",
      priceValue: 250000,
      format: "Proyecto QGIS con simbología y capas",
      summary: "Proyecto base de QGIS con capas oficiales de Colombia (WMS IGAC, catastro, curvas de nivel) y plantilla de composición de plano para avalúo.",
      deliverables: [
        "Conexiones directas preconfiguradas a servidores WMS/WFS oficiales",
        "Compositor de impresión con membrete institucional configurable",
        "Estilos de línea para linderos, rondas hídricas y vías normalizados",
        "Video tutorial de 20 min para importar coordenadas y generar el plano"
      ],
      popular: true
    }
  ],

  // Real Evaluated Properties Portfolio
  portfolioCases: [
    {
      id: "caso-01",
      title: "Hacienda El Palmar — Avalúo Rural & Delimitación de Ronda",
      category: "Rural / Agropecuario",
      location: "San Martín, Meta",
      coords: "03°41'22\"N 73°41'55\"W",
      area: "340 Hectáreas",
      methodology: "Comparación de Mercado + Renta Potencial",
      purpose: "Garantía Bancaria Hipotecaria",
      image: "assets/img/drone_rural_01.jpg",
      badge: "Vuelo Dron RTK",
      description: "Levantamiento aerofotogramétrico de alta resolución, determinación de capacidad agrológica del suelo y tasación de infraestructura de corrales y pasturas mejoradas."
    },
    {
      id: "caso-02",
      title: "Finca Ecoturística Los Guayacanes",
      category: "Rural / Conservación",
      location: "Restrepo, Meta",
      coords: "04°15'30\"N 73°34'12\"W",
      area: "48 Hectáreas",
      methodology: "Costo de Reposición + Comparación",
      purpose: "Estructuración de Inversión",
      image: "assets/img/drone_rural_02.jpg",
      badge: "Afectación Ambiental",
      description: "Delimitación de áreas de preservación de bosque nativo, zona de amortiguamiento y valoración comercial de cabañas de recreo y fuentes hídricas."
    },
    {
      id: "caso-03",
      title: "Torre Empresarial Aklia & Locales Comerciales",
      category: "Comercial / PH",
      location: "Villavicencio, Meta (Barrio Barzal)",
      coords: "04°08'50\"N 73°38'15\"W",
      area: "4.200 m² construidos",
      methodology: "Flujo de Caja Descontado + Mercado",
      purpose: "NIIF / Estados Financieros",
      image: "assets/img/facade_commercial.jpg",
      badge: "Propiedad Horizontal",
      description: "Valoración de locales en planta baja, oficinas ejecutivas y sótanos de parqueadero. Homogeneización de rentas corporativas del sector corporativo."
    },
    {
      id: "caso-04",
      title: "Predio Campestre El Mirador del Llano",
      category: "Campestre / Loteo",
      location: "Acacías, Meta",
      coords: "03°59'18\"N 73°45'40\"W",
      area: "12.500 m²",
      methodology: "Residual Dinámico de Desarrollo",
      purpose: "Partición Hereditaria",
      image: "assets/img/estate_gate.jpg",
      badge: "Viabilidad POT",
      description: "Evaluación de parcelación con acceso a vía pavimentada, portal de acceso en mampostería, servicios públicos y cálculo de rentabilidad para desarrollador."
    },
    {
      id: "caso-05",
      title: "Apartamento Penthouse en Edificio Los Cedros",
      category: "Residencial Urbano",
      location: "Villavicencio, Meta (Trapiche)",
      coords: "04°07'45\"N 73°36'50\"W",
      area: "192 m² + 40 m² terraza",
      methodology: "Comparación de Mercado Homogeneizada",
      purpose: "Compraventa Segura",
      image: "assets/img/interior_residential.jpg",
      badge: "Acabados Alta Gama",
      description: "Inspección técnica detallada de acabados, estado de carpintería y ductos hidrosanitarios. Determinación del valor unitario exacto por metro cuadrado."
    },
    {
      id: "caso-06",
      title: "Corredor de Servidumbre y Faja Vial Meta",
      category: "Infraestructura",
      location: "Villavicencio - Puerto López",
      coords: "04°05'10\"N 73°25'00\"W",
      area: "18.4 km lineales",
      methodology: "Daño Emergente y Lucro Cesante",
      purpose: "Expropiación Concertada",
      image: "assets/img/drone_rural_03.jpg",
      badge: "Peritaje Judicial",
      description: "Determinación de indemnizaciones por paso de redes de alta tensión y ampliación de doble calzada con afectación en predios privados."
    }
  ]
};

// Aliases for compatibility
LONJA_DATA.dataLonjaProducts = LONJA_DATA.catalogProducts;
LONJA_DATA.avaluappProducts = LONJA_DATA.catalogProducts;

// Expose globally
window.LONJA_DATA = LONJA_DATA;
