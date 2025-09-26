# Booking Integration — The Lums Charms

## Platform Selection
- **Primary Choice**: GlossGenius
  - Embedded scheduler with customizable branding.
  - Supports deposits, automated reminders, and staff assignments.
  - Mobile-first experience with accessible UI.
- **Alternatives**: Square Appointments, Fresha.
  - Evaluate if GlossGenius lacks specific features (e.g., multi-location support).

## Integration Modes
1. **Embedded Widget**
   - Use provider’s iframe embed in `Booking` page.
   - Customize colors to match brand palette (`#BFA2FF`, `#FFC7D3`).
2. **Direct Link**
   - Fallback link for devices not supporting iframe or if script fails.
3. **API Integration** (optional future enhancement)
   - Fetch availability to preview open slots on other pages.

## Implementation Steps
1. Obtain embed code from booking provider dashboard.
2. Create `BookingEmbed` component with responsive wrapper and loading skeleton.
3. Add script to allow height auto-resize (if supported).
4. Provide fallback link styled as `GlowButton` to external booking page.
5. Track analytics events (view, CTA clicks) via `useAnalytics()`.

## Configuration
- **Environment Variables** (if using API)
  ```
  BOOKING_API_KEY=secureKey
  BOOKING_LOCATION_ID=locationId
  BOOKING_URL=https://glossgenius.com/.../book
  ```
- **Embed Snippet** example:
  ```html
  <iframe
    src="https://glossgenius.com/book/..."
    allowtransparency="true"
    scrolling="auto"
    frameborder="0"
  ></iframe>
  ```

## Accessibility
- Ensure iframe has `title="Booking schedule"`.
- Provide fallback text and link when iframe fails to load.
- Maintain focus management when opening support modal from booking page.

## Testing Checklist
- Verify embed loads on Chrome, Safari, Firefox, Edge.
- Confirm booking flow on iOS Safari and Android Chrome.
- Check deposit amounts and appointment times match provider settings.
- Validate confirmation emails/SMS are triggered as expected.
- Run fallback link test by blocking iframe to ensure graceful degradation.

## Future Enhancements
- Implement availability preview cards on Home and Services pages.
- Sync booking data to CRM via webhooks for automated follow-ups.
- Add membership booking flows or express checkout for loyal clients.
