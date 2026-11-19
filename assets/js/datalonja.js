/**
 * LONJA DE AVALÚOS DEL META S.A.S. · DATALONJA PRO
 * Hub Especializado para Avaluadores, Peritos RAA & Topógrafos
 * Marketplace de Inteligencia Territorial & Herramientas Econométricas
 */

document.addEventListener('DOMContentLoaded', () => {
  LonjaModal.initListeners();
  initGeovisorPericial();
  initDataLonjaCatalog();
  initHomogenizationCalculator();
  initMobileMenu();
  lucide.createIcons();
});

/* ==========================================================================
   SISTEMA DE MODAL PERICIAL & BÓVEDA CON CLAVE / WOMPI (GLOBAL)
   ========================================================================== */
const LonjaModal = {
  getBackdrop() {
    return document.getElementById('datalonja-modal-backdrop');
  },
  getBody() {
    return document.getElementById('datalonja-modal-content');
  },
  getCloseBtn() {
    return document.getElementById('datalonja-modal-close');
  },

  open() {
    const backdrop = this.getBackdrop();
    if (backdrop) {
      backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  },

  close() {
    const backdrop = this.getBackdrop();
    if (backdrop) {
      backdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  },

  initListeners() {
    const closeBtn = this.getCloseBtn();
    const backdrop = this.getBackdrop();
    if (closeBtn) {
      closeBtn.onclick = () => this.close();
    }
    if (backdrop) {
      backdrop.onclick = (e) => {
        if (e.target === backdrop) this.close();
      };
    }
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.close();
    });
  },

  openProduct(prod) {
    const modalBody = this.getBody();
    if (!modalBody) return;

    const whatsappText = `📐 *LONJA DE AVALÚOS DEL META S.A.S. · DATALONJA PRO*\nAdquisición de Licencia para Avaluadores:\n\n• *Herramienta:* ${prod.name}\n• *Código:* ${prod.id}\n• *Inversión:* ${prod.priceDisplay}\n\nPor favor indíquenme el proceso de descarga y factura.`;

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
              INVERSIÓN EN HERRAMIENTA PERICIAL:
            </span>
            <span class="font-display font-black text-2xl sm:text-3xl text-slate-900 block mb-3">${prod.priceDisplay}</span>
            <div class="flex flex-col gap-2">
              <button id="btn-open-checkout-sim" class="btn-brutalist w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 px-4 font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-2 rounded-xl shadow-lg transition-all">
                <i data-lucide="key" class="w-4 h-4 text-emerald-200"></i>
                <span>Simular Pago & Desbloqueo por Clave</span>
              </button>
              <a href="https://wa.me/573123661758?text=${encodeURIComponent(whatsappText)}" target="_blank" rel="noopener" class="btn-brutalist w-full bg-[#0C2F5A] hover:bg-[#1E3A8A] text-white py-2.5 px-4 font-bold text-xs text-center flex items-center justify-center gap-2 rounded-xl shadow-md">
                <i data-lucide="message-circle" class="w-4 h-4 text-emerald-300"></i>
                <span>Comprar vía WhatsApp Directo</span>
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
              <div class="sm:col-span-1 rounded-xl overflow-hidden border border-slate-200 shadow-sm relative group bg-slate-950">
                <img src="${prod.samplePreview.photoUrl}" alt="Registro Fotográfico de Oferta" class="w-full h-36 object-cover filter blur-[10px] brightness-75 scale-110" />
                <div class="absolute inset-0 flex flex-col items-center justify-center p-2 text-center bg-black/40 backdrop-blur-[2px]">
                  <span class="text-base mb-0.5">🔒</span>
                  <span class="text-[10px] font-bold text-white uppercase font-mono-tech">Foto y Aviso Protegidos</span>
                  <span class="text-[9px] text-emerald-300 font-mono-tech mt-0.5">Se revela al desbloquear</span>
                </div>
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
              ⚡ Ficha pericial oficial conforme a la Resolución IGAC 620 de 2008 y Ley 1673.
            </span>
            <button id="btn-sample-unlock-direct" class="w-full sm:w-auto px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-mono-tech text-xs font-bold uppercase tracking-wider rounded-xl shadow-md flex items-center justify-center gap-2 transition-all">
              <i data-lucide="unlock" class="w-4 h-4 text-emerald-200"></i>
              <span>Desbloquear Ficha con Licencia</span>
            </button>
          </div>
        </div>
      ` : ''}
    `;

    lucide.createIcons();

    const btnSim = modalBody.querySelector('#btn-open-checkout-sim');
    if (btnSim) {
      btnSim.addEventListener('click', () => this.renderCheckout(prod));
    }

    const btnSampleUnlock = modalBody.querySelector('#btn-sample-unlock-direct');
    if (btnSampleUnlock) {
      btnSampleUnlock.addEventListener('click', () => this.renderCheckout(prod));
    }

    this.open();
  },

  renderCheckout(prod) {
    const modalBody = this.getBody();
    if (!modalBody) return;

    if (prod.isSingleOffer) {
      const isRural = (prod.zoneType === 'rural') || (prod.offerId && prod.offerId.includes('-R'));
      const zoneBadge = isRural 
        ? '<span class="text-xs font-mono-tech px-2.5 py-0.5 bg-emerald-700 text-white font-bold rounded-md uppercase">🟢 OFERTA RURAL AGROPECUARIA</span>'
        : '<span class="text-xs font-mono-tech px-2.5 py-0.5 bg-blue-700 text-white font-bold rounded-md uppercase">🔵 OFERTA URBANA CATASTRAL</span>';

      modalBody.innerHTML = `
        <div class="border-b border-slate-200 pb-4 mb-5">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
            <div class="flex items-center gap-2">
              ${zoneBadge}
              <span class="text-xs font-mono-tech text-amber-800 bg-amber-100 border border-amber-300 px-2 py-0.5 rounded font-bold">
                MODO PRUEBA (DEMO)
              </span>
            </div>
            <span class="text-xs font-mono-tech font-bold text-slate-500">
              CÓDIGO DIVIPOLA: ${prod.offerId}
            </span>
          </div>

          <h2 class="font-display font-black text-2xl sm:text-3xl text-slate-900 leading-tight">
            Desbloquear Muestra Pericial: ${prod.offerId}
          </h2>
          <p class="text-xs text-slate-600 mt-1">
            ${prod.muni || 'Granada (Meta)'} · ${prod.tipo} · Área: <strong class="text-slate-900">${prod.area}</strong>
          </p>
        </div>

        <!-- Selector de Paquetes / Modalidad de Compra con Descuento -->
        <div class="mb-5">
          <div class="flex items-center justify-between mb-2">
            <label class="block text-[11px] font-mono-tech uppercase font-bold text-slate-700">
              Selecciona tu Modalidad de Desbloqueo:
            </label>
            <span class="text-[10px] font-mono-tech text-emerald-700 font-bold">Res. IGAC 620 / Ley 1673</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5">
            <!-- Nivel 1: Ficha Individual -->
            <div id="pkg-card-single" class="cursor-pointer p-3.5 rounded-xl border-2 border-emerald-600 bg-emerald-50/60 shadow-sm transition-all relative">
              <div class="flex items-center justify-between mb-1">
                <span class="text-[9px] font-mono-tech font-bold uppercase text-slate-600">1 Muestra</span>
                <span class="text-[9px] font-mono-tech font-bold bg-slate-200 text-slate-800 px-1.5 py-0.2 rounded">Unitaria</span>
              </div>
              <h4 class="font-display font-extrabold text-xs text-slate-900 mb-0.5">Ficha Individual</h4>
              <span class="font-display font-black text-base text-emerald-800 block mb-1">$ 7.000 COP</span>
              <p class="text-[11px] text-slate-600 leading-tight">
                Muestra puntual ${prod.offerId} con foto sin censura, celular y PDF pericial.
              </p>
            </div>

            <!-- Nivel 2: Pack Trío (Recomendado) -->
            <div id="pkg-card-trio" class="cursor-pointer p-3.5 rounded-xl border-2 border-slate-200 bg-white hover:border-amber-400 hover:shadow-md transition-all relative">
              <div class="absolute -top-2.5 right-2 px-2 py-0.5 bg-amber-500 text-white font-mono-tech text-[8px] font-black uppercase rounded shadow-sm">
                RECOMENDADO RAA
              </div>
              <div class="flex items-center justify-between mb-1">
                <span class="text-[9px] font-mono-tech font-bold uppercase text-amber-800">3 Muestras</span>
                <span class="text-[9px] font-mono-tech font-bold bg-amber-100 text-amber-900 px-1.5 py-0.2 rounded">Ahorra $3.000</span>
              </div>
              <h4 class="font-display font-extrabold text-xs text-slate-900 mb-0.5">Pack Trío Mercado</h4>
              <span class="font-display font-black text-base text-slate-900 block mb-1">$ 18.000 COP</span>
              <p class="text-[11px] text-slate-600 leading-tight">
                Esta ficha + 2 a tu elección ($6.000 c/u). Cumple mínimo de la Res. IGAC 620.
              </p>
            </div>

            <!-- Nivel 3: Pack Completo -->
            <div id="pkg-card-full" class="cursor-pointer p-3.5 rounded-xl border-2 border-slate-200 bg-white hover:border-indigo-400 hover:shadow-md transition-all relative">
              <div class="flex items-center justify-between mb-1">
                <span class="text-[9px] font-mono-tech font-bold uppercase text-indigo-800">Zona Total</span>
                <span class="text-[9px] font-mono-tech font-bold bg-indigo-100 text-indigo-900 px-1.5 py-0.2 rounded">Ahorra $7.000</span>
              </div>
              <h4 class="font-display font-extrabold text-xs text-slate-900 mb-0.5">Pack Completo + KMZ</h4>
              <span class="font-display font-black text-base text-slate-900 block mb-1">$ 35.000 COP</span>
              <p class="text-[11px] text-slate-600 leading-tight">
                Todas las 7 ofertas urbanas y rurales + Capa KMZ maestra para Google Earth.
              </p>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
          <!-- Panel 1: Modo Prueba (Validación por Clave) -->
          <div class="bg-gradient-to-br from-white to-emerald-50/50 p-5 border-2 border-emerald-600/60 rounded-2xl flex flex-col justify-between shadow-sm">
            <div>
              <div class="flex items-center gap-2 mb-2">
                <span class="w-6 h-6 rounded-full bg-[#0C2F5A] text-white text-xs font-bold flex items-center justify-center font-mono-tech">1</span>
                <h4 class="text-xs font-mono-tech uppercase tracking-wider text-slate-900 font-black">
                  Modo Prueba: Desbloqueo por Clave
                </h4>
              </div>

              <p class="text-xs text-slate-600 mb-3 leading-relaxed">
                Ingresa tu clave de licencia autorizada o usa la clave demo para evaluar la muestra inmediatamente:
              </p>

              <div class="mb-3">
                <button id="btn-quick-fill-key" type="button" class="w-full mb-2.5 py-1.5 px-3 bg-amber-100 hover:bg-amber-200 text-amber-950 border border-amber-300 rounded-xl text-xs font-mono-tech font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm">
                  <i data-lucide="key" class="w-3.5 h-3.5 text-amber-700"></i>
                  <span>Autocompletar Clave Demo: <strong>LONJA2026</strong></span>
                </button>

                <label class="block text-[11px] font-mono-tech font-bold text-slate-700 mb-1">Clave de Licencia / PIN:</label>
                <input type="text" id="sim-key-input" placeholder="Ej: LONJA2026" class="w-full text-sm font-mono-tech uppercase font-bold p-3 bg-white border-2 border-emerald-600/70 rounded-xl focus:outline-none focus:border-emerald-600 tracking-wider shadow-inner" />
                
                <p id="key-error-msg" class="text-xs text-rose-600 font-mono-tech font-bold mt-2 hidden"></p>
              </div>
            </div>

            <div>
              <button id="btn-submit-key" class="btn-brutalist w-full bg-emerald-700 hover:bg-emerald-800 text-white font-mono-tech text-xs font-bold uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-md flex items-center justify-center gap-2 transition-all">
                <i data-lucide="unlock" class="w-4 h-4 text-emerald-200"></i>
                <span id="btn-key-text">Validar Clave & Ver Ficha ($7.000 COP)</span>
              </button>
              <span class="text-[10px] text-center text-slate-500 font-mono-tech block mt-2">
                Claves aceptadas: LONJA2026 · GRANADA2026 · VILLAVO2026 · FICHA7K
              </span>
            </div>
          </div>

          <!-- Panel 2: Pasarela Oficial Wompi (Bancolombia) -->
          <div class="bg-slate-50 p-5 border border-slate-200 rounded-2xl flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-2 mb-2">
                <span class="w-6 h-6 rounded-full bg-[#6366F1] text-white text-xs font-bold flex items-center justify-center font-mono-tech">2</span>
                <h4 class="text-xs font-mono-tech uppercase tracking-wider text-slate-900 font-bold flex items-center gap-1.5">
                  <span>Pasarela Wompi</span>
                  <span class="text-[10px] bg-indigo-100 text-indigo-800 px-1.5 py-0.5 rounded font-bold">Producción</span>
                </h4>
              </div>

              <p class="text-xs text-slate-600 mb-3 leading-relaxed">
                En producción, este botón abre directamente la pasarela oficial <strong>Wompi (Bancolombia)</strong> con el monto exacto del paquete seleccionado.
              </p>

              <div class="p-3 bg-white border border-slate-200 rounded-xl mb-4 space-y-2">
                <div class="flex items-center justify-between text-xs">
                  <span class="text-slate-500 font-semibold">Total a Cancelar:</span>
                  <span id="checkout-price-display" class="font-display font-extrabold text-base text-emerald-800">$ 7.000 COP</span>
                </div>
                <div class="flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100 pt-1.5">
                  <span>Medios de Pago:</span>
                  <span class="font-mono-tech font-bold text-slate-700">Nequi · Bancolombia · PSE · Tarjetas</span>
                </div>
              </div>
            </div>

            <div>
              <button id="btn-submit-wompi-sim" class="btn-brutalist w-full bg-[#1E1B4B] hover:bg-[#2E1065] text-white font-mono-tech text-xs font-bold uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-md flex items-center justify-center gap-2 transition-all border border-indigo-500/30">
                <i data-lucide="credit-card" class="w-4 h-4 text-emerald-400"></i>
                <span id="btn-wompi-text">Pagar $7.000 COP con Wompi</span>
              </button>
              <span class="text-[10px] text-center text-slate-400 font-mono-tech block mt-2">
                ⚡ En demo simula la confirmación bancaria en 1 segundo
              </span>
            </div>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-200">
          <button id="btn-close-modal-sheet" class="text-slate-500 hover:text-slate-800 font-mono-tech text-xs font-bold py-1">
            ← Volver al Geovisor
          </button>
          <a href="https://wa.me/573123661758?text=Hola%20Lonja,%20deseo%20adquirir%20muestras%20comerciales%20de%20Granada%20(${prod.offerId})" target="_blank" rel="noopener" class="text-emerald-700 hover:text-emerald-800 font-mono-tech text-xs font-bold flex items-center gap-1.5">
            <i data-lucide="message-circle" class="w-3.5 h-3.5"></i>
            <span>Comprar por WhatsApp (+57 312 366 1758)</span>
          </a>
        </div>
      `;

      lucide.createIcons();

      let selectedPackage = {
        type: 'single',
        name: `Ficha Individual: ${prod.offerId}`,
        priceVal: 7000,
        priceText: '$ 7.000 COP'
      };

      const cardSingle = modalBody.querySelector('#pkg-card-single');
      const cardTrio = modalBody.querySelector('#pkg-card-trio');
      const cardFull = modalBody.querySelector('#pkg-card-full');
      const totalDisplay = modalBody.querySelector('#checkout-price-display');
      const btnKeyText = modalBody.querySelector('#btn-key-text');
      const btnWompiText = modalBody.querySelector('#btn-wompi-text');
      const btnQuickKey = modalBody.querySelector('#btn-quick-fill-key');
      const keyInput = modalBody.querySelector('#sim-key-input');
      const keyError = modalBody.querySelector('#key-error-msg');
      const btnSubmitKey = modalBody.querySelector('#btn-submit-key');
      const btnWompi = modalBody.querySelector('#btn-submit-wompi-sim');
      const btnClose = modalBody.querySelector('#btn-close-modal-sheet');

      function updatePkgUI(type) {
        [cardSingle, cardTrio, cardFull].forEach(c => {
          if (!c) return;
          c.classList.remove('border-emerald-600', 'bg-emerald-50/60', 'border-amber-500', 'bg-amber-50/50', 'border-indigo-600', 'bg-indigo-50/50');
          c.classList.add('border-slate-200', 'bg-white');
        });

        if (type === 'single') {
          selectedPackage = { type: 'single', name: `Ficha Individual: ${prod.offerId}`, priceVal: 7000, priceText: '$ 7.000 COP' };
          cardSingle.classList.remove('border-slate-200', 'bg-white');
          cardSingle.classList.add('border-emerald-600', 'bg-emerald-50/60');
          if (totalDisplay) totalDisplay.textContent = '$ 7.000 COP';
          if (btnKeyText) btnKeyText.textContent = 'Validar Clave & Ver Ficha ($7.000 COP)';
          if (btnWompiText) btnWompiText.textContent = 'Pagar $7.000 COP con Wompi';
        } else if (type === 'trio') {
          selectedPackage = { type: 'trio', name: `Pack Trío Metodológico (3 Fichas RAA)`, priceVal: 18000, priceText: '$ 18.000 COP' };
          cardTrio.classList.remove('border-slate-200', 'bg-white');
          cardTrio.classList.add('border-amber-500', 'bg-amber-50/50');
          if (totalDisplay) totalDisplay.textContent = '$ 18.000 COP';
          if (btnKeyText) btnKeyText.textContent = 'Validar Clave & Ver Pack Trío ($18.000 COP)';
          if (btnWompiText) btnWompiText.textContent = 'Pagar $18.000 COP con Wompi (Pack 3)';
        } else if (type === 'full') {
          selectedPackage = { type: 'full', name: `Pack Completo Zona Granada + KMZ`, priceVal: 35000, priceText: '$ 35.000 COP' };
          cardFull.classList.remove('border-slate-200', 'bg-white');
          cardFull.classList.add('border-indigo-600', 'bg-indigo-50/50');
          if (totalDisplay) totalDisplay.textContent = '$ 35.000 COP';
          if (btnKeyText) btnKeyText.textContent = 'Validar Clave & Ver Pack Completo ($35.000 COP)';
          if (btnWompiText) btnWompiText.textContent = 'Pagar $35.000 COP con Wompi (Pack Completo)';
        }
      }

      if (cardSingle) cardSingle.addEventListener('click', () => updatePkgUI('single'));
      if (cardTrio) cardTrio.addEventListener('click', () => updatePkgUI('trio'));
      if (cardFull) cardFull.addEventListener('click', () => updatePkgUI('full'));

      if (btnQuickKey && keyInput) {
        btnQuickKey.addEventListener('click', () => {
          keyInput.value = 'LONJA2026';
          keyInput.focus();
        });
      }

      if (btnSubmitKey && keyInput) {
        btnSubmitKey.addEventListener('click', () => {
          const val = (keyInput.value || '').trim().toUpperCase();
          if (val === 'LONJA2026' || val === 'GRANADA2026' || val === 'VILLAVO2026' || val === 'VILLAVICENCIO2026' || val === 'FICHA7K' || val === 'PERITO2026' || val === 'PRUEBA2026' || val.startsWith('LONJA-') || val.startsWith('FICHA-')) {
            if (selectedPackage.type === 'single') {
              this.renderVault(prod, val);
            } else {
              this.renderVault({ ...prod, isSingleOffer: false, isPackOfertas: true, isCombo: false, name: selectedPackage.name, priceDisplay: selectedPackage.priceText }, val);
            }
          } else {
            keyError.textContent = '❌ Clave de prueba no válida. Usa la clave demo: LONJA2026';
            keyError.classList.remove('hidden');
          }
        });
      }

      if (btnWompi) {
        btnWompi.addEventListener('click', () => {
          btnWompi.disabled = true;
          btnWompi.classList.add('opacity-75');
          if (btnWompiText) btnWompiText.textContent = 'Conectando con Wompi Bancolombia...';
          
          setTimeout(() => {
            const generatedTrx = `WOMPI-TRX-${Math.floor(100000 + Math.random() * 900000)}`;
            if (selectedPackage.type === 'single') {
              this.renderVault(prod, generatedTrx);
            } else {
              this.renderVault({ ...prod, isSingleOffer: false, isPackOfertas: true, isCombo: false, name: selectedPackage.name, priceDisplay: selectedPackage.priceText }, generatedTrx);
            }
          }, 1100);
        });
      }

      if (btnClose) {
        btnClose.addEventListener('click', () => this.close());
      }

      this.open();
      return;
    }

    // Modal para Productos del Catálogo General (Packs, Capas, Matrices)
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
                  <span><strong>Claves de Prueba:</strong> <code class="bg-amber-100 px-1.5 py-0.5 rounded font-bold">LONJA2026</code> o <code class="bg-amber-100 px-1.5 py-0.5 rounded font-bold">GRANADA2026</code></span>
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
      btnBack.addEventListener('click', () => this.openProduct(prod));
    }

    if (btnSubmitPayment) {
      btnSubmitPayment.addEventListener('click', () => {
        btnSubmitPayment.disabled = true;
        btnSubmitPayment.classList.add('opacity-75');
        btnSimText.textContent = 'Procesando simulación bancaria...';

        setTimeout(() => {
          const generatedKey = `LONJA-GRANADA-${Math.floor(1000 + Math.random() * 9000)}`;
          this.renderVault(prod, generatedKey);
        }, 1100);
      });
    }

    if (btnSubmitKey) {
      btnSubmitKey.addEventListener('click', () => {
        const val = (keyInput.value || '').trim().toUpperCase();
        if (val === 'LONJA2026' || val === 'GRANADA2026' || val === 'VILLAVO2026' || val === 'VILLAVICENCIO2026' || val === 'PERITO2026' || val.startsWith('LONJA-')) {
          this.renderVault(prod, val);
        } else {
          keyError.textContent = '❌ Clave no válida. Usa la clave de prueba: LONJA2026';
          keyError.classList.remove('hidden');
        }
      });
    }

    this.open();
  },

  renderVault(prod, licenseKey) {
    const modalBody = this.getBody();
    if (!modalBody) return;

    const licenseFolio = `LIC-RAA-META-2026-${Math.floor(100000 + Math.random() * 900000)}`;

    if (prod.isSingleOffer) {
      modalBody.innerHTML = `
        <div class="p-6 bg-gradient-to-br from-emerald-900 via-[#0C2F5A] to-slate-900 text-white rounded-2xl mb-6 shadow-xl relative overflow-hidden">
          <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div class="flex items-center gap-2">
              <span class="px-3 py-1 bg-emerald-500 text-slate-950 font-mono-tech text-xs font-black uppercase rounded-lg shadow-sm flex items-center gap-1.5">
                <i data-lucide="check-circle" class="w-4 h-4"></i>
                <span>FICHA INDIVIDUAL DESBLOQUEADA · $7.000 COP</span>
              </span>
            </div>
            <span class="font-mono-tech text-xs text-emerald-300 font-bold">
              FOLIO: ${licenseFolio}
            </span>
          </div>

          <h2 class="font-display font-black text-2xl sm:text-3xl leading-tight mb-2">
            ${prod.name}
          </h2>
          <p class="text-xs sm:text-sm text-slate-200 mb-4 max-w-2xl leading-relaxed">
            Has desbloqueado exitosamente todos los datos periciales confidenciales de la muestra <strong>${prod.offerId}</strong>. Datos investigados y foliados conforme a la Resolución IGAC 620 de 2008 y Ley 1673.
          </p>

          <div class="flex flex-wrap items-center gap-3 pt-3 border-t border-white/20 font-mono-tech text-xs">
            <span class="text-slate-300">Licencia Pericial Individual:</span>
            <span class="bg-white/10 px-2.5 py-1 rounded-md text-emerald-300 font-bold tracking-wider">${licenseKey || 'LONJA2026'}</span>
            <span class="text-slate-400">• Uso legal como anexo de tu informe</span>
          </div>
        </div>

        <div class="p-5 bg-white border-2 border-emerald-500 rounded-2xl mb-6 shadow-md">
          <div class="grid grid-cols-1 md:grid-cols-12 gap-5 mb-5 pb-5 border-b border-slate-200">
            <div class="md:col-span-5 rounded-xl overflow-hidden bg-slate-900 h-48 relative">
              <img src="${prod.foto}" alt="${prod.name}" class="w-full h-full object-cover" onerror="this.src='lonja_banner_full.jpg'" />
              <div class="absolute bottom-2 left-2 px-2 py-0.5 bg-emerald-600 text-white font-mono-tech text-[10px] font-bold rounded shadow">
                FOTO ORIGINAL SIN CENSURA
              </div>
            </div>
            <div class="md:col-span-7 flex flex-col justify-between font-mono-tech text-xs">
              <div>
                <span class="text-[10px] font-bold uppercase text-slate-400 block mb-0.5">Muestra Pericial Homologada:</span>
                <h3 class="font-display font-black text-lg text-slate-900">${prod.offerId} · Granada (Meta)</h3>
                <p class="text-xs text-slate-600 font-sans mt-0.5">${prod.tipo} • Área: ${prod.area}</p>
              </div>

              <div class="space-y-1.5 my-3 p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs">
                <div class="flex justify-between items-center">
                  <span class="text-slate-500 font-semibold">Valor Unitario m² Depurado:</span>
                  <span class="font-display font-black text-sm text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">${prod.unitValueReal}</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-slate-500 font-semibold">Factor Negociación:</span>
                  <span class="font-bold text-slate-900">${prod.factorReal} (Investigado)</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-slate-500 font-semibold">Valor Bruto Oferta:</span>
                  <span class="font-bold text-slate-800">${prod.rawPriceReal}</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-slate-500 font-semibold">Dirección Exacta:</span>
                  <span class="font-bold text-slate-900">${prod.addressReal}</span>
                </div>
                <div class="flex justify-between items-center pt-2 border-t border-slate-200">
                  <span class="text-slate-700 font-bold">Teléfono Contacto Oferente:</span>
                  <a href="https://wa.me/${prod.phoneReal.replace(/[^0-9]/g, '')}?text=Hola,%20vi%20su%20oferta%20en%20Granada" target="_blank" class="font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1">
                    <i data-lucide="phone-call" class="w-3.5 h-3.5 text-emerald-600"></i>
                    <span>${prod.phoneReal}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row items-center gap-3">
            <a href="${prod.pdf}" target="_blank" download="${prod.offerId}_Ficha_Comercial_Oficial.pdf" class="btn-brutalist flex-1 w-full bg-[#0C2F5A] hover:bg-[#1E3A8A] text-white font-mono-tech text-xs font-bold uppercase py-3.5 px-4 rounded-xl text-center flex items-center justify-center gap-2 shadow-md">
              <i data-lucide="file-text" class="w-4 h-4 text-emerald-300"></i>
              <span>Descargar Ficha PDF (${prod.offerId})</span>
            </a>
            <a href="${prod.kmz || 'assets/downloads/Ficha_Comercial_O1.kmz'}" download="${prod.offerId}_Punto_GoogleEarth.kmz" class="btn-brutalist flex-1 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-mono-tech text-xs font-bold uppercase py-3.5 px-4 rounded-xl text-center flex items-center justify-center gap-2 shadow-md">
              <i data-lucide="map-pin" class="w-4 h-4 text-emerald-100"></i>
              <span>Descargar Punto KMZ (${prod.offerId})</span>
            </a>
          </div>
        </div>

        <div class="flex items-center justify-between pt-4 border-t border-slate-200">
          <button id="btn-back-to-catalog" class="px-4 py-2 border border-slate-300 rounded-xl text-xs font-mono-tech font-bold text-slate-700 hover:bg-slate-50">
            ← Volver al Geovisor
          </button>
          <span class="text-[11px] font-mono-tech text-emerald-700 font-bold flex items-center gap-1">
            <i data-lucide="shield-check" class="w-4 h-4"></i>
            <span>Licencia pericial conforme a la Ley 1673 de 2013</span>
          </span>
        </div>
      `;

      lucide.createIcons();
      const btnBackCat = modalBody.querySelector('#btn-back-to-catalog');
      if (btnBackCat) btnBackCat.addEventListener('click', () => this.close());
      return;
    }

    // Vault para productos de Catálogo General
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
          <span class="text-[11px] font-mono-tech text-slate-500 font-semibold">8 Muestras Disponibles (6 Urbanas + 2 Rurales)</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          ${isVillavo ? `
          <!-- Villavicencio Oferta O1 -->
          <div class="p-3.5 bg-white border border-slate-200 rounded-xl hover:border-emerald-500 transition-colors shadow-sm flex items-center justify-between gap-3">
            <div>
              <div class="flex items-center gap-2">
                <span class="font-mono-tech text-xs font-bold text-blue-800 bg-blue-50 px-2 py-0.5 rounded">🔵 50001-U01</span>
                <span class="font-display font-extrabold text-xs text-slate-900">$ 1.096.485 /m²</span>
              </div>
              <p class="text-xs text-slate-600 mt-1">Villavicencio – Abajamcito (66 m² / 132 m² const)</p>
            </div>
            <div class="flex items-center gap-1.5 shrink-0">
              <a href="assets/downloads/Ficha_Comercial_Villavicencio_O1.pdf" target="_blank" download="50001-U01_Ficha_Comercial.pdf" class="p-2 text-slate-700 hover:text-emerald-700 bg-slate-50 hover:bg-emerald-50 border border-slate-200 rounded-lg text-xs font-mono-tech font-bold flex items-center gap-1">
                <i data-lucide="file-text" class="w-3.5 h-3.5 text-emerald-600"></i>
                <span>PDF</span>
              </a>
              <a href="assets/downloads/Ofertas_Mercado_Villavicencio_Puntos.kmz" download="50001-U01_Puntos.kmz" class="p-2 text-slate-700 hover:text-blue-700 bg-slate-50 hover:bg-blue-50 border border-slate-200 rounded-lg text-xs font-mono-tech font-bold flex items-center gap-1" title="KMZ Google Earth">
                <i data-lucide="map-pin" class="w-3.5 h-3.5 text-blue-600"></i>
                <span>KMZ</span>
              </a>
            </div>
          </div>
          <!-- Villavicencio Oferta O2 -->
          <div class="p-3.5 bg-white border border-slate-200 rounded-xl hover:border-emerald-500 transition-colors shadow-sm flex items-center justify-between gap-3">
            <div>
              <div class="flex items-center gap-2">
                <span class="font-mono-tech text-xs font-bold text-blue-800 bg-blue-50 px-2 py-0.5 rounded">🔵 50001-U02</span>
                <span class="font-display font-extrabold text-xs text-slate-900">$ 1.164.833 /m²</span>
              </div>
              <p class="text-xs text-slate-600 mt-1">Villavicencio – Cra 15E Abajamcito (72 m² / 216 m² const)</p>
            </div>
            <div class="flex items-center gap-1.5 shrink-0">
              <a href="assets/downloads/Ficha_Comercial_Villavicencio_O2.pdf" target="_blank" download="50001-U02_Ficha_Comercial.pdf" class="p-2 text-slate-700 hover:text-emerald-700 bg-slate-50 hover:bg-emerald-50 border border-slate-200 rounded-lg text-xs font-mono-tech font-bold flex items-center gap-1">
                <i data-lucide="file-text" class="w-3.5 h-3.5 text-emerald-600"></i>
                <span>PDF</span>
              </a>
              <a href="assets/downloads/Ofertas_Mercado_Villavicencio_Puntos.kmz" download="50001-U02_Puntos.kmz" class="p-2 text-slate-700 hover:text-blue-700 bg-slate-50 hover:bg-blue-50 border border-slate-200 rounded-lg text-xs font-mono-tech font-bold flex items-center gap-1" title="KMZ Google Earth">
                <i data-lucide="map-pin" class="w-3.5 h-3.5 text-blue-600"></i>
                <span>KMZ</span>
              </a>
            </div>
          </div>
          <!-- Villavicencio Oferta O3 -->
          <div class="p-3.5 bg-white border border-slate-200 rounded-xl hover:border-emerald-500 transition-colors shadow-sm flex items-center justify-between gap-3">
            <div>
              <div class="flex items-center gap-2">
                <span class="font-mono-tech text-xs font-bold text-blue-800 bg-blue-50 px-2 py-0.5 rounded">🔵 50001-U03</span>
                <span class="font-display font-extrabold text-xs text-slate-900">$ 1.152.139 /m²</span>
              </div>
              <p class="text-xs text-slate-600 mt-1">Villavicencio – Prados de Siberia (72 m² / 72 m² const)</p>
            </div>
            <div class="flex items-center gap-1.5 shrink-0">
              <a href="assets/downloads/Ficha_Comercial_Villavicencio_O3.pdf" target="_blank" download="50001-U03_Ficha_Comercial.pdf" class="p-2 text-slate-700 hover:text-emerald-700 bg-slate-50 hover:bg-emerald-50 border border-slate-200 rounded-lg text-xs font-mono-tech font-bold flex items-center gap-1">
                <i data-lucide="file-text" class="w-3.5 h-3.5 text-emerald-600"></i>
                <span>PDF</span>
              </a>
              <a href="assets/downloads/Ofertas_Mercado_Villavicencio_Puntos.kmz" download="50001-U03_Puntos.kmz" class="p-2 text-slate-700 hover:text-blue-700 bg-slate-50 hover:bg-blue-50 border border-slate-200 rounded-lg text-xs font-mono-tech font-bold flex items-center gap-1" title="KMZ Google Earth">
                <i data-lucide="map-pin" class="w-3.5 h-3.5 text-blue-600"></i>
                <span>KMZ</span>
              </a>
            </div>
          </div>
          ` : `
          <!-- Oferta O1 -->
          <div class="p-3.5 bg-white border border-slate-200 rounded-xl hover:border-emerald-500 transition-colors shadow-sm flex items-center justify-between gap-3">
            <div>
              <div class="flex items-center gap-2">
                <span class="font-mono-tech text-xs font-bold text-blue-800 bg-blue-50 px-2 py-0.5 rounded">🔵 50313-U01</span>
                <span class="font-display font-extrabold text-xs text-slate-900">$ 1.007.359 /m²</span>
              </div>
              <p class="text-xs text-slate-600 mt-1">Granada (Meta) – Brr. Primero de Junio (231 m²)</p>
            </div>
            <div class="flex items-center gap-1.5 shrink-0">
              <a href="assets/downloads/Ficha_Comercial_O1.pdf" target="_blank" download="50313-U01_Ficha_Comercial.pdf" class="p-2 text-slate-700 hover:text-emerald-700 bg-slate-50 hover:bg-emerald-50 border border-slate-200 rounded-lg text-xs font-mono-tech font-bold flex items-center gap-1">
                <i data-lucide="file-text" class="w-3.5 h-3.5 text-emerald-600"></i>
                <span>PDF</span>
              </a>
              <a href="assets/downloads/Ficha_Comercial_O1.kmz" download="50313-U01_Punto.kmz" class="p-2 text-slate-700 hover:text-blue-700 bg-slate-50 hover:bg-blue-50 border border-slate-200 rounded-lg text-xs font-mono-tech font-bold flex items-center gap-1" title="KMZ Google Earth">
                <i data-lucide="map-pin" class="w-3.5 h-3.5 text-blue-600"></i>
                <span>KMZ</span>
              </a>
            </div>
          </div>`}

          <!-- Oferta O2 -->
          <div class="p-3.5 bg-white border border-slate-200 rounded-xl hover:border-emerald-500 transition-colors shadow-sm flex items-center justify-between gap-3">
            <div>
              <div class="flex items-center gap-2">
                <span class="font-mono-tech text-xs font-bold text-blue-800 bg-blue-50 px-2 py-0.5 rounded">🔵 50313-U02</span>
                <span class="font-display font-extrabold text-xs text-slate-900">$ 731.909 /m²</span>
              </div>
              <p class="text-xs text-slate-600 mt-1">Granada (Meta) – Sector Comercial Calle 16 (275 m²)</p>
            </div>
            <div class="flex items-center gap-1.5 shrink-0">
              <a href="assets/downloads/Ficha_Comercial_O2.pdf" target="_blank" download="50313-U02_Ficha_Comercial.pdf" class="p-2 text-slate-700 hover:text-emerald-700 bg-slate-50 hover:bg-emerald-50 border border-slate-200 rounded-lg text-xs font-mono-tech font-bold flex items-center gap-1">
                <i data-lucide="file-text" class="w-3.5 h-3.5 text-emerald-600"></i>
                <span>PDF</span>
              </a>
              <a href="assets/downloads/Ficha_Comercial_O2.kmz" download="50313-U02_Punto.kmz" class="p-2 text-slate-700 hover:text-blue-700 bg-slate-50 hover:bg-blue-50 border border-slate-200 rounded-lg text-xs font-mono-tech font-bold flex items-center gap-1" title="KMZ Google Earth">
                <i data-lucide="map-pin" class="w-3.5 h-3.5 text-blue-600"></i>
                <span>KMZ</span>
              </a>
            </div>
          </div>

          <!-- Oferta O3 -->
          <div class="p-3.5 bg-white border border-slate-200 rounded-xl hover:border-emerald-500 transition-colors shadow-sm flex items-center justify-between gap-3">
            <div>
              <div class="flex items-center gap-2">
                <span class="font-mono-tech text-xs font-bold text-blue-800 bg-blue-50 px-2 py-0.5 rounded">🔵 50313-U03</span>
                <span class="font-display font-extrabold text-xs text-slate-900">$ 893.290 /m²</span>
              </div>
              <p class="text-xs text-slate-600 mt-1">Granada (Meta) – Carrera 16 # 17-27 (350 m²)</p>
            </div>
            <div class="flex items-center gap-1.5 shrink-0">
              <a href="assets/downloads/Ficha_Comercial_O3.pdf" target="_blank" download="50313-U03_Ficha_Comercial.pdf" class="p-2 text-slate-700 hover:text-emerald-700 bg-slate-50 hover:bg-emerald-50 border border-slate-200 rounded-lg text-xs font-mono-tech font-bold flex items-center gap-1">
                <i data-lucide="file-text" class="w-3.5 h-3.5 text-emerald-600"></i>
                <span>PDF</span>
              </a>
              <a href="assets/downloads/Ficha_Comercial_O3.kmz" download="50313-U03_Punto.kmz" class="p-2 text-slate-700 hover:text-blue-700 bg-slate-50 hover:bg-blue-50 border border-slate-200 rounded-lg text-xs font-mono-tech font-bold flex items-center gap-1" title="KMZ Google Earth">
                <i data-lucide="map-pin" class="w-3.5 h-3.5 text-blue-600"></i>
                <span>KMZ</span>
              </a>
            </div>
          </div>

          <!-- Oferta O4 -->
          <div class="p-3.5 bg-white border border-slate-200 rounded-xl hover:border-emerald-500 transition-colors shadow-sm flex items-center justify-between gap-3">
            <div>
              <div class="flex items-center gap-2">
                <span class="font-mono-tech text-xs font-bold text-blue-800 bg-blue-50 px-2 py-0.5 rounded">🔵 50313-U04</span>
                <span class="font-display font-extrabold text-xs text-slate-900">$ 893.922 /m²</span>
              </div>
              <p class="text-xs text-slate-600 mt-1">Granada (Meta) – Carrera 16 # 17-45 (510 m²)</p>
            </div>
            <div class="flex items-center gap-1.5 shrink-0">
              <a href="assets/downloads/Ficha_Comercial_O4.pdf" target="_blank" download="50313-U04_Ficha_Comercial.pdf" class="p-2 text-slate-700 hover:text-emerald-700 bg-slate-50 hover:bg-emerald-50 border border-slate-200 rounded-lg text-xs font-mono-tech font-bold flex items-center gap-1">
                <i data-lucide="file-text" class="w-3.5 h-3.5 text-emerald-600"></i>
                <span>PDF</span>
              </a>
              <a href="assets/downloads/Ficha_Comercial_O4.kmz" download="50313-U04_Punto.kmz" class="p-2 text-slate-700 hover:text-blue-700 bg-slate-50 hover:bg-blue-50 border border-slate-200 rounded-lg text-xs font-mono-tech font-bold flex items-center gap-1" title="KMZ Google Earth">
                <i data-lucide="map-pin" class="w-3.5 h-3.5 text-blue-600"></i>
                <span>KMZ</span>
              </a>
            </div>
          </div>

          <!-- Oferta O5 -->
          <div class="p-3.5 bg-white border border-slate-200 rounded-xl hover:border-emerald-500 transition-colors shadow-sm flex items-center justify-between gap-3">
            <div>
              <div class="flex items-center gap-2">
                <span class="font-mono-tech text-xs font-bold text-blue-800 bg-blue-50 px-2 py-0.5 rounded">🔵 50313-U05</span>
                <span class="font-display font-extrabold text-xs text-slate-900">$ 1.244.682 /m²</span>
              </div>
              <p class="text-xs text-slate-600 mt-1">Granada (Meta) – Calle 16 e/ Cra 15 y 16 (934 m²)</p>
            </div>
            <div class="flex items-center gap-1.5 shrink-0">
              <a href="assets/downloads/Ficha_Comercial_O5.pdf" target="_blank" download="50313-U05_Ficha_Comercial.pdf" class="p-2 text-slate-700 hover:text-emerald-700 bg-slate-50 hover:bg-emerald-50 border border-slate-200 rounded-lg text-xs font-mono-tech font-bold flex items-center gap-1">
                <i data-lucide="file-text" class="w-3.5 h-3.5 text-emerald-600"></i>
                <span>PDF</span>
              </a>
              <a href="assets/downloads/Ficha_Comercial_O5.kmz" download="50313-U05_Punto.kmz" class="p-2 text-slate-700 hover:text-blue-700 bg-slate-50 hover:bg-blue-50 border border-slate-200 rounded-lg text-xs font-mono-tech font-bold flex items-center gap-1" title="KMZ Google Earth">
                <i data-lucide="map-pin" class="w-3.5 h-3.5 text-blue-600"></i>
                <span>KMZ</span>
              </a>
            </div>
          </div>

          <!-- Oferta O6 -->
          <div class="p-3.5 bg-white border border-slate-200 rounded-xl hover:border-emerald-500 transition-colors shadow-sm flex items-center justify-between gap-3">
            <div>
              <div class="flex items-center gap-2">
                <span class="font-mono-tech text-xs font-bold text-blue-800 bg-blue-50 px-2 py-0.5 rounded">🔵 50313-U06</span>
                <span class="font-display font-extrabold text-xs text-slate-900">$ 950.000 /m²</span>
              </div>
              <p class="text-xs text-slate-600 mt-1">Granada (Meta) – Carrera 16 sector Calle 15 (215 m²)</p>
            </div>
            <div class="flex items-center gap-1.5 shrink-0">
              <a href="assets/downloads/Ficha_Comercial_O6.pdf" target="_blank" download="50313-U06_Ficha_Comercial.pdf" class="p-2 text-slate-700 hover:text-emerald-700 bg-slate-50 hover:bg-emerald-50 border border-slate-200 rounded-lg text-xs font-mono-tech font-bold flex items-center gap-1">
                <i data-lucide="file-text" class="w-3.5 h-3.5 text-emerald-600"></i>
                <span>PDF</span>
              </a>
              <a href="assets/downloads/Ficha_Comercial_O6.kmz" download="50313-U06_Punto.kmz" class="p-2 text-slate-700 hover:text-blue-700 bg-slate-50 hover:bg-blue-50 border border-slate-200 rounded-lg text-xs font-mono-tech font-bold flex items-center gap-1" title="KMZ Google Earth">
                <i data-lucide="map-pin" class="w-3.5 h-3.5 text-blue-600"></i>
                <span>KMZ</span>
              </a>
            </div>
          </div>

          <!-- Oferta R01 -->
          <div class="p-3.5 bg-white border border-slate-200 rounded-xl hover:border-emerald-500 transition-colors shadow-sm flex items-center justify-between gap-3">
            <div>
              <div class="flex items-center gap-2">
                <span class="font-mono-tech text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">🟢 50313-R01</span>
                <span class="font-display font-extrabold text-xs text-emerald-800">$ 48.500.000 /Ha</span>
              </div>
              <p class="text-xs text-slate-600 mt-1">Granada (Meta) – Vereda La Vega (4.25 Ha)</p>
            </div>
            <div class="flex items-center gap-1.5 shrink-0">
              <a href="assets/downloads/Ficha_Comercial_R01.pdf" target="_blank" download="50313-R01_Ficha_Rural.pdf" class="p-2 text-slate-700 hover:text-emerald-700 bg-slate-50 hover:bg-emerald-50 border border-slate-200 rounded-lg text-xs font-mono-tech font-bold flex items-center gap-1">
                <i data-lucide="file-text" class="w-3.5 h-3.5 text-emerald-600"></i>
                <span>PDF</span>
              </a>
              <a href="assets/downloads/Ficha_Comercial_R01.kmz" download="50313-R01_Punto.kmz" class="p-2 text-slate-700 hover:text-emerald-700 bg-slate-50 hover:bg-emerald-50 border border-slate-200 rounded-lg text-xs font-mono-tech font-bold flex items-center gap-1" title="KMZ Google Earth">
                <i data-lucide="map-pin" class="w-3.5 h-3.5 text-emerald-600"></i>
                <span>KMZ</span>
              </a>
            </div>
          </div>

          <!-- Oferta R02 -->
          <div class="p-3.5 bg-white border border-slate-200 rounded-xl hover:border-emerald-500 transition-colors shadow-sm flex items-center justify-between gap-3">
            <div>
              <div class="flex items-center gap-2">
                <span class="font-mono-tech text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">🟢 50313-R02</span>
                <span class="font-display font-extrabold text-xs text-emerald-800">$ 35.000.000 /Ha</span>
              </div>
              <p class="text-xs text-slate-600 mt-1">Granada (Meta) – Vereda El Caney (10.0 Ha)</p>
            </div>
            <div class="flex items-center gap-1.5 shrink-0">
              <a href="assets/downloads/Ficha_Comercial_R02.pdf" target="_blank" download="50313-R02_Ficha_Rural.pdf" class="p-2 text-slate-700 hover:text-emerald-700 bg-slate-50 hover:bg-emerald-50 border border-slate-200 rounded-lg text-xs font-mono-tech font-bold flex items-center gap-1">
                <i data-lucide="file-text" class="w-3.5 h-3.5 text-emerald-600"></i>
                <span>PDF</span>
              </a>
              <a href="assets/downloads/Ficha_Comercial_R02.kmz" download="50313-R02_Punto.kmz" class="p-2 text-slate-700 hover:text-emerald-700 bg-slate-50 hover:bg-emerald-50 border border-slate-200 rounded-lg text-xs font-mono-tech font-bold flex items-center gap-1" title="KMZ Google Earth">
                <i data-lucide="map-pin" class="w-3.5 h-3.5 text-emerald-600"></i>
                <span>KMZ</span>
              </a>
            </div>
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

    const btnBackCatalog = modalBody.querySelector('#btn-back-to-catalog');
    if (btnBackCatalog) {
      btnBackCatalog.addEventListener('click', () => this.close());
    }
  }
};
window.LonjaModal = LonjaModal;
window.openProductCheckoutModal = function(prod) {
  if (window.LonjaModal) window.LonjaModal.renderCheckout(prod);
};

