/*
 * Product catalog. Add, remove or edit items here.
 *  - category: bags | necklaces | bracelets | anklets | waistbeads | custom
 *  - status:   "ready" (ready-to-ship) or "made" (made-to-order)
 *  - price:    a number in SITE.currency, or null to show "Ask for price"
 *  - palette:  bead colours used for the illustration (swap for a photo via `image`)
 *  - image:    optional path to a real product photo, e.g. "images/clutch-gold.jpg"
 */
window.CATEGORIES = {
  bags: { label: "Beaded Bags", art: "bag" },
  necklaces: { label: "Necklaces", art: "necklace" },
  bracelets: { label: "Bracelets", art: "bracelet" },
  anklets: { label: "Anklets", art: "anklet" },
  waistbeads: { label: "Waistbeads", art: "waistbeads" },
  custom: { label: "Bespoke & Custom", art: "custom" },
};

window.PRODUCTS = [
  {
    id: "signature-tote",
    name: "The Signature Structured Beaded Tote",
    category: "bags",
    status: "made",
    price: null,
    tagline: "Handwoven bead by bead to hold its shape—and steal the spotlight.",
    description:
      "Make an unforgettable entrance with a bag that doubles as wearable art. Each bag is meticulously handwoven using high-grade crystal or acrylic beads and reinforced with double-threaded, high-tension line so it stands upright and keeps its crisp silhouette even when empty. Ideal for weddings, brunches, and evening events, it comfortably holds your phone, cardholder, lip gloss, and keys.",
    details: [
      ["Materials", "Glossy crystal/acrylic beads, heavy-duty reinforced nylon thread, secure magnetic or beaded closure"],
      ["Customization", "Solid classics, multi-color patterns, or custom-matched to your outfit photo (3–5 business days for custom orders)"],
    ],
    palette: ["#c9a227", "#f3e2a9", "#8a6d12"],
  },
  {
    id: "evening-clutch",
    name: "The Crystal Evening Clutch",
    category: "bags",
    status: "ready",
    price: null,
    tagline: "A compact, structured clutch woven for evening shine.",
    description:
      "Our signature bead-by-bead weave in a compact clutch silhouette. Double-threaded, high-tension line keeps its crisp structure, and the glossy crystal finish catches the light from every angle.",
    details: [
      ["Materials", "Glossy crystal/acrylic beads, heavy-duty reinforced nylon thread, secure magnetic or beaded closure"],
      ["Customization", "Available in signature colorways or custom-matched to your outfit (3–5 business days)"],
    ],
    palette: ["#1f1b2e", "#c7c3d6", "#6c5a9e"],
  },
  {
    id: "pearl-centerpiece",
    name: "The Luminous Single-Strand Pearl & Centerpiece Necklace",
    category: "necklaces",
    status: "ready",
    price: null,
    tagline: "Classic radiance meets modern artisanal detail.",
    description:
      "Designed to frame your collarbone with effortless elegance, this single-strand necklace pairs smooth, lustrous pearls with a striking isolated centerpiece pendant. Lightweight enough for all-day wear yet refined enough for formal occasions, it transitions seamlessly from daytime polish to evening glamour.",
    details: [
      ["Materials", "Freshwater or glass pearls, natural gemstone/crystal centerpiece, non-tarnish stainless steel clasp"],
      ["Sizing & Care", "Standard 16\" length with a 2\" adjustable extender chain; wipe gently with a soft cloth and store flat"],
    ],
    palette: ["#f4eee2", "#e7dcc6", "#2f7a6b"],
  },
  {
    id: "statement-choker",
    name: "The Statement Beaded Choker",
    category: "necklaces",
    status: "made",
    price: null,
    tagline: "Bold color, close to the collarbone.",
    description:
      "A layered statement choker hand-strung in vibrant glass and crystal beads. Wear it alone with an open neckline or layer it above a pearl strand for a fuller look.",
    details: [
      ["Materials", "Glass seed beads, faceted crystals, non-tarnish stainless steel clasp"],
      ["Sizing", "Made to your neck measurement with a 2\" adjustable extender"],
    ],
    palette: ["#b5452a", "#e8a33d", "#2b5d8a"],
  },
  {
    id: "stackable-crystal",
    name: "The Everyday Stackable Crystal & Seed Bead Bracelet",
    category: "bracelets",
    status: "ready",
    price: null,
    tagline: "Subtle shimmer built for daily wear.",
    description:
      "Add an instant pop of color and texture to your wrist without weighing you down. Hand-strung with precision-cut glass seed beads, faceted crystals, and metallic spacer accents, these bracelets are made to mix, match, and stack alongside your favorite watch or bangles.",
    details: [
      ["Materials", "Faceted glass crystals, uniform seed beads, tarnish-resistant clasp or high-elasticity stretch cord"],
      ["Sizing", "Custom-fitted to your exact wrist measurement (standard 6.5\"–7.5\"); bundle 3+ shades for a curated stack"],
    ],
    palette: ["#d9779a", "#f2c6d4", "#c9a227"],
  },
  {
    id: "stack-trio",
    name: "The Curated Stack (Set of 3)",
    category: "bracelets",
    status: "made",
    price: null,
    tagline: "Three coordinated shades, made to be worn together.",
    description:
      "Choose three shades and we’ll build a coordinated stack sized to your wrist—crystal, seed bead and metallic spacer textures that layer without tangling.",
    details: [
      ["Materials", "Faceted glass crystals, seed beads, metallic spacers, stretch cord or clasp"],
      ["Sizing", "Custom-fitted to your wrist measurement (standard 6.5\"–7.5\")"],
    ],
    palette: ["#2f7a6b", "#9fd3c7", "#f4eee2"],
  },
  {
    id: "sun-kissed-anklet",
    name: "The Sun-Kissed Beaded & Charm Anklet",
    category: "anklets",
    status: "ready",
    price: null,
    tagline: "Effortless detail for every step you take.",
    description:
      "From vacation sandals to everyday heels, our handcrafted anklets bring a delicate flash of color and shine to your ankle. Built with water-resistant, fade-proof beads and a secure adjustable clasp, each anklet drapes comfortably without snagging—whether worn solo or layered for a bold summer look.",
    details: [
      ["Materials", "Glass seed beads, pearl or shell accents, stainless steel waterproof clasp & extender"],
      ["Sizing", "Standard 9\"–10\" adjustable fit, or custom-sized to your exact ankle measurement"],
    ],
    palette: ["#e8a33d", "#f7e1b5", "#f4eee2"],
  },
  {
    id: "glow-waistbeads",
    name: "Custom Glow & Body-Contour Waistbeads",
    category: "waistbeads",
    status: "made",
    price: null,
    tagline: "Feminine, empowering, and tailored to your exact fit.",
    description:
      "Celebrate your body and track your silhouette with waistbeads crafted specifically for you. Hand-strung on strong, non-stretch cotton thread (for traditional permanent tie-on) or durable flexible wire (for removable clasp styles), our waistbeads drape smoothly against the skin without pinching or rolling. Available with glass seed beads, metallic accents, and glow-in-the-dark highlights.",
    details: [
      ["Closure Options", "Traditional tie-on string (45\"–50\" adjustable) or custom-sized screw/lobster clasp"],
      ["How to Order", "Select your preferred closure style and enter your exact waist measurement in inches"],
    ],
    palette: ["#b5452a", "#c9a227", "#7fd1b9"],
  },
  {
    id: "bespoke",
    name: "Bespoke Beaded Accessories & Custom Orders",
    category: "custom",
    status: "made",
    price: null,
    tagline: "Your vision, brought to life bead by bead.",
    description:
      "Looking for a coordinated jewelry set, bridal party accessories, custom beaded apparel trims, or keychains and phone charms? Share your theme, colors, or inspiration photos, and we will design a cohesive, one-of-a-kind piece tailored specifically for your event or brand.",
    details: [
      ["Custom Process", "Direct consultation via WhatsApp, bead color approval before assembly, and progress updates"],
    ],
    palette: ["#6c5a9e", "#d9779a", "#c9a227"],
  },
];
