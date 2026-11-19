/**
 * LONJA DE AVALÚOS DEL META S.A.S.
 * Production Application Script
 * Art Direction: Architectural Precision & Radical Transparency
 */

document.addEventListener('DOMContentLoaded', () => {
  initStagingGatekeeper();
  initHeroSimulator();
  initDataLonjaCatalog();
  initHomogenizationCalculator();
  initPropertyLookup();
  initPortfolioGallery();
  initContactForm();
  initMobileMenu();
  lucide.createIcons();
});

/* ==========================================================================
   1. HERO LIVE TECHNICAL VALUATION SHEET SIMULATOR
   ========================================================================== */
function initHeroSimulator() {
  const propertyTypeSelect = document.getElementById('sim-prop-type');
  const sectorSelect = document.getElementById('sim-sector');
  const areaInput = document.getElementById('sim-area');
  const areaRange = document.getElementById('sim-area-range');
  const areaUnit = document.getElementById('sim-area-unit');
  const finishesRadios = document.querySelectorAll('input[name="sim-finish"]');
  
  // Displays
  const estimatedMin = document.getElementById('sim-val-min');
  const estimatedMax = document.getElementById('sim-val-max');
  const rentValDisplay = document.getElementById('sim-rent-val');
  const notarialValDisplay = document.getElementById('sim-notarial-val');
  const lonjaFeeDisplay = document.getElementById('sim-lonja-fee');
  const unitPrice = document.getElementById('sim-unit-price');
  const negFactor = document.getElementById('sim-neg-factor');
  const precisionIndex = document.getElementById('sim-precision');
  const latLongDisplay = document.getElementById('sim-coords');
  const whatsappQuoteBtn = document.getElementById('sim-whatsapp-btn');
  const simBarProp = document.getElementById('sim-bar-prop');
  const simBarNotary = document.getElementById('sim-bar-notary');
  const simBarLonja = document.getElementById('sim-bar-lonja');
  const simRatioLabel = document.getElementById('sim-ratio-label');

  if (!propertyTypeSelect || !areaInput) return;

  // Base pricing tables by sector and type (COP per m²) — Meta Regional + Cobertura Nacional
  const sectorData = {
    // 📍 Sede Principal — Meta & Orinoquía (Peritaje Especializado)
    'villavicencio-barzal': { name: "Villavicencio — Sector Barzal / Centro Médico", baseUrbano: 3400000, baseRural: 65000, coords: "04°08'40\"N 73°37'50\"W", pot: "Zona Central Mixta", notarialRate: 0.0235 },
    'villavicencio-trapiche': { name: "Villavicencio — Trapiche / Caudal Residencial PH", baseUrbano: 4200000, baseRural: 80000, coords: "04°07'45\"N 73°36'50\"W", pot: "Residencial PH Consolidado", notarialRate: 0.0235 },
    'villavicencio-buque': { name: "Villavicencio — Buque / Trapiche Campestre", baseUrbano: 4600000, baseRural: 85000, coords: "04°07'10\"N 73°36'15\"W", pot: "Residencial Alta Densidad / Campestre", notarialRate: 0.0235 },
    'restrepo': { name: "Restrepo — Corredor Campestre y Ecoturístico", baseUrbano: 2800000, baseRural: 52000, coords: "04°15'30\"N 73°34'12\"W", pot: "Zona Ecoturística y Campestre", notarialRate: 0.0235 },
    'acacias': { name: "Acacías — Casco Urbano y Agroindustrial", baseUrbano: 2600000, baseRural: 45000, coords: "03°59'18\"N 73°45'40\"W", pot: "Expansión Urbana / Agroindustrial", notarialRate: 0.0235 },
    'puerto-lopez': { name: "Puerto López — Altillanura y Fincas Extensivas", baseUrbano: 1900000, baseRural: 28000, coords: "04°05'10\"N 73°25'00\"W", pot: "Agroindustrial y Fincas Extensivas", notarialRate: 0.0235 },
    'san-martin': { name: "San Martín — Eje Ganadero y Agropecuario", baseUrbano: 1800000, baseRural: 25000, coords: "03°41'40\"N 73°41'50\"W", pot: "Zona Agropecuaria y Ganadera", notarialRate: 0.0235 },
    'cumaral': { name: "Cumaral — Zona Campestre y Descanso", baseUrbano: 2300000, baseRural: 38000, coords: "04°16'10\"N 73°29'15\"W", pot: "Corredor Turístico y Parcelaciones", notarialRate: 0.0235 },

    // 🇨🇴 Cobertura Nacional (Red Habimetro & Avalúo en Línea)
    'bogota-chico': { name: "Bogotá D.C. — Chicó / Rosales / Virrey", baseUrbano: 9200000, baseRural: 120000, coords: "04°40'45\"N 74°03'10\"W", pot: "Residencial Multifamiliar Estrato 6", notarialRate: 0.0250 },
    'bogota-cedritos': { name: "Bogotá D.C. — Cedritos / Usaquén", baseUrbano: 5800000, baseRural: 90000, coords: "04°43'20\"N 74°02'05\"W", pot: "Residencial Consolidado Estrato 4-5", notarialRate: 0.0250 },
    'bogota-colina': { name: "Bogotá D.C. — Colina Campestre / Suba", baseUrbano: 5200000, baseRural: 85000, coords: "04°44'10\"N 74°04'30\"W", pot: "Residencial Cerrado Estrato 4-5", notarialRate: 0.0250 },
    'bogota-salitre': { name: "Bogotá D.C. — Ciudad Salitre / Teusaquillo", baseUrbano: 6400000, baseRural: 95000, coords: "04°39'25\"N 74°06'50\"W", pot: "Centralidad Urbana Mixta", notarialRate: 0.0250 },
    'chia-sabana': { name: "Chía & Sabana Norte — Cundinamarca", baseUrbano: 4600000, baseRural: 110000, coords: "04°51'40\"N 74°03'30\"W", pot: "Campestre y Condominios Cerrados", notarialRate: 0.0245 },
    'medellin-poblado': { name: "Medellín — El Poblado / Milla de Oro", baseUrbano: 8500000, baseRural: 140000, coords: "06°12'35\"N 75°34'05\"W", pot: "Residencial Alta Densidad Estrato 6", notarialRate: 0.0240 },
    'medellin-laureles': { name: "Medellín — Laureles / Estadio", baseUrbano: 5600000, baseRural: 90000, coords: "06°14'45\"N 75°35'40\"W", pot: "Residencial Tradicional Estrato 5", notarialRate: 0.0240 },
    'envigado-aburra': { name: "Envigado & Sabaneta — Antioquia", baseUrbano: 6100000, baseRural: 95000, coords: "06°10'15\"N 75°35'00\"W", pot: "Residencial Urbano Consolidado", notarialRate: 0.0240 },
    'cali-ciudadjardin': { name: "Cali — Ciudad Jardín / Pance", baseUrbano: 5400000, baseRural: 85000, coords: "03°21'50\"N 76°32'15\"W", pot: "Residencial Campestre Estrato 6", notarialRate: 0.0245 },
    'cali-granada': { name: "Cali — Granada / El Peñón", baseUrbano: 4800000, baseRural: 75000, coords: "03°27'10\"N 76°32'25\"W", pot: "Corredor Gastronómico y Residencial", notarialRate: 0.0245 },
    'barranquilla-riomar': { name: "Barranquilla — Riomar / El Golf", baseUrbano: 5100000, baseRural: 70000, coords: "11°00'55\"N 74°49'30\"W", pot: "Residencial Estrato 5-6", notarialRate: 0.0240 },
    'bucaramanga-cabecera': { name: "Bucaramanga — Cabecera / Cañaveral", baseUrbano: 4900000, baseRural: 75000, coords: "07°07'20\"N 73°06'40\"W", pot: "Residencial Estrato 5-6", notarialRate: 0.0240 },
    'cartagena-bocagrande': { name: "Cartagena — Bocagrande / Castillogrande", baseUrbano: 9600000, baseRural: 110000, coords: "10°24'15\"N 75°33'25\"W", pot: "Turístico Residencial Frente al Mar", notarialRate: 0.0250 },
    'pereira-pinares': { name: "Pereira — Pinares / Dosquebradas", baseUrbano: 4400000, baseRural: 70000, coords: "04°48'40\"N 75°41'20\"W", pot: "Residencial Estrato 5-6 Eje Cafetero", notarialRate: 0.0240 }
  };

  // Adjust input limits & units based on asset type
  function syncTypeParameters(type) {
    if (type === 'urbano') {
      areaRange.min = '30';
      areaRange.max = '1200';
      areaRange.step = '5';
      areaInput.min = '20';
      areaInput.max = '10000';
      areaInput.value = '120';
      areaRange.value = '120';
      areaUnit.textContent = 'm²';
    } else if (type === 'comercial') {
      areaRange.min = '50';
      areaRange.max = '5000';
      areaRange.step = '25';
      areaInput.min = '30';
      areaInput.max = '20000';
      areaInput.value = '350';
      areaRange.value = '350';
      areaUnit.textContent = 'm²';
    } else if (type === 'rural') {
      areaRange.min = '1000';
      areaRange.max = '100000';
      areaRange.step = '1000';
      areaInput.min = '500';
      areaInput.max = '50000000';
      areaInput.value = '10000';
      areaRange.value = '10000';
      areaUnit.textContent = 'm² (10.000 m² = 1 Ha)';
    } else if (type === 'maquinaria') {
      areaRange.min = '1';
      areaRange.max = '25';
      areaRange.step = '1';
      areaInput.min = '1';
      areaInput.max = '500';
      areaInput.value = '2';
      areaRange.value = '2';
      areaUnit.textContent = 'equipos / unidades';
    }
  }

  function recalculate() {
    const type = propertyTypeSelect.value;
    const sectorKey = sectorSelect.value;
    const sector = sectorData[sectorKey] || sectorData['villavicencio-barzal'];
    const area = parseFloat(areaInput.value) || 0;

    let finishMultiplier = 1.0;
    finishesRadios.forEach(radio => {
      if (radio.checked) {
        if (radio.value === 'economico') finishMultiplier = 0.85;
        if (radio.value === 'medio') finishMultiplier = 1.0;
        if (radio.value === 'alto') finishMultiplier = 1.28;
      }
    });

    let basePerM2 = 0;
    let factorNeg = 0.93; // 7% standard market negotiation discount in Meta

    if (type === 'urbano') {
      basePerM2 = sector.baseUrbano * finishMultiplier;
    } else if (type === 'rural') {
      basePerM2 = sector.baseRural * (finishMultiplier * 0.95);
    } else if (type === 'comercial') {
      basePerM2 = sector.baseUrbano * 1.35 * finishMultiplier;
    } else if (type === 'maquinaria') {
      basePerM2 = 8500000;
    }

    const totalHomogenized = area * basePerM2 * factorNeg;
    const totalMin = Math.round((totalHomogenized * 0.96) / 1000000) * 1000000;
    const totalMax = Math.round((totalHomogenized * 1.04) / 1000000) * 1000000;

    // Formatting currency COP
    const fmt = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 });

    // Proyecciones triples: Renta + Gastos Notariales + Tarifa Avalúo Lonja
    const canonRent = Math.round((totalHomogenized * 0.0055) / 50000) * 50000;
    const notarialCosts = Math.round((totalHomogenized * (sector.notarialRate || 0.0235)) / 100000) * 100000;
    
    // Honorarios Regulados Tarifa Lonja RAA (Ley 1673 de 2013)
    let feeRate = 0.0012; // 1.2 por mil
    if (totalHomogenized > 1000000000) feeRate = 0.0009; // 0.9 por mil
    const lonjaFee = Math.max(1423500, Math.round((totalHomogenized * feeRate) / 50000) * 50000);

    if (estimatedMin) estimatedMin.textContent = fmt.format(totalMin);
    if (estimatedMax) estimatedMax.textContent = fmt.format(totalMax);
    if (rentValDisplay) rentValDisplay.textContent = fmt.format(canonRent) + ' / mes';
    if (notarialValDisplay) notarialValDisplay.textContent = '≈ ' + fmt.format(notarialCosts) + ' (SNR+Dpto)';
    if (lonjaFeeDisplay) lonjaFeeDisplay.textContent = fmt.format(lonjaFee) + ' (Tarifa RAA)';
    if (unitPrice) unitPrice.textContent = type === 'maquinaria' ? fmt.format(Math.round(basePerM2)) + ' / unid.' : fmt.format(Math.round(basePerM2)) + ' / m²';
    if (negFactor) negFactor.textContent = (factorNeg * 100).toFixed(0) + '% (Desc. medio 7%)';
    if (precisionIndex) precisionIndex.textContent = '99.2% (Norma RAA)';
    if (latLongDisplay) latLongDisplay.textContent = sector.coords;

    // Visual Cost Distribution Breakdown Bar
    const grandTotal = totalHomogenized + notarialCosts + lonjaFee;
    if (grandTotal > 0) {
      const propPct = (totalHomogenized / grandTotal) * 100;
      const notPct = (notarialCosts / grandTotal) * 100;
      const lonjaPct = (lonjaFee / grandTotal) * 100;
      if (simBarProp) simBarProp.style.width = propPct.toFixed(1) + '%';
      if (simBarNotary) simBarNotary.style.width = notPct.toFixed(1) + '%';
      if (simBarLonja) simBarLonja.style.width = Math.max(0.4, lonjaPct).toFixed(1) + '%';
      if (simRatioLabel) simRatioLabel.textContent = `Inmueble ${propPct.toFixed(1)}% | Cierre ${(notPct + lonjaPct).toFixed(1)}%`;
    }

    // Update WhatsApp pre-filled link
    if (whatsappQuoteBtn) {
      const typeLabel = propertyTypeSelect.options[propertyTypeSelect.selectedIndex].text;
      const sectorLabel = sectorSelect.options[sectorSelect.selectedIndex].text;
      const msg = encodeURIComponent(
        `🏛️ *LONJA DE AVALÚOS DEL META S.A.S.* - Solicitud de Dictamen RAA\n\n` +
        `• *Activo:* ${typeLabel}\n` +
        `• *Ubicación:* ${sectorLabel}\n` +
        `• *Área:* ${area} ${areaUnit.textContent}\n` +
        `• *Valor Comercial Estimado:* ${fmt.format(totalMin)} - ${fmt.format(totalMax)}\n` +
        `• *Canon Estimado:* ${fmt.format(canonRent)} / mes\n` +
        `• *Gastos Notaría y Registro:* ${fmt.format(notarialCosts)}\n` +
        `• *Tarifa Oficial Lonja RAA:* ${fmt.format(lonjaFee)}\n\n` +
        `Deseo coordinar la visita pericial y radicar mi encargo formal.`
      );
      whatsappQuoteBtn.href = `https://wa.me/573123661758?text=${msg}`;
    }
  }

  // Event listeners
  propertyTypeSelect.addEventListener('change', () => {
    syncTypeParameters(propertyTypeSelect.value);
    recalculate();
    playAudioTick('soft');
  });

  sectorSelect.addEventListener('change', () => { recalculate(); playAudioTick('soft'); });

  areaInput.addEventListener('input', () => {
    const val = parseFloat(areaInput.value);
    if (!isNaN(val)) {
      const maxRange = parseFloat(areaRange.max);
      const minRange = parseFloat(areaRange.min);
      areaRange.value = Math.min(maxRange, Math.max(minRange, val));
    }
    recalculate();
  });

  areaRange.addEventListener('input', () => {
    areaInput.value = areaRange.value;
    recalculate();
  });

  areaInput.addEventListener('change', () => {
    let val = parseFloat(areaInput.value);
    const minVal = parseFloat(areaInput.min) || 1;
    if (isNaN(val) || val < minVal) {
      areaInput.value = minVal;
    }
    const maxRange = parseFloat(areaRange.max);
    const minRange = parseFloat(areaRange.min);
    areaRange.value = Math.min(maxRange, Math.max(minRange, parseFloat(areaInput.value)));
    recalculate();
  });

  finishesRadios.forEach(r => r.addEventListener('change', () => { recalculate(); playAudioTick('soft'); }));

  // Interactive Hero Visual Showcase Gallery Switcher
  const heroFeatureImg = document.getElementById('hero-feature-img');
  const heroFeatureCategory = document.getElementById('hero-feature-category');
  const heroFeatureTitle = document.getElementById('hero-feature-title');
  const heroThumbBtns = document.querySelectorAll('.hero-thumb-btn');

  heroThumbBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const src = btn.getAttribute('data-src');
      const category = btn.getAttribute('data-category');
      const title = btn.getAttribute('data-title');

      if (heroFeatureImg && src) {
        heroFeatureImg.style.opacity = '0.3';
        setTimeout(() => {
          heroFeatureImg.src = src;
          heroFeatureImg.style.opacity = '1';
        }, 150);
      }

      if (heroFeatureCategory && category) heroFeatureCategory.textContent = '● ' + category;
      if (heroFeatureTitle && title) heroFeatureTitle.textContent = title;

      heroThumbBtns.forEach(b => {
        b.classList.remove('bg-emerald-600', 'text-white', 'font-bold');
        b.classList.add('bg-white/10', 'text-slate-300', 'font-semibold');
      });
      btn.classList.remove('bg-white/10', 'text-slate-300', 'font-semibold');
      btn.classList.add('bg-emerald-600', 'text-white', 'font-bold');

      playAudioTick('soft');
    });
  });

  // Initial setup
  syncTypeParameters(propertyTypeSelect.value);
  recalculate();
}

