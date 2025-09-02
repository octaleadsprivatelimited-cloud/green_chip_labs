import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ExternalLink,
  Eye,
  Calendar,
  MapPin,
  Home,
  Zap,
  Star,
  Award,
  CheckCircle
} from 'lucide-react';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';

const Portfolio: React.FC = () => {

  useEffect(() => {
    // Add scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);



  const projects = [
    {
      id: 1,
      title: "Modern Smart Villa",
      category: "luxury",
      location: "Beverly Hills, CA",
      date: "2024-11-15",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
      description: "Complete smart home automation for a 8,000 sq ft luxury villa featuring voice control, automated lighting, climate control, and advanced security systems.",
      features: ["Voice Control", "Smart Lighting", "Climate Control", "Security System", "Pool Automation"],
      size: "8,000 sq ft",
      duration: "6 weeks",
      rating: 5,
      testimonial: "The transformation is incredible. Our home is now truly intelligent and energy-efficient."
    },
    {
      id: 2,
      title: "Urban Smart Apartment",
      category: "residential",
      location: "New York, NY",
      date: "2024-11-10",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
      description: "Smart apartment automation for a 1,200 sq ft urban living space with integrated IoT devices and energy management systems.",
      features: ["Smart Lighting", "Climate Control", "Security", "Energy Management", "Mobile App"],
      size: "1,200 sq ft",
      duration: "2 weeks",
      rating: 5,
      testimonial: "Perfect solution for city living. Everything is controlled from my phone."
    },
    {
      id: 3,
      title: "Corporate Smart Office",
      category: "commercial",
      location: "San Francisco, CA",
      date: "2024-11-05",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      description: "Complete office automation for a 15,000 sq ft corporate headquarters with meeting room automation, energy optimization, and security integration.",
      features: ["Meeting Room Automation", "Energy Optimization", "Access Control", "Climate Control", "Analytics"],
      size: "15,000 sq ft",
      duration: "8 weeks",
      rating: 5,
      testimonial: "Increased productivity and reduced energy costs by 35%."
    },
    {
      id: 4,
      title: "Family Smart Home",
      category: "residential",
      location: "Austin, TX",
      date: "2024-10-28",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
      description: "Family-friendly smart home with child-safe automation, entertainment systems, and comprehensive security for a growing family.",
      features: ["Child-Safe Controls", "Entertainment System", "Security", "Energy Monitoring", "Family App"],
      size: "3,500 sq ft",
      duration: "4 weeks",
      rating: 5,
      testimonial: "Perfect for our family. Kids love the voice controls and we love the security."
    },
    {
      id: 5,
      title: "Luxury Penthouse",
      category: "luxury",
      location: "Miami, FL",
      date: "2024-10-20",
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=600&h=400&fit=crop",
      description: "Ultra-luxury penthouse automation with panoramic views, featuring premium smart systems and personalized automation scenarios.",
      features: ["Premium Systems", "Panoramic Integration", "Personalized Scenarios", "Entertainment", "Climate Control"],
      size: "5,000 sq ft",
      duration: "5 weeks",
      rating: 5,
      testimonial: "Absolutely stunning. The automation enhances the luxury experience."
    },
    {
      id: 6,
      title: "Smart Retail Store",
      category: "commercial",
      location: "Chicago, IL",
      date: "2024-10-15",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      description: "Retail store automation with customer analytics, inventory management, and energy-efficient lighting systems.",
      features: ["Customer Analytics", "Inventory Management", "Smart Lighting", "Security", "Energy Efficiency"],
      size: "8,000 sq ft",
      duration: "3 weeks",
      rating: 5,
      testimonial: "Customer experience improved significantly with the new smart systems."
    }
  ];



  const stats = [
    { number: "500+", label: "Projects Completed", icon: Home },
    { number: "50+", label: "Cities Served", icon: MapPin },
    { number: "4.9/5", label: "Customer Rating", icon: Star },
    { number: "99%", label: "Satisfaction Rate", icon: Award }
  ];

  return (
    <Layout
      title="Portfolio - Green Chip Labs | Smart Home Automation Projects & Case Studies"
      description="Explore our portfolio of successful smart home automation projects. See real examples of residential, commercial, and luxury smart home installations from Green Chip Labs."
      keywords="smart home portfolio, automation projects, case studies, residential automation, commercial automation, luxury smart homes"
      canonical="/portfolio"
    >
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-grid">
              <div className="hero-text">
                <h1>Our Portfolio</h1>
                <p>
                  Discover our successful smart home automation projects across residential, commercial, 
                  and luxury properties. See how we've transformed spaces with cutting-edge technology.
                </p>
                <div className="hero-buttons">
                  <a href="#projects" className="btn btn-primary">
                    View Projects <ArrowRight size={20} />
                  </a>
                  <a href="/contact" className="btn btn-secondary">
                    Start Your Project
                  </a>
                </div>
              </div>
              <div className="hero-image">
                <img 
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Smart Home Portfolio Projects" 
                  className="hero-img"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats-section">
        <div className="container">
          <div className="fade-in">
            <h2 className="section-title">Our Success in Numbers</h2>
            <p className="section-subtitle">
              Trusted by clients worldwide to deliver exceptional smart home solutions
            </p>
          </div>
          
          Featured Projects

<div className="success-stats-container">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="success-stat-block slide-in-left"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="success-stat-header">
                  <div className="success-stat-icon">
                    <stat.icon size={28} />
                  </div>
                  <div className="success-stat-number">{stat.number}</div>
                </div>
                <div className="success-stat-label">{stat.label}</div>
                <div className="success-stat-progress">
                  <div className="progress-bar" style={{ width: `${85 + (index * 5)}%` }}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Projects Grid */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <div className="fade-in">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              {projects.length} featured project{projects.length !== 1 ? 's' : ''}
            </p>
          </div>
          
          <div className="featured-projects-container">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="featured-project-block slide-in-right"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="project-block-header">
                  <div className="project-category-badge">
                    {project.category}
                  </div>
                  <div className="project-rating">
                    {[...Array(project.rating)].map((_, i) => (
                      <Star key={i} size={16} className="star-filled" />
                    ))}
                  </div>
                </div>
                
                <div className="project-block-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <a href={`/portfolio/${project.id}`} className="view-project-btn">
                      <Eye size={20} />
                      View Details
                    </a>
                  </div>
                </div>
                
                <div className="project-block-content">
                  <h3 className="project-block-title">{project.title}</h3>
                  
                  <div className="project-block-meta">
                    <div className="project-meta-item">
                      <MapPin size={16} />
                      <span>{project.location}</span>
                    </div>
                    <div className="project-meta-item">
                      <Calendar size={16} />
                      <span>{new Date(project.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <p className="project-block-description">{project.description}</p>
                  
                  <div className="project-block-stats">
                    <div className="project-stat">
                      <Home size={18} />
                      <div>
                        <span className="stat-label">Size</span>
                        <span className="stat-value">{project.size}</span>
                      </div>
                    </div>
                    <div className="project-stat">
                      <Zap size={18} />
                      <div>
                        <span className="stat-label">Duration</span>
                        <span className="stat-value">{project.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="project-block-features">
                    <h4>Key Features</h4>
                    <div className="features-list">
                      {project.features.slice(0, 4).map((feature, i) => (
                        <div key={i} className="feature-item">
                          <CheckCircle size={14} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="project-block-testimonial">
                    <blockquote>
                      "{project.testimonial}"
                    </blockquote>
                  </div>
                  
                  <div className="project-block-actions">
                    <a href={`/portfolio/${project.id}`} className="btn btn-primary">
                      View Case Study <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Ready to Start Your Smart Home Project?</h2>
            <p>
              Join hundreds of satisfied customers who have transformed their homes with our 
              smart automation solutions. Get a free consultation and see what's possible.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary cta-btn">
                Get Free Consultation
              </a>
              <a href="/services" className="btn btn-secondary cta-btn">
                View Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section contact-form-section">
        <div className="container">
          <div className="fade-in">
            <h2 className="section-title">Start Your Project Today</h2>
            <p className="section-subtitle">
              Ready to transform your space with smart home technology? Contact us for a free consultation.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;