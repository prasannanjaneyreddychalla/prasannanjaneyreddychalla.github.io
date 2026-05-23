document.addEventListener("DOMContentLoaded", () => {
  const C = window.CONTENT;
  if (!C) {
    console.error("Portfolio content not loaded.");
    return;
  }

  const photos = getPhotoManifest();

  initThemePreference();
  renderNav(C);
  renderHero(C, photos);
  renderAbout(C.about);
  renderExperience(C.experience);
  renderAreas(C.areas);
  renderProjects(C.projects);
  renderSkills(C.skills);
  renderEducation(C.education, C.certifications, C.links);
  renderTravels(C.travels);
  renderThoughts(C.thoughts);
  renderFooter(C);

  initThemeToggle();
  initNavState();
  initReveal();
  initHeroParallax();
  initTiltCards();
});

// ─── Navigation ──────────────────────────────────────────────────────────────

const navItems = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Areas", "areas"],
  ["Projects", "projects"],
  ["Skills", "skills"],
  ["Education", "education"],
  ["Travels", "travels"],
  ["Thoughts", "thoughts"]
];

function qs(sel) { return document.querySelector(sel); }

function mount(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

function esc(v) {
  return String(v ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// ─── Icons ────────────────────────────────────────────────────────────────────

function icon(name) {
  const icons = {
    arrow: '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    mail:  '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M4 6h16v12H4zM4 7l8 6 8-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    github:'<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.4 9.4 0 0 1 12 7c.85 0 1.7.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.69-4.57 4.94.36.31.68.91.68 1.84v2.73c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" fill="currentColor"/></svg>',
    linkedin:'<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M6.94 8.9H3.75v10.35h3.19V8.9ZM5.35 4.75a1.85 1.85 0 1 0 0 3.7 1.85 1.85 0 0 0 0-3.7Zm14.9 8.56c0-3.11-1.66-4.56-3.87-4.56a3.34 3.34 0 0 0-3.02 1.66V8.9h-3.06v10.35h3.19v-5.12c0-1.35.25-2.65 1.93-2.65 1.65 0 1.67 1.55 1.67 2.74v5.03h3.16v-5.94Z" fill="currentColor"/></svg>',
    sun:   '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M12 4V2m0 20v-2M4 12H2m20 0h-2M5.64 5.64 4.22 4.22m15.56 15.56-1.42-1.42m0-12.72 1.42-1.42M4.22 19.78l1.42-1.42M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    moon:  '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M20.5 14.6A7.7 7.7 0 0 1 9.4 3.5 8.8 8.8 0 1 0 20.5 14.6Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    camera:'<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="13" r="4" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
    flag:  '<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    aws:   '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M6.76 11.53c0 .28.03.5.08.67.06.16.13.34.24.53.04.06.05.12.05.17 0 .08-.05.16-.15.24l-.5.33c-.07.05-.14.07-.2.07-.08 0-.16-.04-.24-.11a2.46 2.46 0 0 1-.28-.37 6.08 6.08 0 0 1-.24-.46c-.6.71-1.36 1.07-2.26 1.07-.65 0-1.16-.18-1.54-.55-.37-.37-.56-.86-.56-1.47 0-.65.23-1.17.7-1.57.46-.4 1.08-.6 1.85-.6.26 0 .52.02.8.06.27.04.55.1.85.18v-.54c0-.56-.12-.96-.35-1.18-.24-.23-.64-.34-1.21-.34-.26 0-.53.03-.8.09a5.88 5.88 0 0 0-.8.24 2.1 2.1 0 0 1-.26.09.44.44 0 0 1-.11.01c-.1 0-.15-.07-.15-.22v-.34c0-.12.01-.2.05-.25a.5.5 0 0 1 .2-.15c.26-.13.57-.24.94-.33a4.6 4.6 0 0 1 1.18-.14c.9 0 1.55.2 1.98.62.42.41.63 1.04.63 1.87v2.46zm-3.12 1.17c.25 0 .5-.05.77-.14.27-.1.51-.27.71-.51.12-.14.21-.3.25-.48.05-.18.07-.4.07-.65v-.31a6.3 6.3 0 0 0-.7-.13 5.7 5.7 0 0 0-.71-.05c-.5 0-.87.1-1.12.3-.24.2-.36.48-.36.85 0 .35.09.61.27.79.18.2.44.29.79.29zm6.04.82c-.14 0-.23-.02-.29-.07-.06-.04-.12-.14-.17-.28L7.5 8.3a1.26 1.26 0 0 1-.07-.3c0-.12.06-.18.18-.18h.73c.14 0 .24.02.29.07.06.04.11.14.16.28l1.56 6.15 1.45-6.15c.04-.15.09-.24.15-.28.06-.05.16-.07.3-.07h.6c.14 0 .23.02.3.07.06.04.12.14.15.28l1.47 6.23 1.6-6.23c.05-.15.1-.24.16-.28.06-.05.15-.07.29-.07h.7c.12 0 .18.06.18.18 0 .04-.01.07-.02.12a.96.96 0 0 1-.05.19l-2.25 7.14c-.05.15-.1.24-.16.28-.06.04-.16.07-.29.07h-.64c-.14 0-.23-.02-.3-.07-.06-.05-.11-.14-.15-.3L13.1 9.77l-1.43 5.48c-.05.16-.1.25-.16.3-.06.05-.16.07-.3.07h-.63zm11.97.24c-.4 0-.8-.05-1.18-.14-.38-.1-.68-.2-.88-.32-.12-.07-.2-.15-.23-.22a.56.56 0 0 1-.04-.22v-.36c0-.15.06-.22.17-.22.04 0 .08.01.12.02.04.02.1.04.17.07.23.1.48.18.75.24.28.05.55.08.83.08.44 0 .78-.08 1.02-.23.24-.15.37-.38.37-.67 0-.2-.06-.36-.19-.5-.13-.13-.37-.25-.72-.36l-1.04-.32c-.52-.16-.91-.4-1.16-.72a1.7 1.7 0 0 1-.37-1.06c0-.31.07-.58.2-.81.14-.24.32-.44.55-.61.23-.17.5-.3.8-.38.3-.09.62-.13.96-.13.17 0 .35.01.52.03.18.03.34.06.5.1.15.04.3.09.44.14.13.05.24.1.31.16.1.06.17.13.2.2.04.07.06.16.06.27v.34c0 .15-.06.23-.17.23a.78.78 0 0 1-.28-.1 3.41 3.41 0 0 0-1.43-.3c-.4 0-.71.07-.93.2-.22.13-.33.33-.33.6 0 .2.07.37.21.5.14.14.4.27.78.39l1.02.32c.52.16.89.39 1.13.68.23.3.35.63.35 1.01 0 .31-.06.6-.19.85-.13.25-.31.47-.54.65-.23.18-.51.32-.83.42-.34.1-.7.15-1.1.15z" fill="currentColor"/></svg>'
  };
  return icons[name] || "";
}

// ─── Shared header ────────────────────────────────────────────────────────────

function sectionHeader(kicker, title, copy) {
  return `
    <div class="section-head reveal">
      <div>
        <p class="section-kicker">${esc(kicker)}</p>
        <h2 class="section-title">${esc(title)}</h2>
      </div>
      <p class="section-copy">${esc(copy)}</p>
    </div>
  `;
}

// ─── Photo manifest ───────────────────────────────────────────────────────────
// manifest.js sets window.PHOTO_MANIFEST — generated by update-photos.sh
// Works locally (file://) and on GitHub Pages without any fetch() call.

const PHOTO_BASE = "assets/photos";
const FIRST_VISIT_KEY = "portfolio-visited";

function getPhotoManifest() {
  return Array.isArray(window.PHOTO_MANIFEST) ? window.PHOTO_MANIFEST : [];
}

function pickPhoto(photos) {
  if (!photos.length) return null;

  const firstVisit = !localStorage.getItem(FIRST_VISIT_KEY);
  if (firstVisit) {
    try { localStorage.setItem(FIRST_VISIT_KEY, "1"); } catch {}
    return `${PHOTO_BASE}/${photos[0]}`;
  }

  if (photos.length === 1) return `${PHOTO_BASE}/${photos[0]}`;

  // 1.jpeg gets ~30% weight on return visits
  const rand = Math.random();
  if (rand < 0.30) return `${PHOTO_BASE}/${photos[0]}`;
  const rest = photos.slice(1);
  return `${PHOTO_BASE}/${rest[Math.floor(Math.random() * rest.length)]}`;
}

// kept for travel section
function randomPhoto(photos, basePath) {
  if (!photos || !photos.length) return null;
  return `${basePath}/${photos[Math.floor(Math.random() * photos.length)]}`;
}

// ─── Nav ──────────────────────────────────────────────────────────────────────

function renderNav(C) {
  const L = C.links;
  const first = C.hero.name.split(" ")[0];
  mount("nav", `
    <div class="nav-inner">
      <a class="nav-logo" href="#hero" aria-label="Go to top">
        <span class="nav-dot" aria-hidden="true"></span>${esc(first)}
      </a>
      <ul class="nav-links">
        ${navItems.map(([label, id]) => `<li><a href="#${id}">${esc(label)}</a></li>`).join("")}
      </ul>
      <div class="nav-actions">
        <a class="icon-link" href="${esc(L.github)}" target="_blank" rel="noopener" aria-label="GitHub">${icon("github")}</a>
        <a class="icon-link" href="${esc(L.linkedin)}" target="_blank" rel="noopener" aria-label="LinkedIn">${icon("linkedin")}</a>
        ${L.awsbuilder ? `<a class="icon-link" href="${esc(L.awsbuilder)}" target="_blank" rel="noopener" aria-label="AWS Builder">${icon("aws")}</a>` : ""}
        <a class="nav-cta" href="mailto:${esc(L.email)}">Contact</a>
      </div>
    </div>
  `);
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function renderHero(C, photos = []) {
  const hero = C.hero;
  const L    = C.links;
  const parts = hero.name.split(" ");
  const first = parts[0];
  const rest  = parts.slice(1).join(" ");

  const photoSrc = pickPhoto(photos);

  const visualHtml = photoSrc
    ? `<div class="hero-photo-wrap">
         <img class="hero-photo" src="${esc(photoSrc)}" alt="A photo of ${esc(first)}" loading="eager">
         <div class="hero-photo-overlay" aria-hidden="true"></div>
       </div>`
    : `<div class="hero-placeholder" aria-hidden="true">
         <div class="placeholder-grid">
           <div class="pg-block pg-block-a"></div>
           <div class="pg-block pg-block-b"></div>
           <div class="pg-block pg-block-c"></div>
           <div class="pg-block pg-block-d"></div>
         </div>
         <p class="placeholder-note">${icon("camera")} photos dropping soon</p>
       </div>`;

  mount("hero-copy", `
    <p class="kicker reveal">${esc(hero.location)} &nbsp;·&nbsp; ${esc(hero.availability)}</p>
    <h1 class="reveal delay-1">
      <span>${esc(first)}</span>
      <span class="accent">${esc(rest)}</span>
    </h1>
    <p class="hero-title reveal delay-2">${esc(hero.title)}</p>
    <p class="hero-lede reveal delay-2">${esc(hero.tagline)}</p>
    <p class="hero-sub reveal delay-3">${esc(hero.subTagline)}</p>
    <div class="hero-actions reveal delay-3">
      <a class="button button-primary" href="#projects">See the work ${icon("arrow")}</a>
      <a class="button button-secondary" href="${esc(L.linkedin)}" target="_blank" rel="noopener">LinkedIn ${icon("arrow")}</a>
      <a class="button button-secondary" href="mailto:${esc(L.email)}">Email me ${icon("mail")}</a>
    </div>
  `);

  mount("hero-visual-slot", visualHtml);
}

// ─── About ────────────────────────────────────────────────────────────────────

function renderAbout(about) {
  mount("about-inner", `
    ${sectionHeader("Who I am", "Software engineer. Asks a lot of why questions.", "Mostly to myself first. Infrastructure, backend, AI systems, and a Formula 1 habit that somehow maps onto everything.")}
    <div class="about-grid">
      <div class="reveal">
        <p class="about-intro">${esc(about.intro)}</p>
        <p class="about-note">${esc(about.note)}</p>
      </div>
      <div class="about-body">
        ${about.bio.map((p, i) => `<p class="reveal delay-${(i % 3) + 1}">${esc(p)}</p>`).join("")}
      </div>
    </div>
  `);
}

// ─── Experience ───────────────────────────────────────────────────────────────

function renderExperience(experience) {
  mount("experience-inner", `
    ${sectionHeader("Experience", "Where I've worked.", "Nearly three years in production AWS environments, then ASU.")}
    <div class="experience-list">
      ${experience.map((item, i) => `
        <article class="experience-card reveal delay-${(i % 3) + 1}">
          <div>
            <p class="experience-company">${esc(item.company)}</p>
            <h3 class="experience-role">${esc(item.role)}</h3>
            <p class="experience-meta">${esc(item.period)}<br>${esc(item.location)}</p>
          </div>
          <ul class="experience-points">
            ${item.highlights.map(pt => `<li>${esc(pt)}</li>`).join("")}
          </ul>
        </article>
      `).join("")}
    </div>
  `);
}

// ─── Areas ────────────────────────────────────────────────────────────────────

function renderAreas(areas) {
  if (!areas || !areas.length) return;
  mount("areas-inner", `
    ${sectionHeader("What I work on", "The areas I actually spend time in.", "Where I've built things, broken things, and figured out what matters.")}
    <div class="areas-grid">
      ${areas.map((area, i) => `
        <article class="area-card reveal delay-${(i % 3) + 1}">
          <h3 class="area-name">${esc(area.name)}</h3>
          <p class="area-desc">${esc(area.description)}</p>
          <div class="skill-items">
            ${area.items.map(item => `<span>${esc(item)}</span>`).join("")}
          </div>
        </article>
      `).join("")}
    </div>
  `);
}

// ─── Projects ─────────────────────────────────────────────────────────────────

function renderProjects(projects) {
  mount("projects-inner", `
    ${sectionHeader("Projects", "Things I built.", "Some for class, some out of curiosity, some because the alternative was doing it manually forever.")}
    <div class="projects-grid">
      ${projects.map((p, i) => renderProject(p, i)).join("")}
    </div>
  `);
}

function renderProject(project, index) {
  const media = project.image
    ? `<img src="${esc(project.image)}" alt="${esc(project.imageAlt || project.title)}" loading="lazy">`
    : `<div class="project-abstract" aria-hidden="true">
         <span class="abstract-chip abstract-chip-a">input</span>
         <span class="abstract-line"></span>
         <span class="abstract-chip abstract-chip-b">output</span>
       </div>`;

  return `
    <article class="project-card tilt-card reveal delay-${(index % 3) + 1}">
      <div class="project-media">${media}</div>
      <div class="project-body">
        <div class="project-meta">
          <span>${esc(project.year)}</span>
          <span>${String(index + 1).padStart(2, "0")}</span>
        </div>
        <h3 class="project-title">${esc(project.title)}</h3>
        ${project.subtitle ? `<p class="project-subtitle">${esc(project.subtitle)}</p>` : ""}
        <p class="project-desc">${esc(project.description)}</p>
        <p class="project-outcome">${esc(project.outcome)}</p>
        <div class="tag-list">
          ${project.tags.map(t => `<span class="tag">${esc(t)}</span>`).join("")}
        </div>
        ${project.github
          ? `<a class="project-link" href="${esc(project.github)}" target="_blank" rel="noopener">GitHub ${icon("arrow")}</a>`
          : `<span class="project-soon">repo coming</span>`}
      </div>
    </article>
  `;
}

// ─── Skills ───────────────────────────────────────────────────────────────────

function renderSkills(skills) {
  mount("skills-inner", `
    ${sectionHeader("Skills", "Tools I actually use.", "Not every tool I've ever touched — just the ones I reach for.")}
    <div class="skills-grid">
      ${skills.map((g, i) => `
        <article class="skill-card reveal delay-${(i % 3) + 1}">
          <h3 class="skill-name">${esc(g.group)}</h3>
          <div class="skill-items">
            ${g.items.map(item => `<span>${esc(item)}</span>`).join("")}
          </div>
        </article>
      `).join("")}
    </div>
  `);
}

// ─── Education and Certifications ─────────────────────────────────────────────

function renderEducation(education, certifications, links) {
  if (!education || !education.length) return;
  const credlyUrl = links?.credly || "#";
  const badged = certifications.filter(c => c.badge);
  const plain  = certifications.filter(c => !c.badge);

  mount("education-inner", `
    ${sectionHeader("Education", "Where I studied.", "ASU for the Master's, LPU for the undergrad.")}
    <div class="education-grid">
      <div class="edu-list">
        ${education.map((e, i) => `
          <article class="edu-card reveal delay-${(i % 3) + 1}">
            <h3 class="edu-school">${esc(e.school)}</h3>
            <p class="edu-degree">${esc(e.degree)}</p>
            <p class="edu-period">${esc(e.period)} &nbsp;·&nbsp; ${esc(e.location)}</p>
          </article>
        `).join("")}
      </div>
      <div class="cert-block reveal delay-2">
        <div class="cert-header">
          <h3 class="cert-title">Certifications</h3>
          <a class="cert-credly-link" href="${esc(credlyUrl)}" target="_blank" rel="noopener">
            View on Credly ${icon("arrow")}
          </a>
        </div>
        ${badged.length ? `
          <div class="cert-badges">
            ${badged.map(c => `
              <a class="cert-badge-item" href="${esc(credlyUrl)}" target="_blank" rel="noopener" title="${esc(c.name)}">
                <img src="${esc(c.badge)}" alt="${esc(c.name)}" loading="lazy" width="80" height="80">
                <span class="cert-badge-name">${esc(c.name)}</span>
                ${c.issued ? `<span class="cert-badge-date">${esc(c.issued)}</span>` : ""}
              </a>
            `).join("")}
          </div>
        ` : ""}
        ${plain.length ? `
          <ul class="cert-list">
            ${plain.map(c => `
              <li>
                <span>${esc(c.name)}</span>
                ${c.issuer ? `<span class="cert-issuer">${esc(c.issuer)}</span>` : ""}
              </li>
            `).join("")}
          </ul>
        ` : ""}
      </div>
    </div>
  `);
}

// ─── Travels ───────────────────────────────────────────────────────────────────

function renderTravels(travels) {
  mount("travels-inner", `
    ${sectionHeader("Places", "Outside the terminal.", "Photos and notes from places I've been.")}
    <div class="travel-list">
      ${travels.map((t, i) => {
        const photo = randomPhoto(t.photos, "assets/photos");
        return `
          <article class="travel-card reveal delay-${(i % 3) + 1}">
            <div class="travel-left">
              <h3 class="travel-place">${esc(t.place)}</h3>
              <p class="travel-date">${esc(t.date)}</p>
              ${photo ? `<img class="travel-photo" src="${esc(photo)}" alt="${esc(t.place)}" loading="lazy">` : `<div class="travel-photo-empty">${icon("camera")} photos coming</div>`}
            </div>
            <div><p class="travel-caption">${esc(t.caption)}</p></div>
          </article>
        `;
      }).join("")}
    </div>
  `);
}

// ─── Thoughts ─────────────────────────────────────────────────────────────────

function renderThoughts(thoughts) {
  const sorted = [...thoughts].sort((a, b) => new Date(b.date) - new Date(a.date));
  mount("thoughts-inner", `
    ${sectionHeader("Notes", "Things I keep thinking about.", "On building, debugging, F1 strategy calls, and moving to a new city.")}
    <div class="thoughts-grid">
      ${sorted.map((t, i) => `
        <article class="thought-card reveal delay-${(i % 3) + 1}">
          <p class="thought-text">${esc(t.text)}</p>
          <p class="thought-date">${formatDate(t.date)}</p>
        </article>
      `).join("")}
    </div>
  `);
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function renderFooter(C) {
  const L = C.links;
  mount("footer", `
    <div class="footer-grid">
      <div>
        <p class="footer-name">${esc(C.hero.name)}</p>
        <p class="footer-note footer-f1">${icon("flag")} ${esc(C.f1.tagline)}</p>
      </div>
      <div class="footer-actions">
        <button class="theme-toggle" type="button" aria-label="Switch to dark mode" aria-pressed="false">
          <span class="theme-toggle-track" aria-hidden="true">
            <span class="theme-toggle-icon theme-toggle-sun">${icon("sun")}</span>
            <span class="theme-toggle-icon theme-toggle-moon">${icon("moon")}</span>
          </span>
        </button>
        <div class="footer-links">
          <a href="mailto:${esc(L.email)}">Email</a>
          <a href="${esc(L.github)}" target="_blank" rel="noopener">GitHub</a>
          <a href="${esc(L.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>
          ${L.credly ? `<a href="${esc(L.credly)}" target="_blank" rel="noopener">Credly</a>` : ""}
          ${L.awsbuilder ? `<a href="${esc(L.awsbuilder)}" target="_blank" rel="noopener">AWS Builder</a>` : ""}
          ${L.resume ? `<a href="${esc(L.resume)}" target="_blank" rel="noopener">Resume</a>` : ""}
        </div>
      </div>
    </div>
  `);
}

// ─── Theme ────────────────────────────────────────────────────────────────────

function initThemePreference() {
  const stored = getStoredTheme();
  const systemDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  applyTheme(stored || (systemDark ? "dark" : "light"));
}

function initThemeToggle() {
  const toggle = qs(".theme-toggle");
  if (!toggle) return;
  const sync = () => {
    const dark = document.documentElement.dataset.theme === "dark";
    toggle.setAttribute("aria-pressed", String(dark));
    toggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  };
  sync();
  toggle.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    storeTheme(next);
    applyTheme(next);
    sync();
  });
}

function getStoredTheme() {
  try { return localStorage.getItem("portfolio-theme"); } catch { return null; }
}

function storeTheme(theme) {
  try { localStorage.setItem("portfolio-theme", theme); } catch {}
}

function applyTheme(theme) {
  const t = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = t;
  qs('meta[name="theme-color"]')?.setAttribute("content", t === "dark" ? "#07090f" : "#ffffff");
}

// ─── Nav state ────────────────────────────────────────────────────────────────

function initNavState() {
  const nav = qs("#nav");
  const links = [...document.querySelectorAll(".nav-links a")];
  const update = () => nav?.classList.toggle("scrolled", window.scrollY > 8);
  update();
  window.addEventListener("scroll", update, { passive: true });

  if (!("IntersectionObserver" in window)) return;
  const byId = new Map(links.map(l => [l.getAttribute("href")?.slice(1), l]));
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      links.forEach(l => l.classList.remove("active"));
      byId.get(e.target.id)?.classList.add("active");
    });
  }, { threshold: 0.28, rootMargin: "-22% 0px -55% 0px" });
  navItems.forEach(([, id]) => {
    const s = document.getElementById(id);
    if (s) obs.observe(s);
  });
}

