'use client'

import React, { useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  strength?: number
  onClick?: () => void
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className,
  strength = 30,
  onClick
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return
    
    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY
    
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
    const maxDistance = Math.max(rect.width, rect.height)
    
    if (distance < maxDistance) {
      const force = (maxDistance - distance) / maxDistance
      setPosition({
        x: (distanceX * force * strength) / maxDistance,
        y: (distanceY * force * strength) / maxDistance
      })
    }
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <button
      ref={buttonRef}
      className={cn('relative transition-transform duration-200 ease-out', className)}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
