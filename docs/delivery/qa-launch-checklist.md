# QA & Launch Checklist — The Lums Charms

## Pre-QA Setup
- [ ] Staging environment mirrors production configuration.
- [ ] CMS content synced and sample data populated.
- [ ] Booking embed connected to staging sandbox or test profile.

## Functional Testing
- [ ] Navigation links route correctly on all breakpoints.
- [ ] Portfolio filters update gallery in real-time and reset as expected.
- [ ] Lightbox supports keyboard navigation, swipe gestures, close controls.
- [ ] Booking flow completes successfully (service selection, date/time, confirmation).
- [ ] Contact form validates inputs, shows success/error states, and sends notification.
- [ ] Blog pagination and article slug routing operate correctly.
- [ ] Policies page accordions expand/collapse with accurate ARIA attributes.

## Responsive & Cross-Browser
- [ ] Test on modern desktop browsers (Chrome, Safari, Firefox, Edge).
- [ ] Test on iOS Safari, Android Chrome, and small tablets.
- [ ] Verify layout integrity at 320px, 768px, 1024px, 1440px widths.
- [ ] Ensure sticky headers, floating CTAs, and carousels behave reliably on touch.

## Accessibility
- [ ] Pass automated checks (Axe, Lighthouse accessibility scores ≥ 90).
- [ ] Keyboard-only navigation covers all interactive elements without traps.
- [ ] Focus states visible and contrast-compliant.
- [ ] Alt text applied to decorative and informational images appropriately.
- [ ] ARIA labels used for carousels, modals, accordions.

## Performance
- [ ] Lighthouse Performance score ≥ 90 on mobile and desktop.
- [ ] Largest Contentful Paint < 2.5s on median 4G network.
- [ ] Cumulative Layout Shift < 0.1.
- [ ] Optimize images (WebP, responsive `srcset`), lazy load galleries.
- [ ] Confirm code-splitting and caching strategies (Next.js ISR/SSG).

## SEO & Analytics
- [ ] Title tags, meta descriptions, and OG tags customized per page.
- [ ] Structured data (`LocalBusiness`, `Service`, `BlogPosting`) validated via Rich Results Test.
- [ ] Sitemap generated and linked in `robots.txt`.
- [ ] GA4, Meta Pixel, Hotjar tracking code installed and verified.
- [ ] Conversion events configured for booking button clicks and form submissions.

## Content Review
- [ ] Proofread copy for spelling, grammar, and tone consistency.
- [ ] Verify pricing, durations, and policy wording with stakeholders.
- [ ] Double-check internal/external links and contact information.
- [ ] Ensure promotional banners and CTAs match current offers.

## Security & Compliance
- [ ] HTTPS enforced; SSL certificate valid and auto-renewing.
- [ ] Cookie consent banner configured if required.
- [ ] Privacy policy and terms accessible from footer.
- [ ] Ensure third-party embeds meet compliance and have fallbacks.

## Launch Preparation
- [ ] Deployment pipeline tested with staging release.
- [ ] Backups and roll-back plan documented.
- [ ] DNS updates scheduled with proper TTL.
- [ ] Social media launch kit approved and scheduled.
- [ ] Post-launch monitoring (uptime, analytics dashboards) configured.

## Post-Launch
- [ ] Monitor logs for errors and fix high-priority issues.
- [ ] Review conversion metrics after first 48 hours.
- [ ] Collect client feedback and UGC for follow-up content.
