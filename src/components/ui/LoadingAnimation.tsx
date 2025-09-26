'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const LoadingAnimation = () => {
  const nailPolishColors = ['#BFA2FF', '#FFC7D3', '#A8F0D1', '#F5D77B', '#FF8A9B']

  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-br from-neutral-50 to-primary-light/20 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative"
      >
        {/* Nail Polish Bottle Animation */}
        <motion.div className="relative">
          {/* Bottle */}
          <motion.div
            className="w-32 h-48 relative"
            animate={{
              rotate: [-5, 5, -5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {/* Bottle Body */}
            <motion.div
              className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-primary-light to-primary rounded-b-3xl rounded-t-lg"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {/* Polish Inside */}
              <motion.div
                className="absolute bottom-2 left-2 right-2 bg-gradient-to-t from-secondary to-secondary-light rounded-b-2xl"
                animate={{
                  height: ['40%', '60%', '40%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>

            {/* Cap */}
            <motion.div
              className="absolute top-8 left-1/2 transform -translate-x-1/2 w-20 h-12 bg-gradient-to-t from-neutral-800 to-neutral-600 rounded-t-full"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
            />

            {/* Brush Drip */}
            <motion.div
              className="absolute top-20 left-1/2 transform -translate-x-1/2"
              animate={{
                opacity: [0, 1, 0],
                y: [0, 30, 60],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <div className="w-3 h-8 bg-gradient-to-b from-secondary to-secondary-light rounded-full" />
            </motion.div>
          </motion.div>

          {/* Sparkles Around */}
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <motion.div
              key={index}
              className="absolute text-2xl"
              style={{
                left: `${50 + 40 * Math.cos((index * Math.PI * 2) / 6)}%`,
                top: `${50 + 40 * Math.sin((index * Math.PI * 2) / 6)}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                rotate: [0, 360],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3,
                ease: 'easeInOut',
              }}
            >
              ✨
            </motion.div>
          ))}
        </motion.div>

        {/* Loading Text */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.h3
            className="text-2xl font-display font-bold text-transparent bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              backgroundSize: '200% 200%',
            }}
          >
            Preparing Your Magic
          </motion.h3>
          
          {/* Loading Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-3 h-3 rounded-full bg-primary"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
