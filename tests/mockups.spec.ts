import { test, expect } from '@playwright/test';

test.describe('Homepage Mockup', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/mockups/home.html');
  });

  test('should load successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/Japan Motor Import/);
  });

  test('should display header with navigation', async ({ page }) => {
    const header = page.locator('.header');
    await expect(header).toBeVisible();

    const navMain = page.locator('.nav-main');
    await expect(navMain).toBeVisible();
  });

  test('should display hero section', async ({ page }) => {
    const hero = page.locator('.hero, [class*="hero"]');
    await expect(hero.first()).toBeVisible();
  });

  test('should have no console errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.goto('/mockups/home.html');
    await page.waitForLoadState('networkidle');

    expect(errors).toHaveLength(0);
  });

  test('should be responsive - mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/mockups/home.html');

    const body = page.locator('body');
    await expect(body).toBeVisible();
  });
});

test.describe('Product Detail Mockup', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/mockups/product-detail.html');
  });

  test('should load successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/B18C Type R Engine|Japan Motor Import/);
  });

  test('should display product header', async ({ page }) => {
    const header = page.locator('.header');
    await expect(header).toBeVisible();
  });

  test('should display breadcrumbs', async ({ page }) => {
    const breadcrumbs = page.locator('.breadcrumbs');
    await expect(breadcrumbs).toBeVisible();
  });

  test('should display product information', async ({ page }) => {
    const productContent = page.locator('body');
    await expect(productContent).toContainText(/Engine|B18C|Type R/i);
  });

  test('should have call-to-action buttons', async ({ page }) => {
    const ctaButtons = page.locator('.cta-call, [class*="cta"], button');
    await expect(ctaButtons.first()).toBeVisible();
  });

  test('should have no console errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.goto('/mockups/product-detail.html');
    await page.waitForLoadState('networkidle');

    expect(errors).toHaveLength(0);
  });

  test('should display logo in header', async ({ page }) => {
    const logo = page.locator('.logo');
    await expect(logo).toBeVisible();
    // Verify it's not a broken image (has natural dimensions)
    const naturalWidth = await logo.evaluate(
      (img: HTMLImageElement) => img.naturalWidth
    );
    expect(naturalWidth).toBeGreaterThan(0);
  });

  test('should display product gallery images', async ({ page }) => {
    const mainImage = page.locator('.main-image');
    await expect(mainImage).toBeVisible();
    // Verify main image loads correctly
    const naturalWidth = await mainImage.evaluate(
      (img: HTMLImageElement) => img.naturalWidth
    );
    expect(naturalWidth).toBeGreaterThan(0);

    // Verify thumbnails are visible
    const thumbnails = page.locator('.thumbnail img');
    const thumbnailCount = await thumbnails.count();
    expect(thumbnailCount).toBe(4);
  });

  test('should display footer', async ({ page }) => {
    const footer = page.locator('footer.footer');
    await expect(footer).toBeVisible();

    // Verify footer has expected sections
    const footerBrand = page.locator('.footer-brand');
    await expect(footerBrand).toBeVisible();

    const footerLinks = page.locator('.footer-links');
    const linkCount = await footerLinks.count();
    expect(linkCount).toBeGreaterThanOrEqual(3);
  });
});

test.describe('eBay Product Mockup', () => {
  const URL = '/mockups/ebay-product.html';

  test.beforeEach(async ({ page }) => {
    await page.goto(URL);
  });

  test('should load successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/TOP TIER JAPAN/);
  });

  test('should place mobile-summary span first in body and keep it under 800 chars', async ({ page }) => {
    const firstEl = await page.locator('body > *, .ttj-wrap > *').first();
    // The wrap is the first body child; mobile-desc is the first child inside the wrap.
    const firstInsideWrap = page.locator('.ttj-wrap > *').first();
    await expect(firstInsideWrap).toHaveClass(/ttj-mobile-desc/);

    const text = (await page.locator('.ttj-mobile-desc').textContent()) ?? '';
    expect(text.trim().length).toBeGreaterThan(200);
    expect(text.trim().length).toBeLessThanOrEqual(800);
  });

  test('should render header, nav, hero, title, copyright', async ({ page }) => {
    await expect(page.locator('.ttj-header')).toBeVisible();
    await expect(page.locator('.ttj-nav')).toBeVisible();
    await expect(page.locator('.ttj-hero')).toBeVisible();
    await expect(page.locator('.ttj-hero-title')).toBeVisible();
    await expect(page.locator('.ttj-copyright')).toBeVisible();
  });

  test('should contain all static policy sections', async ({ page }) => {
    for (const id of ['productinfo', 'shippinginfo', 'warranty', 'maintenance', 'receiving', 'sales', 'payment', 'returns', 'aboutus', 'contact']) {
      await expect(page.locator(`#${id}`)).toBeVisible();
    }
  });

  test('should not contain any eBay-banned active-content tokens', async ({ page }) => {
    const html = await page.content();
    const forbidden = [
      /<script\b/i,
      /<form\b/i,
      /<iframe\b/i,
      /<embed\b/i,
      /<object\b/i,
      /<applet\b/i,
      /<input\b/i,
      /\bonclick\s*=/i,
      /\bonmouseover\s*=/i,
      /\bonload\s*=/i,
      /\bonerror\s*=/i,
    ];
    for (const pattern of forbidden) {
      expect(html, `Forbidden token ${pattern} found in eBay template`).not.toMatch(pattern);
    }
  });

  test('should not contain phone numbers, emails, or tel:/mailto: links (eBay flags off-platform contact)', async ({ page }) => {
    const html = await page.content();
    // Plain-text body for phone/email scan — avoids false positives from CSS @media, url(), etc.
    const text = await page.locator('body').innerText();

    expect(html, 'tel: link found — eBay prohibits').not.toMatch(/href\s*=\s*["']tel:/i);
    expect(html, 'mailto: link found — eBay prohibits').not.toMatch(/href\s*=\s*["']mailto:/i);
    expect(text, 'phone number found in body text — eBay prohibits').not.toMatch(
      /(?:\+?1[-.\s]?)?\(?\d{3}\)?[-.\s]\d{3}[-.\s]\d{4}/
    );
    expect(text, 'toll-free word phone found — eBay prohibits').not.toMatch(
      /\b1[-.\s]?8(?:00|33|44|55|66|77|88)[-.\s][A-Z]{3,}/
    );
    expect(text, 'email address found in body text — eBay prohibits').not.toMatch(
      /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/
    );
  });

  test('should fit within eBay 500,000-char description budget', async ({ page }) => {
    const html = await page.content();
    expect(html.length).toBeLessThan(500_000);
  });

  test('should have no console errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
    await page.goto(URL);
    await page.waitForLoadState('networkidle');
    expect(errors).toHaveLength(0);
  });
});

test.describe('Landing & Cross-page Navigation', () => {
  test('root index serves a landing page linking to all three mockups', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/JMI Design System/);
    await expect(page.locator('a[href="mockups/home.html"]')).toBeVisible();
    await expect(page.locator('a[href="mockups/product-detail.html"]')).toBeVisible();
    await expect(page.locator('a[href="mockups/ebay-product.html"]')).toBeVisible();
  });
});
