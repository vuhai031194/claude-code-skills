(function () {
  "use strict";

  // Configure marked
  marked.setOptions({
    breaks: true,
    gfm: true,
    highlight: function (code, lang) {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(code, { language: lang }).value;
      }
      return hljs.highlightAuto(code).value;
    },
  });

  const mainEl = document.getElementById("main");

  // Router
  function getRoute() {
    const hash = window.location.hash || "#/";
    return hash.slice(1); // remove #
  }

  function navigate(path) {
    window.location.hash = path;
  }

  // Update active nav link
  function updateNav(route) {
    document.querySelectorAll(".nav-link").forEach((link) => {
      const href = link.getAttribute("href").slice(1);
      if (route === href || (href !== "/" && route.startsWith(href))) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  // Fetch and render markdown
  async function loadMarkdown(filePath) {
    try {
      const res = await fetch(filePath);
      if (!res.ok) throw new Error("Not found");
      const text = await res.text();
      return marked.parse(text);
    } catch (e) {
      return '<p>Failed to load content. <a href="#/">Return to home page</a>.</p>';
    }
  }

  // Render helpers
  function renderTags(tags) {
    return tags.map((t) => `<span class="tag">${t}</span>`).join("");
  }

  function renderModes(modes) {
    return modes
      .map((m) => `<span class="mode-badge">${m}</span>`)
      .join("");
  }

  function renderBreadcrumb(items) {
    return `<nav class="breadcrumb" aria-label="Breadcrumb">${items
      .map((item, i) => {
        if (i < items.length - 1) {
          return `<a href="${item.href}">${item.label}</a><span class="breadcrumb-sep">/</span>`;
        }
        return `<span>${item.label}</span>`;
      })
      .join("")}</nav>`;
  }

  // Page: Home
  function renderHome() {
    const { skills, blueprints, site } = CONTENT_REGISTRY;

    const skillCards = skills
      .map(
        (s) => `
      <a class="card" href="#/skills/${s.slug}">
        <div class="card-icon">${s.icon}</div>
        <div class="card-title">${s.title}</div>
        <div class="card-desc">${s.description}</div>
        <div class="modes">${renderModes(s.modes)}</div>
        <div class="card-meta">${renderTags(s.tags)}</div>
      </a>`
      )
      .join("");

    const blueprintCards = blueprints
      .map(
        (b) => `
      <a class="card" href="#/blueprints/${b.slug}">
        <div class="card-icon">${b.icon}</div>
        <div class="card-title">${b.title}</div>
        <div class="card-desc">${b.description}</div>
        <div class="card-meta">
          <span class="card-date">${b.date}</span>
          ${renderTags(b.tags)}
        </div>
      </a>`
      )
      .join("");

    mainEl.innerHTML = `
      <div class="hero">
        <h1>${site.title}</h1>
        <p>${site.subtitle}</p>
      </div>

      <div class="section">
        <div class="section-header">
          <h2 class="section-title">Skills</h2>
          <span class="section-count">${skills.length} skill${skills.length !== 1 ? "s" : ""}</span>
        </div>
        <div class="card-grid">${skillCards}</div>
      </div>

      <div class="section">
        <div class="section-header">
          <h2 class="section-title">Research Blueprints</h2>
          <span class="section-count">${blueprints.length} blueprint${blueprints.length !== 1 ? "s" : ""}</span>
        </div>
        <div class="card-grid">${blueprintCards}</div>
      </div>
    `;
  }

  // Page: Skills list
  function renderSkillsList() {
    const { skills } = CONTENT_REGISTRY;

    const cards = skills
      .map(
        (s) => `
      <a class="card" href="#/skills/${s.slug}">
        <div class="card-icon">${s.icon}</div>
        <div class="card-title">${s.title}</div>
        <div class="card-desc">${s.description}</div>
        <div class="modes">${renderModes(s.modes)}</div>
        <div class="card-meta">${renderTags(s.tags)}</div>
      </a>`
      )
      .join("");

    mainEl.innerHTML = `
      ${renderBreadcrumb([
        { label: "Home", href: "#/" },
        { label: "Skills" },
      ])}
      <div class="section">
        <div class="section-header">
          <h2 class="section-title">All Skills</h2>
          <span class="section-count">${skills.length}</span>
        </div>
        <div class="card-grid">${cards}</div>
      </div>
    `;
  }

  // Page: Skill detail
  async function renderSkillDetail(slug) {
    const skill = CONTENT_REGISTRY.skills.find((s) => s.slug === slug);
    if (!skill) {
      mainEl.innerHTML = `<div class="empty-state"><div class="empty-state-icon">🔍</div><p>Skill not found. <a href="#/">Go home</a></p></div>`;
      return;
    }

    mainEl.innerHTML = `<div class="loading" aria-live="polite"><div class="loading-spinner"></div><p>Loading skill\u2026</p></div>`;

    const html = await loadMarkdown(skill.file);
    const relatedBlueprints = CONTENT_REGISTRY.blueprints.filter(
      (b) => b.skill === slug
    );

    const relatedHtml =
      relatedBlueprints.length > 0
        ? `
      <div class="related-section">
        <h2>Blueprints from this Skill</h2>
        <div class="card-grid">
          ${relatedBlueprints
            .map(
              (b) => `
            <a class="card" href="#/blueprints/${b.slug}">
              <div class="card-icon">${b.icon}</div>
              <div class="card-title">${b.title}</div>
              <div class="card-desc">${b.description}</div>
              <div class="card-meta">
                <span class="card-date">${b.date}</span>
                ${renderTags(b.tags)}
              </div>
            </a>`
            )
            .join("")}
        </div>
      </div>`
        : "";

    mainEl.innerHTML = `
      ${renderBreadcrumb([
        { label: "Home", href: "#/" },
        { label: "Skills", href: "#/skills" },
        { label: skill.title },
      ])}
      <div class="detail-header">
        <h1>${skill.icon} ${skill.title}</h1>
        <p>${skill.description}</p>
        <div class="detail-meta">
          ${renderModes(skill.modes)}
        </div>
      </div>
      <div class="markdown-body">${html}</div>
      ${relatedHtml}
    `;
  }

  // Page: Blueprints list
  function renderBlueprintsList() {
    const { blueprints } = CONTENT_REGISTRY;

    const cards = blueprints
      .map(
        (b) => `
      <a class="card" href="#/blueprints/${b.slug}">
        <div class="card-icon">${b.icon}</div>
        <div class="card-title">${b.title}</div>
        <div class="card-desc">${b.description}</div>
        <div class="card-meta">
          <span class="card-date">${b.date}</span>
          ${renderTags(b.tags)}
        </div>
      </a>`
      )
      .join("");

    mainEl.innerHTML = `
      ${renderBreadcrumb([
        { label: "Home", href: "#/" },
        { label: "Blueprints" },
      ])}
      <div class="section">
        <div class="section-header">
          <h2 class="section-title">All Blueprints</h2>
          <span class="section-count">${blueprints.length}</span>
        </div>
        <div class="card-grid">${cards}</div>
      </div>
    `;
  }

  // Page: Blueprint detail
  async function renderBlueprintDetail(slug) {
    const blueprint = CONTENT_REGISTRY.blueprints.find(
      (b) => b.slug === slug
    );
    if (!blueprint) {
      mainEl.innerHTML = `<div class="empty-state"><div class="empty-state-icon">🔍</div><p>Blueprint not found. <a href="#/">Go home</a></p></div>`;
      return;
    }

    mainEl.innerHTML = `<div class="loading" aria-live="polite"><div class="loading-spinner"></div><p>Loading blueprint\u2026</p></div>`;

    const html = await loadMarkdown(blueprint.file);
    const skill = CONTENT_REGISTRY.skills.find(
      (s) => s.slug === blueprint.skill
    );

    const skillLink = skill
      ? `<a class="detail-skill-link" href="#/skills/${skill.slug}">${skill.icon} ${skill.title}</a>`
      : "";

    mainEl.innerHTML = `
      ${renderBreadcrumb([
        { label: "Home", href: "#/" },
        { label: "Blueprints", href: "#/blueprints" },
        { label: blueprint.title },
      ])}
      <div class="detail-header">
        <h1>${blueprint.icon} ${blueprint.title}</h1>
        <p>${blueprint.description}</p>
        <div class="detail-meta">
          <span class="card-date">${blueprint.date}</span>
          ${skillLink}
          ${renderTags(blueprint.tags)}
        </div>
      </div>
      <div class="markdown-body">${html}</div>
    `;
  }

  // Router dispatch
  function dispatch() {
    const route = getRoute();
    updateNav(route);

    // Scroll to top on navigation
    const motionOk = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: motionOk ? "smooth" : "instant" });

    if (route === "/" || route === "") {
      renderHome();
    } else if (route === "/skills") {
      renderSkillsList();
    } else if (route.startsWith("/skills/")) {
      const slug = route.replace("/skills/", "");
      renderSkillDetail(slug);
    } else if (route === "/blueprints") {
      renderBlueprintsList();
    } else if (route.startsWith("/blueprints/")) {
      const slug = route.replace("/blueprints/", "");
      renderBlueprintDetail(slug);
    } else {
      mainEl.innerHTML = `<div class="empty-state"><div class="empty-state-icon">404</div><p>Page not found. <a href="#/">Go home</a></p></div>`;
    }
  }

  // Init
  window.addEventListener("hashchange", dispatch);
  dispatch();
})();
