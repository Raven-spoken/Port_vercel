/**
 * Portfolio Main Script
 * Handles rendering, theme toggle, navigation, and interactions.
 */

(function () {
  "use strict";

  const { personal, about, projects, projectCategories, skills, services, contact, footer, navigation } =
    portfolioData;

  // ─── Icons ───────────────────────────────────────────────────────────────

  const icons = {
    github: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
    linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`,
    twitter: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
    dribbble: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.032c0 2.635.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6.091 3.725-1.402 5.29-3.53 5.553-3.787C16.787 3.128 14.458 2.097 12 2.097c-.495 0-.98.032-1.452.095zm13.8 4.013c-.285.327-1.997 2.22-5.708 3.762.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.105 7.14.13-.002-2.124-.86-4.072-2.332-5.908z"/></svg>`,
    behance: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.987h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/></svg>`,
    external: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
    code: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    layers: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
    database: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
    palette: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z"/></svg>`,
    tool: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    star: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    globe: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    smartphone: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
    image: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`,
    server: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
    settings: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  };

  // ─── Theme ───────────────────────────────────────────────────────────────

  const themeToggle = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }

  setTheme(savedTheme || (prefersDark ? "dark" : "light"));

  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
  });

  // ─── Render Helpers ────────────────────────────────────────────────────────

  function renderNavigation() {
    const navMenu = document.getElementById("nav-menu");
    const footerNav = document.getElementById("footer-nav");

    const navHTML = navigation
      .map((item) => `<li><a href="${item.href}" class="nav__link">${item.label}</a></li>`)
      .join("");

    navMenu.innerHTML = navHTML;
    footerNav.innerHTML = navHTML;
  }

  function renderSocialLinks(container, socialData) {
    const socialMap = [
      { key: "github", label: "GitHub" },
      { key: "linkedin", label: "LinkedIn" },
      { key: "twitter", label: "Twitter" },
      { key: "dribbble", label: "Dribbble" },
      { key: "behance", label: "Behance" },
    ];

    container.innerHTML = socialMap
      .filter(({ key }) => socialData[key])
      .map(
        ({ key, label }) =>
          `<a href="${socialData[key]}" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="${label}">${icons[key]}</a>`
      )
      .join("");
  }

  function renderHero() {
    document.getElementById("hero-name").textContent = personal.name;
    document.getElementById("hero-role").textContent = personal.role;
    document.getElementById("hero-intro").textContent = personal.introduction;
    document.getElementById("hero-avatar").src = personal.avatar;
    document.getElementById("hero-avatar").alt = `${personal.name} profile photo`;

    const codeCard = document.querySelector(".hero__code-card code");
    codeCard.innerHTML = `<span class="code-keyword">const</span> developer = {
  name: <span class="code-string">"${personal.name}"</span>,
  role: <span class="code-string">"${personal.role.split("&")[0].trim()}"</span>,
  skills: [<span class="code-string">"React"</span>, <span class="code-string">"Node.js"</span>],
  passion: <span class="code-string">"${personal.tagline}"</span>
};`;

    renderSocialLinks(document.getElementById("hero-social"), personal.social);
  }

  function renderAbout() {
    document.getElementById("about-tag").textContent = about.title;
    document.getElementById("about-title").textContent = about.subtitle;
    document.getElementById("about-description").textContent = about.description;

    document.getElementById("about-highlights").innerHTML = about.highlights
      .map(
        (h) => `
        <div class="highlight">
          <span class="highlight__value">${h.value}</span>
          <span class="highlight__label">${h.label}</span>
        </div>`
      )
      .join("");

    document.getElementById("experience-timeline").innerHTML = about.experience
      .map(
        (exp) => `
        <div class="timeline__item">
          <span class="timeline__year">${exp.year}</span>
          <div class="timeline__content">
            <h4>${exp.role}</h4>
            <p class="timeline__company">${exp.company}</p>
            <p class="timeline__desc">${exp.description}</p>
          </div>
        </div>`
      )
      .join("");
  }

  function renderProjectCard(project) {
    const categoryLabel =
      projectCategories.find((c) => c.id === project.category)?.label || project.category;

    const techTags = project.technologies
      .map((tech) => `<span class="project__tech">${tech}</span>`)
      .join("");

    const liveBtn = project.liveDemo
      ? `<a href="${project.liveDemo}" target="_blank" rel="noopener noreferrer" class="project__btn project__btn--live">
          Live Demo ${icons.external}
        </a>`
      : "";

    const githubBtn = project.github
      ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project__btn project__btn--github">
          ${icons.github} Source
        </a>`
      : "";

    return `
      <article class="project-card glass" data-category="${project.category}">
        <div class="project-card__image">
          <img src="${project.image}" alt="${project.title}" loading="lazy">
          <span class="project-card__category">${categoryLabel}</span>
          ${project.featured ? '<span class="project-card__featured">Featured</span>' : ""}
        </div>
        <div class="project-card__body">
          <h3 class="project-card__title">${project.title}</h3>
          <p class="project-card__desc">${project.description}</p>
          <div class="project-card__tech">${techTags}</div>
          <div class="project-card__actions">
            ${liveBtn}
            ${githubBtn}
          </div>
        </div>
      </article>`;
  }

  let activeFilter = "all";

  function renderProjects(filter = "all") {
    activeFilter = filter;
    const grid = document.getElementById("projects-grid");
    const filtered =
      filter === "all" ? projects : projects.filter((p) => p.category === filter);

    grid.innerHTML = filtered.map(renderProjectCard).join("");

    requestAnimationFrame(() => {
      grid.querySelectorAll(".project-card").forEach((card, i) => {
        card.style.animationDelay = `${i * 0.08}s`;
        card.classList.add("animate-in");
      });
    });
  }

  function renderProjectFilters() {
    const filtersContainer = document.getElementById("project-filters");

    filtersContainer.innerHTML = projectCategories
      .map(
        (cat) =>
          `<button class="filter-btn${cat.id === activeFilter ? " active" : ""}" data-filter="${cat.id}">${cat.label}</button>`
      )
      .join("");

    filtersContainer.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        filtersContainer.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        renderProjects(btn.dataset.filter);
      });
    });
  }

  function renderSkills() {
    document.getElementById("skills-tag").textContent = skills.title.split("&")[0].trim();
    document.getElementById("skills-title").textContent = skills.title;

    document.getElementById("skills-grid").innerHTML = skills.categories
      .map(
        (cat) => `
        <div class="skill-card glass">
          <div class="skill-card__icon">${icons[cat.icon] || icons.star}</div>
          <h3 class="skill-card__title">${cat.name}</h3>
          <div class="skill-card__tags">
            ${cat.items.map((item) => `<span class="skill-tag">${item}</span>`).join("")}
          </div>
        </div>`
      )
      .join("");
  }

  function renderServices() {
    document.getElementById("services-tag").textContent = services.title;
    document.getElementById("services-title").textContent = services.subtitle;

    document.getElementById("services-grid").innerHTML = services.items
      .map(
        (service) => `
        <div class="service-card glass">
          <div class="service-card__icon">${icons[service.icon] || icons.star}</div>
          <h3 class="service-card__title">${service.title}</h3>
          <p class="service-card__desc">${service.description}</p>
        </div>`
      )
      .join("");
  }

  function renderContact() {
    document.getElementById("contact-tag").textContent = contact.title;
    document.getElementById("contact-title").textContent = contact.subtitle;
    document.getElementById("contact-description").textContent = contact.description;

    const emailEl = document.getElementById("contact-email");
    emailEl.textContent = personal.email;
    emailEl.href = `mailto:${personal.email}`;

    document.getElementById("contact-location").textContent = personal.location;
    renderSocialLinks(document.getElementById("contact-social"), personal.social);
  }

  function renderFooter() {
    document.getElementById("footer-year").textContent = new Date().getFullYear();
    document.getElementById("footer-name").textContent = footer.copyright;
    document.getElementById("footer-tagline").textContent = footer.tagline;
  }

  // ─── Navigation & Scroll ───────────────────────────────────────────────────

  const header = document.getElementById("header");
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const backToTop = document.getElementById("back-to-top");

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    navToggle.classList.toggle("active");
  });

  navMenu.addEventListener("click", (e) => {
    if (e.target.classList.contains("nav__link")) {
      navMenu.classList.remove("active");
      navToggle.classList.remove("active");
    }
  });

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
    backToTop.classList.toggle("visible", window.scrollY > 400);
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll("section[id]");

  function highlightNavLink() {
    const scrollY = window.scrollY + 120;

    sections.forEach((section) => {
      const id = section.getAttribute("id");
      const link = document.querySelector(`.nav__link[href="#${id}"]`);
      if (!link) return;

      const top = section.offsetTop;
      const height = section.offsetHeight;

      if (scrollY >= top && scrollY < top + height) {
        document.querySelectorAll(".nav__link").forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", highlightNavLink);

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      if (targetId === "#") return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // ─── Contact Form ──────────────────────────────────────────────────────────

  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const mailtoLink = `mailto:${personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;

    window.location.href = mailtoLink;

    formStatus.textContent = "Opening your email client...";
    formStatus.className = "form__status success";
    contactForm.reset();

    setTimeout(() => {
      formStatus.textContent = "";
      formStatus.className = "form__status";
    }, 4000);
  });

  // ─── Scroll Animations ─────────────────────────────────────────────────────

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -80px 0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  function initScrollAnimations() {
    document
      .querySelectorAll(
        ".section__header, .about__content, .about__experience, .skill-card, .service-card, .contact__info, .contact__form"
      )
      .forEach((el) => {
        el.classList.add("scroll-animate");
        observer.observe(el);
      });
  }

  // ─── Initialize ────────────────────────────────────────────────────────────

  function init() {
    renderNavigation();
    renderHero();
    renderAbout();
    renderProjectFilters();
    renderProjects();
    renderSkills();
    renderServices();
    renderContact();
    renderFooter();
    initScrollAnimations();
    highlightNavLink();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
