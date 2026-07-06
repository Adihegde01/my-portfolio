'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 px-4 flex items-center justify-center overflow-hidden">
      <div className="container-fluid w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Subtitle */}
            <motion.p
              className="text-primary-400 font-medium tracking-widest uppercase text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Welcome to my portfolio
            </motion.p>

            {/* Main Title */}
            <div className="space-y-4">
              <motion.h1
                className="text-5xl md:text-7xl font-bold font-display leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="gradient-text">Aditya</span>
                <br />
                <span className="text-dark-100">Ganapati Hegde</span>
              </motion.h1>
            </div>

            {/* Role */}
            <motion.p
              className="text-2xl md:text-3xl font-semibold text-dark-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              ERPNext & Frappe
              <span className="gradient-text"> Consultant</span>
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-lg text-dark-300 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Enterprise business application specialist with expertise in implementing, customizing, and optimizing ERPNext solutions. Skilled in Python, JavaScript, and workflow automation across CRM, HRMS, Accounts, and more.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a href="#projects" className="btn-primary group">
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="btn-secondary group">
                <Download size={20} />
                Download Resume
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 pt-8 border-t border-dark-700/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div>
                <p className="text-3xl font-bold gradient-text">50+</p>
                <p className="text-sm text-dark-400">Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">8+</p>
                <p className="text-sm text-dark-400">Years</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">30+</p>
                <p className="text-sm text-dark-400">Clients</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            className="relative hidden md:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Glow Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-accent-500/30 rounded-3xl blur-3xl -z-10"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />

              {/* Image Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-primary-500/30 shadow-2xl shadow-primary-500/20">
                <Image
                  src="/my-portfolio/profile.jpg"
                  alt="Aditya Ganapati Hegde"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Cards */}
              <motion.div
                className="absolute -bottom-6 -left-6 card-premium p-4 max-w-xs"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <p className="text-sm font-semibold text-dark-100">Enterprise Solutions</p>
                <p className="text-xs text-dark-400">Scalable & Reliable</p>
              </motion.div>

              <motion.div
                className="absolute -top-6 -right-6 card-premium p-4 max-w-xs"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                <p className="text-sm font-semibold text-dark-100">Full-Stack Expert</p>
                <p className="text-xs text-dark-400">Python & JavaScript</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
