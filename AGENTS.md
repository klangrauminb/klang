# Klangraum in Balance - Project Guide

## Project Overview

**Klangraum in Balance** is a premium static website for a sound massage practice based in Cologne, Germany. The website presents the services of Eva Brandt, a certified Peter Hess® sound massage practitioner.

The site is built with modern web technologies, focusing on performance, accessibility, and a calm, professional aesthetic that reflects the nature of the wellness services offered.

---

## Technology Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | [Astro](https://astro.build) | ^4.5.0 |
| Styling | [Tailwind CSS](https://tailwindcss.com) | ^3.4.1 |
| Integration | @astrojs/tailwind | ^5.1.0 |
| Font | [Mulish](https://fonts.google.com/specimen/Mulish) (Google Fonts) | 400, 700 |
| Form Service | [Web3Forms](https://web3forms.com/) | - |
| Deployment | [Netlify](https://netlify.com) | - |
| Runtime | Node.js | 20 |

### Why These Technologies?

- **Astro**: Chosen for its excellent static site generation, minimal JavaScript output, and built-in performance optimizations
- **Tailwind CSS**: Utility-first CSS framework for rapid, consistent styling
- **Mulish**: Modern, friendly sans-serif font that aligns with the wellness brand aesthetic
- **Web3Forms**: Simple, serverless form handling without backend complexity
- **Netlify**: Static hosting with built-in CDN, atomic deploys, and edge functions support

---

## Project Structure

```
├── .astro/                 # Astro internal files (auto-generated)
├── dist/                   # Build output (auto-generated, git-ignored)
├── node_modules/           # Dependencies (git-ignored)
├── public/                 # Static assets (copied as-is to dist)
│   ├── images/             # Image assets directory (currently empty)
│   ├── ablauf.jpg          # Treatment procedure image
│   ├── hero.gif            # Hero section animation (sunset beach)
│   ├── kraftderklangmassage.jpeg  # Sound bowl image
│   ├── logo.jpg            # Brand logo
│   ├── ocean-waves.gif     # Ocean waves animation
│   ├── robots.txt          # SEO robots configuration
│   ├── sitemap.xml         # XML sitemap for search engines
│   ├── übermich.jpeg       # About page photo
│   └── wiesiewirkt.jpeg    # How it works image
├── src/
│   ├── components/         # Reusable Astro components
│   │   ├── Header.astro    # Site navigation (desktop + mobile)
│   │   └── Footer.astro    # Site footer with contact info
│   ├── layouts/            # Page layout templates
│   │   └── Layout.astro    # Main HTML layout with SEO, cookie banner
│   ├── pages/              # File-based routing (Astro convention)
│   │   ├── index.astro          # Homepage
│   │   ├── behandlung-kosten/   # Services/pricing page
│   │   ├── ueber-mich/          # About page
│   │   ├── kontakt/             # Contact page with form
│   │   ├── impressum/           # Legal imprint (German TMG)
│   │   ├── datenschutz/         # Privacy policy (GDPR)
│   │   └── 404.astro            # Custom 404 error page
│   └── env.d.ts            # TypeScript environment types
├── astro.config.mjs        # Astro configuration
├── tailwind.config.mjs     # Tailwind CSS configuration
├── netlify.toml            # Netlify deployment & headers config
└── package.json            # Node.js dependencies
```

---

## Build and Development Commands

All commands are run via npm:

```bash
# Install dependencies
npm install

# Start development server (hot reload)
npm run dev
# or
npm start

# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Development Server

- **Local URL**: http://localhost:4321
- **Netlify Dev URL**: http://localhost:8888 (when using Netlify CLI)

---

## Design System

### Colors

| Name | Hex | Usage |
|------|-----|-------|
| `klang-cream` | `#f9f7eb` | Primary background, light surfaces |
| `klang-green` | `#1f4c34` | Primary text, brand color, buttons |
| Header/Footer BG | `#9dae9f` | Header and footer background |
| Header Text | `#e7e8dc` | Header and footer text color |

### Typography

- **Primary Font**: Mulish (loaded from Google Fonts via GDPR-compliant loader)
- **Weights**: 400 (regular), 700 (bold)
- **Global Styles** (defined in `Layout.astro`):
  - All headings (`h1`-`h6`): UPPERCASE, font-weight 700, letter-spacing 0.08em
  - `h2` elements: Bottom border (1px), padding-bottom 12px, inline-block display
  - Body text (`p`, `li`): font-weight 400, line-height 1.8
  - Paragraphs: text-align justify, hyphens auto

### Layout Conventions

- **Max Width**: `max-w-6xl` (72rem / 1152px) for content containers
- **Spacing Scale**: Tailwind's default spacing (4px base)
- **Responsive Breakpoints**: Tailwind defaults (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)
- **Container Padding**: `px-4 sm:px-6 lg:px-8`

---

## Code Style Guidelines

### File Naming

- Components: PascalCase (e.g., `Header.astro`, `Footer.astro`)
- Pages: kebab-case (e.g., `ueber-mich.astro`, `datenschutz.astro`)
- Config files: kebab-case with `.mjs` extension

### Astro Component Structure

```astro
---
// Frontmatter: imports and data logic
import Layout from '../layouts/Layout.astro';
const currentYear = new Date().getFullYear();
---

<!-- Template: HTML with Astro directives -->
<Layout title="Page Title">
  <main id="main-content">
    <!-- Content here -->
  </main>
</Layout>

<script is:inline>
  // Client-side JavaScript (when needed)
</script>
```

### Accessibility Requirements

All components must include:

- **Semantic HTML**: Use `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>` appropriately
- **ARIA Labels**: Every interactive element needs `aria-label`
- **Focus States**: Visible focus indicators using `focus:ring-*`
- **Alt Text**: All images must have descriptive `alt` attributes
- **Section Headers**: Each `<section>` should have an `aria-labelledby` pointing to its heading
- **Color Contrast**: Maintain WCAG AA contrast ratios (verified via Tailwind defaults)

### Tailwind Class Ordering

Follow this convention for consistency:

1. Layout (`flex`, `grid`, `block`)
2. Positioning (`relative`, `absolute`, `sticky`)
3. Sizing (`w-*`, `h-*`, `max-w-*`)
4. Spacing (`m-*`, `p-*`, `gap-*`)
5. Typography (`text-*`, `font-*`)
6. Colors (`bg-*`, `text-*`, `border-*`)
7. Effects (`shadow-*`, `rounded-*`)
8. States (`hover:*`, `focus:*`, `md:*`)

---

## Key Features

### 1. Cookie Consent Banner

Located in `Layout.astro`. Features:
- Stores consent choice in `localStorage` (key: `cookie-consent`)
- Three options: "Zustimmen" (All), "Nur Essentiell", "Ablehnen"
- Auto-hides after user choice with animation
- Font loading from Google Fonts is GDPR-compliant (only loads after consent)
- No third-party tracking (privacy-first approach)

### 2. Contact Form

Located in `kontakt.astro`. Uses [Web3Forms](https://web3forms.com/):
- Form endpoint: `https://api.web3forms.com/submit`
- Requires access key configuration (currently `YOUR_WEB3FORMS_KEY`)
- Includes honeypot spam protection (`botcheck` field)
- Form fields: Name, Email, Message
- Success/error handling managed by Web3Forms
- WhatsApp contact link provided as alternative

### 3. Mobile Navigation

Located in `Header.astro`:
- Hamburger menu for mobile screens (< 768px)
- Smooth toggle animation
- Accessible with proper ARIA attributes (`aria-expanded`, `aria-controls`, `aria-label`)
- Icon changes between hamburger and close (X) states

### 4. SEO

Every page includes (managed via `Layout.astro`):
- Meta description
- Canonical URL
- Open Graph tags (og:title, og:description, og:url, og:locale, og:image)
- Twitter Card tags
- Theme color for mobile browsers (#1f4c34)
- Schema.org structured data (LocalBusiness JSON-LD)
- Favicon variants (SVG, PNG 32x32, Apple touch icon)

---

## Configuration Details

### Astro Configuration (`astro.config.mjs`)

```javascript
{
  site: 'https://klangraum-in-balance.de',
  integrations: [tailwind()],
  output: 'static',
  compressHTML: true,
  trailingSlash: 'always',     // All URLs end with /
  build: {
    format: 'directory',       // Creates /page/index.html
    assets: '_assets'          // Asset prefix for cache-busting
  }
}
```

### Tailwind Configuration (`tailwind.config.mjs`)

```javascript
{
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'klang-cream': '#f9f7eb',
        'klang-green': '#1f4c34',
      },
      fontFamily: {
        'sans': ['Mulish', 'system-ui', 'sans-serif'],
      },
    },
  },
}
```

### Netlify Configuration (`netlify.toml`)

- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Node Version**: 20
- **Security Headers**: 
  - X-Frame-Options: DENY
  - X-Content-Type-Options: nosniff
  - X-XSS-Protection: 1; mode=block
  - Referrer-Policy: strict-origin-when-cross-origin
  - Permissions-Policy: camera=(), microphone=(), geolocation=()
- **Caching**: Long-term caching for assets, fonts, and images (1 year)

---

## Deployment

### Netlify (Production)

The site auto-deploys from the main branch:

1. Push to main branch
2. Netlify triggers build (`npm run build`)
3. Build output goes to `dist/` directory
4. Site is deployed to https://klangraum-in-balance.de

### Manual Deploy

```bash
npm run build
# Deploy dist/ folder to your hosting provider
```

---

## Testing Strategy

This project follows a **manual testing approach** appropriate for a static marketing site:

### Pre-Deploy Checklist

- [ ] All pages render without errors (`npm run build`)
- [ ] Navigation works on desktop and mobile
- [ ] Mobile menu toggles correctly
- [ ] Cookie banner shows/hides properly
- [ ] Contact form submits correctly
- [ ] All images load
- [ ] No console errors
- [ ] Lighthouse score > 90 (Performance, Accessibility, Best Practices, SEO)

### Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

---

## Security Considerations

### Implemented

1. **Security Headers** (via Netlify):
   - `X-Frame-Options: DENY` - Prevents clickjacking
   - `X-Content-Type-Options: nosniff` - Prevents MIME sniffing
   - `X-XSS-Protection: 1; mode=block` - XSS filter
   - `Referrer-Policy: strict-origin-when-cross-origin`
   - `Permissions-Policy` - Restricts camera, microphone, geolocation

2. **Form Protection**:
   - Honeypot field (`botcheck`) to prevent spam
   - No sensitive data in client-side code

3. **GDPR Compliance**:
   - Cookie consent banner
   - Google Fonts only loaded after consent
   - Local storage for consent preferences only
   - Privacy policy and legal imprint pages

### Dependencies

Keep dependencies updated:

```bash
npm audit          # Check for vulnerabilities
npm update         # Update dependencies
```

---

## Environment-Specific Notes

### Contact Form Setup

The contact form requires a Web3Forms access key. To configure:

1. Sign up at https://web3forms.com/
2. Get your access key
3. Replace `YOUR_WEB3FORMS_KEY` in `src/pages/kontakt.astro`:

```astro
<input type="hidden" name="access_key" value="your-actual-key-here" />
```

### Sitemap Updates

When adding new pages, update `public/sitemap.xml` with the new URL entries.

**Note**: The sitemap currently contains outdated URLs (`/leistungen/` and `/ueber-uns/`) that should be updated to `/behandlung-kosten/` and `/ueber-mich/` respectively.

---

## Common Tasks

### Add a New Page

1. Create file in `src/pages/` (e.g., `neue-seite.astro`)
2. Use existing page as template:
   ```astro
   ---
   import Layout from '../layouts/Layout.astro';
   import Header from '../components/Header.astro';
   import Footer from '../components/Footer.astro';
   ---
   
   <Layout title="Page Title | Klangraum in Balance" description="...">
     <Header />
     <main id="main-content">
       <!-- Content -->
     </main>
     <Footer />
   </Layout>
   ```
3. Add navigation link in `Header.astro` if needed
4. Update `public/sitemap.xml`
5. Build and test

### Add a New Component

1. Create file in `src/components/` (PascalCase name)
2. Import and use in pages or layouts
3. Follow accessibility guidelines

### Update Styles

1. Edit `tailwind.config.mjs` for theme changes
2. Use Tailwind classes directly in components for one-off styles
3. For global typography changes, edit the `<style is:global>` block in `Layout.astro`

### Update Content

Content is hardcoded in Astro files. Edit the relevant `.astro` file in `src/pages/`.

---

## Troubleshooting

### Build Fails

```bash
# Clear caches and reinstall
rmdir /s /q node_modules dist .astro
npm install
npm run build
```

### Styles Not Applying

- Check Tailwind `content` config includes the file
- Restart dev server after adding new file patterns

### Images Not Loading

- Ensure images are in `public/` directory
- Use root-relative paths (`/image.jpg`, not `image.jpg`)

### Cookie Banner Not Appearing

- Check browser DevTools → Application → Local Storage
- Clear `cookie-consent` key to reset consent state

---

## Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [Web3Forms Documentation](https://web3forms.com/docs)
- [Mulish Font](https://fonts.google.com/specimen/Mulish)

---

## License

Proprietary - All rights reserved by Eva Brandt / Klangraum in Balance.
