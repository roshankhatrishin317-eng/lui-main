'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { GlowButton } from '@/components/ui/GlowButton'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionHeading } from '@/components/ui/SectionHeading'

const policies = [
  {
    id: 'booking',
    title: 'Booking & Appointments',
    icon: '📅',
    content: [
      'Appointments can be made online, by phone, or in person',
      'A 20% deposit is required to secure your booking',
      'Deposits are fully refundable with 24-hour notice',
      'We recommend booking at least 3 days in advance',
      'Group bookings of 4+ require 48-hour notice'
    ]
  },
  {
    id: 'cancellation',
    title: 'Cancellation & Rescheduling',
    icon: '🔄',
    content: [
      '24-hour notice required for full deposit refund',
      'Same-day cancellations forfeit deposit',
      'Rescheduling allowed up to 2 times per appointment',
      'No-shows will be charged 50% of service cost',
      'Emergency situations handled case-by-case'
    ]
  },
  {
    id: 'hygiene',
    title: 'Hygiene & Safety',
    icon: '🧼',
    content: [
      'All tools are hospital-grade sterilized between clients',
      'Single-use files and buffers for each client',
      'Staff follows strict hand hygiene protocols',
      'Pedicure tubs disinfected after each use',
      'We use only non-toxic, cruelty-free products'
    ]
  },
  {
    id: 'payment',
    title: 'Payment & Pricing',
    icon: '💳',
    content: [
      'We accept cash, credit/debit cards, and digital payments',
      'Prices subject to change with 30-day notice',
      'Gratuity not included in service prices',
      'Gift cards available for purchase',
      'Package deals non-refundable but transferable'
    ]
  },
  {
    id: 'aftercare',
    title: 'Aftercare & Warranty',
    icon: '💅',
    content: [
      'Complimentary fix within 48 hours for chips/breaks',
      'Aftercare instructions provided after each service',
      'We recommend cuticle oil application daily',
      'Avoid hot water for 2 hours after service',
      'Return within 7 days for any service concerns'
    ]
  },
  {
    id: 'accessibility',
    title: 'Accessibility & Special Needs',
    icon: '♿',
    content: [
      'Wheelchair accessible entrance and service areas',
      'Adjustable seating available upon request',
      'Service animals welcome',
      'Staff trained in assisting clients with special needs',
      'Please inform us of any accommodations needed when booking'
    ]
  }
]

const faqs = [
  {
    question: 'What should I do to prepare for my appointment?',
    answer: 'Remove any existing nail polish, avoid cutting your cuticles, and arrive 10 minutes early for consultation. If you have inspiration photos, please bring them!'
  },
  {
    question: 'How long do your services typically last?',
    answer: 'Service duration varies: Express Refresh (45 min), Classic Charm (60 min), Premium Glow (90 min), Luxury Extensions (150 min).'
  },
  {
    question: 'Do you offer services for men?',
    answer: 'Absolutely! We welcome all clients and offer services tailored to everyone\'s preferences and nail care needs.'
  },
  {
    question: 'Can I bring my own nail polish?',
    answer: 'Yes, you can bring your own polish. However, we cannot guarantee the longevity or finish quality with external products.'
  },
  {
    question: 'What if I\'m allergic to certain products?',
    answer: 'Please inform us of any allergies when booking. We offer hypoallergenic alternatives and can perform patch tests if needed.'
  },
  {
    question: 'Do you offer party packages?',
    answer: 'Yes! We offer special packages for bridal parties, birthdays, and other celebrations. Contact us for custom group rates.'
  },
  {
    question: 'What\'s your policy on children?',
    answer: 'Children 12+ are welcome for full services. We offer kid-friendly options for younger children with parental supervision.'
  },
  {
    question: 'Can I book multiple services in one appointment?',
    answer: 'Yes! We can combine services. Please allow extra time and mention all desired services when booking.'
  }
]

export default function PoliciesPage() {
  const [openPolicy, setOpenPolicy] = useState<string | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-50 to-neutral-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            tagline="Policies & FAQs"
            heading="Your Comfort, Our Priority"
            description="Everything you need to know about our services, policies, and commitment to your satisfaction"
          />
        </div>
      </section>
      
      {/* Policies Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-semibold mb-8 text-center">
            Our Policies
          </h2>
          
          <div className="space-y-4">
            {policies.map((policy, index) => (
              <motion.div
                key={policy.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <GlassCard
                  className="cursor-pointer"
                  onClick={() => setOpenPolicy(openPolicy === policy.id ? null : policy.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-3xl">{policy.icon}</span>
                      <h3 className="font-display text-lg font-semibold">{policy.title}</h3>
                    </div>
                    <motion.span
                      animate={{ rotate: openPolicy === policy.id ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-2xl text-neutral-500"
                    >
                      +
                    </motion.span>
                  </div>
                  
                  {openPolicy === policy.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="mt-6"
                    >
                      <ul className="space-y-2">
                        {policy.content.map((item, i) => (
                          <li key={i} className="flex items-start text-sm text-neutral-600">
                            <span className="text-accent mr-2 mt-0.5">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQs Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-50 to-neutral-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-semibold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="w-full text-left bg-white rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold pr-4">{faq.question}</h3>
                  <span className={`text-2xl transition-transform duration-300 flex-shrink-0 ${
                    openFaq === index ? 'rotate-45' : ''
                  }`}>
                    +
                  </span>
                </div>
                {openFaq === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 text-sm text-neutral-600"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Important Notice */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="text-center">
              <span className="text-4xl mb-4 block">📢</span>
              <h3 className="font-display text-xl font-semibold mb-4">
                Important Health & Safety Notice
              </h3>
              <p className="text-neutral-600 mb-6">
                Your health and safety is our top priority. We maintain the highest standards of 
                hygiene and sanitation. All our technicians are licensed and trained in proper 
                safety protocols. If you have any health concerns or conditions that may affect 
                your service, please inform us when booking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GlowButton href="/contact" variant="secondary">
                  Have More Questions?
                </GlowButton>
                <GlowButton href="/booking">
                  Ready to Book
                </GlowButton>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </>
  )
}
