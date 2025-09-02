import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Globe,
  Award,
  Shield,
  Clock
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">
              <Globe size={24} className="footer-logo-icon" />
              Green Chip Labs
            </h3>
            <p className="footer-description">
              Leading international provider of smart home automation and IoT solutions. 
              We transform ordinary homes into intelligent, energy-efficient living spaces with world-class technology and service.
            </p>
            <div className="footer-social">
              <a href="#" className="footer-social-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="footer-social-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="footer-social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="footer-social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <div className="footer-links">
              <Link to="/about">About Us</Link>
              <Link to="/services">Services</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/faq">FAQ</Link>
            </div>
          </div>

          <div className="footer-section">
            <h3>Services</h3>
            <div className="footer-links">
              <Link to="/services#automation">Smart Home Automation</Link>
              <Link to="/services#security">Security Systems</Link>
              <Link to="/services#energy">Energy Management</Link>
              <Link to="/services#iot">IoT Integration</Link>
              <Link to="/services#consultation">Free Consultation</Link>
              <Link to="/services#support">24/7 Support</Link>
            </div>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <Phone size={16} className="footer-contact-icon" />
                <a href="tel:+15551234567" className="footer-contact-link">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="footer-contact-item">
                <Mail size={16} className="footer-contact-icon" />
                <a href="mailto:info@greenchiplabs.com" className="footer-contact-link">
                  info@greenchiplabs.com
                </a>
              </div>
              <div className="footer-contact-item">
                <MapPin size={16} className="footer-contact-icon" />
                <span className="footer-contact-text">
                  123 Smart Technology Ave<br />
                  Innovation District, Tech City 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-certifications">
              <div className="footer-cert-item">
                <Award size={16} className="footer-cert-icon" />
                <span>ISO 9001:2015 Certified</span>
              </div>
              <div className="footer-cert-item">
                <Shield size={16} className="footer-cert-icon" />
                <span>5-Year International Warranty</span>
              </div>
              <div className="footer-cert-item">
                <Clock size={16} className="footer-cert-icon" />
                <span>24/7 Global Support</span>
              </div>
            </div>
            
            <div className="footer-legal">
              <Link to="/privacy" className="footer-legal-link">Privacy Policy</Link>
              <Link to="/terms" className="footer-legal-link">Terms of Service</Link>
              <span className="footer-copyright">
                © 2024 Green Chip Labs. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;