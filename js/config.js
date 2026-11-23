/*
 * Site settings — edit these values to update contact details everywhere on the site.
 */
window.SITE = {
  name: "Jessy’s Beads Collection",
  // WhatsApp number in international format, digits only (e.g. 233241234567 for Ghana).
  // Leave empty until the real number is ready: buttons will then open WhatsApp without a preset contact.
  whatsapp: "233557419718",
  instagram: "https://www.instagram.com/jessy_beads.collection/",
  tiktok: "https://www.tiktok.com/@jessy_beads.collection",
  email: "",
  currency: "GH₵",
  // Short looping craft videos (TikTok or Instagram post URLs) shown on the homepage.
  craftReels: [
    // { title: "Weaving a crystal clutch", url: "https://www.tiktok.com/@yourhandle/video/123" },
  ],
};

/** Build a WhatsApp link with a prefilled message. */
window.waLink = function (message) {
  const base = SITE.whatsapp ? `https://wa.me/${SITE.whatsapp}` : "https://wa.me/";
  return `${base}?text=${encodeURIComponent(message)}`;
};
