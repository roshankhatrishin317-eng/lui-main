# Policies & FAQs Page Blueprint — The Lums Charms

## Purpose
Provide clear, reassuring guidance on salon policies, hygiene standards, and frequently asked questions so clients feel confident before booking.

## Objectives
- Set expectations for cancellations, deposits, late arrivals, and health disclosures.
- Address common questions proactively to reduce customer support volume.
- Reinforce hygiene commitment and accessibility accommodations.

## Page Structure
1. **Intro Header** — Headline emphasizing client care (e.g., “Your Comfort, Our Priority”), brief paragraph, CTA to booking/contact if more questions remain.
2. **Policy Sections** — Accordion or grouped cards covering:
   - Cancellation & Rescheduling
   - Deposits & Payments
   - Late Arrival & No-Show
   - Hygiene & Sanitation
   - Accessibility & Special Requests
   - Aftercare & Maintenance Tips
3. **FAQs** — Expandable list of top questions (e.g., “Do you accept walk-ins?”, “What if I’m allergic to gel?”).
4. **Resources** — Links to downloadable prep guides or aftercare PDFs (optional).
5. **Contact CTA** — Encourage clients to reach out for clarification.

## Data Dependencies
- Policy content from CMS `policy` documents.
- FAQ entries sourced from CMS or static JSON.
- Resource file links (hosted in CMS or storage).

## Components Used
- `SectionHeading`
- `PolicyAccordion`
- `FAQList`
- `GlowButton`
- `ContactSupportCard`

## Tone Guidelines
- Use warm, reassuring language while maintaining professionalism.
- Highlight flexibility and willingness to accommodate.
- Provide actionable tips (e.g., arrive 10 minutes early for charm selection).

## SEO & Metadata
- Title: “Policies & FAQs | The Lums Charms Nail Salon”
- Meta description: Outline transparency, client care, hygiene standards.
- Structured data: `FAQPage` schema for individual questions.

## Analytics Events
- `policy_section_expand`
- `faq_question_expand`
- `policy_contact_cta_click`
