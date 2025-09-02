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
      details: "123 Smart Technology Ave\nInnovation District, Tech City 12345",
      action: "Get Directions",
      link: "https://maps.google.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567\nMon-Fri 9AM-6PM EST",
      action: "Call Now",
      link: "tel:+15551234567"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@greenchiplabs.com\nWe respond within 24 hours",
      action: "Send Email",
      link: "mailto:info@greenchiplabs.com"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM",
      action: "Schedule Meeting",
      link: "/contact"
    }
  ];

  const features = [
    {
      icon: Globe,
      title: "Global Support",
      description: "24/7 customer support across multiple time zones"
    },
    {
      icon: Building,
      title: "Expert Team",
      description: "Certified professionals with years of experience"
    },
    {
      icon: Users,
      title: "Personal Service",
      description: "Dedicated account managers for enterprise clients"
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "5-year international warranty on all installations"
    }
  ];

  const faqs = [
    {
      question: "How quickly can you respond to my inquiry?",
      answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, you can call our direct line for immediate assistance."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes! We provide free initial consultations to assess your needs and provide recommendations. This includes a site visit and detailed proposal."
    },
    {
      question: "What areas do you serve?",
      answer: "We serve customers globally with local support teams in major cities. Our remote consultation and support services are available worldwide."
    },
    {
      question: "How do I schedule a consultation?",
      answer: "You can schedule a consultation by calling us, filling out our contact form, or using our online booking system. We'll confirm your appointment within 2 hours."
    }
  ];

  return (
    <Layout
      title="Contact Us - Green Chip Labs | Get Your Free Smart Home Consultation"
      description="Contact Green Chip Labs for your smart home automation needs. Get a free consultation, expert advice, and personalized solutions. Available 24/7 for support."
      keywords="contact smart home, free consultation, smart home support, IoT experts, home automation contact"
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
            <h1>Get in Touch</h1>
            <p>
              Ready to transform your home with smart technology? Contact our expert team for a free consultation 
              and discover how we can create the perfect smart home solution for your needs.
            </p>
            <div className="hero-buttons">
              <a href="#contact-form" className="btn btn-primary">
                Get Free Consultation <ArrowRight size={20} />
              </a>
              <a href="tel:+15551234567" className="btn btn-secondary">
                Call Now: +1 (555) 123-4567
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section">
        <div className="container">
          <div className="fade-in">
            <h2 className="section-title">Contact Information</h2>
            <p className="section-subtitle">
              Multiple ways to reach our expert team for all your smart home needs
            </p>
          </div>
          
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="contact-info-card slide-in-left"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="contact-icon">
                  <info.icon size={24} />
                </div>
                <h3>{info.title}</h3>
                <p className="contact-details">{info.details}</p>
                <a href={info.link} className="contact-action">
                  {info.action} <ArrowRight size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <div className="fade-in">
            <h2 className="section-title">Why Choose Our Support?</h2>
            <p className="section-subtitle">
              Experience world-class customer service and technical expertise
            </p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card slide-in-right"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="feature-icon">
                  <feature.icon size={28} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="section contact-form-section">
        <div className="container">
          <div className="contact-form-layout">
            <div className="contact-form-content">
              <div className="fade-in">
                <h2 className="section-title">Send Us a Message</h2>
                <p className="section-subtitle">
                  Have questions about our smart home solutions? Fill out the form below and our experts 
                  will get back to you with personalized recommendations.
                </p>
              </div>
              
              <div className="form-benefits">
                <div className="benefit-item">
                  <CheckCircle size={20} />
                  <span>Free consultation and site assessment</span>
                </div>
                <div className="benefit-item">
                  <CheckCircle size={20} />
                  <span>Personalized smart home recommendations</span>
                </div>
                <div className="benefit-item">
                  <CheckCircle size={20} />
                  <span>Detailed project proposal and timeline</span>
                </div>
                <div className="benefit-item">
                  <CheckCircle size={20} />
                  <span>No obligation, completely free</span>
                </div>
              </div>
            </div>
            
            <div className="contact-form-wrapper">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <div className="fade-in">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Quick answers to common questions about our services and support
            </p>
          </div>
          
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="faq-item slide-in-left"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="faq-icon">
                  <MessageCircle size={20} />
                </div>
                <div className="faq-content">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section map-section">
        <div className="container">
          <div className="fade-in">
            <h2 className="section-title">Visit Our Office</h2>
            <p className="section-subtitle">
              Located in the heart of the Innovation District, our office is easily accessible by public transport and car
            </p>
          </div>
          
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1635781234567!5m2!1sen!2sus"
              width="100%"
              height="400"
              className="map-iframe"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Green Chip Labs Office Location"
            />
          </div>
          
          <div className="map-info">
            <div className="map-details">
              <h3>Green Chip Labs Headquarters</h3>
              <p>123 Smart Technology Ave, Innovation District<br />Tech City, TC 12345</p>
              <div className="map-features">
                <div className="map-feature">
                  <Shield size={16} />
                  <span>Secure parking available</span>
                </div>
                <div className="map-feature">
                  <Zap size={16} />
                  <span>Public transport accessible</span>
                </div>
                <div className="map-feature">
                  <Building size={16} />
                  <span>Wheelchair accessible</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;