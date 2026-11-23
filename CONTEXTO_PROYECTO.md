# 🧭 CONTEXTO GENERAL DEL PROYECTO · LONJA DE AVALÚOS DEL META S.A.S.
> **Documento de Contexto Maestro y Especificación Técnica**  
> *Lectura obligatoria para cualquier agente de IA o desarrollador antes de realizar tareas, modificaciones o adiciones en este proyecto.*

---

## 1. 🏛️ Identidad Corporativa y Marco Legal

- **Razón Social**: LONJA DE AVALÚOS DEL META S.A.S.
- **Nombre Comercial**: Lonja de Avalúos del Meta / DataLonja
- **NIT**: `901.482.391-4`
- **Registro Abierto de Avaluadores (RAA)**: `AVAL-META-2026-CO`
- **Marco Normativo Vigente**:
  - **Ley 1673 de 2013**: Régimen del Avaluador en Colombia y autorregulación pericial.
  - **Decreto 556 de 2014**: Reglamentario del ejercicio del avaluador y registro nacional.
  - **Resolución IGAC 620 de 2008**: Metodologías periciales oficiales para avalúos comerciales y de servidumbres.
  - **Normas Internacionales**: NIIF / IFRS 13 (Medición del Valor Razonable) y estándares IVSC (*International Valuation Standards Council*).
  - **Código General del Proceso (CGP)**: Artículo 226 (Dictamen pericial y contradicción en juicio).
- **Sede Principal**: Calle 38 # 31-20, Edificio Barzal Empresarial, Villavicencio, Meta, Colombia.
- **Canales Oficiales**:
  - **WhatsApp Directo**: `+57 312 366 1758` (`573123661758`)
  - **Correo Electrónico**: `contacto@lonjadeavaluosdelmeta.com`
  - **Sitio Web Oficial**: `https://lonjadeavaluosdelmeta.com/`
  - **Despliegue Activo en Hostinger (Staging / Producción)**: `https://lightblue-eagle-832588.hostingersite.com/`
  - **Claves Maestras de Prueba y Demostración**: `LONJA2026` / `GRANADA2026`

---

## 2. 🎨 Dirección de Arte, Estilo Visual y Filosofía de Diseño

El sitio está estructurado bajo la filosofía de **"Precisión Arquitectónica & Transparencia Radical"**, con una estética editorial de periódico financiero internacional combinada con brutalismo suizo contemporáneo:

- **Paleta de Color Institucional**:
  - Fondo Maestro: Hueso / Off-White cálido (`#F7F6F2`).
  - Tinta Tipográfica / Fondo Dark: Negro Grafito Carbón (`#121212`).
  - Verde Cobre Oxidado: `#2C4A3E` (Identidad institucional de lonja pericial y botones CTA secundarios).
  - Azul Marino Corporativo: `#0C2F5A` (Autoridad bancaria, jurídica y títulos institucionales).
  - Terracota / Ladrillo Llanero: `#8E5B4C` (Acentos periciales, sellos y detalles de tierra).
  - Esmeralda / Éxito: `#10B981` / `#059669` (Indicadores de confianza, badges de éxito y cotizaciones).
- **Tipografías**:
  - `font-display` (*Montserrat* 600-900 con tracking `-0.025em`): Titulares con contundencia geométrica y carácter PropTech.
  - `font-sans` (*Plus Jakarta Sans* & *Inter*): Cuerpo de texto editorial, alta legibilidad para tablas y direcciones.
  - `font-mono-tech` (*JetBrains Mono*): Coordenadas GPS, folios de matrícula inmobiliaria, metros cuadrados y cifras monetarias.
- **Elementos Gráficos Distintivos**:
  - Retícula cuadriculada suave de plano cartográfico (`grid-background`).
  - Puntos de mira (*crosshairs* `+`) en esquinas de contenedores.
  - Marcos de alto contraste con bordes finos de 1px a 2px.

---

## 3. 📂 Arquitectura del Directorio y Archivos del Repositorio

