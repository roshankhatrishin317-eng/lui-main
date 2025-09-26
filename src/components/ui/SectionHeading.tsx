'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface SectionHeadingProps {
  tagline?: string
  heading: string
  description?: string
  alignment?: 'left' | 'center' | 'right'
  className?: string
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  tagline,
  heading,
  description,
  alignment = 'center',
  className
}) => {
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }
  
  return (
    <motion.div
      className={cn(alignments[alignment], 'mb-12', className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {tagline && (
        <span className="font-accent text-2xl text-primary mb-2 block animate-shimmer">
          {tagline}
        </span>
      )}
      <h2 className="text-display-lg md:text-display-xl font-display font-bold text-neutral-900 mb-4">
        {heading}
      </h2>
      {description && (
        <p className="text-body-md text-neutral-600 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  )
}
