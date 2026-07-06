'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'

const projectCategories = [
  {
    category: 'Frappe & ERPNext Solutions',
    projects: [
      {
        title: 'Nepal ERPNext Implementation',
        description: 'Complete ERP implementation for Nepal-based organization',
        highlights: [
          'Configured Nepal-specific workflows',
          'Custom reports and dashboards',
          'Automated accounting processes',
          'User training and support',
        ],
        tech: ['Frappe', 'ERPNext', 'Python', 'JavaScript', 'MariaDB'],
        link: '#',
      },
      {
        title: 'Cab Booking Management System',
        description: 'Fleet management solution using Frappe Framework',
        highlights: [
          'Custom DocTypes for drivers and vehicles',
          'Role-based access control',
          'Automated trip assignment',
          'Real-time fare calculation',
        ],
        tech: ['Frappe', 'Python', 'JavaScript', 'MariaDB', 'REST API'],
        link: '#',
      },
    ],
  },
  {
    category: 'Web Applications',
    projects: [
      {
        title: 'Instawings - B2B Packaging Platform',
        description: 'High-performance e-commerce platform with custom CMS',
        highlights: [
          '95+ PageSpeed score',
          'Custom CMS integration',
          'Responsive design',
          'SEO optimized',
        ],
        tech: ['React.js', 'Tailwind CSS', 'AWS S3', 'JavaScript'],
        link: 'https://instawings.com',
      },
      {
        title: 'Cricket Real-Time Auction Engine',
        description: 'High-concurrency auction platform for live bidding',
        highlights: [
          '<100ms latency optimization',
          '1000+ concurrent connections',
          'WebSocket implementation',
          'JWT authentication',
        ],
        tech: ['Go', 'Next.js', 'PostgreSQL', 'WebSockets', 'AWS'],
        link: 'https://hplauction.co.in',
      },
    ],
  },
  {
    category: 'AI & Machine Learning',
    projects: [
      {
        title: 'Twitter Sentiment Analysis',
        description: 'NLP model for hate speech detection',
        highlights: [
          '92% accuracy achieved',
          'LSTM model implementation',
          'Real-time streaming',
          'Interactive dashboards',
        ],
        tech: ['Python', 'TensorFlow', 'LSTM', 'NLP', 'Matplotlib'],
        link: '#',
      },
      {
        title: 'Medicine Recommendation System',
        description: 'ML-based disease prediction and medicine recommendation',
        highlights: [
          '5000+ symptom database',
          'Cross-validation techniques',
          'Flask API',
          '50+ disease types',
        ],
        tech: ['Python', 'Scikit-learn', 'Pandas', 'Flask'],
        link: '#',
      },
    ],
  },
]

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 px-4">
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            Showcase of diverse projects across multiple domains and technologies
          </p>
        </motion.div>

        {/* Projects by Category */}
        {projectCategories.map((category, catIdx) => (
          <div key={catIdx} className="mb-20">
            {/* Category Title */}
            <motion.h3
              className="text-2xl font-bold mb-8 gradient-text font-display"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {category.category}
            </motion.h3>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {category.projects.map((project, projIdx) => (
                <motion.a
                  key={projIdx}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-premium p-8 group flex flex-col h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: projIdx * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h4 className="text-xl font-bold text-dark-100 group-hover:text-primary-300 transition-colors font-display flex-1">
                      {project.title}
                    </h4>
                    <div className="flex gap-2 flex-shrink-0">
                      <button className="p-2 rounded-lg bg-dark-800/50 hover:bg-primary-500/20 text-primary-400 transition-colors duration-300 group-hover:scale-110">
                        <ExternalLink size={18} />
                      </button>
                      <button className="p-2 rounded-lg bg-dark-800/50 hover:bg-primary-500/20 text-primary-400 transition-colors duration-300 group-hover:scale-110">
                        <Github size={18} />
                      </button>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-dark-300 mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-3 text-dark-300">
                        <ArrowUpRight size={16} className="text-primary-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-dark-700/50">
                    {project.tech.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary-500/10 text-primary-300 border border-primary-500/30 group-hover:bg-primary-500/20 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
