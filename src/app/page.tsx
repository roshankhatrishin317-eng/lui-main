'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { GlowButton } from '@/components/ui/GlowButton'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AnimatedCard } from '@/components/ui/AnimatedCard'
import { ParallaxSection } from '@/components/ui/ParallaxSection'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { HeroSection } from '@/components/ui/HeroSection'
import { FloatingBookButton } from '@/components/ui/FloatingBookButton'
import { AnnouncementBar } from '@/components/ui/AnnouncementBar'
import { ServiceCard3D } from '@/components/ui/ServiceCard3D'
import { EnhancedGallery } from '@/components/ui/EnhancedGallery'
import { ScrollReveal, StaggerReveal } from '@/components/ui/ScrollReveal'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

const services = [
  {
    title: 'Signature Charm Set',
    description: 'Our most popular service with custom nail art and premium charms',
    duration: '90 min',
    price: 'From $85',
    icon: '✨'
  },
  {
    title: 'Bridal Atelier',
    description: 'Elegant designs perfect for your special day',
    duration: '120 min',
    price: 'From $120',
    icon: '👰'
  },
  {
    title: 'Express Refresh',
    description: 'Quick touch-up for busy schedules',
    duration: '45 min',
    price: 'From $45',
    icon: '⚡'
  },
  {
    title: 'Luxury Extensions',
    description: 'Premium gel extensions with artistic detailing',
    duration: '150 min',
    price: 'From $150',
    icon: '💎'
  }
]

