import React from 'react';
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, Globe, Calendar, Mail, Phone } from 'lucide-react';
import Layout from '../components/Layout';

const Terms: React.FC = () => {
  return (
    <Layout
      title="Terms of Service - Green Chip Labs | Legal Terms & Conditions"
      description="Read Green Chip Labs' Terms of Service and legal conditions. Understand your rights and responsibilities when using our smart home automation services."
      keywords="terms of service, legal terms, conditions, user agreement, smart home services, IoT terms"
      canonical="/terms"
    >
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Terms of Service</h1>
            <p>
              These Terms of Service govern your use of Green Chip Labs' smart home automation 
              services and website. Please read these terms carefully before using our services.
            </p>
            <div className="terms-badges">
              <div className="terms-badge">
                <FileText size={20} />
                <span>Legal Agreement</span>
              </div>
              <div className="terms-badge">
                <Scale size={20} />
                <span>Binding Terms</span>
              </div>
              <div className="terms-badge">
                <Shield size={20} />
                <span>Protected Rights</span>
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

      {/* Acceptance of Terms */}
      <section className="section">
        <div className="container">
          <div className="policy-content">
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing or using Green Chip Labs' services, you agree to be bound by these Terms of Service 
              and all applicable laws and regulations. If you do not agree with any of these terms, you are 
              prohibited from using or accessing our services.
            </p>
            
            <div className="acceptance-notice">
              <AlertTriangle size={24} />
              <div>
                <h4>Important Notice</h4>
                <p>These terms constitute a legally binding agreement between you and Green Chip Labs. Please read them carefully.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="section service-description-section">
        <div className="container">
          <div className="policy-content">
            <h2>Service Description</h2>
            <p>Green Chip Labs provides the following services:</p>
            
            <div className="service-list">
              <div className="service-item">
                <CheckCircle size={20} />
                <div>
                  <h4>Smart Home Automation</h4>
                  <p>Installation and configuration of IoT devices and automation systems</p>
                </div>
              </div>
              
              <div className="service-item">
                <CheckCircle size={20} />
                <div>
                  <h4>Security Systems</h4>
                  <p>Design and implementation of smart security solutions</p>
                </div>
              </div>
              
              <div className="service-item">
                <CheckCircle size={20} />
                <div>
                  <h4>Energy Management</h4>
                  <p>Smart energy monitoring and optimization systems</p>
                </div>
              </div>
              
              <div className="service-item">
                <CheckCircle size={20} />
                <div>
                  <h4>Mobile Applications</h4>
                  <p>Custom mobile apps for smart home control and monitoring</p>
                </div>
              </div>
              
              <div className="service-item">
                <CheckCircle size={20} />
                <div>
                  <h4>Technical Support</h4>
                  <p>Ongoing maintenance, updates, and customer support services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Responsibilities */}
      <section className="section">
        <div className="container">
          <div className="policy-content">
            <h2>User Responsibilities</h2>
            <p>As a user of our services, you agree to:</p>
            
            <div className="responsibilities-grid">
              <div className="responsibility-item">
                <h4>Provide Accurate Information</h4>
                <p>Supply accurate and complete information when creating accounts or requesting services.</p>
              </div>
              
              <div className="responsibility-item">
                <h4>Maintain Account Security</h4>
                <p>Keep your account credentials secure and notify us of any unauthorized access.</p>
              </div>
              
              <div className="responsibility-item">
                <h4>Comply with Laws</h4>
                <p>Use our services in compliance with all applicable local, state, and federal laws.</p>
              </div>
              
              <div className="responsibility-item">
                <h4>Respect Intellectual Property</h4>
                <p>Not infringe on our intellectual property rights or those of third parties.</p>
              </div>
              
              <div className="responsibility-item">
                <h4>Proper Use</h4>
                <p>Use our services only for lawful purposes and in accordance with these terms.</p>
              </div>
              
              <div className="responsibility-item">
                <h4>Payment Obligations</h4>
                <p>Pay all fees and charges in accordance with agreed payment terms.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Terms */}
      <section className="section payment-section">
        <div className="container">
          <div className="policy-content">
            <h2>Payment Terms</h2>
            
            <div className="payment-details">
              <div className="payment-item">
                <h4>Service Fees</h4>
                <p>All service fees are clearly stated in your service agreement and must be paid according to the specified schedule.</p>
              </div>
              
              <div className="payment-item">
                <h4>Payment Methods</h4>
                <p>We accept major credit cards, bank transfers, and other approved payment methods as specified in your agreement.</p>
              </div>
              
              <div className="payment-item">
                <h4>Late Payments</h4>
                <p>Late payments may result in service suspension and additional fees as outlined in your service agreement.</p>
              </div>
              
              <div className="payment-item">
                <h4>Refunds</h4>
                <p>Refund policies are detailed in your specific service agreement and may vary by service type.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Limitation of Liability */}
      <section className="section">
        <div className="container">
          <div className="policy-content">
            <h2>Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Green Chip Labs shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages, including but not limited to loss of 
              profits, data, or use, arising out of or relating to your use of our services.
            </p>
            
            <div className="liability-notice">
              <Shield size={24} />
              <div>
                <h4>Service Availability</h4>
                <p>While we strive for 99.9% uptime, we cannot guarantee uninterrupted service availability due to factors beyond our control.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intellectual Property */}
      <section className="section ip-section">
        <div className="container">
          <div className="policy-content">
            <h2>Intellectual Property</h2>
            <p>
              All content, trademarks, and intellectual property on our website and in our services are 
              owned by Green Chip Labs or our licensors. You may not use, reproduce, or distribute our 
              intellectual property without written permission.
            </p>
            
            <div className="ip-rights">
              <div className="ip-right">
                <h4>Our Rights</h4>
                <p>We retain all rights to our software, designs, documentation, and proprietary technology.</p>
              </div>
              
              <div className="ip-right">
                <h4>Your Rights</h4>
                <p>You retain ownership of your personal data and any content you create using our services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Termination */}
      <section className="section">
        <div className="container">
          <div className="policy-content">
            <h2>Termination</h2>
            <p>
              Either party may terminate this agreement at any time with appropriate notice as specified 
              in your service agreement. Upon termination:
            </p>
            
            <div className="termination-list">
              <div className="termination-item">
                <h4>Service Cessation</h4>
                <p>Your access to our services will be discontinued according to the terms of your agreement.</p>
              </div>
              
              <div className="termination-item">
                <h4>Data Handling</h4>
                <p>We will handle your data according to our Privacy Policy and applicable data protection laws.</p>
              </div>
              
              <div className="termination-item">
                <h4>Outstanding Obligations</h4>
                <p>Any outstanding payments or obligations must be fulfilled according to the terms of your agreement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governing Law */}
      <section className="section law-section">
        <div className="container">
          <div className="policy-content">
            <h2>Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of the 
              jurisdiction where Green Chip Labs is incorporated, without regard to conflict of law principles.
            </p>
            
            <div className="legal-info">
              <div className="legal-item">
                <Globe size={20} />
                <div>
                  <h4>Jurisdiction</h4>
                  <p>Any disputes will be resolved in the courts of our primary business jurisdiction.</p>
                </div>
              </div>
              
              <div className="legal-item">
                <Scale size={20} />
                <div>
                  <h4>Dispute Resolution</h4>
                  <p>We encourage resolution of disputes through direct communication and mediation when possible.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section contact-section">
        <div className="container">
          <div className="policy-content">
            <h2>Contact Information</h2>
            <p>If you have any questions about these Terms of Service, please contact us:</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <Mail size={20} />
                <div>
                  <h4>Email</h4>
                  <p>legal@greenchiplabs.com</p>
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

export default Terms;