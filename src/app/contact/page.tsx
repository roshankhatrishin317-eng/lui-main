'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { GlowButton } from '@/components/ui/GlowButton'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionHeading } from '@/components/ui/SectionHeading'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-50 to-neutral-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            tagline="Get in Touch"
            heading="Let's Talk Charms"
            description="Have questions? Want to book a group event? We're here to help make your nail dreams come true"
          />
        </div>
      </section>
      
      {/* Contact Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <GlassCard>
                <h3 className="font-display text-2xl font-semibold mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-1">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="">Select a service</option>
                      <option value="classic">Classic Charm Manicure</option>
                      <option value="premium">Premium Glow Manicure</option>
                      <option value="luxury">Luxury Charm Extensions</option>
                      <option value="express">Express Refresh</option>
                      <option value="group">Group Booking</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                    />
                  </div>
                  
                  <GlowButton type="submit" size="lg" className="w-full">
                    Send Message ✨
                  </GlowButton>
                </form>
              </GlassCard>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-8"
            >
              {/* Quick Contact */}
              <GlassCard>
                <h3 className="font-display text-2xl font-semibold mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+15551234567"
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    <span className="text-3xl">📞</span>
                    <div>
                      <p className="font-semibold">Call Us</p>
                      <p className="text-neutral-600">(555) 123-4567</p>
                    </div>
                  </a>
                  
                  <a
                    href="mailto:hello@lumscharms.com"
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    <span className="text-3xl">✉️</span>
                    <div>
                      <p className="font-semibold">Email Us</p>
                      <p className="text-neutral-600">hello@lumscharms.com</p>
                    </div>
                  </a>
                  
                  <a
                    href="https://wa.me/15551234567"
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    <span className="text-3xl">💬</span>
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className="text-neutral-600">Chat with us</p>
                    </div>
                  </a>
                </div>
              </GlassCard>
              
              {/* Location */}
              <GlassCard>
                <h3 className="font-display text-2xl font-semibold mb-6">Visit Our Salon</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Address</h4>
                    <p className="text-neutral-600">
                      123 Charm Street<br />
                      Luxury District, LD 90210
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Hours</h4>
                    <div className="text-neutral-600 space-y-1">
                      <p>Monday - Friday: 10:00 AM - 8:00 PM</p>
                      <p>Saturday: 9:00 AM - 7:00 PM</p>
                      <p>Sunday: 9:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Parking</h4>
                    <p className="text-neutral-600">
                      Free street parking available. Valet service on weekends.
                    </p>
                  </div>
                </div>
              </GlassCard>
              
              {/* Social Media */}
              <GlassCard>
                <h3 className="font-display text-2xl font-semibold mb-6">Follow the Sparkle</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                  >
                    <span className="text-xl">📷</span>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-all"
                  >
                    <span className="text-xl">🎵</span>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all"
                  >
                    <span className="text-xl">📌</span>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center hover:bg-gold hover:text-white transition-all"
                  >
                    <span className="text-xl">📘</span>
                  </a>
                </div>
                <p className="text-sm text-neutral-600 mt-4">
                  @thelumscharms • Share your nails with #TheLumsCharms
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-neutral-100">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl overflow-hidden shadow-soft">
            <div className="h-[400px] bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <div className="text-center">
                <span className="text-5xl mb-4 block">📍</span>
                <p className="text-neutral-600">Interactive map would go here</p>
                <GlowButton
                  href="https://maps.google.com"
                  variant="secondary"
                  size="sm"
                  className="mt-4"
                >
                  Get Directions
                </GlowButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
