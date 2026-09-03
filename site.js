(function () {
  "use strict";

  const PHOTO_ROOT = "imagenes-optimizadas/";
  if (document.body) document.body.classList.add("page-transition");
  const defaultProjects = [
    { id: "angamos", name: "Angamos", location: "Antofagasta", contractor: "BMI", year: "2018", status: "", products: ["Muro cortina"], imageFolder: "2018 - ANGAMOS", imageBase: "ANGAMOS BMI 2018--ANGAMOS", imageCount: 3 },
    { id: "comapa-punta-arenas", name: "Comapa", location: "Punta Arenas", contractor: "Bravo Izquierdo", year: "2018", status: "", products: ["Lucarnas de cristal", "Barandas de cristal"], imageFolder: "2018 - COMAPA PUNTA ARENAS", imageBase: "COMAPA PUNTA ARENAS BRAVO IZQUIERDO 2018--COMAPA", imageCount: 4 },
    { id: "puerta-del-sol", name: "Puerta del Sol", contractor: "Mena y Ovalle", year: "2018", status: "", products: ["Shower Door"], imageFolder: "2018 - PUERTA DEL SOL", imageBase: "PUERTA DEL SOL MENA Y OVALLE 2018--PUERTA-DEL-SOL", imageCount: 1 },
    { id: "torres-centenario-antofagasta", name: "Torres Centenario", location: "Antofagasta", contractor: "Mar Abierto", year: "2018", status: "", products: ["Muro cortina", "Panel compuesto de aluminio (ACM)"], imageFolder: "2018 - TORRES CENTENARIO ANTOFAGASTA", imageBase: "TORRES CENTENARIO ANTOFAGASTA MAR ABIERTO 2018--TORRES-CENTENARIO", imageCount: 4 },
    { id: "club-de-campo-vitacura", name: "Club de Campo Vitacura", subtitle: "Boldo, Peumo y Quillai", contractor: "Nahmias", year: "2020", status: "", products: ["Barandas de cristal", "Separadores de cristal"], imageFolder: "2020 - CLUB DE CAMPO VITACURA", imageBase: "CLUB DE CAMPO VITACURA NAHMIAS 2020--CLUB-DE-CAMPO", imageCount: 9 },
    { id: "onofre-jarpa", name: "Condominio Onofre Jarpa", contractor: "Sur G", year: "2021", status: "", products: ["Barandas de cristal", "Shower Door"], imageFolder: "2021 - ONOFRE JARPA", imageBase: "ONOFRE JARPA SUR G 2021--ONOFRE-JARPA", imageCount: 3 },
    { id: "puerto-nuevo-antofagasta", name: "Puerto Nuevo", location: "Antofagasta", contractor: "Echeverría Izquierdo", year: "2021", status: "", products: ["Barandas de cristal", "Pasamanos de acero inoxidable"], imageFolder: "2021 - PUERTO NUEVO ANTOFAGASTA", imageBase: "PUERTO NUEVO ANTOFAGASTA ECHEVERRIA IZQUIERDO 2021--PUERTO-NUEVO", imageCount: 4 },
    { id: "casa-italia", name: "Casa Italia", contractor: "Tecton", year: "2022", status: "", products: ["Shower Door"], imageFolder: "2022 - CASA ITALIA", imageBase: "CASA ITALIA TECTON 2022--CASA-ITALIA", imageCount: 4 },
    { id: "edificio-el-roble", name: "Edificio El Roble", contractor: "Nahmias", year: "2022", status: "", products: ["Canopy de acceso", "Mamparas de oficina"], imageFolder: "2022 - EDIFICIO EL ROBLE", imageBase: "EDIFICIO EL ROBLE NAHMIAS 2022--EL-ROBLE", imageCount: 4 },
    { id: "la-capitania", name: "La Capitanía", contractor: "Nahmias", year: "2022", status: "", products: ["Shower Door", "Espejos"], imageFolder: "2022 - LA CAPITANIA", imageBase: "LA CAPITANIA NAHMIAS 2022--LA-CAPITANIA", imageCount: 2 },
    { id: "pedro-navia", name: "Pedro Navia", contractor: "Tecton", year: "2022", status: "", products: ["Barandas de cristal", "Lucarnas de cristal"], imageFolder: "2022 - PEDRO NAVIA", imageBase: "PEDRO NAVIA TECTON 2022--PEDRO-NAVIA", imageCount: 3 },
    { id: "bustamante", name: "Bustamante", contractor: "Nahmias", year: "2024", status: "", products: ["Barandas de cristal", "Shower Door", "Espejos"], imageSets: [{ folder: "2024 - BUSTAMANTE EXTERIOR", base: "BUSTAMANTE EXTERIOR NAHMIAS 2024--BUSTAMANTE-EXTERIOR", count: 4 }, { folder: "2024 - BUSTAMANTE INTERIOR", base: "BUSTAMANTE INTERIOR NAHMIAS 2024--BUSTAMANTE-INTERIOR", count: 4 }] },
    { id: "data-center-chile-3", name: "Data Center Chile 3", contractor: "Puerto Octay", year: "2024", status: "", products: ["Barandas de cristal", "Tablones vidriados"], imageFolder: "2024 - DATA CENTER CHILE 3", imageBase: "DATA CENTER CHILE 3 PUERTO OCTAY 2024--DATA-CENTER-CHILE-3", imageCount: 4 },
    { id: "jofre", name: "Jofre", contractor: "Nahmias", year: "2024", status: "", products: ["Shower Door"], imageFolder: "2024 - JOFRE", imageBase: "JOFRE NAHMIAS 2024--JOFRE", imageCount: 4 },
    { id: "jose-domingo-canas", name: "José Domingo Cañas", contractor: "Nahmias", year: "2024", status: "", products: ["Barandas de cristal", "Shower Door"], imageFolder: "2024 - JOSE DOMINGO CANAS", imageBase: "JOSE DOMINGO CANAS NAHMIAS 2024--JOSE-DOMINGO-CANAS", imageCount: 4 },
    { id: "lote-19", name: "Lote 19", contractor: "Ignacio Hurtado", year: "2024", status: "", products: ["Shower Door", "Espejos"], imageFolder: "2024 - LOTE 19", imageBase: "LOTE 19 IGNACIO HURTADO 2024--LOTE-19", imageCount: 3 },
    { id: "principe-de-gales", name: "Príncipe de Gales", contractor: "Echeverría Izquierdo", year: "2024", status: "", products: ["Mamparas de acceso", "Shower Door"], imageFolder: "2024 - PRINCIPE DE GALES", imageBase: "PRINCIPE DE GALES ECHEVERRIA IZQUIERDO 2024--PRINCIPE-DE-GALES", imageCount: 4 },
    { id: "angamos-nahmias", name: "Angamos", contractor: "Nahmias", year: "2025", status: "", products: ["Shower Door", "Espejos"], imageFolder: "2025 - ANGAMOS", imageBase: "ANGAMOS NAHMIAS 2025--ANGAMOS", imageCount: 4 },
    { id: "burgos", name: "Burgos", contractor: "Tecton", year: "2025", status: "", products: ["Espejos"], imageFolder: "2025 - BURGOS", imageBase: "BURGOS TECTON 2025--BURGOS", imageCount: 4 },
    { id: "data-center-scala-santa-teresa", name: "Data Center Scala Santa Teresa", contractor: "Puerto Octay", year: "2025", status: "", products: ["Panel compuesto de fachada"], imageFolder: "2025 - DATACENTER SCALA SANTA TERESA", imageBase: "DATACENTER SCALA SANTA TERESA 2025--DATACENTER-SCALA", imageCount: 4 },
    { id: "tavelli", name: "Tavelli", contractor: "Nahmias", year: "2025", status: "", products: ["Shower Door"], imageFolder: "2025 - TAVELLI", imageBase: "TAVELLI NAHMIAS 2025--TAVELLI", imageCount: 2 },
    { id: "apoquindo-los-militares", name: "Apoquindo Los Militares", contractor: "Echeverría Izquierdo", year: "2026", status: "En instalación", products: ["Barandas de cristal", "Separadores de cristal"], imageFolder: "2026 - APOQUINDO LOS MILITARES", imageBase: "APOQUINDO LOS MILITARES ECHEVERRIA IZQUIERDO 2026--APOQUINDO", imageCount: 4 },
    { id: "el-sauce", name: "El Sauce 3", contractor: "Pocuro", year: "2026", status: "En instalación", products: ["Barandas de cristal con balaustros"], imageFolder: "2026 - EL SAUCE", imageBase: "EL SAUCE POCURO 2026--EL-SAUCE", imageCount: 4 }
  ];

  defaultProjects.forEach(function (project) {
    const imageSets = project.imageSets || [{ folder: project.imageFolder, base: project.imageBase, count: project.imageCount }];
    const images = imageSets.flatMap(function (set) {
      return Array.from({ length: set.count }, function (_, index) {
        const number = String(index + 1).padStart(2, "0");
        return PHOTO_ROOT + set.folder + "/" + set.base + "--" + number + ".webp";
      });
    }).slice(0, 10);
    project.cover = images[0];
    project.gallery = images.slice(1);
    project.products = Array.isArray(project.products) && project.products.length
      ? project.products
      : ["PLACEHOLDER #1", "PLACEHOLDER #2"];
    delete project.imageFolder;
    delete project.imageBase;
    delete project.imageCount;
    delete project.imageSets;
  });

  const defaultProducts = [
    {
      id: "mamparas-cristal",
      name: "Mamparas de cristal",
      anchor: "vidriadas",
      images: [
        "imagenes-optimizadas/2022 - EDIFICIO EL ROBLE/EDIFICIO EL ROBLE NAHMIAS 2022--EL-ROBLE--03.webp",
        "imagenes-optimizadas/2022 - EDIFICIO EL ROBLE/EDIFICIO EL ROBLE NAHMIAS 2022--EL-ROBLE--04.webp",
        "imagenes-optimizadas/2018 - COMAPA PUNTA ARENAS/COMAPA PUNTA ARENAS BRAVO IZQUIERDO 2018--COMAPA--04.webp"
      ]
    },
    { id: "puertas-protex", name: "Puertas Protex", images: [null, null, null] },
    {
      id: "barandas-cristal",
      name: "Barandas de cristal",
      anchor: "barandas",
      images: [
        "imagenes-optimizadas/2026 - APOQUINDO LOS MILITARES/APOQUINDO LOS MILITARES ECHEVERRIA IZQUIERDO 2026--APOQUINDO--01.webp",
        "imagenes-optimizadas/2021 - PUERTO NUEVO ANTOFAGASTA/PUERTO NUEVO ANTOFAGASTA ECHEVERRIA IZQUIERDO 2021--PUERTO-NUEVO--02.webp",
        "imagenes-optimizadas/2021 - PUERTO NUEVO ANTOFAGASTA/PUERTO NUEVO ANTOFAGASTA ECHEVERRIA IZQUIERDO 2021--PUERTO-NUEVO--03.webp"
      ]
    },
    {
      id: "shower-door",
      name: "Shower Door",
      images: [
        "imagenes-optimizadas/2025 - TAVELLI/TAVELLI NAHMIAS 2025--TAVELLI--01.webp",
        "imagenes-optimizadas/2025 - TAVELLI/TAVELLI NAHMIAS 2025--TAVELLI--02.webp",
        "imagenes-optimizadas/2024 - PRINCIPE DE GALES/PRINCIPE DE GALES ECHEVERRIA IZQUIERDO 2024--PRINCIPE-DE-GALES--04.webp"
      ]
    },
    {
      id: "espejos",
      name: "Espejos",
      images: [
        "imagenes-optimizadas/2025 - BURGOS/BURGOS TECTON 2025--BURGOS--01.webp",
        "imagenes-optimizadas/2022 - CASA ITALIA/CASA ITALIA TECTON 2022--CASA-ITALIA--02.webp",
        "imagenes-optimizadas/2024 - JOFRE/JOFRE NAHMIAS 2024--JOFRE--03.webp"
      ]
    },
    {
      id: "pasamanos-acero",
      name: "Pasamanos de acero inoxidable",
      images: [
        "imagenes-optimizadas/2021 - PUERTO NUEVO ANTOFAGASTA/PUERTO NUEVO ANTOFAGASTA ECHEVERRIA IZQUIERDO 2021--PUERTO-NUEVO--02.webp",
        "imagenes-optimizadas/2021 - PUERTO NUEVO ANTOFAGASTA/PUERTO NUEVO ANTOFAGASTA ECHEVERRIA IZQUIERDO 2021--PUERTO-NUEVO--03.webp",
        "imagenes-optimizadas/2021 - PUERTO NUEVO ANTOFAGASTA/PUERTO NUEVO ANTOFAGASTA ECHEVERRIA IZQUIERDO 2021--PUERTO-NUEVO--04.webp"
      ]
    },
    { id: "revestimiento-chambranas", name: "Revestimiento y chambranas de acero inoxidable", anchor: "revestimientos", images: [null, null, null] },
    {
      id: "panel-compuesto-aluminio",
      name: "Revestimientos en panel compuesto de aluminio",
      images: [
        "imagenes-optimizadas/2025 - DATACENTER SCALA SANTA TERESA/DATACENTER SCALA SANTA TERESA 2025--DATACENTER-SCALA--01.webp",
        "imagenes-optimizadas/2025 - DATACENTER SCALA SANTA TERESA/DATACENTER SCALA SANTA TERESA 2025--DATACENTER-SCALA--02.webp",
        "imagenes-optimizadas/2025 - DATACENTER SCALA SANTA TERESA/DATACENTER SCALA SANTA TERESA 2025--DATACENTER-SCALA--03.webp"
      ]
    },
    { id: "ventanas-pvc", name: "Ventanas de PVC", images: [null, null, null] },
    {
      id: "lucarnas-cristal",
      name: "Lucarnas de cristal",
      images: [
        "imagenes-optimizadas/2018 - COMAPA PUNTA ARENAS/COMAPA PUNTA ARENAS BRAVO IZQUIERDO 2018--COMAPA--01.webp",
        "imagenes-optimizadas/2018 - COMAPA PUNTA ARENAS/COMAPA PUNTA ARENAS BRAVO IZQUIERDO 2018--COMAPA--02.webp",
        "imagenes-optimizadas/2018 - COMAPA PUNTA ARENAS/COMAPA PUNTA ARENAS BRAVO IZQUIERDO 2018--COMAPA--03.webp"
      ]
    }
  ];

  function cloneDefaults() {
    return JSON.parse(JSON.stringify(defaultProjects));
  }

  function getProjects() {
    return cloneDefaults();
  }

  function cloneProductDefaults() {
    return JSON.parse(JSON.stringify(defaultProducts));
  }

  function getProducts() {
    return cloneProductDefaults();
  }

  function escapeHtml(value) {
    return String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function projectUrl(id) {
    return "proyecto.html?id=" + encodeURIComponent(id);
  }

  function productMedia(product) {
    const images = Array.isArray(product.images) ? product.images.slice(0, 3) : [];
    while (images.length < 3) images.push(null);
    return images.map(function (source, index) {
      const number = index + 1;
      if (!source) {
        return `<figure class="product-card__media product-card__placeholder" data-product-media data-image-number="${number}" data-product-name="${escapeHtml(product.name)}">
          <figcaption><span>Imagen ${number} del producto</span><strong>${escapeHtml(product.name)}</strong></figcaption>
        </figure>`;
      }
      return `<figure class="product-card__media" data-product-media data-image-number="${number}" data-product-name="${escapeHtml(product.name)}">
        <img data-product-image="${escapeHtml(source)}" alt="Imagen ${number} de ${escapeHtml(product.name)}" decoding="async">
        <figcaption>${escapeHtml(product.name)}</figcaption>
      </figure>`;
    }).join("");
  }

  function productCard(product) {
    const articleId = product.anchor || product.id;
    const buttonId = "producto-boton-" + product.id;
    const panelId = "producto-panel-" + product.id;
    return `<article class="product-card" id="${escapeHtml(articleId)}" data-product-card>
      <h2 class="product-card__heading">
        <button class="product-card__toggle" id="${escapeHtml(buttonId)}" type="button" aria-expanded="false" aria-controls="${escapeHtml(panelId)}" data-product-toggle>
          <span>${escapeHtml(product.name)}</span><span class="product-card__indicator" aria-hidden="true">+</span>
        </button>
      </h2>
      <div class="product-card__panel" id="${escapeHtml(panelId)}" role="region" aria-labelledby="${escapeHtml(buttonId)}" data-product-panel hidden>
        <div class="product-card__gallery">${productMedia(product)}</div>
      </div>
    </article>`;
  }

  function renderProducts(products) {
    const container = document.querySelector("[data-products]");
    if (!container) return;
    container.innerHTML = products.map(productCard).join("");
    if (!products.length) container.innerHTML = '<div class="empty-state">No hay productos publicados por el momento.</div>';
  }

  function setupProductAccordions() {
    const cards = Array.from(document.querySelectorAll("[data-product-card]"));
    if (!cards.length) return;
    const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let revealRun = 0;

    function placeholderFor(item) {
      const number = item.dataset.imageNumber || "";
      const productName = item.dataset.productName || "Producto";
      item.classList.add("product-card__placeholder");
      item.innerHTML = `<figcaption><span>Imagen ${escapeHtml(number)} del producto</span><strong>${escapeHtml(productName)}</strong></figcaption>`;
    }

    function loadImage(item) {
      const image = item.querySelector("[data-product-image]");
      if (!image || image.getAttribute("src")) return Promise.resolve();
      return new Promise(function (resolve) {
        let settled = false;
        function finish() {
          if (settled) return;
          settled = true;
          image.onload = null;
          image.onerror = null;
          resolve();
        }
        image.onload = finish;
        image.onerror = function () {
          placeholderFor(item);
          finish();
        };
        image.src = image.dataset.productImage;
        if (image.complete) {
          window.setTimeout(function () {
            if (!image.naturalWidth) placeholderFor(item);
            finish();
          }, 0);
        }
      });
    }

    async function revealMedia(panel, runId) {
      const items = Array.from(panel.querySelectorAll("[data-product-media]"));
      for (const item of items) {
        await loadImage(item);
        if (runId !== revealRun || panel.hidden) return;
        item.classList.add("is-visible");
        if (!reducedMotion) await new Promise(function (resolve) { window.setTimeout(resolve, 150); });
      }
    }

    function closeCard(card) {
      const button = card.querySelector("[data-product-toggle]");
      const panel = card.querySelector("[data-product-panel]");
      card.classList.remove("is-open");
      button.setAttribute("aria-expanded", "false");
      panel.hidden = true;
      panel.querySelectorAll("[data-product-media]").forEach(function (item) {
        item.classList.remove("is-visible");
      });
    }

    function openCard(card) {
      revealRun += 1;
      cards.forEach(function (otherCard) {
        if (otherCard !== card) closeCard(otherCard);
      });
      const button = card.querySelector("[data-product-toggle]");
      const panel = card.querySelector("[data-product-panel]");
      card.classList.add("is-open");
      button.setAttribute("aria-expanded", "true");
      panel.hidden = false;
      revealMedia(panel, revealRun);
    }

    cards.forEach(function (card) {
      const button = card.querySelector("[data-product-toggle]");
      button.addEventListener("click", function () {
        if (card.classList.contains("is-open")) {
          revealRun += 1;
          closeCard(card);
          return;
        }
        openCard(card);
      });
    });

    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target && target.matches("[data-product-card]")) openCard(target);
    }
  }

  function setupAboutTabs() {
    const text = document.querySelector("[data-about-text]");
    const buttons = Array.from(document.querySelectorAll("[data-about-tab]"));
    if (!text || !buttons.length) return;

    const content = {
      quienes: '<span class="about-text__paragraph">En <strong>CWSS Ingeniería Ltda</strong>. contamos con más de 10 años de experiencia en el desarrollo e instalación de soluciones vidriadas para nuestros clientes, principalmente: arquitectos, inmobiliarias y empresas constructoras.</span><span class="about-text__paragraph">Nuestro principal valor es la experiencia y el profesionalismo de un equipo que participa activamente en cada etapa del proyecto, entregando asesoría especializada desde el diseño hasta la ingeniería de detalles, fabricación y montaje final del producto.</span><span class="about-text__paragraph">Trabajamos con un enfoque integral, buscando entregar soluciones que respondan a las necesidades técnicas y arquitectónicas de cada proyecto, asegurando una ejecución eficiente y de calidad.</span>',
      mision: '<span class="about-text__paragraph">Nuestra misión es transformar espacios excepcionales mediante el diseño, fabricación y ejecución de cristales. Nos comprometemos a ofrecer calidad en cada proyecto y a buscar continuamente la satisfacción final del cliente como nuestro principal objetivo.</span>',
      vision: '<span class="about-text__paragraph">En CWSS Ingeniería, aspiramos a expandir nuestra presencia, sumando constantemente nuevos clientes, manteniendo siempre los más altos estándares de calidad y satisfacción.</span>'
    };

    function selectTab(button) {
      const key = button.dataset.aboutTab;
      if (!content[key]) return;
      buttons.forEach(function (item) {
        const selected = item === button;
        item.classList.toggle("is-active", selected);
        item.setAttribute("aria-selected", String(selected));
        item.tabIndex = selected ? 0 : -1;
      });
      text.innerHTML = content[key];
      text.setAttribute("aria-labelledby", button.id);
      text.classList.remove("is-switching");
      void text.offsetWidth;
      text.classList.add("is-switching");
    }

    buttons.forEach(function (button, index) {
      button.addEventListener("click", function () { selectTab(button); });
      button.addEventListener("keydown", function (event) {
        if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
        event.preventDefault();
        let nextIndex = index;
        if (event.key === "Home") nextIndex = 0;
        else if (event.key === "End") nextIndex = buttons.length - 1;
        else if (event.key === "ArrowDown" || event.key === "ArrowRight") nextIndex = (index + 1) % buttons.length;
        else nextIndex = (index - 1 + buttons.length) % buttons.length;
        buttons[nextIndex].focus();
        selectTab(buttons[nextIndex]);
      });
    });
  }

  function projectImages(project) {
    return Array.from(new Set([project.cover].concat(project.gallery || []).filter(Boolean)));
  }

  function projectProducts(project) {
    if (Array.isArray(project.products) && project.products.length) return project.products;
    if (project.product) return [String(project.product)];
    return ["PLACEHOLDER #1", "PLACEHOLDER #2"];
  }

  function projectProductsMarkup(project) {
    return groupedProjectProducts(project).map(function (product) {
      return `<span>${escapeHtml(product)}</span>`;
    }).join("");
  }

  function groupedProjectProducts(project) {
    const products = projectProducts(project);
    const crystalProducts = products.map(function (product, index) {
      const match = String(product).trim().match(/^(.+?)\s+de cristal$/i);
      return match ? { index: index, name: match[1].trim() } : null;
    }).filter(Boolean);
    if (crystalProducts.length < 2) return products;

    const names = crystalProducts.map(function (product, index) {
      if (index === 0) return product.name;
      return product.name.charAt(0).toLowerCase() + product.name.slice(1);
    });
    const groupedName = names.length === 2
      ? names[0] + " y " + names[1] + " de cristal"
      : names.slice(0, -1).join(", ") + " y " + names[names.length - 1] + " de cristal";
    const crystalIndexes = new Set(crystalProducts.map(function (product) { return product.index; }));
    const firstCrystalIndex = crystalProducts[0].index;
    const result = [];
    products.forEach(function (product, index) {
      if (index === firstCrystalIndex) result.push(groupedName);
      if (!crystalIndexes.has(index)) result.push(product);
    });
    return result;
  }

  function projectDisplayName(project) {
    return project.name + (project.location ? " (" + project.location + ")" : "");
  }

  function projectConstructor(project) {
    const contractor = project.contractor || "No indica";
    return /^Constructora\s/i.test(contractor) ? contractor : "Constructora " + contractor;
  }

  function projectCard(project, autoplay) {
    const client = projectConstructor(project);
    const displayName = projectDisplayName(project);
    const subtitle = project.subtitle ? `<p class="project-card__subtitle">${escapeHtml(project.subtitle)}</p>` : "";
    const images = projectImages(project);
    const media = autoplay
      ? `<div class="project-card__media" data-card-slideshow>${images.map(function (image, index) {
          return `<img class="project-card__slide${index === 0 ? " is-active" : ""}" src="${escapeHtml(image)}" alt="${index === 0 ? escapeHtml(displayName) : ""}" ${index === 0 ? "" : 'loading="lazy" '}decoding="async">`;
        }).join("")}</div>`
      : `<img src="${escapeHtml(project.cover)}" alt="${escapeHtml(displayName)}" loading="lazy" decoding="async">`;
    const controls = autoplay && images.length > 1
      ? `<div class="project-card__slider-controls" aria-label="Controles de imágenes">
          <button type="button" data-card-previous aria-label="Imagen anterior">←</button>
          <span><b data-card-current>1</b> / ${images.length}</span>
          <button type="button" data-card-next aria-label="Imagen siguiente">→</button>
        </div>`
      : "";
    return `
      <article class="project-card">
        <a class="project-card__link" href="${projectUrl(project.id)}" aria-label="Ver obra ${escapeHtml(displayName)}">
          ${media}
          <div class="project-card__content">
            <div><h3>${escapeHtml(displayName)}</h3>${subtitle}</div>
            <div class="project-card__facts">
              <p><span>Cliente</span><strong>${escapeHtml(client)}</strong></p>
              <p><span>Año</span><strong>${escapeHtml(project.year || "Por confirmar")}</strong></p>
              <p><span>Productos</span><strong class="project-products">${projectProductsMarkup(project)}</strong></p>
            </div>
          </div>
          <span class="project-card__arrow" aria-hidden="true">↗</span>
        </a>
        ${controls}
      </article>`;
  }

  function compareProjectsByYearAndName(a, b) {
    const yearA = /^\d{4}$/.test(String(a.year)) ? Number(a.year) : -1;
    const yearB = /^\d{4}$/.test(String(b.year)) ? Number(b.year) : -1;
    if (yearA !== yearB) return yearB - yearA;
    return String(a.name || "").localeCompare(String(b.name || ""), "es", { sensitivity: "base" });
  }

  function renderLatest(projects) {
    const container = document.querySelector("[data-latest-projects]");
    if (!container) return;
    const inProgress = projects.filter(function (project) { return project.status === "En instalación"; }).sort(compareProjectsByYearAndName);
    container.innerHTML = inProgress.slice(0, 2).map(function (project) { return projectCard(project, true); }).join("");
  }

  function renderAllProjects(projects) {
    const container = document.querySelector("[data-all-projects]");
    if (!container) return;
    const ordered = projects.slice().sort(compareProjectsByYearAndName);
    container.innerHTML = ordered.map(function (project) { return projectCard(project, false); }).join("");
    const empty = document.querySelector("[data-empty-projects]");
    if (empty) empty.hidden = projects.length > 0;
  }

  function projectBackgroundVariant(id) {
    const hash = String(id || "").split("").reduce(function (total, character) {
      return ((total * 31) + character.charCodeAt(0)) >>> 0;
    }, 0);
    return hash % 2 === 0 ? "solutions" : "projects";
  }

  function setupProjectsBackground() {
    const background = document.querySelector("[data-projects-background]");
    const main = background && background.closest("main");
    if (!background || !main) return;
    let resizeFrame = null;

    function renderPanels() {
      const pageWidth = Math.max(main.clientWidth, 320);
      const pairHeight = pageWidth * ((9 / 16) + (16 / 9));
      const pairs = Math.max(1, Math.ceil(main.scrollHeight / pairHeight) + 1);
      background.innerHTML = Array.from({ length: pairs }, function () {
        return '<span class="projects-background__panel projects-background__panel--solutions"></span>'
          + '<span class="projects-background__panel projects-background__panel--projects"></span>';
      }).join("");
    }

    renderPanels();
    window.addEventListener("resize", function () {
      if (resizeFrame !== null) window.cancelAnimationFrame(resizeFrame);
      resizeFrame = window.requestAnimationFrame(renderPanels);
    });
  }

  function renderProjectDetail(projects) {
    const container = document.querySelector("[data-project-detail]");
    if (!container) return;
    const id = new URLSearchParams(window.location.search).get("id");
    const project = projects.find(function (item) { return item.id === id; });
    if (!project) {
      container.hidden = true;
      document.querySelector("[data-project-not-found]").hidden = false;
      return;
    }
    document.body.dataset.projectBackground = projectBackgroundVariant(project.id);
    const displayName = projectDisplayName(project);
    const orderedProjects = projects.slice().sort(compareProjectsByYearAndName);
    const currentProjectIndex = orderedProjects.findIndex(function (item) { return item.id === project.id; });
    const previousProject = orderedProjects[(currentProjectIndex - 1 + orderedProjects.length) % orderedProjects.length];
    const nextProject = orderedProjects[(currentProjectIndex + 1) % orderedProjects.length];
    const projectNavigation = orderedProjects.length > 1
      ? `<nav class="project-detail__navigation" aria-label="Navegación entre obras">
          <a href="${projectUrl(previousProject.id)}" aria-label="Obra anterior: ${escapeHtml(projectDisplayName(previousProject))}">←</a>
          <span>${currentProjectIndex + 1} / ${orderedProjects.length}</span>
          <a href="${projectUrl(nextProject.id)}" aria-label="Obra siguiente: ${escapeHtml(projectDisplayName(nextProject))}">→</a>
        </nav>`
      : "";
    document.title = displayName + " | CWSS";
    const galleryImages = projectImages(project);
    const gallery = galleryImages.map(function (image, index) {
      return `<figure class="project-gallery__slide" aria-hidden="${index === 0 ? "false" : "true"}"><img src="${escapeHtml(image)}" alt="${escapeHtml(displayName)} - imagen ${index + 1}" loading="lazy" decoding="async"><button class="project-gallery__full" type="button" data-full-image${index === 0 ? "" : ' tabindex="-1"'}>Ver imagen completa</button></figure>`;
    }).join("");
    const selectors = galleryImages.map(function (image, index) {
      return `<button class="project-gallery__thumb${index === 0 ? " is-active" : ""}" type="button" data-gallery-select="${index}" aria-label="Ver imagen ${index + 1}" aria-current="${index === 0 ? "true" : "false"}"><img src="${escapeHtml(image)}" alt="" loading="lazy" decoding="async"></button>`;
    }).join("");
    const client = projectConstructor(project);
    const subtitle = project.subtitle ? `<p class="project-detail__subtitle">${escapeHtml(project.subtitle)}</p>` : "";
    container.innerHTML = `
      <section class="project-detail__hero" style="background-image:url('${escapeHtml(project.cover)}')">
        <div class="project-detail__title">
          ${projectNavigation}
          <p class="project-detail__project">${escapeHtml(displayName)}</p>
          ${subtitle}
          <div class="project-detail__facts">
            <p><span>Cliente</span><strong>${escapeHtml(client)}</strong></p>
            <p><span>Año</span><strong>${escapeHtml(project.year || "Por confirmar")}</strong></p>
            <p><span>Productos</span><strong class="project-products">${projectProductsMarkup(project)}</strong></p>
          </div>
        </div>
      </section>
      <section class="project-gallery" aria-label="Galería de ${escapeHtml(displayName)}" data-project-gallery tabindex="0">
        <div class="project-gallery__viewport">
          <div class="project-gallery__track" data-gallery-track>${gallery}</div>
        </div>
        <div class="project-gallery__selector" ${galleryImages.length <= 1 ? "hidden" : ""}>${selectors}</div>
        <div class="project-gallery__controls" ${galleryImages.length <= 1 ? "hidden" : ""}>
          <button type="button" data-gallery-previous aria-label="Ver imagen anterior">←</button>
          <p aria-live="polite"><span data-gallery-current>1</span> / ${galleryImages.length}</p>
          <button type="button" data-gallery-next aria-label="Ver imagen siguiente">→</button>
        </div>
      </section>
      <dialog class="image-dialog" data-image-dialog aria-label="Vista completa de la imagen">
        <button class="image-dialog__close" type="button" data-image-close aria-label="Cerrar imagen">×</button>
        <img data-image-dialog-src alt="">
        <p data-image-dialog-caption></p>
      </dialog>`;
  }

  function setupProjectGallery() {
    const gallery = document.querySelector("[data-project-gallery]");
    if (!gallery) return;
    const track = gallery.querySelector("[data-gallery-track]");
    const slides = Array.from(gallery.querySelectorAll(".project-gallery__slide"));
    const thumbnails = Array.from(gallery.querySelectorAll("[data-gallery-select]"));
    const currentLabel = gallery.querySelector("[data-gallery-current]");
    const previous = gallery.querySelector("[data-gallery-previous]");
    const next = gallery.querySelector("[data-gallery-next]");
    const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let current = 0;
    let autoplayTimer = null;

    function showSlide(index) {
      if (!slides.length) return;
      current = (index + slides.length) % slides.length;
      track.style.transform = "translateX(-" + (current * 100) + "%)";
      slides.forEach(function (slide, slideIndex) {
        slide.setAttribute("aria-hidden", String(slideIndex !== current));
        const fullButton = slide.querySelector("[data-full-image]");
        if (fullButton) fullButton.tabIndex = slideIndex === current ? 0 : -1;
      });
      thumbnails.forEach(function (thumb, thumbIndex) {
        const active = thumbIndex === current;
        thumb.classList.toggle("is-active", active);
        thumb.setAttribute("aria-current", String(active));
      });
      if (currentLabel) currentLabel.textContent = String(current + 1);
    }

    function stopAutoplay() {
      if (autoplayTimer !== null) window.clearInterval(autoplayTimer);
      autoplayTimer = null;
    }

    function startAutoplay() {
      stopAutoplay();
      if (reducedMotion || slides.length <= 1 || document.hidden) return;
      autoplayTimer = window.setInterval(function () { showSlide(current + 1); }, 4800);
    }

    function selectSlide(index) {
      showSlide(index);
      startAutoplay();
    }

    thumbnails.forEach(function (thumb) {
      thumb.addEventListener("click", function () { selectSlide(Number(thumb.dataset.gallerySelect)); });
    });
    if (previous) previous.addEventListener("click", function () { selectSlide(current - 1); });
    if (next) next.addEventListener("click", function () { selectSlide(current + 1); });
    gallery.addEventListener("mouseenter", stopAutoplay);
    gallery.addEventListener("mouseleave", startAutoplay);
    gallery.addEventListener("focusin", stopAutoplay);
    gallery.addEventListener("focusout", function (event) {
      if (!gallery.contains(event.relatedTarget)) startAutoplay();
    });
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stopAutoplay(); else startAutoplay();
    });
    document.addEventListener("keydown", function (event) {
      const target = event.target;
      const isEditing = target instanceof HTMLElement
        && (target.matches("input, textarea, select") || target.isContentEditable);
      if (isEditing || event.altKey || event.ctrlKey || event.metaKey) return;
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        selectSlide(current - 1);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        selectSlide(current + 1);
      }
    });
    startAutoplay();
  }

  function setupProjectCardSlides() {
    const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.querySelectorAll("[data-card-slideshow]").forEach(function (media) {
      const slides = Array.from(media.querySelectorAll(".project-card__slide"));
      const card = media.closest(".project-card");
      const previous = card && card.querySelector("[data-card-previous]");
      const next = card && card.querySelector("[data-card-next]");
      const currentLabel = card && card.querySelector("[data-card-current]");
      if (!card || slides.length <= 1) return;
      let current = 0;
      let timer = null;

      function show(index) {
        slides[current].classList.remove("is-active");
        current = (index + slides.length) % slides.length;
        slides[current].classList.add("is-active");
        if (currentLabel) currentLabel.textContent = String(current + 1);
      }

      function showNext() {
        show(current + 1);
      }

      function stop() {
        if (timer !== null) window.clearInterval(timer);
        timer = null;
      }

      function start() {
        stop();
        if (reducedMotion || document.hidden) return;
        timer = window.setInterval(showNext, 3900);
      }

      if (previous) previous.addEventListener("click", function () { show(current - 1); start(); });
      if (next) next.addEventListener("click", function () { show(current + 1); start(); });
      card.addEventListener("mouseenter", stop);
      card.addEventListener("mouseleave", start);
      card.addEventListener("focusin", stop);
      card.addEventListener("focusout", function (event) {
        if (!card.contains(event.relatedTarget)) start();
      });
      document.addEventListener("visibilitychange", function () {
        if (document.hidden) stop(); else start();
      });
      start();
    });
  }

  function setupImageDialog() {
    const dialog = document.querySelector("[data-image-dialog]");
    if (!dialog || typeof dialog.showModal !== "function") return;
    const fullImage = dialog.querySelector("[data-image-dialog-src]");
    const caption = dialog.querySelector("[data-image-dialog-caption]");
    document.querySelectorAll("[data-full-image]").forEach(function (button) {
      button.addEventListener("click", function () {
        const source = button.closest(".project-gallery__slide").querySelector("img");
        fullImage.src = source.getAttribute("src");
        fullImage.alt = source.alt;
        caption.textContent = source.alt;
        dialog.showModal();
      });
    });
    dialog.querySelector("[data-image-close]").addEventListener("click", function () { dialog.close(); });
    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) dialog.close();
    });
  }

  function setupNavigation() {
    const button = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".main-nav");
    if (button && nav) {
      button.addEventListener("click", function () {
        const open = nav.classList.toggle("is-open");
        button.setAttribute("aria-expanded", String(open));
      });
    }
    document.querySelectorAll(".nav-group > a").forEach(function (link) {
      link.addEventListener("click", function (event) {
        if (window.innerWidth <= 1020 && !link.parentElement.classList.contains("is-open")) {
          event.preventDefault();
          link.parentElement.classList.add("is-open");
        }
      });
    });
    document.querySelectorAll('a[href="#contacto"]').forEach(function (link) {
      link.addEventListener("click", function (event) {
        const contact = document.getElementById("contacto");
        if (!contact) return;
        event.preventDefault();
        contact.scrollIntoView({ behavior: "smooth", block: "start" });
        if (nav) nav.classList.remove("is-open");
        if (button) button.setAttribute("aria-expanded", "false");
        window.history.replaceState(null, "", "#contacto");
      });
    });
  }

  function setupPageTransitions() {
    const body = document.body;
    if (!body) return;
    const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function showPage() {
      body.classList.remove("is-page-leaving");
      body.classList.add("is-page-visible");
    }

    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(showPage);
    });
    window.addEventListener("pageshow", showPage);
    if (reducedMotion) return;

    const transitionPages = new Set(["", "index.html", "soluciones.html", "proyectos.html"]);
    document.addEventListener("click", function (event) {
      const link = event.target.closest("a");
      if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (link.target || link.hasAttribute("download")) return;
      const destination = new URL(link.href, window.location.href);
      if (destination.origin !== window.location.origin) return;
      if (destination.hash && destination.pathname === window.location.pathname) return;
      const page = destination.pathname.split("/").pop().toLowerCase();
      if (!transitionPages.has(page) || destination.href === window.location.href) return;

      event.preventDefault();
      body.classList.remove("is-page-visible");
      body.classList.add("is-page-leaving");
      window.setTimeout(function () { window.location.href = destination.href; }, 480);
    });
  }

  function setupRevealAnimations() {
    const selectors = [
      ".site-header .main-nav > a",
      ".about-visual",
      ".about-copy > *",
      ".latest .section-heading > *",
      ".latest .project-card",
      ".page-intro > *",
      ".projects-page .project-card",
      ".products-page > h1",
      ".products-page .product-card",
      ".project-detail__title > *",
      ".project-gallery__viewport",
      ".project-gallery__selector",
      ".project-gallery__controls",
      ".not-found > *"
    ];
    const elements = Array.from(document.querySelectorAll(selectors.join(",")));
    if (!elements.length) return;

    elements.forEach(function (element, index) {
      element.classList.add("reveal-on-scroll");
      element.style.setProperty("--reveal-delay", Math.min(index % 6, 5) * 110 + "ms");
    });

    const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach(function (element) { element.classList.add("is-revealed"); });
      return;
    }

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8%", threshold: 0.08 });

    elements.forEach(function (element) { observer.observe(element); });
  }

  const projects = getProjects();
  const products = getProducts();
  renderProducts(products);
  setupProductAccordions();
  setupAboutTabs();
  renderLatest(projects);
  renderAllProjects(projects);
  setupProjectsBackground();
  renderProjectDetail(projects);
  setupProjectCardSlides();
  setupProjectGallery();
  setupImageDialog();
  setupNavigation();
  setupPageTransitions();
  setupRevealAnimations();
  document.querySelectorAll("[data-year]").forEach(function (year) {
    year.textContent = String(new Date().getFullYear());
  });
})();
