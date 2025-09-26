'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface ScrollRevealProps {
  children: React.ReactNode
  width?: 'fit-content' | '100%'
  delay?: number
  duration?: number
  y?: number
  className?: string
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  width = '100%',
  delay = 0,
  duration = 0.8,
  y = 50,
  className = ''
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView, mainControls])

  return (
    <div ref={ref} style={{ position: 'relative', width }} className={className}>
      <motion.div
        variants={{
          hidden: { 
            opacity: 0, 
            y,
            filter: 'blur(10px)'
          },
          visible: { 
            opacity: 1, 
            y: 0,
            filter: 'blur(0px)'
          }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration,
          delay,
          ease: [0.17, 0.55, 0.55, 1]
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

// Stagger children animation wrapper
export const StaggerReveal: React.FC<{
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}> = ({ children, className = '', staggerDelay = 0.1 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          }
        }
      }}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { 
              opacity: 0, 
              y: 30,
              scale: 0.95
            },
            visible: { 
              opacity: 1, 
              y: 0,
              scale: 1,
              transition: {
                duration: 0.6,
                ease: [0.17, 0.55, 0.55, 1]
              }
            }
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}
