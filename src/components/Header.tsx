import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <header className={`nav ${isScrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <motion.a
          href="/"
          className="nav-logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="logo-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
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
          <span>Green Chip Labs</span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="nav-menu">
          <a href="/" className="nav-link">Home</a>
          <a href="/about" className="nav-link">About</a>
          
          {/* Services Dropdown */}
          <div className="nav-dropdown">
            <button 
              className="nav-link nav-dropdown-trigger"
              onClick={toggleServices}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              Services
              <ChevronDown size={16} className={`dropdown-icon ${isServicesOpen ? 'rotate' : ''}`} />
            </button>
            
            {isServicesOpen && (
              <motion.div 
                className="nav-dropdown-menu"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <a href="/services" className="nav-dropdown-link">
                  <div className="dropdown-item">
                    <h4>Smart Home Automation</h4>
                    <p>Complete home automation solutions</p>
                  </div>
                </a>
                <a href="/services" className="nav-dropdown-link">
                  <div className="dropdown-item">
                    <h4>IoT Integration</h4>
                    <p>Connect all your devices seamlessly</p>
                  </div>
                </a>
                <a href="/services" className="nav-dropdown-link">
                  <div className="dropdown-item">
                    <h4>Energy Management</h4>
                    <p>Optimize your energy consumption</p>
                  </div>
                </a>
                <a href="/services" className="nav-dropdown-link">
                  <div className="dropdown-item">
                    <h4>Security Systems</h4>
                    <p>Advanced smart security solutions</p>
                  </div>
                </a>
              </motion.div>
            )}
          </div>

          <a href="/portfolio" className="nav-link">Portfolio</a>
          <a href="/blog" className="nav-link">Blog</a>
          <a href="/contact" className="nav-link">Contact</a>
        </nav>

        {/* CTA Button */}
        <motion.a
          href="/contact"
          className="btn btn-primary"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get Started
        </motion.a>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          className="mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="mobile-menu-content">
            <a href="/" className="mobile-nav-link" onClick={toggleMobileMenu}>Home</a>
            <a href="/about" className="mobile-nav-link" onClick={toggleMobileMenu}>About</a>
            <a href="/services" className="mobile-nav-link" onClick={toggleMobileMenu}>Services</a>
            <a href="/portfolio" className="mobile-nav-link" onClick={toggleMobileMenu}>Portfolio</a>
            <a href="/blog" className="mobile-nav-link" onClick={toggleMobileMenu}>Blog</a>
            <a href="/contact" className="mobile-nav-link" onClick={toggleMobileMenu}>Contact</a>
            <a href="/contact" className="btn btn-primary mobile-cta" onClick={toggleMobileMenu}>
              Get Started
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;