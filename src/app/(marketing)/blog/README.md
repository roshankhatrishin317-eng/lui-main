# Blog Page Blueprint — The Lums Charms

## Purpose
Deliver inspiring nail-care content, trend coverage, and salon stories that drive engagement, support SEO, and funnel readers toward booking and newsletter subscription.

## Audience Needs
- Discover seasonal nail trends and styling inspiration.
- Learn maintenance tips and product recommendations.
- Stay updated on salon news, promos, and events.

## Page Structure
1. **Hero Feature** — Highlight featured article with cover image, excerpt, primary CTA.
2. **Category Filters** — Sticky pill navigation (Trends, Care Tips, Behind the Scenes, Bridal Inspo).
3. **Article Grid** — Three-column layout on desktop, single column on mobile.
4. **Newsletter CTA** — Inline subscription block with value proposition.
5. **Popular Topics** — Tag cloud linking to filtered views.
6. **Recent Posts** — Chronological list with smaller cards.
7. **Footer Teaser** — CTA to services or booking.

## Article Detail Template
- Hero image, title, author, publish date, read time.
- Body content (Portable Text) with rich embeds (image, video, quotes).
- Pull quotes styled with accent script.
- Related posts module at end.
- CTA block linking to relevant service or booking.

## Data Dependencies
- Blog posts from CMS (`blogPost` documents) with categories, tags, reading time.
- Author profiles referencing team members.
- Newsletter integration endpoint.

## Components Used
- `SectionHeading`
- `CategoryPills`
- `BlogCard`
- `NewsletterForm`
- `RelatedPosts`
- `GlowButton`

## SEO & Metadata
- Listing Title: “Nail Care & Trend Blog | The Lums Charms”
- Article Schema: `BlogPosting` with author, publisher, hero image, publish date.
- Encourage keyword-rich headings and alt text for imagery.

## Analytics Events
- `blog_category_filter`
- `blog_article_open`
- `newsletter_submit`
- `blog_cta_click`
