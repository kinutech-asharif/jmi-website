# Japan Motor Import (JMI) eCommerce Design System

## Project Overview

This project contains a complete UI/UX design system and page templates for **JapanMotorImport.ca** - a WooCommerce-based eCommerce site specializing in authentic JDM engines, transmissions, and performance parts.

**Design Philosophy:** Modern JDM performance aesthetic with clean, trustworthy, conversion-focused design.

**Tech Stack:** HTML/CSS (WooCommerce/Storefront child theme compatible)

---

## 📁 Project Structure

```
jmi-ecommerce-design/
├── CLAUDE.md (this file)
├── jmi-homepage.html
├── jmi-product-detail.html
└── assets/
    ├── JMI_logo_2026.png
    └── reference-images/
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

### 1. Homepage (`jmi-homepage.html`)

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

### 2. Product Detail Page (`jmi-product-detail.html`)

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

### Phase 1: WooCommerce Setup
1. Install Storefront theme
2. Create child theme with JMI branding
3. Configure product categories
4. Set up shipping zones/classes

### Phase 2: Custom Development
1. Build header with dropdown menus
2. Implement shipping calculator
3. Create custom product page template
4. Add badge/stock status system
5. Build homepage sections

### Phase 3: Content & Products
1. Upload product catalog
2. Write policy pages
3. Create category descriptions
4. Add product images
5. Configure shipping rates

### Phase 4: Testing & Launch
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

**v1.0** - January 2026
- Initial design system
- Homepage template
- Product detail page template
- Component library established

---

## 📚 Reference Links

**Google Fonts:**
- Saira Condensed: https://fonts.google.com/specimen/Saira+Condensed
- Rajdhani: https://fonts.google.com/specimen/Rajdhani

**WooCommerce:**
- Storefront Theme: https://woocommerce.com/storefront/
- Product Pages: https://woocommerce.com/document/woocommerce-pages/

**Design Inspiration:**
- JDM culture, racing liveries, performance aesthetic
- Clean eCommerce best practices
- Automotive parts marketplaces

---

*This design system is optimized for conversion, trust, and the authentic JDM parts market. All components are production-ready and WooCommerce-compatible.*