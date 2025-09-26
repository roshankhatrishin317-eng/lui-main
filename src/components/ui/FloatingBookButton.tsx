'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Sparkles, Heart } from 'lucide-react'

export const FloatingBookButton = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [scrollY, setScrollY] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
      
      // Hide button when scrolling down, show when scrolling up
      if (currentScrollY > scrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollY])

  const generateParticles = () => {
    const newParticles = Array.from({ length: 6 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 60 - 30,
      y: Math.random() * 60 - 30
    }))
    setParticles(prev => [...prev, ...newParticles].slice(-12))
  }

  const fabVariants = {
    hidden: { 
      scale: 0,
      opacity: 0,
      y: 100,
      rotate: -180
    },
    visible: { 
      scale: 1,
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
        duration: 0.6
      }
    },
    hover: {
      scale: 1.15,
      rotate: [0, -5, 5, -5, 0],
      transition: {
        rotate: {
          repeat: Infinity,
          duration: 2,
          ease: 'easeInOut'
        },
        scale: {
          duration: 0.3
        }
      }
    },
    tap: {
      scale: 0.95,
      rotate: 360,
      transition: {
        rotate: {
          duration: 0.8,
          ease: 'easeOut'
        }
      }
    }
  }

  const pulseRingVariants = {
    initial: {
      scale: 1,
      opacity: 0.7
    },
    animate: {
      scale: [1, 1.3, 1.6],
      opacity: [0.7, 0.4, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: 'easeOut'
      }
    }
  }

  return (
    <>
      {/* Desktop Version - Magnetic Follow Effect */}
      <motion.div
        className="hidden lg:block fixed bottom-8 right-8 z-50"
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        variants={{
          hidden: { opacity: 0, scale: 0 },
          visible: { opacity: 1, scale: 1 }
        }}
      >
        {/* Pulse Rings */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
          variants={pulseRingVariants}
          initial="initial"
          animate="animate"
        />
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary via-accent to-primary"
          variants={pulseRingVariants}
          initial="initial"
          animate="animate"
          style={{ animationDelay: '0.8s' }}
        />

        {/* Sparkle Particles */}
        <AnimatePresence>
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-2 h-2 bg-gradient-to-r from-gold to-primary rounded-full"
              initial={{ 
                x: 0, 
                y: 0, 
                scale: 0,
                opacity: 1 
              }}
              animate={{ 
                x: particle.x,
                y: particle.y,
                scale: [0, 1.5, 0],
                opacity: [1, 1, 0]
              }}
              exit={{ 
                opacity: 0,
                scale: 0
              }}
              transition={{
                duration: 1.5,
                ease: 'easeOut'
              }}
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none'
              }}
            />
          ))}
        </AnimatePresence>

        {/* Main Button */}
        <motion.button
          className="relative group"
          variants={fabVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          onHoverStart={() => {
            setIsHovered(true)
            generateParticles()
          }}
          onHoverEnd={() => setIsHovered(false)}
          onClick={() => window.location.href = '/booking'}
        >
          <div className="relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-full shadow-2xl">
            {/* Glowing Border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
            
            {/* Button Content */}
            <div className="relative flex items-center gap-3 text-white">
              <motion.div
                animate={{
                  rotate: isHovered ? 360 : 0,
                  scale: isHovered ? 1.2 : 1
                }}
                transition={{ duration: 0.5 }}
              >
                <Calendar className="w-5 h-5" />
              </motion.div>
              
              <span className="font-semibold text-lg tracking-wide">
                Book Your Magic
              </span>
              
              <motion.div
                animate={{
                  x: isHovered ? [0, 5, 0] : 0
                }}
                transition={{
                  repeat: isHovered ? Infinity : 0,
                  duration: 1
                }}
              >
                <Sparkles className="w-5 h-5" />
              </motion.div>
            </div>
          </div>

          {/* Floating Hearts */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute -top-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: -10 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                <Heart className="w-6 h-6 text-error fill-error" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      {/* Mobile Version - Fixed Bottom */}
      <motion.div
        className="lg:hidden fixed bottom-0 left-0 right-0 p-4 z-50"
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        variants={{
          hidden: { y: 100, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20
        }}
      >
        <motion.button
          className="w-full relative overflow-hidden group"
          whileTap={{ scale: 0.98 }}
          onClick={() => window.location.href = '/booking'}
        >
          <div className="relative flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl shadow-xl">
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-secondary"
              animate={{
                x: ['0%', '100%', '0%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear'
              }}
              style={{ width: '200%' }}
            />
            
            {/* Button Content */}
            <div className="relative flex items-center gap-3 text-white">
              <Calendar className="w-5 h-5" />
              <span className="font-bold text-base">Book Your Appointment</span>
              <Sparkles className="w-5 h-5" />
            </div>
          </div>
        </motion.button>
      </motion.div>
    </>
  )
}
