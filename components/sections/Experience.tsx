'use client'

import { motion } from 'framer-motion'
import { Briefcase, CheckCircle2, Trophy } from 'lucide-react'

const experiences = [
  {
    role: 'Consultant Software Engineer',
    company: 'Walue.biz',
    duration: 'Present',
    type: 'Full-time',
    achievements: [
      'Full-stack development using Frappe framework',
      'ERPNext customization and implementation',
      'Python and JavaScript development',
      'REST API design and integration',
      'Backend optimization and database management',
      'Enterprise solution architecture',
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 px-4">
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
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            Experience in building enterprise solutions and leading teams
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="card-premium p-8 relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ x: 10 }}
            >
              {/* Timeline Indicator */}
              <div className="absolute -left-4 top-8 w-8 h-8 rounded-full bg-primary-500 border-4 border-dark-950 flex items-center justify-center">
                <Trophy size={16} className="text-dark-950" />
              </div>

              {/* Content */}
              <div className="pl-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-dark-100 font-display">
                      {exp.role}
                    </h3>
                    <p className="text-primary-400 font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="px-4 py-2 rounded-full bg-primary-500/10 text-primary-300 text-sm font-medium border border-primary-500/30">
                      {exp.duration}
                    </span>
                    <span className="px-4 py-2 rounded-full bg-accent-500/10 text-accent-300 text-sm font-medium border border-accent-500/30">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Achievements */}
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-dark-300">
                      <CheckCircle2 size={20} className="text-primary-400 flex-shrink-0 mt-1" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
