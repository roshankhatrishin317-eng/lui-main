'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, MapPin, CreditCard, Check, ChevronRight, ChevronLeft, Sparkles, Heart, Star } from 'lucide-react'
import { ServiceCard3D } from '../ui/ServiceCard3D'

interface BookingStep {
  id: number
  title: string
  icon: React.ReactNode
  description: string
}

const steps: BookingStep[] = [
  {
    id: 1,
    title: 'Choose Service',
    icon: <Sparkles className="w-6 h-6" />,
    description: 'Select your perfect nail service'
  },
  {
    id: 2,
    title: 'Pick Date & Time',
    icon: <Calendar className="w-6 h-6" />,
    description: 'Find your ideal appointment slot'
  },
  {
    id: 3,
    title: 'Add Details',
    icon: <MapPin className="w-6 h-6" />,
    description: 'Tell us your preferences'
  },
  {
    id: 4,
    title: 'Confirm & Pay',
    icon: <CreditCard className="w-6 h-6" />,
    description: 'Secure your booking'
  }
]

const services = [
  {
    title: 'Signature Charm Set',
    description: 'Custom nail art with premium charms',
    duration: '90 min',
    price: '$85',
    icon: '✨',
    features: ['Custom Design', 'Premium Polish', 'Hand Massage', 'Charm Application']
  },
  {
    title: 'Bridal Atelier',
    description: 'Elegant designs for your special day',
    duration: '120 min',
    price: '$120',
    icon: '👰',
    features: ['Bridal Consultation', 'Trial Session', 'Premium Gems', 'Photo-Ready Finish']
  },
  {
    title: 'Express Refresh',
    description: 'Quick touch-up for busy schedules',
    duration: '45 min',
    price: '$45',
    icon: '⚡',
    features: ['Quick Service', 'Polish Change', 'Basic Nail Care', 'Express Dry']
  },
  {
    title: 'Luxury Extensions',
    description: 'Premium gel extensions with art',
    duration: '150 min',
    price: '$150',
    icon: '💎',
    features: ['Gel Extensions', 'Custom Length', 'Artistic Design', 'Long-Lasting']
  }
]

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
  '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'
]

