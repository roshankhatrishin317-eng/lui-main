'use client'

import React, { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import { Sparkles, Star, Heart, ArrowDown, ChevronRight } from 'lucide-react'
import { GlowButton } from './GlowButton'

export const HeroSection = () => {
  const { scrollY } = useScroll()
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Mouse parallax
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 150 }
  const mouseXSpring = useSpring(mouseX, springConfig)
  const mouseYSpring = useSpring(mouseY, springConfig)

  const heroTexts = [
    'Where Nails Become Art',
    'Luxury Meets Creativity',
    'Your Dream Nails Await',
    'Sparkle & Shine Daily'
  ]

  // Enhanced parallax transforms
  const backgroundY = useTransform(scrollY, [0, 800], [0, 200])
  const textY = useTransform(scrollY, [0, 400], [0, -100])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])
  const scale = useTransform(scrollY, [0, 400], [1, 0.8])

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (rect) {
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const x = (e.clientX - rect.left - centerX) / centerX
        const y = (e.clientY - rect.top - centerY) / centerY
        mouseX.set(x * 20)
        mouseY.set(y * 20)
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-gradient-to-br from-neutral-50 via-primary-light/10 to-secondary-light/10">
      {/* Animated Gradient Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        {/* Gradient Orbs with Mouse Parallax */}
        <motion.div
          className="absolute inset-0"
          style={{
            x: mouseXSpring,
            y: mouseYSpring,
          }}
        >
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-secondary/20 via-secondary/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-radial from-accent/15 via-accent/5 to-transparent rounded-full blur-2xl" />
        </motion.div>
        
        {/* Animated Wave Pattern */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#BFA2FF" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#FFC7D3" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#A8F0D1" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,100 C150,50 350,150 500,100 L500,300 L0,300 Z"
            fill="url(#wave-gradient)"
            animate={{
              d: [
                "M0,100 C150,50 350,150 500,100 L500,300 L0,300 Z",
                "M0,150 C150,100 350,100 500,150 L500,300 L0,300 Z",
                "M0,100 C150,150 350,50 500,100 L500,300 L0,300 Z",
                "M0,100 C150,50 350,150 500,100 L500,300 L0,300 Z",
              ]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ transform: 'scale(3)' }}
          />
        </svg>
      </motion.div>

      {/* Animated Particles Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          {/* Subtle animated dots pattern */}
          {isLoaded && Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              initial={{
                x: `${(i * 33) % 100}%`,
                y: `${(i * 47) % 100}%`,
                scale: 0
              }}
              animate={{
                scale: [0, 1, 1, 0],
                opacity: [0, 0.5, 0.5, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Geometric Shapes Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="w-32 h-32 border-2 border-primary/10 rounded-full" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 left-20"
          animate={{
            rotate: -360,
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-24 h-24 border-2 border-secondary/10 rounded-lg rotate-45" />
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4"
        style={{ opacity, scale }}
      >
        {/* Premium Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
          className="mb-12"
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-secondary/40 blur-2xl" />
            
            <motion.div 
              className="relative inline-flex items-center gap-3 px-8 py-4 bg-white/90 backdrop-blur-xl rounded-full shadow-2xl border border-white/50"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(191, 162, 255, 0.3)" }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Star className="w-5 h-5 text-gold fill-gold" />
              </motion.div>
              <span className="text-sm font-semibold text-charcoal tracking-wide uppercase">
                Luxury Nail Artistry
              </span>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Star className="w-5 h-5 text-gold fill-gold" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.div 
          className="text-center mb-8"
          style={{ y: textY }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.3,
              type: "spring",
              stiffness: 80
            }}
            className="relative"
          >
            {/* Title with gradient */}
            <motion.div
              className="text-7xl md:text-9xl font-display font-bold mb-2"
              whileHover={{ scale: 1.02 }}
            >
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
                style={{ 
                  backgroundSize: '200% auto',
                  animation: 'gradient-shift 3s ease infinite'
                }}
              >
                The Lums
              </span>
            </motion.div>
            
            <motion.div
              className="text-6xl md:text-8xl font-display font-bold"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <span className="bg-gradient-to-l from-accent via-primary to-secondary bg-clip-text text-transparent"
                style={{ 
                  backgroundSize: '200% auto',
                  animation: 'gradient-shift 3s ease infinite reverse'
                }}
              >
                Charms
              </span>
            </motion.div>
          </motion.h1>

          {/* Animated Tagline with typewriter effect */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTextIndex}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 0.6 }}
              className="h-12 flex items-center justify-center"
            >
              <p className="text-2xl md:text-4xl font-light text-charcoal/70 tracking-wide">
                {heroTexts[currentTextIndex].split('').map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.03 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="max-w-3xl mx-auto text-xl md:text-2xl text-charcoal/60 mb-16 leading-relaxed"
          >
            Step into a world where your nails become 
            <motion.span 
              className="inline-block mx-2 font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              masterpieces
            </motion.span>
            <br />
            Experience the perfect blend of luxury & personalized care
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 mb-16"
        >
          {/* Primary CTA */}
          <motion.a
            href="/booking"
            className="group relative px-10 py-5 overflow-hidden rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
            
            {/* Animated shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: ['-100%', '100%']
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            />
            
            {/* Button content */}
            <span className="relative z-10 flex items-center justify-center gap-3 text-white font-semibold text-lg">
              Book Your Experience
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.div>
            </span>
          </motion.a>

          {/* Secondary CTA */}
          <motion.a
            href="/portfolio"
            className="group relative px-10 py-5 bg-white/10 backdrop-blur-xl rounded-full border-2 border-white/30 hover:border-primary/50 transition-all"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.2)' }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center justify-center gap-3 text-charcoal font-semibold text-lg">
              Explore Gallery
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-5 h-5 text-primary" />
              </motion.div>
            </span>
          </motion.a>
        </motion.div>

        {/* Modern Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            className="flex flex-col items-center gap-3 cursor-pointer"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <span className="text-sm font-light text-charcoal/40 tracking-widest uppercase">Scroll</span>
            
            {/* Animated scroll line */}
            <div className="relative w-[2px] h-12 bg-charcoal/10 rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-primary to-transparent"
                animate={{ y: [0, 44, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

    </section>
  )
}
