# KGEE 2026 Website - Design System & Developer Guide

## Color Palette

### Primary Colors
```css
--navy: #12336B;              /* Primary corporate blue from KGEE logo "2026" */
--navy-dark: #0C2450;         /* Darker navy for backgrounds and footer */
```

### Accent Colors
```css
--leaf: #4CAF2E;              /* Bright green for highlights (limited use) */
--leaf-soft: #6DBE46;         /* Softer green for secondary accents */
--gold: #F5A623;              /* Golden sun color for special highlights */
--gold-deep: #E08A0B;         /* Deeper gold for hover states */
```

### Neutral Colors
```css
--ink: #16261A;               /* Deep text color */
--slate: #5A6B60;             /* Medium gray for body text */
--line: #E4EBE4;              /* Light dividers and borders */
--mist: #F4F8F3;              /* Very light background wash */
--white: #FFFFFF;             /* Pure white */
```

## Typography

### Font Families
```css
--f-display: 'Sora', sans-serif;    /* Headers, titles, bold text */
--f-body: 'Manrope', sans-serif;    /* Body copy, UI elements */
```

### Font Usage

**Display (Sora)**
- H1: 2.4rem - 4rem (responsive)
- H2: 1.9rem - 2.9rem (responsive)
- H3: 1.1rem - 1.2rem
- H4: 1rem
- Subheadings: 1.05rem - 1.4rem
- All at weight 700-800

**Body (Manrope)**
- Body text: 0.95rem - 1.1rem
- Labels: 0.78rem - 0.9rem
- Small text: 0.68rem - 0.82rem
- All at weight 400-600

## Spacing System

### Base Unit
```css
Base: 8px
Gap sizes: 4px, 8px, 12px, 16px, 20px, 24px, 28px, 32px, 40px, 48px, 56px
```

### Section Spacing
```css
Padding: 60px (mobile) / 96px (desktop)
Margins: 14px, 16px, 22px, 28px, 32px, 48px
```

## Shadow System

```css
--shadow: 0 18px 50px -22px rgba(18, 51, 107, 0.28);       /* Large */
--shadow-sm: 0 8px 24px -14px rgba(18, 51, 107, 0.25);     /* Small */
```

## Border Radius
```css
--r: 14px;        /* Standard rounded corners */
8px - 12px        /* Small elements */
14px - 20px       /* Cards and sections */
100px             /* Pill-shaped buttons */
```

## Animation Principles

### Duration
- Quick interactions: 0.2s
- Standard animations: 0.3s - 0.8s
- Page transitions: 0.35s - 0.8s

### Easing
```css
ease              /* Standard easing */
ease-in-out       /* Smooth, natural motion */
cubic-bezier(.4, 0, .2, 1)  /* Material design */
```

### Animation Types

**Entrance Animations**
- `fadeInUp` - 0.8s ease (for reveals on scroll)
- `slideInLeft` - 0.8s ease (left-side elements)
- `slideInRight` - 0.8s ease (right-side elements)

**Hover Effects**
- `translateY(-2px)` - Lift on hover
- `transform: scale(1.05)` - Subtle scale
- `transform: scale(1.1)` - Larger scale for icons

**State Changes**
- `max-height` - FAQ expand/collapse
- `opacity` - Fade in/out
- `transform: scaleX()` - Line animations

## Component Specifications

### Buttons

**Primary Button**
```css
Background: --navy
Color: white
Padding: 15px 28px (or 11px 18px for small)
Border-radius: 12px
Font-weight: 700
Box-shadow: 0 12px 26px -12px rgba(18, 51, 107, 0.6)
Hover: --navy-dark, translateY(-2px)
```

**Gold Button**
```css
Background: --gold
Color: #1a1200
Similar structure to primary
Hover: --gold-deep, translateY(-2px)
```

**Outline Button**
```css
Background: transparent
Border: 2px solid --navy
Color: --navy
Hover: background --navy, color white
```

### Cards

