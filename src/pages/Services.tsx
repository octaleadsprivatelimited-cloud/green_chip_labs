import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Home,
  Shield,
  Zap,
  Smartphone,
  Wifi,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Globe,
  Award,
  Users,
  Settings,
  TrendingUp
} from 'lucide-react';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';

const Services: React.FC = () => {
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

  const services = [
    {
      icon: Home,
      title: "Smart Home Automation",
      description: "Complete home automation solutions including lighting, climate control, security, and entertainment systems.",
      features: ["Voice Control", "Mobile App", "Scheduling", "Energy Monitoring"],
      price: "From $2,500"
    },
    {
      icon: Shield,
      title: "Security Systems",
      description: "Advanced security solutions with 24/7 monitoring, smart locks, cameras, and intrusion detection.",
      features: ["24/7 Monitoring", "Smart Locks", "HD Cameras", "Mobile Alerts"],
      price: "From $1,800"
    },
    {
      icon: Zap,
      title: "Energy Management",
      description: "Intelligent energy management systems to reduce costs and environmental impact.",
      features: ["Smart Thermostats", "Solar Integration", "Usage Analytics", "Cost Optimization"],
      price: "From $1,200"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Custom mobile applications for controlling and monitoring your smart home systems.",
      features: ["iOS & Android", "Real-time Control", "Push Notifications", "User Management"],
      price: "From $3,000"
    },
    {
      icon: Wifi,
      title: "IoT Integration",
      description: "Seamless integration of IoT devices and platforms for unified smart home experience.",
      features: ["Device Integration", "Platform Compatibility", "Data Analytics", "Scalability"],
      price: "From $2,000"
    },
    {
      icon: Settings,
      title: "System Maintenance",
      description: "Ongoing maintenance and support services to keep your smart home running smoothly.",
      features: ["24/7 Support", "Regular Updates", "Performance Monitoring", "Troubleshooting"],
      price: "From $99/month"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Free Consultation",
      description: "We start with a comprehensive consultation to understand your needs, budget, and goals.",
      icon: Users
    },
    {
      step: "02", 
      title: "Custom Design",
      description: "Our experts create a personalized smart home solution tailored to your specific requirements.",
      icon: Settings
    },
    {
      step: "03",
      title: "Professional Installation",
      description: "Certified technicians install your system with minimal disruption to your daily routine.",
      icon: CheckCircle
    },
    {
      step: "04",
      title: "Training & Support",
      description: "We provide comprehensive training and ongoing support to ensure you get the most from your system.",
      icon: Award
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Property Value",
      description: "Smart home technology can increase your property value by up to 5-8%."
    },
    {
      icon: Zap,
      title: "Energy Savings",
      description: "Reduce energy consumption by 20-30% with intelligent automation and monitoring."
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "24/7 monitoring and smart security features provide peace of mind and protection."
    },
    {
      icon: Clock,
      title: "Time Savings",
      description: "Automate routine tasks and save valuable time with intelligent scheduling."
    },
    {
      icon: Globe,
      title: "Remote Access",
      description: "Control and monitor your home from anywhere in the world via mobile app."
    },
    {
      icon: Star,
      title: "Premium Experience",
      description: "Enjoy luxury living with cutting-edge technology and seamless automation."
    }
  ];

  return (
    <Layout
      title="Services - Green Chip Labs | Professional Smart Home Automation Solutions"
      description="Discover our comprehensive range of smart home automation services. From consultation to installation and support, we provide international-standard IoT solutions for modern living."
      keywords="smart home services, home automation, IoT solutions, security systems, energy management, mobile app development"
      canonical="/services"
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
                <h1>Professional Smart Home Services</h1>
                <p>
                  Transform your home with our comprehensive range of IoT smart home automation services. 
                  From consultation to installation and ongoing support, we provide international-standard solutions.
                </p>
                <div className="hero-buttons">
                  <a href="/contact" className="btn btn-primary">
                    Get Free Consultation <ArrowRight size={20} />
                  </a>
                  <a href="#services" className="btn btn-secondary">
                    View All Services
                  </a>
                </div>
              </div>
              <div className="hero-image">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Smart Home IoT Services" 
                  className="hero-img"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="section">
        <div className="container">
          <div className="fade-in">
            <h2 className="section-title">Our Professional Services</h2>
            <p className="section-subtitle">
              Comprehensive smart home solutions designed to meet your specific needs and budget
            </p>
          </div>
          
          <div className="grid grid-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="card service-card slide-in-left"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="card-icon">
                  <service.icon size={32} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                
                <div className="service-features">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="feature-item">
                      <CheckCircle size={16} className="feature-icon" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="service-price">{service.price}</div>
                
                <a href="/contact" className="btn btn-outline">
                  Learn More
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section process-section">
        <div className="container">
          <div className="fade-in">
            <h2 className="section-title">Our Professional Process</h2>
            <p className="section-subtitle">
              From initial consultation to ongoing support, we ensure a seamless experience
            </p>
          </div>
          
          <div className="process-grid">
            {process.map((step, index) => (
              <motion.div
                key={index}
                className="process-step slide-in-right"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="step-number">{step.step}</div>
                <div className="step-icon">
                  <step.icon size={24} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section">
        <div className="container">
          <div className="fade-in">
            <h2 className="section-title">Why Choose Our Services?</h2>
            <p className="section-subtitle">
              Experience the benefits of professional smart home automation
            </p>
          </div>
          
          <div className="grid grid-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="card benefit-card slide-in-left"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Ready to Transform Your Home?</h2>
            <p>
              Get started with a free consultation and discover how our professional services 
              can enhance your living experience with smart home technology.
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
            <h2 className="section-title">Get Your Free Service Quote</h2>
            <p className="section-subtitle">
              Tell us about your project and we'll provide a detailed proposal with pricing and timeline.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </Layout>
  );
};

export default Services;