'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
  onClick?: () => void
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  hover = true,
  padding = 'md',
  onClick
}) => {
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }
  
  return (
    <motion.div
      className={cn(
        'glass-effect rounded-2xl shadow-soft',
        paddings[padding],
        hover && 'transition-all duration-300 hover:shadow-card cursor-pointer',
        className
      )}
      onClick={onClick}
      whileHover={hover ? { y: -4 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
