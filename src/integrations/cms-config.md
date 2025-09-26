# CMS Configuration — Sanity for The Lums Charms

## Overview
Sanity CMS will manage dynamic content including services, portfolio entries, testimonials, blog posts, team bios, and policies. The following outlines schema definitions, datasets, environment variables, and workflows.

## Project Setup
- **Sanity Project Name**: `lums-charms`
- **Dataset**: `production` (use `staging` for preview/testing).
- **Studio**: Hosted or embedded via Sanity Studio in Next.js `/studio` route.
- **Access Control**: Invite teammates with appropriate roles (Admin, Editor, Viewer).

## Environment Variables
```
SANITY_PROJECT_ID=yourProjectId
SANITY_DATASET=production
SANITY_API_VERSION=2023-10-01
SANITY_API_TOKEN=yourWriteToken (secure storage only)
```
- Store in `.env.local`, never commit tokens.

## Schema Overview
- **service**
  - `title`, `slug`, `description`, `duration`, `price`, `addOns[]`, `category`, `image`, `hygieneNotes`.
- **portfolioEntry**
  - `title`, `slug`, `gallery[]`, `styleTags[]`, `technician`, `description`, `materials`, `serviceReference`, `publishedAt`.
- **technician**
  - `name`, `slug`, `bio`, `specialties[]`, `certifications[]`, `photo`, `yearsExperience`, `instagram`.
- **testimonial**
  - `clientName`, `quote`, `service`, `rating`, `source`, `avatar.
- **blogPost**
  - `title`, `slug`, `author`, `coverImage`, `excerpt`, `body` (Portable Text), `tags[]`, `readTime`, `publishedAt`.
- **policy**
  - `title`, `slug`, `category`, `content`, `updatedAt`.
- **promotion** (optional)
  - `title`, `slug`, `description`, `validThrough`, `ctaLabel`, `ctaUrl`.

## Content Modeling Considerations
- Use references for relationships (`portfolioEntry` → `technician`, `service`).
- Add `order` fields where manual sorting is required (e.g., testimonials).
- Include `featured` booleans for home page highlights.
- Capture SEO metadata fields per document (title, description, open graph image).

## Queries & Fetching
- Use GROQ queries in `src/lib/cms.ts`.
- Example: Fetch featured services
  ```ts
  *[_type == "service" && featured == true] | order(order asc){
    title,
    slug,
    duration,
    price,
    description,
    image{
      asset->{url, metadata}
    }
  }
  ```
- Utilize ISR (Incremental Static Regeneration) or on-demand revalidation.

## Preview Workflow
- Implement `PreviewProvider` with `next-sanity`.
- Provide `/api/preview` route to enable live content previews.
- Only authenticated users with preview token can access draft content.

## Asset Management
- Use Sanity image pipeline with hotspots for portfolio imagery.
- Tag assets by category for easier reuse.
- Provide alt text fields for accessibility.

## Change Management
- Maintain schema definitions in `src/sanity/schema/`.
- Document schema changes in pull requests.
- Implement migration scripts for structural updates (e.g., `sanity exec scripts/migrate.js`).

## Localization (Future Proofing)
- Prepare for multi-language by separating content fields (`title_en`, `title_es`) or using Sanity’s i18n plugin.

## Security
- Restrict write tokens to server-side usage.
- Monitor usage in Sanity dashboard.
- Enable backups/export content regularly.

## Deployment
- Configure Vercel build hook to trigger revalidation on document publish.
- Use Sanity webhooks to POST to `/api/revalidate` in Next.js with secret token.