export const BookingWizard = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [preferences, setPreferences] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    } else {
      setIsComplete(true)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return selectedService !== null
      case 2:
        return selectedDate !== '' && selectedTime !== ''
      case 3:
        return true // Preferences are optional
      case 4:
        return true // Payment details would be validated here
      default:
        return false
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      {!isComplete ? (
        <>
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              {steps.map((step, index) => (
                <div key={step.id} className="flex-1 relative">
                  <motion.div
                    className={`flex items-center ${index < steps.length - 1 ? 'w-full' : ''}`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {/* Step Circle */}
                    <motion.div
                      className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                        currentStep >= step.id
                          ? 'bg-gradient-to-r from-primary to-secondary text-white'
                          : 'bg-neutral-200 text-neutral-500'
                      }`}
                      animate={{
                        scale: currentStep === step.id ? 1.2 : 1,
                      }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {currentStep > step.id ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <span className="font-bold">{step.id}</span>
                      )}
                      
                      {/* Pulse Effect for Current Step */}
                      {currentStep === step.id && (
                        <motion.div
                          className="absolute inset-0 rounded-full bg-primary/30"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 0, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                        />
                      )}
                    </motion.div>

                    {/* Connector Line */}
                    {index < steps.length - 1 && (
                      <div className="flex-1 h-1 bg-neutral-200 mx-2">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-secondary"
                          initial={{ width: '0%' }}
                          animate={{
                            width: currentStep > step.id ? '100%' : '0%',
                          }}
                          transition={{ duration: 0.5, ease: 'easeInOut' }}
                        />
                      </div>
                    )}
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Step Labels */}
            <div className="flex justify-between">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`text-center transition-all ${
                    currentStep === step.id ? 'text-primary' : 'text-neutral-500'
                  }`}
                >
                  <p className="text-sm font-medium">{step.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="mb-8"
            >
              {/* Step 1: Service Selection */}
              {currentStep === 1 && (
                <div>
                  <h2 className="text-3xl font-display font-bold text-center mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Choose Your Perfect Service
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                      <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => setSelectedService(service)}
                        className={`cursor-pointer transform transition-all ${
                          selectedService?.title === service.title ? 'scale-105' : ''
                        }`}
                      >
                        <div
                          className={`relative p-6 rounded-2xl bg-white shadow-lg border-2 transition-all ${
                            selectedService?.title === service.title
                              ? 'border-primary shadow-xl bg-gradient-to-br from-primary/5 to-secondary/5'
                              : 'border-transparent hover:border-primary/30'
                          }`}
                        >
                          {selectedService?.title === service.title && (
                            <motion.div
                              className="absolute -top-3 -right-3"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: 'spring' }}
                            >
                              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                                <Check className="w-5 h-5 text-white" />
                              </div>
                            </motion.div>
                          )}
                          
                          <div className="flex items-start gap-4">
                            <div className="text-4xl">{service.icon}</div>
                            <div className="flex-1">
                              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                              <p className="text-neutral-600 mb-3">{service.description}</p>
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-neutral-500">
                                  <Clock className="w-4 h-4 inline mr-1" />
                                  {service.duration}
                                </span>
                                <span className="font-bold text-lg text-primary">{service.price}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Date & Time Selection */}
              {currentStep === 2 && (
                <div>
                  <h2 className="text-3xl font-display font-bold text-center mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Select Your Appointment Time
                  </h2>
                  
                  {/* Date Selection */}
                  <div className="mb-8">
                    <label className="block text-lg font-medium mb-4">Choose Date</label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full p-4 rounded-xl border-2 border-neutral-200 focus:border-primary transition-all outline-none"
                    />
                  </div>

                  {/* Time Selection */}
                  <div>
                    <label className="block text-lg font-medium mb-4">Available Times</label>
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                      {timeSlots.map((time) => (
                        <motion.button
                          key={time}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedTime(time)}
                          className={`p-3 rounded-xl font-medium transition-all ${
                            selectedTime === time
                              ? 'bg-gradient-to-r from-primary to-secondary text-white'
                              : 'bg-white border-2 border-neutral-200 hover:border-primary'
                          }`}
                        >
                          {time}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Preferences */}
              {currentStep === 3 && (
                <div>
                  <h2 className="text-3xl font-display font-bold text-center mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Tell Us Your Preferences
                  </h2>
                  
                  <div className="max-w-2xl mx-auto">
                    <div className="mb-6">
                      <label className="block text-lg font-medium mb-4">
                        Special Requests or Nail Design Ideas
                      </label>
                      <textarea
                        value={preferences}
                        onChange={(e) => setPreferences(e.target.value)}
                        placeholder="Describe your dream nail design, color preferences, or any special requests..."
                        rows={6}
                        className="w-full p-4 rounded-xl border-2 border-neutral-200 focus:border-primary transition-all outline-none resize-none"
                      />
                    </div>

                    {/* Popular Add-ons */}
                    <div>
                      <label className="block text-lg font-medium mb-4">Popular Add-ons</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {['Gel Polish (+$15)', 'Nail Art (+$20)', 'Paraffin Treatment (+$10)', 'Extra Massage (+$15)'].map((addon) => (
                          <motion.div
                            key={addon}
                            whileHover={{ scale: 1.02 }}
                            className="p-4 rounded-xl bg-white border-2 border-neutral-200 hover:border-primary transition-all cursor-pointer"
                          >
                            <label className="flex items-center cursor-pointer">
                              <input type="checkbox" className="mr-3 w-5 h-5 text-primary" />
                              <span>{addon}</span>
                            </label>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Confirmation */}
              {currentStep === 4 && (
                <div>
                  <h2 className="text-3xl font-display font-bold text-center mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Confirm Your Booking
                  </h2>
                  
                  <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center pb-4 border-b">
                        <span className="text-neutral-600">Service:</span>
                        <span className="font-semibold">{selectedService?.title}</span>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b">
                        <span className="text-neutral-600">Date:</span>
                        <span className="font-semibold">{selectedDate}</span>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b">
                        <span className="text-neutral-600">Time:</span>
                        <span className="font-semibold">{selectedTime}</span>
                      </div>
                      <div className="flex justify-between items-center pt-2">
                        <span className="text-lg font-bold">Total:</span>
                        <span className="text-2xl font-bold text-primary">{selectedService?.price}</span>
                      </div>
                    </div>

                    <div className="text-center text-sm text-neutral-600">
                      <p>💳 Payment will be processed securely</p>
                      <p>📧 Confirmation will be sent to your email</p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                currentStep === 1
                  ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
                  : 'bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextStep}
              disabled={!canProceed()}
              className={`flex items-center gap-2 px-8 py-3 rounded-full font-medium transition-all ${
                canProceed()
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl'
                  : 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
              }`}
            >
              {currentStep === steps.length ? 'Complete Booking' : 'Next'}
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </>
      ) : (
        // Success State
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', duration: 0.8 }}
          className="text-center py-20"
        >
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 1,
              ease: 'easeOut',
            }}
            className="inline-block mb-6"
          >
            <div className="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
              <Check className="w-12 h-12 text-white" />
            </div>
          </motion.div>
          
          <h2 className="text-4xl font-display font-bold mb-4">Booking Confirmed! 🎉</h2>
          <p className="text-xl text-neutral-600 mb-8">
            We can't wait to pamper you at The Lums Charms!
          </p>
          
          {/* Confetti Animation */}
          <div className="relative">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-2xl"
                initial={{
                  x: 0,
                  y: 0,
                  opacity: 1,
                }}
                animate={{
                  x: (Math.random() - 0.5) * 300,
                  y: Math.random() * -200 - 100,
                  rotate: Math.random() * 360,
                  opacity: 0,
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.05,
                  ease: 'easeOut',
                }}
                style={{
                  left: '50%',
                  top: '50%',
                }}
              >
                {['🎊', '✨', '💖', '🌟', '🎉'][Math.floor(Math.random() * 5)]}
              </motion.div>
            ))}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/'}
            className="mt-8 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold shadow-lg"
          >
            Back to Home
          </motion.button>
        </motion.div>
      )}
    </div>
  )
}