/* ==========================================================================
   3. LONJA CATALOG & AUDIENCE-SEGREGATED SERVICES SYSTEM (DATALONJA)
   ========================================================================== */
function initDataLonjaCatalog() {
  const container = document.getElementById('lonja-products-grid') || document.getElementById('datalonja-products-grid') || document.getElementById('avaluapp-products-grid');
  const filtersContainer = document.getElementById('catalog-filters-container');
  const tabClientes = document.getElementById('audience-tab-clientes');
  const tabAvaluadores = document.getElementById('audience-tab-avaluadores');
  
  const ctxBadge = document.getElementById('audience-context-badge');
  const ctxTitle = document.getElementById('audience-context-title');
  const ctxDesc = document.getElementById('audience-context-desc');
  const ctxCount = document.getElementById('audience-context-count');
  
  const modalBackdrop = document.getElementById('datalonja-modal-backdrop') || document.getElementById('avaluapp-modal-backdrop');
  const modalCloseBtn = document.getElementById('datalonja-modal-close') || document.getElementById('avaluapp-modal-close');
  const modalBody = document.getElementById('datalonja-modal-content') || document.getElementById('avaluapp-modal-content');
  const btnSeeTools = document.getElementById('btn-see-tools-tab');

  if (!container || !window.LONJA_DATA) return;

  const products = window.LONJA_DATA.dataLonjaProducts || window.LONJA_DATA.catalogProducts || window.LONJA_DATA.avaluappProducts || [];

  let currentAudience = 'cliente'; // 'cliente' | 'avaluador'
  let currentCategory = 'todos';

  const filterConfigs = {
    cliente: [
      { id: 'todos', label: '[ Todos los Servicios ]' },
      { id: 'avaluos-oficiales', label: 'Avalúos Comerciales RAA' },
      { id: 'seguridad-inmobiliaria', label: 'Compra & Finca Segura' },
      { id: 'saneamiento-catastro', label: 'Saneamiento & Catastro' },
      { id: 'peritaje-judicial', label: 'Dictamen Judicial CGP' }
    ],
    avaluador: [
      { id: 'todos', label: '[ Todas las Herramientas ]' },
      { id: 'ofertas-mercado', label: 'Bancos de Ofertas & KMZ' },
      { id: 'plantillas-avaluos', label: 'Plantillas Word & Excel' },
      { id: 'calculadoras-matrices', label: 'Matrices Econométricas' },
      { id: 'kits-sig', label: 'Modelos SIG & Kits de Campo' }
    ]
  };

  function updateAudienceUI() {
    if (currentAudience === 'cliente') {
      if (tabClientes) {
        tabClientes.className = 'audience-tab-btn flex-1 py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 bg-[#0C2F5A] text-white shadow-md';
      }
      if (tabAvaluadores) {
        tabAvaluadores.className = 'audience-tab-btn flex-1 py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 text-slate-700 hover:text-slate-900 hover:bg-white/60';
      }
      if (ctxBadge) ctxBadge.textContent = 'SERVICIOS PERICIALES CERTIFICADOS';
      if (ctxTitle) ctxTitle.textContent = 'Servicios periciales oficiales y blindaje patrimonial para tu inmueble en el Meta';
      if (ctxDesc) ctxDesc.textContent = 'Contrata directamente a un avaluador colegiado RAA para avalúos comerciales, créditos hipotecarios, particiones judiciales, compras seguras de fincas y saneamiento de linderos.';
      const clientCount = products.filter(p => p.audience === 'cliente').length;
      if (ctxCount) ctxCount.textContent = `${clientCount} Servicios Disponibles`;
    } else {
      if (tabAvaluadores) {
        tabAvaluadores.className = 'audience-tab-btn flex-1 py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 bg-[#0C2F5A] text-white shadow-md';
      }
      if (tabClientes) {
        tabClientes.className = 'audience-tab-btn flex-1 py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 text-slate-700 hover:text-slate-900 hover:bg-white/60';
      }
      if (ctxBadge) ctxBadge.textContent = '📐 DATALONJA PRO · METODOLOGÍA RAA, CARTOGRAFÍA & MERCADO';
      if (ctxTitle) ctxTitle.textContent = 'Bancos de ofertas depuradas KMZ, capas catastrales y plantillas periciales para avaluadores';
      if (ctxDesc) ctxDesc.textContent = 'Herramientas de productividad pericial desarrolladas conforme a la Resolución IGAC 620 de 2008 y Ley 1673. Accede a ofertas georreferenciadas con fichas depuradas, cartografía catastral y matrices econométricas.';
      const avaluadorCount = products.filter(p => p.audience === 'avaluador').length;
      if (ctxCount) ctxCount.textContent = `${avaluadorCount} Recursos Periciales`;
    }

    renderFilterButtons();
    renderProducts();
  }

  function renderFilterButtons() {
    if (!filtersContainer) return;
    filtersContainer.innerHTML = '';

    const currentFilters = filterConfigs[currentAudience] || [];
    currentFilters.forEach(f => {
      const btn = document.createElement('button');
      const isActive = f.id === currentCategory;
      btn.className = isActive
        ? 'px-4 py-2 border border-[#0C2F5A] bg-[#0C2F5A] text-white font-bold rounded-xl shadow-md transition-all'
        : 'px-4 py-2 border border-slate-200 bg-white text-slate-700 font-semibold hover:bg-slate-50 rounded-xl shadow-sm transition-all';
      btn.setAttribute('data-filter', f.id);
      btn.textContent = f.label;

      btn.addEventListener('click', () => {
        currentCategory = f.id;
        renderFilterButtons();
        renderProducts();
        playAudioTick('soft');
      });

      filtersContainer.appendChild(btn);
    });
  }

  function renderProducts() {
    container.innerHTML = '';

    const audienceProducts = products.filter(p => p.audience === currentAudience);

    const filtered = currentCategory === 'todos'
      ? audienceProducts
      : audienceProducts.filter(p => p.category === currentCategory || p.subCategory === currentCategory);

    filtered.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card-editorial bg-white border border-slate-200/90 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all';

      const isClient = item.audience === 'cliente';
      const actionLabel = isClient ? 'Solicitar Trámite Oficial' : 'Adquirir Licencia';
      const detailLabel = isClient ? 'Ver Ficha Técnica' : 'Ver Especificaciones';
      const audienceBadge = isClient ? '🏛️ Servicio Certificado' : '📐 Herramienta RAA';

      const whatsappText = isClient
        ? `🏛️ *LONJA DE AVALÚOS DEL META S.A.S.*\nSolicitud de Encargo Oficial RAA:\n\n• *Servicio:* ${item.name}\n• *Código:* ${item.id}\n• *Tarifa Regulada:* ${item.priceDisplay}\n\nPor favor bríndenme los requisitos y asignación de perito avaluador colegiado.`
        : `📐 *LONJA DE AVALÚOS DEL META S.A.S.*\nSolicitud de Licencia Profesional para Avaluadores:\n\n• *Herramienta:* ${item.name}\n• *Formato:* ${item.format}\n• *Inversión:* ${item.priceDisplay}\n\nPor favor indíquenme los métodos de descarga y habilitación inmediata.`;

      card.innerHTML = `
        <div>
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="text-[11px] font-mono-tech tracking-wider uppercase px-2.5 py-1 bg-slate-100 text-slate-700 font-bold border border-slate-200 rounded-md">
              ${item.badge}
            </span>
            <span class="text-xs font-mono-tech text-slate-500 font-semibold">
              ${audienceBadge}
            </span>
          </div>

          <h3 class="font-display font-bold text-xl text-slate-900 leading-tight mb-2 hover:text-[#0C2F5A] transition-colors">
            ${item.name}
          </h3>

          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
            ${item.summary}
          </p>

          <div class="border-t border-slate-100 pt-3 mb-4">
            <p class="text-[10px] font-mono-tech text-slate-400 font-bold uppercase mb-1">DIRIGIDO A:</p>
            <p class="text-xs font-semibold text-slate-800">${item.targetAudience}</p>
          </div>
        </div>

        <div>
          <div class="flex items-baseline justify-between pt-3 border-t border-slate-100 mb-4">
            <div>
              <span class="text-[10px] font-mono-tech uppercase text-slate-400 font-bold block">
                ${isClient ? 'Tarifa Oficial Regulada' : 'Inversión Profesional'}
              </span>
              <span class="font-display font-extrabold text-base sm:text-lg text-slate-900">${item.priceDisplay}</span>
            </div>
            <span class="text-[11px] text-[#2C4A3E] font-bold bg-emerald-50 px-2 py-1 rounded-md border border-emerald-200">
              ${item.format.split(' ')[0]}
            </span>
          </div>

          <div class="grid grid-cols-2 gap-2">
            <button class="btn-brutalist bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold py-2.5 px-3 border border-slate-200 rounded-xl text-center view-details-btn shadow-sm" data-id="${item.id}">
              ${detailLabel}
            </button>
            <a href="https://wa.me/573123661758?text=${encodeURIComponent(whatsappText)}" target="_blank" rel="noopener" class="btn-brutalist bg-[#0C2F5A] hover:bg-[#1E3A8A] text-white text-xs font-bold py-2.5 px-3 rounded-xl shadow-md text-center flex items-center justify-center gap-1">
              <span>${actionLabel.split(' ')[0]}</span>
              <i data-lucide="arrow-up-right" class="w-3.5 h-3.5 text-emerald-300"></i>
            </a>
          </div>
        </div>
      `;

      container.appendChild(card);
    });

    lucide.createIcons();

    // Attach modal trigger listeners
    container.querySelectorAll('.view-details-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const prod = products.find(p => p.id === id);
        if (prod) openProductModal(prod);
      });
    });
  }

  // Audience Tabs Event Listeners
  if (tabClientes) {
    tabClientes.addEventListener('click', () => {
      if (currentAudience !== 'cliente') {
        currentAudience = 'cliente';
        currentCategory = 'todos';
        updateAudienceUI();
        playAudioTick('soft');
      }
    });
  }

  if (tabAvaluadores) {
    tabAvaluadores.addEventListener('click', () => {
      if (currentAudience !== 'avaluador') {
        currentAudience = 'avaluador';
        currentCategory = 'todos';
        updateAudienceUI();
        playAudioTick('soft');
      }
    });
  }

  if (btnSeeTools) {
    btnSeeTools.addEventListener('click', (e) => {
      e.preventDefault();
      currentAudience = 'avaluador';
      currentCategory = 'todos';
      updateAudienceUI();
      const targetSec = document.getElementById('servicios-lonja');
      if (targetSec) {
        targetSec.scrollIntoView({ behavior: 'smooth' });
      }
      playAudioTick('chime');
    });
  }

  // Modal logic
  function openProductModal(prod) {
    if (!modalBackdrop || !modalBody) return;

    const isClient = prod.audience === 'cliente';
    const whatsappText = isClient
      ? `🏛️ *LONJA DE AVALÚOS DEL META S.A.S.*\nSolicitud Formal de Encargo / Tarifa Oficial:\n\n• *Servicio:* ${prod.name}\n• *Código:* ${prod.id}\n• *Tarifa:* ${prod.priceDisplay}\n\nPor favor indíquenme los requisitos para radicación inmediata.`
      : `📐 *LONJA DE AVALÚOS DEL META S.A.S.*\nAdquisición de Licencia para Avaluadores:\n\n• *Herramienta:* ${prod.name}\n• *Código:* ${prod.id}\n• *Inversión:* ${prod.priceDisplay}\n\nPor favor indíquenme el proceso de descarga y factura.`;

    modalBody.innerHTML = `
      <div class="border-b border-slate-200 pb-4 mb-6">
        <div class="flex items-center gap-2 mb-2">
          <span class="text-xs font-mono-tech px-2.5 py-0.5 bg-[#0C2F5A] text-white font-bold rounded">
            ${prod.badge}
          </span>
          <span class="text-xs font-mono-tech text-slate-500 font-bold">
            CÓDIGO: LONJA-${prod.id.toUpperCase()}
          </span>
        </div>
        <h2 class="font-display font-extrabold text-2xl md:text-3xl text-slate-900 leading-tight mb-2">
          ${prod.name}
        </h2>
        <p class="text-slate-600 text-sm md:text-base leading-relaxed">
          ${prod.summary}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div class="bg-slate-50 p-5 border border-slate-200 rounded-xl">
          <h4 class="text-xs font-mono-tech uppercase tracking-wider text-slate-500 font-bold mb-3">
            [ Entregables & Especificaciones Técnicas ]
          </h4>
          <ul class="space-y-2 text-xs md:text-sm text-slate-800">
            ${prod.deliverables.map(d => `
              <li class="flex items-start gap-2">
                <i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"></i>
                <span>${d}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="flex flex-col justify-between bg-slate-50 p-5 border border-slate-200 rounded-xl">
          <div>
            <h4 class="text-xs font-mono-tech uppercase tracking-wider text-slate-500 font-bold mb-3">
              [ Ficha de Implementación ]
            </h4>
            <div class="space-y-2 text-xs">
              <div class="flex justify-between border-b border-slate-200 pb-1">
                <span class="text-slate-500 font-semibold">Formato:</span>
                <span class="font-bold text-slate-900">${prod.format}</span>
              </div>
              <div class="flex justify-between border-b border-slate-200 pb-1">
                <span class="text-slate-500 font-semibold">Dirigido a:</span>
                <span class="font-bold text-slate-900">${prod.targetAudience}</span>
              </div>
              <div class="flex justify-between border-b border-slate-200 pb-1">
                <span class="text-slate-500 font-semibold">Respaldo:</span>
                <span class="font-bold text-slate-900">Lonja de Avalúos del Meta S.A.S.</span>
              </div>
              <div class="flex justify-between pb-1">
                <span class="text-slate-500 font-semibold">Soporte pericial:</span>
                <span class="font-bold text-[#2C4A3E]">Atención directa vía WhatsApp</span>
              </div>
            </div>
          </div>

          <div class="mt-4 pt-4 border-t border-slate-200">
            <span class="text-[10px] font-mono-tech text-slate-500 font-bold block uppercase">
              ${isClient ? 'TARIFA OFICIAL LONJA RAA (LEY 1673):' : 'INVERSIÓN EN HERRAMIENTA PERICIAL:'}
            </span>
            <span class="font-display font-black text-2xl sm:text-3xl text-slate-900 block mb-3">${prod.priceDisplay}</span>
            <div class="flex flex-col gap-2">
              <button id="btn-open-checkout-sim" class="btn-brutalist w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 px-4 font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-2 rounded-xl shadow-lg transition-all">
                <i data-lucide="key" class="w-4 h-4 text-emerald-200"></i>
                <span>Simular Pago & Desbloqueo por Clave</span>
              </button>
              <a href="https://wa.me/573123661758?text=${encodeURIComponent(whatsappText)}" target="_blank" rel="noopener" class="btn-brutalist w-full bg-[#0C2F5A] hover:bg-[#1E3A8A] text-white py-2.5 px-4 font-bold text-xs text-center flex items-center justify-center gap-2 rounded-xl shadow-md">
                <i data-lucide="message-circle" class="w-4 h-4 text-emerald-300"></i>
                <span>${isClient ? 'Solicitar Trámite Oficial por WhatsApp' : 'Comprar vía WhatsApp Directo'}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      ${prod.samplePreview ? `
        <div class="mt-6 p-5 bg-gradient-to-br from-emerald-50/70 via-white to-slate-50 border-2 border-emerald-500/30 rounded-2xl">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-emerald-200/60">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 bg-emerald-700 text-white font-mono-tech text-[10px] font-bold uppercase rounded-md tracking-wider">
                ${prod.samplePreview.badge || 'MUESTRA TÉCNICA VERIFICADA'}
              </span>
              <span class="text-xs font-mono-tech text-emerald-950 font-bold">${prod.samplePreview.title}</span>
            </div>
            <span class="text-[11px] font-mono-tech text-emerald-700 font-semibold flex items-center gap-1">
              <i data-lucide="map-pin" class="w-3.5 h-3.5"></i>
              <span>Inspección In Situ · Granada, Meta</span>
            </span>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            ${prod.samplePreview.photoUrl ? `
              <div class="sm:col-span-1 rounded-xl overflow-hidden border border-slate-200 shadow-sm relative group bg-slate-100">
                <img src="${prod.samplePreview.photoUrl}" alt="Registro Fotográfico de Oferta" class="w-full h-36 object-cover" />
                <span class="absolute bottom-1 right-1 bg-black/75 text-white font-mono-tech text-[9px] px-2 py-0.5 rounded font-semibold">
                  Foto de Fachada In Situ
                </span>
              </div>
            ` : ''}
            <div class="${prod.samplePreview.photoUrl ? 'sm:col-span-2' : 'sm:col-span-3'} flex flex-col justify-between text-xs space-y-2">
              <div>
                <p class="font-bold text-slate-900 text-sm mb-0.5">${prod.samplePreview.sector}</p>
                <p class="text-slate-600 text-xs">${prod.samplePreview.type}</p>
              </div>
              <div class="p-2.5 bg-white rounded-xl border border-emerald-200 shadow-sm">
                <span class="text-[10px] font-mono-tech uppercase text-slate-500 font-bold block">Valor Residual Terreno Depurado:</span>
                <span class="font-display font-extrabold text-base text-emerald-700">${prod.samplePreview.unitValue}</span>
              </div>
              <div class="text-[11px] font-mono-tech text-slate-600 space-y-0.5">
                <p><span class="font-bold text-slate-800">Coordenadas:</span> ${prod.samplePreview.coords}</p>
                <p><span class="font-bold text-slate-800">Depuración:</span> ${prod.samplePreview.factor}</p>
              </div>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-emerald-200/60">
            <span class="text-[11px] text-slate-600 font-medium">
              ⚡ Incluida completa en el paquete para anexar como soporte oficial en tu informe pericial.
            </span>
            ${prod.samplePreview.pdfUrl ? `
              <a href="${prod.samplePreview.pdfUrl}" target="_blank" rel="noopener" class="w-full sm:w-auto px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-mono-tech text-xs font-bold uppercase tracking-wider rounded-xl shadow-md flex items-center justify-center gap-2 transition-all">
                <i data-lucide="file-text" class="w-4 h-4 text-emerald-200"></i>
                <span>Ver Ficha de Muestra O1 (PDF Demo)</span>
              </a>
            ` : ''}
          </div>
        </div>
      ` : ''}
    `;

    lucide.createIcons();

    const btnSim = modalBody.querySelector('#btn-open-checkout-sim');
    if (btnSim) {
      btnSim.addEventListener('click', () => {
        renderCheckoutView(prod);
      });
    }

    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
    playAudioTick('chime');
  }

  function renderCheckoutView(prod) {
    if (!modalBody) return;

    modalBody.innerHTML = `
      <div class="border-b border-slate-200 pb-4 mb-6">
        <div class="flex items-center justify-between gap-2 mb-2">
          <span class="text-xs font-mono-tech px-2.5 py-0.5 bg-emerald-700 text-white font-bold rounded-md uppercase">
            PASARELA DE PAGO & ACTIVACIÓN
          </span>
          <span class="text-xs font-mono-tech text-slate-500 font-bold">
            AMBIENTE SANDBOX / DEMO
          </span>
        </div>
        <h2 class="font-display font-black text-2xl text-slate-900 leading-tight">
          Adquisición de Licencia: ${prod.name}
        </h2>
        <p class="text-xs text-slate-600 mt-1">
          Simula el proceso de compra de un avaluador o ingresa directamente tu clave de acceso.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <!-- Panel 1: Simulación de Pago -->
        <div class="bg-slate-50 p-5 border border-slate-200 rounded-2xl flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-2 mb-3">
              <span class="w-6 h-6 rounded-full bg-[#0C2F5A] text-white text-xs font-bold flex items-center justify-center">1</span>
              <h4 class="text-xs font-mono-tech uppercase tracking-wider text-slate-800 font-bold">
                Simular Pago en Línea (PSE / Tarjeta / Nequi)
              </h4>
            </div>

            <div class="space-y-3 mb-4">
              <div>
                <label class="block text-[11px] font-mono-tech font-bold text-slate-600 mb-1">Nombre del Avaluador / Firma:</label>
                <input type="text" id="sim-buyer-name" value="Ing. Avaluador Colegiado RAA" class="w-full text-xs p-2.5 bg-white border border-slate-300 rounded-lg font-sans focus:outline-none focus:border-[#0C2F5A]" />
              </div>
              <div class="grid grid-cols-2 gap-2">
                <div>
                  <label class="block text-[11px] font-mono-tech font-bold text-slate-600 mb-1">Cédula o NIT:</label>
                  <input type="text" id="sim-buyer-doc" value="86.082.941" class="w-full text-xs p-2.5 bg-white border border-slate-300 rounded-lg font-sans focus:outline-none focus:border-[#0C2F5A]" />
                </div>
                <div>
                  <label class="block text-[11px] font-mono-tech font-bold text-slate-600 mb-1">Registro RAA:</label>
                  <input type="text" id="sim-buyer-raa" value="AVAL-COL-2026" class="w-full text-xs p-2.5 bg-white border border-slate-300 rounded-lg font-sans focus:outline-none focus:border-[#0C2F5A]" />
                </div>
              </div>
              <div>
                <label class="block text-[11px] font-mono-tech font-bold text-slate-600 mb-1">Método de Pago Simulado:</label>
                <select id="sim-payment-method" class="w-full text-xs p-2.5 bg-white border border-slate-300 rounded-lg font-sans focus:outline-none focus:border-[#0C2F5A]">
                  <option value="bancolombia">Transferencia Bancolombia / QR (0% Comisión)</option>
                  <option value="nequi">Nequi / Daviplata Instantáneo</option>
                  <option value="pse">PSE - Débito Bancario en Línea</option>
                  <option value="tarjeta">Tarjeta de Crédito Visa / Mastercard</option>
                </select>
              </div>
            </div>

            <div class="p-3 bg-emerald-50 rounded-xl border border-emerald-200 mb-4 flex items-center justify-between">
              <span class="text-xs font-mono-tech text-emerald-900 font-semibold">Total a Cancelar:</span>
              <span class="font-display font-extrabold text-lg text-emerald-800">${prod.priceDisplay}</span>
            </div>
          </div>

          <button id="btn-submit-sim-payment" class="btn-brutalist w-full bg-emerald-700 hover:bg-emerald-800 text-white font-mono-tech text-xs font-bold uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-md flex items-center justify-center gap-2 transition-all">
            <i data-lucide="shield-check" class="w-4 h-4 text-emerald-200"></i>
            <span id="btn-sim-text">Aprobar Pago Simulado & Desbloquear</span>
          </button>
        </div>

        <!-- Panel 2: Acceso Directo por Clave -->
        <div class="bg-slate-50 p-5 border border-slate-200 rounded-2xl flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-2 mb-3">
              <span class="w-6 h-6 rounded-full bg-[#2C4A3E] text-white text-xs font-bold flex items-center justify-center">2</span>
              <h4 class="text-xs font-mono-tech uppercase tracking-wider text-slate-800 font-bold">
                Desbloquear con Clave de Licencia
              </h4>
            </div>

            <p class="text-xs text-slate-600 mb-4 leading-relaxed">
              Si ya adquiriste la licencia por transferencia, WhatsApp o eres cliente de demostración, ingresa tu clave o usa la clave maestra de prueba:
            </p>

            <div class="mb-4">
              <label class="block text-[11px] font-mono-tech font-bold text-slate-700 mb-1">Clave de Licencia / PIN:</label>
              <input type="text" id="sim-key-input" placeholder="Ej: LONJA2026" class="w-full text-sm font-mono-tech uppercase font-bold p-3 bg-white border-2 border-emerald-600/60 rounded-xl focus:outline-none focus:border-emerald-600 tracking-wider" />
              <div class="mt-2 p-2 bg-amber-50 border border-amber-200 rounded-lg">
                <p class="text-[11px] font-mono-tech text-amber-900 flex items-center gap-1.5">
                  <i data-lucide="key" class="w-3.5 h-3.5 shrink-0 text-amber-700"></i>
                  <span><strong>Clave de Demostración:</strong> <code class="bg-amber-100 px-1.5 py-0.5 rounded font-bold">LONJA2026</code> o <code class="bg-amber-100 px-1.5 py-0.5 rounded font-bold">GRANADA2026</code></span>
                </p>
              </div>
              <p id="key-error-msg" class="text-xs text-rose-600 font-mono-tech font-bold mt-2 hidden"></p>
            </div>
          </div>

          <div>
            <button id="btn-submit-key" class="btn-brutalist w-full bg-[#0C2F5A] hover:bg-[#1E3A8A] text-white font-mono-tech text-xs font-bold uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-md flex items-center justify-center gap-2 transition-all">
              <i data-lucide="unlock" class="w-4 h-4 text-emerald-300"></i>
              <span>Validar Clave & Abrir Archivos</span>
            </button>
            <button id="btn-back-to-details" class="w-full text-slate-500 hover:text-slate-800 font-mono-tech text-[11px] font-bold py-2 mt-2 text-center">
              ← Volver a la Ficha del Producto
            </button>
          </div>
        </div>
      </div>
    `;

    lucide.createIcons();

    const btnSubmitPayment = modalBody.querySelector('#btn-submit-sim-payment');
    const btnSimText = modalBody.querySelector('#btn-sim-text');
    const btnSubmitKey = modalBody.querySelector('#btn-submit-key');
    const keyInput = modalBody.querySelector('#sim-key-input');
    const keyError = modalBody.querySelector('#key-error-msg');
    const btnBack = modalBody.querySelector('#btn-back-to-details');

    if (btnBack) {
      btnBack.addEventListener('click', () => openProductModal(prod));
    }

    if (btnSubmitPayment) {
      btnSubmitPayment.addEventListener('click', () => {
        btnSubmitPayment.disabled = true;
        btnSubmitPayment.classList.add('opacity-75');
        btnSimText.textContent = 'Procesando simulación bancaria...';
        playAudioTick('soft');

        setTimeout(() => {
          const generatedKey = `LONJA-GRANADA-${Math.floor(1000 + Math.random() * 9000)}`;
          renderUnlockedVaultView(prod, generatedKey);
        }, 1100);
      });
    }

    if (btnSubmitKey) {
      btnSubmitKey.addEventListener('click', () => {
        const val = (keyInput.value || '').trim().toUpperCase();
        if (val === 'LONJA2026' || val === 'GRANADA2026' || val === 'VILLAVO2026' || val === 'VILLAVICENCIO2026' || val === 'PERITO2026' || val.startsWith('LONJA-')) {
          renderUnlockedVaultView(prod, val);
        } else {
          keyError.textContent = '❌ Clave no reconocida. Usa la clave de prueba: LONJA2026';
          keyError.classList.remove('hidden');
          playAudioTick('soft');
        }
      });
    }
  }

  function renderUnlockedVaultView(prod, licenseKey) {
    if (!modalBody) return;

    const licenseFolio = `LIC-RAA-META-2026-${Math.floor(100000 + Math.random() * 900000)}`;
    const isVillavo = prod.id.includes('villavicencio') || prod.id.includes('50001');
    const isCombo = prod.id.includes('combo');
    const isPackOfertas = prod.id.includes('pack-ofertas') || isCombo;
    const isUrbana = prod.id.includes('urbana') || isCombo;
    const isRural = prod.id.includes('rural') || isCombo;

    let packageDownloadUrl = '';
    if (isVillavo) {
      packageDownloadUrl = isCombo ? 'assets/downloads/Combo_Master_Territorial_Villavicencio_2026.zip' : (isPackOfertas ? 'assets/downloads/Pack_Ofertas_Villavicencio_2026.zip' : (isUrbana ? 'assets/downloads/Capa_Catastral_Urbana_Villavicencio_2026.zip' : 'assets/downloads/Capa_Catastral_Rural_Villavicencio_2026.zip'));
    } else {
      packageDownloadUrl = isCombo ? 'assets/downloads/Combo_Master_Territorial_Granada_2026.zip' : (isPackOfertas ? 'assets/downloads/Pack_Ofertas_Granada_2026.zip' : (isUrbana ? 'assets/downloads/Capa_Catastral_Urbana_Granada_2026.zip' : 'assets/downloads/Capa_Catastral_Rural_Granada_2026.zip'));
    }

    modalBody.innerHTML = `
      <div class="p-6 bg-gradient-to-br from-emerald-900 via-[#0C2F5A] to-slate-900 text-white rounded-2xl mb-6 shadow-xl relative overflow-hidden">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div class="flex items-center gap-2">
            <span class="px-3 py-1 bg-emerald-500 text-slate-950 font-mono-tech text-xs font-black uppercase rounded-lg shadow-sm flex items-center gap-1.5">
              <i data-lucide="check-circle" class="w-4 h-4"></i>
              <span>PAGO CONFIRMADO & LICENCIA ACTIVADA</span>
            </span>
          </div>
          <span class="font-mono-tech text-xs text-emerald-300 font-bold">
            FOLIO: ${licenseFolio}
          </span>
        </div>

        <h2 class="font-display font-black text-2xl sm:text-3xl leading-tight mb-2">
          Bóveda Pericial Desbloqueada
        </h2>
        <p class="text-xs sm:text-sm text-slate-200 mb-4 max-w-2xl leading-relaxed">
          Has adquirido exitosamente la licencia profesional de <strong>${prod.name}</strong> emitida por la Lonja de Avalúos del Meta S.A.S. Los archivos están habilitados para descarga directa y uso conforme a la Ley 1673 de 2013 y Res. IGAC 620 de 2008.
        </p>

        <div class="flex flex-wrap items-center gap-3 pt-3 border-t border-white/20 font-mono-tech text-xs">
          <span class="text-slate-300">Clave de Activación:</span>
          <span class="bg-white/10 px-2.5 py-1 rounded-md text-emerald-300 font-bold tracking-wider">${licenseKey || 'LONJA2026'}</span>
          <span class="text-slate-400">• Válido para informes RAA ilimitados</span>
        </div>
      </div>

      <!-- Main Download Action -->
      <div class="p-5 bg-emerald-50 border-2 border-emerald-500 rounded-2xl mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span class="text-[10px] font-mono-tech uppercase font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
            DESCARGA MAESTRA INMEDIATA
          </span>
          <h3 class="font-display font-bold text-lg text-slate-900 mt-1">
            ${isCombo ? 'Descargar Combo Máster Completo (ZIP · 5.1 MB)' : 'Descargar Paquete Pericial Oficial (ZIP)'}
          </h3>
          <p class="text-xs text-slate-600">
            Incluye todas las fichas en PDF, archivos KMZ georreferenciados y licencia legal de uso.
          </p>
        </div>
        <a href="${packageDownloadUrl}" download class="shrink-0 w-full sm:w-auto px-6 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-mono-tech text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all">
          <i data-lucide="download" class="w-4 h-4"></i>
          <span>Descargar Paquete (.ZIP)</span>
        </a>
      </div>

      <!-- Visualizador de Fichas Individuales Desbloqueadas -->
      <div class="mb-6">
        <div class="flex items-center justify-between mb-3">
          <h4 class="font-mono-tech text-xs uppercase font-bold text-slate-800 flex items-center gap-1.5">
            <i data-lucide="file-check-2" class="w-4 h-4 text-emerald-600"></i>
            <span>Fichas de Ofertas Comerciales Desbloqueadas (Granada, Meta)</span>
          </h4>
          <span class="text-[11px] font-mono-tech text-slate-500 font-semibold">6 Muestras Disponibles</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <!-- Oferta O1 -->
          <div class="p-3.5 bg-white border border-slate-200 rounded-xl hover:border-emerald-500 transition-colors shadow-sm flex items-center justify-between gap-3">
            <div>
              <div class="flex items-center gap-2">
                <span class="font-mono-tech text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">OFERTA O1</span>
                <span class="font-display font-extrabold text-xs text-slate-900">$ 1.007.359 /m²</span>
              </div>
              <p class="text-xs text-slate-600 mt-1">Granada (Meta) – Brr. Primero de Junio (Casa-Lote)</p>
            </div>
            <a href="assets/downloads/Ficha_Comercial_O1.pdf" target="_blank" rel="noopener" class="shrink-0 p-2 text-slate-700 hover:text-emerald-700 bg-slate-50 hover:bg-emerald-50 border border-slate-200 rounded-lg text-xs font-mono-tech font-bold flex items-center gap-1" title="Ver / Descargar PDF">
              <i data-lucide="file-text" class="w-3.5 h-3.5 text-emerald-600"></i>
              <span>PDF</span>
            </a>
          </div>

          <!-- Oferta O2 -->
          <div class="p-3.5 bg-white border border-slate-200 rounded-xl hover:border-emerald-500 transition-colors shadow-sm flex items-center justify-between gap-3">
            <div>
              <div class="flex items-center gap-2">
                <span class="font-mono-tech text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">OFERTA O2</span>
                <span class="font-display font-extrabold text-xs text-slate-900">$ 731.909 /m²</span>
              </div>
              <p class="text-xs text-slate-600 mt-1">Granada (Meta) – Sector Comercial Urbano</p>
            </div>
            <a href="assets/downloads/Ficha_Comercial_O2.pdf" target="_blank" rel="noopener" class="shrink-0 p-2 text-slate-700 hover:text-emerald-700 bg-slate-50 hover:bg-emerald-50 border border-slate-200 rounded-lg text-xs font-mono-tech font-bold flex items-center gap-1" title="Ver / Descargar PDF">
              <i data-lucide="file-text" class="w-3.5 h-3.5 text-emerald-600"></i>
              <span>PDF</span>
            </a>
          </div>

          <!-- Oferta O3 -->
          <div class="p-3.5 bg-white border border-slate-200 rounded-xl hover:border-emerald-500 transition-colors shadow-sm flex items-center justify-between gap-3">
            <div>
              <div class="flex items-center gap-2">
                <span class="font-mono-tech text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">OFERTA O3</span>
                <span class="font-display font-extrabold text-xs text-slate-900">$ 893.290 /m²</span>
              </div>
              <p class="text-xs text-slate-600 mt-1">Granada (Meta) – Inmueble Residencial / Mixto</p>
            </div>
            <a href="assets/downloads/Ficha_Comercial_O3.pdf" target="_blank" rel="noopener" class="shrink-0 p-2 text-slate-700 hover:text-emerald-700 bg-slate-50 hover:bg-emerald-50 border border-slate-200 rounded-lg text-xs font-mono-tech font-bold flex items-center gap-1" title="Ver / Descargar PDF">
              <i data-lucide="file-text" class="w-3.5 h-3.5 text-emerald-600"></i>
              <span>PDF</span>
            </a>
          </div>

          <!-- Oferta O4 -->
          <div class="p-3.5 bg-white border border-slate-200 rounded-xl hover:border-emerald-500 transition-colors shadow-sm flex items-center justify-between gap-3">
            <div>
              <div class="flex items-center gap-2">
                <span class="font-mono-tech text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">OFERTA O4</span>
                <span class="font-display font-extrabold text-xs text-slate-900">$ 893.922 /m²</span>
              </div>
              <p class="text-xs text-slate-600 mt-1">Granada (Meta) – Lote con Potencial Edificatorio</p>
            </div>
            <a href="assets/downloads/Ficha_Comercial_O4.pdf" target="_blank" rel="noopener" class="shrink-0 p-2 text-slate-700 hover:text-emerald-700 bg-slate-50 hover:bg-emerald-50 border border-slate-200 rounded-lg text-xs font-mono-tech font-bold flex items-center gap-1" title="Ver / Descargar PDF">
              <i data-lucide="file-text" class="w-3.5 h-3.5 text-emerald-600"></i>
              <span>PDF</span>
            </a>
          </div>

          <!-- Oferta O5 -->
          <div class="p-3.5 bg-white border border-slate-200 rounded-xl hover:border-emerald-500 transition-colors shadow-sm flex items-center justify-between gap-3">
            <div>
              <div class="flex items-center gap-2">
                <span class="font-mono-tech text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">OFERTA O5</span>
                <span class="font-display font-extrabold text-xs text-slate-900">$ 1.244.682 /m²</span>
              </div>
              <p class="text-xs text-slate-600 mt-1">Granada (Meta) – Predio con Frente Comercial</p>
            </div>
            <a href="assets/downloads/Ficha_Comercial_O5.pdf" target="_blank" rel="noopener" class="shrink-0 p-2 text-slate-700 hover:text-emerald-700 bg-slate-50 hover:bg-emerald-50 border border-slate-200 rounded-lg text-xs font-mono-tech font-bold flex items-center gap-1" title="Ver / Descargar PDF">
              <i data-lucide="file-text" class="w-3.5 h-3.5 text-emerald-600"></i>
              <span>PDF</span>
            </a>
          </div>

          <!-- Oferta O6 -->
          <div class="p-3.5 bg-white border border-slate-200 rounded-xl hover:border-emerald-500 transition-colors shadow-sm flex items-center justify-between gap-3">
            <div>
              <div class="flex items-center gap-2">
                <span class="font-mono-tech text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">OFERTA O6</span>
                <span class="font-display font-extrabold text-xs text-slate-900">Muestra Testigo</span>
              </div>
              <p class="text-xs text-slate-600 mt-1">Granada (Meta) – Ficha Complementaria de Campo</p>
            </div>
            <a href="assets/downloads/Ficha_Comercial_O6.pdf" target="_blank" rel="noopener" class="shrink-0 p-2 text-slate-700 hover:text-emerald-700 bg-slate-50 hover:bg-emerald-50 border border-slate-200 rounded-lg text-xs font-mono-tech font-bold flex items-center gap-1" title="Ver / Descargar PDF">
              <i data-lucide="file-text" class="w-3.5 h-3.5 text-emerald-600"></i>
              <span>PDF</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Descarga de Cartografía SIG KMZ -->
      <div class="p-4 bg-slate-100 rounded-xl border border-slate-200 mb-6 flex flex-wrap items-center justify-between gap-3">
        <div class="flex items-center gap-2.5">
          <i data-lucide="map" class="w-5 h-5 text-[#0C2F5A]"></i>
          <div>
            <p class="font-bold text-xs text-slate-900">Capa de Puntos Georreferenciados (KMZ para Google Earth Pro)</p>
            <p class="text-[11px] text-slate-600">Abre directamente las 6 ofertas con sus fotos de fachada en 3D en Google Earth.</p>
          </div>
        </div>
        <a href="${isVillavo ? 'assets/downloads/Ofertas_Mercado_Villavicencio_Puntos.kmz' : 'assets/downloads/Ofertas_Mercado_Granada_Puntos.kmz'}" download class="px-4 py-2 bg-[#0C2F5A] hover:bg-[#1E3A8A] text-white font-mono-tech text-xs font-bold rounded-lg flex items-center gap-1.5 shadow-sm">
          <i data-lucide="download" class="w-3.5 h-3.5"></i>
          <span>Descargar KMZ (1.1 MB)</span>
        </a>
      </div>

      <div class="flex items-center justify-between pt-4 border-t border-slate-200">
        <button id="btn-back-to-catalog" class="px-4 py-2 border border-slate-300 rounded-xl text-xs font-mono-tech font-bold text-slate-700 hover:bg-slate-50">
          ← Volver a DataLonja
        </button>
        <span class="text-[11px] font-mono-tech text-emerald-700 font-bold flex items-center gap-1">
          <i data-lucide="shield-check" class="w-4 h-4"></i>
          <span>Licencia foliada y certificada para su uso pericial</span>
        </span>
      </div>
    `;

    lucide.createIcons();
    playAudioTick('chime');

    const btnBackCatalog = modalBody.querySelector('#btn-back-to-catalog');
    if (btnBackCatalog) {
      btnBackCatalog.addEventListener('click', closeModal);
    }
  }

  function closeModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }

  // Initial setup
  updateAudienceUI();
}

/* ==========================================================================
   4. LIVE INTERACTIVE HOMOGENIZATION MATRIX DEMO (APEXCHARTS ECONOMETRIC LAB)
   ========================================================================== */
function initHomogenizationCalculator() {
  const container = document.getElementById('homogenization-tool');
  const tableBody = document.getElementById('matrix-table-body');
  const resultAvg = document.getElementById('matrix-result-avg');
  const resultCv = document.getElementById('matrix-result-cv');
  const resultStatus = document.getElementById('matrix-result-status');
  const resultDiscount = document.getElementById('matrix-result-discount');
  const cvBadge = document.getElementById('matrix-cv-badge');
  const whatsappQuote = document.getElementById('matrix-whatsapp-quote');
  const resetBtn = document.getElementById('matrix-reset-btn');
  const presetBtns = document.querySelectorAll('.matrix-preset-btn');
  const tabBarBtn = document.getElementById('chart-tab-bar');
  const tabHistoryBtn = document.getElementById('chart-tab-history');
  const chartBarEl = document.getElementById('matrix-apex-chart');
  const chartHistoryEl = document.getElementById('plusvalia-apex-chart');

  if (!container || !tableBody) return;

  const casesData = {
    barzal: [
      { id: 1, name: "Oferta A — Barzal Centro Médico", askingPrice: 380000000, area: 95, factorNeg: 0.92, factorArea: 1.00, factorLoc: 1.05 },
      { id: 2, name: "Oferta B — Trapiche Residencial", askingPrice: 420000000, area: 110, factorNeg: 0.90, factorArea: 0.98, factorLoc: 1.00 },
      { id: 3, name: "Oferta C — Inmueble 7 de Agosto", askingPrice: 350000000, area: 88, factorNeg: 0.93, factorArea: 1.02, factorLoc: 0.96 }
    ],
    trapiche: [
      { id: 1, name: "Oferta A — PH Trapiche Club", askingPrice: 480000000, area: 115, factorNeg: 0.93, factorArea: 1.00, factorLoc: 1.03 },
      { id: 2, name: "Oferta B — Torre Caudal PH", askingPrice: 620000000, area: 142, factorNeg: 0.91, factorArea: 0.97, factorLoc: 1.05 },
      { id: 3, name: "Oferta C — Condominio Amarilo", askingPrice: 395000000, area: 98, factorNeg: 0.94, factorArea: 1.01, factorLoc: 0.98 }
    ],
    rural: [
      { id: 1, name: "Oferta A — Lote Campestre Restrepo", askingPrice: 280000000, area: 1500, factorNeg: 0.90, factorArea: 1.00, factorLoc: 1.04 },
      { id: 2, name: "Oferta B — Finca Ecoturística", askingPrice: 520000000, area: 3200, factorNeg: 0.88, factorArea: 0.98, factorLoc: 1.00 },
      { id: 3, name: "Oferta C — Parcela Parcelación", askingPrice: 340000000, area: 1800, factorNeg: 0.92, factorArea: 1.02, factorLoc: 0.97 }
    ]
  };

  let activeCase = 'barzal';
  let comps = JSON.parse(JSON.stringify(casesData[activeCase]));
  let matrixChart = null;
  let plusvaliaChart = null;
  const fmt = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 });

  // 1. Render Table structure
  function renderTable() {
    tableBody.innerHTML = '';
    comps.forEach((c, idx) => {
      const unitAsked = c.askingPrice / c.area;
      const row = document.createElement('tr');
      row.className = 'border-b border-[#E2DFD6] text-xs font-mono-tech hover:bg-[#F9F8F5] transition-colors';
      row.innerHTML = `
        <td class="py-2.5 px-3 font-semibold text-[#121212]">
          <span class="block">${c.name}</span>
          <span class="text-[10px] text-[#64748B] font-mono-tech font-normal">${fmt.format(c.askingPrice)}</span>
        </td>
        <td class="py-2.5 px-2 text-right font-medium text-[#2A2A2A]">${c.area.toLocaleString('es-CO')} m²</td>
        <td class="py-2.5 px-2 text-right font-medium text-[#2A2A2A]">${fmt.format(Math.round(unitAsked))}</td>
        <td class="py-2.5 px-2 text-center">
          <input type="number" step="0.01" min="0.5" max="1.5" value="${c.factorNeg}" data-idx="${idx}" data-field="factorNeg" class="w-16 text-center border border-[#DCD9CF] bg-white py-1 px-1 rounded font-mono-tech font-bold text-xs factor-input focus:border-[#0C2F5A] focus:outline-none focus:ring-1 focus:ring-[#0C2F5A]">
        </td>
        <td class="py-2.5 px-2 text-center">
          <input type="number" step="0.01" min="0.5" max="1.5" value="${c.factorLoc}" data-idx="${idx}" data-field="factorLoc" class="w-16 text-center border border-[#DCD9CF] bg-white py-1 px-1 rounded font-mono-tech font-bold text-xs factor-input focus:border-[#0C2F5A] focus:outline-none focus:ring-1 focus:ring-[#0C2F5A]">
        </td>
        <td class="py-2.5 px-3 text-right font-bold text-[#0C2F5A]" id="matrix-row-homog-${idx}">$0</td>
      `;
      tableBody.appendChild(row);
    });

    // Attach listeners on newly rendered inputs
    tableBody.querySelectorAll('.factor-input').forEach(input => {
      input.addEventListener('input', (e) => {
        const i = parseInt(e.target.getAttribute('data-idx'));
        const field = e.target.getAttribute('data-field');
        const val = parseFloat(e.target.value);
        if (!isNaN(val)) {
          comps[i][field] = val;
          recalculateStats();
        }
      });

      input.addEventListener('change', (e) => {
        const i = parseInt(e.target.getAttribute('data-idx'));
        const field = e.target.getAttribute('data-field');
        let val = parseFloat(e.target.value);
        if (isNaN(val) || val <= 0) val = 1.0;
        e.target.value = val.toFixed(2);
        comps[i][field] = val;
        recalculateStats();
        playAudioTick('soft');
      });
    });
  }

  // 2. Statistical calculation & Dynamic View Updates
  function recalculateStats() {
    const homogenizedUnitPrices = [];
    const askedUnitPrices = [];

    comps.forEach((c, idx) => {
      const unitAsked = c.askingPrice / c.area;
      askedUnitPrices.push(unitAsked);

      const factorTotal = (c.factorNeg || 1.0) * (c.factorArea || 1.0) * (c.factorLoc || 1.0);
      const unitHomog = unitAsked * factorTotal;
      homogenizedUnitPrices.push(unitHomog);

      const cell = document.getElementById(`matrix-row-homog-${idx}`);
      if (cell) {
        cell.textContent = fmt.format(Math.round(unitHomog));
      }
    });

    const mean = homogenizedUnitPrices.reduce((a, b) => a + b, 0) / homogenizedUnitPrices.length;
    const variance = homogenizedUnitPrices.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / homogenizedUnitPrices.length;
    const stdDev = Math.sqrt(variance);
    const cv = (stdDev / mean) * 100;

    const avgAsked = askedUnitPrices.reduce((a, b) => a + b, 0) / askedUnitPrices.length;
    const discountPct = ((avgAsked - mean) / avgAsked) * 100;

    if (resultAvg) resultAvg.textContent = fmt.format(Math.round(mean)) + ' / m²';
    if (resultCv) resultCv.textContent = cv.toFixed(2) + '%';
    if (resultDiscount) resultDiscount.textContent = `${discountPct >= 0 ? '-' : '+'}${Math.abs(discountPct).toFixed(1)}%`;

    if (resultStatus && cvBadge) {
      if (cv <= 10) {
        resultStatus.innerHTML = `<span class="text-[#2C4A3E] font-bold">● VÁLIDO RAA</span> (CV ≤ 10% IGAC 620)`;
        cvBadge.className = 'px-1.5 py-0.2 rounded text-[9px] font-mono-tech bg-emerald-100 text-emerald-800 font-bold';
        cvBadge.textContent = '≤ 10% (VÁLIDO)';
      } else {
        resultStatus.innerHTML = `<span class="text-[#8E5B4C] font-bold">▲ REVISAR MUESTRA</span> (Dispersión > 10%)`;
        cvBadge.className = 'px-1.5 py-0.2 rounded text-[9px] font-mono-tech bg-amber-100 text-amber-800 font-bold';
        cvBadge.textContent = '> 10% (REVISAR)';
      }
    }

    // Dynamic WhatsApp quote sync
    if (whatsappQuote) {
      const msg = encodeURIComponent(
        `🏛️ *LONJA DE AVALÚOS DEL META S.A.S.* - Validación Pericial de Muestra\n\n` +
        `• *Caso Analizado:* ${activeCase.toUpperCase()}\n` +
        `• *Media Homogeneizada:* ${fmt.format(Math.round(mean))} / m²\n` +
        `• *Coeficiente de Variación (CV):* ${cv.toFixed(2)}%\n` +
        `• *Ajuste Especulación Neutralizado:* -${discountPct.toFixed(1)}%\n` +
        `• *Criterio Normativo:* ${cv <= 10 ? 'Admisible Ley 1673' : 'Requiere Depuración'}\n\n` +
        `Deseo radicar esta muestra para emisión de dictamen pericial colegiado.`
      );
      whatsappQuote.href = `https://wa.me/573123661758?text=${msg}`;
    }

    // Update ApexChart series smoothly
    if (matrixChart) {
      matrixChart.updateSeries([
        {
          name: 'Precio Pedido Oferta ($/m²)',
          data: askedUnitPrices.map(p => Math.round(p))
        },
        {
          name: 'Valor Depurado RAA ($/m²)',
          data: homogenizedUnitPrices.map(p => Math.round(p))
        }
      ], true);
    }
  }

  // 3. Initialize ApexCharts Instances
  function initCharts() {
    if (typeof ApexCharts === 'undefined' || !chartBarEl) return;

    // Bar Chart: Comparables Raw Asking vs Homogenized Pericial
    const barOptions = {
      chart: {
        type: 'bar',
        height: 310,
        toolbar: { show: false },
        fontFamily: 'Plus Jakarta Sans, sans-serif',
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 350
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '50%',
          borderRadius: 4
        }
      },
      dataLabels: { enabled: false },
      stroke: { show: true, width: 2, colors: ['transparent'] },
      colors: ['#8BA3B8', '#0C2F5A'],
      series: [
        {
          name: 'Precio Pedido Oferta ($/m²)',
          data: comps.map(c => Math.round(c.askingPrice / c.area))
        },
        {
          name: 'Valor Depurado RAA ($/m²)',
          data: comps.map(c => Math.round((c.askingPrice / c.area) * (c.factorNeg || 1) * (c.factorLoc || 1)))
        }
      ],
      xaxis: {
        categories: comps.map(c => c.name.split(' — ')[1] || c.name),
        labels: {
          style: {
            colors: '#4F4E4A',
            fontSize: '11px',
            fontWeight: 600
          }
        }
      },
      yaxis: {
        labels: {
          formatter: (val) => '$' + (val / 1000000).toFixed(1) + 'M',
          style: {
            colors: '#4F4E4A',
            fontSize: '11px',
            fontFamily: 'JetBrains Mono, monospace'
          }
        }
      },
      grid: {
        borderColor: '#E2DFD6',
        strokeDashArray: 3
      },
      legend: {
        position: 'top',
        fontSize: '11px',
        fontFamily: 'Plus Jakarta Sans, sans-serif',
        markers: { radius: 3 }
      },
      tooltip: {
        theme: 'dark',
        y: {
          formatter: (val) => fmt.format(val) + ' / m²'
        }
      }
    };

    matrixChart = new ApexCharts(chartBarEl, barOptions);
    matrixChart.render();

    // Area Chart: Historical Appreciation / Plusvalía Meta
    if (chartHistoryEl) {
      const historyOptions = {
        chart: {
          type: 'area',
          height: 310,
          toolbar: { show: false },
          fontFamily: 'Plus Jakarta Sans, sans-serif'
        },
        colors: ['#2C4A3E'],
        series: [{
          name: 'Valor m² Homogeneizado Meta',
          data: [2450000, 2680000, 2950000, 3250000, 3580000, 3890000, 4180000]
        }],
        xaxis: {
          categories: ['2020', '2021', '2022', '2023', '2024', '2025', '2026 Proy.'],
          labels: {
            style: {
              colors: '#4F4E4A',
              fontSize: '11px',
              fontWeight: 600
            }
          }
        },
        yaxis: {
          labels: {
            formatter: (val) => '$' + (val / 1000000).toFixed(1) + 'M',
            style: {
              colors: '#4F4E4A',
              fontSize: '11px',
              fontFamily: 'JetBrains Mono, monospace'
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [20, 100]
          }
        },
        stroke: { curve: 'smooth', width: 3 },
        grid: { borderColor: '#E2DFD6', strokeDashArray: 3 },
        tooltip: {
          theme: 'dark',
          y: {
            formatter: (val) => fmt.format(val) + ' / m²'
          }
        }
      };

      plusvaliaChart = new ApexCharts(chartHistoryEl, historyOptions);
      plusvaliaChart.render();
    }
  }

  // 4. Tab Switcher (Bar Chart vs Plusvalía Area Chart)
  if (tabBarBtn && tabHistoryBtn && chartBarEl && chartHistoryEl) {
    tabBarBtn.addEventListener('click', () => {
      chartBarEl.classList.remove('hidden');
      chartHistoryEl.classList.add('hidden');
      tabBarBtn.classList.remove('bg-[#F0EFE9]', 'text-[#121212]');
      tabBarBtn.classList.add('bg-[#0C2F5A]', 'text-white');
      tabHistoryBtn.classList.remove('bg-[#0C2F5A]', 'text-white');
      tabHistoryBtn.classList.add('bg-[#F0EFE9]', 'text-[#121212]');
      playAudioTick('soft');
      window.dispatchEvent(new Event('resize'));
    });

    tabHistoryBtn.addEventListener('click', () => {
      chartHistoryEl.classList.remove('hidden');
      chartBarEl.classList.add('hidden');
      tabHistoryBtn.classList.remove('bg-[#F0EFE9]', 'text-[#121212]');
      tabHistoryBtn.classList.add('bg-[#0C2F5A]', 'text-white');
      tabBarBtn.classList.remove('bg-[#0C2F5A]', 'text-white');
      tabBarBtn.classList.add('bg-[#F0EFE9]', 'text-[#121212]');
      playAudioTick('soft');
      window.dispatchEvent(new Event('resize'));
    });
  }

  // 5. Preset Case Switcher Buttons
  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cCase = btn.getAttribute('data-case');
      if (!casesData[cCase]) return;

      activeCase = cCase;
      comps = JSON.parse(JSON.stringify(casesData[activeCase]));

      presetBtns.forEach(b => {
        b.classList.remove('bg-[#121212]', 'text-white', 'shadow-sm');
        b.classList.add('bg-white', 'text-[#121212]');
      });
      btn.classList.add('bg-[#121212]', 'text-white', 'shadow-sm');
      btn.classList.remove('bg-white', 'text-[#121212]');

      renderTable();
      recalculateStats();

      if (matrixChart) {
        matrixChart.updateOptions({
          xaxis: {
            categories: comps.map(c => c.name.split(' — ')[1] || c.name)
          }
        });
      }

      playAudioTick('soft');
    });
  });

  // 6. Reset Factors Button
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      comps = JSON.parse(JSON.stringify(casesData[activeCase]));
      renderTable();
      recalculateStats();
      playAudioTick('soft');
    });
  }

  // Initial Execution
  renderTable();
  recalculateStats();
  initCharts();
}

