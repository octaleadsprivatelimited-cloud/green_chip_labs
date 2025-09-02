import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Globe, ChevronDown, Award, Shield, Clock } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'Smart Home Automation', href: '/services#automation' },
        { name: 'Security Systems', href: '/services#security' },
        { name: 'Energy Management', href: '/services#energy' },
        { name: 'IoT Integration', href: '/services#iot' }
      ]
    },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  const quickLinks = [
    { name: 'FAQ', href: '/faq' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="top-bar-left">
              <div className="top-bar-item">
                <Award size={16} />
                <span>ISO 9001:2015 Certified</span>
              </div>
              <div className="top-bar-item">
                <Shield size={16} />
                <span>5-Year International Warranty</span>
              </div>
              <div className="top-bar-item">
                <Clock size={16} />
                <span>24/7 Global Support</span>
              </div>
            </div>
            
            <div className="top-bar-right">
              <div className="top-bar-item">
                <Phone size={16} />
                <a href="tel:+15551234567" className="top-bar-link">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="top-bar-item">
                <Mail size={16} />
                <a href="mailto:info@greenchiplabs.com" className="top-bar-link">
                  info@greenchiplabs.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`header-enhanced ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <nav className="nav-enhanced">
            {/* Logo */}
            <Link to="/" className="logo-enhanced">
              <div className="logo-icon">
                <Globe size={24} />
              </div>
              <div className="logo-text-container">
                <div className="logo-text">Green Chip Labs</div>
                <div className="logo-tagline">Smart Home Solutions</div>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="nav-desktop">
              <ul className="nav-menu-enhanced">
                {navigation.map((item) => (
                  <li key={item.name} className="nav-item">
                    {item.dropdown ? (
                      <div
                        className="dropdown-container"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        <Link
                          to={item.href}
                          className={`nav-link-enhanced ${location.pathname === item.href ? 'active' : ''}`}
                        >
                          {item.name}
                          <ChevronDown size={16} />
                        </Link>
                        
                        {isServicesOpen && (
                          <div className="dropdown-menu">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                className="dropdown-link"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className={`nav-link-enhanced ${location.pathname === item.href ? 'active' : ''}`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link to="/contact" className="professional-btn">
                Get Free Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn-enhanced"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <div className="container">
              <div className="mobile-menu-content">
                {navigation.map((item) => (
                  <div key={item.name} className="mobile-menu-item">
                    <Link
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`mobile-menu-link ${location.pathname === item.href ? 'active' : ''}`}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="mobile-submenu">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="mobile-submenu-link"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                <div className="mobile-quick-links">
                  <div className="quick-links-title">Quick Links:</div>
                  <div className="quick-links-grid">
                    {quickLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="quick-link"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;