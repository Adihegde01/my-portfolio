'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Contact = () => {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-transparent via-primary-500/5 to-dark-950">
      <div className="container-compact">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            Have any questions? I&apos;d love to hear from you. Send me a message!
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Email */}
          <motion.a
            href="mailto:hegdeadi01@gmail.com"
            className="card-premium p-8 text-center group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="text-primary-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
              <Mail size={32} />
            </div>
            <h3 className="text-lg font-semibold text-dark-100 mb-2">Email</h3>
            <p className="text-dark-300 hover:text-primary-400 transition-colors">
              hegdeadi01@gmail.com
            </p>
          </motion.a>

          {/* Phone */}
          <motion.a
            href="tel:+919353462110"
            className="card-premium p-8 text-center group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="text-primary-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
              <Phone size={32} />
            </div>
            <h3 className="text-lg font-semibold text-dark-100 mb-2">Phone</h3>
            <p className="text-dark-300 hover:text-primary-400 transition-colors">
              +91 9353462110
            </p>
          </motion.a>

          {/* Location */}
          <motion.div
            className="card-premium p-8 text-center group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <div className="text-primary-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
              <MapPin size={32} />
            </div>
            <h3 className="text-lg font-semibold text-dark-100 mb-2">Location</h3>
            <p className="text-dark-300">
              Available for Remote & On-site
            </p>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="card-premium p-12 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-dark-100 mb-4 font-display">
            Ready to start your project?
          </h3>
          <p className="text-dark-300 mb-8">
            Let&apos;s collaborate and create something amazing. Reach out to discuss your requirements and how I can help bring your vision to life.
          </p>
          <a
            href="mailto:hegdeadi01@gmail.com"
            className="btn-primary inline-flex"
          >
            <Send size={20} />
            Send Message
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
