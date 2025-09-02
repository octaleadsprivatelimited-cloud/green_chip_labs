import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Smart Home Automation", href: "/services" },
        { name: "Security Systems", href: "/services" },
        { name: "Energy Management", href: "/services" },
        { name: "IoT Integration", href: "/services" },
        { name: "Consultation", href: "/contact" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/about" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "Careers", href: "/contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "FAQ", href: "/faq" },
        { name: "Support", href: "/contact" },
        { name: "Documentation", href: "/contact" },
        { name: "Downloads", href: "/contact" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/privacy" },
        { name: "GDPR Compliance", href: "/privacy" },
        { name: "Accessibility", href: "/contact" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#", color: "#1877f2" },
    { name: "Twitter", icon: Twitter, href: "#", color: "#1da1f2" },
    { name: "Instagram", icon: Instagram, href: "#", color: "#e4405f" },
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "#0077b5" },
    { name: "YouTube", icon: Youtube, href: "#", color: "#ff0000" }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: "123 Smart Technology Ave\nInnovation District, Tech City 12345"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567\nMon-Fri 9AM-6PM EST"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@greenchiplabs.com\nWe respond within 24 hours"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM"
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section footer-company">
            <div className="footer-logo">
              <div className="logo-icon">
                <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
                  <rect width="32" height="32" rx="8" fill="url(#gradient)"/>
                  <path d="M8 12h16v2H8v-2zm0 4h16v2H8v-2zm0 4h12v2H8v-2z" fill="white"/>
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#007aff"/>
                      <stop offset="100%" stopColor="#30d158"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="logo-text">
                <h3>Green Chip Labs</h3>
                <p>Premium Smart Home Automation</p>
              </div>
            </div>
            
            <p className="footer-description">
              Transforming homes with cutting-edge smart automation technology. 
              We create intelligent solutions that make your life easier, safer, and more efficient.
            </p>

            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="footer-social-link"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ '--social-color': social.color } as React.CSSProperties}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="footer-section">
              <h3>{section.title}</h3>
              <ul className="footer-links">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="footer-contact-section">
          <h3>Get in Touch</h3>
          <div className="footer-contact-grid">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                className="footer-contact-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="footer-contact-icon">
                  <contact.icon size={20} />
                </div>
                <div className="footer-contact-content">
                  <h4>{contact.title}</h4>
                  <p>{contact.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-certifications">
              <div className="footer-cert-item">
                <div className="footer-cert-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
                  </svg>
                </div>
                <span>Certified Installers</span>
              </div>
              <div className="footer-cert-item">
                <div className="footer-cert-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" fill="currentColor"/>
                  </svg>
                </div>
                <span>5-Year Warranty</span>
              </div>
              <div className="footer-cert-item">
                <div className="footer-cert-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="currentColor"/>
                  </svg>
                </div>
                <span>24/7 Support</span>
              </div>
            </div>

            <div className="footer-legal">
              <p className="footer-copyright">
                © {currentYear} Green Chip Labs. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/15551234567"
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </footer>
  );
};

export default Footer;