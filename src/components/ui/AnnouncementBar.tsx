'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Gift, Clock, Sparkles, X, ChevronRight } from 'lucide-react'

type Sparkle = {
  id: number
  x: number
  y: number
  delay: number
}

export const AnnouncementBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const [sparkles, setSparkles] = useState<Sparkle[]>([])

  const announcements = [
    {
      icon: Gift,
      text: '✨ 20% OFF First Visit - Book Your Dream Nails Today!',
      gradient: 'linear-gradient(135deg, #BFA2FF 0%, #FFC7D3 100%)',
      link: '/booking',
      emoji: '💅'
    },
    {
      icon: Clock,
      text: '⏰ Same-Day Appointments Available - Limited Slots!',
      gradient: 'linear-gradient(135deg, #FFC7D3 0%, #A8F0D1 100%)',
      link: '/booking',
      emoji: '🌟'
    },
    {
      icon: Sparkles,
      text: '🎄 Holiday Collection Now Available - Festive Nail Art!',
      gradient: 'linear-gradient(135deg, #A8F0D1 0%, #BFA2FF 100%)',
      link: '/services',
      emoji: '🎁'
    }
  ]

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % announcements.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isPaused, announcements.length])

  if (!isVisible) return null

  const currentAnnouncement = announcements[currentIndex]
  const Icon = currentAnnouncement.icon

  useEffect(() => {
    const generatedSparkles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3
    }))
    setSparkles(generatedSparkles)
  }, [])

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-charcoal to-neutral-800"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative overflow-hidden">
        {/* Animated Background Gradient */}
        <motion.div
          className="absolute inset-0 opacity-30"
          initial={{ backgroundPosition: '0% 0%' }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          style={{
            backgroundImage: currentAnnouncement.gradient,
            backgroundSize: '200% 200%'
          }}
        />

        {/* Sparkle Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {sparkles.map((sparkle) => (
            <motion.div
              key={sparkle.id}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${sparkle.x}%`,
                top: `${sparkle.y}%`
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: sparkle.delay,
                ease: 'easeInOut'
              }}
            />
          ))}
        </div>

        <div className="relative px-4 py-3">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Main Content */}
            <div className="flex-1 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.a
                  key={currentIndex}
                  href={currentAnnouncement.link}
                  className="flex items-center gap-3 text-white hover:text-primary-light transition-colors group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated Icon */}
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      rotate: {
                        duration: 3,
                        repeat: Infinity,
                        ease: 'linear'
                      },
                      scale: {
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }
                    }}
                    className="flex items-center justify-center"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>

                  {/* Text */}
                  <span className="text-sm md:text-base font-medium">
                    {currentAnnouncement.text}
                  </span>

                  {/* Arrow */}
                  <motion.div
                    animate={{
                      x: [0, 5, 0]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  >
                    <ChevronRight className="w-4 h-4 group-hover:text-primary-light transition-colors" />
                  </motion.div>
                </motion.a>
              </AnimatePresence>
            </div>

            {/* Navigation Dots */}
            <div className="hidden md:flex items-center gap-2 px-4">
              {announcements.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-white w-6' 
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            {/* Close Button */}
            <motion.button
              onClick={() => setIsVisible(false)}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-4 h-4 text-white" />
            </motion.button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10">
          <motion.div
            className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{
              duration: 4,
              ease: 'linear',
              repeat: Infinity
            }}
            key={currentIndex}
          />
        </div>
      </div>
    </motion.div>
  )
}
