// Creole Grounds Landscaping — Demo Website Script
// DEMONSTRATION ONLY — Not an operating business
// All content is fictitious and for showcase purposes

(() => {
  const data = window.BUSINESS;
  if (!data) return;

  const theme = data.theme;

  const $ = (id) => document.getElementById(id);
  const setText = (id, value) => { const el = $(id); if (el && value != null) el.textContent = value; };
  const setHref = (id, value) => { const el = $(id); if (el && value) el.href = value; };

  // Apply theme colors
  if (theme.brand) document.documentElement.style.setProperty("--brand", theme.brand);
  if (theme.brandDark) document.documentElement.style.setProperty("--brand-dark", theme.brandDark);
  if (theme.accent) document.documentElement.style.setProperty("--accent", theme.accent);
  if (theme.accentDark) document.documentElement.style.setProperty("--accent-dark", theme.accentDark);
  if (theme.charcoal) document.documentElement.style.setProperty("--charcoal", theme.charcoal);
  if (theme.cream) document.documentElement.style.setProperty("--cream", theme.cream);
  if (theme.stone) document.documentElement.style.setProperty("--stone", theme.stone);

  const b = data.business;
  const tel = `tel:${b.phoneHref}`;
  const mail = `mailto:${b.email}`;

  // SEO metadata
  document.title = data.seo.title || `${b.name} | ${b.cityState}`;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.content = data.seo.description;
  const robots = document.querySelector('meta[name="robots"]');
  if (robots) robots.content = data.seo.robots;
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.href = data.seo.canonical;

  // Common elements
  setText("announcement", data.announcement);
  setText("brandInitials", b.initials);
  setText("brandName", b.name);
  setText("brandTagline", b.tagline);
  setText("footerBusinessName", b.name);
  setText("footerLocation", b.cityState);
  setText("quickLocation", b.cityState);

  // Demo contact — no clickable phone/email links
  const contactElements = document.querySelectorAll('[id^="contactPhone"], [id^="contactEmail"], [id^="contactAddress"], #quickPhone, #mobileCall, #headerCall');
  contactElements.forEach(el => {
    if (el && b.demoLabel === "DEMO") {
      el.href = "#";
      el.setAttribute("data-demo", "true");
    }
  });

  // Set demo contact display (no functional links)
  const quickPhone = $("quickPhone");
  if (quickPhone) {
    quickPhone.textContent = b.phoneDisplay;
    quickPhone.href = "#";
    quickPhone.classList.add("demo-text");
  }

  const headerCall = $("headerCall");
  if (headerCall) {
    headerCall.href = "#";
    headerCall.textContent = "Demo Contact";
  }

  // Hours — populate from business.js
  const firstHours = data.hours[0];
  const quickHours = $("quickHours");
  if (quickHours && firstHours) {
    quickHours.textContent = `${firstHours[0].substring(0, 3)}–${data.hours[4][0].substring(0, 3)} ${firstHours[1]}`;
  }

  // Hours list (contact page)
  const hoursList = $("hoursList");
  if (hoursList) {
    hoursList.innerHTML = data.hours.map(([day, hrs]) =>
      `<div class="hours-row"><span>${escapeHtml(day)}</span><strong>${escapeHtml(hrs)}</strong></div>`
    ).join("");
  }

  // Hero content
  setText("heroEyebrow", data.hero.eyebrow);
  setText("heroTitle", data.hero.title);
  setText("heroText", data.hero.text);
  setText("primaryCta", data.hero.primaryCta || "Book Your Free Consultation");

  // Hero image
  const heroPhoto = $("heroPhoto");
  if (heroPhoto && data.hero.image) {
    heroPhoto.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.05)), url("${data.hero.image}")`;
  }

  // Trust items
  const trust = $("trustRow");
  if (trust) {
    trust.innerHTML = data.trustItems.map(item => `<span>${escapeHtml(item)}</span>`).join("");
  }

  // Services grid (services preview on homepage)
  const servicesGrid = $("servicesGrid");
  if (servicesGrid) {
    servicesGrid.innerHTML = data.services.items.map(item => `
      <article class="card">
        <div class="card-image-container">
          <img src="${item.image}" alt="${escapeHtml(item.title)} in New Orleans" loading="lazy">
        </div>
        <div class="card-icon">${escapeHtml(item.icon)}</div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.text)}</p>
        <div class="price">${escapeHtml(item.price)}</div>
        <div class="price-note">${escapeHtml(item.priceNote)}</div>
      </article>
    `).join("");
  }

  // Full services grid (services page)
  const servicesFull = $("servicesGridFull");
  if (servicesFull) {
    servicesFull.innerHTML = data.services.items.map(item => `
      <article class="card service-card">
        <div class="card-image-container">
          <img src="${item.image}" alt="${escapeHtml(item.title)} in New Orleans" loading="lazy">
        </div>
        <div class="card-icon">${escapeHtml(item.icon)}</div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.text)}</p>
        <div class="price">${escapeHtml(item.price)}</div>
        <div class="price-note">${escapeHtml(item.priceNote)}</div>
        <a class="button button-small" href="contact.html?subject=${encodeURIComponent(item.title)}" style="margin-top: 16px;">Inquire About This Service</a>
      </article>
    `).join("");
  }

  // Service detail cards (services page — expanded)
  const serviceDetail = $("serviceDetail");
  if (serviceDetail) {
    serviceDetail.innerHTML = data.services.items.map(item => `
      <div class="service-detail-card">
        <div class="service-detail-image">
          <img src="${item.image}" alt="${escapeHtml(item.title)} service" loading="lazy">
        </div>
        <div class="service-detail-content">
          <h3>${escapeHtml(item.title)}</h3>
          <p class="price">${escapeHtml(item.price)} <span class="price-note">${escapeHtml(item.priceNote)}</span></p>
          <p>${escapeHtml(item.fullText)}</p>
          <a class="button" href="contact.html?subject=${encodeURIComponent(item.title)}">Request a Consultation</a>
        </div>
      </div>
    `).join("");
  }

  // About section
  const servicesTitle = $("servicesTitle");
  if (servicesTitle) setText("servicesTitle", data.services.title);

  const servicesIntro = $("servicesIntro");
  if (servicesIntro) setText("servicesIntro", data.services.intro);

  setText("aboutTitle", data.about.title);
  setText("aboutText", data.about.text);
  setText("panelTitle", data.about.panelTitle);
  setText("panelText", data.about.panelText);

  // About page extra elements
  const aboutHeroTitle = $("aboutHeroTitle");
  if (aboutHeroTitle) setText("aboutHeroTitle", data.about.title);

  const aboutHeroText = $("aboutHeroText");
  if (aboutHeroText) setText("aboutHeroText", data.about.text);

  const aboutTitleAlt = $("aboutTitleAlt");
  if (aboutTitleAlt) setText("aboutTitleAlt", "Quality. Sustainability. Craft.");

  const aboutTextAlt = $("aboutTextAlt");
  if (aboutTextAlt) setText("aboutTextAlt", "Every project reflects our commitment to excellence, environmental responsibility, and deep respect for the Gulf Coast's natural beauty. We believe outdoor living spaces should be both beautiful and resilient.");

  const aboutPoints = $("aboutPoints");
  if (aboutPoints) {
    aboutPoints.innerHTML = data.about.points.map(item =>
      `<li>${escapeHtml(item)}</li>`
    ).join("");
  }

  // Portfolio preview (homepage)
  const portfolioPreview = $("portfolioPreview");
  if (portfolioPreview) {
    portfolioPreview.innerHTML = data.portfolio.map(item => `
      <div class="portfolio-card">
        <div class="portfolio-image" style="background-image: url('${item.image}');"></div>
        <div class="portfolio-content">
          <span class="portfolio-category">${escapeHtml(item.category)}</span>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.description)}</p>
        </div>
      </div>
    `).join("");
  }

  // Full portfolio grid (services/about page)
  const portfolioGrid = $("portfolioGrid");
  if (portfolioGrid) {
    portfolioGrid.innerHTML = data.portfolio.map(item => `
      <div class="portfolio-card">
        <div class="portfolio-image" style="background-image: url('${item.image}');"></div>
        <div class="portfolio-content">
          <span class="portfolio-category">${escapeHtml(item.category)}</span>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.description)}</p>
        </div>
      </div>
    `).join("");
  }

  // Contact page
  setText("contactTitle", data.contact.title);
  setText("contactText", data.contact.text);

  // Demo contact info — non-clickable
  const contactPhone = $("contactPhone");
  if (contactPhone) {
    contactPhone.textContent = b.phoneDisplay;
    contactPhone.href = "#";
  }

  const contactEmail = $("contactEmail");
  if (contactEmail) {
    contactEmail.textContent = b.email;
    contactEmail.href = "#";
  }

  const contactAddress = $("contactAddress");
  if (contactAddress) {
    contactAddress.textContent = b.address;
  }

  const contactCall = $("contactCall");
  if (contactCall) {
    contactCall.href = "#";
    contactCall.textContent = "Demo Contact";
  }

  const mobileCall = $("mobileCall");
  if (mobileCall) {
    mobileCall.textContent = "Demo";
  }

  // Demo notice on all pages
  const demoNoticeEl = document.getElementById("demoNoticeText");
  if (demoNoticeEl) setText("demoNoticeText", data.demoNotice);

  // Demo badge
  const demoBadge = document.querySelector(".demo-badge");
  if (demoBadge && b.demoLabel) {
    demoBadge.textContent = b.demoLabel;
  }

  // Mobile menu toggle
  const menuButton = $("menuButton");
  const navLinks = $("navLinks");
  if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Contact form demo-only handling
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.setAttribute("data-demo-form", "true");

    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      if (input.hasAttribute("required")) {
        input.setAttribute("aria-required", "true");
      }
    });

    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();

      // Client-side validation
      const name = this.querySelector("#name").value.trim();
      const email = this.querySelector("#email").value.trim();
      const phone = this.querySelector("#phone").value.trim();
      const message = this.querySelector("#message").value.trim();

      const errors = [];
      if (!name) errors.push("Name is required.");
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("A valid email is required.");
      if (!message || message.length < 10) errors.push("Please provide a message (at least 10 characters).");

      const errorContainer = document.getElementById("formError");
      if (errorContainer) {
        if (errors.length > 0) {
          errorContainer.innerHTML = errors.map(e => `<p>${escapeHtml(e)}</p>`).join("");
          errorContainer.style.display = "block";
          errorContainer.setAttribute("role", "alert");
        } else {
          errorContainer.style.display = "none";
          errorContainer.innerHTML = "";

          // Demo notice — no real submission
          const successEl = document.getElementById("formSuccess");
          if (successEl) {
            successEl.style.display = "block";
            successEl.innerHTML = "<p><strong>This is a demonstration form.</strong> No message has been sent. A real implementation would connect to a CRM or email service here.</p>";
          }
        }
      }
    });
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }
})();
