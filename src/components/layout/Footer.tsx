import React from 'react'
import Link from 'next/link'
import { GlowButton } from '@/components/ui/GlowButton'

const footerLinks = {
  services: [
    { label: 'Classic Charm Manicure', href: '/services#classic' },
    { label: 'Premium Glow', href: '/services#premium' },
    { label: 'Luxury Extensions', href: '/services#luxury' },
    { label: 'Gift Cards', href: '/gift-cards' }
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' }
  ],
  support: [
    { label: 'Booking Policy', href: '/policies#booking' },
    { label: 'FAQs', href: '/policies#faqs' },
    { label: 'Aftercare Tips', href: '/blog/aftercare' },
    { label: 'Accessibility', href: '/policies#accessibility' }
  ]
}

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-neutral-50 to-neutral-100 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="glass-effect rounded-3xl p-8 md:p-12 mb-16 text-center">
          <h3 className="font-accent text-3xl text-primary mb-3">Stay Charmed</h3>
          <h4 className="text-display-lg font-display mb-4">Get Monthly Nail Inspiration</h4>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
            Join our sparkle squad for exclusive offers, nail care tips, and first looks at seasonal collections.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-3 rounded-full border border-neutral-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <GlowButton type="submit" size="md">
              Subscribe ✨
            </GlowButton>
          </form>
        </div>
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="font-accent text-3xl text-gradient">The Lums Charms</span>
            </Link>
            <p className="text-neutral-600 mb-6">
              Where every nail tells a story of luminous artistry and meticulous care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <span>📷</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-all">
                <span>🎵</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                <span>📌</span>
              </a>
            </div>
          </div>
          
          {/* Links Columns */}
          <div>
            <h5 className="font-display font-semibold text-neutral-900 mb-4">Services</h5>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-neutral-600 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h5 className="font-display font-semibold text-neutral-900 mb-4">Company</h5>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-neutral-600 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h5 className="font-display font-semibold text-neutral-900 mb-4">Support</h5>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-neutral-600 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Contact Info */}
        <div className="border-t border-neutral-200 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <h6 className="font-semibold text-neutral-900 mb-2">Visit Us</h6>
              <p className="text-neutral-600">
                123 Charm Street<br />
                Luxury District, LD 90210
              </p>
            </div>
            <div>
              <h6 className="font-semibold text-neutral-900 mb-2">Hours</h6>
              <p className="text-neutral-600">
                Mon-Fri: 10am - 8pm<br />
                Sat-Sun: 9am - 7pm
              </p>
            </div>
            <div>
              <h6 className="font-semibold text-neutral-900 mb-2">Contact</h6>
              <p className="text-neutral-600">
                📞 (555) 123-4567<br />
                ✉️ hello@lumscharms.com
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-neutral-200 pt-8 text-center text-sm text-neutral-600">
          <p>© 2024 The Lums Charms. All rights reserved. Made with 💅 and ✨</p>
        </div>
      </div>
    </footer>
  )
}
