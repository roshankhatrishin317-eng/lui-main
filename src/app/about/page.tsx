'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GlowButton } from '@/components/ui/GlowButton'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import Image from 'next/image'

const teamMembers = [
  {
    name: 'Sarah Chen',
    role: 'Master Nail Artist',
    specialties: 'Chrome finishes, 3D art',
    experience: '8 years',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400',
    instagram: '@sarah.nails'
  },
  {
    name: 'Emma Rodriguez',
    role: 'Senior Nail Technician',
    specialties: 'Bridal designs, Hand-painted art',
    experience: '6 years',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
    instagram: '@emma.creates'
  },
  {
    name: 'Lily Thompson',
    role: 'Nail Artist',
    specialties: 'Minimalist designs, French manicures',
    experience: '4 years',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    instagram: '@lily.minimal'
  }
]

const values = [
  { icon: '✨', title: 'Artistry', description: 'Every nail is a canvas for creative expression' },
  { icon: '🧼', title: 'Hygiene', description: 'Hospital-grade sterilization and safety protocols' },
  { icon: '💝', title: 'Care', description: 'Personalized attention to every client\'s needs' },
  { icon: '🌟', title: 'Quality', description: 'Premium products and meticulous techniques' }
]

const milestones = [
  { year: '2018', event: 'The Lums Charms opens its doors' },
  { year: '2019', event: 'Featured in Vogue Beauty' },
  { year: '2020', event: 'Launched signature charm collection' },
  { year: '2021', event: 'Expanded team and services' },
  { year: '2023', event: 'Won Best Nail Salon Award' },
  { year: '2024', event: 'Celebrating 6 years of sparkle' }
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-50 to-neutral-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            tagline="Our Story"
            heading="Where Art Meets Nails"
            description="Founded on a passion for nail artistry and a commitment to luxury care, The Lums Charms has become the destination for those who dare to dazzle"
          />
        </div>
      </section>
      
      {/* Brand Story */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-3xl font-bold mb-6">
                A Dream Born from Passion
              </h2>
              <div className="space-y-4 text-neutral-600">
                <p>
                  The Lums Charms began as a vision to transform the traditional nail salon experience 
                  into something magical. Founded in 2018 by a team of passionate nail artists, we set 
                  out to create a space where creativity knows no bounds and every client leaves feeling 
                  like royalty.
                </p>
                <p>
                  Our name reflects our philosophy: "Lums" represents the luminous glow we bring to 
                  every design, while "Charms" embodies the delightful details that make each set unique. 
                  We believe that nails are more than just an accessory – they're a form of self-expression 
                  and art.
                </p>
                <p>
                  Today, we're proud to be recognized as one of the city's premier nail destinations, 
                  known for our innovative designs, exceptional service, and the warm, welcoming atmosphere 
                  that makes every visit feel special.
                </p>
              </div>
              <GlowButton href="/booking" size="lg" className="mt-6">
                Experience the Magic
              </GlowButton>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="aspect-[4/5] relative rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1604902396830-aca29e19b067?w=400"
                    alt="Salon interior"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=400"
                    alt="Nail art close-up"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square relative rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400"
                    alt="Team at work"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-[4/5] relative rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1522337094846-8a818192de1f?w=400"
                    alt="Happy client"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-50 to-neutral-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            heading="Our Values"
            description="The principles that guide everything we do"
            alignment="center"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="text-center h-full">
                  <span className="text-5xl mb-4 block">{value.icon}</span>
                  <h3 className="font-display text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-sm text-neutral-600">{value.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            heading="Meet Your Artists"
            description="Talented professionals dedicated to making your nails shine"
            alignment="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="text-center group">
                  <div className="aspect-square relative rounded-xl overflow-hidden mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <div className="space-y-2 text-sm text-neutral-600">
                    <p><strong>Specialties:</strong> {member.specialties}</p>
                    <p><strong>Experience:</strong> {member.experience}</p>
                    <p className="text-primary">{member.instagram}</p>
                  </div>
                  <GlowButton href={`/booking?artist=${member.name}`} size="sm" className="mt-4">
                    Book with {member.name.split(' ')[0]}
                  </GlowButton>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Timeline */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-50 to-neutral-100">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            heading="Our Journey"
            alignment="center"
          />
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <GlassCard padding="sm">
                    <h4 className="font-display font-semibold text-lg mb-1">{milestone.year}</h4>
                    <p className="text-sm text-neutral-600">{milestone.event}</p>
                  </GlassCard>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Awards & Press */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            heading="Recognition & Press"
            alignment="center"
          />
          
          <div className="glass-effect rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              <div className="text-center">
                <span className="text-4xl block mb-2">🏆</span>
                <p className="text-sm font-semibold">Best Nail Salon 2023</p>
              </div>
              <div className="text-center">
                <span className="text-4xl block mb-2">📰</span>
                <p className="text-sm font-semibold">Featured in Vogue</p>
              </div>
              <div className="text-center">
                <span className="text-4xl block mb-2">⭐</span>
                <p className="text-sm font-semibold">5-Star Reviews</p>
              </div>
              <div className="text-center">
                <span className="text-4xl block mb-2">💖</span>
                <p className="text-sm font-semibold">1000+ Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-accent text-3xl text-primary mb-4">Join Our Story</h2>
            <p className="text-neutral-700 mb-8 text-lg">
              Experience the magic of The Lums Charms and let us be part of your nail journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlowButton href="/booking" size="lg">
                Book Your Visit
              </GlowButton>
              <GlowButton href="/portfolio" variant="secondary" size="lg">
                View Our Work
              </GlowButton>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
