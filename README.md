# Jessy’s Beads Collection — Website

A static website for Jessy’s Beads Collection, built from the *Website Content & Strategy Blueprint*. It is plain HTML, CSS and JavaScript with no build step, so it can be hosted on GitHub Pages, Netlify or any static host.

## Pages
| File | Contents |
|---|---|
| `index.html` | Hero, featured collections, 3-step custom order strip, best sellers, lookbook, craft reels, client love wall |
| `shop.html` | Full catalog with category and ready-to-ship / made-to-order filters, plus product detail pop-ups |
| `custom.html` | Custom request builder: item, colour swatches, outfit photo, size and fit, sent as a WhatsApp message |
| `workshops.html` | Beginner and group beading sessions, starter kit, WhatsApp sign-up |
| `care.html` | Size and fit guide, care guide, delivery and payment info |
| `about.html` | Brand story |

## Before going live, edit these
1. **`js/config.js`**: set `whatsapp` (digits only, e.g. `233241234567`), `instagram`, `tiktok`, `email`, and optional `craftReels` links.
2. **`js/products.js`**: add or edit products. Set `price` to a number (or leave `null` to show "Ask for price"), and add `image: "images/your-photo.jpg"` to replace the bead illustration with a real photo.
3. **Client love wall** (`index.html`): swap the placeholder slots for real customer photos when you have them.

## Publish on GitHub Pages
Repository **Settings → Pages → Deploy from a branch**, then pick the branch and the `/ (root)` folder.
