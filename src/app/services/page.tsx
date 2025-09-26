'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { GlowButton } from '@/components/ui/GlowButton'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionHeading } from '@/components/ui/SectionHeading'

const services = [
  {
    id: 'classic',
    title: 'Classic Charm Manicure',
    price: '$65',
    duration: '60 minutes',
    description: 'Our signature service featuring premium gel polish, hand massage, and simple nail art',
    includes: [
      'Nail shaping and cuticle care',
      'Premium gel polish application',
      'Simple nail art or accent nails',
      'Moisturizing hand massage',
      'Hot towel treatment'
    ],
    icon: '💅'
  },
  {
    id: 'premium',
    title: 'Premium Glow Manicure',
    price: '$95',
    duration: '90 minutes',
    description: 'Enhanced luxury treatment with advanced nail art and premium charm applications',
    includes: [
      'Everything in Classic Charm',
      'Advanced nail art design',
      'Premium charm applications',
      'Paraffin wax treatment',
      'Extended hand and arm massage',
      'Complimentary beverage'
    ],
    icon: '✨'
  },
  {
    id: 'luxury',
    title: 'Luxury Charm Extensions',
    price: '$150+',
    duration: '150 minutes',
    description: 'Full set of gel extensions with custom length, shape, and elaborate nail art',
    includes: [
      'Custom gel extensions',
      'Perfect shape and length consultation',
      'Elaborate hand-painted designs',
      '3D charms and embellishments',
      'Luxury spa treatment for hands',
      'Aftercare kit included'
    ],
    icon: '💎'
  },
  {
    id: 'express',
    title: 'Express Refresh',
    price: '$45',
    duration: '45 minutes',
    description: 'Quick polish change with basic nail care for busy schedules',
    includes: [
      'Basic nail shaping',
      'Quick cuticle care',
      'Regular or gel polish',
      'Simple accent design',
      'Express dry service'
    ],
    icon: '⚡'
  }
]

const addOns = [
  { name: 'Chrome Finish', price: '$15', description: 'Mirror-like metallic finish' },
  { name: '3D Charms', price: '$20', description: 'Premium 3D embellishments per nail' },
  { name: 'Hand-painted Art', price: '$25', description: 'Custom artistic designs' },
  { name: 'Paraffin Treatment', price: '$20', description: 'Deep moisturizing wax treatment' },
  { name: 'Gel Removal', price: '$15', description: 'Safe removal of existing gel polish' },
  { name: 'French Tips', price: '$10', description: 'Classic or colored French manicure' }
]

const faqs = [
  {
    question: 'How long do gel nails last?',
    answer: 'Our premium gel manicures typically last 2-3 weeks with proper care. Extensions can last 3-4 weeks before requiring a fill.'
  },
  {
    question: 'Do you accept walk-ins?',
    answer: 'We recommend booking in advance to secure your preferred time, but we do accept walk-ins based on availability.'
  },
  {
    question: 'What if I need to cancel?',
    answer: 'We require 24-hour notice for cancellations. Late cancellations may forfeit deposits.'
  },
  {
    question: 'Are your products safe?',
    answer: 'We use only premium, non-toxic, and cruelty-free products. All tools are thoroughly sanitized between clients.'
  },
  {
    question: 'Can I bring my own design ideas?',
    answer: 'Absolutely! We love creating custom designs. Feel free to bring photos or ideas for inspiration.'
  }
]

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-50 to-neutral-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            tagline="Our Services"
            heading="Bespoke Nail Artistry"
            description="From express refreshes to luxury transformations, each service is tailored to pamper and perfect"
          />
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="h-full">
                  <div className="flex items-start space-x-4">
                    <span className="text-4xl">{service.icon}</span>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl font-semibold mb-2">
                        {service.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-neutral-600 mb-3">
                        <span className="font-semibold text-primary text-lg">{service.price}</span>
                        <span>•</span>
                        <span>{service.duration}</span>
                      </div>
                      <p className="text-neutral-700 mb-4">
                        {service.description}
                      </p>
                      <div className="space-y-2">
                        <p className="font-semibold text-sm text-neutral-900">Includes:</p>
                        <ul className="space-y-1">
                          {service.includes.map((item, i) => (
                            <li key={i} className="flex items-start text-sm text-neutral-600">
                              <span className="text-accent mr-2">✓</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-6">
                        <GlowButton href={`/booking?service=${service.id}`} size="sm" className="w-full">
                          Book This Service
                        </GlowButton>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Add-Ons Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-50 to-neutral-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            heading="Enhance Your Experience"
            description="Add these premium options to any service"
            alignment="center"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="bg-white rounded-xl p-4 border border-neutral-200 hover:border-primary/30 hover:shadow-soft transition-all duration-300">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">{addon.name}</h4>
                    <span className="text-primary font-semibold">+{addon.price}</span>
                  </div>
                  <p className="text-sm text-neutral-600">{addon.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            heading="Frequently Asked Questions"
            alignment="center"
          />
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <button
                  className="w-full text-left bg-white rounded-xl p-6 shadow-soft hover:shadow-card transition-all duration-300"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-lg">{faq.question}</h3>
                    <span className={`text-2xl transition-transform duration-300 ${
                      openFaq === index ? 'rotate-45' : ''
                    }`}>
                      +
                    </span>
                  </div>
                  {openFaq === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-4 text-neutral-600"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Policies Notice */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-4xl mx-auto">
          <GlassCard>
            <div className="text-center">
              <h3 className="font-display text-2xl font-semibold mb-4">
                Important Policies
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <span className="text-3xl mb-2 block">📅</span>
                  <h4 className="font-semibold mb-2">Booking</h4>
                  <p className="text-sm text-neutral-600">
                    Appointments require a 20% deposit, fully refundable with 24-hour notice
                  </p>
                </div>
                <div>
                  <span className="text-3xl mb-2 block">🧼</span>
                  <h4 className="font-semibold mb-2">Hygiene</h4>
                  <p className="text-sm text-neutral-600">
                    All tools are hospital-grade sterilized. We follow strict sanitation protocols
                  </p>
                </div>
                <div>
                  <span className="text-3xl mb-2 block">⏰</span>
                  <h4 className="font-semibold mb-2">Arrival</h4>
                  <p className="text-sm text-neutral-600">
                    Please arrive 10 minutes early for consultation and charm selection
                  </p>
                </div>
              </div>
              <GlowButton href="/policies" variant="secondary">
                View All Policies →
              </GlowButton>
            </div>
          </GlassCard>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-accent text-3xl text-primary mb-4">Ready to Glow?</h2>
            <p className="text-neutral-700 mb-8 text-lg">
              Book your appointment today and let us transform your nails into miniature masterpieces
            </p>
            <GlowButton href="/booking" size="lg">
              Book Your Service Now ✨
            </GlowButton>
          </motion.div>
        </div>
      </section>
    </>
  )
}
