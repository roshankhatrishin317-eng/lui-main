# Shared Components Overview — The Lums Charms

## Purpose
Document reusable UI components leveraged across pages, their prop contracts, data dependencies, and testing considerations.

## Component Inventory

### NavigationBar
- **Usage**: `Home`, `Portfolio`, `Services`, `About`, `Blog`, `Contact` pages.
- **Props**
  - `links: { label: string; href: string; }[]`
  - `cta: { label: string; href: string; }`
  - `socialLinks?: { platform: 'instagram' | 'tiktok' | 'pinterest' | 'facebook'; href: string; }[]`
- **Data Source**: Static config in `src/data/navigation.ts`.
- **Testing**: Snapshot + interaction tests (drawer toggle, focus states).

### Footer
- **Usage**: All pages.
- **Props**
  - `contactInfo`, `hours`, `socialLinks`, `newsletterForm` handlers.
- **Data Source**: CMS for hours/policies; static for social URLs.
- **Notes**: Includes newsletter subscription form hooking into marketing automation.

### FloatingCTA
- **Usage**: `Home`, `Portfolio`, `Services` (mobile emphasis).
- **Props** `label`, `href`, `visibilityThreshold`.
- **Behavior**: Appears after threshold via Intersection Observer.

### SectionHeading
- **Usage**: Section intros across pages.
- **Props** `tagline`, `heading`, `description`, `alignment` (left/center).
- **Notes**: Supports script font tagline toggle.

### GlowButton
- **Usage**: Primary CTAs.
- **Props** `variant`, `href`, `onClick`, `iconPosition`, `analyticsId`.
- **States**: `:hover`, `:focus`, `:disabled`, `:loading`.

### GlassCard
- **Usage**: Services list, testimonials, team bios.
- **Props** `title`, `subtitle`, `media`, `content`, `actions`.
- **Testing**: Visual regression for gradients and shadows.

### TestimonialCarousel
- **Usage**: `Home`, `About`.
- **Props** `items: Testimonial[]`, `autoPlay`, `interval`.
- **Data Source**: CMS `testimonials` dataset.
- **Notes**: Pause on hover/focus, accessible controls.

### PortfolioGrid
- **Usage**: `Home` (preview), `Portfolio` (full gallery).
- **Props** `items`, `filters`, `onFilterChange`, `onSelectItem`.
- **Data Source**: CMS `portfolioEntries` with category tags.
- **Notes**: Accepts layout mode `preview` or `full`.

### PortfolioLightbox
- **Usage**: `PortfolioGrid` detail view.
- **Props** `item`, `onClose`, `onBookLook`, `onShare`.
- **Notes**: Preloads next/previous images.

### ServiceAccordion
- **Usage**: `Services`, `Booking` (pre-selection).
- **Props** `services`, `defaultExpanded`, `onSelect`.
- **Data Source**: CMS `services` dataset.

### PolicyAccordion
- **Usage**: `Services`, `Policies`, `Booking`, `Contact`.
- **Props** `policies`, `variant`.

### NewsletterForm
- **Usage**: `Home`, `Blog`, `Footer`.
- **Props** `onSubmit`, `submitLabel`, `successMessage`, `errorMessage`.
- **Integration**: Marketing API (e.g., Mailchimp/ConvertKit).

### BlogCard
- **Usage**: `Blog` list, related posts.
- **Props** `title`, `slug`, `excerpt`, `coverImage`, `tags`, `readTime`.
- **Data Source**: CMS `posts` dataset.

### ContactForm
- **Usage**: `Contact`, fallback on `Booking`.
- **Props** `onSubmit`, `successState`, `errorState`, `validationSchema`.
- **Integration**: Email service (Resend/Formspree) with optional CRM hook.

## Data Layer
- Centralize CMS fetching in `src/lib/cms.ts` with typed models.
- Use SWR or Next.js fetch caching for static content.
- Provide fallback JSON in `src/data/` for local development without CMS.

## Testing Strategy
- Unit tests with React Testing Library for interactivity.
- Storybook stories for visual regression using Chromatic.
- Integration tests for booking CTA firing analytics events.

## Accessibility Considerations
- Provide ARIA attributes on carousels, modals, accordions.
- Ensure keyboard focus order matches visual flow.
- Use focus traps for modal components.

## Analytics & Telemetry
- Components expose `analyticsId` props to trigger GA4 events via `useAnalytics()` hook.
- Track key interactions: `book_now_click`, `portfolio_filter_apply`, `newsletter_submit`.
