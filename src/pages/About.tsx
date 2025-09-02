import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Target,
  Eye,
  Users,
  Award,
  Globe,
  Shield,
  Zap,
  Heart,
  TrendingUp,
  Star,
  Clock,
  MapPin,
  Phone,
  Mail,
  ArrowRight
} from 'lucide-react';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';

const About: React.FC = () => {
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

  const values = [
    {
      icon: Heart,
      title: "Customer-Centric",
      description: "We put our customers at the heart of everything we do, ensuring their needs and satisfaction drive our innovation and service delivery."
    },
    {
      icon: Shield,
      title: "Quality & Reliability",
      description: "We maintain the highest standards of quality and reliability in all our products and services, backed by international certifications."
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "We serve customers worldwide with localized solutions, understanding diverse needs and cultural contexts across different markets."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We continuously push the boundaries of smart home technology, staying ahead of industry trends and emerging technologies."
    }
  ];

  const achievements = [
    { number: "10,000+", label: "Happy Customers", icon: Users },
    { number: "50+", label: "Countries Served", icon: Globe },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { number: "24/7", label: "Global Support", icon: Clock }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "SJ",
      description: "15+ years in IoT and smart home technology, former VP at leading tech companies."
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "MC",
      description: "Expert in AI and machine learning, PhD in Computer Science from MIT."
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      image: "ER",
      description: "Award-winning UX designer with focus on accessible smart home interfaces."
    },
    {
      name: "David Kim",
      role: "Head of Engineering",
      image: "DK",
      description: "Senior engineer with expertise in IoT protocols and security systems."
    }
  ];

  return (
    <Layout
      title="About Us - Green Chip Labs | Leading Smart Home Automation Company"
      description="Learn about Green Chip Labs, a leading international smart home automation company. Discover our mission, vision, values, and the expert team behind our innovative IoT solutions."
      keywords="about us, smart home company, IoT team, automation experts, green technology, international company"
      canonical="/about"
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
            <h1>About Green Chip Labs</h1>
            <p>
              We are a leading international smart home automation company dedicated to transforming 
              ordinary homes into intelligent, energy-efficient living spaces. With a global presence 
              and cutting-edge technology, we're revolutionizing how people interact with their homes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section">
        <div className="container">
          <div className="mission-vision-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mission-section">
                <div className="section-header">
                  <Target size={32} className="section-icon" />
                  <h2>Our Mission</h2>
                </div>
                <p>
                  To democratize smart home technology by providing affordable, reliable, and 
                  user-friendly IoT solutions that enhance quality of life while promoting 
                  environmental sustainability across the globe.
                </p>
              </div>

              <div className="vision-section">
                <div className="section-header">
                  <Eye size={32} className="section-icon" />
                  <h2>Our Vision</h2>
                </div>
                <p>
                  To become the world's most trusted smart home automation company, setting the 
                  standard for innovation, quality, and customer satisfaction in the international IoT industry.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="about-stats"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3>Our Impact</h3>
              <div className="stats-grid">
                {achievements.map((achievement, index) => (
                  <div key={index} className="stat-item">
                    <div className="stat-icon">
                      <achievement.icon size={24} />
                    </div>
                    <div className="stat-number">{achievement.number}</div>
                    <div className="stat-label">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-section">
        <div className="container">
          <div className="fade-in">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              These fundamental principles guide everything we do and shape our company culture
            </p>
          </div>
          
          <div className="grid grid-2">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="card slide-in-left"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="card-icon">
                  <value.icon size={28} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <div className="fade-in">
            <h2 className="section-title">Meet Our Expert Team</h2>
            <p className="section-subtitle">
              Our diverse team of professionals brings together decades of experience in IoT, 
              smart home technology, and customer service excellence.
            </p>
          </div>
          
          <div className="grid grid-2">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="card team-card slide-in-right"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="team-avatar">
                  {member.image}
                </div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-description">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="section company-story-section">
        <div className="container">
          <div className="story-content">
            <motion.div
              className="story-text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2>Our Story</h2>
              <p>
                Founded in 2020 by a team of passionate IoT engineers and smart home enthusiasts, 
                Green Chip Labs began with a simple vision: to make smart home technology accessible 
                to everyone, everywhere.
              </p>
              <p>
                Starting as a small startup in Silicon Valley, we've grown into an international 
                company serving customers across 50+ countries. Our journey has been marked by 
                continuous innovation, customer satisfaction, and a commitment to environmental 
                sustainability.
              </p>
              <p>
                Today, we're proud to be at the forefront of the smart home revolution, helping 
                thousands of families create more comfortable, secure, and energy-efficient homes 
                through cutting-edge IoT solutions.
              </p>
            </motion.div>

            <motion.div
              className="story-highlights"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="highlight-item">
                <div className="highlight-icon">
                  <Award size={24} />
                </div>
                <div>
                  <h4>Industry Recognition</h4>
                  <p>Winner of "Best Smart Home Solution" at IoT World Awards 2023</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h4>Rapid Growth</h4>
                  <p>300% year-over-year growth in customer base and revenue</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">
                  <Star size={24} />
                </div>
                <div>
                  <h4>Customer Satisfaction</h4>
                  <p>4.9/5 average rating from 10,000+ customer reviews</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="fade-in">
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle">
              Ready to transform your home? Contact our team of experts for a personalized consultation.
            </p>
          </div>
          
          <div className="contact-info-grid">
            <div className="contact-info-item">
              <div className="contact-icon">
                <MapPin size={24} />
              </div>
              <div>
                <h4>Visit Our Office</h4>
                <p>123 Smart Technology Ave<br />Innovation District, Tech City 12345</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-icon">
                <Phone size={24} />
              </div>
              <div>
                <h4>Call Us</h4>
                <p>+1 (555) 123-4567<br />Mon-Fri 9AM-6PM EST</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-icon">
                <Mail size={24} />
              </div>
              <div>
                <h4>Email Us</h4>
                <p>info@greenchiplabs.com<br />We respond within 24 hours</p>
              </div>
            </div>
          </div>
          
          <div className="contact-cta">
            <a href="/contact" className="btn btn-primary">
              Schedule Free Consultation <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section contact-form-section">
        <div className="container">
          <div className="fade-in">
            <h2 className="section-title">Have Questions?</h2>
            <p className="section-subtitle">
              Send us a message and our team will get back to you with personalized solutions.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </Layout>
  );
};

export default About;