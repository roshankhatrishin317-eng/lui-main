# Component Specifications — The Lums Charms

## Global Components

### NavigationBar
- **Description** Sticky glassmorphic top navigation with logo, links, and CTA.
- **Variants** Desktop (horizontal links), Mobile (hamburger menu + drawer).
- **States** Default, on-scroll compressed, mobile drawer open.
- **Props** `links[]`, `ctaLabel`, `ctaHref`, `socialLinks[]`.
- **Notes** Apply blur (`backdrop-filter: blur(16px)`), border (`rgba(255,255,255,0.3)`).

### GlowButton
- **Description** Primary action button with pill shape and gradient background.
- **Variants** Primary, Secondary (outline), Tertiary (link style with underline).
- **States** Default, hover (glow shadow, gradient shift), active (pressed depth), disabled (opacity 0.4).
- **Props** `label`, `href` or `onClick`, `variant`, `icon` optional.

### GlassCard
- **Description** Frosted card backdrop used for service highlights and content blocks.
- **Layout** Padding 24px desktop / 16px mobile, border radius 20px, inner shadow.
- **States** Default, hover lift (+4px translate), selected (accent border `#A8F0D1`).
- **Props** `title`, `description`, `media`, `cta`.

### SectionHeading
- **Description** Heading pairing with accent script tagline.
- **Structure** Tagline (script), headline (Playfair), optional description (Inter).
- **Props** `tagline`, `heading`, `intro`.

### CharmDivider
- **Description** Decorative separator featuring sparkles or dotted line.
- **Variants** Horizontal line with center icon, dotted gradient.
- **Usage** Between home sections, in testimonials.

## Page-Specific Components

### HeroSpotlight (`Home`)
- **Elements** Large heading, supporting copy, two CTA buttons, background video or image, floating charm icons.
- **Behavior** Subtle parallax on charms (10px shift). Fallback static image on low-power devices.

### ServiceCarousel (`Home`)
- **Layout** Horizontal scroll with snap points, card width 280px mobile / 320px desktop.
- **Content** Icon, service name, duration, price, CTA.
- **Interaction** Snap-to-center, auto-scroll paused on hover.

### SignatureGallery (`Home` & `Portfolio`)
- **Grid** Masonry using CSS columns; ratio 4:5 imagery.
- **Interaction** Hover overlay with style name and technician, click opens `PortfolioLightbox`.

### PortfolioLightbox
- **Modal** Full-screen overlay with image carousel, details, CTA buttons.
- **Accessibility** Trap focus, ESC to close, swipable on mobile.
- **Props** `item`, `onClose`, `onBook`.

### TestimonialCarousel
- **Layout** Two cards desktop, single card mobile.
- **Data** Quote, name, service, rating, avatar.
- **Interaction** Autoplay 6s, manual arrows, pagination dots.

### TeamCard (`About`)
- **Elements** Portrait photo, name, role, specialties, certifications, social link.
- **States** Hover reveals fun fact, CTA to view portfolio.

### BookingEmbed
- **Wrapper** Responsive container for GlossGenius (16px radius, drop shadow).
- **Fallback** Link to external booking page if iframe fails.
- **Extras** Panel with tips, deposit note, contact support.

### BlogCard
- **Structure** Image, category tag, title, excerpt, metadata (date, read time).
- **Interaction** Hover lift, highlight `Mint Sparkle` underline.

### ContactForm
- **Fields** Name, email, phone, preferred date/time, message.
- **Validation** Inline messaging, success toast.
- **Accessibility** Labels tied to inputs, error text `aria-live` polite.

## Data Components

### StatBadge
- **Usage** Display key stats (e.g., "500+ Charm Sessions").
- **Props** `label`, `value`, `icon` optional.

### PolicyAccordion
- **Structure** Title, description text.
- **Interaction** Expand/collapse with smooth height transition.
- **Accessibility** `aria-expanded`, `aria-controls`, focusable headers.

## Utility Components

### FloatingCTA
- **Description** Sticky bottom CTA on mobile, floating pill on desktop.
- **Trigger** Appears after user scrolls 25% of page.
- **Props** `label`, `href`, `analyticsEvent`.

### ScrollIndicator
- **Description** Animated chevron hint below hero.
- **Behavior** Looping fade/slide animation.

## Component Tokens
- **Spacing** `space-2 = 8px`, `space-4 = 16px`, `space-6 = 24px`, `space-10 = 40px`.
- **Borders** `radius-lg = 20px`, `radius-pill = 999px`.
- **Shadows** `shadow-soft = 0 10px 30px rgba(47,35,59,0.12)`, `shadow-glow = 0 0 20px rgba(168,240,209,0.45)`.

## Documentation
- Capture each component in Storybook with controls for theme and state variations.
- Map components to CMS data sources in `src/app/shared-components.md`.