/* ==========================================================================
   5. INSTANT PROPERTY CADASTRAL DIAGNOSTIC
   ========================================================================== */
function initPropertyLookup() {
  const form = document.getElementById('property-lookup-form');
  const input = document.getElementById('property-query-input');
  const resultBox = document.getElementById('property-lookup-result');

  if (!form || !input || !resultBox) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = input.value.trim();
    if (!query) return;

    playAudioTick('chime');

    // Simulate scanning
    resultBox.innerHTML = `
      <div class="p-6 text-center">
        <div class="inline-block w-6 h-6 border-2 border-[#121212] border-t-transparent rounded-full animate-spin mb-3"></div>
        <p class="text-xs font-mono-tech text-[#4F4E4A] uppercase tracking-wider font-semibold">
          Consultando base cartográfica y de ordenamiento territorial...
        </p>
      </div>
    `;
    resultBox.classList.remove('hidden');

    setTimeout(() => {
      const isMatricula = /\d{3}-\d+/.test(query);
      const folioSimulado = isMatricula ? query : '230-149821';
      const sector = query.toLowerCase().includes('rural') || query.toLowerCase().includes('finca') ? 'Rural / Agroforestal' : 'Urbano / Mixto';

      resultBox.innerHTML = `
        <div class="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-xl">
          <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3 mb-4">
            <div>
              <span class="text-xs font-mono-tech uppercase text-slate-500 font-bold block">RESULTADO PRELIMINAR DE CONSULTA</span>
              <h4 class="font-display font-extrabold text-lg text-slate-900">${query.toUpperCase()}</h4>
            </div>
            <span class="text-xs font-mono-tech px-2.5 py-1 bg-emerald-50 text-[#2C4A3E] font-bold border border-emerald-200 rounded-full">
              ● REGISTRO ACTIVO
            </span>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs mb-4">
            <div class="bg-slate-50 p-3 border border-slate-200 rounded-xl">
              <span class="text-slate-500 block font-mono-tech text-xs font-semibold">MATRÍCULA SNR:</span>
              <span class="font-bold font-mono-tech text-slate-900">${folioSimulado}</span>
            </div>
            <div class="bg-slate-50 p-3 border border-slate-200 rounded-xl">
              <span class="text-slate-500 block font-mono-tech text-xs font-semibold">CLASIFICACIÓN POT:</span>
              <span class="font-bold text-slate-900">${sector}</span>
            </div>
            <div class="bg-slate-50 p-3 border border-slate-200 rounded-xl">
              <span class="text-slate-500 block font-mono-tech text-xs font-semibold">MUNICIPIO:</span>
              <span class="font-bold text-slate-900">Villavicencio (Meta)</span>
            </div>
            <div class="bg-slate-50 p-3 border border-slate-200 rounded-xl">
              <span class="text-slate-500 block font-mono-tech text-xs font-semibold">ESTADO CATASTRAL:</span>
              <span class="font-bold text-[#2C4A3E]">Consistente</span>
            </div>
          </div>

          <div class="bg-amber-50/80 border border-amber-200 rounded-xl p-3.5 text-xs text-amber-900 mb-4">
            <strong>Recomendación pericial:</strong> Para transacciones seguras o reclamaciones ante el IGAC, se sugiere solicitar el estudio <em>"Compra Segura"</em> o el <em>"Peritaje de Avalúo Comercial RAA"</em>.
          </div>

          <div class="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
            <span class="text-xs text-slate-500 font-semibold">¿Deseas el informe pericial certificado completo?</span>
            <a href="https://wa.me/573123661758?text=${encodeURIComponent(`Hola Lonja de Avalúos. Consulté el predio "${query}" en el visor y deseo cotizar el estudio pericial / avalúo certificado formal.`)}" target="_blank" rel="noopener" class="btn-brutalist bg-[#0C2F5A] hover:bg-[#1E3A8A] text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-md inline-flex items-center gap-1.5">
              <span>Continuar con Perito RAA</span>
              <i data-lucide="arrow-right" class="w-3.5 h-3.5 text-emerald-300"></i>
            </a>
          </div>
        </div>
      `;
      lucide.createIcons();
    }, 700);
  });
}