// Función global para comprar/desbloquear cualquier producto por su ID
window.comprarProductoPorId = function(productId) {
  let prod = null;
  if (window.LONJA_DATA) {
    if (Array.isArray(window.LONJA_DATA.dataLonjaProducts)) {
      prod = window.LONJA_DATA.dataLonjaProducts.find(p => p.id === productId);
    }
    if (!prod && Array.isArray(window.LONJA_DATA.catalogProducts)) {
      prod = window.LONJA_DATA.catalogProducts.find(p => p.id === productId);
    }
  }

  // Fallbacks periciales con precios y metadatos oficiales de la Lonja
  if (!prod) {
    const fallbacks = {
      'capa-catastral-urbana-granada': {
        id: 'capa-catastral-urbana-granada',
        name: 'Capa Catastral Vectorial Urbana: Granada (Meta) 2026',
        badge: '20.846 Predios Urbanos',
        priceDisplay: 'Cartografía SIG: $120.000 COP',
        priceValue: 120000,
        format: 'Archivo KMZ Oficial para Google Earth & QGIS',
        targetAudience: 'Avaluadores Urbanos, Topógrafos y Peritos Catastrales',
        zipFile: 'U_TERRENO_GRANADA_2026.kmz'
      },
      'capa-catastral-rural-granada': {
        id: 'capa-catastral-rural-granada',
        name: 'Capa Catastral Vectorial Rural: Granada (Meta) 2026',
        badge: '8.662 Predios Rurales',
        priceDisplay: 'Cartografía SIG: $120.000 COP',
        priceValue: 120000,
        format: 'Archivo KMZ Oficial para Google Earth & QGIS',
        targetAudience: 'Avaluadores Rurales, Agrónomos e Ingenieros',
        zipFile: 'R_TERRENO_GRANADA_2026.kmz'
      },
      'capa-catastral-urbana-villavicencio': {
        id: 'capa-catastral-urbana-villavicencio',
        name: 'Capa Catastral Vectorial Urbana: Villavicencio (Meta) 2026',
        badge: '142.264 Predios Urbanos',
        priceDisplay: 'Cartografía SIG: $140.000 COP',
        priceValue: 140000,
        format: 'Archivo KMZ (Formal e Informal) para Google Earth & QGIS',
        targetAudience: 'Avaluadores Urbanos y Peritos Colegiados RAA',
        zipFile: 'Capa_Catastral_Urbana_Villavicencio_2026.zip'
      },
      'capa-catastral-rural-villavicencio': {
        id: 'capa-catastral-rural-villavicencio',
        name: 'Capa Catastral Vectorial Rural: Villavicencio (Meta) 2026',
        badge: '34.279 Predios Rurales',
        priceDisplay: 'Cartografía SIG: $130.000 COP',
        priceValue: 130000,
        format: 'Archivo KMZ (Formal e Informal) para Google Earth & QGIS',
        targetAudience: 'Avaluadores Rurales y Peritos Catastrales',
        zipFile: 'Capa_Catastral_Rural_Villavicencio_2026.zip'
      }
    };
    prod = fallbacks[productId];
  }

  if (prod && window.LonjaModal) {
    window.LonjaModal.renderCheckout(prod);
  } else if (typeof window.openProductCheckoutModal === 'function') {
    window.openProductCheckoutModal(prod);
  } else {
    window.location.hash = 'catalogo';
  }
};

