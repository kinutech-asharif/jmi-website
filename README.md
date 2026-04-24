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
| eBay Listing (Top Tier Japan) | eBay buyers browsing a listing | https://jmi.kinucloud.dev/mockups/ebay-product.html |

## Quickstart

```bash
npm install                 # deps
npx playwright install      # test browsers (first run only)
npm run serve               # http://localhost:3000
```

## What's in each mockup

- **`mockups/home.html`** — Full WooCommerce-Storefront-compatible homepage: hero, trust bar, category grid, brand grid, featured products, support block, footer. WordPress/WooCommerce-ready. Reference: the JMI parent-brand storefront.

- **`mockups/product-detail.html`** — Full WooCommerce PDP with gallery, specs, tabs (description/fitment/warranty/shipping/returns), shipping calculator, related products. Interactive JS for tabs and quantity.

- **`mockups/ebay-product.html`** — **eBay-sandbox-clean** single-file TTJ listing description template. Stacked sections, no JS/forms/iframes/inputs, graceful Google Fonts fallback. Policies sourced verbatim from TTJ's existing eBay listings. Drop into the Description field of any TTJ listing — see the **Pre-upload checklist** in `CLAUDE.md`.

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
