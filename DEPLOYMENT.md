# The Lums Charms - Deployment Guide

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17 or later
- npm or yarn package manager
- Git

### Local Development Setup

1. **Clone the repository**
```bash
git clone [your-repo-url]
cd lums-charms
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**
```bash
cp .env.local.example .env.local
# Edit .env.local with your actual values
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
npm run build
npm run start
# or
yarn build
yarn start
```

## 📦 Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your GitHub repository on [Vercel](https://vercel.com)
3. Configure environment variables in Vercel dashboard
4. Deploy!

### Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Add environment variables in Netlify dashboard

### Self-Hosting

1. Build the application: `npm run build`
2. The build output will be in `.next` folder
3. Run: `npm run start` to start the production server
4. Use PM2 or similar for process management

## 🔧 Configuration

### Essential Environment Variables

- `NEXT_PUBLIC_BOOKING_URL` - Your booking system URL
- `NEXT_PUBLIC_CONTACT_EMAIL` - Contact email address
- `NEXT_PUBLIC_CONTACT_PHONE` - Contact phone number

### Optional Integrations

- Google Analytics: Add `NEXT_PUBLIC_GA_ID`
- Meta Pixel: Add `NEXT_PUBLIC_META_PIXEL_ID`
- Google Maps: Add `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`

## 📱 Mobile App Considerations

The website is fully responsive and works great as a PWA (Progressive Web App). To enhance mobile experience:

1. Add to home screen functionality is built-in
2. Offline support can be added with next-pwa
3. Push notifications can be integrated

## 🎨 Customization

### Brand Colors
Edit `tailwind.config.ts` to update the color palette:
- Primary: `#BFA2FF` (Luminous Lilac)
- Secondary: `#FFC7D3` (Blush Petal)
- Accent: `#A8F0D1` (Mint Sparkle)

### Typography
Fonts are loaded from Google Fonts in `globals.css`:
- Display: Playfair Display
- Body: Inter
- Accent: Great Vibes

### Content Updates
All page content can be edited directly in the respective page files under `src/app/`

## 🔍 SEO Optimization

1. Update metadata in `src/app/layout.tsx`
2. Add your domain to `robots.txt`
3. Generate and submit sitemap to Google Search Console
4. Ensure all images have proper alt text

## 📊 Performance Tips

- Images are optimized with Next.js Image component
- Lazy loading is implemented for images
- Code splitting is automatic with Next.js
- Consider implementing:
  - Redis for caching
  - CDN for static assets
  - Image optimization service

## 🛠️ Maintenance

### Regular Updates
```bash
npm update
# or
yarn upgrade
```

### Security Updates
```bash
npm audit fix
# or
yarn audit fix
```

## 📞 Support

For deployment issues or customization needs:
- Check Next.js documentation: https://nextjs.org/docs
- Review Tailwind CSS docs: https://tailwindcss.com/docs
- Contact your development team

## ✨ Launch Checklist

- [ ] All environment variables configured
- [ ] Booking system integrated and tested
- [ ] Contact forms working
- [ ] Social media links updated
- [ ] Analytics installed
- [ ] SSL certificate active
- [ ] Performance tested (Lighthouse score > 90)
- [ ] Mobile responsiveness verified
- [ ] SEO metadata complete
- [ ] Legal pages added (Privacy Policy, Terms)
- [ ] Backup system in place
- [ ] Monitoring tools configured

## 🎉 Congratulations!

Your Lums Charms website is ready to charm the world! ✨💅
