# Theme Tokens — The Lums Charms

## Color Tokens
| Token | Value | Description |
| --- | --- | --- |
| `color.primary` | `#BFA2FF` | Primary brand hue |
| `color.primary.dark` | `#8F76FF` | Darker variant for hover/active |
| `color.secondary` | `#FFC7D3` | Secondary supportive hue |
| `color.accent` | `#A8F0D1` | Accent for highlights and icons |
| `color.neutral.900` | `#2F233B` | Primary text |
| `color.neutral.600` | `#5E4C74` | Secondary text |
| `color.neutral.100` | `#FFF6EC` | Background |
| `color.utility.warning` | `#F5D77B` | Alert banners |
| `color.utility.success` | `#8FF5C8` | Success states |
| `color.utility.error` | `#FF8A9B` | Error states |

## Typography Tokens
| Token | Font | Size | Line Height |
| --- | --- | --- | --- |
| `font.family.display` | "Playfair Display", serif | — | — |
| `font.family.body` | "Inter", sans-serif | — | — |
| `font.family.accent` | "Great Vibes", cursive | — | — |
| `font.size.hero` | 3rem (48px) | 1.2 | |
| `font.size.h1` | 2.25rem (36px) | 1.25 | |
| `font.size.h2` | 1.75rem (28px) | 1.3 | |
| `font.size.h3` | 1.5rem (24px) | 1.35 | |
| `font.size.body` | 1.125rem (18px) | 1.5 | |
| `font.size.body-sm` | 1rem (16px) | 1.5 | |
| `font.size.caption` | 0.875rem (14px) | 1.4 | |

## Spacing Tokens
| Token | Value |
| --- | --- |
| `space.0` | 0 |
| `space.1` | 4px |
| `space.2` | 8px |
| `space.3` | 12px |
| `space.4` | 16px |
| `space.5` | 20px |
| `space.6` | 24px |
| `space.8` | 32px |
| `space.10` | 40px |
| `space.12` | 48px |
| `space.16` | 64px |

## Border Radius Tokens
| Token | Value |
| --- | --- |
| `radius.sm` | 8px |
| `radius.md` | 16px |
| `radius.lg` | 20px |
| `radius.xl` | 32px |
| `radius.full` | 999px |

## Shadow Tokens
| Token | Value |
| --- | --- |
| `shadow.soft` | `0 10px 30px rgba(47,35,59,0.12)` |
| `shadow.glow` | `0 0 25px rgba(168,240,209,0.45)` |
| `shadow.nav` | `0 6px 18px rgba(47,35,59,0.08)` |

## Gradient Tokens
| Token | Value |
| --- | --- |
| `gradient.hero` | `linear-gradient(135deg, #BFA2FF 0%, #FFC7D3 50%, #A8F0D1 100%)` |
| `gradient.button` | `linear-gradient(90deg, #FFC7D3 0%, #BFA2FF 100%)` |
| `gradient.card` | `linear-gradient(180deg, rgba(255,246,236,0.85) 0%, rgba(191,162,255,0.35) 100%)` |

## Breakpoint Tokens
| Token | Min Width | Description |
| --- | --- | --- |
| `breakpoint.xs` | 320px | Small mobile |
| `breakpoint.sm` | 480px | Large mobile |
| `breakpoint.md` | 768px | Tablet |
| `breakpoint.lg` | 1024px | Small desktop |
| `breakpoint.xl` | 1280px | Desktop |
| `breakpoint.2xl` | 1440px | Large desktop |

## Motion Tokens
| Token | Value |
| --- | --- |
| `motion.duration.short` | 150ms |
| `motion.duration.medium` | 220ms |
| `motion.duration.long` | 300ms |
| `motion.easing.standard` | `cubic-bezier(0.4, 0, 0.2, 1)` |
| `motion.easing.emphasized` | `cubic-bezier(0.22, 1, 0.36, 1)` |
| `motion.easing.decelerate` | `cubic-bezier(0.05, 0.7, 0.1, 1)` |

## Z-Index Tokens
| Token | Value |
| --- | --- |
| `z.nav` | 100 |
| `z.modal` | 1000 |
| `z.toast` | 1100 |
| `z.overlay` | 1200 |

## Usage Notes
- Map tokens to Tailwind configuration or CSS variables in `src/styles/`.
- Document updates in Storybook theming panel.
- Ensure tokens align with accessibility contrast requirements.
