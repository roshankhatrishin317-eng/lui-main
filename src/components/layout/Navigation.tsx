'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { GlowButton } from '@/components/ui/GlowButton'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' }
]

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'py-3' : 'py-5'
        )}
      >
        <div
          className={cn(
            'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
            'glass-effect rounded-full shadow-nav',
            isScrolled ? 'py-3' : 'py-4'
          )}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl">✨</span>
              <span className="font-accent text-2xl text-gradient">The Lums Charms</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-neutral-700 hover:text-primary transition-colors duration-200 font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <GlowButton href="/booking" size="sm">
                Book Now
              </GlowButton>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-white/20 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={cn(
                  'block w-full h-0.5 bg-neutral-700 transition-all duration-300',
                  isMobileMenuOpen && 'rotate-45 translate-y-2'
                )} />
                <span className={cn(
                  'block w-full h-0.5 bg-neutral-700 transition-all duration-300',
                  isMobileMenuOpen && 'opacity-0'
                )} />
                <span className={cn(
                  'block w-full h-0.5 bg-neutral-700 transition-all duration-300',
                  isMobileMenuOpen && '-rotate-45 -translate-y-2'
                )} />
              </div>
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-neutral-900/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-3/4 max-w-sm bg-white/95 backdrop-blur-lg shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <div className="p-6 pt-20">
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium text-neutral-700 hover:text-primary transition-colors py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="pt-4">
                    <GlowButton href="/booking" size="md" className="w-full">
                      Book Now
                    </GlowButton>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-neutral-200">
                  <div className="flex space-x-4 justify-center">
                    <a href="#" className="text-neutral-600 hover:text-primary">
                      <span className="text-2xl">📷</span>
                    </a>
                    <a href="#" className="text-neutral-600 hover:text-primary">
                      <span className="text-2xl">🎵</span>
                    </a>
                    <a href="#" className="text-neutral-600 hover:text-primary">
                      <span className="text-2xl">📌</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
