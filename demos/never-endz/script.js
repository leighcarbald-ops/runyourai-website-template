(() => {
  const data = window.BUSINESS;
  if (!data) return;
  const $ = (id) => document.getElementById(id);
  const setText = (id, value) => { const el = $(id); if (el && value != null) el.textContent = value; };
  const setHref = (id, value) => { const el = $(id); if (el && value) el.href = value; };
  const esc = (value) => String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");

  document.documentElement.style.setProperty("--brand", data.theme.brand);
  document.documentElement.style.setProperty("--brand-dark", data.theme.brandDark);
  const b = data.business;
  const tel = `tel:${b.phoneHref}`;
  const map = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.mapQuery || b.address)}`;

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
  setText("quickHours", "Tue–Sat • Call for appointment");
  setText("servicesTitle", data.services.title);
  setText("servicesIntro", data.services.intro);
  setText("aboutTitle", data.about.title);
  setText("aboutText", data.about.text);
  setText("panelTitle", data.about.panelTitle);
  setText("panelText", data.about.panelText);
  setText("contactTitle", data.contact.title);
  setText("contactText", data.contact.text);
  setText("contactPhone", b.phoneDisplay);
  setText("contactAddress", b.address);
  setText("footerBusinessName", b.name);
  setText("footerLocation", b.cityState);
  ["headerCall","primaryCta","quickPhone","panelCall","contactPhone","contactCall","mobileCall"].forEach(id => setHref(id, tel));
  setHref("mapLink", map);

  $("trustRow").innerHTML = data.trustItems.map(item => `<span>${esc(item)}</span>`).join("");
  $("servicesGrid").innerHTML = data.services.items.map(item => `<article class="card"><div class="card-icon">${esc(item.icon)}</div><h3>${esc(item.title)}</h3><p>${esc(item.text)}</p></article>`).join("");
  $("aboutPoints").innerHTML = data.about.points.map(item => `<li>${esc(item)}</li>`).join("");
  $("reviewGrid").innerHTML = data.reviews.map(review => `<article class="review"><h3>${esc(review.title)}</h3><p>${esc(review.text)}</p></article>`).join("");
  $("hoursList").innerHTML = data.hours.map(([day,hours]) => `<div class="hours-row"><span>${esc(day)}</span><strong>${esc(hours)}</strong></div>`).join("");

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
})();
