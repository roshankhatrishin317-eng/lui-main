'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, MessageCircle, Bookmark, Share2, X, Filter, Grid, Columns, ChevronLeft, ChevronRight, Sparkles, Star } from 'lucide-react'
import Image from 'next/image'

interface GalleryItem {
  id: number
  image: string
  title: string
  category: string
  technician: string
  likes: number
  tags: string[]
  color: string
  isLiked?: boolean
  isSaved?: boolean
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800',
    title: 'Chrome Dreams',
    category: 'Luxury',
    technician: 'Sarah',
    likes: 234,
    tags: ['chrome', 'metallic', 'trendy'],
    color: 'silver'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=800',
    title: 'Floral Fantasy',
    category: 'Artistic',
    technician: 'Emma',
    likes: 189,
    tags: ['floral', 'spring', 'delicate'],
    color: 'pink'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=800',
    title: 'Minimalist Chic',
    category: 'Classic',
    technician: 'Lily',
    likes: 312,
    tags: ['minimal', 'nude', 'elegant'],
    color: 'nude'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800',
    title: 'Glitter Bomb',
    category: 'Party',
    technician: 'Sarah',
    likes: 456,
    tags: ['glitter', 'sparkle', 'party'],
    color: 'gold'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800',
    title: 'French Twist',
    category: 'Classic',
    technician: 'Emma',
    likes: 278,
    tags: ['french', 'classic', 'timeless'],
    color: 'white'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1606924735276-fbb5b325e933?w=800',
    title: 'Abstract Art',
    category: 'Artistic',
    technician: 'Lily',
    likes: 367,
    tags: ['abstract', 'creative', 'unique'],
    color: 'multi'
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800',
    title: 'Ocean Vibes',
    category: 'Seasonal',
    technician: 'Sarah',
    likes: 298,
    tags: ['ocean', 'blue', 'summer'],
    color: 'blue'
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=800',
    title: 'Cherry Blossom',
    category: 'Seasonal',
    technician: 'Emma',
    likes: 412,
    tags: ['cherry', 'spring', 'pink'],
    color: 'pink'
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=800',
    title: 'Galaxy Nails',
    category: 'Luxury',
    technician: 'Lily',
    likes: 523,
    tags: ['galaxy', 'space', 'glitter'],
    color: 'purple'
  }
]

const categories = ['All', 'Luxury', 'Artistic', 'Classic', 'Party', 'Seasonal']
const colors = ['All', 'pink', 'nude', 'red', 'blue', 'purple', 'gold', 'silver', 'white', 'multi']