/* ==========================================================================
   6. PORTFOLIO GALLERY OF REAL EVALUATED PROPERTIES
   ========================================================================== */
function initPortfolioGallery() {
  const container = document.getElementById('portfolio-grid');
  if (!container || !window.LONJA_DATA) return;

  const cases = window.LONJA_DATA.portfolioCases;

  container.innerHTML = '';
  cases.forEach(item => {
    const card = document.createElement('div');
    card.className = 'group card-editorial bg-white border border-slate-200/90 rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all';

    card.innerHTML = `
      <div class="relative h-60 overflow-hidden bg-slate-900">
        <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy">
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        <div class="absolute top-3 left-3 flex gap-2">
          <span class="text-xs font-mono-tech px-2.5 py-1 bg-slate-900/80 backdrop-blur text-white border border-white/20 font-semibold rounded-md">
            ${item.badge}
          </span>
        </div>
        <div class="absolute bottom-3 left-3 right-3 text-white">
          <span class="text-xs font-mono-tech text-white/90 block uppercase font-medium">${item.category} • ${item.location}</span>
          <h3 class="font-display font-bold text-base leading-tight">${item.title}</h3>
        </div>
      </div>

      <div class="p-5 flex-1 flex flex-col justify-between">
        <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
          ${item.description}
        </p>

        <div class="space-y-1.5 text-xs font-mono-tech pt-3 border-t border-slate-100 text-slate-500 font-medium">
          <div class="flex justify-between">
            <span>COORDENADAS:</span>
            <span class="text-slate-900 font-semibold">${item.coords}</span>
          </div>
          <div class="flex justify-between">
            <span>ÁREA TASADA:</span>
            <span class="text-slate-900 font-semibold">${item.area}</span>
          </div>
          <div class="flex justify-between">
            <span>METODOLOGÍA:</span>
            <span class="text-[#121212] font-semibold">${item.methodology}</span>
          </div>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

/* ==========================================================================
   7. CONTACT FORM HANDLER WITH LEAD PERSISTENCE & POPUP FALLBACK
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-main-form');
  const alertBox = document.getElementById('contact-alert');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('c-name')?.value.trim() || 'Cliente';
    const phone = document.getElementById('c-phone')?.value.trim() || 'No especificado';
    const service = document.getElementById('c-service')?.value || 'Avalúo Comercial';
    const message = document.getElementById('c-message')?.value.trim() || 'Sin detalles adicionales';

    playAudioTick('chime');

    // Generate unique institutional ticket/radicado number
    const radicadoNum = 'RAD-' + new Date().getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000);
    const radicadoDate = new Date().toLocaleString('es-CO', { dateStyle: 'short', timeStyle: 'short' });

    // 1. Vault persistence in localStorage (no lead loss)
    const leadRecord = {
      radicado: radicadoNum,
      timestamp: new Date().toISOString(),
      dateStr: radicadoDate,
      name,
      phone,
      service,
      message
    };

    try {
      const existingLeads = JSON.parse(localStorage.getItem('lonja_leads_vault') || '[]');
      existingLeads.unshift(leadRecord);
      if (existingLeads.length > 20) existingLeads.pop();
      localStorage.setItem('lonja_leads_vault', JSON.stringify(existingLeads));
    } catch (err) {
      // Storage fallback
    }

    // 2. Prepare structured WhatsApp payload
    const whatsappText = 
      `🏛️ *LONJA DE AVALÚOS DEL META S.A.S.*\n` +
      `📋 *RADICADO:* ${radicadoNum}\n` +
      `📅 *Fecha:* ${radicadoDate}\n\n` +
      `👤 *Solicitante:* ${name}\n` +
      `📞 *Teléfono:* ${phone}\n` +
      `📌 *Servicio requerido:* ${service}\n` +
      `📝 *Detalles del encargo:* ${message}\n\n` +
      `Solicito asignación de perito RAA y cotización formal de honorarios.`;

    const whatsappUrl = `https://wa.me/573123661758?text=${encodeURIComponent(whatsappText)}`;

    // 3. Attempt direct open (may be intercepted by popup blockers on iOS/Android)
    try {
      window.open(whatsappUrl, '_blank');
    } catch (e) {
      // Handled by infallible fallback button below
    }

    // 4. Render high-trust confirmation box with infallible direct CTA
    if (alertBox) {
      alertBox.classList.remove('hidden');
      alertBox.innerHTML = `
        <div class="bg-slate-900 border border-emerald-500/60 p-5 font-mono-tech text-xs text-white shadow-xl rounded-2xl mt-4">
          <div class="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
            <span class="text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              SOLICITUD RADICADA
            </span>
            <span class="text-white/90 font-bold bg-black/50 px-2 py-0.5 border border-white/20">
              ${radicadoNum}
            </span>
          </div>

          <p class="text-slate-300 text-xs leading-relaxed mb-4 font-sans-body">
            Estimado(a) <strong>${name}</strong>, su encargo pericial ha sido registrado y respaldado en la base interna. Para vincular su radicado inmediatamente con el perito RAA de turno:
          </p>

          <a href="${whatsappUrl}" target="_blank" rel="noopener" class="btn-brutalist w-full bg-[#2C4A3E] hover:bg-emerald-600 text-white font-mono-tech text-xs font-bold uppercase tracking-wider py-3.5 px-4 text-center flex items-center justify-center gap-2 border border-emerald-400/40 shadow-sm transition-all mb-3">
            <i data-lucide="message-circle" class="w-4 h-4"></i>
            <span>Abrir WhatsApp con Radicado ${radicadoNum}</span>
          </a>

          <div class="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/10 text-xs text-slate-400">
            <span>¿Prefiere llamada directa?</span>
            <a href="tel:+573123661758" class="text-emerald-400 hover:underline font-bold">+57 310 852 3904</a>
          </div>
        </div>
      `;

      if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
      }
    }

    form.reset();
  });
}

