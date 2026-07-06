'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, Send, CheckCircle } from 'lucide-react'

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <footer id="contact" className="relative py-24 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-dark-950 -z-10" />

      <div className="container-fluid">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s build something amazing together.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Email Card */}
          <motion.a
            href="mailto:hegdeadi01@gmail.com"
            className="card-premium p-8 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="text-primary-400 mb-4 group-hover:scale-110 transition-transform duration-300">
              <Mail size={32} />
            </div>
            <h3 className="text-lg font-semibold text-dark-100 mb-2">Email</h3>
            <p className="text-dark-300">hegdeadi01@gmail.com</p>
          </motion.a>

          {/* Phone Card */}
          <motion.a
            href="tel:+919353462110"
            className="card-premium p-8 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="text-primary-400 mb-4 group-hover:scale-110 transition-transform duration-300">
              <Phone size={32} />
            </div>
            <h3 className="text-lg font-semibold text-dark-100 mb-2">Phone</h3>
            <p className="text-dark-300">+91 9353462110</p>
          </motion.a>

          {/* Social Card */}
          <motion.div
            className="card-premium p-8 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <h3 className="text-lg font-semibold text-dark-100 mb-4">Follow</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 rounded-lg bg-dark-800/50 hover:bg-primary-500/20 text-primary-400 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="p-3 rounded-lg bg-dark-800/50 hover:bg-primary-500/20 text-primary-400 transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          className="card-premium p-8 max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {submitted ? (
            <motion.div
              className="flex flex-col items-center justify-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <CheckCircle size={48} className="text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-dark-100 mb-2">Message Sent!</h3>
              <p className="text-dark-300">Thank you for reaching out. I&apos;ll get back to you soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-dark-200 font-medium mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700/50 rounded-lg text-dark-100 placeholder-dark-500 focus:outline-none focus:border-primary-400 transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-dark-200 font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700/50 rounded-lg text-dark-100 placeholder-dark-500 focus:outline-none focus:border-primary-400 transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-dark-200 font-medium mb-2">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700/50 rounded-lg text-dark-100 placeholder-dark-500 focus:outline-none focus:border-primary-400 transition-colors duration-300 resize-none h-32"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full justify-center"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          )}
        </motion.div>

        {/* Bottom */}
        <div className="border-t border-dark-700/50 pt-8 text-center">
          <p className="text-dark-400 text-sm">
            &copy; {new Date().getFullYear()} Aditya Ganapati Hegde. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