export const EnhancedGallery = () => {
  const [items, setItems] = useState(galleryItems)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedColor, setSelectedColor] = useState('All')
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid')
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [savedItems, setSavedItems] = useState<number[]>([])
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Filter items based on category and color
  const filteredItems = items.filter(item => {
    const categoryMatch = selectedCategory === 'All' || item.category === selectedCategory
    const colorMatch = selectedColor === 'All' || item.color === selectedColor
    return categoryMatch && colorMatch
  })

  const handleLike = (itemId: number) => {
    setItems(prev => prev.map(item => 
      item.id === itemId 
        ? { ...item, isLiked: !item.isLiked, likes: item.isLiked ? item.likes - 1 : item.likes + 1 }
        : item
    ))
  }

  const handleSave = (itemId: number) => {
    if (savedItems.includes(itemId)) {
      setSavedItems(prev => prev.filter(id => id !== itemId))
    } else {
      setSavedItems(prev => [...prev, itemId])
    }
  }

  const openLightbox = (item: GalleryItem) => {
    setSelectedItem(item)
  }

  const closeLightbox = () => {
    setSelectedItem(null)
  }

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (!selectedItem) return
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id)
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredItems.length
      : (currentIndex - 1 + filteredItems.length) % filteredItems.length
    setSelectedItem(filteredItems[newIndex])
  }

  return (
    <div className="relative">
      {/* Filter Bar */}
      <div className="mb-8 sticky top-20 z-30 bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary to-secondary text-white'
                    : 'bg-neutral-100 hover:bg-neutral-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="p-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 transition-all"
            >
              <Filter className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-all ${
                viewMode === 'grid' ? 'bg-primary text-white' : 'bg-neutral-100 hover:bg-neutral-200'
              }`}
            >
              <Grid className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode('masonry')}
              className={`p-2 rounded-lg transition-all ${
                viewMode === 'masonry' ? 'bg-primary text-white' : 'bg-neutral-100 hover:bg-neutral-200'
              }`}
            >
              <Columns className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Extended Filter Panel */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 mt-4 border-t">
                <p className="text-sm font-medium mb-3">Filter by Color:</p>
                <div className="flex flex-wrap gap-2">
                  {colors.map(color => (
                    <motion.button
                      key={color}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedColor(color)}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                        selectedColor === color
                          ? 'bg-gradient-to-r from-primary to-secondary text-white'
                          : 'bg-neutral-100 hover:bg-neutral-200'
                      }`}
                    >
                      {color === 'All' ? 'All Colors' : color.charAt(0).toUpperCase() + color.slice(1)}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Gallery Grid */}
      <motion.div 
        className={`
          ${viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
            : 'columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6'
          }
        `}
        layout
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ 
                duration: 0.3,
                delay: index * 0.05,
                layout: { type: "spring", stiffness: 300 }
              }}
              className={`relative group cursor-pointer ${viewMode === 'masonry' ? 'break-inside-avoid' : ''}`}
              onClick={() => openLightbox(item)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all">
                {/* Image */}
                <div className={`relative ${viewMode === 'grid' ? 'aspect-square' : ''}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay on Hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-sm opacity-90">by {item.technician}</p>
                    </div>
                  </motion.div>

                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation()
                        handleSave(item.id)
                      }}
                      className={`p-2 rounded-full backdrop-blur-md transition-all ${
                        savedItems.includes(item.id) 
                          ? 'bg-primary text-white' 
                          : 'bg-white/90 text-neutral-700'
                      }`}
                    >
                      <Bookmark className="w-5 h-5" fill={savedItems.includes(item.id) ? 'currentColor' : 'none'} />
                    </motion.button>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation()
                          handleLike(item.id)
                        }}
                        className="flex items-center gap-1"
                      >
                        <Heart 
                          className={`w-5 h-5 transition-colors ${
                            item.isLiked ? 'text-red-500 fill-red-500' : 'text-neutral-500'
                          }`}
                        />
                        <span className="text-sm font-medium">{item.likes}</span>
                      </motion.button>
                      <button className="flex items-center gap-1 text-neutral-500">
                        <MessageCircle className="w-5 h-5" />
                        <span className="text-sm">23</span>
                      </button>
                    </div>
                    <button className="text-neutral-500">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                  
                  {/* Tags */}
                  <div className="mt-3 flex flex-wrap gap-1">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-xs text-neutral-500">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-white/10 backdrop-blur-md"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Navigation Buttons */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-4 text-white p-2 rounded-full bg-white/10 backdrop-blur-md"
              onClick={(e) => {
                e.stopPropagation()
                navigateLightbox('prev')
              }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-4 text-white p-2 rounded-full bg-white/10 backdrop-blur-md"
              onClick={(e) => {
                e.stopPropagation()
                navigateLightbox('next')
              }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative max-w-4xl max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-contain rounded-2xl"
              />
              
              {/* Image Info Overlay */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-white mb-2">{selectedItem.title}</h2>
                <div className="flex items-center gap-4 text-white/90">
                  <span>by {selectedItem.technician}</span>
                  <span>•</span>
                  <span>{selectedItem.category}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Heart className="w-5 h-5 fill-current" />
                    <span>{selectedItem.likes}</span>
                  </div>
                </div>
                
                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedItem.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm text-white">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold"
                  onClick={() => window.location.href = '/booking'}
                >
                  Book This Style
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Saved Items Indicator */}
      <AnimatePresence>
        {savedItems.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-4 left-4 z-40 bg-primary text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
          >
            <Bookmark className="w-5 h-5 fill-current" />
            <span className="font-medium">{savedItems.length} saved</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
