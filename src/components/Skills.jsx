import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';
import { 
  Code2, Database, Layout, Cloud, GitBranch, Cpu 
} from 'lucide-react';

const skillsData = [
  { category: "Programming", icon: <Code2 />, items: ["Python", "SQL", "Java", "Go"] },
  { category: "Frameworks/AI", icon: <Cpu />, items: ["Frappe", "Scikit-learn", "NumPy", "Pandas", "Flask"] },
  { category: "Frontend", icon: <Layout />, items: ["React.js", "Next.js", "Tailwind CSS", "JavaScript"] },
  { category: "Databases", icon: <Database />, items: ["PostgreSQL", "Firebase", "MariaDB"] },
  { category: "Cloud & DevOps", icon: <Cloud />, items: ["AWS", "Docker", "Ubuntu"] },
  { category: "Version Control", icon: <GitBranch />, items: ["Git", "GitHub"] }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Technical Expertise
      </motion.h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <motion.div 
            key={index}
            className="skill-card premium-card"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="skill-icon gradient-text">{skill.icon}</div>
            <h3>{skill.category}</h3>
            <div className="skill-tags">
              {skill.items.map((item, i) => (
                <span key={i} className="skill-tag">{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
