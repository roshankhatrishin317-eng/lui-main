# Portfolio Page Blueprint — The Lums Charms

## Purpose
Present a curated gallery of nail artistry that can be filtered by style, occasion, and finish, helping clients discover looks that match their personality and event needs.

## User Goals
- View high-quality imagery of nail designs.
- Filter by preferences (e.g., Bridal, Minimalist, Statement).
- Learn about techniques, materials, and recommended services.
- Book directly from an inspiring look.

## Page Structure
1. **Hero Banner** — Intro heading, subcopy, and filter CTA.
2. **Filter Panel** — Chips/dropdowns for style, occasion, finish, technician.
3. **Gallery Grid** — Masonry layout with responsive columns.
4. **Lightbox Modal** — Detailed view with description, materials, technician, booking CTA.
5. **Highlight Strip** — Seasonal collection or featured collaboration.
6. **CTA Section** — Encouragement to book or consult with a technician.

## Data Requirements
- Portfolio entries (image gallery, description, tags, technician reference, service link).
- Seasonal highlight content.
- Technician bios for linking.

## Components Used
- `SectionHeading`
- `FilterChips`
- `PortfolioGrid`
- `PortfolioLightbox`
- `FloatingCTA`

## Interactions
- Filter selections update gallery with transitions.
- Lightbox supports keyboard navigation, swipe gestures.
- Booking CTA pre-fills service/technician data when possible.

## SEO & Metadata
- Title: “Portfolio | The Lums Charms Nail Art Gallery”
- Meta description: Emphasize custom designs, categories, and booking.
- Structured data: `ItemList` referencing individual `CreativeWork` entries.

## Analytics Events
- `portfolio_filter_change`
- `portfolio_lightbox_open`
- `portfolio_book_cta_click`
