# KGEE 2026 — Kerala Green Energy Expo Website

A premium, multi-page B2B exhibition website for the Kerala Green Energy Expo 2026. Built with semantic HTML5, responsive CSS, and vanilla JavaScript.

## Project Structure

```
kgee-website/
├── index.html                 # Home page
├── why-kgee.html             # Why Exhibit / Why Visit combined page
├── industries.html           # Industries & Sectors showcase
├── gallery.html              # Gallery page
├── contact.html              # Contact & FAQ page
├── styles.css                # Shared stylesheet
├── script.js                 # Shared JavaScript
├── assets/                   # Assets folder
│   ├── kgee-logo.png        # Official KGEE 2026 logo
│   └── kgee-logo-white.png  # White version for footer
└── README.md                 # This file
```

## Features

### Multi-Page Architecture
- **Home** - Hero section with countdown timer, event highlights, stats, and CTAs
- **Why KGEE 2026** - Combined "Why Exhibit" and "Why Visit" content
- **Industries** - Comprehensive showcase of 36+ industry sectors organized by category
- **Gallery** - Professional gallery grid with lightbox functionality
- **Contact** - Contact information, inquiry form, and FAQ accordion

### Design Highlights
- **Premium Blue-Dominant Color Scheme**: Dark navy (#12336B) from official KGEE logo replaces dark green throughout
- **Green Accent Usage**: Limited strategic use of green (#4CAF2E) for clean-energy highlights only
- **Animated Background**: Subtle, continuous animated gradients across all pages
- **Page Entry Animations**: Distinct, staggered animations for each page
- **Hover Interactions**: Polished micro-interactions on buttons, cards, and interactive elements
- **Responsive Design**: Mobile-first approach with smooth breakpoints for all devices

### Functionality
- Header with sticky navigation and mobile hamburger menu
- Countdown timer updating in real-time
- Smooth page transitions between HTML files
- Reveal animations on scroll with Intersection Observer
- FAQ accordion with smooth expand/collapse
- Live forms with validation feedback
- Newsletter subscription
- Gallery with lightbox
- Keyboard navigation and accessibility features

## Setup Instructions

### 1. Add Logo Files

Place the official KGEE 2026 logo files in the `assets/` folder:
- `assets/kgee-logo.png` - Full color logo (used in header)
- `assets/kgee-logo-white.png` - White version for footer

The logo files should maintain the original aspect ratio and design.

### 2. File Linking

All internal navigation links properly load full HTML pages:
- Navigation links load complete pages (not anchors)
- Same-tab navigation (no `target="_blank"`)
- Smooth page transitions with CSS fade effect

### 3. Form Handling

The forms include basic client-side handling:
- Register to Visit form
- Book a Stall form
- General Contact form
- Newsletter subscription

**To connect to your backend:**
Edit `script.js` and modify the `handleForm` function to send data to your API endpoint.

## Customization

### Color Scheme
Edit the CSS variables in `styles.css`:
```css
:root {
  --navy: #12336B;           /* Primary corporate blue */
  --navy-dark: #0C2450;      /* Darker navy */
  --leaf: #4CAF2E;           /* Green accent */
  --gold: #F5A623;           /* Gold accent */
  /* ... other variables */
}
```

### Typography
The site uses Google Fonts (Sora and Manrope). Customize font choices in the HTML `<head>` section and CSS `--f-display` and `--f-body` variables.

### Content Updates
- Update event details in the countdown timer date (2026-11-19)
- Edit section content directly in HTML files
- Modify contact information in `contact.html`
- Update footer links and social media

### Adding New Pages
To add a new page:
1. Create a new `.html` file with the standard template structure
2. Include header, navigation, and footer from existing pages
3. Link it in all navigation menus
4. Maintain consistent styling and animations

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

## Performance Considerations

- CSS animations use `transform` and `opacity` for GPU acceleration
- Intersection Observer for efficient reveal animations
- No heavy JavaScript dependencies
- Optimized for Core Web Vitals

## Accessibility Features

- Semantic HTML5 structure
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators on interactive elements
- Color contrast compliance
- Respects `prefers-reduced-motion` preference

## Mobile Responsiveness

Breakpoints:
- Desktop: 1040px and above
- Tablet: 640px - 1040px
- Mobile: Below 640px
- Extra small: Below 480px

Mobile features:
- Hamburger menu navigation
- Stacked layout for forms and grids
- Touch-friendly button sizes
- Optimized typography scaling

## Navigation Structure

### Main Navigation
- Home → `index.html`
- Why KGEE 2026 → `why-kgee.html`
- Industries → `industries.html`
- Gallery → `gallery.html`
- Contact → `contact.html`

### CTA Buttons (present on all pages)
- Register to Visit → `index.html#register-visit`
- Book a Stall → `index.html#book-stall`

All internal links use same-tab navigation for seamless user experience.

## Removed Sections

The following sections from the original website have been completely removed:
- Past Events
- Conference/Speakers
- Event Schedule/Agenda

These have been cleanly removed from the codebase to maintain a focused, modern website.

## File Sizes & Performance

- `styles.css`: ~45 KB (complete styling with animations)
- `script.js`: ~12 KB (all functionality, vanilla JS)
- HTML files: 8-15 KB each (semantic, clean markup)
- **Total: ~100 KB** (excluding images)

## Support & Maintenance

### Common Updates
1. **Update countdown date**: Edit line in `script.js` with target date
2. **Change contact info**: Update `contact.html`
3. **Add gallery images**: Place in `assets/` and update `gallery.html`
4. **Update forms**: Connect to backend in `script.js`

### Debugging
Check browser console for any errors. The site uses modern JavaScript (ES6+) but includes fallbacks for older browsers.

## License & Credits

KGEE 2026 — Kerala Green Energy Expo
Business India Exhibitions

Website designed and developed as a premium B2B exhibition platform.

---

**Last Updated**: July 2026
**Status**: Production Ready
