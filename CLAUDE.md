# Japan Motor Import (JMI) eCommerce Design System

## Project Overview

JMI's design-system and template repository. Two delivery tracks live side-by-side:

1. **WooCommerce Storefront mockups** — homepage + product detail for **JapanMotorImport.ca**, the parent brand's storefront.
2. **eBay listing description template** — a seller-branded HTML template for JMI's **Top Tier Japan (TTJ)** brand, modelled after the `templates/jdm-nagano-ebay-template.zip` reference. The eBay track is the current active deliverable.

**Design Philosophy:** Modern JDM performance aesthetic — clean, trustworthy, conversion-focused.

**Tech Stack:** HTML/CSS (WooCommerce/Storefront child-theme-compatible for the storefront track; single self-contained HTML for the eBay track).

---

## 🏢 Brand Portfolio

JMI (Japan Motor Import) is the parent. Sub-brands / locations:

| Brand | Location | Role |
|---|---|---|
| **Japan Motor Import** | Canada | Parent, B2C storefront (`JapanMotorImport.ca`) |
| **Top Tier Japan LLC** | Phoenix, AZ 85035 | US location / eBay seller (`toptierjapanllc`) |

The eBay template in `mockups/ebay-product.html` carries the **Top Tier Japan** identity — TTJ-specific address, policies, and "LIMITED WARRANTY OFFERED BY TOP TIER JAPAN" section naming. The storefront mockups use the JMI parent identity.

---

## 📁 Project Structure

```
jmi-ebay/
├── CLAUDE.md                     # This file — design system & template spec
├── README.md                     # Human-facing project entry point
├── index.html                    # 3-link landing page
├── package.json                  # NPM scripts (serve, test, validate:ebay)
├── playwright.config.ts          # Playwright test configuration
├── mockups/
│   ├── home.html                 # WooCommerce — homepage mockup
│   ├── product-detail.html       # WooCommerce — product detail mockup
│   ├── ebay-product-v1.html      # eBay — TTJ listing template, v1 (original, kept for client comparison)
│   ├── ebay-product.html         # eBay — TTJ listing template, v2 (current, designer-critiqued rebuild)
│   ├── css/                      # (reserved for extracted styles)
│   └── images/
│       ├── JMI logo 2026.png     # Parent-brand logo
│       ├── *.png                 # WooCommerce mockup imagery
│       └── ttj/                  # Top Tier Japan product imagery (eBay template)
│           ├── hero.jpg
│           └── detail1..4.jpg
├── templates/
│   └── jdm-nagano-ebay-template.zip   # Reference template — do not modify
├── scripts/
│   └── validate-ebay.js          # Scans ebay-product.html for forbidden tokens + char budget
└── tests/
    ├── mockups.spec.ts           # Functional + eBay compliance tests
    ├── visual.spec.ts            # Visual regression tests
    └── accessibility.spec.ts     # Accessibility checks
```

---

## 🌐 Live Preview (GitHub Pages)

**Live Site:** https://jmi.kinucloud.dev/

| Page | URL |
|------|-----|
| Landing | https://jmi.kinucloud.dev/ |
| Homepage (WooCommerce) | https://jmi.kinucloud.dev/mockups/home.html |
| Product Detail (WooCommerce) | https://jmi.kinucloud.dev/mockups/product-detail.html |
| eBay Listing &mdash; v1 (original) | https://jmi.kinucloud.dev/mockups/ebay-product-v1.html |
| eBay Listing &mdash; v2 (refined) | https://jmi.kinucloud.dev/mockups/ebay-product.html |

**Repository:** https://github.com/kinutech-asharif/jmi-website

---

## 💻 Development Setup

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Install dependencies
npm install

# Install Playwright browsers (first time only)
npx playwright install

# Install system dependencies for Playwright (Linux/WSL)
sudo npx playwright install-deps
```

### Local Server

```bash
# Start local server at http://localhost:3000
npm run serve

# Serve mockups directory directly
npm run serve:mockups
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run serve` | Start local server on port 3000 |
| `npm run serve:mockups` | Serve mockups directory on port 3000 |
| `npm test` | Run Playwright tests |
| `npm run test:headed` | Run tests with visible browser |
| `npm run test:ui` | Run tests in interactive UI mode |
| `npm run test:report` | View HTML test report |
| `npm run validate:ebay` | eBay-compliance scan on `mockups/ebay-product.html` (forbidden tokens + 500k-char budget) |

---

## 🧪 Testing with Playwright

### Test Suites

1. **Functional Tests** (`tests/mockups.spec.ts`)
   - Page load verification
   - Element visibility checks
   - Console error detection
   - Responsive viewport tests

2. **Visual Regression** (`tests/visual.spec.ts`)
   - Full page screenshots
   - Above-the-fold captures
   - Mobile viewport comparisons

3. **Accessibility** (`tests/accessibility.spec.ts`)
   - Image alt text validation
   - Keyboard navigation
   - Form label associations
   - Heading hierarchy

### Running Tests

```bash
# Run all tests
npm test

