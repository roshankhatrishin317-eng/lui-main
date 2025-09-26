'use client'

import React, { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Particle {
  id: number
  x: number
  y: number
  emoji: string
}

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [particles, setParticles] = useState<Particle[]>([])
  const [isVisible, setIsVisible] = useState(false)
  const particleIdRef = useRef(0)

  const sparkleEmojis = ['✨', '💫', '⭐', '🌟', '💖', '💎']

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)

      // Generate particles on movement
      if (Math.random() > 0.8) {
        const newParticle: Particle = {
          id: particleIdRef.current++,
          x: e.clientX,
          y: e.clientY,
          emoji: sparkleEmojis[Math.floor(Math.random() * sparkleEmojis.length)]
        }
        setParticles(prev => [...prev, newParticle].slice(-15))
      }
    }

    const updateCursorType = () => {
      const hoveredElement = document.elementFromPoint(mousePosition.x, mousePosition.y) as HTMLElement
      if (hoveredElement) {
        const computedStyle = window.getComputedStyle(hoveredElement)
        setIsPointer(
          computedStyle.cursor === 'pointer' ||
          hoveredElement.tagName === 'A' ||
          hoveredElement.tagName === 'BUTTON' ||
          hoveredElement.onclick !== null ||
          hoveredElement.closest('button') !== null ||
          hoveredElement.closest('a') !== null
        )
      }
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    // Update cursor type on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      updateMousePosition(e)
      updateCursorType()
    }

    // Hide default cursor on desktop
    if (window.innerWidth > 768) {
      document.body.style.cursor = 'none'
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      document.body.style.cursor = 'auto'
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [mousePosition.x, mousePosition.y])

  // Clean up old particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => prev.filter(p => particleIdRef.current - p.id < 100))
    }, 100)
    return () => clearInterval(interval)
  }, [])

  // Don't render on mobile
  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    return null
  }

  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isClicking ? 0.8 : isPointer ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
        style={{
          left: -12,
          top: -12,
        }}
      >
        {isVisible && (
          <>
            {/* Outer ring */}
            <motion.div
              className="absolute w-6 h-6 border-2 border-white rounded-full"
              animate={{
                scale: isPointer ? 2 : 1,
                borderColor: isPointer ? '#BFA2FF' : '#ffffff',
              }}
              transition={{
                type: 'spring',
                stiffness: 500,
                damping: 28,
              }}
            />
            
            {/* Inner dot */}
            <motion.div
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                scale: isClicking ? 3 : 1,
                backgroundColor: isPointer ? '#BFA2FF' : '#ffffff',
              }}
            />

            {/* Glow effect */}
            {isPointer && (
              <motion.div
                className="absolute w-12 h-12 rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  background: 'radial-gradient(circle, rgba(191,162,255,0.3) 0%, transparent 70%)',
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            )}
          </>
        )}
      </motion.div>

      {/* Sparkle Trail */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="fixed pointer-events-none z-[9998]"
            initial={{
              x: particle.x,
              y: particle.y,
              scale: 0,
              opacity: 1,
            }}
            animate={{
              y: particle.y - 50,
              scale: [0, 1, 0],
              opacity: [1, 1, 0],
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 1,
              ease: 'easeOut',
            }}
            style={{
              left: -10,
              top: -10,
            }}
          >
            <span className="text-2xl drop-shadow-lg">{particle.emoji}</span>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Click Ripple Effect */}
      <AnimatePresence>
        {isClicking && (
          <motion.div
            className="fixed pointer-events-none z-[9997]"
            initial={{
              x: mousePosition.x - 25,
              y: mousePosition.y - 25,
              scale: 0,
              opacity: 1,
            }}
            animate={{
              scale: 3,
              opacity: 0,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
              ease: 'easeOut',
            }}
          >
            <div className="w-12 h-12 border-2 border-primary rounded-full" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
