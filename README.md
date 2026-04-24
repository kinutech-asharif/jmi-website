# JMI — eCommerce Design & eBay Template System

Design system, WooCommerce mockups, and an eBay-compliant listing template for **Japan Motor Import (JMI)** and its US sub-brand **Top Tier Japan LLC**. Both tracks live in one repo and share the same visual language (JMI red, Saira Condensed display, clip-path angled corners).

## Brand portfolio

| Brand | Identity | Target surface |
|---|---|---|
| **Japan Motor Import** (parent) | JMI red, Canadian storefront | `japanmotorimport.ca` (WooCommerce) |
| **Top Tier Japan LLC** (Phoenix, AZ 85035) | TTJ red, US location | eBay listing descriptions |

## Live preview

Hosted on GitHub Pages: <https://jmi.kinucloud.dev/>

| Mockup | Audience | URL |
|---|---|---|
| Landing | Project overview | https://jmi.kinucloud.dev/ |
| Homepage (WooCommerce) | Storefront visitors | https://jmi.kinucloud.dev/mockups/home.html |
| Product Detail (WooCommerce) | Product-page buyers | https://jmi.kinucloud.dev/mockups/product-detail.html |
| eBay Listing &mdash; v1 | Client review (original JDM-Nagano-style) | https://jmi.kinucloud.dev/mockups/ebay-product-v1.html |
| eBay Listing &mdash; v2 (refined) | Client review (designer-critiqued rebuild) | https://jmi.kinucloud.dev/mockups/ebay-product.html |

## Quickstart

```bash
npm install                 # deps
npx playwright install      # test browsers (first run only)
npm run serve               # http://localhost:3000
```

## What's in each mockup

- **`mockups/home.html`** — Full WooCommerce-Storefront-compatible homepage: hero, trust bar, category grid, brand grid, featured products, support block, footer. WordPress/WooCommerce-ready. Reference: the JMI parent-brand storefront.

- **`mockups/product-detail.html`** — Full WooCommerce PDP with gallery, specs, tabs (description/fitment/warranty/shipping/returns), shipping calculator, related products. Interactive JS for tabs and quantity.

- **`mockups/ebay-product-v1.html`** — **v1.** Original JDM-Nagano-style single-file TTJ listing template. Stacked sections with repeating clip-path, full red treatment, red katakana accent under the wordmark, mostly-emoji trust icons plus an inline Hinomaru-flag SVG for the Japan badge (platform-independent rendering). eBay-sandbox-clean. Kept for client comparison.

- **`mockups/ebay-product.html`** — **v2 (current).** Designer-critiqued rebuild. Merged hero image + title lock-up with gradient scrim overlay, three section variants (default / muted / dark-inverted "About"), custom inline SVG trust icons (no emoji), katakana wordmark, restrained clip-path (3 surfaces only), typographic hierarchy with lead paragraphs and demoted warranty H3s, 3×2 navigation grid that holds on narrow phones. Same compliance guarantees. Drop into the Description field of any TTJ listing — see the **Pre-upload checklist** in `CLAUDE.md`.

Both eBay versions share an inline SVG payment-method strip (Visa · Mastercard · PayPal brand cards) in place of the original text chips.

## Reference assets

- `templates/jdm-nagano-ebay-template.zip` — the 2019 JDM-Nagano template provided by the client as the structural reference for `mockups/ebay-product.html`. Read-only; extract to `/tmp/` to inspect.

## Scripts

| Command | Purpose |
|---|---|
| `npm run serve` | Static server on `:3000` |
| `npm run serve:mockups` | Serve just `mockups/` |
| `npm test` | Playwright: functional + visual + accessibility + eBay compliance |
| `npm run test:ui` | Interactive Playwright UI |
| `npm run test:headed` | Playwright with visible browser |
| `npm run test:report` | Open last HTML report |
| `npm run validate:ebay` | Scan `mockups/ebay-product.html` for forbidden eBay tokens + char budget |

## Design system reference

See [`CLAUDE.md`](./CLAUDE.md) for the full palette, typography, component library, eBay active-content policy notes, and phase roadmap.

## Repo

<https://github.com/kinutech-asharif/jmi-website>
