'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GlowButton } from '@/components/ui/GlowButton'
import { SectionHeading } from '@/components/ui/SectionHeading'
import Image from 'next/image'

const categories = ['All', 'Bridal', 'Seasonal', 'Statement', 'Minimalist', 'Custom Charms']

const portfolioItems = [
  { id: 1, category: 'Bridal', style: 'Pearl Elegance', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600', technician: 'Sarah', description: 'Delicate pearl accents with soft nude base' },
  { id: 2, category: 'Statement', style: 'Chrome Dreams', image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=600', technician: 'Emma', description: 'Mirror chrome finish with holographic details' },
  { id: 3, category: 'Minimalist', style: 'Clean Lines', image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=600', technician: 'Lily', description: 'Geometric patterns in neutral tones' },
  { id: 4, category: 'Seasonal', style: 'Autumn Vibes', image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600', technician: 'Sarah', description: 'Warm tones with leaf motifs' },
  { id: 5, category: 'Custom Charms', style: 'Crystal Garden', image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600', technician: 'Emma', description: '3D crystals and charm embellishments' },
  { id: 6, category: 'Bridal', style: 'French Romance', image: 'https://images.unsplash.com/photo-1606924735276-fbb5b325e933?w=600', technician: 'Lily', description: 'Classic French with delicate lace details' },
  { id: 7, category: 'Statement', style: 'Neon Nights', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600', technician: 'Sarah', description: 'Bold neon colors with glow effect' },
  { id: 8, category: 'Seasonal', style: 'Winter Sparkle', image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=600', technician: 'Emma', description: 'Icy blues with snowflake charms' },
  { id: 9, category: 'Custom Charms', style: 'Butterfly Dreams', image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=600', technician: 'Lily', description: 'Hand-painted butterflies with 3D wings' }
]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null)
  
  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory)
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-50 to-neutral-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            tagline="Our Portfolio"
            heading="Nail Art Gallery"
            description="From subtle shimmer to statement charms — browse our latest looks and find your inspiration"
          />
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-button text-white shadow-button'
                    : 'bg-white text-neutral-700 hover:bg-primary/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-white shadow-soft hover:shadow-card transition-all duration-300">
                    <div className="aspect-[4/5] relative">
                      <Image
                        src={item.image}
                        alt={item.style}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6">
                      <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                        {item.category}
                      </span>
                      <h3 className="font-display text-xl font-semibold mt-2 mb-2">
                        {item.style}
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        {item.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-neutral-500">by {item.technician}</span>
                        <GlowButton size="sm" variant="tertiary">
                          View Details →
                        </GlowButton>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      
      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                onClick={() => setSelectedItem(null)}
              >
                ✕
              </button>
              
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-[4/5] md:aspect-auto">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.style}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 md:p-12">
                  <span className="text-sm text-primary font-semibold uppercase tracking-wider">
                    {selectedItem.category}
                  </span>
                  <h2 className="font-display text-3xl font-bold mt-3 mb-4">
                    {selectedItem.style}
                  </h2>
                  <p className="text-neutral-600 mb-6">
                    {selectedItem.description}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">👩‍🎨</span>
                      <div>
                        <p className="text-sm text-neutral-500">Artist</p>
                        <p className="font-semibold">{selectedItem.technician}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">⏱️</span>
                      <div>
                        <p className="text-sm text-neutral-500">Duration</p>
                        <p className="font-semibold">90-120 minutes</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">💅</span>
                      <div>
                        <p className="text-sm text-neutral-500">Technique</p>
                        <p className="font-semibold">Gel Polish with Hand-painted Art</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <GlowButton href="/booking" size="lg" className="w-full">
                      Book This Look
                    </GlowButton>
                    <GlowButton href="/contact" variant="secondary" size="lg" className="w-full">
                      Ask About Customization
                    </GlowButton>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-50 to-neutral-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="glass-effect rounded-3xl p-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-accent text-3xl text-primary mb-4">Ready for Your Own Look?</h2>
            <p className="text-neutral-700 mb-8">
              Our talented artists are ready to create your perfect nail design. 
              Book your appointment today and let your nails tell your story.
            </p>
            <GlowButton href="/booking" size="lg">
              Book Your Appointment ✨
            </GlowButton>
          </motion.div>
        </div>
      </section>
    </>
  )
}
