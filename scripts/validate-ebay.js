#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');

const TARGET = path.resolve(__dirname, '..', 'mockups', 'ebay-product.html');
const MAX_CHARS = 500_000;
const MOBILE_SUMMARY_MAX = 800;

const FORBIDDEN = [
  { name: '<script>',    re: /<script\b/i },
  { name: '<form>',      re: /<form\b/i },
  { name: '<iframe>',    re: /<iframe\b/i },
  { name: '<embed>',     re: /<embed\b/i },
  { name: '<object>',    re: /<object\b/i },
  { name: '<applet>',    re: /<applet\b/i },
  { name: '<input>',     re: /<input\b/i },
  { name: 'onclick=',    re: /\bonclick\s*=/i },
  { name: 'onmouseover=',re: /\bonmouseover\s*=/i },
  { name: 'onload=',     re: /\bonload\s*=/i },
  { name: 'onerror=',    re: /\bonerror\s*=/i },
  { name: 'onfocus=',    re: /\bonfocus\s*=/i },
];

if (!fs.existsSync(TARGET)) {
  console.error(`FAIL: target file not found: ${TARGET}`);
  process.exit(1);
}

const html = fs.readFileSync(TARGET, 'utf8');
const issues = [];

// 1. Forbidden-token scan
for (const { name, re } of FORBIDDEN) {
  if (re.test(html)) issues.push(`forbidden token: ${name}`);
}

// 2. Char budget
if (html.length >= MAX_CHARS) {
  issues.push(`char count ${html.length} >= eBay max ${MAX_CHARS}`);
}

// 3. Mobile summary
const m = html.match(/<span[^>]*class="[^"]*ttj-mobile-desc[^"]*"[^>]*>([\s\S]*?)<\/span>/);
if (!m) {
  issues.push('missing <span class="ttj-mobile-desc">...</span> mobile summary');
} else {
  const text = m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  if (text.length > MOBILE_SUMMARY_MAX) {
    issues.push(`mobile summary ${text.length} chars > ${MOBILE_SUMMARY_MAX} limit`);
  }
  if (text.length < 100) {
    issues.push(`mobile summary ${text.length} chars is suspiciously short`);
  }
}

const rel = path.relative(process.cwd(), TARGET);
if (issues.length === 0) {
  console.log(`PASS  ${rel}`);
  console.log(`  size: ${html.length.toLocaleString()} / ${MAX_CHARS.toLocaleString()} chars`);
  if (m) {
    const t = m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    console.log(`  mobile summary: ${t.length} / ${MOBILE_SUMMARY_MAX} chars`);
  }
  process.exit(0);
}

console.error(`FAIL  ${rel}`);
for (const i of issues) console.error(`  - ${i}`);
process.exit(1);
