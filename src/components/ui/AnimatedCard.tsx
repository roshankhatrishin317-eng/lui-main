'use client'

import React, { useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: 'primary' | 'secondary' | 'accent'
  floatOnHover?: boolean
  tiltOnHover?: boolean
  onClick?: () => void
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className,
  glowColor = 'primary',
  floatOnHover = true,
  tiltOnHover = true,
  onClick
}) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const glowColors = {
    primary: 'rgba(191, 162, 255, 0.4)',
    secondary: 'rgba(255, 199, 211, 0.4)',
    accent: 'rgba(168, 240, 209, 0.4)'
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltOnHover || !cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    
    setMousePosition({ x, y })
  }

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => {
    setIsHovered(false)
    setMousePosition({ x: 0, y: 0 })
  }

  const transform = isHovered && tiltOnHover
    ? `perspective(1000px) rotateY(${mousePosition.x * 10}deg) rotateX(${-mousePosition.y * 10}deg) ${floatOnHover ? 'translateZ(20px)' : ''}`
    : 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0)'

  const glowStyle = isHovered
    ? {
        boxShadow: `
          0 20px 40px -15px ${glowColors[glowColor]},
          0 0 60px -10px ${glowColors[glowColor]},
          inset 0 0 30px -5px ${glowColors[glowColor]}20
        `
      }
    : {}

  return (
    <div
      ref={cardRef}
      className={cn(
        'relative overflow-hidden rounded-3xl transition-all duration-700 ease-out',
        'bg-gradient-to-br from-white/90 via-white/70 to-white/50',
        'backdrop-blur-xl border border-white/50',
        'hover:border-white/70',
        className
      )}
      style={{
        transform,
        transformStyle: 'preserve-3d',
        ...glowStyle
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 animate-gradient-shift" />
      </div>
      
      {/* Sparkle effects */}
      {isHovered && (
        <>
          <div className="absolute top-4 right-4 text-2xl opacity-70 animate-sparkle">✨</div>
          <div className="absolute bottom-4 left-4 text-xl opacity-60 animate-sparkle animation-delay-200">💫</div>
        </>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Hover glow overlay */}
      <div
        className={cn(
          'absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none',
          isHovered && 'opacity-100'
        )}
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x * 30}% ${50 + mousePosition.y * 30}%, ${glowColors[glowColor]}40 0%, transparent 70%)`
        }}
      />
    </div>
  )
}
