'use client'

import { motion } from 'framer-motion'

const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-950 to-dark-950" />

      {/* Animated Orbs */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-primary-500/20 to-transparent rounded-full blur-3xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-t from-accent-500/20 to-transparent rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-primary-600/10 via-accent-600/10 to-primary-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}

export default BackgroundEffects
