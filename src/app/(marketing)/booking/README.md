# Booking Page Blueprint — The Lums Charms

## Purpose
Provide a seamless, confidence-inspiring booking experience that guides clients through selecting services, technicians, and appointment times while communicating key policies.

## User Objectives
- Select a preferred service and technician quickly.
- Understand deposit, cancellation, and preparation policies.
- Access alternative support channels if questions arise.

## Page Structure
1. **Intro Banner** — Headline, subcopy clarifying booking steps, CTA to scheduler.
2. **Booking Steps Overview** — Visual guide (Choose Service → Pick Time → Confirm → Shine).
3. **Scheduler Embed** — Responsive GlossGenius (or selected platform) embed.
4. **Service Pre-Selection** — Optional filters or quick links to focus the embed.
5. **Preparation Tips** — Card with checklist for before the appointment.
6. **Policies Recap** — Accordion referencing cancellation, deposits, late arrival, health disclosures.
7. **Help & Support** — Contact options (call, WhatsApp, email), FAQ link.

## Data Dependencies
- Services list for quick links (pull from CMS `services`).
- Policy snippets from CMS `policy` dataset.
- Contact channels from site settings.

## Components Used
- `SectionHeading`
- `GlowButton`
- `ServiceAccordion` (optional for pre-selection)
- `BookingEmbed`
- `PolicyAccordion`
- `GlassCard`

## Interactions
- Sticky CTA button on mobile for `Need Help` contact.
- Scheduler embed loads asynchronously with loading skeleton.
- Analytics event fired on booking submissions (if supported).

## SEO & Metadata
- Title: “Book an Appointment | The Lums Charms Nail Salon”
- Meta description: Highlight convenience, friendly staff, and luxury experience.

## Analytics Events
- `booking_embed_view`
- `booking_cta_click`
- `booking_support_click`
