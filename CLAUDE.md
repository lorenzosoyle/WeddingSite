# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static wedding website for Ben & Kathy's celebration in Brooklyn, NY on October 10, 2026. The site features a cosmic dark theme with interactive live editing capabilities and includes sections for details, venue, travel information, and FAQs.

**Tech Stack**: Pure HTML/CSS/JavaScript + Express.js dev server (no build tools required)
**Deployment**: Static hosting ready (GitHub Pages, Netlify, Vercel)

## Development Commands

- `npm run dev` or `npm start` - Start the local development server with live editing features
- `node server.js` - Run the Express server directly

The development server runs on port 3000 by default and includes special editing endpoints at `/__edit/ping` and `/__edit/save` when `ENABLE_EDITOR` is enabled.

## Architecture

### Core Structure
- **Frontend**: Static HTML/CSS/JS with no build process required
- **Backend**: Minimal Express.js server for development and live editing
- **Live Editing**: Sophisticated in-browser editing system with persistence

### Key Files
- `index.html` - Main wedding website with all content sections
- `server.js` - Express server with optional live editing endpoints  
- `assets/js/main.js` - Complex editor system with localStorage persistence, File System Access API integration, and live editing features
- `assets/css/styles.css` - Cosmic dark theme with CSS custom properties

### Content Sections
The website is organized into distinct sections:
- Hero section with names, date, location
- Details section with save-the-date information
- Venue section with embedded Google Maps
- Travel & Stay section with airports, transit, hotels
- FAQs section with collapsible details
- RSVP section with contact information

## Live Editing System

The site features a sophisticated live editing system (`assets/js/main.js`) with:

### Features
- **Content Editing**: Click "Edit Page" to enable contentEditable mode
- **Persistence**: Automatic saving to localStorage every 2 seconds
- **File System Integration**: Chrome/Edge File System Access API support
- **Server Sync**: Optional server-side persistence when dev server is running
- **Formatting Tools**: Text alignment, line spacing, letter spacing, word spacing controls
- **Drag & Drop**: Venue map can be repositioned within content
- **Keyboard Shortcuts**: Cmd/Ctrl+S to manually save

### Editor State Management
- Editing state persists across page reloads (disabled by default)
- Version-based content invalidation prevents stale data
- Multiple edit toggles sync state (header, floating button)
- Automatic cleanup of editor UI elements when saving

## Customization

### Content Updates
All content is directly editable in `index.html`:
- Names, date, location: `.hero` section and `#details`
- Schedule: `#schedule` list items (if added)
- Venue details: `#venue` section, replace Google Maps embed
- Travel info: `#travel` cards
- RSVP: `#rsvp` section, update email or add form embed

### Styling
- Theme colors defined in CSS custom properties in `styles.css`
- Typography: Cinzel for headings, Inter for body text
- Background: Cosmic theme with noise texture and custom images
- Layout: Responsive design with mobile navigation

## Environment Variables

- `ENABLE_EDITOR` - Set to "0" to disable editing endpoints (default: enabled)
- `PORT` - Server port (default: 3000)

## Claude Code Workflows

### Common Development Tasks

**Content Updates**: Use the Edit tool to modify `index.html` directly. Key sections:
- Hero content: `index.html:42-53` (names, date, location)  
- Event details: `index.html:55-76` (save the date info)
- Venue info: `index.html:79-98` (location, map, transit)
- Travel details: `index.html:100-128` (airports, hotels, navigation)
- FAQs: `index.html:131-147` (Q&A pairs in `<details>` elements)
- RSVP: `index.html:149-159` (contact information)

**Styling Changes**: Edit `assets/css/styles.css`
- Color scheme: CSS custom properties at `:root` (lines 2-14)
- Typography: Font families defined at line 43
- Layout: Responsive breakpoints and component styles

**Testing Changes**: 
1. Use `Bash` tool: `npm run dev` to start server
2. Visit `http://localhost:3000` to preview
3. Test live editing features by clicking "Edit Page"

### Debugging the Live Editor

If the live editing system has issues:

**Check Editor State**: Look for these elements in `main.js`:
- `window.__WSEditorLoaded` should be `true`
- Editor toggle buttons should sync state properly  
- `localStorage.getItem('editing-mode')` shows current state

**Server Integration**: Verify endpoints are working:
- `curl http://localhost:3000/__edit/ping` should return `{"ok":true}`
- Check `ENABLE_EDITOR` environment variable is not "0"

**File System Access**: Chrome/Edge only feature
- Requires HTTPS in production or localhost in development
- Uses IndexedDB to persist folder handles
- Fallback to localStorage + server save if unavailable

### File Analysis Patterns

When asked to examine the codebase:
1. Use `Glob` tool to find files by pattern (e.g., `**/*.js`, `**/*.css`)
2. Use `Read` tool to examine specific files
3. Use `Grep` tool to search for specific content patterns
4. Check `index.html` for the main content structure
5. Review `main.js` for JavaScript functionality
6. Examine `styles.css` for styling and theme definitions

### Content Structure Patterns

The wedding site follows these conventions:
- **Sections**: Each major content area has `id` attribute for navigation
- **Responsive Images**: Uses Google Fonts and local image assets  
- **Semantic HTML**: Proper heading hierarchy, `<section>`, `<nav>`, `<main>`
- **Accessibility**: ARIA labels, keyboard navigation support, color contrast
- **Meta Tags**: SEO and social sharing optimized

## Browser Compatibility

- Modern browsers for live editing features
- File System Access API requires Chrome/Edge for folder saving
- Fallback clipboard handling for older browsers
- Mobile-responsive design with touch-friendly navigation

## Deployment

The site is designed for static hosting:
- GitHub Pages: Push to repo, enable Pages from main branch
- Netlify: Drag-and-drop deployment or repo connection  
- Vercel: Import repo with "Other" framework preset

For production deployments, the live editing system can be disabled by setting `ENABLE_EDITOR=0` or removing the meta tag `enable-server-save`.