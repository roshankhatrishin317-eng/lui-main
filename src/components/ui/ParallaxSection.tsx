'use client'

import React, { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  speed?: number
  offset?: number
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  className,
  speed = 0.5,
  offset = 0
}) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [translateY, setTranslateY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      
      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementTop = rect.top
      
      // Calculate parallax offset when element is in viewport
      if (elementTop < windowHeight && rect.bottom > 0) {
        const scrolled = windowHeight - elementTop
        const parallax = (scrolled * speed) + offset
        setTranslateY(parallax)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed, offset])

  return (
    <div ref={sectionRef} className={cn('relative overflow-hidden', className)}>
      <div
        style={{
          transform: `translateY(${translateY}px)`,
          willChange: 'transform'
        }}
        className="transition-transform duration-100 ease-out"
      >
        {children}
      </div>
    </div>
  )
}
