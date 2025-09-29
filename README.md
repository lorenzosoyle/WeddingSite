Ben & Kathy — Wedding Website
================================

Static, responsive wedding website for Ben & Kathy's celebration in Brooklyn, NY on October 10, 2026.

Quick Start
-----------

- Open `index.html` in a browser.
- Edit text directly in `index.html` to customize details (date, schedule, venue, FAQs).
- Styles live in `assets/css/styles.css`; small behavior tweaks in `assets/js/main.js`.

Customize Content
-----------------

- Names, date, and location: `index.html: <section class="hero">` and `#details`.
- Schedule: `index.html: #schedule` list items.
- Venue and map: `index.html: #venue`. Replace the Google Maps iframe with your venue’s embed code.
- Travel & hotels: `index.html: #travel` cards.
- Registry: `index.html: #registry` links. Replace `href="#"` with your registry URLs.
- RSVP: `index.html: #rsvp`
  - Option A — Email: Replace `ben-and-kathy-rsvp@example.com` with your email.
  - Option B — Form embed: Paste an embedded form (e.g., Google Forms) inside the `#rsvp` section.

Branding & Styling
------------------

- Colors and fonts are defined at the top of `assets/css/styles.css`.
- The site uses Playfair Display (headings) and Inter (body) via Google Fonts.
- Favicon: `assets/img/favicon.svg`.

Deploy Options
--------------

- GitHub Pages:
  1. Create a repo and push these files.
  2. In repo settings → Pages → Build from branch → `main` and `/` root.
  3. Your site will be live at `https://<username>.github.io/<repo>/`.

- Netlify:
  1. Drag-and-drop the folder into the Netlify dashboard, or connect your repo.
  2. No build command needed; publish directory is the repo root.

- Vercel:
  1. Import the repo into Vercel.
  2. Framework preset: “Other”. Output/public directory is the repo root.

Accessibility & Notes
---------------------

- The mobile nav is keyboard accessible and toggles via the button in the header.
- Color contrast targets WCAG AA for text on primary surfaces.
- Smooth scrolling is enabled with CSS; anchor links navigate between sections.

License
-------

This project is provided as-is for personal use by Ben & Kathy.

