# Home Page Blueprint — The Lums Charms

## Purpose
Deliver an immediate impression of The Lums Charms brand, showcasing signature artistry and guiding visitors toward booking or exploring the portfolio.

## Target Audience
- First-time visitors discovering the salon online.
- Returning clients seeking quick booking access.
- Social media referrals looking for highlighted looks.

## Content Blocks
1. **Hero Spotlight** — Headline, subcopy, dual CTA (`Book Now`, `Browse Portfolio`), hero media (video loop) with floating charm accents.
2. **Signature Services Carousel** — Highlight top packages with duration, price, and quick booking links.
3. **Signature Looks Preview** — Masonry grid preview linking to full portfolio with lightbox support.
4. **Testimonials** — Carousel of 2–3 recent reviews with rating, service, client name.
5. **Salon Story** — Short narrative and CTA to `About` page.
6. **Hygiene & Care Callout** — Quick icons referencing sanitized tools and safety protocols.
7. **Newsletter Opt-In** — Inline subscription form with value proposition.
8. **Booking CTA Strip** — Persistent gradient strip encouraging immediate booking.

## Data Dependencies
- Services (title, summary, duration, price, slug).
- Portfolio featured entries (image, style, technician).
- Testimonials flagged as featured.
- Newsletter integration endpoint.

## Components Used
- `HeroSpotlight`
- `ServiceCarousel`
- `PortfolioGrid` (`preview` mode)
- `TestimonialCarousel`
- `GlassCard`
- `SectionHeading`
- `FloatingCTA`

## Interactions
- Scroll-triggered reveals for each section.
- Hover animations on cards and buttons.
- Sticky booking CTA appearing after hero scroll.

## SEO & Metadata
- Title: “The Lums Charms | Modern Nail Artistry & Luxury Nail Salon”
- Meta description: 150–160 characters focusing on custom nail art and booking.
- Open Graph hero image featuring signature charm look.

## Analytics Events
- `cta_book_now_click`
- `service_carousel_item_click`
- `portfolio_preview_open`
- `newsletter_submit`
