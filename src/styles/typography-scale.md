# Typography Scale — The Lums Charms

## Desktop Scale (≥ 1024px)
| Token | Font | Size | Line Height | Usage |
| --- | --- | --- | --- | --- |
| `display-hero` | Playfair Display | 56px | 120% | Home hero headline |
| `display-xl` | Playfair Display | 44px | 120% | Key section headers |
| `display-lg` | Playfair Display | 36px | 125% | Page intros |
| `heading-md` | Playfair Display | 28px | 130% | Card headings |
| `heading-sm` | Playfair Display | 24px | 135% | Sub-section titles |
| `body-lg` | Inter | 20px | 150% | Hero subcopy |
| `body-md` | Inter | 18px | 150% | Paragraph copy |
| `body-sm` | Inter | 16px | 150% | Secondary text |
| `caption` | Inter | 14px | 140% | Metadata, labels |
| `overline` | Inter uppercase | 12px | 140% | Category tags |

## Tablet Scale (768–1023px)
| Token | Size | Line Height | Notes |
| --- | --- | --- | --- |
| `display-hero` | 48px | 120% | Reduce heading margin to maintain balance |
| `display-lg` | 34px | 125% | |
| `heading-md` | 26px | 130% | |
| `body-md` | 17px | 150% | |
| `body-sm` | 15px | 150% | |
| `caption` | 13px | 140% | |

## Mobile Scale (≤ 767px)
| Token | Size | Line Height | Notes |
| --- | --- | --- | --- |
| `display-hero` | 38px | 125% | Center align for hero modules |
| `display-lg` | 30px | 130% | |
| `heading-md` | 24px | 140% | |
| `body-md` | 16px | 155% | |
| `body-sm` | 15px | 155% | |
| `caption` | 13px | 145% | |
| `overline` | 11px | 140% | Track 120 |

## Accent Script Usage
- Apply `Great Vibes` accent for taglines or quotes up to 32px size.
- Limit to 1–2 uses per page to maintain readability.
- Pair with supporting body text for context.

## Leading & Tracking
- Use additional letter spacing (`0.02em`) for uppercase headings.
- Reduce tracking (`-0.01em`) for large display text to prevent gaps.

## Responsive Guidelines
- Apply fluid typography using CSS clamp for hero and section headings.
- Example: `clamp(2.25rem, 1.8rem + 1.5vw, 3.5rem)` for `display-lg`.

## Accessibility Considerations
- Maintain minimum font size of 15px for body text on mobile.
- Ensure sufficient contrast between text and backgrounds per WCAG AA.
- Provide user preference toggles if considering increased font sizing.
