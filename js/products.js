/*
 * Product catalog. Add, remove or edit items here.
 *  - category: one of the keys in CATEGORIES below (they mirror the WhatsApp catalog collections)
 *  - status:   "ready" (ready-to-ship) or "made" (made-to-order)
 *  - price:    a number in SITE.currency, or null to show "Ask for price"
 *  - palette:  bead colours used for the illustration (swap for a photo via `image`)
 *  - image:    optional path to a real product photo, e.g. "images/clutch-gold.jpg"
 */
window.CATEGORIES = {
  "custom-bracelets": { label: "Customized Bracelets", art: "name" },
  bracelets: { label: "Bracelets (without names)", art: "bracelet" },
  mens: { label: "Male Collections", art: "bracelet" },
  bags: { label: "Bags & Purses", art: "bag" },
  waistbeads: { label: "Waist & Belly Beads", art: "waistbeads" },
  necklaces: { label: "Necklaces", art: "necklace" },
  anklets: { label: "Anklets", art: "anklet" },
  "tissue-cases": { label: "Beaded Tissue Cases", art: "tissue" },
  keyholders: { label: "Keyholders", art: "custom" },
};

window.PRODUCTS = [
  {
    id: "name-bracelet",
    name: "The Customized Name Bracelet",
    category: "custom-bracelets",
    status: "made",
    price: null,
    tagline: "Your name, your word, your colors—beaded just for you.",
    description:
      "Spell out a name, initials, a date or a meaningful word in letter beads, framed by seed beads and crystals in the colors you choose. A personal keepsake for yourself, and a thoughtful gift for birthdays, bridal parties and best friends.",
    details: [
      ["Materials", "Letter beads, glass seed beads, faceted crystal accents, stretch cord or tarnish-resistant clasp"],
      ["How to Order", "Send the name or word, your colors and your wrist measurement (standard 6.5\"–7.5\")"],
    ],
    palette: ["#ff6c00", "#f3e2a9", "#141414"],
  },
  {
    id: "mens-bracelet",
    name: "The Men’s Beaded Bracelet",
    category: "mens",
    status: "made",
    price: null,
    tagline: "Clean, bold beadwork made for him.",
    description:
      "Bracelets for men in deeper tones and larger beads—understated enough for every day, with a finish that holds up to daily wear. Wear one alone or pair two for a stack.",
    details: [
      ["Materials", "Larger glass, stone-look or matte beads, high-elasticity stretch cord or secure clasp"],
      ["Sizing", "Custom-fitted to your wrist measurement"],
    ],
    palette: ["#141414", "#6b4a2b", "#c9a227"],
  },
  {
    id: "tissue-case",
    name: "The Beaded Tissue Case",
    category: "tissue-cases",
    status: "made",
    price: null,
    tagline: "An everyday essential, dressed in beads.",
    description:
      "A structured beaded cover for your tissue box that turns a table, car dashboard or vanity into a statement. Woven bead by bead in your choice of colors to match your home, office or event décor.",
    details: [
      ["Materials", "Crystal/acrylic beads on reinforced thread, woven to hold its shape"],
      ["Customization", "Choose your colors or pattern; tell us the size of your tissue box"],
    ],
    palette: ["#ff6c00", "#f3e2a9", "#141414"],
  },
  {
    id: "keyholder",
    name: "The Beaded Keyholder",
    category: "keyholders",
    status: "made",
    price: null,
    tagline: "A little beadwork you carry every day.",
    description:
      "Handmade beaded keyholders and charms in your colors, with initials or names on request. Perfect for gifts, party favors and branded giveaways for your business or event.",
    details: [
      ["Materials", "Glass and acrylic beads, letter beads on request, sturdy metal key ring"],
      ["Bulk Orders", "Available in sets for events, souvenirs and brands—message us with quantities"],
    ],
    palette: ["#ff6c00", "#f3e2a9", "#141414"],
  },
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
];
