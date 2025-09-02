import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Target,
  Eye,
  Users,
  Award,
  TrendingUp,
  Globe,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Building,
  Lightbulb,
  Heart
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

  const stats = [
    { number: "10,000+", label: "Happy Customers", icon: Users },
    { number: "50+", label: "Countries Served", icon: Globe },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We continuously push the boundaries of smart home technology to deliver cutting-edge solutions that exceed expectations."
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description: "Our customers are at the heart of everything we do. We listen, understand, and deliver solutions that truly make a difference."
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "We build systems that work consistently, day after day, providing peace of mind and long-term value for our customers."
    },
    {
      icon: Lightbulb,
      title: "Excellence",
      description: "We strive for excellence in every project, from initial consultation to final installation and ongoing support."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      description: "15+ years in smart home automation with a vision to make technology accessible to everyone.",
      image: "SJ"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      description: "Expert in IoT architecture and system integration, leading our technical innovation efforts.",
      image: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      description: "Passionate about creating intuitive user experiences that make smart homes truly smart.",
      image: "ER"
    },
    {
      name: "David Kim",
      role: "Lead Engineer",
      description: "Specializes in energy-efficient solutions and sustainable smart home technologies.",
      image: "DK"
    }
  ];

  const milestones = [
    {
      year: "2008",
      title: "Company Founded",
      description: "Started with a vision to revolutionize home automation"
    },
    {
      year: "2012",
      title: "First Major Contract",
      description: "Secured partnership with leading real estate developers"
    },
    {
      year: "2016",
      title: "International Expansion",
      description: "Expanded operations to 25 countries worldwide"
    },
    {
      year: "2020",
      title: "AI Integration",
      description: "Launched AI-powered smart home management platform"
    },
    {
      year: "2024",
      title: "Sustainability Focus",
      description: "Achieved carbon-neutral operations and green certification"
    }
  ];

  return (
    <Layout
      title="About Us - Green Chip Labs"
      description="Learn about Green Chip Labs' mission to revolutionize smart home automation. Meet our expert team and discover our commitment to innovation and customer satisfaction."
      keywords="about Green Chip Labs, smart home company, IoT team, home automation experts, company history"
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
            <div className="hero-grid">
              <div className="hero-text">
                <h1>About Green Chip Labs</h1>
                <p>
                  We are passionate innovators dedicated to transforming homes with intelligent automation. 
                  Our mission is to make smart home technology accessible, reliable, and truly beneficial for everyone.
                </p>
                <div className="hero-buttons">
                  <a href="#our-story" className="btn btn-primary btn-large">
                    Our Story
                    <ArrowRight size={20} />
                  </a>
                  <a href="#team" className="btn btn-secondary btn-large">
                    Meet Our Team
                  </a>
                </div>
              </div>
              <div className="hero-image">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Smart Home Technology Team" 
                  className="hero-img"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="container">
          <div className="fade-in-delay-1">
            <h2 className="section-title">Our Impact</h2>
            <p className="section-subtitle">
              Numbers that reflect our commitment to excellence and customer satisfaction
            </p>
          </div>
          
          <div className="grid grid-4">
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

      {/* Mission & Vision Section */}
      <section id="our-story" className="section bg-light">
        <div className="container">
          <div className="mission-vision-grid">
            <motion.div
              className="mission-section slide-in-left"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-header">
                <div className="section-icon">
                  <Target size={32} />
                </div>
                <h2>Our Mission</h2>
              </div>
              <p>
                To democratize smart home technology by creating intuitive, reliable, and affordable 
                automation solutions that enhance the quality of life for families worldwide. We believe 
                that everyone deserves a home that works intelligently for them.
              </p>
            </motion.div>

            <motion.div
              className="vision-section slide-in-right"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-header">
                <div className="section-icon">
                  <Eye size={32} />
                </div>
                <h2>Our Vision</h2>
              </div>
              <p>
                To be the global leader in smart home automation, setting the standard for innovation, 
                sustainability, and customer satisfaction. We envision a future where every home is 
                intelligent, energy-efficient, and perfectly tailored to its occupants' needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container">
          <div className="fade-in-delay-2">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do and every decision we make
            </p>
          </div>
          
          <div className="values-container">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-block slide-in-left"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="value-block-header">
                  <div className="value-block-icon">
                    <value.icon size={24} />
                  </div>
                  <h3 className="value-block-title">{value.title}</h3>
                </div>
                <p className="value-block-description">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section bg-light">
        <div className="container">
          <div className="fade-in-delay-3">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              The passionate experts behind Green Chip Labs' success
            </p>
          </div>
          
          <div className="grid grid-2">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="team-card slide-in-right"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="team-avatar">
                  {member.image}
                </div>
                <div className="team-content">
                  <h3>{member.name}</h3>
                  <div className="team-role">{member.role}</div>
                  <p className="team-description">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="section">
        <div className="container">
          <div className="company-story-section">
            <motion.div
              className="story-content fade-in"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2>Our Journey</h2>
              <div className="story-text">
                <p>
                  Founded in 2008, Green Chip Labs began as a small team of passionate engineers 
                  who believed that smart home technology could be more than just a luxury. We started 
                  in a small garage, developing our first automation system for a local family.
                </p>
                <p>
                  Today, we've grown into a global company serving thousands of customers worldwide. 
                  Our journey has been marked by continuous innovation, from our early days of basic 
                  automation to our current AI-powered smart home ecosystems.
                </p>
                <p>
                  What sets us apart is our unwavering commitment to making technology work for people, 
                  not the other way around. Every product we develop, every system we install, and every 
                  customer we serve reflects this core belief.
                </p>
              </div>
              
              <div className="story-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <h4>Continuous Growth</h4>
                    <p>Expanding our reach and capabilities year after year</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4>Industry Recognition</h4>
                    <p>Multiple awards for innovation and customer satisfaction</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h4>Global Impact</h4>
                    <p>Making smart homes accessible worldwide</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="fade-in-delay-4">
            <h2 className="section-title">Our Milestones</h2>
            <p className="section-subtitle">
              Key moments that shaped our journey and growth
            </p>
          </div>
          
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="timeline-item slide-in-left"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="timeline-year">{milestone.year}</div>
                <div className="timeline-content">
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="section">
        <div className="container">
          <motion.div
            className="contact-cta fade-in"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Ready to Work With Us?</h2>
            <p>
              Join thousands of satisfied customers who have transformed their homes with our 
              smart automation solutions. Let's discuss how we can help you achieve your vision.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary btn-large">
                Get Started Today
              </a>
              <a href="/portfolio" className="btn btn-secondary btn-large">
                View Our Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section bg-light">
        <div className="container container-narrow">
          <div className="fade-in">
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle">
              Have questions about our services or want to discuss your project?
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </Layout>
  );
};

export default About;