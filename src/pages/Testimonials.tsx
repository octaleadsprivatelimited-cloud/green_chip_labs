import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Star,
  Quote,
  User,
  MapPin,
  Calendar,
  ThumbsUp,
  Award,
  Shield,
  Zap,
  Home,
  ArrowRight,
  CheckCircle,
  Globe
} from 'lucide-react';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';

const Testimonials: React.FC = () => {
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

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homeowner",
      location: "San Francisco, CA",
      rating: 5,
      text: "Green Chip Labs transformed our home into a smart, energy-efficient paradise. The automation system has reduced our energy bills by 40% and the security features give us complete peace of mind.",
      image: "SJ",
      date: "2024-12-10",
      verified: true,
      project: "Complete Home Automation"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Business Owner",
      location: "New York, NY",
      rating: 5,
      text: "The professional installation and ongoing support exceeded our expectations. Our smart office system has improved productivity and reduced operational costs significantly.",
      image: "MC",
      date: "2024-12-08",
      verified: true,
      project: "Smart Office Solution"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Real Estate Developer",
      location: "Miami, FL",
      rating: 5,
      text: "We've partnered with Green Chip Labs for multiple luxury developments. Their smart home solutions add tremendous value to our properties and delight our buyers.",
      image: "ER",
      date: "2024-12-05",
      verified: true,
      project: "Luxury Development"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Tech Executive",
      location: "Seattle, WA",
      rating: 5,
      text: "As someone in tech, I'm very particular about quality and reliability. Green Chip Labs delivered a flawless smart home system that integrates seamlessly with all our devices.",
      image: "DK",
      date: "2024-12-03",
      verified: true,
      project: "Advanced IoT Integration"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Interior Designer",
      location: "Austin, TX",
      rating: 5,
      text: "The smart lighting and climate control systems have enhanced our design capabilities. Clients love the seamless integration of technology with beautiful aesthetics.",
      image: "LT",
      date: "2024-12-01",
      verified: true,
      project: "Smart Lighting Design"
    },
    {
      id: 6,
      name: "Robert Wilson",
      role: "Retired Engineer",
      location: "Denver, CO",
      rating: 5,
      text: "The energy management system has been a game-changer for our retirement home. We're saving money while living more comfortably than ever before.",
      image: "RW",
      date: "2024-11-28",
      verified: true,
      project: "Energy Management"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Happy Customers", icon: User },
    { number: "4.9/5", label: "Average Rating", icon: Star },
    { number: "50+", label: "Countries Served", icon: Globe },
    { number: "99.9%", label: "Customer Satisfaction", icon: ThumbsUp }
  ];

  const awards = [
    {
      title: "Best Smart Home Solution 2024",
      organization: "IoT World Awards",
      icon: Award
    },
    {
      title: "Customer Excellence Award",
      organization: "Smart Home Association",
      icon: Shield
    },
    {
      title: "Innovation in Green Tech",
      organization: "Environmental Council",
      icon: Zap
    }
  ];

  return (
    <Layout
      title="Testimonials - Green Chip Labs | Customer Reviews & Success Stories"
      description="Read real customer testimonials and success stories from Green Chip Labs. Discover why thousands of satisfied customers trust us for their smart home automation needs."
      keywords="customer testimonials, smart home reviews, success stories, customer satisfaction, smart home automation reviews"
      canonical="/testimonials"
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
            <h1>What Our Customers Say</h1>
            <p>
              Discover why thousands of satisfied customers worldwide trust Green Chip Labs 
              for their smart home automation needs. Read real testimonials and success stories.
            </p>
            <div className="hero-buttons">
              <a href="#testimonials" className="btn btn-primary">
                Read Reviews <ArrowRight size={20} />
              </a>
              <a href="/contact" className="btn btn-secondary">
                Get Your Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats-section">
        <div className="container">
          <div className="fade-in">
            <h2 className="section-title">Trusted by Thousands Worldwide</h2>
            <p className="section-subtitle">
              Our commitment to excellence has earned us recognition and trust from customers globally
            </p>
          </div>
          
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card slide-in-left"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="stat-icon">
                  <stat.icon size={32} />
                </div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section id="testimonials" className="section">
        <div className="container">
          <div className="fade-in">
            <h2 className="section-title">Customer Testimonials</h2>
            <p className="section-subtitle">
              Real stories from real customers who have transformed their homes with our smart technology
            </p>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="testimonial-card slide-in-right"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="testimonial-header">
                  <div className="quote-icon">
                    <Quote size={24} />
                  </div>
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="star-filled" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="testimonial-text">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="testimonial-footer">
                  <div className="customer-info">
                    <div className="customer-avatar">
                      {testimonial.image}
                    </div>
                    <div className="customer-details">
                      <h4 className="customer-name">{testimonial.name}</h4>
                      <p className="customer-role">{testimonial.role}</p>
                      <div className="customer-location">
                        <MapPin size={14} />
                        <span>{testimonial.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="testimonial-meta">
                    <div className="project-type">
                      <Home size={14} />
                      <span>{testimonial.project}</span>
                    </div>
                    <div className="testimonial-date">
                      <Calendar size={14} />
                      <span>{new Date(testimonial.date).toLocaleDateString()}</span>
                    </div>
                    {testimonial.verified && (
                      <div className="verified-badge">
                        <CheckCircle size={14} />
                        <span>Verified</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="section awards-section">
        <div className="container">
          <div className="fade-in">
            <h2 className="section-title">Industry Recognition</h2>
            <p className="section-subtitle">
              Our commitment to excellence has earned us recognition from industry leaders
            </p>
          </div>
          
          <div className="awards-grid">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                className="award-card slide-in-left"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="award-icon">
                  <award.icon size={32} />
                </div>
                <h3>{award.title}</h3>
                <p>{award.organization}</p>
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
            <h2>Ready to Join Our Satisfied Customers?</h2>
            <p>
              Experience the same level of excellence and satisfaction that our customers rave about. 
              Get started with a free consultation today.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary cta-btn">
                Schedule Free Consultation
              </a>
              <a href="tel:+15551234567" className="btn btn-secondary cta-btn">
                Call Now: +1 (555) 123-4567
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section contact-form-section">
        <div className="container">
          <div className="fade-in">
            <h2 className="section-title">Share Your Experience</h2>
            <p className="section-subtitle">
              Already a customer? We'd love to hear about your experience and feature your story.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;