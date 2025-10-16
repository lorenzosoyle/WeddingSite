# Ben & Kathy — Wedding Website

Static, responsive wedding website for Ben & Kathy's celebration in Brooklyn, NY on October 10, 2026.

🌐 **Live Site**: [kathyandben.com](https://kathyandben.com)

## Features

- **Cosmic Dark Theme** with gradient text and cosmic background imagery
- **Polaroid Photo Gallery** with horizontal scrolling carousel and hero image
- **Contact Form** integrated with Google Sheets for guest information collection
- **Responsive Design** optimized for desktop, tablet, and mobile
- **Social Sharing** with Open Graph and Twitter Card meta tags
- **Accessibility** features including ARIA labels and keyboard navigation

## Tech Stack

- Pure HTML/CSS/JavaScript (no build tools required)
- Google Fonts: Playfair Display, Lexend, Caveat
- Form submission handling
- Static hosting ready

## Quick Start

### Local Development

1. Open `index.html` directly in a browser, or
2. Run a local server (optional):
   ```bash
   npm install
   npm run dev
   ```
   Server runs on `http://localhost:3000`

### Editing Content

All content is directly editable in `index.html`:

- **Names, date, location**: Lines 24-29 (hero section)
- **Save the date details**: Lines 42-46 (#details section)
- **Venue information**: Lines 51-67 (#venue section)
- **Travel & hotels**: Lines 69-93 (#travel section)
- **FAQs**: Lines 95-113 (#faqs section)
- **Photo carousel**: Lines 115-152 (#photo-carousel section)
- **Contact form**: Lines 154-185 (#contact section)

### Styling

Customize the theme in `assets/css/styles.css`:

- **Color scheme**: Lines 2-14 (CSS custom properties)
- **Typography**: Defined at line 45
- **Polaroid frames**: Lines 105-173, 271-335
- **Responsive breakpoints**: Lines 354-373

### Adding Photos

1. Add images to `assets/img/`
2. Add to carousel in `index.html` (section #photo-carousel)
3. Landscape photos will be auto-detected and styled appropriately

## Features Breakdown

### Polaroid Photo Gallery

- **Hero polaroid**: Single framed photo with custom caption
- **Carousel**: Horizontal scrolling gallery with 6+ photos
- **Auto-detection**: JavaScript automatically detects landscape vs portrait orientation
- **Styling**: White frames with pins, hover effects, and rotation

### Contact Form

Custom contact form with the following features:

- 5 fields: name, email, mailing address, dietary restrictions, hotel interest
- Loading state with animated heart
- Success/error messaging
- Form validation
- Backend integration ready

### Responsive Design

- **Desktop**: 3-column card layout, full navigation
- **Tablet** (< 900px): 2-column layout
- **Mobile** (< 680px): Single column, hamburger menu, optimized images

## Deployment

### GitHub Pages

1. Push to your GitHub repository
2. Settings → Pages → Deploy from branch: `main` / root
3. Site live at `https://<username>.github.io/<repo>/`

### Netlify

1. Connect repository or drag-and-drop folder
2. Build settings: None (static site)
3. Publish directory: root

### Vercel

1. Import repository
2. Framework preset: "Other"
3. Output directory: root

### Custom Domain

Update the Open Graph URLs in `index.html` lines 12, 19 if using a custom domain.

## File Structure

```
WeddingSite/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── styles.css      # All styles
│   ├── js/
│   │   └── main.js         # Form handling, carousel logic
│   └── img/
│       ├── favicon.svg
│       ├── NewHeart.png    # Ampersand image
│       ├── KnB.jpg         # Hero polaroid photo
│       ├── Carousel*.jpg   # Carousel photos
│       ├── bg-noise.svg    # Background texture
│       └── ChatGPT Image...png  # Background image
├── server.js               # Optional dev server
├── package.json
├── CLAUDE.md              # Development instructions
└── README.md              # This file
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile Safari and Chrome
- Smooth scrolling and CSS Grid/Flexbox required
- File System Access API used for editor mode (optional feature)

## Accessibility

- Semantic HTML5 structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast meets WCAG AA standards
- Alt text on all images
- Screen reader friendly

## Credits

Built with love for Ben & Kathy's wedding celebration.

## License

Personal use only for Ben & Kathy's wedding.