```
/Volumes/ZULMA G/La lonja /
│
├── index.html                      # Página principal única (Single Page Application institucional)
├── package.json                    # Metadata del proyecto y scripts locales (npm start / npx serve)
├── README.md                       # Documentación ejecutiva del diseño y características
├── CONTEXTO_PROYECTO.md            # [ESTE ARCHIVO] Contexto técnico y operativo integral
├── robots.txt                      # Directivas para rastreadores de motores de búsqueda
│
├── assets/
│   ├── css/                        # Estilos CSS complementarios y utilitarios
│   ├── js/
│   │   ├── data.js                 # MODELO DE DATOS CENTRAL (LONJA_DATA): catálogo, pilares, etc.
│   │   └── main.js                 # LÓGICA DE INTERACCIÓN: animaciones, simulador, catálogo, modales
│   └── img/                        # Recursos gráficos auxiliares
│
├── fotos/                          # Banco fotográfico de inspecciones periciales reales en el Meta
│   ├── *.jpg                       # Fincas en Restrepo, San Martín, Torre Aklia, corredores, etc.
│   └── fotos.7z                    # Respaldo comprimido de fotografías de inspección
│
├── ofertas de mercado/             # NUEVO ACTIVO: Marketplace y banco de datos periciales
│   ├── Ficha comercial O1.pdf      # Ficha técnica depurada de oferta de mercado (Granada, Meta)
│   ├── Ficha comercial O2.pdf      # Ficha técnica depurada O2
│   ├── Ficha comercial O3.pdf      # Ficha técnica depurada O3
│   ├── Ficha comercial O4.pdf      # Ficha técnica depurada O4
│   ├── Ficha comercial O5.pdf      # Ficha técnica depurada O5
│   ├── Ficha comercial O6.pdf      # Ficha técnica depurada O6
│   ├── Ofertas de mercado (puntos) - FICHA COMERCIAL.kmz  # 6 puntos georreferenciados + fotos + HTML
│   ├── R_TERRENO_GRANADA_2026.kmz  # Capa vectorial catastral rural Granada 2026 (8.662 predios)
│   └── U_TERRENO_GRANADA_2026.kmz  # Capa vectorial catastral urbana Granada 2026 (20.846 predios)
│
└── [Logos y Banners raíz]          # lonja_banner_full.jpg, lonja_logo_main.png, intro_master.jpg, etc.
```

---

## 4. ⚙️ Arquitectura Técnica y Funcionamiento del Código

### A. Desacoplamiento de Datos (`data.js`) y Lógica (`main.js`)
- **`assets/js/data.js`**: Es la **única fuente de la verdad (Single Source of Truth)**. Contiene el objeto global `window.LONJA_DATA`. Cualquier nuevo producto, servicio, testimonio, o parámetro de contacto **debe modificarse aquí**, nunca directamente quemado en el HTML.
- **`assets/js/main.js`**: Maneja la renderización dinámica y los eventos de usuario:
  1. `initIntroAnimation()`: Animación cinemática de escaneo láser (3 segundos) sobre ortofotomapa y migración suave del logotipo a la barra de navegación.
  2. `initRealtimeValuationSimulator()`: Simulador instantáneo de avalúo con factores econométricos por tipología y enlace a WhatsApp con datos pre-rellenados.
  3. `initDataLonjaCatalog()`: Sistema de catálogo con doble audiencia:
     - **Pestaña `Para Clientes & Propietarios`**: Servicios de avalúos certificados, compra segura, saneamiento, etc.
     - **Pestaña `Para Avaluadores & Peritos RAA`**: Herramientas técnicas de productividad (plantillas Word/Excel, matrices econométricas, modelos QGIS y ahora **Bancos de Ofertas de Mercado & Capas Catastrales KMZ**).
  4. `initHomogeneizacionInteractiveMatrix()`: Matriz viva en el navegador para calcular homogeneización de mercado con media aritmética y Coeficiente de Variación de Pearson (CV < 10%).
  5. `initCadastralDiagnostic()`: Asistente de un solo paso para consultar tipología predial por dirección o folio de matrícula.

---

## 5. 💡 Nuevo Modelo de Negocio: Venta de Ofertas de Mercado y Capas Catastrales a Avaluadores

### ¿Por qué esto es de altísimo valor para un avaluador?
En Colombia, la **Resolución IGAC 620 de 2008** y el **Decreto 556 de 2014** obligan al avaluador a fundamentar el método de comparación de mercado en muestras reales, investigadas, depuradas y con registro fotográfico.
- **El problema del avaluador**: Conseguir 6 ofertas confiables en un municipio fuera de su base (como Granada, San Martín o Puerto López) implica viajar, llamar decenas de carteles, pedir citas, tomar fotos, calcular el factor de negociación y calcular el valor residual del terreno. Esto cuesta entre **$300.000 y $600.000 COP en viáticos y 2 a 3 días de trabajo**.
- **La solución de la Lonja**: Entregarle en un solo clic las fichas ya depuradas con fotos, valores $/m², factores de negociación y el KMZ georreferenciado listo para Google Earth y QGIS, más la capa catastral completa del municipio.

### Estructura de Paquetes Comerciales Sugeridos

1. **Pack Ofertas de Mercado Depuradas (Municipio: Granada, Meta - 2026)**:
   - **Contenido**: 6 Fichas Comerciales en PDF de alta resolución + Archivo KMZ con los 6 puntos georreferenciados, fotos integradas y tablas de depuración económica.
   - **Precio sugerido**: `$95.000 COP` a `$120.000 COP`.
   - **Entregable**: Acceso a descarga inmediata del `.zip` con PDFs + KMZ.