/* ==========================================================================
   8. AUDIO SYSTEM REMOVED (SILENT CORPORATE UX)
   ========================================================================== */
function playAudioTick() {}

/* ==========================================================================
   9. MOBILE MENU CONTROLLER
   ========================================================================== */
function initMobileMenu() {
  const openBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-menu-close');
  const menu = document.getElementById('mobile-menu-drawer');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!openBtn || !menu) return;

  function open() {
    menu.classList.remove('translate-x-full');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    menu.classList.add('translate-x-full');
    document.body.style.overflow = '';
  }

  openBtn.addEventListener('click', open);
  if (closeBtn) closeBtn.addEventListener('click', close);
  links.forEach(l => l.addEventListener('click', close));
}

/* ==========================================================================
   10. STAGING GATEKEEPER & ACCESS CONTROL
   ========================================================================== */
function initStagingGatekeeper() {
  const gatekeeper = document.getElementById('staging-gatekeeper');
  if (!gatekeeper) return;

  const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  const isAuthorized = sessionStorage.getItem('lonja_staging_authorized') === 'true' || localStorage.getItem('lonja_staging_authorized') === 'true';

  if (isAuthorized) {
    gatekeeper.classList.add('hidden');
    document.body.style.overflow = '';
    return;
  }

  // On localhost keep it accessible for immediate local testing
  if (isLocal) {
    gatekeeper.classList.add('hidden');
    return;
  }

  // On staging / remote domains, require password
  gatekeeper.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  const form = document.getElementById('staging-gate-form');
  const input = document.getElementById('staging-pass-input');
  const errorMsg = document.getElementById('staging-error-msg');

  if (form && input) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const entered = input.value.trim().toLowerCase();
      // Valid access passwords: lonja2026, meta2026, lonja, admin2026
      if (entered === 'lonja2026' || entered === 'meta2026' || entered === 'lonja' || entered === 'admin2026') {
        sessionStorage.setItem('lonja_staging_authorized', 'true');
        localStorage.setItem('lonja_staging_authorized', 'true');
        gatekeeper.classList.add('transition-opacity', 'duration-300', 'opacity-0');
        setTimeout(() => {
          gatekeeper.classList.add('hidden');
          document.body.style.overflow = '';
        }, 300);
      } else {
        if (errorMsg) {
          errorMsg.classList.remove('hidden');
          input.classList.add('border-rose-500');
        }
      }
    });
  }
}
