'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GlowButton } from '@/components/ui/GlowButton'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionHeading } from '@/components/ui/SectionHeading'

const bookingSteps = [
  { icon: '📅', title: 'Choose Service', description: 'Select from our signature services' },
  { icon: '👩‍🎨', title: 'Pick Artist', description: 'Choose your preferred nail technician' },
  { icon: '⏰', title: 'Select Time', description: 'Find a time that works for you' },
  { icon: '✨', title: 'Confirm & Shine', description: 'Complete booking and get ready to glow' }
]

const preparationTips = [
  'Remove any existing nail polish before your appointment',
  'Avoid cutting or trimming your cuticles at home',
  'Moisturize your hands daily leading up to your appointment',
  'Arrive 10 minutes early for consultation and charm selection',
  'Bring inspiration photos if you have specific designs in mind'
]

export default function BookingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-50 to-neutral-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            tagline="Book Online"
            heading="Reserve Your Charm Session"
            description="Booking your perfect nail appointment has never been easier. Follow these simple steps to secure your spot"
          />
          
          {/* Booking Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {bookingSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-neutral-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Booking Widget Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Booking Area */}
            <div className="lg:col-span-2">
              <GlassCard className="h-full">
                <div className="min-h-[600px] flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl">
                  <div className="text-center p-8">
                    <span className="text-6xl mb-6 block animate-float">📅</span>
                    <h3 className="font-display text-2xl font-semibold mb-4">
                      Online Booking System
                    </h3>
                    <p className="text-neutral-600 mb-8 max-w-md mx-auto">
                      Our booking system would be embedded here. For now, you can call us or use the button below to book through our external platform.
                    </p>
                    <div className="space-y-3">
                      <GlowButton href="#" size="lg" className="w-full max-w-sm mx-auto">
                        Book on GlossGenius →
                      </GlowButton>
                      <p className="text-sm text-neutral-500">or</p>
                      <GlowButton href="/contact" variant="secondary" size="md">
                        Contact Us to Book
                      </GlowButton>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
            
            {/* Sidebar Information */}
            <div className="space-y-6">
              {/* Preparation Tips */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <GlassCard>
                  <h3 className="font-display text-xl font-semibold mb-4">
                    Preparation Tips
                  </h3>
                  <ul className="space-y-3">
                    {preparationTips.map((tip, index) => (
                      <li key={index} className="flex items-start text-sm text-neutral-600">
                        <span className="text-accent mr-2">✓</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
              
              {/* Policies */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <GlassCard>
                  <h3 className="font-display text-xl font-semibold mb-4">
                    Booking Policies
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Deposits</h4>
                      <p className="text-sm text-neutral-600">
                        20% deposit required to secure your appointment
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Cancellation</h4>
                      <p className="text-sm text-neutral-600">
                        24-hour notice required for full refund
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Late Arrival</h4>
                      <p className="text-sm text-neutral-600">
                        Service may be shortened to accommodate next client
                      </p>
                    </div>
                  </div>
                  <GlowButton href="/policies" variant="tertiary" size="sm" className="mt-4">
                    View All Policies →
                  </GlowButton>
                </GlassCard>
              </motion.div>
              
              {/* Need Help */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <GlassCard>
                  <h3 className="font-display text-xl font-semibold mb-4">
                    Need Help?
                  </h3>
                  <p className="text-sm text-neutral-600 mb-4">
                    Our team is here to assist with your booking
                  </p>
                  <div className="space-y-2">
                    <a
                      href="tel:+15551234567"
                      className="flex items-center space-x-3 text-sm hover:text-primary transition-colors"
                    >
                      <span>📞</span>
                      <span>(555) 123-4567</span>
                    </a>
                    <a
                      href="https://wa.me/15551234567"
                      className="flex items-center space-x-3 text-sm hover:text-primary transition-colors"
                    >
                      <span>💬</span>
                      <span>WhatsApp Chat</span>
                    </a>
                    <a
                      href="mailto:hello@lumscharms.com"
                      className="flex items-center space-x-3 text-sm hover:text-primary transition-colors"
                    >
                      <span>✉️</span>
                      <span>Email Support</span>
                    </a>
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Group Bookings */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-50 to-neutral-100">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="glass-effect rounded-3xl p-8 md:p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-5xl mb-4 block">👯‍♀️</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Planning a Group Event?
            </h2>
            <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
              Perfect for bridal parties, birthdays, or team celebrations! We offer special packages 
              for groups of 4 or more with complimentary refreshments and exclusive charm selections.
            </p>
            <GlowButton href="/contact?type=group" size="lg">
              Inquire About Group Bookings
            </GlowButton>
          </motion.div>
        </div>
      </section>
    </>
  )
}
