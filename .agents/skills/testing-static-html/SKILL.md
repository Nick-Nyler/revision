---
name: testing-static-html
description: Test static HTML + Tailwind CSS websites in this repo. Use when verifying single-file HTML pages with CDN dependencies.
---

# Testing Static HTML Websites

## Overview
This repo contains static HTML files that can be opened directly in the browser without a dev server.

## How to Test

1. **Open in Chrome**: Use `file:///home/ubuntu/repos/revision/<filename>.html` in the browser address bar
2. **No server needed**: Static files with CDN dependencies (Tailwind CSS, Google Fonts) load directly
3. **Internet required**: CDN resources (Tailwind, Google Fonts, Google Maps embeds) need internet access

## Key Test Areas

### Visual Rendering
- Verify all page sections render at desktop width (1024px+)
- Check Tailwind CSS classes are applied correctly (CDN must load)
- Verify Google Fonts load (Inter, Playfair Display, etc.)

### Responsive Design
- Use Chrome DevTools device toolbar (Ctrl+Shift+M) to test mobile viewports
- Test at 375px (mobile) and 768px (tablet) widths
- Verify `lg:hidden` elements hide/show at correct breakpoints (1024px threshold)

### Interactive Features
- Mobile hamburger menu toggle (JS-driven classList toggle)
- Smooth scroll navigation (CSS `scroll-behavior: smooth` + anchor links)
- Scroll-based effects (e.g., navbar shadow on scroll via `window.addEventListener('scroll', ...)`)
- Intersection Observer animations (fade-in on scroll)

### Google Maps Embeds
- Maps iframes may load with a grayscale filter that removes on hover
- Verify the iframe renders and shows the correct location

## Tips
- Close DevTools before taking final screenshots for clean evidence
- When testing mobile menu, scroll to top first so the navbar is fully visible
- The `Home` key scrolls to the top of the page quickly
- Use `zoom` action on the computer tool to inspect small UI details like navbar borders

## No Secrets Needed
No authentication or secrets are required for testing static HTML files.
