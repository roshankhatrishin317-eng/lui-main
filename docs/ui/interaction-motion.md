# Interaction & Motion Guidelines — The Lums Charms

## Motion Principles
- **Purposeful**: Every animation reinforces clarity—guiding attention or providing feedback.
- **Soft & Elegant**: Use eased curves and gentle movement to reflect pampering experience.
- **Responsive**: Motions adapt to device performance; reduce complexity on low-power devices.
- **Accessible**: Respect `prefers-reduced-motion`; provide non-animated fallbacks.

## Timing & Easing
| Interaction | Duration | Easing |
| --- | --- | --- |
| Button hover | 150ms | `cubic-bezier(0.4, 0, 0.2, 1)` |
| Card hover lift | 200ms | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Modal open/close | 220ms | `cubic-bezier(0.22, 1, 0.36, 1)` |
| Page section fade-in | 300ms | `cubic-bezier(0.25, 0.8, 0.25, 1)` |
| Carousel transition | 500ms | `cubic-bezier(0.22, 1, 0.36, 1)` |

## Interaction Patterns

### Scroll-Triggered Reveals
- Components fade and slide up (`translateY(24px)` to `0`) as they enter viewport.
- Sequence with 80ms stagger for cards in the same row.
- Use Intersection Observer with threshold 0.2.

### Hover & Focus States
- **Buttons**: Slight scale (1.02), glow shadow using `Mint Sparkle`.
- **Cards**: Elevation `translateY(-6px)` & highlight border.
- **Navigation Links**: Underline slides in from center.
- Ensure focus states are visible without relying on motion.

### Modals & Lightboxes
- Fade backdrop (opacity 0 → 0.6) in 220ms.
- Content scales from 0.96 to 1.0 while easing in.
- Trap focus; animate out before unmounting.

### Carousels
- Auto-play with gentle ease; pause on hover or focus.
- Display progress indicator for multiple testimonials.
- Use swipe gestures on touch devices with elastic edges.

### Floating Elements
- Hero sparkles follow slow keyframe float (`translateY(-6px → +6px)`, 3s, ease-in-out, alternate).
- Limit to 2–3 elements per section to avoid distraction.

## Feedback & Microinteractions
- **Form Success**: Slide-down toast message with charm icon.
- **Error States**: Shake subtle (±4px) once, paired with color change and inline message.
- **Loading**: Gradient shimmer skeleton for cards; spinner using charm-shaped outline.

## Reduced Motion Support
- Detect `prefers-reduced-motion` and disable:
  - Scroll-triggered animations (show elements instantly).
  - Auto-playing carousels (show manual controls only).
  - Floating hero elements.
- Provide CSS alternative styles as `@media (prefers-reduced-motion: reduce)`.

## Implementation Notes
- Centralize animation tokens in `src/styles/theme-tokens.md`.
- Use Framer Motion or CSS transitions; abstractions should expose `appear`, `hover`, `focus`, `exit` animations.
- Ensure animations trigger once when possible to reduce performance overhead.
