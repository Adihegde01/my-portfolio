import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
  {
    role: "Consultant Software Engineer",
    company: "Walue.biz",
    duration: "Present",
    desc: [
      <span>Focusing on <span className="highlight">full-stack development</span> using the <span className="highlight">Frappe framework</span>.</span>,
      <span>Developing and customizing <span className="highlight">ERP applications</span> using <span className="highlight">Python</span> and <span className="highlight">JavaScript</span>.</span>,
      <span>Designing and integrating <span className="highlight">REST APIs</span> for seamless data communication.</span>,
      <span>Optimizing <span className="highlight">backend logic</span> and <span className="highlight">database operations</span> for scalable applications.</span>
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Professional Journey
      </motion.h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            className="exp-item premium-badge"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <div className="exp-info">
              <h3>{exp.role}</h3>
              <h4 className="gradient-text">{exp.company}</h4>
              <span className="exp-date">{exp.duration}</span>
            </div>
            <ul className="exp-desc">
              {exp.desc.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
