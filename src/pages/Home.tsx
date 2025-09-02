import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Shield,
  Zap,
  Home as HomeIcon,
  Smartphone,
  Wifi,
  CheckCircle,
  Star,
  Users,
  Award,
  TrendingUp,
  Globe,
  Lock,
  Battery,
  Settings
} from 'lucide-react';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
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

  const features = [
    {
      icon: HomeIcon,
      title: "Smart Home Automation",
      description: "Transform your living space with intelligent automation systems that learn your preferences and adapt to your lifestyle."
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "24/7 monitoring with AI-powered threat detection, smart locks, and comprehensive security solutions."
    },
    {
      icon: Zap,
      title: "Energy Management",
      description: "Reduce energy costs by up to 40% with smart monitoring, automated controls, and renewable energy integration."
    },
    {
      icon: Smartphone,
      title: "Mobile Control",
      description: "Control your entire smart home ecosystem from anywhere in the world with our intuitive mobile application."
    },
    {
      icon: Wifi,
      title: "IoT Integration",
      description: "Seamlessly connect and manage all your IoT devices with our unified platform and advanced protocols."
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Certified products with comprehensive warranty, 24/7 support, and regular system updates."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: Award },
    { number: "1000+", label: "Happy Customers", icon: Users },
    { number: "50+", label: "Smart Devices", icon: Settings },
    { number: "24/7", label: "Support Available", icon: Globe }
  ];

  const testimonials = [
    {
      text: "Green Chip Labs transformed our home into a smart, energy-efficient paradise. The automation system has reduced our energy bills by 40% and the security features give us complete peace of mind.",
      author: "Sarah Johnson",
      role: "Homeowner",
      rating: 5,
      location: "New York, USA"
    },
    {
      text: "Professional installation and excellent customer service. Our smart security system gives us peace of mind every day. The mobile app is incredibly intuitive and responsive.",
      author: "Michael Chen",
      role: "Business Owner",
      rating: 5,
      location: "San Francisco, USA"
    },
    {
      text: "The IoT integration is seamless. We can control everything from our phones, and the energy monitoring is incredibly detailed. Highly recommend for anyone looking to modernize their home.",
      author: "Emily Rodriguez",
      role: "Tech Enthusiast",
      rating: 5,
      location: "Austin, USA"
    }
  ];

  const benefits = [
    {
      icon: Battery,
      title: "Energy Savings",
      description: "Reduce energy consumption by up to 40% with smart automation and monitoring systems."
    },
    {
      icon: Lock,
      title: "Enhanced Security",
      description: "Advanced security features with real-time monitoring and instant alerts."
    },
    {
      icon: TrendingUp,
      title: "Increased Property Value",
      description: "Smart home features can increase property value by 5-15% according to market studies."
    }
  ];

  return (
    <Layout
      title="Green Chip Labs - Premier Smart Home Automation & IoT Solutions"
      description="Transform your home with our cutting-edge IoT smart home automation solutions. Energy-efficient, secure, and intelligent living spaces designed for the future. International standard technology."
      keywords="smart home automation, IoT solutions, energy efficiency, home security, green technology, smart devices, international standard"
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
            <h1>Transform Your Home with International Standard Smart Technology</h1>
            <p>
              Experience the future of living with our cutting-edge IoT smart home automation solutions. 
              Energy-efficient, secure, and intelligent systems designed for modern living with international quality standards.
            </p>
            <div className="hero-buttons">
              <a href="/contact" className="btn btn-primary">
                Get Free Consultation <ArrowRight size={20} />
              </a>
              <a href="/services" className="btn btn-secondary">
                Explore Solutions
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <div className="fade-in">
            <h2 className="section-title">Why Choose Green Chip Labs?</h2>
            <p className="section-subtitle">
              We provide comprehensive smart home solutions that enhance your lifestyle while reducing energy consumption and increasing security
            </p>
          </div>
          
          <div className="grid grid-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="card fade-in"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="card-icon">
                  <feature.icon size={28} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section benefits-section">
        <div className="container">
          <div className="fade-in">
            <h2 className="section-title">Proven Benefits</h2>
            <p className="section-subtitle">
              Our smart home solutions deliver measurable results for homeowners and businesses worldwide
            </p>
          </div>
          
          <div className="grid grid-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="card slide-in-left"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="card-icon">
                  <benefit.icon size={28} />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-content">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-item fade-in"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <stat.icon size={40} style={{ marginBottom: '1rem', opacity: 0.8 }} />
                  <h3>{stat.number}</h3>
                  <p>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials">
        <div className="container">
          <div className="fade-in">
            <h2 className="section-title">What Our International Customers Say</h2>
            <p className="section-subtitle">
              Don't just take our word for it - hear from our satisfied customers around the world
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
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="#fbbf24" color="#fbbf24" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="author-info">
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.role}</p>
                    <p className="testimonial-location">{testimonial.location}</p>
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
            className="text-center fade-in"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Ready to Transform Your Home?</h2>
            <p className="section-subtitle">
              Join thousands of satisfied customers worldwide. Contact us today for a free consultation and discover how we can transform your home with international standard technology.
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
            <h2 className="section-title">Get Your Free Smart Home Assessment</h2>
            <p className="section-subtitle">
              Have questions? We'd love to hear from you. Send us a message and we'll respond within 24 hours with a personalized solution.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </Layout>
  );
};

export default Home;