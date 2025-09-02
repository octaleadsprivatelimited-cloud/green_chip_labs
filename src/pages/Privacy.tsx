import React from 'react';
import { Shield, Lock, Eye, Database, Globe, Mail, Phone, Calendar } from 'lucide-react';
import Layout from '../components/Layout';

const Privacy: React.FC = () => {
  return (
    <Layout
      title="Privacy Policy - Green Chip Labs | Data Protection & Privacy"
      description="Learn about Green Chip Labs' privacy policy and how we protect your personal information. We are committed to maintaining the highest standards of data protection and privacy."
      keywords="privacy policy, data protection, personal information, GDPR compliance, privacy rights"
      canonical="/privacy"
    >
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Privacy Policy</h1>
            <p>
              Your privacy is important to us. This Privacy Policy explains how Green Chip Labs 
              collects, uses, and protects your personal information when you use our services.
            </p>
            <div className="privacy-badges">
              <div className="privacy-badge">
                <Shield size={20} />
                <span>GDPR Compliant</span>
              </div>
              <div className="privacy-badge">
                <Lock size={20} />
                <span>Data Encrypted</span>
              </div>
              <div className="privacy-badge">
                <Eye size={20} />
                <span>Transparent</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="section">
        <div className="container">
          <div className="last-updated">
            <Calendar size={20} />
            <span>Last updated: December 15, 2024</span>
          </div>
        </div>
      </section>

      {/* Information We Collect */}
      <section className="section">
        <div className="container">
          <div className="policy-content">
            <h2>Information We Collect</h2>
            
            <div className="info-category">
              <h3>Personal Information</h3>
              <p>We collect information you provide directly to us, such as:</p>
              <ul>
                <li>Name and contact information (email, phone number, address)</li>
                <li>Account credentials and preferences</li>
                <li>Payment and billing information</li>
                <li>Communication records and support requests</li>
                <li>Survey responses and feedback</li>
              </ul>
            </div>

            <div className="info-category">
              <h3>Usage Information</h3>
              <p>We automatically collect certain information about your use of our services:</p>
              <ul>
                <li>Device information and identifiers</li>
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on our website</li>
                <li>Smart home device usage patterns</li>
                <li>System performance and error logs</li>
              </ul>
            </div>

            <div className="info-category">
              <h3>Smart Home Data</h3>
              <p>When you use our smart home services, we may collect:</p>
              <ul>
                <li>Device status and configuration data</li>
                <li>Automation schedules and preferences</li>
                <li>Energy usage and efficiency metrics</li>
                <li>Security system logs and alerts</li>
                <li>Environmental sensor data (temperature, humidity, etc.)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How We Use Information */}
      <section className="section usage-section">
        <div className="container">
          <div className="policy-content">
            <h2>How We Use Your Information</h2>
            
            <div className="usage-grid">
              <div className="usage-item">
                <div className="usage-icon">
                  <Database size={24} />
                </div>
                <h3>Service Delivery</h3>
                <p>To provide, maintain, and improve our smart home automation services and customer support.</p>
              </div>
              
              <div className="usage-item">
                <div className="usage-icon">
                  <Globe size={24} />
                </div>
                <h3>Communication</h3>
                <p>To send you important updates, notifications, and respond to your inquiries.</p>
              </div>
              
              <div className="usage-item">
                <div className="usage-icon">
                  <Shield size={24} />
                </div>
                <h3>Security</h3>
                <p>To protect against fraud, unauthorized access, and ensure the security of our services.</p>
              </div>
              
              <div className="usage-item">
                <div className="usage-icon">
                  <Eye size={24} />
                </div>
                <h3>Analytics</h3>
                <p>To analyze usage patterns and improve our products and services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Sharing */}
      <section className="section">
        <div className="container">
          <div className="policy-content">
            <h2>Information Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
            
            <div className="sharing-list">
              <div className="sharing-item">
                <h4>Service Providers</h4>
                <p>With trusted third-party service providers who assist us in operating our business and providing services to you.</p>
              </div>
              
              <div className="sharing-item">
                <h4>Legal Requirements</h4>
                <p>When required by law, court order, or to protect our rights, property, or safety, or that of our users.</p>
              </div>
              
              <div className="sharing-item">
                <h4>Business Transfers</h4>
                <p>In connection with a merger, acquisition, or sale of assets, with notice to affected users.</p>
              </div>
              
              <div className="sharing-item">
                <h4>Consent</h4>
                <p>With your explicit consent for specific purposes not covered in this policy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Security */}
      <section className="section security-section">
        <div className="container">
          <div className="policy-content">
            <h2>Data Security</h2>
            <p>We implement industry-standard security measures to protect your personal information:</p>
            
            <div className="security-features">
              <div className="security-feature">
                <Lock size={20} />
                <span>End-to-end encryption for all data transmission</span>
              </div>
              <div className="security-feature">
                <Shield size={20} />
                <span>Regular security audits and penetration testing</span>
              </div>
              <div className="security-feature">
                <Database size={20} />
                <span>Secure data storage with access controls</span>
              </div>
              <div className="security-feature">
                <Eye size={20} />
                <span>Employee training on data protection practices</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="section">
        <div className="container">
          <div className="policy-content">
            <h2>Your Privacy Rights</h2>
            <p>You have the following rights regarding your personal information:</p>
            
            <div className="rights-grid">
              <div className="right-item">
                <h4>Access</h4>
                <p>Request access to the personal information we hold about you.</p>
              </div>
              
              <div className="right-item">
                <h4>Correction</h4>
                <p>Request correction of inaccurate or incomplete information.</p>
              </div>
              
              <div className="right-item">
                <h4>Deletion</h4>
                <p>Request deletion of your personal information in certain circumstances.</p>
              </div>
              
              <div className="right-item">
                <h4>Portability</h4>
                <p>Request a copy of your data in a structured, machine-readable format.</p>
              </div>
              
              <div className="right-item">
                <h4>Objection</h4>
                <p>Object to processing of your information for certain purposes.</p>
              </div>
              
              <div className="right-item">
                <h4>Restriction</h4>
                <p>Request restriction of processing in certain circumstances.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section contact-section">
        <div className="container">
          <div className="policy-content">
            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <Mail size={20} />
                <div>
                  <h4>Email</h4>
                  <p>privacy@greenchiplabs.com</p>
                </div>
              </div>
              
              <div className="contact-method">
                <Phone size={20} />
                <div>
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="contact-method">
                <Globe size={20} />
                <div>
                  <h4>Address</h4>
                  <p>123 Smart Technology Ave<br />Innovation District, Tech City 12345</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;