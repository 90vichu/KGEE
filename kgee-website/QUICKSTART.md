# KGEE 2026 Website - Quick Start Guide

## 🚀 Get Started in 5 Minutes

### What You Need
- Web server or local development environment
- The KGEE 2026 logo files
- Text editor (VS Code recommended)
- Modern web browser

### Step 1: Extract Files
All files are ready to use. No build process needed!

```
kgee-website/
├── index.html              ← Home page
├── why-kgee.html          ← Why exhibit/visit
├── industries.html        ← Industry showcase
├── gallery.html           ← Photo gallery
├── contact.html           ← Contact & FAQ
├── styles.css             ← All styles
├── script.js              ← All functionality
└── assets/
    ├── kgee-logo.png      ← ADD THIS
    └── kgee-logo-white.png ← ADD THIS
```

### Step 2: Add Logo Files
1. Download the official KGEE 2026 logo
2. Save as `assets/kgee-logo.png`
3. Create white version: `assets/kgee-logo-white.png`
4. Done! ✓

### Step 3: Local Testing
```bash
# Using Python (most systems have this)
python -m http.server 8000

# Or using Node.js
npx http-server

# Or using PHP
php -S localhost:8000
```

Then open: `http://localhost:8000`

### Step 4: Deploy
Choose your hosting:
- **Easiest**: Netlify (drag & drop)
- **Popular**: Vercel, GitHub Pages
- **Traditional**: Your web host via FTP

See DEPLOYMENT.md for detailed steps.

## 📋 What's Included

✅ **5 Multi-Page Website**
- Home with hero, countdown, highlights
- Why KGEE combined page
- Industries showcase (36+ sectors)
- Gallery with lightbox
- Contact with FAQ

✅ **Premium Design**
- Navy blue (#12336B) from logo
- Green accents only where needed
- Smooth animations on all pages
- Mobile responsive

✅ **Full Functionality**
- Countdown timer (updates live)
- Sticky navigation
- Mobile hamburger menu
- Working forms
- FAQ accordion
- Gallery lightbox
- Smooth page transitions

✅ **Developer Friendly**
- No dependencies needed
- Clean, semantic HTML
- Single CSS file
- Single JS file
- Well organized code

## 🎨 Customization Checklist

Quick changes you might want to make:

### 1. Event Information
- [ ] Update event date (if different from Nov 19-21, 2026)
- [ ] Update venue/location
- [ ] Update phone number
- [ ] Update email address

**Files to edit:** `contact.html`, `index.html`

### 2. Company Information
- [ ] Update company name (if not Business India Exhibitions)
- [ ] Update social media links
- [ ] Update company website

**Files to edit:** `contact.html`, `footer` in all pages

### 3. Content
- [ ] Review all copy for accuracy
- [ ] Update benefits and features
- [ ] Personalize industry descriptions
- [ ] Update FAQ answers

**Files to edit:** All HTML files

### 4. Forms
- [ ] Connect registration forms to your backend
- [ ] Set up email notifications
- [ ] Configure form validation

**Files to edit:** `script.js` - `handleForm` function

### 5. Analytics
- [ ] Add Google Analytics
- [ ] Add conversion tracking
- [ ] Set up form submission tracking

**Files to edit:** Add to `<head>` of all pages

## 🔧 Common Customizations

### Change Primary Color
```css
/* In styles.css, update these: */
--navy: #12336B;        /* Change this */
--navy-dark: #0C2450;   /* And this */
```

### Update Logo Size
```css
/* In styles.css: */
.brand img {
  height: 56px;  /* Change this */
}
```

### Modify Button Text
Just edit the HTML:
```html
<a href="#register-visit" class="btn btn-primary">
  Your Text Here  <!-- Change this -->
</a>
```

### Change Animation Speed
```css
/* In styles.css */
animation: fadeInUp 0.8s ease both;  /* 0.8s is duration */
transition: all 0.3s ease;           /* 0.3s is duration */
```

## 📱 Testing Checklist

Before going live:

### Desktop
- [ ] Test in Chrome
- [ ] Test in Firefox
- [ ] Test in Safari
- [ ] Test in Edge
- [ ] Check all links work
- [ ] Test all forms

### Mobile
- [ ] Test on iPhone
- [ ] Test on Android
- [ ] Test hamburger menu
- [ ] Test on tablet
- [ ] Check text is readable
- [ ] Check buttons are clickable

### Functionality
- [ ] Countdown timer works
- [ ] Forms submit
- [ ] Navigation links work
- [ ] Animations smooth
- [ ] No console errors
- [ ] FAQ accordion works

### Performance
- [ ] Page loads in < 2 seconds
- [ ] Animations are smooth
- [ ] Forms respond immediately
- [ ] No lag on scroll

## 🚀 Deployment Steps

### Option A: Netlify (Simplest)
1. Go to netlify.com
2. Sign up for free
3. Drag & drop the `kgee-website` folder
4. Done! Your site is live

### Option B: Your Web Host
1. Upload files via FTP/SFTP
2. Make sure index.html is in root
3. Visit your domain
4. Done!

### Option C: GitHub Pages
1. Create GitHub repository
2. Push all files
3. Enable GitHub Pages in settings
4. Done! (Domain: username.github.io/kgee-website)

## 📞 Quick Reference

### File Purposes
- `index.html` - Home page
- `styles.css` - All styling (no component CSS files)
- `script.js` - All functionality (forms, animations, menu)
- `assets/` - Logo images only

### Key Features
- **Countdown**: Updates automatically, real-time
- **Forms**: Pre-built with validation
- **Mobile Menu**: Works on all sizes
- **Animations**: No external libraries
- **Responsive**: Works on all devices

### Common File Paths
```
Logo: assets/kgee-logo.png
Logo (white): assets/kgee-logo-white.png
Stylesheet: styles.css
Script: script.js
```

## 🎯 Next Steps

1. ✅ Add logo files
2. ✅ Customize content
3. ✅ Test locally
4. ✅ Deploy
5. ✅ Monitor analytics

## 📚 More Help

- **Design Questions**: See `DESIGN_SYSTEM.md`
- **Deployment Help**: See `DEPLOYMENT.md`
- **General Info**: See `README.md`
- **Code Issues**: Check browser console (F12)

## ⏱️ Estimated Setup Time

- Logo files: 5 min
- Content customization: 15-30 min
- Testing: 10-20 min
- Deployment: 5-10 min

**Total: 35-70 minutes to live**

## 🎉 You're All Set!

Your premium KGEE 2026 website is ready to showcase Kerala's green energy future!

Questions? Check the documentation files or review the clean, well-commented code.

Good luck! 🚀
