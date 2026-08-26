(function () {
  "use strict";

  const PROJECTS_KEY = "cwss_projects_v6";
  const PRODUCTS_KEY = "cwss_products_v2";
  const ADMIN_KEY = "cwss_admin_session";
  const PHOTO_ROOT = "imagenes-optimizadas/";
  if (document.body) document.body.classList.add("page-transition");
  const defaultProjects = [
    {
      id: "angamos",
      name: "Angamos",
      contractor: "BMI",
      year: "2018",
      status: "Completado",
      cover: PHOTO_ROOT + "ANGAMOS CONSTRUCTORA BMI 2018/ANGAMOS-01.png",
      gallery: [PHOTO_ROOT + "ANGAMOS CONSTRUCTORA BMI 2018/ANGAMOS-02.png", PHOTO_ROOT + "ANGAMOS CONSTRUCTORA BMI 2018/ANGAMOS-03.png"]
    },
    {
      id: "angamos-nahmias",
      name: "Angamos",
      contractor: "Nahmias",
      year: "2025",
      status: "Completado",
      cover: PHOTO_ROOT + "ANGAMOS NAHMIAS 2025/ANGAMOSNAMIAS-1.jpg",
      gallery: [PHOTO_ROOT + "ANGAMOS NAHMIAS 2025/ANGAMOSNAMIAS-2.jpg", PHOTO_ROOT + "ANGAMOS NAHMIAS 2025/ANGAMOSNAMIAS-3.png", PHOTO_ROOT + "ANGAMOS NAHMIAS 2025/ANGAMOSNAMIAS-4.jpg"]
    },
    {
      id: "apoquindo-los-militares",
      name: "Apoquindo Los Militares",
      contractor: "Echeverría Izquierdo",
      year: "2026",
      status: "Obra en curso",
      cover: PHOTO_ROOT + "APOQUINDO LOS MILITARES CONTRUCTORA ECHEVERRIA IZQUIERDO 2026 (EN PROCESO)/LOSMILITARES-01.jpg",
      gallery: [PHOTO_ROOT + "APOQUINDO LOS MILITARES CONTRUCTORA ECHEVERRIA IZQUIERDO 2026 (EN PROCESO)/LOSMILITARES-2.jpg", PHOTO_ROOT + "APOQUINDO LOS MILITARES CONTRUCTORA ECHEVERRIA IZQUIERDO 2026 (EN PROCESO)/LOSMILITARES-03.jpg", PHOTO_ROOT + "APOQUINDO LOS MILITARES CONTRUCTORA ECHEVERRIA IZQUIERDO 2026 (EN PROCESO)/LOSMILITARES-4.jpg"]
    },
    {
      id: "el-sause",
      name: "El Sause",
      contractor: "No indica",
      year: "2026",
      status: "Obra en curso",
      cover: PHOTO_ROOT + "EL SAUSE 2026 (EN PROCESO)/EL-SAUSE-01.jpeg",
      gallery: [PHOTO_ROOT + "EL SAUSE 2026 (EN PROCESO)/EL-SAUSE-02.jpeg", PHOTO_ROOT + "EL SAUSE 2026 (EN PROCESO)/EL-SAUSE-03.jpeg", PHOTO_ROOT + "EL SAUSE 2026 (EN PROCESO)/EL-SAUSE-04.jpeg"]
    },
    {
      id: "burgos",
      name: "Burgos",
      contractor: "Tecton",
      year: "2025",
      status: "Completado",
      cover: PHOTO_ROOT + "BURGOS TECTON 2025/BURGOS-1.jpg",
      gallery: [PHOTO_ROOT + "BURGOS TECTON 2025/BURGOS-2.jpg", PHOTO_ROOT + "BURGOS TECTON 2025/BURGOS-3.jpg", PHOTO_ROOT + "BURGOS TECTON 2025/BURGOS-4.jpg"]
    },
    {
      id: "bustamante-exterior",
      name: "Bustamante - Exterior",
      contractor: "Nahmias",
      year: "2024",
      status: "Completado",
      cover: PHOTO_ROOT + "BUSTAMANTE NAHMIAS 2024 (EXTERIOR)/Bustamante-01.png",
      gallery: [PHOTO_ROOT + "BUSTAMANTE NAHMIAS 2024 (EXTERIOR)/Bustamante-02.png", PHOTO_ROOT + "BUSTAMANTE NAHMIAS 2024 (EXTERIOR)/Bustamante-03.png", PHOTO_ROOT + "BUSTAMANTE NAHMIAS 2024 (EXTERIOR)/Bustamante-04 .jpg"]
    },
    {
      id: "bustamante-interior",
      name: "Bustamante - Interior",
      contractor: "Nahmias",
      year: "2024",
      status: "Completado",
      cover: PHOTO_ROOT + "BUSTAMANTE NAHMIAS 2024 (INTERIOR)/BUSTAMANTEIN-1.jpg",
      gallery: [PHOTO_ROOT + "BUSTAMANTE NAHMIAS 2024 (INTERIOR)/BUSTAMANTEIN-2.png", PHOTO_ROOT + "BUSTAMANTE NAHMIAS 2024 (INTERIOR)/BUSTAMANTEIN-3.jpg", PHOTO_ROOT + "BUSTAMANTE NAHMIAS 2024 (INTERIOR)/BUSTAMANTEIN-4.png"]
    },
    {
      id: "casa-italia",
      name: "Casa Italia",
      contractor: "Tecton",
      year: "2022",
      status: "Completado",
      cover: PHOTO_ROOT + "CASA ITALIA TECTON 2022/CasaItalia-01.png",
      gallery: [PHOTO_ROOT + "CASA ITALIA TECTON 2022/CasaItalia-02.png", PHOTO_ROOT + "CASA ITALIA TECTON 2022/CasaItalia-03.png", PHOTO_ROOT + "CASA ITALIA TECTON 2022/CasaItalia-04.png"]
    },
    {
      id: "club-de-campo-exterior",
      name: "Club de Campo - Exterior",
      contractor: "Nahmias",
      year: "2020",
      status: "Completado",
      cover: PHOTO_ROOT + "CLUB DE CAMPO NAHMIAS 2020 (EXTERIOR)/CLUB-1.jpg",
      gallery: [PHOTO_ROOT + "CLUB DE CAMPO NAHMIAS 2020 (EXTERIOR)/Club-02.jpg", PHOTO_ROOT + "CLUB DE CAMPO NAHMIAS 2020 (EXTERIOR)/Club-03.png", PHOTO_ROOT + "CLUB DE CAMPO NAHMIAS 2020 (EXTERIOR)/Club-04.png"]
    },
    {
      id: "club-de-campo-interior",
      name: "Club de Campo - Interior",
      contractor: "Nahmias",
      year: "2020",
      status: "Completado",
      cover: PHOTO_ROOT + "CLUB DE CAMPO NAHMIAS 2020 (INTERIOR)/CLUBIN-01.jpg",
      gallery: [PHOTO_ROOT + "CLUB DE CAMPO NAHMIAS 2020 (INTERIOR)/CLUBIN-02.jpg", PHOTO_ROOT + "CLUB DE CAMPO NAHMIAS 2020 (INTERIOR)/CLUBIN-03.jpg", PHOTO_ROOT + "CLUB DE CAMPO NAHMIAS 2020 (INTERIOR)/CLUBIN-04.jpg"]
    },
    {
      id: "comapa-punta-arenas",
      name: "Comapa - Punta Arenas",
      contractor: "Bravo Izquierdo",
      year: "2018",
      status: "Completado",
      cover: PHOTO_ROOT + "COMAPA BRAVO IZQUIERDO PUNTA ARENAS 2018/COMAPA-1.jpg",
      gallery: [PHOTO_ROOT + "COMAPA BRAVO IZQUIERDO PUNTA ARENAS 2018/COMAPA-2.jpg", PHOTO_ROOT + "COMAPA BRAVO IZQUIERDO PUNTA ARENAS 2018/COMAPA-3.jpg", PHOTO_ROOT + "COMAPA BRAVO IZQUIERDO PUNTA ARENAS 2018/COMAPA-4.jpeg"]
    },
    {
      id: "datacenter-scala-exterior",
      name: "Datacenter Scala - Exterior",
      contractor: "No indica",
      year: "2025",
      status: "Completado",
      cover: PHOTO_ROOT + "DATACENTER SCALA PUERTO OCTAY 2025/SCALA-1.png",
      gallery: [PHOTO_ROOT + "DATACENTER SCALA PUERTO OCTAY 2025/SCALA-2.png", PHOTO_ROOT + "DATACENTER SCALA PUERTO OCTAY 2025/SCALA-3.jpg", PHOTO_ROOT + "DATACENTER SCALA PUERTO OCTAY 2025/DATA-4.jpg"]
    },
    {
      id: "datacenter-scala-interior",
      name: "Datacenter Scala - Interior",
      contractor: "No indica",
      year: "2025",
      status: "Completado",
      cover: PHOTO_ROOT + "DATACENTER SCALA PUERTO OCTAY 2025 (INTERIOR)/DATA-1.jpg",
      gallery: [PHOTO_ROOT + "DATACENTER SCALA PUERTO OCTAY 2025 (INTERIOR)/DATA-2.jpg", PHOTO_ROOT + "DATACENTER SCALA PUERTO OCTAY 2025 (INTERIOR)/DATA-3.jpg", PHOTO_ROOT + "DATACENTER SCALA PUERTO OCTAY 2025 (INTERIOR)/DATA-4.jpg"]
    },
    {
      id: "edificio-el-roble",
      name: "Edificio El Roble",
      contractor: "Nahmias",
      year: "2022",
      status: "Completado",
      cover: PHOTO_ROOT + "EDIFICIO EL ROBLE NAHMIAS 2022/ROBLE-01.png",
      gallery: [PHOTO_ROOT + "EDIFICIO EL ROBLE NAHMIAS 2022/ROBLE-02.png", PHOTO_ROOT + "EDIFICIO EL ROBLE NAHMIAS 2022/ROBLE-03.png", PHOTO_ROOT + "EDIFICIO EL ROBLE NAHMIAS 2022/ROBLE-04.png"]
    },
    {
      id: "jofre",
      name: "Jofre",
      contractor: "Nahmias",
      year: "2024",
      status: "Completado",
      cover: PHOTO_ROOT + "JOFRE NAHAMIAS 2024/JOFRE-1.jpg",
      gallery: [PHOTO_ROOT + "JOFRE NAHAMIAS 2024/JOFRE-2.jpg", PHOTO_ROOT + "JOFRE NAHAMIAS 2024/JOFRE-3.jpg", PHOTO_ROOT + "JOFRE NAHAMIAS 2024/JOFRE-4.jpg"]
    },
    {
      id: "jose-domingo-canas",
      name: "José Domingo Cañas",
      contractor: "Nahmias",
      year: "2024",
      status: "Completado",
      cover: PHOTO_ROOT + "JOSE DOMINGO CAÑAS NAHMIAS 2024/JOSE-01.png",
      gallery: [PHOTO_ROOT + "JOSE DOMINGO CAÑAS NAHMIAS 2024/JOSE-2.jpg", PHOTO_ROOT + "JOSE DOMINGO CAÑAS NAHMIAS 2024/JOSE-3.jpg", PHOTO_ROOT + "JOSE DOMINGO CAÑAS NAHMIAS 2024/JOSE-4.jpg"]
    },
    {
      id: "la-capitania",
      name: "La Capitanía",
      contractor: "Nahmias",
      year: "2022",
      status: "Completado",
      cover: PHOTO_ROOT + "LA CAPITANIA NAHMIAS 2022/LACAPITANIA.jpg",
      gallery: [PHOTO_ROOT + "LA CAPITANIA NAHMIAS 2022/LACAPITANIA (2).jpg"]
    },
    {
      id: "lote-19",
      name: "Lote 19",
      contractor: "Ignacio Hurtado",
      year: "2024",
      status: "Completado",
      cover: PHOTO_ROOT + "LOTE 19 IGNACIO HURTADO 2024/LOTE19-1.jpg",
      gallery: [PHOTO_ROOT + "LOTE 19 IGNACIO HURTADO 2024/LOTE19-2.jpg", PHOTO_ROOT + "LOTE 19 IGNACIO HURTADO 2024/LOTE-3.jpg"]
    },
    {
      id: "onofre-jarpa",
      name: "Onofre Jarpa",
      contractor: "Sur G",
      year: "2021",
      status: "Completado",
      cover: PHOTO_ROOT + "ONOFRE JARPA SUR G 2021/ONOFRE-01.png",
      gallery: [PHOTO_ROOT + "ONOFRE JARPA SUR G 2021/ONOFRE-02.png", PHOTO_ROOT + "ONOFRE JARPA SUR G 2021/ONOFRE-3.jpeg"]
    },
    {
      id: "pedro-navia",
      name: "Pedro Navia",
      contractor: "Tecton",
      year: "2022",
      status: "Completado",
      cover: PHOTO_ROOT + "PEDRO NAVIA TECTON 2022/PEDRO-01.png",
      gallery: [PHOTO_ROOT + "PEDRO NAVIA TECTON 2022/PEDRO-02.png", PHOTO_ROOT + "PEDRO NAVIA TECTON 2022/PEDRO-03.png"]
    },
    {
      id: "principe-de-gales",
      name: "Príncipe de Gales",
      contractor: "Echeverría Izquierdo",
      year: "2024",
      status: "Completado",
      cover: PHOTO_ROOT + "PRINCIPE DE GALES ECHEVERRIA IZQUIERDO 2024/GALES-01.jpg",
      gallery: [PHOTO_ROOT + "PRINCIPE DE GALES ECHEVERRIA IZQUIERDO 2024/GALES-02.jpg", PHOTO_ROOT + "PRINCIPE DE GALES ECHEVERRIA IZQUIERDO 2024/GALES-03.jpg", PHOTO_ROOT + "PRINCIPE DE GALES ECHEVERRIA IZQUIERDO 2024/GALES-04.jpg"]
    },
    {
      id: "puerto-nuevo-antofagasta",
      name: "Puerto Nuevo - Antofagasta",
      contractor: "Echeverría Izquierdo",
      year: "2021",
      status: "Completado",
      cover: PHOTO_ROOT + "PUERTO NUEVO (ANTOFAGASTA) ECHEVERRIA IZQUIERDO 2021/PUERTO NUEVO 1.jpg",
      gallery: [PHOTO_ROOT + "PUERTO NUEVO (ANTOFAGASTA) ECHEVERRIA IZQUIERDO 2021/PUERTO NUEVO 2.jpg", PHOTO_ROOT + "PUERTO NUEVO (ANTOFAGASTA) ECHEVERRIA IZQUIERDO 2021/PUERTO NUEVO 3.jpg", PHOTO_ROOT + "PUERTO NUEVO (ANTOFAGASTA) ECHEVERRIA IZQUIERDO 2021/PUERTO NUEVO 4.jpg"]
    },
    {
      id: "tavelli",
      name: "Tavelli",
      contractor: "Nahmias",
      year: "2025",
      status: "Completado",
      cover: PHOTO_ROOT + "TAVELLI NAMIAS 2025/Tavelli-01.png",
      gallery: [PHOTO_ROOT + "TAVELLI NAMIAS 2025/Tavelly-02.png"]
    },
    {
      id: "torres-centenario-antofagasta",
      name: "Torres Centenario - Antofagasta",
      contractor: "Mar Abierto",
      year: "2018",
      status: "Completado",
      cover: PHOTO_ROOT + "TORRES CENTENARIO (ANTOFAGASTA) CONSTRUCTORA MAR ABIERTO 2018/CENTENARIO-01.jpg",
      gallery: [PHOTO_ROOT + "TORRES CENTENARIO (ANTOFAGASTA) CONSTRUCTORA MAR ABIERTO 2018/CENTENARIO-02.png", PHOTO_ROOT + "TORRES CENTENARIO (ANTOFAGASTA) CONSTRUCTORA MAR ABIERTO 2018/CENTENARIO-03.png", PHOTO_ROOT + "TORRES CENTENARIO (ANTOFAGASTA) CONSTRUCTORA MAR ABIERTO 2018/CENTENARIO-04.png"]
    }
  ];

  defaultProjects.forEach(function (project) {
    project.cover = project.cover.replace(/\.[^./]+$/, ".webp");
    project.gallery = project.gallery.map(function (image) {
      return image.replace(/\.[^./]+$/, ".webp");
    });
  });

  const defaultProducts = [
    { id: "mamparas-cristal", name: "Mamparas de cristal", anchor: "vidriadas" },
    { id: "puertas-protex", name: "Puertas Protex" },
    { id: "barandas-cristal", name: "Barandas de cristal", anchor: "barandas" },
    { id: "shower-door", name: "Shower Door" },
    { id: "espejos", name: "Espejos" },
    { id: "pasamanos-acero", name: "Pasamanos de acero inoxidable" },
    { id: "revestimiento-chambranas", name: "Revestimiento y chambranas de acero inoxidable", anchor: "revestimientos" },
    { id: "panel-compuesto-aluminio", name: "Revestimientos en panel compuesto de aluminio" },
    { id: "ventanas-pvc", name: "Ventanas de PVC" },
    { id: "lucarnas-cristal", name: "Lucarnas de cristal" }
  ];

  function cloneDefaults() {
    return JSON.parse(JSON.stringify(defaultProjects));
  }

  function getProjects() {
    try {
      const saved = localStorage.getItem(PROJECTS_KEY);
      if (saved !== null) {
        const parsed = JSON.parse(saved);
        if (!Array.isArray(parsed)) return cloneDefaults();
        let changed = false;
        parsed.forEach(function (project) {
          if (!project.year) { project.year = "Por confirmar"; changed = true; }
          if (project.contractor === undefined) { project.contractor = project.client || ""; changed = true; }
          if (!project.status) { project.status = "Completado"; changed = true; }
          if (/^Proyecto\s+\d+$/i.test(String(project.name || ""))) { project.name = String(project.name).replace(/^Proyecto/i, "Obra"); changed = true; }
          if (!Array.isArray(project.gallery)) { project.gallery = []; changed = true; }
          if (project.gallery.length > 3) { project.gallery = project.gallery.slice(0, 3); changed = true; }
        });
        if (changed) localStorage.setItem(PROJECTS_KEY, JSON.stringify(parsed));
        return parsed;
      }
      const initial = cloneDefaults();
      localStorage.setItem(PROJECTS_KEY, JSON.stringify(initial));
      return initial;
    } catch (error) {
      return cloneDefaults();
    }
  }

  function saveProjects(projects) {
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
  }

  function cloneProductDefaults() {
    return JSON.parse(JSON.stringify(defaultProducts));
  }

  function getProducts() {
    try {
      const saved = localStorage.getItem(PRODUCTS_KEY);
      if (saved !== null) {
        const parsed = JSON.parse(saved);
        return Array.isArray(parsed) ? parsed : cloneProductDefaults();
      }
      const initial = cloneProductDefaults();
      localStorage.setItem(PRODUCTS_KEY, JSON.stringify(initial));
      return initial;
    } catch (error) {
      return cloneProductDefaults();
    }
  }

  function saveProducts(products) {
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
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

  function productCard(product) {
    const anchor = product.anchor ? ` id="${escapeHtml(product.anchor)}"` : "";
    return `<article class="product-card"${anchor}><h2>${escapeHtml(product.name)}</h2></article>`;
  }

  function renderProducts(products) {
    const container = document.querySelector("[data-products]");
    if (!container) return;
    container.innerHTML = products.map(productCard).join("");
    if (!products.length) container.innerHTML = '<div class="empty-state">No hay soluciones publicadas por el momento.</div>';
  }

  function projectCard(project) {
    const client = project.contractor || "No indica";
    const statusClass = String(project.status || "").toLowerCase().includes("curso") ? " is-in-progress" : "";
    return `
      <a class="project-card" href="${projectUrl(project.id)}" aria-label="Ver obra ${escapeHtml(project.name)}">
        <img src="${escapeHtml(project.cover)}" alt="${escapeHtml(project.name)}" loading="lazy" decoding="async">
        <div class="project-card__content">
          <h3>${escapeHtml(project.name)}</h3>
          <div class="project-card__facts">
            <p><span>Cliente</span><strong>${escapeHtml(client)}</strong></p>
            <p><span>Año</span><strong>${escapeHtml(project.year || "Por confirmar")}</strong></p>
            <p><span>Estado</span><strong class="project-status${statusClass}">${escapeHtml(project.status || "Completado")}</strong></p>
          </div>
        </div>
        <span class="project-card__arrow" aria-hidden="true">↗</span>
      </a>`;
  }

  function renderLatest(projects) {
    const container = document.querySelector("[data-latest-projects]");
    if (!container) return;
    const recent = projects.slice().sort(function (a, b) { return Number(b.year) - Number(a.year); });
    container.innerHTML = recent.slice(0, 3).map(projectCard).join("");
  }

  function renderAllProjects(projects) {
    const container = document.querySelector("[data-all-projects]");
    if (!container) return;
    const ordered = projects.slice().sort(function (a, b) { return Number(b.year) - Number(a.year); });
    container.innerHTML = ordered.map(projectCard).join("");
    const empty = document.querySelector("[data-empty-projects]");
    if (empty) empty.hidden = projects.length > 0;
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
    document.title = project.name + " | CWSS";
    const galleryImages = [project.cover].concat(project.gallery || []).filter(Boolean).slice(0, 4);
    const gallery = galleryImages.map(function (image, index) {
      return `<figure class="project-gallery__slide" aria-hidden="${index === 0 ? "false" : "true"}"><img src="${escapeHtml(image)}" alt="${escapeHtml(project.name)} - imagen ${index + 1}" loading="lazy" decoding="async"><button class="project-gallery__full" type="button" data-full-image${index === 0 ? "" : ' tabindex="-1"'}>Ver imagen completa</button></figure>`;
    }).join("");
    const selectors = galleryImages.map(function (image, index) {
      return `<button class="project-gallery__thumb${index === 0 ? " is-active" : ""}" type="button" data-gallery-select="${index}" aria-label="Ver imagen ${index + 1}" aria-current="${index === 0 ? "true" : "false"}"><img src="${escapeHtml(image)}" alt="" loading="lazy" decoding="async"></button>`;
    }).join("");
    const client = project.contractor || "No indica";
    const statusClass = String(project.status || "").toLowerCase().includes("curso") ? " is-in-progress" : "";
    container.innerHTML = `
      <section class="project-detail__hero" style="background-image:url('${escapeHtml(project.cover)}')">
        <div class="project-detail__title">
          <p class="project-detail__project">${escapeHtml(project.name)}</p>
          <div class="project-detail__facts">
            <p><span>Cliente</span><strong>${escapeHtml(client)}</strong></p>
            <p><span>Año</span><strong>${escapeHtml(project.year || "Por confirmar")}</strong></p>
            <p><span>Estado</span><strong class="project-status${statusClass}">${escapeHtml(project.status || "Completado")}</strong></p>
          </div>
        </div>
      </section>
      <section class="project-gallery" aria-label="Galería de ${escapeHtml(project.name)}" data-project-gallery tabindex="0">
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
    let current = 0;

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

    thumbnails.forEach(function (thumb) {
      thumb.addEventListener("click", function () { showSlide(Number(thumb.dataset.gallerySelect)); });
    });
    if (previous) previous.addEventListener("click", function () { showSlide(current - 1); });
    if (next) next.addEventListener("click", function () { showSlide(current + 1); });
    gallery.addEventListener("keydown", function (event) {
      if (event.key === "ArrowLeft") showSlide(current - 1);
      if (event.key === "ArrowRight") showSlide(current + 1);
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
      ".site-header .brand",
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
      ".not-found > *",
      ".login-panel > *",
      ".admin-heading > *",
      ".admin-layout > *",
      ".admin-products-heading > *",
      ".admin-products-layout > *"
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

  function imageToDataUrl(file) {
    return new Promise(function (resolve, reject) {
      const reader = new FileReader();
      reader.onerror = function () { reject(new Error("No se pudo leer la imagen.")); };
      reader.onload = function () {
        const image = new Image();
        image.onerror = function () { reject(new Error("El archivo no es una imagen válida.")); };
        image.onload = function () {
          let width = image.width;
          let height = image.height;
          const maxSide = 1400;
          if (Math.max(width, height) > maxSide) {
            const scale = maxSide / Math.max(width, height);
            width = Math.round(width * scale);
            height = Math.round(height * scale);
          }
          const canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;
          const context = canvas.getContext("2d");
          context.drawImage(image, 0, 0, width, height);
          let result = canvas.toDataURL("image/jpeg", .74);
          if (result.length > 850000) {
            const reducedScale = 950 / Math.max(width, height);
            canvas.width = Math.round(width * reducedScale);
            canvas.height = Math.round(height * reducedScale);
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
            result = canvas.toDataURL("image/jpeg", .64);
          }
          resolve(result);
        };
        image.src = reader.result;
      };
      reader.readAsDataURL(file);
    });
  }

  function renderAdminList() {
    const list = document.querySelector("[data-admin-project-list]");
    if (!list) return;
    const projects = getProjects();
    const count = document.querySelector("[data-project-count]");
    if (count) count.textContent = projects.length + (projects.length === 1 ? " obra" : " obras");
    if (!projects.length) {
      list.innerHTML = '<div class="empty-state">No hay obras publicadas.</div>';
      return;
    }
    list.innerHTML = projects.map(function (project) {
      return `
        <article class="admin-project-row">
          <img src="${escapeHtml(project.cover)}" alt="">
          <div><h3>${escapeHtml(project.name)}</h3><p class="admin-project-row__meta">Cliente: ${escapeHtml(project.contractor || "No indica")} · Año: ${escapeHtml(project.year || "Por confirmar")} · Estado: ${escapeHtml(project.status || "Completado")}</p></div>
          <button class="delete-button" type="button" data-delete-project="${escapeHtml(project.id)}">Eliminar</button>
        </article>`;
    }).join("");
    list.querySelectorAll("[data-delete-project]").forEach(function (button) {
      button.addEventListener("click", function () {
        const project = projects.find(function (item) { return item.id === button.dataset.deleteProject; });
        if (!project || !window.confirm('¿Eliminar la obra "' + project.name + '"?')) return;
        saveProjects(projects.filter(function (item) { return item.id !== project.id; }));
        renderAdminList();
      });
    });
  }

  function renderAdminProductList() {
    const list = document.querySelector("[data-admin-product-list]");
    if (!list) return;
    const products = getProducts();
    document.querySelectorAll("[data-product-count], [data-product-list-count]").forEach(function (count) {
      count.textContent = products.length + (products.length === 1 ? " solución" : " soluciones");
    });
    if (!products.length) {
      list.innerHTML = '<div class="empty-state">No hay soluciones publicadas.</div>';
      return;
    }
    list.innerHTML = products.map(function (product) {
      return `
        <article class="admin-product-row">
          <div><h3>${escapeHtml(product.name)}</h3></div>
          <button class="delete-button" type="button" data-delete-product="${escapeHtml(product.id)}">Eliminar</button>
        </article>`;
    }).join("");
    list.querySelectorAll("[data-delete-product]").forEach(function (button) {
      button.addEventListener("click", function () {
        const product = products.find(function (item) { return item.id === button.dataset.deleteProduct; });
        if (!product || !window.confirm('¿Eliminar la solución "' + product.name + '"?')) return;
        saveProducts(products.filter(function (item) { return item.id !== product.id; }));
        renderAdminProductList();
        renderProducts(getProducts());
      });
    });
  }

  function showAccountState() {
    const loginPanel = document.querySelector("[data-login-panel]");
    const adminPanel = document.querySelector("[data-admin-panel]");
    if (!loginPanel || !adminPanel) return;
    const loggedIn = sessionStorage.getItem(ADMIN_KEY) === "1";
    loginPanel.hidden = loggedIn;
    adminPanel.hidden = !loggedIn;
    if (loggedIn) {
      renderAdminList();
      renderAdminProductList();
    }
  }

  function setupAccount() {
    const loginForm = document.querySelector("[data-login-form]");
    if (!loginForm) return;
    showAccountState();
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const formData = new FormData(loginForm);
      const username = String(formData.get("username") || "").trim().toLowerCase();
      const password = String(formData.get("password") || "");
      const message = document.querySelector("[data-login-message]");
      if (username === "roman" && password === "roman") {
        sessionStorage.setItem(ADMIN_KEY, "1");
        message.textContent = "";
        loginForm.reset();
        showAccountState();
      } else {
        message.textContent = "Usuario o contraseña incorrectos.";
      }
    });

    document.querySelector("[data-logout]").addEventListener("click", function () {
      sessionStorage.removeItem(ADMIN_KEY);
      showAccountState();
    });

    const projectForm = document.querySelector("[data-project-form]");
    projectForm.addEventListener("submit", async function (event) {
      event.preventDefault();
      const message = document.querySelector("[data-project-message]");
      const submit = projectForm.querySelector('button[type="submit"]');
      const formData = new FormData(projectForm);
      const coverFile = projectForm.elements.cover.files[0];
      const galleryFiles = Array.from(projectForm.elements.gallery.files);
      message.classList.remove("is-success");
      if (!coverFile) {
        message.textContent = "Selecciona una imagen de portada.";
        return;
      }
      if (galleryFiles.length > 3) {
        message.textContent = "Selecciona un máximo de 3 imágenes adicionales.";
        return;
      }
      submit.disabled = true;
      submit.textContent = "Procesando imágenes…";
      message.textContent = "";
      try {
        const cover = await imageToDataUrl(coverFile);
        const gallery = await Promise.all(galleryFiles.map(imageToDataUrl));
        const projects = getProjects();
        projects.unshift({
          id: "obra-" + Date.now(),
          name: String(formData.get("name") || "").trim(),
          year: String(formData.get("year") || "").trim(),
          contractor: String(formData.get("contractor") || "No indica").trim(),
          status: String(formData.get("status") || "Completado"),
          cover: cover,
          gallery: gallery,
          createdAt: new Date().toISOString()
        });
        saveProjects(projects);
        projectForm.reset();
        message.textContent = "Obra publicada correctamente.";
        message.classList.add("is-success");
        renderAdminList();
      } catch (error) {
        message.textContent = error && error.name === "QuotaExceededError"
          ? "No queda espacio local. Elimina una obra o usa imágenes más livianas."
          : (error.message || "No fue posible guardar la obra.");
      } finally {
        submit.disabled = false;
        submit.textContent = "Publicar obra";
      }
    });

    const productForm = document.querySelector("[data-product-form]");
    productForm.addEventListener("submit", async function (event) {
      event.preventDefault();
      const message = document.querySelector("[data-product-message]");
      const submit = productForm.querySelector('button[type="submit"]');
      const formData = new FormData(productForm);
      message.classList.remove("is-success");
      submit.disabled = true;
      submit.textContent = "Publicando…";
      message.textContent = "";
      try {
        const products = getProducts();
        products.push({
          id: "producto-" + Date.now(),
          name: String(formData.get("productName") || "").trim()
        });
        saveProducts(products);
        productForm.reset();
        message.textContent = "Solución publicada correctamente.";
        message.classList.add("is-success");
        renderAdminProductList();
        renderProducts(products);
      } catch (error) {
        message.textContent = error && error.name === "QuotaExceededError"
          ? "No queda espacio local. Elimina una solución."
          : (error.message || "No fue posible guardar la solución.");
      } finally {
        submit.disabled = false;
        submit.textContent = "Publicar solución";
      }
    });
  }

  const projects = getProjects();
  const products = getProducts();
  renderProducts(products);
  renderLatest(projects);
  renderAllProjects(projects);
  renderProjectDetail(projects);
  setupProjectGallery();
  setupImageDialog();
  setupNavigation();
  setupPageTransitions();
  setupAccount();
  setupRevealAnimations();
  document.querySelectorAll("[data-year]").forEach(function (year) {
    year.textContent = String(new Date().getFullYear());
  });
})();
