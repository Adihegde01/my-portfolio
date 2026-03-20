import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import heroBg from '../assets/hero-bg-purple.png';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg" style={{ backgroundImage: `url(${heroBg})` }}></div>
      <div className="hero-overlay"></div>
      
      {/* Decorative Blobs */}
      <motion.div 
        className="decorative-blob blob-1"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 1, delay: 0.2, type: "spring" }}
      />
      <motion.div 
        className="decorative-blob blob-2"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1, delay: 0.4, type: "spring" }}
      />

      {/* Decorative Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div 
          key={i}
          className={`particle particle-${i + 1}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1.5, delay: 0.1 * i, type: "spring" }}
        />
      ))}

      <div className="hero-content">
        <motion.div 
          className="profile-container"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
        >
          <img src={profileImg} alt="Aditya Ganapati Hegde" className="profile-img" />
        </motion.div>

        <motion.h2 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Consultant Software Engineer
        </motion.h2>

        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          ADITYA GANAPATI HEGDE
        </motion.h1>

        <motion.div 
          className="hero-bio-glass"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            I am a passionate <span className="highlight">Full-Stack Developer</span> with hands-on experience in building scalable, real-time web applications and delivering end-to-end software solutions. I enjoy transforming complex problems into efficient, user-friendly applications.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            I have worked extensively with modern technologies such as <span className="highlight">Frappe Framework</span>, <span className="highlight">Python</span>, <span className="highlight">React.js</span>, <span className="highlight">Next.js</span>, <span className="highlight">REST APIs</span>, <span className="highlight">MariaDB</span>, <span className="highlight">Docker</span>, <span className="highlight">Git</span>, and <span className="highlight">AWS</span>, enabling me to develop robust, high-performance systems across both frontend and backend.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            With a strong focus on <span className="highlight">clean architecture</span>, performance optimization, and seamless user experience, I aim to build applications that are not only functional but also scalable and maintainable.
          </motion.p>
        </motion.div>

        <motion.div 
          className="hero-btns"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
