import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Globe,
  Building,
  Users,
  Award,
  Shield,
  Zap
} from 'lucide-react';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
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

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: "123 Smart Technology Avenue\nInnovation District, Tech City 12345\nUnited States",
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567\n+1 (555) 987-6543\nMon-Fri 9AM-6PM EST",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@greenchiplabs.com\nsupport@greenchiplabs.com\nWe respond within 24 hours",
      action: "Send Email"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed",
      action: "Schedule Meeting"
    }
  ];

  const features = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving customers in 50+ countries with local support teams"
    },
    {
      icon: Building,
      title: "Enterprise Ready",
      description: "Scalable solutions for businesses of all sizes"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified professionals with 10+ years of experience"
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in smart home innovation"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Bank-level security with 99.9% uptime guarantee"
    },
    {
      icon: Zap,
      title: "Fast Response",
      description: "24/7 support with average response time under 2 hours"
    }
  ];

  const faqs = [
    {
      question: "How quickly can you respond to my inquiry?",
      answer: "We typically respond to all inquiries within 2-4 hours during business hours, and within 24 hours for inquiries received outside business hours."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes! We provide complimentary consultations to assess your needs and provide recommendations for your smart home automation project."
    },
    {
      question: "What areas do you serve?",
      answer: "We serve customers globally with local support teams in major cities. Our remote consultation and support services are available worldwide."
    },
    {
      question: "How do I schedule a meeting?",
      answer: "You can schedule a meeting by calling us, using our contact form, or booking directly through our online calendar system."
    }
  ];

  return (
    <Layout
      title="Contact Us - Green Chip Labs"
      description="Get in touch with Green Chip Labs for smart home automation solutions. Contact us via phone, email, or visit our office."
      keywords="contact Green Chip Labs, smart home support, IoT contact, home automation inquiry, Green Chip Labs address"
      canonical="/contact"
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
                <h1>Get in Touch</h1>
                <p>
                  Ready to transform your home with smart automation? Our expert team is here to help you 
                  create the perfect solution for your needs. Contact us today for a free consultation.
                </p>
                <div className="hero-buttons">
                  <a href="#contact-form" className="btn btn-primary btn-large">
                    Start Your Project
                    <ArrowRight size={20} />
                  </a>
                  <a href="tel:+15551234567" className="btn btn-secondary btn-large">
                    <Phone size={20} />
                    Call Now
                  </a>
                </div>
              </div>
              <div className="hero-image">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Smart Home Contact Team" 
                  className="hero-img"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="section">
        <div className="container">
          <div className="fade-in">
            <h2 className="section-title">Contact Information</h2>
            <p className="section-subtitle">
              Multiple ways to reach our expert team for your smart home automation needs
            </p>
          </div>
          
          <div className="contact-grid-minimal">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                className="contact-minimal-card slide-in-left"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="contact-minimal-icon">
                  <contact.icon size={20} />
                </div>
                <div className="contact-minimal-content">
                  <h4>{contact.title}</h4>
                  <p>{contact.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="fade-in">
            <h2 className="section-title">Why Choose Green Chip Labs?</h2>
            <p className="section-subtitle">
              We deliver exceptional service and support for all your smart home automation needs
            </p>
          </div>
          
          <div className="features-grid-minimal">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-minimal-card slide-in-right"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="feature-minimal-icon">
                  <feature.icon size={24} />
                </div>
                <div className="feature-minimal-content">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="section">
        <div className="container container-narrow">
          <div className="fade-in">
            <h2 className="section-title">Send Us a Message</h2>
            <p className="section-subtitle">
              Tell us about your project and we'll create a personalized smart home solution for you
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="fade-in">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Quick answers to common questions about our services and support
            </p>
          </div>
          
          <div className="faq-grid-minimal">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="faq-minimal-item slide-in-left"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="faq-minimal-content">
                  <h4>{faq.question}</h4>
                  <p>{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </Layout>
  );
};

export default Contact;