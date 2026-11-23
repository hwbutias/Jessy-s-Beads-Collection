/* Shared behaviour for every page: header/footer, bead illustrations, shop, custom builder. */
(function () {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- Header & footer ---------- */
  const NAV = [
    ["index.html", "Home"],
    ["shop.html", "Shop"],
    ["custom.html", "Customize"],
    ["workshops.html", "Workshops"],
    ["care.html", "Care & Delivery"],
    ["about.html", "Our Story"],
  ];
  const page = location.pathname.split("/").pop() || "index.html";

  function renderChrome() {
    const header = $("#site-header");
    if (header) {
      header.innerHTML = `
        <div class="container header-inner">
          <a class="brand" href="index.html" aria-label="${esc(SITE.name)} home">
            <span class="brand-mark" aria-hidden="true">${beadArt("bracelet", ["#c9a227", "#b5452a", "#2f7a6b"], 40)}</span>
            <span class="brand-name">Jessy’s <em>Beads</em> Collection</span>
          </a>
          <button class="nav-toggle" aria-expanded="false" aria-controls="site-nav">
            <span class="sr-only">Menu</span><span></span><span></span><span></span>
          </button>
          <nav id="site-nav" class="site-nav">
            ${NAV.map(([href, label]) => `<a href="${href}"${href === page ? ' aria-current="page"' : ""}>${label}</a>`).join("")}
            <a class="btn btn-wa btn-sm" href="${waLink("Hello Jessy’s Beads Collection! I’d like to place an order.")}" target="_blank" rel="noopener">WhatsApp</a>
          </nav>
        </div>`;
      const toggle = $(".nav-toggle", header);
      toggle.addEventListener("click", () => {
        const open = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", String(!open));
        header.classList.toggle("nav-open", !open);
      });
    }
    const footer = $("#site-footer");
    if (footer) {
      footer.innerHTML = `
        <div class="container footer-grid">
          <div>
            <p class="footer-brand">Jessy’s Beads Collection</p>
            <p>Handcrafted beadwork made to turn heads. Hand-assembled in our studio in Accra, Ghana.</p>
          </div>
          <div>
            <p class="footer-title">Shop</p>
            ${Object.entries(CATEGORIES).map(([k, c]) => `<a href="shop.html#${k}">${c.label}</a>`).join("")}
          </div>
          <div>
            <p class="footer-title">Help</p>
            <a href="custom.html">Custom orders</a>
            <a href="care.html#sizing">Size & fit guide</a>
            <a href="care.html#care">Care guide</a>
            <a href="care.html#delivery">Delivery & payment</a>
            <a href="workshops.html">Beading workshops</a>
          </div>
          <div>
            <p class="footer-title">Connect</p>
            <a href="${waLink("Hello Jessy’s Beads Collection!")}" target="_blank" rel="noopener">WhatsApp</a>
            <a href="${esc(SITE.instagram)}" target="_blank" rel="noopener">Instagram</a>
            <a href="${esc(SITE.tiktok)}" target="_blank" rel="noopener">TikTok</a>
            ${SITE.email ? `<a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a>` : ""}
          </div>
        </div>
        <div class="container footer-base">
          <p>© ${new Date().getFullYear()} Jessy’s Beads Collection. Every piece hand-assembled—never mass-produced.</p>
        </div>`;
    }
  }

  /* ---------- Bead illustrations (SVG) ---------- */
  function bead(x, y, r, color) {
    return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" fill="${color}"/>` +
      `<circle cx="${(x - r * 0.35).toFixed(1)}" cy="${(y - r * 0.35).toFixed(1)}" r="${(r * 0.32).toFixed(1)}" fill="#fff" opacity=".55"/>`;
  }
  function beadArt(kind, palette, size) {
    const p = palette && palette.length ? palette : ["#c9a227", "#b5452a", "#2f7a6b"];
    const c = (i) => p[i % p.length];
    let out = "";
    if (kind === "necklace") {
      const n = 25;
      for (let i = 0; i < n; i++) {
        const t = Math.PI * (0.08 + (0.84 * i) / (n - 1));
        const x = 100 - 70 * Math.cos(t), y = 40 + 95 * Math.sin(t);
        out += bead(x, y, i % 6 === 0 ? 5.5 : 6.5, i % 6 === 0 ? c(2) : c(i % 2));
      }
      out += `<path d="M100 134 l-11 16 l11 20 l11 -20z" fill="${c(2)}"/><path d="M100 134 l-5 16 l5 20z" fill="#fff" opacity=".35"/>`;
    } else if (kind === "bracelet" || kind === "anklet") {
      const n = kind === "anklet" ? 30 : 22, rx = kind === "anklet" ? 78 : 62, ry = kind === "anklet" ? 44 : 62;
      for (let i = 0; i < n; i++) {
        const t = (2 * Math.PI * i) / n;
        const x = 100 + rx * Math.cos(t), y = 100 + ry * Math.sin(t);
        if (kind === "anklet" && i % 5 === 0 && Math.sin(t) > 0.2) {
          out += `<line x1="${x}" y1="${y}" x2="${x}" y2="${y + 16}" stroke="${c(2)}" stroke-width="1.5"/>${bead(x, y + 20, 5, c(2))}`;
        }
        out += bead(x, y, kind === "anklet" ? 6 : i % 4 === 0 ? 9 : 8, i % 4 === 0 ? c(2) : c(i % 2));
      }
    } else if (kind === "waistbeads") {
      for (let s = 0; s < 3; s++) {
        const n = 30;
        for (let i = 0; i < n; i++) {
          const x = 14 + (172 * i) / (n - 1);
          const y = 62 + s * 34 + 16 * Math.sin((i / (n - 1)) * Math.PI) - 8;
          out += bead(x, y, 4.6, (i + s) % 7 === 0 ? c(2) : c((s + (i % 3 === 0 ? 1 : 0)) % 2));
        }
      }
    } else if (kind === "bag") {
      out += `<path d="M70 70 C70 22 130 22 130 70" fill="none" stroke="${c(2)}" stroke-width="7" stroke-linecap="round"/>`;
      for (let row = 0; row < 9; row++) {
        const y = 78 + row * 11.5, half = 52 + row * 2.6, n = Math.round((2 * half) / 11.5);
        for (let i = 0; i <= n; i++) {
          const x = 100 - half + (2 * half * i) / n;
          out += bead(x, y, 5.6, (row + i) % 5 === 0 ? c(2) : c((row % 3 === 0) ? 1 : 0));
        }
      }
    } else {
      // custom: keychain / charm cluster
      out += `<circle cx="100" cy="40" r="16" fill="none" stroke="${c(2)}" stroke-width="4"/>`;
      [[-34, 0], [0, 1], [34, 2]].forEach(([dx, k]) => {
        for (let i = 0; i < 9; i++) out += bead(100 + dx * (i / 8), 64 + i * 12, i === 8 ? 9 : 6, i === 8 ? c(k + 1) : c(k));
      });
    }
    const s = size ? ` width="${size}" height="${size}"` : "";
    return `<svg viewBox="0 0 200 200"${s} role="img" aria-hidden="true" focusable="false">${out}</svg>`;
  }
  window.beadArt = beadArt;

  function hydrateArt(root = document) {
    $$("[data-art]", root).forEach((el) => {
      el.innerHTML = beadArt(el.dataset.art, (el.dataset.palette || "").split(",").filter(Boolean));
    });
  }

  /* ---------- Shop ---------- */
  const priceLabel = (p) => (p == null ? "Ask for price" : `${SITE.currency} ${Number(p).toLocaleString()}`);
  const statusTag = (s) =>
    s === "ready"
      ? `<span class="tag tag-ready">Ready to ship</span>`
      : `<span class="tag tag-made">Made to order · 3–5 days</span>`;
  const productMedia = (p) =>
    p.image
      ? `<img src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy">`
      : beadArt(CATEGORIES[p.category].art, p.palette);

  function productCard(p) {
    return `
      <article class="product-card" data-category="${p.category}" data-status="${p.status}">
        <button class="product-open" data-id="${p.id}" aria-label="View ${esc(p.name)}">
          <div class="product-media" style="--tint:${p.palette[1] || "#f4eee2"}">${productMedia(p)}</div>
        </button>
        <div class="product-body">
          ${statusTag(p.status)}
          <p class="product-cat">${CATEGORIES[p.category].label}</p>
          <h3><button class="link-btn product-open" data-id="${p.id}">${esc(p.name)}</button></h3>
          <p class="product-tagline">${esc(p.tagline)}</p>
          <div class="product-foot">
            <span class="price">${priceLabel(p.price)}</span>
            <a class="btn btn-wa btn-sm" target="_blank" rel="noopener"
               href="${waLink(`Hello! I’d like to order or customize: ${p.name}.`)}">Order via WhatsApp</a>
          </div>
        </div>
      </article>`;
  }

  function openProduct(id) {
    const p = PRODUCTS.find((x) => x.id === id);
    const dlg = $("#product-dialog");
    if (!p || !dlg) return;
    $(".dialog-content", dlg).innerHTML = `
      <div class="dialog-media" style="--tint:${p.palette[1] || "#f4eee2"}">${productMedia(p)}</div>
      <div class="dialog-text">
        ${statusTag(p.status)}
        <p class="product-cat">${CATEGORIES[p.category].label}</p>
        <h2>${esc(p.name)}</h2>
        <p class="lede">${esc(p.tagline)}</p>
        <p>${esc(p.description)}</p>
        <dl class="spec">${p.details.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("")}</dl>
        <p class="price">${priceLabel(p.price)}</p>
        <div class="btn-row">
          <a class="btn btn-wa" target="_blank" rel="noopener" href="${waLink(`Hello! I’d like to order or customize: ${p.name}.`)}">Order or Customize via WhatsApp</a>
          <a class="btn btn-ghost" href="custom.html?item=${p.category}">Build a custom request</a>
        </div>
      </div>`;
    dlg.showModal();
  }

  function initShop() {
    const grid = $("#product-grid");
    if (!grid) return;
    let cat = (location.hash || "").slice(1);
    if (!CATEGORIES[cat]) cat = "all";
    let status = "all";

    const filters = $("#category-filters");
    filters.innerHTML = [["all", "All pieces"], ...Object.entries(CATEGORIES).map(([k, c]) => [k, c.label])]
      .map(([k, l]) => `<button class="chip" data-cat="${k}" aria-pressed="${k === cat}">${l}</button>`)
      .join("");

    function render() {
      const items = PRODUCTS.filter((p) => (cat === "all" || p.category === cat) && (status === "all" || p.status === status));
      grid.innerHTML = items.length
        ? items.map(productCard).join("")
        : `<p class="empty">Nothing here yet in this filter—<a href="custom.html">request a custom piece</a> instead.</p>`;
    }
    filters.addEventListener("click", (e) => {
      const b = e.target.closest("[data-cat]");
      if (!b) return;
      cat = b.dataset.cat;
      $$("[data-cat]", filters).forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
      history.replaceState(null, "", cat === "all" ? location.pathname : `#${cat}`);
      render();
    });
    $("#status-filter").addEventListener("change", (e) => { status = e.target.value; render(); });
    render();
  }

  function initFeatured() {
    const el = $("#featured-products");
    if (!el) return;
    const picks = ["signature-tote", "pearl-centerpiece", "stackable-crystal", "glow-waistbeads"];
    el.innerHTML = picks.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean).map(productCard).join("");
  }

  function initDialog() {
    document.addEventListener("click", (e) => {
      const opener = e.target.closest(".product-open");
      if (opener) openProduct(opener.dataset.id);
    });
    const dlg = $("#product-dialog");
    if (dlg) {
      $(".dialog-close", dlg).addEventListener("click", () => dlg.close());
      dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });
    }
  }

  /* ---------- Custom request builder ---------- */
  const SWATCHES = [
    ["Gold", "#c9a227"], ["Champagne", "#f3e2a9"], ["Pearl White", "#f4eee2"], ["Blush", "#f2c6d4"],
    ["Rose", "#d9779a"], ["Coral", "#e8735a"], ["Terracotta", "#b5452a"], ["Amber", "#e8a33d"],
    ["Emerald", "#2f7a6b"], ["Mint", "#9fd3c7"], ["Royal Blue", "#2b5d8a"], ["Lilac", "#6c5a9e"],
    ["Black", "#1f1b2e"], ["Silver", "#c7c3d6"],
  ];
  const FIT_FIELDS = {
    bags: { label: "Preferred size / style", placeholder: "e.g. clutch, mini tote, structured tote", unit: "" },
    necklaces: { label: "Neck measurement or desired length (inches)", placeholder: "e.g. 16", unit: "in" },
    bracelets: { label: "Wrist measurement (inches)", placeholder: "e.g. 6.75", unit: "in" },
    anklets: { label: "Ankle measurement (inches)", placeholder: "e.g. 9.5", unit: "in" },
    waistbeads: { label: "Waist measurement (inches)", placeholder: "e.g. 32", unit: "in" },
    trim: { label: "Measurements / quantity", placeholder: "e.g. 40 inches of neckline trim", unit: "" },
  };

  function initBuilder() {
    const form = $("#custom-form");
    if (!form) return;
    const sw = $("#swatches");
    sw.innerHTML = SWATCHES.map(([n, hex]) =>
      `<label class="swatch"><input type="checkbox" name="colors" value="${n}"><span style="--c:${hex}"></span><em>${n}</em></label>`
    ).join("");

    const item = $("#item", form), closureRow = $("#closure-row"), fit = $("#fit-label"), fitInput = $("#fit", form);
    const preview = $("#builder-preview");
    function sync() {
      const v = item.value;
      const f = FIT_FIELDS[v] || FIT_FIELDS.bags;
      fit.textContent = f.label;
      fitInput.placeholder = f.placeholder;
      closureRow.hidden = v !== "waistbeads";
      const picked = $$("input[name=colors]:checked", sw).map((i) => SWATCHES.find((s) => s[0] === i.value)[1]);
      const art = { bags: "bag", necklaces: "necklace", bracelets: "bracelet", anklets: "anklet", waistbeads: "waistbeads", trim: "custom" }[v] || "custom";
      preview.innerHTML = beadArt(art, picked.length ? picked : undefined);
    }
    const qp = new URLSearchParams(location.search).get("item");
    if (qp === "custom") item.value = "trim";
    else if (qp && FIT_FIELDS[qp]) item.value = qp;
    form.addEventListener("change", sync);
    sync();

    const photo = $("#photo", form), photoPrev = $("#photo-preview");
    photo.addEventListener("change", () => {
      const f = photo.files[0];
      photoPrev.innerHTML = f ? `<img src="${URL.createObjectURL(f)}" alt="Your reference photo"><span>${esc(f.name)} — attach this photo in the WhatsApp chat.</span>` : "";
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const d = new FormData(form);
      const label = item.options[item.selectedIndex].text;
      const colors = d.getAll("colors");
      const lines = [
        "Hello Jessy’s Beads Collection! I’d like a custom piece:",
        `• Item: ${label}`,
        colors.length ? `• Colors: ${colors.join(", ")}` : null,
        d.get("fit") ? `• ${fit.textContent}: ${d.get("fit")}` : null,
        item.value === "waistbeads" ? `• Closure: ${d.get("closure")}` : null,
        d.get("occasion") ? `• Occasion / date needed: ${d.get("occasion")}` : null,
        d.get("notes") ? `• Notes: ${d.get("notes")}` : null,
        photo.files.length ? "• I have an outfit/reference photo to share for color matching." : null,
        d.get("name") ? `— ${d.get("name")}` : null,
      ].filter(Boolean);
      window.open(waLink(lines.join("\n")), "_blank", "noopener");
    });
  }

  /* ---------- Workshop interest form ---------- */
  function initWorkshop() {
    const form = $("#workshop-form");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const d = new FormData(form);
      const msg = [
        "Hello! I’d like to sign up for a beading workshop.",
        `• Name: ${d.get("name")}`,
        `• Session: ${d.get("session")}`,
        `• Number of people: ${d.get("people")}`,
        d.get("kit") ? "• Please include a starter kit." : null,
        d.get("notes") ? `• Notes: ${d.get("notes")}` : null,
      ].filter(Boolean).join("\n");
      window.open(waLink(msg), "_blank", "noopener");
    });
  }

  /* ---------- Craft reels ---------- */
  function initReels() {
    const el = $("#craft-reels");
    if (!el) return;
    const reels = SITE.craftReels || [];
    if (!reels.length) return; // keep the static placeholder cards
    el.innerHTML = reels.map((r) => `
      <a class="reel" href="${esc(r.url)}" target="_blank" rel="noopener">
        <span class="reel-play" aria-hidden="true">▶</span><span class="reel-title">${esc(r.title)}</span>
      </a>`).join("");
  }

  function initWaLinks() {
    $$("[data-wa]").forEach((a) => {
      a.href = waLink(a.dataset.wa);
      a.target = "_blank";
      a.rel = "noopener";
    });
    $$("[data-social]").forEach((a) => { a.href = SITE[a.dataset.social] || "#"; a.target = "_blank"; a.rel = "noopener"; });
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderChrome();
    hydrateArt();
    initFeatured();
    initShop();
    initDialog();
    initBuilder();
    initWorkshop();
    initReels();
    initWaLinks();
  });
})();