// ─── Reveal on scroll ─────────────────────────────────────────────────────────

function initReveal() {
  const items = [...document.querySelectorAll(".reveal")];
  if (!items.length) return;
  items.forEach((el, i) => {
    if (!el.style.getPropertyValue("--reveal-delay") && !el.classList.contains("delay-1") && !el.classList.contains("delay-2") && !el.classList.contains("delay-3")) {
      el.style.setProperty("--reveal-delay", `${Math.min(i % 5, 4) * 70}ms`);
    }
  });
  if (!("IntersectionObserver" in window)) {
    items.forEach(el => el.classList.add("is-visible"));
    return;
  }
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add("is-visible");
      obs.unobserve(e.target);
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -60px 0px" });
  items.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) {
      el.classList.add("is-visible");
    } else {
      obs.observe(el);
    }
  });
}

// ─── Hero parallax (subtle background only) ───────────────────────────────────

function initHeroParallax() {
  const hero = document.getElementById("hero");
  if (!hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let tx = 0, ty = 0, cx = 0, cy = 0;
  hero.addEventListener("pointermove", e => {
    const r = hero.getBoundingClientRect();
    tx = ((e.clientX - r.left) / r.width  - 0.5) * 2;
    ty = ((e.clientY - r.top)  / r.height - 0.5) * 2;
  }, { passive: true });
  hero.addEventListener("pointerleave", () => { tx = 0; ty = 0; });
  const tick = () => {
    cx += (tx - cx) * 0.06;
    cy += (ty - cy) * 0.06;
    hero.style.setProperty("--hero-x", cx.toFixed(4));
    hero.style.setProperty("--hero-y", cy.toFixed(4));
    requestAnimationFrame(tick);
  };
  tick();
}

// ─── Tilt on project cards ────────────────────────────────────────────────────

function initTiltCards() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  document.querySelectorAll(".tilt-card").forEach(card => {
    card.addEventListener("mousemove", e => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width  - 0.5;
      const py = (e.clientY - r.top)  / r.height - 0.5;
      card.style.setProperty("--mx", `${(px + 0.5) * 100}%`);
      card.style.setProperty("--my", `${(py + 0.5) * 100}%`);
      card.style.transition = "transform 0.08s linear";
      card.style.transform = `perspective(1200px) rotateX(${-py * 3.4}deg) rotateY(${px * 4.2}deg) translateY(-4px)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transition = "transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)";
      card.style.transform = "";
      setTimeout(() => { card.style.transition = ""; }, 700);
    });
  });
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatDate(v) {
  const d = new Date(v);
  if (Number.isNaN(d.getTime())) return esc(v);
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}
