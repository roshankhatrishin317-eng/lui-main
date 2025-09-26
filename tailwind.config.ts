import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
      colors: {
        primary: {
          DEFAULT: '#BFA2FF',
          dark: '#8F76FF',
          light: '#D4C2FF'
        },
        secondary: {
          DEFAULT: '#FFC7D3',
          dark: '#FFB0BF',
          light: '#FFDDE4'
        },
        accent: {
          DEFAULT: '#A8F0D1',
          dark: '#7FE8BA',
          light: '#C8F7E4'
        },
        neutral: {
          900: '#2F233B',
          800: '#3D2F4A',
          700: '#4D3C5E',
          600: '#5E4C74',
          500: '#7A6690',
          400: '#9783AD',
          300: '#B5A5C8',
          200: '#D4C9E2',
          100: '#FFF6EC',
          50: '#FFFCF9'
        },
        cream: '#FFF6EC',
        charcoal: '#2F233B',
        gold: '#F5D77B',
        success: '#8FF5C8',
        error: '#FF8A9B'
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
        accent: ['Great Vibes', 'cursive'],
        script: ['Dancing Script', 'cursive']
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'display-xl': ['2.75rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'display-lg': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        'heading-md': ['1.75rem', { lineHeight: '1.3' }],
        'heading-sm': ['1.5rem', { lineHeight: '1.35' }],
        'body-lg': ['1.25rem', { lineHeight: '1.5' }],
        'body-md': ['1.125rem', { lineHeight: '1.5' }],
        'body-sm': ['1rem', { lineHeight: '1.5' }],
        'caption': ['0.875rem', { lineHeight: '1.4' }],
        'overline': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.08em' }]
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      borderRadius: {
        'xl': '1.25rem',
        '2xl': '1.75rem',
        '3xl': '2rem'
      },
      boxShadow: {
        'soft': '0 10px 30px rgba(47, 35, 59, 0.12)',
        'glow': '0 0 25px rgba(168, 240, 209, 0.45)',
        'nav': '0 6px 18px rgba(47, 35, 59, 0.08)',
        'card': '0 15px 40px rgba(191, 162, 255, 0.25)',
        'button': '0 10px 25px rgba(191, 162, 255, 0.35)'
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #BFA2FF 0%, #FFC7D3 50%, #A8F0D1 100%)',
        'gradient-button': 'linear-gradient(90deg, #FFC7D3 0%, #BFA2FF 100%)',
        'gradient-card': 'linear-gradient(180deg, rgba(255,246,236,0.85) 0%, rgba(191,162,255,0.35) 100%)'
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'fade-up': 'fadeUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.3s ease-in',
        'slide-in': 'slideIn 0.4s ease-out',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'blob': 'blob 8s infinite',
        'pulse-glow': 'pulse-glow 2s infinite',
        'bounce-in': 'bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'rotate-glow': 'rotate-glow 4s linear infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        shimmer: {
          '0%': { opacity: '0.7' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0.7' }
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        sparkle: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' }
        }
      }
    }
  },
  plugins: [],
}
export default config
