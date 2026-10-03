# Velour Beauty

A three-page salon and academy site with a services/price list page and an appointment form that composes an email.

**Live:** https://velour-salon-kohl.vercel.app

Source code is in this repo — hand-written HTML/CSS/vanilla JS, no build step. Serve the folder locally (see below).

## About

Velour Beauty is a demo salon site: a three-page build for a salon and training academy, covering a homepage, a full services and price list, and a contact/booking page. Like the restaurant build in this set, it is fully static — the appointment form reads the visitor's fields and hands a formatted request to their mail client.

## Tech stack

| | |
|---|---|
| Markup | HTML5, three pages |
| Styling | `css/style.css`, CSS custom properties |
| Script | `js/main.js` — vanilla JS, one IIFE, no dependencies |
| Fonts | Google Fonts |
| Images | 9 local JPEGs in `img/` |
| Build | None. No `package.json`, no dependencies |
| Hosting | Vercel, static hosting |

## Features

Everything below is implemented in the repo.

- **Three pages** — `index.html`, `services.html`, `contact.html` — sharing one stylesheet and one script.
- **Appointment form** (`#book`) with name, service, date and note fields; on submit it builds a formatted appointment request, opens the mail client with subject and body filled in, then disables the button and reveals a confirmation note. `required` attributes cover required fields.
- **Services and price list** — makeup, hair, skin and nails, plus academy courses, priced in PKR.
- **Mobile navigation** — hamburger toggle that flips `aria-expanded` and closes when a link is tapped.
- **Page-load splash** — a `#sp` overlay is removed shortly after load.
- **Scroll reveal** — `.rise` elements fade in through `IntersectionObserver` (threshold 0.15), then unobserve.
- **Header shadow on scroll** past 8px on the sticky header.
- **Responsive** — breakpoints at 900px and 520px.
- Google Maps link on the contact page.

## Project structure

```
.
├── index.html        # homepage
├── services.html     # services + price list
├── contact.html      # contact + appointment form
├── css/
│   └── style.css
├── js/
│   └── main.js
├── img/              # hero.jpg, studio.jpg, bridal.jpg, makeup.jpg, hair.jpg, facial.jpg, nails.jpg, spa.jpg
├── favicon.svg
├── .gitignore        # ignores .vercel
└── .vercel/          # Vercel project link (projectName: velour-salon)
```

## Local preview

No install step. The pages cross-link each other and load `css/` and `js/` by relative path, so serve them over HTTP:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Notes

- **Practice build.** The salon, its address, opening hours and price list are sample content written for the demo — not a real business and not a delivered client project.
- `img/spa.jpg` ships in the repo but is not currently referenced by any page.
- The booking form has no backend; delivery is via `mailto:`. Swapping it for a real endpoint means replacing the `mailto:` branch in `js/main.js`.
