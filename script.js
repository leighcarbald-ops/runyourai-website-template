(() => {
  const data = window.BUSINESS;
  if (!data) return;

  const $ = (id) => document.getElementById(id);
  const setText = (id, value) => { const el = $(id); if (el && value != null) el.textContent = value; };
  const setHref = (id, value) => { const el = $(id); if (el && value) el.href = value; };

  document.documentElement.style.setProperty("--brand", data.theme?.brand || "#5b4bff");
  document.documentElement.style.setProperty("--brand-dark", data.theme?.brandDark || data.theme?.brand || "#4032d8");

  const b = data.business;
  const tel = `tel:${b.phoneHref}`;
  const mail = `mailto:${b.email}`;
  const map = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.mapQuery || b.address)}`;

  document.title = `${b.name} | ${b.cityState}`;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.content = `${b.name} — ${data.hero.text}`;

  setText("announcement", data.announcement);
  setText("brandInitials", b.initials);
  setText("brandName", b.name);
  setText("brandTagline", b.tagline);
  setText("heroEyebrow", data.hero.eyebrow);
  setText("heroTitle", data.hero.title);
  setText("heroText", data.hero.text);
  setText("primaryCta", data.hero.primaryCta);
  setText("quickPhone", b.phoneDisplay);
  setText("quickLocation", b.cityState);
  setText("quickHours", data.hours?.[0]?.[1] || "Call for hours");
  setText("servicesTitle", data.services.title);
  setText("servicesIntro", data.services.intro);
  setText("aboutTitle", data.about.title);
  setText("aboutText", data.about.text);
  setText("panelTitle", data.about.panelTitle);
  setText("panelText", data.about.panelText);
  setText("contactTitle", data.contact.title);
  setText("contactText", data.contact.text);
  setText("contactPhone", b.phoneDisplay);
  setText("contactEmail", b.email);
  setText("contactAddress", b.address);
  setText("footerBusinessName", b.name);
  setText("footerLocation", b.cityState);

  ["headerCall", "primaryCta", "quickPhone", "panelCall", "contactPhone", "contactCall", "mobileCall"].forEach(id => setHref(id, tel));
  setHref("contactEmail", mail);
  setHref("mapLink", map);

  const heroPhoto = $("heroPhoto");
  if (heroPhoto && data.hero.image) {
    heroPhoto.style.backgroundImage = `linear-gradient(rgba(0,0,0,.08),rgba(0,0,0,.08)), url("${data.hero.image}")`;
  }

  const trust = $("trustRow");
  if (trust) trust.innerHTML = data.trustItems.map(item => `<span>${escapeHtml(item)}</span>`).join("");

  const servicesGrid = $("servicesGrid");
  if (servicesGrid) {
    servicesGrid.innerHTML = data.services.items.map(item => `
      <article class="card">
        <div class="card-icon">${escapeHtml(item.icon)}</div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.text)}</p>
      </article>`).join("");
  }

  const points = $("aboutPoints");
  if (points) points.innerHTML = data.about.points.map(item => `<li>${escapeHtml(item)}</li>`).join("");

  const reviewGrid = $("reviewGrid");
  if (reviewGrid) {
    reviewGrid.innerHTML = data.reviews.map(review => `
      <article class="review">
        <div class="stars" aria-label="5 stars">★★★★★</div>
        <p>“${escapeHtml(review.text)}”</p>
        <strong>${escapeHtml(review.name)}</strong>
      </article>`).join("");
  }

  const hoursList = $("hoursList");
  if (hoursList) {
    hoursList.innerHTML = data.hours.map(([day, hours]) => `
      <div class="hours-row"><span>${escapeHtml(day)}</span><strong>${escapeHtml(hours)}</strong></div>`).join("");
  }

  const menuButton = $("menuButton");
  const navLinks = $("navLinks");
  menuButton?.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });
  navLinks?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  }));

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }
})();
