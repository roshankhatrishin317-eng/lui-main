import React from 'react'
import Link from 'next/link'
import { GlowButton } from '@/components/ui/GlowButton'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <span className="text-8xl mb-6 block animate-float">💅</span>
        <h1 className="text-6xl font-display font-bold text-neutral-900 mb-4">404</h1>
        <p className="text-xl text-neutral-600 mb-8">
          Oops! This page seems to have lost its sparkle.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <GlowButton href="/" size="lg">
            Return Home
          </GlowButton>
          <GlowButton href="/booking" variant="secondary" size="lg">
            Book Appointment
          </GlowButton>
        </div>
      </div>
    </div>
  )
}
