import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Play,
  CheckCircle,
  Star,
  Users,
  Award,
  Globe,
  Zap,
  Shield,
  Home as HomeIcon,
  Wifi
} from 'lucide-react';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import Orb from '../components/Orb';

const Home: React.FC = () => {
  const features = [
    {
      icon: HomeIcon,
      title: "Smart Home Control",
      description: "Control every aspect of your home from anywhere in the world with our intuitive mobile app."
    },
    {
      icon: Zap,
      title: "Energy Efficiency",
      description: "Reduce your energy consumption by up to 40% with intelligent automation and monitoring."
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "24/7 monitoring with AI-powered threat detection and instant alerts to your devices."
    },
    {
      icon: Wifi,
      title: "Seamless Integration",
      description: "Connect all your devices with our universal IoT platform that works with any brand."
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "Save Money",
      description: "Reduce energy bills by up to 40% with smart automation"
    },
    {
      icon: CheckCircle,
      title: "Save Time",
      description: "Automate daily routines and focus on what matters most"
    },
    {
      icon: CheckCircle,
      title: "Stay Secure",
      description: "Advanced security systems protect your home 24/7"
    },
    {
      icon: CheckCircle,
      title: "Live Comfortably",
      description: "Perfect climate, lighting, and ambiance automatically"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Happy Customers", icon: Users },
    { number: "50+", label: "Countries Served", icon: Globe },
    { number: "4.9/5", label: "Customer Rating", icon: Star },
    { number: "99.9%", label: "Uptime Guarantee", icon: Award }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      location: "San Francisco, CA",
      text: "Green Chip Labs transformed our home into a smart, energy-efficient paradise. The automation system has reduced our energy bills by 40% and the security features give us complete peace of mind.",
      rating: 5,
      image: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      location: "New York, NY",
      text: "The professional installation and ongoing support exceeded our expectations. Our smart office system has improved productivity and reduced operational costs significantly.",
      rating: 5,
      image: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Real Estate Developer",
      location: "Miami, FL",
      text: "We've partnered with Green Chip Labs for multiple luxury developments. Their smart home solutions add tremendous value to our properties and delight our buyers.",
      rating: 5,
      image: "ER"
    }
  ];

  return (
    <Layout
      title="Green Chip Labs | Premium Smart Home Automation Solutions"
      description="Transform your home with cutting-edge smart automation technology. Energy-efficient, secure, and intelligent solutions for modern living. Get your free consultation today."
      keywords="smart home automation, IoT solutions, home security, energy efficiency, smart lighting, climate control, home automation company"
      canonical="/"
    >
      {/* Hero Section */}
      <section className="hero">
        {/* Orb Background */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
          />
        </div>
        
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative', zIndex: 1 }}
          >
            <div className="hero-grid">
              <div className="hero-text">
                <h1>Your Home,<br />Intelligently Connected</h1>
                <p>
                  Experience the future of living with our premium smart home automation solutions. 
                  Control, secure, and optimize your home with cutting-edge technology that adapts to your lifestyle.
                </p>
                <div className="hero-buttons">
                  <a href="/contact" className="btn btn-primary btn-large">
                    Get Free Consultation
                    <ArrowRight size={20} />
                  </a>
                  <button className="btn btn-secondary btn-large">
                    <Play size={20} />
                    Watch Demo
                  </button>
                </div>
              </div>
              <div className="hero-image">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Smart Home IoT Dashboard" 
                  className="hero-img"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section section-tight-top">
        <div className="container">
          <div className="fade-in">
            <h2 className="section-title">Why Choose Green Chip Labs?</h2>
            <p className="section-subtitle">
              We deliver intelligent solutions that make your home smarter, safer, and more efficient
            </p>
          </div>
          
          <div className="features-single-row">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card-compact slide-in-left"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="feature-icon-compact">
                  <feature.icon size={24} />
                </div>
                <h3 className="feature-title-compact">{feature.title}</h3>
                <p className="feature-description-compact">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IoT Technology Showcase */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="fade-in">
            <h2 className="section-title">Cutting-Edge IoT Technology</h2>
            <p className="section-subtitle">
              Experience the latest in smart home innovation with our advanced IoT solutions
            </p>
          </div>
          
          <div className="iot-showcase-grid">
            <div className="iot-showcase-item">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                alt="Smart Home Dashboard" 
                className="iot-showcase-img"
              />
              <h3>Smart Home Dashboard</h3>
              <p>Control all your devices from one intuitive interface</p>
            </div>
            
            <div className="iot-showcase-item">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                alt="IoT Sensors Network" 
                className="iot-showcase-img"
              />
              <h3>IoT Sensors Network</h3>
              <p>Advanced sensor technology for comprehensive home monitoring</p>
            </div>
            
            <div className="iot-showcase-item">
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                alt="Smart Home Automation" 
                className="iot-showcase-img"
              />
              <h3>Smart Home Automation</h3>
              <p>Seamless integration of all your smart devices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="fade-in-delay-1">
            <h2 className="section-title">Transform Your Living Experience</h2>
            <p className="section-subtitle">
              Discover how smart home automation can enhance your daily life
            </p>
          </div>
          
          <div className="benefits-single-row">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-card-compact slide-in-right"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="benefit-icon-compact">
                  <benefit.icon size={24} />
                </div>
                <h4 className="benefit-title-compact">{benefit.title}</h4>
                <p className="benefit-description-compact">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="container">
          <div className="fade-in-delay-2">
            <h2 className="section-title">Trusted Worldwide</h2>
            <p className="section-subtitle">
              Join thousands of satisfied customers who have transformed their homes
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

      {/* Testimonials Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="fade-in-delay-3">
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-subtitle">
              Real stories from real customers who have transformed their homes
            </p>
          </div>
          
          <div className="grid grid-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card slide-in-right"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="star-filled" />
                  ))}
                </div>
                <blockquote className="testimonial-text">
                  "{testimonial.text}"
                </blockquote>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonial.image}
                  </div>
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                    <span className="testimonial-location">{testimonial.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Ready to Transform Your Home?</h2>
            <p>
              Get a free consultation and discover how smart home automation can enhance your lifestyle. 
              Our experts will create a personalized solution just for you.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary btn-large">
                Get Free Consultation
              </a>
              <a href="/portfolio" className="btn btn-secondary btn-large">
                View Our Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section bg-gray-50">
        <div className="container container-narrow">
          <div className="fade-in-delay-4">
            <h2 className="section-title">Start Your Smart Home Journey</h2>
            <p className="section-subtitle">
              Get in touch with our experts for a personalized consultation
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </Layout>
  );
};

export default Home;