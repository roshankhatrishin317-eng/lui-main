'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { GlowButton } from '@/components/ui/GlowButton'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import Image from 'next/image'

const categories = ['All', 'Trends', 'Care Tips', 'Behind the Scenes', 'Bridal']

const blogPosts = [
  {
    id: 1,
    title: 'Spring 2024 Nail Trends: Pastel Paradise',
    excerpt: 'Discover the hottest nail trends for spring, featuring soft pastels, floral designs, and minimalist chic.',
    category: 'Trends',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600',
    author: 'Sarah Chen',
    date: 'March 15, 2024',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'The Ultimate Guide to Nail Care at Home',
    excerpt: 'Keep your nails healthy and beautiful between salon visits with our expert care tips.',
    category: 'Care Tips',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600',
    author: 'Emma Rodriguez',
    date: 'March 10, 2024',
    readTime: '7 min read'
  },
  {
    id: 3,
    title: 'Behind the Magic: A Day at The Lums Charms',
    excerpt: 'Take a peek behind the scenes and discover what makes our salon experience so special.',
    category: 'Behind the Scenes',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600',
    author: 'Lily Thompson',
    date: 'March 5, 2024',
    readTime: '4 min read'
  },
  {
    id: 4,
    title: 'Bridal Nail Inspiration for Every Style',
    excerpt: 'From classic French to modern minimalist, find the perfect nail design for your big day.',
    category: 'Bridal',
    image: 'https://images.unsplash.com/photo-1606924735276-fbb5b325e933?w=600',
    author: 'Sarah Chen',
    date: 'February 28, 2024',
    readTime: '6 min read'
  },
  {
    id: 5,
    title: 'Chrome Nails: How to Make Them Last',
    excerpt: 'Expert tips for maintaining your mirror-finish chrome nails and extending their lifespan.',
    category: 'Care Tips',
    image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=600',
    author: 'Emma Rodriguez',
    date: 'February 20, 2024',
    readTime: '5 min read'
  },
  {
    id: 6,
    title: 'The Art of 3D Nail Charms',
    excerpt: 'Explore the creative process behind our signature 3D charm applications.',
    category: 'Trends',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600',
    author: 'Lily Thompson',
    date: 'February 15, 2024',
    readTime: '8 min read'
  }
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [email, setEmail] = useState('')
  
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)
  
  const featuredPost = blogPosts[0]
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-50 to-neutral-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            tagline="The Blog"
            heading="Nail Care & Inspiration"
            description="Tips, trends, and behind-the-scenes stories from The Lums Charms"
          />
        </div>
      </section>
      
      {/* Featured Article */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="aspect-[16/10] lg:aspect-auto relative">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                    Featured
                  </span>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
                    {featuredPost.category}
                  </span>
                  <h2 className="font-display text-3xl font-bold mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-neutral-600 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-neutral-500">
                      <span>{featuredPost.author}</span>
                      <span>•</span>
                      <span>{featuredPost.date}</span>
                      <span>•</span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <GlowButton href={`/blog/${featuredPost.id}`} variant="tertiary">
                      Read More →
                    </GlowButton>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>
      
      {/* Category Filter */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 sticky top-20 z-30 bg-white/90 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-button text-white shadow-button'
                    : 'bg-white text-neutral-700 hover:bg-primary/10 border border-neutral-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Blog Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="h-full flex flex-col group cursor-pointer" hover={true}>
                  <div className="aspect-[16/10] relative rounded-xl overflow-hidden mb-4">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <h3 className="font-display text-xl font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-neutral-600 mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-neutral-500 pt-4 border-t border-neutral-200">
                    <div className="flex items-center space-x-2">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </GlassCard>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-50 to-neutral-100">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="glass-effect rounded-3xl p-8 md:p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-5xl mb-4 block">💌</span>
            <h2 className="font-accent text-3xl text-primary mb-3">Never Miss a Sparkle</h2>
            <h3 className="font-display text-2xl font-semibold mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
              Get the latest nail trends, care tips, and exclusive offers delivered to your inbox. 
              Plus, receive 10% off your first booking when you subscribe!
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full border border-neutral-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <GlowButton type="submit" size="md">
                Subscribe
              </GlowButton>
            </form>
          </motion.div>
        </div>
      </section>
      
      {/* Popular Tags */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-display text-xl font-semibold mb-6 text-center">
            Popular Topics
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Gel Nails', 'Chrome Finish', 'Nail Art', 'French Tips', 'Nail Care', 'DIY Tips', 
              'Wedding Nails', 'Seasonal Designs', 'Nail Health'].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-white rounded-full text-sm text-neutral-600 hover:bg-primary/10 hover:text-primary transition-all cursor-pointer border border-neutral-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
