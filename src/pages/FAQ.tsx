import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Search,
  Filter,
  MessageCircle,
  Phone,
  Mail,
  ArrowRight
} from 'lucide-react';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openItems, setOpenItems] = useState<number[]>([]);

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

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const categories = [
    { id: 'all', name: 'All Questions', count: 24 },
    { id: 'general', name: 'General', count: 8 },
    { id: 'installation', name: 'Installation', count: 6 },
    { id: 'support', name: 'Support', count: 5 },
    { id: 'pricing', name: 'Pricing', count: 3 },
    { id: 'technical', name: 'Technical', count: 2 }
  ];

  const faqs = [
    {
      id: 1,
      category: 'general',
      question: 'What is smart home automation?',
      answer: 'Smart home automation is a system that allows you to control various aspects of your home remotely or automatically. This includes lighting, climate control, security systems, entertainment systems, and more, all connected through IoT (Internet of Things) technology.'
    },
    {
      id: 2,
      category: 'general',
      question: 'How much does a smart home system cost?',
      answer: 'The cost of a smart home system varies depending on the size of your home, the number of devices, and the complexity of the installation. Basic systems start around $2,500, while comprehensive whole-home automation can range from $10,000 to $50,000 or more.'
    },
    {
      id: 3,
      category: 'installation',
      question: 'How long does installation take?',
      answer: 'Installation time depends on the scope of your project. A basic smart home setup can be completed in 1-2 days, while a comprehensive whole-home automation system may take 1-2 weeks. We provide detailed timelines during your consultation.'
    },
    {
      id: 4,
      category: 'installation',
      question: 'Do I need to be home during installation?',
      answer: 'For most installations, you don\'t need to be home the entire time. We can work around your schedule and will coordinate with you for any decisions that need to be made during the installation process.'
    },
    {
      id: 5,
      category: 'support',
      question: 'What kind of support do you provide?',
      answer: 'We offer 24/7 technical support, regular system maintenance, software updates, and troubleshooting assistance. Our support team is available via phone, email, and remote assistance to ensure your system runs smoothly.'
    },
    {
      id: 6,
      category: 'support',
      question: 'Is there a warranty on your installations?',
      answer: 'Yes, we provide a 5-year international warranty on all our installations and equipment. This covers both hardware and software, ensuring your investment is protected.'
    },
    {
      id: 7,
      category: 'pricing',
      question: 'Do you offer financing options?',
      answer: 'Yes, we offer flexible financing options to make smart home technology accessible. We work with several financing partners to provide competitive rates and payment plans that fit your budget.'
    },
    {
      id: 8,
      category: 'pricing',
      question: 'Are there any ongoing costs?',
      answer: 'Most smart home systems have minimal ongoing costs. You may have small monthly fees for cloud services or premium features, but basic functionality typically has no recurring costs beyond your internet connection.'
    },
    {
      id: 9,
      category: 'technical',
      question: 'What if my internet goes down?',
      answer: 'Most smart home devices can continue to function locally even without internet connectivity. However, remote access and some cloud-based features may be temporarily unavailable until your connection is restored.'
    },
    {
      id: 10,
      category: 'technical',
      question: 'Can I expand my system later?',
      answer: 'Absolutely! Our systems are designed to be modular and expandable. You can add new devices, rooms, or features at any time. We make it easy to grow your smart home as your needs change.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our support team',
      action: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get detailed responses to your questions',
      action: 'support@greenchiplabs.com',
      link: 'mailto:support@greenchiplabs.com'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our experts in real-time',
      action: 'Start Chat',
      link: '/contact'
    }
  ];

  return (
    <Layout
      title="FAQ - Green Chip Labs | Frequently Asked Questions About Smart Home Automation"
      description="Find answers to common questions about smart home automation, installation, pricing, and support. Get expert answers from Green Chip Labs' smart home specialists."
      keywords="smart home FAQ, home automation questions, IoT support, smart home installation, automation pricing"
      canonical="/faq"
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
            <h1>Frequently Asked Questions</h1>
            <p>
              Find answers to common questions about smart home automation, installation, 
              pricing, and support. Can't find what you're looking for? Contact our expert team.
            </p>
            <div className="hero-buttons">
              <a href="#faq-search" className="btn btn-primary">
                Browse Questions <ArrowRight size={20} />
              </a>
              <a href="/contact" className="btn btn-secondary">
                Ask a Question
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section id="faq-search" className="section">
        <div className="container">
          <div className="faq-search-container">
            <div className="search-box">
              <Search size={20} />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            
            <div className="category-filter">
              <Filter size={20} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="filter-select"
                aria-label="Filter questions by category"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="section faq-section">
        <div className="container">
          <div className="fade-in">
            <h2 className="section-title">Common Questions</h2>
            <p className="section-subtitle">
              {filteredFaqs.length} question{filteredFaqs.length !== 1 ? 's' : ''} found
            </p>
          </div>
          
          <div className="faq-list">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                className="faq-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleItem(faq.id)}
                >
                  <div className="question-content">
                    <HelpCircle size={20} />
                    <span>{faq.question}</span>
                  </div>
                  {openItems.includes(faq.id) ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>
                
                <AnimatePresence>
                  {openItems.includes(faq.id) && (
                    <motion.div
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="section support-section">
        <div className="container">
          <div className="fade-in">
            <h2 className="section-title">Still Have Questions?</h2>
            <p className="section-subtitle">
              Our expert support team is here to help you with any questions or concerns
            </p>
          </div>
          
          <div className="support-methods">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                className="support-method slide-in-left"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="support-icon">
                  <method.icon size={24} />
                </div>
                <h3>{method.title}</h3>
                <p>{method.description}</p>
                <a href={method.link} className="support-action">
                  {method.action} <ArrowRight size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section contact-form-section">
        <div className="container">
          <div className="fade-in">
            <h2 className="section-title">Ask a Question</h2>
            <p className="section-subtitle">
              Can't find the answer you're looking for? Send us your question and we'll get back to you within 24 hours.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;