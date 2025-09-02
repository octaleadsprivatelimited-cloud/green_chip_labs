import React, { useState } from 'react';
import { Send, CheckCircle, User, Mail, Phone, MessageSquare, ArrowRight } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 4 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 4000);
  };

  if (isSubmitted) {
    return (
      <div className="contact-form-success">
        <div className="success-icon">
          <CheckCircle size={48} />
        </div>
        <h3>Message Sent Successfully!</h3>
        <p>We'll get back to you within 24 hours with a personalized solution.</p>
      </div>
    );
  }

  return (
    <div className="contact-form-container">
      <div className="contact-form-header">
        <h3>Get Your Free Quote</h3>
        <p>Tell us about your project and we'll provide a customized solution.</p>
      </div>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">
              <User size={16} />
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              <Mail size={16} />
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="phone">
            <Phone size={16} />
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">
            <MessageSquare size={16} />
            Project Details *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            placeholder="Briefly describe your smart home project requirements..."
          />
        </div>

        <button 
          type="submit" 
          className="contact-form-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <div className="spinner" />
              Sending...
            </>
          ) : (
            <>
              <Send size={18} />
              Get Free Quote
              <ArrowRight size={16} />
            </>
          )}
        </button>

        <div className="form-footer">
          <p>✓ Free consultation included</p>
          <p>✓ 24-hour response guarantee</p>
          <p>✓ No obligation quote</p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;