2. **Capa Catastral Vectorial KMZ / KML (Granada Urbana o Rural)**:
   - **Contenido**:
     - *Opción Rural*: 8.662 polígonos prediales rurales con código predial nacional.
     - *Opción Urbana*: 20.846 polígonos prediales urbanos con código predial nacional.
   - **Precio sugerido**: `$140.000 COP` (por capa individual).
   - **Entregable**: Archivo KMZ optimizado para Google Earth Pro y QGIS.

3. **Combo Máster Territorial Granada 2026 (Ofertas + Capa Urbana + Capa Rural)**:
   - **Contenido**: Fichas O1-O6 en PDF + KMZ de ofertas + Capa Rural (8.662 predios) + Capa Urbana (20.846 predios) + Matriz de homogeneización en Excel pre-cargada con las 6 ofertas.
   - **Precio sugerido**: `$260.000 COP` (Ahorro del 30%).

4. **Pack Ofertas de Mercado Depuradas: Villavicencio (Meta) 2026**:
   - **Contenido**: 3 Fichas Comerciales depuradas en PDF (Comuna 4: sector Abajamcito y Prados de Siberia) + Archivo KMZ con puntos georreferenciados y fotos de fachada incrustadas.
   - **Estadística Muestra**: Media: `$1.137.819 /m²`, Coeficiente de Variación: `3,20%` (CV < 10% IGAC), Valor adoptado: `$1.138.000 /m²`.
   - **Precio sugerido**: `$85.000 COP`.
   - **Entregable**: `Pack_Ofertas_Villavicencio_2026.zip`.

5. **Capas Catastrales Vectoriales KMZ: Villavicencio (Meta) 2026**:
   - **Capa Urbana Completa (142.264 predios)**: Formal (115.035 predios) + Informal (27.229 predios).
   - **Capa Rural Completa (34.279 predios)**: Formal (26.039 predios) + Informal (8.240 predios).
   - **Total municipio**: **176.543 predios vectoriales** con NUPRE nacional de 30 dígitos.
   - **Precio sugerido**: Urbana `$140.000 COP`, Rural `$130.000 COP`.

6. **Combo Máster Territorial Villavicencio 2026 (Todo Incluido)**:
   - **Contenido**: 3 Fichas O1-O3 en PDF + KMZ de ofertas con fotos + Capa Urbana Formal e Informal + Capa Rural Formal e Informal + Licencia RAA Ley 1673.
   - **Precio sugerido**: `$290.000 COP`.
   - **Entregable**: `Combo_Master_Territorial_Villavicencio_2026.zip` (8.5 MB).

### Cómo se opera la venta en el sitio:
1. **En la web**: Se integra en la categoría `ofertas-mercado` dentro del catálogo para avaluadores de DataLonja.
2. **Visualización y "Ganchos" (Sneak Peek)**:
   - Se muestra la Ficha O1 como **muestra pública de baja resolución o ficha ejemplo** para demostrar la rigurosidad técnica.
   - Las demás fichas (O2 a O6) y las coordenadas exactas de oferentes se desbloquean tras la compra.
3. **Flujo de Pago**:
   - **Fase 1 (Inmediata / Cero fricción)**: Botón *"Adquirir Banco de Datos vía WhatsApp"* con mensaje pre-rellenado indicando el producto y código para transferencia por Bancolombia / Nequi / Daviplata.
   - **Fase 2 (Automatizada)**: Pasarela Wompi o ePayco con descarga digital automática del ZIP.

---

## 6. 🛠️ Protocolo y Comandos para Desarrollo y Previsualización

### Servidor Local
Para correr y validar el sitio en navegador:

```bash
# Navegar a la carpeta del proyecto (ojo con el espacio al final del nombre):
cd "/Volumes/ZULMA G/La lonja "

# Opción A: Servidor HTTP integrado de Python (Recomendado)
python3 -m http.server 8080

# Opción B: Con Node / npx
npx serve . -p 8080
```
Abrir en el navegador: `http://localhost:8080`.

### Reglas de Oro para Modificaciones
1. **No tocar datos en `index.html`**: Si se cambia un precio, título, teléfono o servicio, hacerlo en `assets/js/data.js`.
2. **Respetar la estética brutalista y editorial**: Mantener los badges con `font-mono-tech`, bordes finos, acentos de color institucionales y ausencia de gradientes chillones o estilos genéricos.
3. **Optimización de archivos para descarga**: Los archivos KMZ y PDFs que se vayan a descargar por usuarios deben estar comprimidos y ubicados en una subcarpeta limpia (por ejemplo `assets/downloads/` o `ofertas de mercado/`).
4. **Respetar la ruta con espacio**: La carpeta raíz tiene un espacio al final (`/Volumes/ZULMA G/La lonja `). En comandos de terminal, siempre entrecomillar la ruta.
