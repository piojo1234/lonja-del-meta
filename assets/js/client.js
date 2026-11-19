/**
 * LONJA DE AVALÚOS DEL META S.A.S.
 * Client Portal Application Script (Propietarios, Bancos y Clientes Finales)
 * Art Direction: Architectural Precision & Radical Transparency
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initSnrLookup();
  initPortfolioTabs();
  initContactForm();
  lucide.createIcons();
});

/* ==========================================================================
   1. SISTEMA DE RADICACIÓN Y CONSULTA DE MATRÍCULA INMOBILIARIA (SNR)
   ========================================================================== */
function initSnrLookup() {
  const form = document.getElementById('snr-lookup-form');
  const oripSelect = document.getElementById('snr-orip-select');
  const matriculaInput = document.getElementById('snr-matricula-input');
  const whatsappInput = document.getElementById('snr-whatsapp-input');
  const propTypeSelect = document.getElementById('snr-prop-type');
  const submitBtn = document.getElementById('btn-consultar-snr');
  const resultContainer = document.getElementById('snr-result-container');

  if (!form || !submitBtn || !resultContainer) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const orip = (oripSelect ? oripSelect.value : '230 - Villavicencio').trim();
    const matricula = (matriculaInput ? matriculaInput.value : '').trim();
    const whatsapp = (whatsappInput ? whatsappInput.value : '').trim();
    const propType = (propTypeSelect ? propTypeSelect.value : 'Inmueble General').trim();

    if (!matricula || matricula.length < 3) {
      alert('Por favor ingresa un número de matrícula inmobiliaria válido.');
      if (matriculaInput) matriculaInput.focus();
      return;
    }

    if (!whatsapp || whatsapp.length < 7) {
      alert('Por favor ingresa tu número de WhatsApp para recibir el informe pericial preliminar.');
      if (whatsappInput) whatsappInput.focus();
      return;
    }

    // Processing animation
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <span>Consultando Registro SNR & Verificando Jurisdicción...</span>
    `;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `
        <i data-lucide="search-check" class="w-4 h-4 text-emerald-300"></i>
        <span>Consultar & Radicar Matrícula</span>
      `;

      const oripCode = orip.split(' - ')[0];
      const fullFolio = `${oripCode}-${matricula}`;
      const radicadoNumber = `RAD-SNR-${Math.floor(100000 + Math.random() * 900000)}`;

      const whatsappMsg = `🏛️ *LONJA DE AVALÚOS DEL META S.A.S.*\n*Solicitud de Diagnóstico Pericial de Matrícula Inmobiliaria (SNR)*\n\n` +
        `• *Radicado Web:* ${radicadoNumber}\n` +
        `• *ORIP Jurisdicción:* ${orip}\n` +
        `• *Matrícula Inmobiliaria:* ${fullFolio}\n` +
        `• *Tipo de Inmueble:* ${propType}\n` +
        `• *WhatsApp de Contacto:* ${whatsapp}\n\n` +
        `Solicito validación de gravámenes/embargos, área legal y cotización de visita pericial para avalúo comercial.`;

      resultContainer.innerHTML = `
        <div class="mt-6 p-6 bg-slate-900 border-2 border-emerald-500/80 rounded-2xl text-white shadow-2xl animate-fade-in">
          <div class="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-1 bg-emerald-500 text-slate-950 font-mono-tech text-xs font-black uppercase rounded-md flex items-center gap-1.5">
                <i data-lucide="check-circle-2" class="w-4 h-4"></i>
                <span>MATRÍCULA RADICADA CON ÉXITO</span>
              </span>
              <span class="text-xs font-mono-tech text-emerald-400 font-bold">${radicadoNumber}</span>
            </div>
            <span class="text-[11px] font-mono-tech text-slate-400">Jurisdicción: ORIP ${oripCode}</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5 text-xs">
            <div class="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700">
              <span class="text-[10px] font-mono-tech text-slate-400 uppercase font-bold block mb-1">Folio Completo SNR:</span>
              <span class="font-mono-tech text-base font-extrabold text-emerald-300">${fullFolio}</span>
              <p class="text-[11px] text-slate-400 mt-1">Oficina: ${orip}</p>
            </div>
            <div class="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700">
              <span class="text-[10px] font-mono-tech text-slate-400 uppercase font-bold block mb-1">Tipo de Activo & Contacto:</span>
              <span class="font-semibold text-slate-200 text-sm">${propType}</span>
              <p class="text-[11px] text-slate-400 mt-1">Celular: ${whatsapp}</p>
            </div>
          </div>

          <div class="p-4 bg-emerald-950/50 border border-emerald-500/40 rounded-xl mb-5">
            <h4 class="font-display font-bold text-sm text-emerald-300 mb-1 flex items-center gap-1.5">
              <i data-lucide="shield-alert" class="w-4 h-4 text-emerald-400"></i>
              <span>Diagnóstico Pericial Preliminar Habilitado</span>
            </h4>
            <p class="text-xs text-slate-300 leading-relaxed">
              Hemos asignado tu caso al perito avaluador colegiado RAA de turno. Para recibir el cotejo registral preliminar (área de títulos, existencia de medidas cautelares o gravámenes hipotecarios y cotización del avalúo oficial), pulsa el botón a continuación:
            </p>
          </div>

          <div class="flex flex-col sm:flex-row items-center justify-between gap-3">
            <a href="https://wa.me/573123661758?text=${encodeURIComponent(whatsappMsg)}" target="_blank" rel="noopener" class="btn-brutalist w-full sm:w-auto px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono-tech text-xs font-extrabold uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all">
              <i data-lucide="message-circle" class="w-4 h-4"></i>
              <span>Recibir Diagnóstico Registral por WhatsApp</span>
            </a>
            <button type="button" id="btn-reset-snr" class="text-xs font-mono-tech text-slate-400 hover:text-white py-2">
              ← Radicar Otra Matrícula
            </button>
          </div>
        </div>
      `;

      resultContainer.classList.remove('hidden');
      lucide.createIcons();

      const btnReset = document.getElementById('btn-reset-snr');
      if (btnReset) {
        btnReset.addEventListener('click', () => {
          resultContainer.classList.add('hidden');
          resultContainer.innerHTML = '';
          if (matriculaInput) matriculaInput.value = '';
          matriculaInput.focus();
        });
      }

      resultContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 1100);
  });
}

/* ==========================================================================
   2. PORTFOLIO DE CASOS REALES (FILTROS)
   ========================================================================== */
function initPortfolioTabs() {
  const container = document.getElementById('portfolio-grid');
  const filterBtns = document.querySelectorAll('.portfolio-filter-btn');

  if (!container || !window.LONJA_DATA || !window.LONJA_DATA.portfolioCases) return;

  const cases = window.LONJA_DATA.portfolioCases;

  function renderPortfolio(cat = 'todos') {
    container.innerHTML = '';

    const filtered = cat === 'todos'
      ? cases
      : cases.filter(c => c.category.toLowerCase().includes(cat.toLowerCase()));

    filtered.forEach(item => {
      const card = document.createElement('div');
      card.className = 'group bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#0C2F5A]/40 transition-all flex flex-col justify-between';

      card.innerHTML = `
        <div>
          <div class="relative h-52 overflow-hidden bg-slate-900">
            <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" onerror="this.src='lonja_banner_full.jpg';" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div class="absolute top-3 left-3">
              <span class="px-2.5 py-1 bg-white/90 backdrop-blur-md text-slate-900 font-mono-tech text-[10px] font-bold uppercase rounded-md shadow-sm">
                ${item.badge}
              </span>
            </div>
            <div class="absolute bottom-3 left-3 right-3 text-white">
              <span class="text-[11px] font-mono-tech text-emerald-300 font-semibold uppercase block">${item.category}</span>
              <h4 class="font-display font-bold text-base text-white leading-snug">${item.title}</h4>
            </div>
          </div>

          <div class="p-5">
            <div class="grid grid-cols-2 gap-2 pb-3 mb-3 border-b border-slate-100 font-mono-tech text-[11px]">
              <div>
                <span class="text-slate-400 block uppercase">Ubicación:</span>
                <span class="text-slate-800 font-bold">${item.location}</span>
              </div>
              <div>
                <span class="text-slate-400 block uppercase">Magnitud:</span>
                <span class="text-slate-800 font-bold">${item.area}</span>
              </div>
            </div>

            <p class="text-xs text-slate-600 leading-relaxed mb-4">
              ${item.description}
            </p>

            <div class="p-2.5 bg-slate-50 rounded-xl border border-slate-200/80 mb-3">
              <span class="text-[10px] font-mono-tech uppercase text-slate-400 font-bold block">Propósito Pericial:</span>
              <span class="text-xs font-semibold text-[#0C2F5A]">${item.purpose}</span>
            </div>
          </div>
        </div>

        <div class="px-5 pb-5 pt-0">
          <a href="https://wa.me/573123661758?text=Hola%20Lonja%20de%20Avaluos,%20tengo%20un%20caso%20similar%20a%20${encodeURIComponent(item.title)}%20y%20requiero%20asesoria%20pericial." target="_blank" rel="noopener" class="btn-brutalist w-full bg-slate-100 hover:bg-[#0C2F5A] text-slate-800 hover:text-white text-xs font-mono-tech font-bold uppercase py-2.5 px-3 rounded-xl text-center flex items-center justify-center gap-1.5 transition-all">
            <span>Consultar Caso Similar</span>
            <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
          </a>
        </div>
      `;

      container.appendChild(card);
    });

    lucide.createIcons();
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.className = 'portfolio-filter-btn px-4 py-2 border border-slate-200 bg-white text-slate-700 font-semibold hover:bg-slate-50 rounded-xl shadow-sm text-xs font-mono-tech transition-all';
      });
      btn.className = 'portfolio-filter-btn px-4 py-2 border border-[#0C2F5A] bg-[#0C2F5A] text-white font-bold rounded-xl shadow-md text-xs font-mono-tech transition-all';
      const cat = btn.getAttribute('data-cat') || 'todos';
      renderPortfolio(cat);
    });
  });

  renderPortfolio('todos');
}

/* ==========================================================================
   3. MENÚ MÓVIL Y NAVEGACIÓN
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
   4. FORMULARIO DE CONTACTO DIRECTO
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-direct-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = (document.getElementById('contact-name') || {}).value || '';
    const phone = (document.getElementById('contact-phone') || {}).value || '';
    const city = (document.getElementById('contact-city') || {}).value || '';
    const msg = (document.getElementById('contact-msg') || {}).value || '';

    const text = `🏛️ *LONJA DE AVALÚOS DEL META S.A.S.*\nSolicitud de Asesoría Pericial:\n\n• *Nombre:* ${name}\n• *Teléfono:* ${phone}\n• *Municipio:* ${city}\n• *Mensaje:* ${msg}`;
    window.open(`https://wa.me/573123661758?text=${encodeURIComponent(text)}`, '_blank');
  });
}