**Standard Card**
```css
Background: white
Border: 1px solid --line
Border-radius: 14px
Padding: 24px - 44px
Box-shadow: --shadow-sm
Hover: transform translateY(-4px to -8px), stronger shadow
```

### Form Elements

**Input/Textarea/Select**
```css
Padding: 12px 14px
Border: 1px solid --line
Border-radius: 8px
Font-size: 0.95rem
Focus: border-color --leaf, box-shadow with 3px rgba glow
```

### Navigation Link

**Active State**
```css
Color: --navy
Background: --mist
Underline: animated scaleX transform
```

## Responsive Breakpoints

```css
Desktop: 1040px and above
Tablet: 640px - 1040px
Mobile: Below 640px
Extra Small: Below 480px
```

### Grid Adjustments
```css
Desktop: Multi-column grids (3-4 columns)
Tablet: 2-column grids
Mobile: Single column
```

## Code Style Guidelines

### HTML
- Use semantic HTML5 elements (header, nav, section, footer)
- Use aria labels for accessibility
- Use data attributes for JavaScript hooks
- Keep indentation consistent (2 spaces)

### CSS
- Use CSS variables for colors, spacing, and typography
- Use class selectors (avoid ID selectors)
- Group related properties
- Use meaningful class names (BEM-inspired)
- Mobile-first approach in media queries

### JavaScript
- Use vanilla JS (no jQuery)
- Use const/let (no var)
- Use arrow functions when appropriate
- Add comments for complex logic
- Use semantic variable names

## File Organization

```
kgee-website/
├── HTML files (5 total)
├── styles.css (single stylesheet)
├── script.js (single JavaScript file)
├── assets/
│   └── Logo files
├── README.md
├── DEPLOYMENT.md
└── DESIGN_SYSTEM.md (this file)
```

**Note:** No build process required. This is a modern, vanilla approach suitable for static hosting.

## Performance Targets

- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Page size: < 100KB (excluding images)

## Common Customizations

### Change Primary Color
1. Update `--navy` and `--navy-dark` in styles.css
2. Test contrast ratios for accessibility
3. Update animated background gradients

### Update Typography
1. Import new Google Font in HTML
2. Update CSS font variables
3. Adjust rem sizes if needed
4. Test responsive scaling

### Add New Page
1. Copy structure from existing page
2. Add to navigation links (all 5 pages)
3. Update mobile menu
4. Add active state logic in script.js
5. Test all links

### Modify Animation
1. Edit animation duration in CSS
2. Update animation-delay values for stagger
3. Test prefers-reduced-motion respects
4. Verify smooth performance

## Accessibility Guidelines

- All buttons have focus states
- All links are keyboard accessible
- Color contrast meets WCAG AA standards
- Images have alt text (or aria-hidden if decorative)
- Forms have associated labels
- Respects prefers-reduced-motion media query

## Browser Compatibility

- CSS Grid: Full support
- CSS Flexbox: Full support
- CSS Custom Properties: Full support
- Intersection Observer: Full support (with polyfill if needed)
- ES6 JavaScript: Full support

## Development Tips

1. **Testing**: Open all pages and test navigation
2. **Mobile Testing**: Use browser DevTools or real devices
3. **Accessibility**: Use browser accessibility inspector
4. **Performance**: Use Lighthouse in Chrome DevTools
5. **Cross-browser**: Test on multiple browsers if possible

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Logo not showing | Check assets/ path, verify file exists |
| Forms not submitting | Check script.js form IDs match HTML |
| Mobile menu stuck | Clear browser cache, check z-index |
| Countdown wrong | Update target date in script.js |
| Animation janky | Check GPU acceleration with `will-change` |
| Fonts not loading | Check Google Fonts link in HTML head |

## Version History

- **v1.0** - Initial launch (July 2026)
  - Multi-page architecture
  - Navy blue color scheme
  - All core pages and functionality
  - Mobile responsive design
  - Accessibility features

## Contact for Questions

Refer to README.md and DEPLOYMENT.md for additional guidance.
