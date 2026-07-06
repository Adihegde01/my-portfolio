'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Layout, Cloud, Cpu, Brain, Zap } from 'lucide-react'

const skillCategories = [
  {
    title: 'Frappe & ERPNext',
    icon: Cpu,
    description: 'Expert in enterprise resource planning solutions',
    skills: ['Frappe Framework', 'ERPNext', 'Custom DocTypes', 'Automation', 'Reports', 'Workflows'],
  },
  {
    title: 'Backend Development',
    icon: Code2,
    description: 'Server-side logic and API development',
    skills: ['Python', 'JavaScript/Node.js', 'Java', 'Go', 'REST APIs', 'WebSockets'],
  },
  {
    title: 'Frontend Development',
    icon: Layout,
    description: 'Interactive and responsive user interfaces',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion', 'Vue.js'],
  },
  {
    title: 'Database Design',
    icon: Database,
    description: 'Robust data management and optimization',
    skills: ['PostgreSQL', 'MariaDB', 'MongoDB', 'Redis', 'Query Optimization', 'Schema Design'],
  },
  {
    title: 'DevOps & Deployment',
    icon: Cloud,
    description: 'Infrastructure and continuous integration',
    skills: ['AWS', 'Docker', 'Ubuntu/Linux', 'CI/CD', 'GitHub Actions', 'Deployment'],
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    description: 'Data analysis and predictive modeling',
    skills: ['Python', 'Scikit-learn', 'TensorFlow', 'NLP', 'Data Analysis', 'Pandas'],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 px-4">
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
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            Comprehensive skills across multiple domains and technologies
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon
            return (
              <motion.div
                key={idx}
                className="card-premium p-8 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Icon */}
                <div className="mb-6 text-primary-400 group-hover:scale-110 group-hover:text-primary-300 transition-all duration-300">
                  <Icon size={32} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-dark-100 mb-2 font-display">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-dark-400 mb-6">
                  {category.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary-500/10 text-primary-300 border border-primary-500/30 hover:bg-primary-500/20 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