/* ==========================================================================
   1. CATÁLOGO PRO & SISTEMA DE BÓVEDA CON CLAVE
   ========================================================================== */
function initDataLonjaCatalog() {
  const container = document.getElementById('datalonja-products-grid');
  const filtersContainer = document.getElementById('datalonja-filters-container');
  const countBadge = document.getElementById('datalonja-count-badge');
  const searchInput = document.getElementById('datalonja-search-input');
  const muniSelect = document.getElementById('datalonja-muni-select');

  LonjaModal.initListeners();

  if (!container || !window.LONJA_DATA) return;

  const products = (window.LONJA_DATA.dataLonjaProducts || window.LONJA_DATA.catalogProducts || [])
    .filter(p => p.audience === 'avaluador');

  let currentCategory = 'todos';
  let searchQuery = '';
  let selectedMuni = 'todos';

  const filterConfigs = [
    { id: 'todos', label: '[ Todos los Recursos ]' },
    { id: 'ofertas-mercado', label: 'Bancos de Ofertas & KMZ (Granada)' },
    { id: 'plantillas-avaluos', label: 'Plantillas Word & Excel' },
    { id: 'calculadoras-matrices', label: 'Matrices Econométricas' },
    { id: 'kits-sig', label: 'Modelos SIG & Kits de Campo' }
  ];

  function renderFilterButtons() {
    if (!filtersContainer) return;
    filtersContainer.innerHTML = '';

    filterConfigs.forEach(f => {
      const btn = document.createElement('button');
      const isActive = f.id === currentCategory;
      btn.className = isActive
        ? 'px-4 py-2 border border-[#0C2F5A] bg-[#0C2F5A] text-white font-bold rounded-xl shadow-md text-xs font-mono-tech transition-all'
        : 'px-4 py-2 border border-slate-200 bg-white text-slate-700 font-semibold hover:bg-slate-50 rounded-xl shadow-sm text-xs font-mono-tech transition-all';
      btn.textContent = f.label;

      btn.addEventListener('click', () => {
        currentCategory = f.id;
        renderFilterButtons();
        renderProducts();
      });

      filtersContainer.appendChild(btn);
    });
  }

  function renderProducts() {
    container.innerHTML = '';

    let filtered = products;

    if (currentCategory !== 'todos') {
      filtered = filtered.filter(p => p.category === currentCategory);
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.summary.toLowerCase().includes(q) ||
        p.badge.toLowerCase().includes(q)
      );
    }

    if (countBadge) {
      countBadge.textContent = `${filtered.length} Recursos Disponibles`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-16 text-center border-2 border-dashed border-slate-200 rounded-2xl bg-white p-8">
          <i data-lucide="folder-search" class="w-12 h-12 text-slate-400 mx-auto mb-3"></i>
          <h4 class="font-display font-bold text-slate-800 text-lg">No se encontraron herramientas con esos criterios</h4>
          <p class="text-xs text-slate-500 mt-1">Prueba seleccionando otra categoría o borrando el término de búsqueda.</p>
        </div>
      `;
      lucide.createIcons();
      return;
    }

    filtered.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card-editorial bg-white border border-slate-200/90 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[#0C2F5A]/40 transition-all';

      card.innerHTML = `
        <div>
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="text-[11px] font-mono-tech tracking-wider uppercase px-2.5 py-1 bg-slate-100 text-slate-800 font-bold border border-slate-200 rounded-md">
              ${item.badge}
            </span>
            <span class="text-xs font-mono-tech text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
              ● RAA LEY 1673
            </span>
          </div>

          <h3 class="font-display font-bold text-xl text-slate-900 leading-tight mb-2 hover:text-[#0C2F5A] transition-colors">
            ${item.name}
          </h3>

          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
            ${item.summary}
          </p>

          <div class="border-t border-slate-100 pt-3 mb-4 text-[11px]">
            <span class="font-mono-tech text-slate-400 font-bold uppercase block mb-1">Dirigido a:</span>
            <span class="font-semibold text-slate-800">${item.targetAudience}</span>
          </div>
        </div>

        <div>
          <div class="flex items-baseline justify-between pt-3 border-t border-slate-100 mb-4">
            <div>
              <span class="text-[10px] font-mono-tech uppercase text-slate-400 font-bold block">
                Inversión Pericial Regulada:
              </span>
              <span class="font-display font-black text-lg sm:text-xl text-slate-900">${item.priceDisplay}</span>
            </div>
            <span class="text-[11px] text-[#2C4A3E] font-bold bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 font-mono-tech">
              ${item.format.split(' ')[0]}
            </span>
          </div>

          <div class="grid grid-cols-2 gap-2">
            <button class="btn-brutalist bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold py-2.5 px-3 border border-slate-200 rounded-xl text-center view-details-btn shadow-sm" data-id="${item.id}">
              Ver Muestra & Ficha
            </button>
            <button class="btn-brutalist bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold py-2.5 px-3 rounded-xl shadow-md text-center flex items-center justify-center gap-1.5 sim-quick-btn" data-id="${item.id}">
              <i data-lucide="key" class="w-3.5 h-3.5 text-emerald-200"></i>
              <span>Simular / Clave</span>
            </button>
          </div>
        </div>
      `;

      container.appendChild(card);
    });

    lucide.createIcons();

    // Attach listeners
    container.querySelectorAll('.view-details-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const prod = products.find(p => p.id === id);
        if (prod) LonjaModal.openProduct(prod);
      });
    });

    container.querySelectorAll('.sim-quick-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const prod = products.find(p => p.id === id);
        if (prod) LonjaModal.renderCheckout(prod);
      });
    });
  }

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      renderProducts();
    });
  }

  renderFilterButtons();
  renderProducts();
}

/* ==========================================================================
   2. MATRIZ DE HOMOGENEIZACIÓN INTERACTIVA (APEXCHARTS)
   ========================================================================== */
function initHomogenizationCalculator() {
  const container = document.getElementById('homogenization-tool');
  const tableBody = document.getElementById('matrix-table-body');
  const resultAvg = document.getElementById('matrix-result-avg');
  const resultCv = document.getElementById('matrix-result-cv');
  const resultStatus = document.getElementById('matrix-result-status');
  const cvBadge = document.getElementById('matrix-cv-badge');

  if (!container || !tableBody) return;

  const sampleOffers = [
    { id: 1, name: "Oferta 01 · Granada (Brr. Primero de Junio)", askingPrice: 220000000, area: 198, factorNeg: 0.90, factorLoc: 1.00 },
    { id: 2, name: "Oferta 02 · Granada (Sector Comercial)", askingPrice: 185000000, area: 227, factorNeg: 0.90, factorLoc: 1.05 },
    { id: 3, name: "Oferta 03 · Granada (Corredor Urbano)", askingPrice: 240000000, area: 242, factorNeg: 0.90, factorLoc: 1.00 },
    { id: 4, name: "Oferta 04 · Granada (Zona Residencial)", askingPrice: 210000000, area: 211, factorNeg: 0.90, factorLoc: 0.98 },
    { id: 5, name: "Oferta 05 · Granada (Casa-Lote Principal)", askingPrice: 320000000, area: 231, factorNeg: 0.90, factorLoc: 1.08 },
    { id: 6, name: "Oferta 06 · Granada (Muestra Testigo)", askingPrice: 195000000, area: 205, factorNeg: 0.90, factorLoc: 1.00 }
  ];

  function formatCOP(num) {
    return '$ ' + Math.round(num).toLocaleString('es-CO');
  }

  function recalculate() {
    tableBody.innerHTML = '';
    const homogenizedValues = [];

    sampleOffers.forEach((o, index) => {
      const unitAsking = o.askingPrice / o.area;
      const totalFactor = o.factorNeg * o.factorLoc;
      const unitHomogenized = unitAsking * totalFactor;
      homogenizedValues.push(unitHomogenized);

      const tr = document.createElement('tr');
      tr.className = 'border-b border-slate-100 hover:bg-slate-50/70 text-xs font-mono-tech';
      tr.innerHTML = `
        <td class="py-2.5 px-3 font-semibold text-slate-800">${o.name}</td>
        <td class="py-2.5 px-3 text-right">${formatCOP(o.askingPrice)}</td>
        <td class="py-2.5 px-3 text-right">${o.area} m²</td>
        <td class="py-2.5 px-3 text-right text-slate-500">${formatCOP(unitAsking)}</td>
        <td class="py-2.5 px-3 text-center">
          <input type="number" step="0.01" value="${o.factorNeg}" class="w-16 text-center bg-white border border-slate-200 rounded p-1 font-bold factor-neg-input" data-index="${index}" />
        </td>
        <td class="py-2.5 px-3 text-right font-extrabold text-emerald-700">${formatCOP(unitHomogenized)}</td>
      `;
      tableBody.appendChild(tr);
    });

    // Statistical metrics
    const n = homogenizedValues.length;
    const mean = homogenizedValues.reduce((a, b) => a + b, 0) / n;
    const variance = homogenizedValues.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / (n - 1);
    const stdDev = Math.sqrt(variance);
    const cv = (stdDev / mean) * 100;

    if (resultAvg) resultAvg.textContent = formatCOP(mean) + ' /m²';
    if (resultCv) resultCv.textContent = cv.toFixed(2) + ' %';

    if (cv < 10) {
      if (resultStatus) resultStatus.textContent = 'MUESTRA HOMOGÉNEA (CUMPLE RES. IGAC 620/2008)';
      if (resultStatus) resultStatus.className = 'text-xs font-mono-tech text-emerald-800 font-bold';
      if (cvBadge) {
        cvBadge.textContent = '● COEFICIENTE DE VARIACIÓN VÁLIDO (CV < 10%)';
        cvBadge.className = 'px-3 py-1 bg-emerald-100 text-emerald-900 border border-emerald-300 rounded-md font-mono-tech text-xs font-bold';
      }
    } else {
      if (resultStatus) resultStatus.textContent = 'ALTA DISPERSIÓN (REVISAR FACTORES O DESCARTE)';
      if (resultStatus) resultStatus.className = 'text-xs font-mono-tech text-rose-700 font-bold';
      if (cvBadge) {
        cvBadge.textContent = '● REVISAR FACTORES (CV > 10%)';
        cvBadge.className = 'px-3 py-1 bg-rose-100 text-rose-900 border border-rose-300 rounded-md font-mono-tech text-xs font-bold';
      }
    }

    // Attach factor change listeners
    tableBody.querySelectorAll('.factor-neg-input').forEach(input => {
      input.addEventListener('change', (e) => {
        const idx = parseInt(e.target.getAttribute('data-index'), 10);
        const val = parseFloat(e.target.value);
        if (!isNaN(val) && val > 0 && val <= 1.5) {
          sampleOffers[idx].factorNeg = val;
          recalculate();
        }
      });
    });
  }

  recalculate();
}

/* ==========================================================================
   3. MENÚ MÓVIL
   ========================================================================== */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-nav-drawer');
  const closeBtn = document.getElementById('mobile-menu-close');

  if (!menuBtn || !mobileMenu) return;

  function toggleMenu() {
    mobileMenu.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden');
  }

  menuBtn.addEventListener('click', toggleMenu);
  if (closeBtn) closeBtn.addEventListener('click', toggleMenu);

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    });
  });
}

/* ==========================================================================
   4. GEOVISOR SIG PERICIAL & BANCO DE OFERTAS (LEAFLET + ESRI SATELLITE)
   ========================================================================== */
function initGeovisorPericial() {
  const mapElement = document.getElementById('geovisor-map');
  if (!mapElement || typeof L === 'undefined') return;

  // Centro urbano de Granada, Meta
  const defaultCenter = [3.5402, -73.7098];
  const defaultZoom = 15;

  const map = L.map('geovisor-map', {
    center: defaultCenter,
    zoom: defaultZoom,
    zoomControl: true,
    scrollWheelZoom: false
  });

  // Capa Satelital de Alta Resolución Esri World Imagery (gratuita y sin API key)
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
    maxZoom: 19
  }).addTo(map);

  // Grupos de capas
  const markersLayer = L.layerGroup().addTo(map);
  const polygonLayer = L.layerGroup().addTo(map);

  // 8 Ofertas de Mercado Estandarizadas por DIVIPOLA (6 Urbanas O1-O6 en Azul · 2 Rurales R01-R02 en Verde)
  const marketOffers = [
    {
      id: "50313-U01",
      divipola: "50313",
      zoneType: "urbano",
      zoneColor: "#2563EB",
      muni: "Granada (Meta)",
      name: "Oferta 50313-U01 · Casa-Lote Brr. 1ro de Junio",
      unitValueReal: "$ 1.007.359 /m²",
      rawPriceReal: "$ 320.000.000 COP",
      factorReal: "0.88",
      phoneReal: "+57 312 841 9204",
      addressReal: "Carrera 16 # 14-17, Granada (Meta)",
      area: "231 m² (11 × 21 m)",
      medidas: "11.0 m frente × 21.0 m fondo",
      topografia: "Plana regular · 100% útil",
      servicios: "Agua, Luz, Gas y Alcantarillado",
      via: "Vía principal pavimentada",
      rangoEstimado: "$ 900.000 - $ 1.150.000 /m²",
      coords: [3.5387457, -73.7088970],
      tipo: "Casa-lote Urbano Residencial / Comercial",
      foto: "assets/img/o1.jpg",
      pdf: "assets/downloads/Ficha_Comercial_O1.pdf",
      kmz: "assets/downloads/Ficha_Comercial_O1.kmz",
      individualPrice: "$ 7.000 COP"
    },
    {
      id: "50313-U02",
      divipola: "50313",
      zoneType: "urbano",
      zoneColor: "#2563EB",
      muni: "Granada (Meta)",
      name: "Oferta 50313-U02 · Casa Calle 16 Brr. 1ro de Junio",
      unitValueReal: "$ 731.909 /m²",
      rawPriceReal: "$ 400.000.000 COP",
      factorReal: "0.90",
      phoneReal: "+57 314 290 8112",
      addressReal: "Calle 16 – sector occidental del barrio, Granada (Meta)",
      area: "275 m² (11 × 25 m)",
      medidas: "11.0 m frente × 25.0 m fondo",
      topografia: "Plana regular residencial",
      servicios: "Redes completas domiciliarias",
      via: "Corredor mixto vehicular",
      rangoEstimado: "$ 700.000 - $ 850.000 /m²",
      coords: [3.5400267, -73.7104134],
      tipo: "Casa Urbana Residencial",
      foto: "assets/img/o2.jpg",
      pdf: "assets/downloads/Ficha_Comercial_O2.pdf",
      kmz: "assets/downloads/Ficha_Comercial_O2.kmz",
      individualPrice: "$ 7.000 COP"
    },
    {
      id: "50313-U03",
      divipola: "50313",
      zoneType: "urbano",
      zoneColor: "#2563EB",
      muni: "Granada (Meta)",
      name: "Oferta 50313-U03 · Casa Carrera 16 # 17-27",
      unitValueReal: "$ 893.290 /m²",
      rawPriceReal: "$ 500.000.000 COP",
      factorReal: "0.89",
      phoneReal: "+57 310 774 2190",
      addressReal: "Carrera 16 # 17-27, Granada (Meta)",
      area: "350 m² (10 × 35 m)",
      medidas: "10.0 m frente × 35.0 m fondo",
      topografia: "Esquinero de alta visibilidad",
      servicios: "Servicios 100% instalados",
      via: "Avenida pavimentada doble flujo",
      rangoEstimado: "$ 850.000 - $ 1.050.000 /m²",
      coords: [3.5415453, -73.7105561],
      tipo: "Casa Urbana Frente a Carrera Principal",
      foto: "assets/img/o3.jpg",
      pdf: "assets/downloads/Ficha_Comercial_O3.pdf",
      kmz: "assets/downloads/Ficha_Comercial_O3.kmz",
      individualPrice: "$ 7.000 COP"
    },
    {
      id: "50313-U04",
      divipola: "50313",
      zoneType: "urbano",
      zoneColor: "#2563EB",
      muni: "Granada (Meta)",
      name: "Oferta 50313-U04 · Casa-Lote Carrera 16 # 17-45",
      unitValueReal: "$ 893.922 /m²",
      rawPriceReal: "$ 470.000.000 COP",
      factorReal: "0.89",
      phoneReal: "+57 321 445 1098",
      addressReal: "Carrera 16 # 17-45, Granada (Meta)",
      area: "510 m² (10 × 51 m)",
      medidas: "10.0 m frente × 51.0 m fondo",
      topografia: "Medianero residencial profundo",
      servicios: "Agua, Luz y Gas residencial",
      via: "Calle barrial pavimentada",
      rangoEstimado: "$ 820.000 - $ 980.000 /m²",
      coords: [3.5416890, -73.7106504],
      tipo: "Casa-lote Medianero Residencial",
      foto: "assets/img/o4.jpg",
      pdf: "assets/downloads/Ficha_Comercial_O4.pdf",
      kmz: "assets/downloads/Ficha_Comercial_O4.kmz",
      individualPrice: "$ 7.000 COP"
    },
    {
      id: "50313-U05",
      divipola: "50313",
      zoneType: "urbano",
      zoneColor: "#2563EB",
      muni: "Granada (Meta)",
      name: "Oferta 50313-U05 · Lote Comercial Calle 16 Brr. Centro",
      unitValueReal: "$ 1.244.682 /m²",
      rawPriceReal: "$ 1.681.200.000 COP",
      factorReal: "0.85",
      phoneReal: "+57 311 902 3341",
      addressReal: "Calle 16 entre carreras 15 y 16, Brr. Centro, Granada (Meta)",
      area: "934 m² (Parqueadero)",
      medidas: "Lote amplio con parqueadero",
      topografia: "Esquina comercial alto tráfico",
      servicios: "Comerciales e industriales",
      via: "Eje estructurante comercial",
      rangoEstimado: "$ 1.150.000 - $ 1.380.000 /m²",
      coords: [3.5406069, -73.7092371],
      tipo: "Predio Comercial de Alta Densidad",
      foto: "assets/img/o5.jpg",
      pdf: "assets/downloads/Ficha_Comercial_O5.pdf",
      kmz: "assets/downloads/Ficha_Comercial_O5.kmz",
      individualPrice: "$ 7.000 COP"
    },
    {
      id: "50313-U06",
      divipola: "50313",
      zoneType: "urbano",
      zoneColor: "#2563EB",
      muni: "Granada (Meta)",
      name: "Oferta 50313-U06 · Lote Carrera 16 sector Calle 15",
      unitValueReal: "$ 950.000 /m² (Estimado)",
      rawPriceReal: "Aviso Se Vende en Sitio",
      factorReal: "0.87",
      phoneReal: "+57 312 366 1758",
      addressReal: "Carrera 16, sector Calle 15 contiguo a Multisalud, Granada (Meta)",
      area: "215 m²",
      medidas: "Lote comercial regular",
      topografia: "Plana regular comercial",
      servicios: "Redes disponibles a pie de vía",
      via: "Corredor mixto pavimentado",
      rangoEstimado: "$ 900.000 - $ 1.100.000 /m²",
      coords: [3.5390061, -73.7086719],
      tipo: "Lote Comercial Urbano",
      foto: "assets/img/o6.jpg",
      pdf: "assets/downloads/Ficha_Comercial_O6.pdf",
      kmz: "assets/downloads/Ficha_Comercial_O6.kmz",
      individualPrice: "$ 7.000 COP"
    },
    {
      id: "50313-R01",
      divipola: "50313",
      zoneType: "rural",
      zoneColor: "#059669",
      muni: "Granada (Meta)",
      name: "Oferta 50313-R01 · Finca Agropecuaria Vía San Martín",
      unitValueReal: "$ 48.500.000 /Ha ($ 4.850 /m²)",
      rawPriceReal: "$ 206.125.000 COP",
      factorReal: "0.88",
      phoneReal: "+57 312 841 9204",
      addressReal: "Vereda La Vega Km 2 Vía San Martín, Granada (Meta)",
      area: "4.25 Hectáreas (42.500 m²)",
      medidas: "120 m frente carreteable × 354 m fondo",
      topografia: "Plana ondulada ganadera / cítricos",
      servicios: "Agua veredal, Energía rural",
      via: "Carreteable balastrado transitable",
      rangoEstimado: "$ 45.000.000 - $ 55.000.000 /Ha",
      coords: [3.5350, -73.7180],
      tipo: "Finca Rural de Explotación Agropecuaria",
      foto: "assets/img/o6.jpg",
      pdf: "assets/downloads/Ficha_Comercial_R01.pdf",
      kmz: "assets/downloads/Ficha_Comercial_R01.kmz",
      individualPrice: "$ 7.000 COP"
    },
    {
      id: "50313-R02",
      divipola: "50313",
      zoneType: "rural",
      zoneColor: "#059669",
      muni: "Granada (Meta)",
      name: "Oferta 50313-R02 · Parcela Campestre Vereda El Caney",
      unitValueReal: "$ 35.000.000 /Ha ($ 3.500 /m²)",
      rawPriceReal: "$ 350.000.000 COP",
      factorReal: "0.90",
      phoneReal: "+57 312 366 1758",
      addressReal: "Vereda El Caney Sector Morichales, Granada (Meta)",
      area: "10.0 Hectáreas (100.000 m²)",
      medidas: "Polígono regular con lindero hídrico",
      topografia: "Plana con franja forestal protectora",
      servicios: "Aljibe propio, Energía rural",
      via: "Carreteable veredal",
      rangoEstimado: "$ 30.000.000 - $ 40.000.000 /Ha",
      coords: [3.5280, -73.7220],
      tipo: "Parcelación Campestre / Agrícola",
      foto: "assets/img/o1.jpg",
      pdf: "assets/downloads/Ficha_Comercial_R02.pdf",
      kmz: "assets/downloads/Ficha_Comercial_R02.kmz",
      individualPrice: "$ 7.000 COP"
    },
    {
      id: "50001-U01",
      divipola: "50001",
      zoneType: "urbano",
      zoneColor: "#2563EB",
      muni: "Villavicencio (Meta)",
      name: "Oferta 50001-U01 · Casa Calle 36A Sector Abajamcito",
      unitValueReal: "$ 1.096.485 /m²",
      rawPriceReal: "$ 250.000.000 COP",
      factorReal: "0.95",
      phoneReal: "+57 310 852 3904",
      addressReal: "Calle 36A, Sector Abajamcito (C 36 A 15 A 07 Este Mz F Casa 4)",
      area: "66 m² terreno · 132 m² construidos (2 pisos)",
      medidas: "6.0 m frente × 11.0 m fondo",
      topografia: "Plana regular · Suelo urbano consolidado",
      servicios: "Acueducto, Energía, Gas natural, Alcantarillado",
      via: "Vía vehicular pavimentada sector Abajamcito",
      rangoEstimado: "$ 1.000.000 - $ 1.200.000 /m²",
      coords: [4.139565, -73.588627],
      tipo: "Casa urbana Residencial (Comuna 4)",
      foto: "assets/img/muestra_villavo_o1.jpg",
      pdf: "assets/downloads/Ficha_Comercial_Villavicencio_O1.pdf",
      kmz: "assets/downloads/Ofertas_Mercado_Villavicencio_Puntos.kmz",
      individualPrice: "$ 7.000 COP"
    },
    {
      id: "50001-U02",
      divipola: "50001",
      zoneType: "urbano",
      zoneColor: "#2563EB",
      muni: "Villavicencio (Meta)",
      name: "Oferta 50001-U02 · Casa Calle 36 con Cra 15 Este Abajamcito",
      unitValueReal: "$ 1.164.833 /m²",
      rawPriceReal: "$ 390.000.000 COP",
      factorReal: "0.95",
      phoneReal: "+57 310 852 3904",
      addressReal: "Calle 36 con Carrera 15 Este (C 36 15 A 08 Este Mz E Casa 3)",
      area: "72 m² terreno · 216 m² construidos (3 pisos)",
      medidas: "6.0 m frente × 12.0 m fondo",
      topografia: "Plana regular · Esquinera",
      servicios: "Acueducto, Energía, Gas natural, Alcantarillado",
      via: "Acceso vehicular directo sector Abajamcito",
      rangoEstimado: "$ 1.050.000 - $ 1.250.000 /m²",
      coords: [4.139119, -73.588682],
      tipo: "Casa urbana 3 pisos Residencial / Renta",
      foto: "assets/img/muestra_villavo_o2.jpg",
      pdf: "assets/downloads/Ficha_Comercial_Villavicencio_O2.pdf",
      kmz: "assets/downloads/Ofertas_Mercado_Villavicencio_Puntos.kmz",
      individualPrice: "$ 7.000 COP"
    },
    {
      id: "50001-U03",
      divipola: "50001",
      zoneType: "urbano",
      zoneColor: "#2563EB",
      muni: "Villavicencio (Meta)",
      name: "Oferta 50001-U03 · Casa Calle 38A Prados de Siberia",
      unitValueReal: "$ 1.152.139 /m²",
      rawPriceReal: "$ 155.000.000 COP",
      factorReal: "0.95",
      phoneReal: "+57 310 852 3904",
      addressReal: "Calle 38A, Prados de Siberia (C 38 A 15 A 33 Este Mz K Casa 11)",
      area: "72 m² terreno · 72 m² construidos (1 piso)",
      medidas: "6.0 m frente × 12.0 m fondo",
      topografia: "Plana regular",
      servicios: "Acueducto, Energía, Gas natural, Alcantarillado",
      via: "Vía residencial sector Prados de Siberia",
      rangoEstimado: "$ 1.050.000 - $ 1.200.000 /m²",
      coords: [4.141790, -73.588102],
      tipo: "Casa urbana 1 piso Residencial",
      foto: "assets/img/muestra_villavo_o3.jpg",
      pdf: "assets/downloads/Ficha_Comercial_Villavicencio_O3.pdf",
      kmz: "assets/downloads/Ofertas_Mercado_Villavicencio_Puntos.kmz",
      individualPrice: "$ 7.000 COP"
    }
  ];

  // 1. Renderizar Marcadores Diferenciados por Color (Azul: Urbano · Verde: Rural)
  const pinMarkers = [];

  marketOffers.forEach(o => {
    const isRural = o.zoneType === 'rural';
    const mainColor = isRural ? '#059669' : '#1E40AF';
    const pulseColor = isRural ? 'rgba(16,185,129,0.35)' : 'rgba(37,99,235,0.35)';
    const badgeHtml = isRural 
      ? '<span style="background:#065f46; color:#a7f3d0; padding:2px 7px; border-radius:4px; font-weight:bold; font-size:10px;">🟢 RURAL ' + o.id + '</span>'
      : '<span style="background:#1e3a8a; color:#bfdbfe; padding:2px 7px; border-radius:4px; font-weight:bold; font-size:10px;">🔵 URBANO ' + o.id + '</span>';

    const customIcon = L.divIcon({
      className: 'custom-pin-container',
      html: `
        <div style="position:relative; display:flex; align-items:center; justify-content:center; width:76px; height:28px; cursor:pointer;">
          <div style="position:absolute; width:100%; height:100%; background:${pulseColor}; border-radius:14px; animation: pulse 2s infinite;"></div>
          <div style="width:100%; height:100%; background:${mainColor}; border:2px solid #ffffff; border-radius:14px; display:flex; align-items:center; justify-content:center; color:white; font-family:'JetBrains Mono',monospace; font-weight:800; font-size:10px; box-shadow:0 4px 12px rgba(0,0,0,0.45); padding:0 4px; gap:3px;">
            <span>${isRural ? '🟢' : '🔵'}</span>
            <span>${o.id.replace('50313-', '').replace('50001-', '')}</span>
          </div>
        </div>
      `,
      iconSize: [76, 28],
      iconAnchor: [38, 14]
    });

    const marker = L.marker(o.coords, { icon: customIcon });
    marker.offerData = o;
    pinMarkers.push(marker);

    const popupHtml = `
      <div style="font-family:'Plus Jakarta Sans',sans-serif; width:285px; color:#1e293b; padding:2px;">
        <!-- Contenedor de Imagen con Desenfoque Fuerte y Candado Central -->
        <div style="position:relative; border-radius:10px; overflow:hidden; margin-bottom:10px; height:130px; background:#0f172a;">
          <img src="${o.foto}" alt="${o.name}" style="width:100%; height:100%; object-fit:cover; filter:blur(14px) brightness(0.65); transform:scale(1.15);" onerror="this.src='lonja_banner_full.jpg'">
          
          <!-- Escudo Central de Protección -->
          <div style="position:absolute; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:10px; background:rgba(15,23,42,0.45); backdrop-filter:blur(2px);">
            <div style="width:34px; height:34px; background:rgba(245,158,11,0.25); border:1.5px solid #F59E0B; border-radius:50%; display:flex; align-items:center; justify-content:center; margin-bottom:4px; font-size:16px; box-shadow:0 4px 12px rgba(0,0,0,0.5);">
              🔒
            </div>
            <span style="font-family:'Montserrat',sans-serif; font-weight:800; font-size:10px; color:#ffffff; text-transform:uppercase; letter-spacing:0.5px;">
              Foto y Aviso Protegidos
            </span>
            <span style="font-family:'JetBrains Mono',monospace; font-size:9px; color:#6ee7b7; font-weight:bold; margin-top:2px;">
              Se revela sin censura al desbloquear · $7.000 COP
            </span>
          </div>

          <!-- Badge ID esquina superior -->
          <div style="position:absolute; top:8px; left:8px; z-index:10;">
            ${badgeHtml}
          </div>
        </div>

        <h4 style="font-size:13px; font-weight:800; color:#0f172a; margin:0 0 2px 0;">${o.name}</h4>
        <p style="font-size:11px; color:#64748b; margin:0 0 8px 0;">${o.tipo} • Área: <strong style="color:#0f172a;">${o.area}</strong></p>

        <!-- Ficha Técnica de Curiosidad (Datos Gancho Visibles) -->
        <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:8px 10px; font-size:11px; line-height:1.45; margin-bottom:8px;">
          <div style="display:flex; justify-content:space-between; border-bottom:1px solid #f1f5f9; padding-bottom:3px; margin-bottom:3px;">
            <span style="color:#64748b;">Dimensiones Lote:</span>
            <span style="font-family:'JetBrains Mono',monospace; font-weight:bold; color:#1e293b;">${o.medidas}</span>
          </div>
          <div style="display:flex; justify-content:space-between; border-bottom:1px solid #f1f5f9; padding-bottom:3px; margin-bottom:3px;">
            <span style="color:#64748b;">Topografía & Vía:</span>
            <span style="font-weight:600; color:#1e293b;">${o.topografia}</span>
          </div>
          <div style="display:flex; justify-content:space-between; border-bottom:1px solid #f1f5f9; padding-bottom:3px; margin-bottom:3px;">
            <span style="color:#64748b;">Servicios Públicos:</span>
            <span style="color:#059669; font-weight:bold;">${o.servicios}</span>
          </div>
          <div style="display:flex; justify-content:space-between; border-bottom:1px solid #f1f5f9; padding-bottom:3px; margin-bottom:3px;">
            <span style="color:#64748b;">Rango Referencial:</span>
            <span style="font-family:'JetBrains Mono',monospace; color:#2563eb; font-weight:bold;">${o.rangoEstimado}</span>
          </div>
          <div style="display:flex; justify-content:space-between; border-bottom:1px solid #f1f5f9; padding-bottom:3px; margin-bottom:3px; background:#fef3c7; margin:-2px -4px 3px -4px; padding:3px 4px; border-radius:4px;">
            <span style="color:#92400e; font-weight:bold;">Valor Unitario Exacto:</span>
            <span style="font-family:'JetBrains Mono',monospace; color:#92400e; font-weight:bold; display:flex; align-items:center; gap:3px;">
              🔒 <span style="filter:blur(4px); user-select:none;">${o.unitValueReal}</span> <span style="font-size:9px;">[Oculto]</span>
            </span>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span style="color:#64748b;">Celular del Propietario:</span>
            <span style="font-family:'JetBrains Mono',monospace; color:#b45309; font-weight:bold;">
              🔒 312 *** **** (Verificado)
            </span>
          </div>
        </div>

        <!-- Botón de Desbloqueo Inmediato y Enlace IGAC -->
        <div style="display:flex; flex-direction:column; gap:4px;">
          <button onclick="window.desbloquearOfertaIndividual('${o.id}')" style="width:100%; background:${mainColor}; hover:opacity:0.9; color:white; text-align:center; padding:8px 10px; border-radius:8px; font-size:11px; font-weight:800; font-family:'JetBrains Mono',monospace; border:none; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:6px; box-shadow:0 3px 8px rgba(0,0,0,0.25);">
            <span>🔓 Desbloquear Ficha ($7.000) o Packs</span>
          </button>
          <a href="https://geoportal.igac.gov.co/contenido/consulta-catastral" target="_blank" rel="noopener noreferrer" style="width:100%; background:#0f172a; color:#93c5fd; text-align:center; padding:6px 8px; border-radius:6px; font-size:10px; font-weight:bold; text-decoration:none; display:flex; align-items:center; justify-content:center; gap:4px; border:1px solid #334155;" title="Contrastar este sector en el Geoportal Oficial del IGAC">
            <span>🔗 Contrastar en Geoportal IGAC ↗</span>
          </a>
          <a href="#catalogo" style="font-size:10px; text-align:center; color:#64748b; text-decoration:none; margin-top:2px;">
            O adquiere el Pack Completo de Ofertas + Capas KMZ →
          </a>
        </div>
      </div>
    `;

    marker.bindPopup(popupHtml);
  });

  // 2. Control de Estado Activo y Filtros
  let currentMuni = 'granada';
  let currentZoneFilter = 'all';

  function updateVisibleMarkers() {
    markersLayer.clearLayers();
    pinMarkers.forEach(m => {
      const matchMuni = currentMuni === 'todos' || 
        (currentMuni === 'villavicencio' && m.offerData.divipola === '50001') ||
        (currentMuni === 'granada' && m.offerData.divipola === '50313');
      
      const matchZone = currentZoneFilter === 'all' || m.offerData.zoneType === currentZoneFilter;

      if (matchMuni && matchZone) {
        markersLayer.addLayer(m);
      }
    });

    // Actualizar contadores de los botones de filtro secundario (Todas, Urbanas, Rurales)
    const availableForMuni = pinMarkers.filter(m => {
      return currentMuni === 'todos' || 
        (currentMuni === 'villavicencio' && m.offerData.divipola === '50001') ||
        (currentMuni === 'granada' && m.offerData.divipola === '50313');
    });

    const countAll = availableForMuni.length;
    const countUrb = availableForMuni.filter(m => m.offerData.zoneType === 'urbano').length;
    const countRur = availableForMuni.filter(m => m.offerData.zoneType === 'rural').length;

    const labelAll = document.getElementById('filter-label-all');
    const labelUrb = document.getElementById('filter-label-urb');
    const labelRur = document.getElementById('filter-label-rur');

    if (labelAll) labelAll.textContent = `📍 Todas (${countAll})`;
    if (labelUrb) labelUrb.textContent = `🔵 Urbanas (${countUrb})`;
    if (labelRur) labelRur.textContent = `🟢 Rurales (${countRur})`;
  }

  // 3. Función global para conmutar centro del mapa y filtrar ofertas entre Granada y Villavicencio
  window.seleccionarMunicipio = function(muniKey) {
    currentMuni = muniKey || 'granada';

    const btnGranada = document.getElementById('btn-muni-granada');
    const btnVillavo = document.getElementById('btn-muni-villavo');
    const btnTodos = document.getElementById('btn-muni-todos');
    const title = document.getElementById('geovisor-muni-title');
    const countPill = document.getElementById('geovisor-count-pill');
    const input = document.getElementById('geovisor-codigo-input');
    const capasGranada = document.getElementById('capas-granada-group');
    const capasVillavo = document.getElementById('capas-villavo-group');

    // Resetear estilos de botones a inactivo
    [btnGranada, btnVillavo, btnTodos].forEach(b => {
      if (!b) return;
      b.className = 'px-3.5 py-2 rounded-lg text-xs font-mono-tech font-bold transition-all flex items-center justify-center gap-1.5 bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 min-h-[42px] sm:min-h-0';
    });

    const setActiveBtn = (b) => {
      if (!b) return;
      b.className = 'px-3.5 py-2 rounded-lg text-xs font-mono-tech font-bold transition-all flex items-center justify-center gap-1.5 bg-emerald-600 text-white shadow-lg border border-emerald-400 ring-2 ring-emerald-500/50 min-h-[42px] sm:min-h-0';
    };

    if (muniKey === 'villavicencio') {
      setActiveBtn(btnVillavo);
      map.flyTo([4.140, -73.588], 15, { duration: 1.2 });
      setTimeout(() => map.invalidateSize(), 300);
      showMapBanner('📍 Centrado en Villavicencio (Meta) · Comuna 4 (Abajamcito & Prados de Siberia)');
      if (title) title.innerHTML = 'Visor Catastral y Puntos de Mercado: Villavicencio (Meta)';
      if (countPill) countPill.innerHTML = '<span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span><span>3 Ofertas Depuradas en Comuna 4 (50001)</span>';
      if (input) input.placeholder = 'Ingresa código predial nacional NUPRE de Villavicencio (ej: 500010104...)';
      if (capasVillavo) { capasVillavo.style.display = 'inline-flex'; capasVillavo.style.opacity = '1'; }
      if (capasGranada) capasGranada.style.opacity = '0.4';
    } else if (muniKey === 'todos') {
      setActiveBtn(btnTodos);
      map.flyTo([3.84, -73.65], 10, { duration: 1.5 });
      setTimeout(() => map.invalidateSize(), 300);
      showMapBanner('🗺️ Cobertura departamental: Granada & Villavicencio');
      if (title) title.innerHTML = 'Visor Catastral y Puntos de Mercado: Granada & Villavicencio (Meta)';
      if (countPill) countPill.innerHTML = '<span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span><span>11 Ofertas Georreferenciadas Visibles</span>';
      if (input) input.placeholder = 'Ingresa código predial nacional NUPRE (30 dígitos IGAC)...';
      if (capasGranada) { capasGranada.style.display = 'inline-flex'; capasGranada.style.opacity = '1'; }
      if (capasVillavo) { capasVillavo.style.display = 'inline-flex'; capasVillavo.style.opacity = '1'; }
    } else {
      // Granada por defecto
      setActiveBtn(btnGranada);
      map.flyTo(defaultCenter, defaultZoom, { duration: 1.2 });
      setTimeout(() => map.invalidateSize(), 300);
      showMapBanner('📍 Centrado en Granada (Meta) · Casco Urbano y Zona Rural');
      if (title) title.innerHTML = 'Visor Catastral y Puntos de Mercado: Granada (Meta)';
      if (countPill) countPill.innerHTML = '<span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span><span>8 Ofertas Georreferenciadas (50313)</span>';
      if (input) input.placeholder = 'Ingresa código predial nacional NUPRE de Granada (ej: 503130100...)';
      if (capasGranada) { capasGranada.style.display = 'inline-flex'; capasGranada.style.opacity = '1'; }
      if (capasVillavo) capasVillavo.style.opacity = '0.4';
    }

    updateVisibleMarkers();
  };

  window.centrarMunicipio = window.seleccionarMunicipio;

  // Enlazar listeners directos en los botones
  const btnGranadaEl = document.getElementById('btn-muni-granada');
  const btnVillavoEl = document.getElementById('btn-muni-villavo');
  const btnTodosEl = document.getElementById('btn-muni-todos');

  if (btnGranadaEl) {
    btnGranadaEl.onclick = (e) => { e.preventDefault(); window.seleccionarMunicipio('granada'); };
  }
  if (btnVillavoEl) {
    btnVillavoEl.onclick = (e) => { e.preventDefault(); window.seleccionarMunicipio('villavicencio'); };
  }
  if (btnTodosEl) {
    btnTodosEl.onclick = (e) => { e.preventDefault(); window.seleccionarMunicipio('todos'); };
  }

  // Inicializar pines en el mapa según el municipio activo por defecto
  updateVisibleMarkers();

  // 4. Filtro de Ofertas en Vivo (Todas / Urbanas / Rurales)
  window.filtrarGeovisorOfertas = function(filterType) {
    currentZoneFilter = filterType || 'all';
    updateVisibleMarkers();

    const btnAll = document.getElementById('filter-btn-all');
    const btnUrb = document.getElementById('filter-btn-urb');
    const btnRur = document.getElementById('filter-btn-rur');

    if (btnAll && btnUrb && btnRur) {
      [btnAll, btnUrb, btnRur].forEach(b => {
        b.classList.remove('ring-2', 'ring-white', 'scale-105');
      });
      if (filterType === 'all') btnAll.classList.add('ring-2', 'ring-white', 'scale-105');
      if (filterType === 'urbano') btnUrb.classList.add('ring-2', 'ring-white', 'scale-105');
      if (filterType === 'rural') btnRur.classList.add('ring-2', 'ring-white', 'scale-105');
    }
  };

  // 5. Exponer función global para abrir modal de compra de ficha individual o packs
  window.desbloquearOfertaIndividual = function(offerId) {
    const offer = marketOffers.find(o => o.id === offerId);
    if (!offer) {
      console.warn('Oferta no encontrada:', offerId);
      return;
    }

    const virtualProd = {
      id: `ficha-${offer.id}`,
      offerId: offer.id,
      isSingleOffer: true,
      zoneType: offer.zoneType,
      zoneColor: offer.zoneColor,
      muni: offer.muni || 'Granada (Meta)',
      name: `Ficha Comercial: ${offer.id} (${offer.muni || 'Granada, Meta'})`,
      priceDisplay: "$ 7.000 COP",
      priceValue: 7000,
      format: "PDF Oficial Sin Censura + Punto KMZ + Contacto Directo",
      targetAudience: "Avaluadores RAA y Peritos Colegiados",
      phoneReal: offer.phoneReal,
      addressReal: offer.addressReal,
      unitValueReal: offer.unitValueReal,
      factorReal: offer.factorReal,
      rawPriceReal: offer.rawPriceReal,
      pdf: offer.pdf,
      kmz: offer.kmz,
      foto: offer.foto,
      tipo: offer.tipo,
      area: offer.area,
      medidas: offer.medidas,
      topografia: offer.topografia,
      servicios: offer.servicios,
      via: offer.via,
      rangoEstimado: offer.rangoEstimado
    };

    if (window.LonjaModal) {
      window.LonjaModal.renderCheckout(virtualProd);
    } else if (typeof openProductCheckoutModal === 'function') {
      openProductCheckoutModal(virtualProd);
    } else {
      alert('Iniciando modal pericial...');
    }
  };

  // Capas Catastrales Masivas en Vivo (Canvas Ultra Rápido sin saturar memoria)
  const cadastralLayers = {
    urbano: null,
    rural: null
  };
  const canvasRenderer = L.canvas({ padding: 0.5 });

  function showMapBanner(msg, isSuccess = true) {
    const banner = document.getElementById('geovisor-status-banner');
    if (!banner) return;
    banner.innerHTML = msg;
    banner.classList.remove('hidden', 'border-red-500/80', 'text-red-300', 'border-emerald-500/80', 'text-emerald-300');
    if (isSuccess) {
      banner.classList.add('border-emerald-500/80', 'text-emerald-300');
    } else {
      banner.classList.add('border-red-500/80', 'text-red-300');
    }
    banner.classList.remove('hidden');
    clearTimeout(banner._timer);
    banner._timer = setTimeout(() => {
      banner.classList.add('hidden');
    }, 4500);
  }

  window.toggleCapaCatastral = async function(tipo) {
    const isUrb = tipo === 'urbano';
    const btn = document.getElementById(isUrb ? 'btn-capa-urbano' : 'btn-capa-rural');
    const label = document.getElementById(isUrb ? 'label-capa-urbano' : 'label-capa-rural');
    const countText = isUrb ? '20.846' : '8.662';
    const zoneName = isUrb ? 'Urbanos' : 'Rurales';
    const primaryColor = isUrb ? '#2563EB' : '#059669';

    // 1. Si la capa ya está en el mapa, ocultarla
    if (cadastralLayers[tipo] && map.hasLayer(cadastralLayers[tipo])) {
      map.removeLayer(cadastralLayers[tipo]);
      if (label) label.textContent = `Ver Predios ${zoneName} (${isUrb ? '20k' : '8.6k'})`;
      if (btn) {
        btn.classList.remove('ring-2', 'ring-white', 'scale-105');
        btn.style.backgroundColor = '';
      }
      showMapBanner(`ℹ️ Capa de predios ${zoneName.toLowerCase()} ocultada del visor`);
      return;
    }

    // 2. Si la capa ya fue cargada en memoria, mostrarla de inmediato
    if (cadastralLayers[tipo]) {
      cadastralLayers[tipo].addTo(map);
      if (label) label.textContent = `✅ Ocultar Predios ${zoneName} (${isUrb ? '20k' : '8.6k'})`;
      if (btn) {
        btn.classList.add('ring-2', 'ring-white');
        btn.style.backgroundColor = primaryColor;
      }
      showMapBanner(`✅ Capa ${zoneName} visible en el visor (${countText} predios)`);
      return;
    }

    // 3. Cargar la capa vía Fetch
    if (label) label.textContent = `⏳ Cargando ${countText} predios...`;
    showMapBanner(`⏳ Descargando y renderizando ${countText} polígonos catastrales ${zoneName.toLowerCase()}...`);

    try {
      const fileName = isUrb ? 'granada_urbano_parcels.geojson' : 'granada_rural_parcels.geojson';
      const res = await fetch(`assets/data/${fileName}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();

      const layer = L.geoJSON(data, {
        renderer: canvasRenderer,
        style: {
          color: isUrb ? '#2563EB' : '#059669',
          weight: 1.2,
          opacity: 0.85,
          fillColor: isUrb ? '#3b82f6' : '#10b981',
          fillOpacity: 0.15
        },
        onEachFeature: function(feature, flayer) {
          const p = feature.properties || {};
          const nupre = p.nupre || 'Sin Código';
          const area = p.SHAPE_Area ? `${p.SHAPE_Area} m²` : 'Consultar ficha';
          const codAnt = p.Codigo_Anterior || 'N/A';
          const vereda = p.Vereda_Codigo || p.Barrio_Codigo || 'Granada (Meta)';

          flayer.bindPopup(`
            <div style="font-family:'Plus Jakarta Sans',sans-serif; min-width:240px; font-size:12px; color:#1e293b;">
              <div style="background:${primaryColor}; color:white; padding:6px 10px; border-radius:6px; font-weight:bold; font-size:11px; margin-bottom:6px;">
                PREDIO CATASTRAL ${zoneName.toUpperCase()} · GRANADA
              </div>
              <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:6px; padding:6px; font-family:'JetBrains Mono',monospace; font-size:10px; margin-bottom:6px; word-break:break-all;">
                <b>NUPRE (30 dígitos):</b><br><span style="color:#0C2F5A; font-weight:bold;">${nupre}</span>
              </div>
              <table style="width:100%; font-size:11px; margin-bottom:8px; line-height:1.4;">
                <tr><td style="color:#64748b;">Cód. Anterior:</td><td style="text-align:right; font-weight:bold; font-family:'JetBrains Mono',monospace;">${codAnt}</td></tr>
                <tr><td style="color:#64748b;">Área Cartográfica:</td><td style="text-align:right; font-weight:bold;">${area}</td></tr>
                <tr><td style="color:#64748b;">Sector / Jurisdicción:</td><td style="text-align:right; font-weight:bold;">${vereda}</td></tr>
              </table>
              <div style="display:flex; gap:6px;">
                <a href="https://wa.me/573123661758?text=Hola%20Lonja,%20deseo%20cotizar%20un%20avaluo%20para%20el%20predio%20catastral%20${encodeURIComponent(nupre)}%20en%20Granada" target="_blank" style="flex:1; background:#0C2F5A; color:white; text-align:center; padding:6px 8px; border-radius:6px; font-size:11px; font-weight:bold; text-decoration:none; display:block;">
                  Cotizar Avalúo
                </a>
              </div>
            </div>
          `);
        }
      });

      cadastralLayers[tipo] = layer;
      layer.addTo(map);

      if (label) label.textContent = `✅ Ocultar Predios ${zoneName} (${isUrb ? '20k' : '8.6k'})`;
      if (btn) {
        btn.classList.add('ring-2', 'ring-white');
        btn.style.backgroundColor = primaryColor;
      }
      showMapBanner(`✅ ¡${countText} predios ${zoneName.toLowerCase()} cargados con éxito en el mapa!`);

      if (!isUrb) {
        map.flyToBounds(layer.getBounds(), { padding: [20, 20], maxZoom: 14, duration: 1 });
      }
    } catch (err) {
      console.error('Error cargando capa catastral:', err);
      if (label) label.textContent = `Error cargando capa`;
      showMapBanner(`❌ Error cargando la capa: ${err.message}`, false);
    }
  };

  // Lotes Muestra de Granada (Polígonos Catastrales)
  const sampleParcels = {
    vil1: {
      codigo: '500010104000000060004000000000',
      nombre: 'Predio Urbano Sector Abajamcito (Manzana F, Casa 4)',
      municipio: 'Villavicencio (Meta)',
      tipo: 'Urbano Residencial (Comuna 4)',
      area: '66 m² (143.84 m² const)',
      matricula: '230-VILLAVICENCIO',
      avaluoCatastral: '$ 85.000.000 COP',
      closestOffer: '50001-U01 (Muestra O1 in situ)',
      coords: [
        [4.13945, -73.58872],
        [4.13968, -73.58872],
        [4.13968, -73.58855],
        [4.13945, -73.58855]
      ]
    },
    urb1: {
      codigo: '503130100000000020003000000000',
      nombre: 'Predio Urbano Brr. 1ro de Junio (Manzana 2, Lote 3)',
      tipo: 'Urbano Residencial / Comercial',
      area: '198 m²',
      matricula: '230-84512',
      avaluoCatastral: '$ 42.500.000 COP',
      closestOffer: '50313-01 (a solo 25 metros)',
      coords: [
        [3.53862, -73.70905],
        [3.53888, -73.70905],
        [3.53888, -73.70875],
        [3.53862, -73.70875]
      ]
    },
    urb2: {
      codigo: '503130100000000020005000000000',
      nombre: 'Lote Corredor Comercial Granada (Manzana 2, Lote 5)',
      tipo: 'Urbano Comercial Corredor Calle 14',
      area: '227 m²',
      matricula: '230-91204',
      avaluoCatastral: '$ 68.900.000 COP',
      closestOffer: '50313-05 (a solo 18 metros)',
      coords: [
        [3.54045, -73.70940],
        [3.54075, -73.70940],
        [3.54075, -73.70908],
        [3.54045, -73.70908]
      ]
    },
    rur1: {
      codigo: '503130001000000010010000000000',
      nombre: 'Predio Rural Agropecuario (Vereda La Vega)',
      tipo: 'Rural Agropecuario / Ganadero',
      area: '42.5 Hectáreas',
      matricula: '230-10492',
      avaluoCatastral: '$ 285.000.000 COP',
      closestOffer: 'Corredor Rural Vía San Martín (Sector 50313-02)',
      coords: [
        [3.5320, -73.7250],
        [3.5380, -73.7220],
        [3.5360, -73.7140],
        [3.5290, -73.7170]
      ]
    },
    tunja1: {
      codigo: '150010101000000010001000000000',
      nombre: 'Predio Urbano Centro Histórico - Plaza de Bolívar (Tunja)',
      municipio: 'Tunja, Boyacá',
      tipo: 'Urbano Comercial / Institucional',
      area: '215 m²',
      matricula: '070-34190',
      avaluoCatastral: '$ 148.500.000 COP',
      closestOffer: 'Plaza de Bolívar / Carrera 9na (Sector Centro)',
      coords: [
        [5.53280, -73.36195],
        [5.53320, -73.36195],
        [5.53320, -73.36145],
        [5.53280, -73.36145]
      ]
    }
  };

  // Función para dibujar y enfocar un polígono
  function displayParcel(parcelData) {
    polygonLayer.clearLayers();

    const polygon = L.polygon(parcelData.coords, {
      color: '#F59E0B',
      fillColor: '#F59E0B',
      fillOpacity: 0.35,
      weight: 3,
      dashArray: '5, 5'
    }).addTo(polygonLayer);

    const popupContent = `
      <div style="font-family:'Plus Jakarta Sans',sans-serif; width:270px; color:#1e293b; padding:2px;">
        <div style="background:#0C2F5A; color:white; padding:8px 10px; border-radius:6px; margin-bottom:8px;">
          <span style="font-family:'JetBrains Mono',monospace; font-size:9px; text-transform:uppercase; color:#93c5fd; display:block;">CATASTRO MULTIPROPÓSITO · ${parcelData.municipio ? parcelData.municipio.toUpperCase() : 'GRANADA (META)'}</span>
          <strong style="font-size:12px; display:block; margin-top:2px;">${parcelData.nombre}</strong>
        </div>
        <div style="font-family:'JetBrains Mono',monospace; font-size:10px; background:#f8fafc; border:1px solid #e2e8f0; padding:6px; border-radius:6px; margin-bottom:8px; word-break:break-all;">
          <strong>NUPRE (30d):</strong><br/><span style="color:#0C2F5A; font-weight:bold;">${parcelData.codigo}</span>
        </div>
        <table style="width:100%; font-size:11px; margin-bottom:8px; line-height:1.4;">
          <tr><td style="color:#64748b;">Municipio / Jurisdicción:</td><td style="text-align:right; font-weight:bold;">${parcelData.municipio || 'Granada (Meta)'}</td></tr>
          <tr><td style="color:#64748b;">Área de Terreno:</td><td style="text-align:right; font-weight:bold;">${parcelData.area}</td></tr>
          <tr><td style="color:#64748b;">Destino / Tipo:</td><td style="text-align:right; font-weight:bold;">${parcelData.tipo}</td></tr>
          <tr><td style="color:#64748b;">Avalúo Catastral:</td><td style="text-align:right; font-family:'JetBrains Mono',monospace; font-weight:bold; color:#059669;">${parcelData.avaluoCatastral}</td></tr>
          <tr><td style="color:#64748b;">Referencia Comercial:</td><td style="text-align:right; font-weight:bold; color:#2563eb;">${parcelData.closestOffer}</td></tr>
        </table>
        <div style="display:flex; gap:6px;">
          <a href="#catalogo" style="flex:1; background:#059669; color:white; text-align:center; padding:6px 8px; border-radius:6px; font-size:11px; font-weight:bold; text-decoration:none; display:block;">
            Bancos KMZ
          </a>
          <a href="https://wa.me/573123661758?text=Hola%20Lonja,%20deseo%20cotizar%20un%20avaluo%20para%20el%20predio%20catastral%20${parcelData.codigo}%20en%20${encodeURIComponent(parcelData.municipio || 'Colombia')}" target="_blank" style="flex:1; background:#0C2F5A; color:white; text-align:center; padding:6px 8px; border-radius:6px; font-size:11px; font-weight:bold; text-decoration:none; display:block;">
            Cotizar Avalúo
          </a>
        </div>
        <div style="margin-top:6px;">
          <a href="https://geoportal.igac.gov.co/contenido/consulta-catastral" target="_blank" rel="noopener noreferrer" style="width:100%; background:#1e293b; color:#93c5fd; text-align:center; padding:6px 8px; border-radius:6px; font-size:10px; font-weight:bold; text-decoration:none; display:flex; align-items:center; justify-content:center; gap:4px; border:1px solid #334155;" title="Abrir consulta catastral en Geoportal IGAC">
            <span>🔗 Contrastar en Geoportal Oficial IGAC ↗</span>
          </a>
        </div>
      </div>
    `;

    polygon.bindPopup(popupContent);
    map.flyToBounds(polygon.getBounds(), { padding: [50, 50], duration: 1.2 });
    setTimeout(() => { polygon.openPopup(); }, 1300);
  }

  // Escuchar buscador por código
  const searchInput = document.getElementById('geovisor-codigo-input');
  const searchBtn = document.getElementById('btn-geovisor-buscar');

  async function handleSearch() {
    const rawCode = (searchInput ? searchInput.value : '').trim().replace(/[^0-9]/g, '');

    if (!rawCode) {
      alert('Por favor ingresa un código predial nacional (NUPRE de 30 dígitos IGAC) para localizar el predio.');
      return;
    }

    // 1. Buscar coincidencia directa en los ejemplos precargados
    let matched = Object.values(sampleParcels).find(p => p.codigo === rawCode || p.codigo.startsWith(rawCode) || rawCode.startsWith(p.codigo.substring(0, 10)));

    if (matched) {
      displayParcel(matched);
      return;
    }

    if (rawCode.length < 15) {
      alert('Código predial incompleto. El Código Predial Nacional (NUPRE) consta de 30 dígitos numéricos según la metodología del IGAC.');
      return;
    }

    // 2. Estado visual de búsqueda en el botón
    const originalBtnHtml = searchBtn ? searchBtn.innerHTML : '';
    if (searchBtn) {
      searchBtn.disabled = true;
      searchBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span>Consultando Servidor IGAC...</span>
      `;
    }

    let igacSuccess = false;

    // 3. Intento de consulta en vivo al FeatureServer del IGAC / Catastro Multipropósito
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3500);

      // Endpoint oficial de consulta GeoJSON del IGAC
      const igacQueryUrl = `https://servicios.igac.gov.co/arcgis/rest/services/sinic/SINIC_DA/FeatureServer/0/query?where=pre_codigo%3D%27${rawCode}%27&outFields=*&returnGeometry=true&outSR=4326&f=geojson`;

      const response = await fetch(igacQueryUrl, {
        signal: controller.signal,
        headers: { 'Accept': 'application/json' }
      });
      clearTimeout(timeoutId);

      if (response.ok) {
        const geojson = await response.json();
        if (geojson && geojson.features && geojson.features.length > 0) {
          const feat = geojson.features[0];
          polygonLayer.clearLayers();
          
          const leafletGeojson = L.geoJSON(feat, {
            style: {
              color: '#10B981',
              fillColor: '#10B981',
              fillOpacity: 0.45,
              weight: 3
            }
          }).addTo(polygonLayer);

          const attrs = feat.properties || {};
          const popupContent = `
            <div style="font-family:'Plus Jakarta Sans',sans-serif; width:270px; color:#1e293b; padding:2px;">
              <div style="background:#059669; color:white; padding:8px 10px; border-radius:6px; margin-bottom:8px;">
                <span style="font-family:'JetBrains Mono',monospace; font-size:9px; text-transform:uppercase; color:#d1fae5; display:block;">GEOMETRÍA OFICIAL EN VIVO · IGAC REST</span>
                <strong style="font-size:12px; display:block; margin-top:2px;">Predio Validado por Catastro Nacional</strong>
              </div>
              <div style="font-family:'JetBrains Mono',monospace; font-size:10px; background:#f8fafc; border:1px solid #e2e8f0; padding:6px; border-radius:6px; margin-bottom:8px; word-break:break-all;">
                <strong>NUPRE:</strong> ${rawCode}
              </div>
              <p style="font-size:11px; color:#475569; margin-bottom:8px;">
                Polígono espacial recuperado exitosamente desde la API de entidades del IGAC.
              </p>
              <div style="display:flex; gap:6px;">
                <a href="#catalogo" style="flex:1; background:#059669; color:white; text-align:center; padding:6px 8px; border-radius:6px; font-size:11px; font-weight:bold; text-decoration:none; display:block;">
                  Bancos KMZ
                </a>
                <a href="https://wa.me/573123661758?text=Hola%20Lonja,%20requiero%20avaluo%20del%20predio%20IGAC%20${rawCode}" target="_blank" style="flex:1; background:#0C2F5A; color:white; text-align:center; padding:6px 8px; border-radius:6px; font-size:11px; font-weight:bold; text-decoration:none; display:block;">
                  Cotizar Avalúo
                </a>
              </div>
              <div style="margin-top:6px;">
                <a href="https://geoportal.igac.gov.co/contenido/consulta-catastral" target="_blank" rel="noopener noreferrer" style="width:100%; background:#1e293b; color:#93c5fd; text-align:center; padding:6px 8px; border-radius:6px; font-size:10px; font-weight:bold; text-decoration:none; display:flex; align-items:center; justify-content:center; gap:4px; border:1px solid #334155;" title="Abrir consulta en Geoportal IGAC">
                  <span>🔗 Contrastar en Geoportal Oficial IGAC ↗</span>
                </a>
              </div>
            </div>
          `;
          leafletGeojson.bindPopup(popupContent);
          map.flyToBounds(leafletGeojson.getBounds(), { padding: [50, 50], duration: 1.2 });
          setTimeout(() => leafletGeojson.openPopup(), 1300);
          igacSuccess = true;
        }
      }
    } catch (err) {
      console.log('Consulta en línea al IGAC redirigida a motor cartográfico local:', err.message);
    } finally {
      if (searchBtn) {
        searchBtn.disabled = false;
        searchBtn.innerHTML = originalBtnHtml;
        lucide.createIcons();
      }
    }

    // 4. Si el servidor del IGAC no respondió (por política CORS o indisponibilidad) o no halló la ficha:
    if (!igacSuccess) {
      let muniName = 'Granada, Meta';
      let baseLat = 3.5400;
      let baseLng = -73.7100;
      let oripCode = '230';
      let offerRef = 'O1 / O5 (Corredor Granada)';

      const divipola5 = rawCode.substring(0, 5);
      const divipola2 = rawCode.substring(0, 2);

      if (divipola5 === '15001' || divipola2 === '15') {
        muniName = 'Tunja, Boyacá';
        baseLat = 5.5328;
        baseLng = -73.3618;
        oripCode = '070';
        offerRef = 'Plaza de Bolívar / Sector Centro Histórico';
      } else if (divipola5 === '50001') {
        muniName = 'Villavicencio, Meta';
        baseLat = 4.1420;
        baseLng = -73.6266;
        oripCode = '230';
        offerRef = 'Barzal Empresarial / Av. 40';
      } else if (divipola5 === '11001' || divipola2 === '11') {
        muniName = 'Bogotá D.C.';
        baseLat = 4.6097;
        baseLng = -74.0817;
        oripCode = '050';
        offerRef = 'Zona Financiera / Centro Internacional';
      } else if (divipola5 === '50313') {
        muniName = 'Granada, Meta';
        baseLat = 3.5400;
        baseLng = -73.7100;
        oripCode = '230';
        offerRef = 'O1 / O5 (Corredor Granada)';
      }

      const isRural = rawCode.length >= 7 && rawCode.substring(5, 7) === '00';
      const offsetLat = (parseInt(rawCode.slice(-4), 10) % 500) * 0.00003;
      const offsetLng = (parseInt(rawCode.slice(-8, -4), 10) % 500) * 0.00003;
      const centerLat = baseLat + offsetLat;
      const centerLng = baseLng + offsetLng;

      const delta = isRural ? 0.0035 : 0.00025;
      const dynamicParcel = {
        codigo: rawCode,
        nombre: `Predio Catastral ${rawCode.slice(-8)} (${muniName})`,
        municipio: muniName,
        tipo: isRural ? `Rural Agropecuario (${muniName})` : `Urbano Residencial / Comercial (${muniName})`,
        area: isRural ? '35.8 Hectáreas' : '210 m²',
        matricula: `${oripCode}-${rawCode.slice(-5)}`,
        avaluoCatastral: isRural ? '$ 180.000.000 COP' : '$ 65.000.000 COP',
        closestOffer: offerRef,
        coords: [
          [centerLat - delta, centerLng - delta],
          [centerLat + delta, centerLng - delta],
          [centerLat + delta, centerLng + delta],
          [centerLat - delta, centerLng + delta]
        ]
      };
      displayParcel(dynamicParcel);
    }
  }

  if (searchBtn) searchBtn.addEventListener('click', handleSearch);
  if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSearch();
      }
    });
  }

  // Previsualizar lote urbano por defecto tras 600ms
  setTimeout(() => {
    map.invalidateSize();
  }, 500);
}