const portfolioImages = [
  { id: 1, style: 'Chrome Dreams', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400', technician: 'Sarah' },
  { id: 2, style: 'Floral Fantasy', image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=400', technician: 'Emma' },
  { id: 3, style: 'Minimalist Chic', image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=400', technician: 'Lily' },
  { id: 4, style: 'Glitter Bomb', image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=400', technician: 'Sarah' },
  { id: 5, style: 'French Twist', image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=400', technician: 'Emma' },
  { id: 6, style: 'Abstract Art', image: 'https://images.unsplash.com/photo-1606924735276-fbb5b325e933?w=400', technician: 'Lily' }
]

const testimonials = [
  {
    name: 'Jessica M.',
    service: 'Signature Charm Set',
    rating: 5,
    quote: 'Absolutely obsessed with my nails! The attention to detail is incredible, and the charms are so unique. Will definitely be back!'
  },
  {
    name: 'Ashley R.',
    service: 'Bridal Atelier',
    rating: 5,
    quote: 'Perfect nails for my wedding day! The team understood exactly what I wanted and delivered beyond expectations.'
  },
  {
    name: 'Maria K.',
    service: 'Luxury Extensions',
    rating: 5,
    quote: 'The most relaxing and professional nail experience I\'ve ever had. The salon ambiance is dreamy!'
  }
]

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <>
      {/* Announcement Bar */}
      <AnnouncementBar />
      
      {/* Floating Book Button */}
      <FloatingBookButton />
      
      {/* Enhanced Hero Section */}
      <HeroSection />
      
      {/* Enhanced Services Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Design */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-primary/5 to-secondary/5" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-secondary/10 to-transparent rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <motion.span 
                className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.6 }}
              >
                OUR SERVICES
              </motion.span>
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Signature Collections
              </h2>
              <p className="text-xl text-charcoal/60 max-w-3xl mx-auto">
                From express refreshes to luxury transformations, find your perfect nail experience
              </p>
            </div>
          </ScrollReveal>
            
          
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.1}>
                <ServiceCard3D
                  title={service.title}
                  description={service.description}
                  duration={service.duration}
                  price={service.price}
                  icon={service.icon}
                  popular={index === 0}
                  color={index === 0 ? 'primary' : index === 1 ? 'secondary' : 'accent'}
                />
              </ScrollReveal>
            ))}
          </StaggerReveal>
          
          <ScrollReveal delay={0.6}>
            <div className="text-center mt-16">
              <motion.a
                href="/services"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(191, 162, 255, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                View All Services
                <ChevronRight className="w-5 h-5" />
              </motion.a>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Enhanced Portfolio Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-white to-primary/5">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <motion.div 
            className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-secondary/10 to-transparent rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <motion.span 
                className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.6 }}
              >
                PORTFOLIO
              </motion.span>
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
                Signature Looks
              </h2>
              <p className="text-xl text-charcoal/60 max-w-3xl mx-auto">
                Browse our latest nail art creations and find your inspiration
              </p>
            </div>
          </ScrollReveal>
          
          {/* Enhanced Instagram-like Gallery */}
          <ScrollReveal delay={0.3}>
            <EnhancedGallery />
          </ScrollReveal>
          
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <MagneticButton>
                <GlowButton href="/portfolio" size="lg">
                  View Full Portfolio →
                </GlowButton>
              </MagneticButton>
            </motion.div>
          </div>
        </section>
      </ParallaxSection>
      
      {/* Enhanced Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-100 to-neutral-50 relative">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 text-6xl opacity-10 rotate-12">💅</div>
        <div className="absolute bottom-10 right-10 text-6xl opacity-10 -rotate-12">✨</div>
        
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerChildren}
          >
            <SectionHeading
              tagline="Happy Clients"
              heading="Sparkling Reviews"
              description="See what our charmed clients have to say"
            />
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerChildren}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <AnimatedCard className="h-full p-6" glowColor={index === 0 ? 'primary' : index === 1 ? 'secondary' : 'accent'}>
                  <div className="flex mb-4 gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.span 
                        key={i} 
                        className="text-2xl"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                      >
                        ⭐
                      </motion.span>
                    ))}
                  </div>
                  <p className="text-neutral-700 mb-6 italic leading-relaxed text-lg">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-neutral-200 pt-4">
                    <p className="font-display font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-sm text-primary font-medium">{testimonial.service}</p>
                  </div>
                </AnimatedCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Enhanced CTA Section */}
      <ParallaxSection speed={0.5}>
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              {/* Animated background card */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 rounded-[3rem] blur-2xl"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 1, -1, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative glass-effect rounded-[3rem] p-12 md:p-16 overflow-hidden">
                {/* Floating decorations */}
                <motion.div 
                  className="absolute top-4 right-4 text-3xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  ✨
                </motion.div>
                <motion.div 
                  className="absolute bottom-4 left-4 text-3xl"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                >
                  💎
                </motion.div>
                
                <motion.h2 
                  className="font-script text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent mb-4"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: "200% 200%"
                  }}
                >
                  Ready to Shine?
                </motion.h2>
                
                <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 text-neutral-900">
                  Book Your Charm Session Today
                </h3>
                
                <p className="text-lg text-neutral-700 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Transform your nails into miniature masterpieces. Our talented artists are ready 
                  to bring your vision to life with premium products and meticulous attention to detail.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <MagneticButton strength={20}>
                    <GlowButton href="/booking" size="lg">
                      Reserve Your Spot 💅
                    </GlowButton>
                  </MagneticButton>
                  <MagneticButton strength={20}>
                    <GlowButton href="/contact" variant="tertiary" size="lg">
                      Have Questions? Contact Us
                    </GlowButton>
                  </MagneticButton>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </ParallaxSection>
      
      {/* Enhanced Instagram Feed */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-100 to-neutral-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <motion.div 
            className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerChildren}
          >
            <SectionHeading
              tagline="Follow Us"
              heading="@TheLumsCharms"
              description="Join our sparkle squad on Instagram for daily nail inspiration"
            />
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-3 md:grid-cols-6 gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerChildren}
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative group cursor-pointer"
              >
                <div className="aspect-square bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ type: "spring" }}
                        className="text-white text-3xl"
                      >
                        ❤️
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <MagneticButton>
              <GlowButton href="https://instagram.com" variant="secondary" size="lg">
                Follow on Instagram @TheLumsCharms →
              </GlowButton>
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </>
  )
}
