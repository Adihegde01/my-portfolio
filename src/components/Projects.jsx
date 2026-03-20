import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import { ExternalLink, Github } from 'lucide-react';

const projectCategories = [
  {
    name: "Web Applications",
    projects: [
      {
        title: "Instawings",
        desc: "A comprehensive B2B packaging solution developed with a focus on high performance and SEO, featuring a clean, eco-friendly design.",
        highlights: [
          "Implemented a custom CMS for efficient product management.",
          "Optimized asset delivery reaching a 95+ PageSpeed score.",
          "Built with a modular architecture for easy scalability."
        ],
        tools: ["React.js", "Tailwind CSS", "AWS S3", "JavaScript"],
        link: "https://instawings.com"
      },
      {
        title: "Cricket Real-Time Auction",
        desc: "A high-concurrency auction engine designed for live sports auctions with real-time bidding capabilities.",
        highlights: [
          "Reduced latency to <100ms using Go-based WebSockets.",
          "Handled 1000+ concurrent requests during peak bidding cycles.",
          "Implemented secure JWT-based admin controls for auctioneers."
        ],
        tools: ["Go (Gin)", "WebSockets", "Next.js", "PostgreSQL", "AWS"],
        link: "https://hplauction.co.in"
      }
    ]
  },
  {
    name: "AI & Machine Learning",
    projects: [
      {
        title: "Twitter Sentiment Analysis",
        desc: "Developed a tweet classification system to detect hate speech using advanced NLP techniques and handling class imbalance.",
        highlights: [
          "Achieved 92% accuracy using Random Forest and LSTM models.",
          "Automated data pipeline for real-time tweet streaming.",
          "Visualized complex sentiment trends using Interactive Dashboards."
        ],
        tools: ["Python", "Scikit-learn", "NLP", "Matplotlib"],
        link: "#"
      },
      {
        title: "Medicine Recommendation System",
        desc: "ML-based system to predict diseases from user-provided symptoms and provide accurate medicine recommendations.",
        highlights: [
          "Integrated a database of 5000+ medical symptoms and remedies.",
          "Developed a Flask-based API for seamless integration.",
          "Used cross-validation for reliability across 50+ disease types."
        ],
        tools: ["Python", "Pandas", "Scikit-learn", "Flask"],
        link: "#"
      }
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>
      {projectCategories.map((category, catIndex) => (
        <div key={catIndex} className="project-category">
          <h3 className="category-title gradient-text">{category.name}</h3>
          <div className="projects-grid">
            {category.projects.map((project, index) => (
              <motion.div 
                key={index}
                className="project-card premium-badge"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-links">
                    <a href={project.link} target="_blank" rel="noopener noreferrer"><ExternalLink size={18} /></a>
                    <a href="#"><Github size={18} /></a>
                  </div>
                </div>
                <p className="project-desc">{project.desc}</p>
                {project.highlights && (
                  <ul className="project-highlights">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex}>{highlight}</li>
                    ))}
                  </ul>
                )}
                <div className="project-footer">
                  <div className="project-tools">
                    {project.tools.map((tool, i) => (
                      <span key={i} className="tool">{tool}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
