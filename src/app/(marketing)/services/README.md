# Services & Pricing Page Blueprint — The Lums Charms

## Purpose
Provide detailed descriptions of salon offerings, transparent pricing, and add-on options to empower clients to choose the perfect charm session.

## Target Outcomes
- Users understand the value of each service tier.
- Users quickly identify add-ons and packages.
- Policies and FAQs are surfaced to reduce booking friction.

## Page Structure
1. **Intro Hero** — Headline reinforcing bespoke care, supportive copy, CTA to booking.
2. **Signature Packages** — Cards for Classic Charm, Premium Glow, Luxury Charm Extensions.
3. **Service Accordion** — Detailed breakdown including duration, inclusions, prep notes.
4. **Add-On Menu** — Grid/list of charm upgrades, nail art, treatments with icons.
5. **Membership & Bundles** — Highlight monthly memberships or group packages.
6. **Policies Snapshot** — Summaries with links to full policy page.
7. **FAQs** — Accordion with top 5 client questions.
8. **Final CTA** — Book now button and contact support link.

## Data Dependencies
- Service entries from CMS (`services` dataset).
- Add-on list with pricing.
- Membership or promotion entries.
- Policy excerpts referencing `policy` dataset.

## Components Used
- `SectionHeading`
- `GlassCard`
- `ServiceAccordion`
- `PolicyAccordion`
- `GlowButton`
- `FloatingCTA`

## SEO & Metadata
- Title: “Services & Pricing | The Lums Charms Nail Salon”
- Meta description: Include unique selling points, hygiene standards, booking CTA.

## Analytics
- `service_tab_expand`
- `add_on_select`
- `book_now_click`
