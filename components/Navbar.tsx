'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X, Moon, Sun } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-dark-700/50 bg-dark-950/80"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
    >
      <div className="container-fluid">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold gradient-text font-display"
            whileHover={{ scale: 1.05 }}
          >
            AGH
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-dark-300 hover:text-primary-400 transition-colors duration-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.2 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Theme & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 hover:bg-dark-800 rounded-lg transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-dark-300" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-dark-800 rounded-lg transition-colors duration-300"
            >
              {isOpen ? (
                <X size={24} className="text-dark-200" />
              ) : (
                <Menu size={24} className="text-dark-200" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-4 py-4 space-y-3 border-t border-dark-700/50">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm font-medium text-dark-300 hover:text-primary-400 transition-colors duration-300 py-2"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar
