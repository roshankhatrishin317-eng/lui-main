'use client'

import React, { forwardRef, useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type SharedProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  disabled?: boolean
}

type AnchorProps = SharedProps & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof SharedProps> & {
  href: string
}

type ButtonProps = SharedProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof SharedProps | 'href'> & {
  href?: undefined
}

type GlowButtonProps = AnchorProps | ButtonProps

export const GlowButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, GlowButtonProps>(
  (
    {
      children,
      href,
      variant = 'primary',
      size = 'md',
      className,
      icon,
      iconPosition = 'right',
      disabled = false,
      ...rest
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = useState(false)
    const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number }[]>([])
    const buttonRef = useRef<HTMLElement>(null)
    
    useEffect(() => {
      if (isHovered && variant === 'primary') {
        const interval = setInterval(() => {
          const newSparkle = {
            id: Date.now(),
            x: Math.random() * 100,
            y: Math.random() * 100
          }
          setSparkles(prev => [...prev.slice(-4), newSparkle])
        }, 300)
        
        return () => clearInterval(interval)
      }
    }, [isHovered, variant])
    
    const baseStyles = 'group relative inline-flex items-center justify-center font-medium transition-all duration-500 ease-out rounded-full overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/40'

    const variants = {
      primary: 'bg-gradient-to-r from-secondary via-primary to-secondary bg-size-200 text-white shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-pos-100',
      secondary: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white hover:border-transparent hover:scale-105 hover:shadow-lg',
      tertiary: 'bg-transparent text-primary hover:text-primary-dark underline-offset-4 hover:underline'
    }

    const sizes = {
      sm: 'px-6 py-2 text-sm',
      md: 'px-8 py-3 text-base',
      lg: 'px-10 py-4 text-lg'
    }

    const isDisabled = disabled || ('disabled' in rest && Boolean((rest as ButtonProps).disabled))

    const buttonClass = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      isDisabled && 'opacity-60 pointer-events-none',
      className
    )

    const content = (
      <span className="relative z-10 inline-flex items-center gap-2">
        {icon && iconPosition === 'left' && <span aria-hidden>{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span aria-hidden>{icon}</span>}
      </span>
    )

    const renderSparkles = () => (
      <>
        {sparkles.map(sparkle => (
          <span
            key={sparkle.id}
            className="absolute pointer-events-none text-yellow-300 animate-ping"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              fontSize: '10px'
            }}
          >
            ✨
          </span>
        ))}
      </>
    )
    
    const glowOverlay = (
      <>
        {variant === 'primary' && (
          <>
            <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-0 transition-all duration-500 group-hover:opacity-30 group-hover:blur-xl" />
            <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {isHovered && renderSparkles()}
          </>
        )}
        {variant === 'secondary' && (
          <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
      </>
    )

    if (href) {
      const { className: anchorClassName, onClick, tabIndex, ...anchorRest } = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>

      const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
        if (isDisabled) {
          event.preventDefault()
          event.stopPropagation()
          return
        }
        onClick?.(event)
      }

      return (
        <Link
          href={href}
          className={cn(buttonClass, anchorClassName)}
          ref={ref as React.Ref<HTMLAnchorElement>}
          aria-disabled={isDisabled}
          tabIndex={isDisabled ? -1 : tabIndex}
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          {...anchorRest}
        >
          {glowOverlay}
          {content}
        </Link>
      )
    }

    const { type = 'button', onClick, ...buttonRest } = rest as React.ButtonHTMLAttributes<HTMLButtonElement>

    const handleButtonClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
      if (isDisabled) {
        event.preventDefault()
        event.stopPropagation()
        return
      }
      onClick?.(event)
    }

    return (
      <button
        {...buttonRest}
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        className={buttonClass}
        disabled={isDisabled}
        onClick={handleButtonClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {glowOverlay}
        {content}
      </button>
    )
  }
)

GlowButton.displayName = 'GlowButton'
