'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, DollarSign, Star, Sparkles, Check, ArrowRight } from 'lucide-react'

interface ServiceCard3DProps {
  title: string
  description: string
  duration: string
  price: string
  icon: string
  features?: string[]
  popular?: boolean
  color?: string
}

export const ServiceCard3D: React.FC<ServiceCard3DProps> = ({
  title,
  description,
  duration,
  price,
  icon,
  features = ['Premium Polish', 'Hand Massage', 'Cuticle Care', 'Custom Design'],
  popular = false,
  color = 'primary'
}) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const colorVariants = {
    primary: 'from-primary to-primary-dark',
    secondary: 'from-secondary to-secondary-dark',
    accent: 'from-accent to-accent-dark'
  }

  return (
    <motion.div
      className="relative w-full h-[400px] perspective-1000"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Popular Badge */}
      {popular && (
        <motion.div
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', delay: 0.2 }}
        >
          <div className="flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-gold to-primary text-white text-sm font-bold rounded-full shadow-lg">
            <Star className="w-4 h-4 fill-current" />
            MOST POPULAR
            <Star className="w-4 h-4 fill-current" />
          </div>
        </motion.div>
      )}

      <motion.div
        className="relative w-full h-full transform-style-preserve-3d cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of Card */}
        <div className="absolute inset-0 backface-hidden">
          <motion.div 
            className="relative h-full bg-white rounded-3xl shadow-2xl overflow-hidden"
            animate={{
              boxShadow: isHovered 
                ? '0 30px 60px -15px rgba(191, 162, 255, 0.5)' 
                : '0 20px 40px -15px rgba(0, 0, 0, 0.1)'
            }}
          >
            {/* Gradient Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent" />
            </div>

            {/* Floating Particles */}
            {isHovered && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"
                    initial={{
                      x: Math.random() * 100 + '%',
                      y: 100 + '%'
                    }}
                    animate={{
                      y: -20 + '%',
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.2,
                      repeat: Infinity
                    }}
                  />
                ))}
              </div>
            )}

            {/* Card Content */}
            <div className="relative p-8 h-full flex flex-col">
              {/* Icon */}
              <motion.div 
                className="text-6xl mb-4"
                animate={{
                  rotate: isHovered ? [0, -10, 10, -10, 0] : 0,
                  scale: isHovered ? 1.1 : 1
                }}
                transition={{ duration: 0.5 }}
              >
                {icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-display font-bold text-charcoal mb-3">
                {title}
              </h3>

              {/* Description */}
              <p className="text-neutral-600 mb-6 flex-grow">
                {description}
              </p>

              {/* Duration and Price */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-neutral-500">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm font-medium">{duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-gold" />
                  <span className="text-xl font-bold text-charcoal">{price}</span>
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                className={`relative overflow-hidden w-full py-3 rounded-2xl bg-gradient-to-r ${colorVariants[color as keyof typeof colorVariants]} text-white font-semibold shadow-lg`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Book Now
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </span>
                
                {/* Button Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-white/30"
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)'
                  }}
                />
              </motion.button>

              {/* Flip Indicator */}
              <div className="absolute top-4 right-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className="text-primary/30"
                >
                  <Sparkles className="w-6 h-6" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Back of Card */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="h-full bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl shadow-2xl p-8">
            <div className="relative h-full flex flex-col text-white">
              {/* Title */}
              <h4 className="text-2xl font-display font-bold mb-6">
                What's Included
              </h4>

              {/* Features List */}
              <div className="space-y-4 flex-grow">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5" />
                    </div>
                    <span className="text-lg">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Special Offer */}
              <motion.div 
                className="mt-6 p-4 bg-white/20 backdrop-blur-sm rounded-2xl"
                animate={{
                  scale: [1, 1.02, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              >
                <p className="text-center text-sm">
                  <span className="font-bold">Special Offer:</span> Book 3 sessions and get 15% off!
                </p>
              </motion.div>

              {/* Back Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setIsFlipped(false)
                }}
                className="mt-4 text-white/80 hover:text-white text-sm flex items-center justify-center gap-2"
              >
                ← Flip back
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
