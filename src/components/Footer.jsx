import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer-section">
      <div className="footer-content">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p 
          className="footer-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Let's build something amazing together.
        </motion.p>
        
        <div className="contact-links">
          <motion.a 
            href="mailto:hegdeadi01@gmail.com" 
            className="contact-item glass"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Mail size={24} />
            <span>hegdeadi01@gmail.com</span>
          </motion.a>
          <motion.a 
            href="tel:+919353462110" 
            className="contact-item glass"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Phone size={24} />
            <span>+91 9353462110</span>
          </motion.a>
        </div>

        <div className="social-links">
          <motion.a 
            href="#" 
            className="social-icon glass"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
          >
            <Linkedin />
          </motion.a>
          <motion.a 
            href="#" 
            className="social-icon glass"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
          >
            <Github />
          </motion.a>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Aditya Ganapati Hegde. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
