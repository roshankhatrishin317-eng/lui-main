# Contact Page Blueprint — The Lums Charms

## Purpose
Provide multiple communication avenues for clients, including direct contact, location info, and quick access to support resources.

## User Goals
- Find salon address, hours, and map.
- Submit inquiries (group bookings, custom designs, accessibility needs).
- Access alternative contact methods (phone, WhatsApp, email).

## Page Structure
1. **Intro Block** — Headline (“Let’s Talk Charms”), subcopy reinforcing hospitality, CTA to call or message.
2. **Quick Action Buttons** — Call, WhatsApp, Email; large, accessible touch targets.
3. **Contact Form** — Fields (Name, Email, Phone, Preferred Date, Message, Service Interest dropdown).
4. **Location & Hours** — Map embed (Google Maps), operating hours card, parking/transit info.
5. **Policies Reminder** — Link to policies (cancellation, accessibility, aftercare).
6. **Social Connect** — Icons with short invitation (“Follow the sparkle on Instagram”).
7. **FAQ Teaser** — Link to top FAQs or inline summary.

## Data Dependencies
- Salon contact details (phone, email, address) from settings.
- Hours and special notes (holiday closures).
- Integration endpoint for form submissions (email service or CRM).

## Components Used
- `SectionHeading`
- `GlowButton`
- `ContactForm`
- `GlassCard`
- `PolicyAccordion` (teaser)
- `MapEmbed`

## Interactions
- Quick action buttons trigger appropriate actions (tel, wa.me link, mailto).
- Form validation with inline feedback, success toast.
- Map with light/dark mode compliance.

## SEO & Metadata
- Title: “Contact Us | The Lums Charms Nail Salon”
- Meta description: Emphasize quick responses, friendly support, and location.

## Analytics Events
- `contact_quick_action_click`
- `contact_form_submit`
- `contact_policy_link_click`