# Run specific test file
npx playwright test tests/mockups.spec.ts

# Run on specific browser
npx playwright test --project=chromium

# Update visual baselines
npx playwright test --update-snapshots
```

---

## 🎨 Design System

### Color Palette

```css
--jmi-red: #E31E24;           /* Primary brand red */
--jmi-red-dark: #B91419;      /* Hover/active states */
--jmi-red-light: #FF3B3F;     /* Accents */
--jmi-steel: #6B7280;         /* Secondary gray */
--jmi-steel-light: #9CA3AF;   /* Light gray text */
--jmi-steel-dark: #374151;    /* Dark gray accents */
--dark-bg: #111827;           /* Dark backgrounds (header top, footer) */
--light-bg: #F9FAFB;          /* Page background */
--white: #FFFFFF;             /* Cards, sections */
--medium-bg: #E5E7EB;         /* Borders, dividers */
--text-dark: #111827;         /* Primary text */
--text-medium: #4B5563;       /* Secondary text */
--green: #10B981;             /* Stock status */
```

### Typography

**Display Font:** Saira Condensed (Google Fonts)
- Used for: Headings, CTAs, product titles, section titles
- Weights: 400, 500, 600, 700, 800
- Style: Bold, angular, performance-oriented

**Body Font:** Rajdhani (Google Fonts)
- Used for: Body text, descriptions, navigation, labels
- Weights: 300, 400, 500, 600, 700
- Style: Clean, modern, highly readable

### Spacing Scale

```
Small:   8px, 12px, 16px
Medium:  20px, 24px, 28px, 32px
Large:   40px, 48px, 60px
XLarge:  80px, 100px
```

### Grid & Layout

- **Max Width:** 1400px (content container)
- **Desktop Grid:** 12-column flexible grid
- **Mobile Breakpoints:**
  - Desktop: 1024px+
  - Tablet: 768px - 1023px
  - Mobile: < 768px

### Component Library

#### Buttons

**Primary Button:**
```css
background: var(--jmi-red);
color: var(--white);
clip-path: polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px);
hover: transform: translateY(-3px) + box-shadow
```

**Secondary Button:**
```css
background: transparent;
border: 2px solid var(--text-dark);
hover: background becomes solid
```

#### Cards

**Angled Corners:** All cards use `clip-path` for distinctive angled corners
- Product cards: 16px angles
- Category cards: 20px angles
- Small components: 8px angles

**Shadows:** Subtle elevation with `box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05)`

#### Badges

Trust badges, warranty badges, stock status - all use rounded rectangles with icon + text combination.

### UI States

- **Hover:** `translateY(-2px to -6px)` + box-shadow increase
- **Active:** Border color change to `--jmi-red`
- **Disabled:** Reduced opacity (0.5)
- **Loading:** Pulse animation on stock dots

---

## 📄 Page Templates

### 1. Homepage (`mockups/home.html`)

**Sections (top to bottom):**

1. **Header**
   - Dark top bar: Contact info, hours
   - White main header: Logo, navigation with dropdowns, search, cart, Call CTA
   - Sticky with glassmorphism effect

2. **Hero Section**
   - Full-width image background (red RX-7)
   - Left-aligned content
   - Primary CTA: "Shop Now"
   - Secondary CTA: "Browse Categories"

3. **Trust Bar**
   - 4 trust signals in grid
   - Icons: Tested, Warranty, Shipping, Secure Checkout
   - Hover effects on icons

4. **Shop by Category**
   - 3-column grid (desktop)
   - Large image cards with overlay text
   - Categories: Engines, Transmissions, Performance Parts

5. **Shop by Brand**
   - 6-column grid (desktop)
   - Simple text cards
   - Brands: Honda, Toyota, Nissan, Subaru, Mazda, Mitsubishi

6. **Featured Products**
   - 3-column product grid
   - Product cards with: image, category, title, specs, price, stock status
   - Badges for "New" and "Featured"

7. **Support Section**
   - Centered call-to-action
   - "Need Help Choosing?"
   - Dual CTAs: Call + Contact Form

8. **Footer**
   - Dark background
   - 4-column grid: Brand info, Shop links, Support links, Legal links
   - Bottom bar: Copyright + payment badges

### 2. Product Detail Page (`mockups/product-detail.html`)

**Layout:** Two-column grid (desktop)

**Left Column - Product Gallery:**
- Large main image (sticky on scroll)
- 4 thumbnail images below
- Click to switch views

**Right Column - Product Info:**

1. **Product Header**
   - Breadcrumbs
   - Category tag
   - Product title (large, bold)
   - Subtitle (compatibility info)

2. **Price & Stock Row**
   - Large price display
   - Stock status with animated pulse dot

3. **Trust Badges**
   - 4 badges: Tested, Warranty, Ships Canada-Wide, Local Pickup

4. **Shipping Calculator** ⭐ KEY FEATURE
   - Postal code input
   - Calculate button
   - Results display: Price + ETA
   - States: Default, Success, Freight Note, Cannot Quote

5. **Purchase Section**
   - Quantity selector (- / input / +)
   - Add to Cart (primary)
   - Buy Now (secondary)

6. **Support Block**
   - Questions prompt
   - Call + Contact Form CTAs

**Full-Width Below:**

7. **Tabbed Content**
   - 6 tabs: Specifications, Description, Fitment, Warranty, Shipping, Returns
   - **Specifications:** Clean 2-column table with all product data
   - **Description:** Rich text with headings, lists
   - **Fitment:** Compatibility information, installation notes
   - **Warranty:** 30-day coverage details with icons
   - **Shipping:** Rates, transit times, freight info
   - **Returns:** 14-day policy, requirements, restocking fee

8. **Related Products**
   - "You May Also Like" section
   - 3-column grid
   - Compact product cards

---

## 🎯 Business Requirements

### Conversion Goals

**Primary:** Add to Cart → Checkout  
**Secondary:** Call, Contact Form

### Key Features

✅ **Shipping Calculator** - Prominent on PDP, before checkout commitment  
✅ **No WhatsApp** - Only Call CTA and contact forms  
✅ **Policy Accessibility** - Available from header/footer AND product tabs  
✅ **Stock Status** - Clear, unmistakable (animated green dot)  
✅ **Mobile-First** - First screen shows Shop, Search, Cart  

### Target Users

- Mechanics
- Auto shops
- DIY builders
- Car enthusiasts

**User Needs:** Fitment info, engine codes, warranty details, shipping cost, trust signals

---

## 🏷️ eBay Listing Template (Top Tier Japan)

### Reference

- Source zip: `templates/jdm-nagano-ebay-template.zip` (JDM-Nagano 2019 template). Do not modify; extracted into `/tmp/` for inspection only.
- Deliverable: `mockups/ebay-product.html` — a single self-contained HTML file that goes in the Description field of every TTJ eBay listing.

### Philosophy

A **generic brand wrapper**, not a product-specific page. Only a small number of slots change per listing; everything else (shipping, warranty, payment, returns, about us) is static across every listing.

**Per-listing placeholder slots:** `{{TITLE}}`, `{{SKU}}`, `{{HERO_IMAGE}}`, `{{DETAIL_IMG_1..4}}`, `{{SHORT_DESCRIPTION}}`, `{{PHONE}}`, `{{LOGO_SRC}}`.

**Static sections (never change per listing):** Delivery Information · Limited Warranty (A–H) · Maintenance Requirements · Receiving & Inspection · Sales & Deposit Policy · Payment Methods Accepted · Returns Policy · About Us · Contact Us · Copyright.

### eBay Active-Content Policy — Hard Rules

**Blocklist (eBay strips or rejects):**
- `<script>` and all event handlers (`onclick`, `onmouseover`, `onload`, etc.)
- `<form>` with any action
- `<iframe>`, `<object>`, `<embed>`, `<applet>`
- Flash, plugins, cookies
- External `<link rel="stylesheet">` (Google Fonts link included — eBay silently drops it, so font stacks must degrade gracefully)
- `<input>` of any type (stricter than eBay requires, but removes a whole class of sanitizer risk)

**Off-platform contact info — also prohibited (can get the listing flagged or removed):**
- Phone numbers in any format (`(555) 555-1234`, `1-800-WORDS`, `+1 ...`)
- Email addresses
- `tel:` and `mailto:` anchor links
- External "contact us" URLs pointing off-eBay
- Direct customers to eBay's built-in "Contact seller" / messaging system instead. Phone/email belong on the seller's Store "About" page, not in the item description.

**Allowlist (safe to use):**
- HTML5 structural tags
- Single inline `<style>` block in `<head>` + inline `style=""` attributes
- Modern CSS: grid, flexbox, `clip-path`, custom properties (`var(--x)`), keyframes, pseudo-elements
- `<a target="_blank">` (required for external links; `tel:` / `mailto:` OK)
- Images ≤ 700px wide over HTTPS

### Budgets

- **Full description:** 500,000 characters max (HTML counts). Current mockup ~30 KB, leaves huge headroom.
- **Mobile summary:** ≤ 800 plain-text characters extracted from the first-in-body `<span class="ttj-mobile-desc">`.

### Scraping Rule

**Never use WebFetch / browser automation against `ebay.com` or `*.ebaydesc.com`.** eBay instantly bans AI-agent traffic. All policy text in `ebay-product.html` was pulled with `curl -A '<real UA>'` from the reference listing (`ebay.com/itm/287261060538`) and its description iframe; do the same for any future sourcing.

### Pre-upload Checklist

Before pasting `mockups/ebay-product.html` into an eBay listing description field:

1. Swap the 5 `images/ttj/*.jpg` references to public HTTPS URLs (e.g., `https://jmi.kinucloud.dev/mockups/images/ttj/...` or a hardened CDN).
2. Replace every `{{...}}` placeholder with the real value for this listing.
3. Run `npm run validate:ebay` — must exit 0.
4. In DevTools, disable the Google Fonts `<link>` and confirm the fallback (Impact / Segoe UI) still looks acceptable.
5. Paste the HTML into the eBay listing's Description editor (HTML view), preview on desktop and mobile. Verify no "active content removed" banner, and the 500–750-char mobile summary is rendered correctly.

---

## 🛠️ Technical Implementation Notes

### WooCommerce Compatibility

All components are designed to be buildable in WooCommerce/Storefront:

- Standard grid layouts (CSS Grid/Flexbox)
- No exotic UI patterns
- Accessible tab implementation (can use WooCommerce tabs)
- Shipping calculator (can integrate with WooCommerce Shipping plugins)
- Product gallery (WooCommerce native gallery compatible)

### Custom Components Needed

1. **Shipping Calculator Module**
   - Integration with WooCommerce shipping classes
   - Postal code validation
   - Real-time rate calculation
   - Three states: Success, Freight, Cannot Quote

2. **Dropdown Navigation**
   - Pure CSS hover dropdowns
   - Brands submenu (dynamic from WooCommerce categories)
   - Shop submenu (Engines, Transmissions, Accessories, Performance)

3. **Product Badge System**
   - Warranty duration badge
   - Stock status indicator
   - New/Featured flags
   - Tested/Verified badge

### Responsive Behavior

**Desktop (1024px+):**
- Full navigation visible
- Two-column product layout
- Sticky product gallery

**Tablet (768px - 1023px):**
- Hamburger menu
- Single-column product layout
- Gallery at top

**Mobile (<768px):**
- Hide header top bar
- Stack all content
- Bottom sticky bar (Filter + Cart) on collection pages
- Full-width CTAs

---

## 📦 Product Data Model

Products should support these fields:

**Core:**
- Title
- Category (Engine / Transmission / Accessories / etc.)
- Brand / Model / Year Range
- Engine Code / Transmission Code
- SKU / Stock #
- Price
- Stock Status

**Details:**
- Mileage or Condition Notes
- Warranty Duration
- Shipping Class / Weight / Freight Note
- Photo Gallery (4-8 images)

**Specifications:**
- Displacement
- Configuration (e.g., DOHC VTEC)
- Output (HP/Torque)
- What's Included (ECU, accessories)
- Fitment Applications

---

## 🚀 Next Steps

### Phase 1: eBay Listing Template (active)
1. Client review of `mockups/ebay-product.html` (TTJ-branded)
2. Supply real TTJ logo (`{{LOGO_SRC}}`) and phone number (`{{PHONE}}`)
3. Publish product images on HTTPS CDN; swap local `images/ttj/` paths
4. Paste into TTJ eBay Sandbox listing and verify no active-content warnings
5. Roll out to TTJ's production listings

### Phase 2: WooCommerce Setup
1. Install Storefront theme
2. Create child theme with JMI branding
3. Configure product categories
4. Set up shipping zones/classes

### Phase 3: WooCommerce Custom Development
1. Build header with dropdown menus
2. Implement shipping calculator
3. Create custom product page template
4. Add badge/stock status system
5. Build homepage sections

### Phase 4: WooCommerce Content & Products
1. Upload product catalog
2. Write policy pages
3. Create category descriptions
4. Add product images
5. Configure shipping rates

### Phase 5: Storefront Testing & Launch
1. Mobile responsiveness testing
2. Cross-browser testing
3. Shipping calculator validation
4. Checkout flow testing
5. Performance optimization

---

## 📞 Support & Contact

For questions about this design system or implementation:

**Email:** info@japanmotorimport.ca  
**Phone:** 1-800-JDM-PARTS  
**Hours:** Mon-Fri 9AM-6PM EST

---

## 📝 Design Decisions Log

### Why Light Background Instead of Dark?

**Decision:** Use white/light gray backgrounds instead of all-black design  
**Reasoning:**
- Better readability for technical specifications
- Reduces eye strain for long browsing sessions
- More trustworthy/professional for eCommerce
- Makes product images pop
- Industry standard for parts/automotive eCommerce

### Why Angled Corners?

**Decision:** Use `clip-path` for angled corners on cards and buttons  
**Reasoning:**
- References racing liveries and JDM culture
- Creates distinctive visual identity
- Differentiates from generic eCommerce templates
- Maintains modern, performance aesthetic

### Why Dropdown Menus?

**Decision:** Implement dropdown navigation for Shop and Brands  
**Reasoning:**
- Reduces clicks to reach products
- Shows category structure clearly
- Standard eCommerce pattern (familiar UX)
- Accommodates growing product catalog

### Why Shipping Calculator on PDP?

**Decision:** Make shipping calculator prominent on product page  
**Reasoning:**
- Engines are heavy/expensive to ship
- Removes surprise costs at checkout
- Reduces cart abandonment
- Builds trust through transparency
- Users can compare total cost before committing

---

## 🎨 Design Assets

### Logo Usage

**Primary Logo:** JMI_logo_2026.png
- Contains red "J" and metallic "MI"
- Use on white backgrounds (header)
- Use on dark backgrounds (footer)
- Minimum size: 50px height (desktop), 40px (mobile)

### Image Guidelines

**Hero Images:**
- Size: 1920x1080px minimum
- Format: JPG (compressed)
- Subject: JDM cars, engines (dramatic lighting)

**Product Images:**
- Size: 800x800px minimum
- Format: JPG or PNG
- Background: White or light gray preferred
- 4-8 images per product

**Category Images:**
- Size: 600x600px minimum
- Format: JPG
- Overlay-ready (darker backgrounds work best)

---

## ✅ Accessibility Notes

- All interactive elements have focus states
- Color contrast meets WCAG AA standards
- Tab navigation supported
- Alt text required for all images
- Form labels properly associated
- Keyboard navigation functional

---

## 🔄 Version History

**v1.2** - April 2026
- eBay template split into v1 (original, kept for client comparison) and v2 (designer-critiqued rebuild)
- v2 refinements: hero lock-up, custom SVG trust icons, curated JDM stock photography, 3×2 navigation grid on narrow phones
- v1 refinements: red katakana accent under the wordmark, inline Hinomaru-flag SVG replacing the 🇯🇵 emoji (Windows was rendering it as literal "JP")
- Both versions: text payment chips replaced with inline Visa / Mastercard / PayPal brand-card SVGs (Apache-2.0, `aaronfagan/svg-credit-card-payment-icons`)
- Phone numbers and emails removed from the eBay description HTML per eBay's off-platform-contact policy; buyers directed to "Contact seller"

**v1.1** - January 2026
- GitHub Pages deployment
- Playwright test suite (functional, visual, accessibility)
- Local development server setup
- Updated project structure

**v1.0** - January 2026
- Initial design system
- Homepage template
- Product detail page template
- Component library established

---

## 📚 Reference Links

**Project:**
- GitHub Repository: https://github.com/kinutech-asharif/jmi-website
- Live Preview: https://jmi.kinucloud.dev/

**Google Fonts:**
- Saira Condensed: https://fonts.google.com/specimen/Saira+Condensed
- Rajdhani: https://fonts.google.com/specimen/Rajdhani

**Testing:**
- Playwright Documentation: https://playwright.dev/docs/intro

**WooCommerce:**
- Storefront Theme: https://woocommerce.com/storefront/
- Product Pages: https://woocommerce.com/document/woocommerce-pages/

**Design Inspiration:**
- JDM culture, racing liveries, performance aesthetic
- Clean eCommerce best practices
- Automotive parts marketplaces

---

*This design system is optimized for conversion, trust, and the authentic JDM parts market. All components are production-ready and WooCommerce-compatible.*