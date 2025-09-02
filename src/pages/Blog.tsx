import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  ArrowRight,
  Tag,
  TrendingUp,
  Star,
  Eye,
  MessageCircle,
  BookOpen,
  Lightbulb,
  Shield,
  Zap,
  Home,
  Smartphone
} from 'lucide-react';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';

const Blog: React.FC = () => {
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

  const featuredPost = {
    id: 1,
    title: "The Future of Smart Home Technology: Trends to Watch in 2024",
    excerpt: "Discover the latest innovations in smart home automation that are revolutionizing how we live, work, and interact with our living spaces.",
    content: "Smart home technology continues to evolve at an unprecedented pace, bringing us closer to truly intelligent living environments...",
    author: "Sarah Johnson",
    date: "2024-12-15",
    readTime: "8 min read",
    category: "Technology",
    tags: ["Smart Home", "IoT", "Automation", "Future Tech"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop",
    featured: true,
    views: 1250,
    likes: 89,
    comments: 23
  };

  const blogPosts = [
    {
      id: 2,
      title: "Energy Efficiency: How Smart Homes Reduce Your Carbon Footprint",
      excerpt: "Learn how smart home automation can significantly reduce energy consumption and help create a more sustainable future.",
      author: "Michael Chen",
      date: "2024-12-12",
      readTime: "6 min read",
      category: "Sustainability",
      tags: ["Energy", "Green Tech", "Efficiency"],
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=250&fit=crop",
      views: 890,
      likes: 67,
      comments: 15
    },
    {
      id: 3,
      title: "Smart Security Systems: Protecting Your Home in the Digital Age",
      excerpt: "Explore the latest advancements in home security technology and how to choose the right system for your needs.",
      author: "Emily Rodriguez",
      date: "2024-12-10",
      readTime: "7 min read",
      category: "Security",
      tags: ["Security", "Smart Locks", "Cameras"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
      views: 1100,
      likes: 78,
      comments: 19
    },
    {
      id: 4,
      title: "Voice Control Revolution: The Rise of Smart Assistants",
      excerpt: "How voice-activated smart assistants are changing the way we interact with our homes and devices.",
      author: "David Kim",
      date: "2024-12-08",
      readTime: "5 min read",
      category: "Technology",
      tags: ["Voice Control", "AI", "Assistants"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      views: 750,
      likes: 54,
      comments: 12
    },
    {
      id: 5,
      title: "IoT Integration: Connecting All Your Smart Devices",
      excerpt: "A comprehensive guide to integrating various IoT devices into a unified smart home ecosystem.",
      author: "Sarah Johnson",
      date: "2024-12-05",
      readTime: "9 min read",
      category: "Integration",
      tags: ["IoT", "Integration", "Ecosystem"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
      views: 980,
      likes: 71,
      comments: 18
    },
    {
      id: 6,
      title: "Smart Home Maintenance: Keeping Your System Running Smoothly",
      excerpt: "Essential tips and best practices for maintaining your smart home devices and ensuring optimal performance.",
      author: "Michael Chen",
      date: "2024-12-03",
      readTime: "6 min read",
      category: "Maintenance",
      tags: ["Maintenance", "Tips", "Performance"],
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=250&fit=crop",
      views: 650,
      likes: 43,
      comments: 9
    }
  ];

  const categories = [
    { name: "All", count: 15, icon: BookOpen },
    { name: "Technology", count: 6, icon: Lightbulb },
    { name: "Security", count: 3, icon: Shield },
    { name: "Sustainability", count: 2, icon: Zap },
    { name: "Integration", count: 2, icon: Home },
    { name: "Maintenance", count: 2, icon: Smartphone }
  ];

  const popularTags = [
    "Smart Home", "IoT", "Automation", "Security", "Energy", "Voice Control", 
    "AI", "Green Tech", "Integration", "Maintenance", "Future Tech", "Efficiency"
  ];

  return (
    <Layout
      title="Blog - Green Chip Labs | Smart Home Technology Insights & News"
      description="Stay updated with the latest smart home technology trends, tips, and insights. Expert articles on IoT, automation, security, and sustainable living solutions."
      keywords="smart home blog, IoT articles, home automation tips, smart technology news, green tech insights"
      canonical="/blog"
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
            <h1>Smart Home Technology Blog</h1>
            <p>
              Stay informed with the latest insights, trends, and expert advice on smart home automation, 
              IoT technology, and sustainable living solutions.
            </p>
            <div className="hero-buttons">
              <a href="#featured" className="btn btn-primary">
                Read Latest Articles <ArrowRight size={20} />
              </a>
              <a href="#newsletter" className="btn btn-secondary">
                Subscribe to Newsletter
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section id="featured" className="section">
        <div className="container">
          <div className="fade-in">
            <h2 className="section-title">Featured Article</h2>
          </div>
          
          <motion.article
            className="featured-post"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="featured-post-image">
              <img src={featuredPost.image} alt={featuredPost.title} />
              <div className="featured-badge">Featured</div>
            </div>
            
            <div className="featured-post-content">
              <div className="post-meta">
                <span className="post-category">{featuredPost.category}</span>
                <span className="post-date">
                  <Calendar size={16} />
                  {new Date(featuredPost.date).toLocaleDateString()}
                </span>
                <span className="post-read-time">
                  <Clock size={16} />
                  {featuredPost.readTime}
                </span>
              </div>
              
              <h3 className="featured-post-title">{featuredPost.title}</h3>
              <p className="featured-post-excerpt">{featuredPost.excerpt}</p>
              
              <div className="post-stats">
                <div className="stat-item">
                  <Eye size={16} />
                  <span>{featuredPost.views.toLocaleString()}</span>
                </div>
                <div className="stat-item">
                  <Star size={16} />
                  <span>{featuredPost.likes}</span>
                </div>
                <div className="stat-item">
                  <MessageCircle size={16} />
                  <span>{featuredPost.comments}</span>
                </div>
              </div>
              
              <div className="post-tags">
                {featuredPost.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    <Tag size={14} />
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="post-author">
                <div className="author-avatar">
                  {featuredPost.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="author-info">
                  <span className="author-name">{featuredPost.author}</span>
                  <span className="author-role">Senior Technology Writer</span>
                </div>
              </div>
              
              <a href={`/blog/${featuredPost.id}`} className="btn btn-primary">
                Read Full Article <ArrowRight size={20} />
              </a>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section blog-posts-section">
        <div className="container">
          <div className="blog-layout">
            <div className="blog-main">
              <div className="fade-in">
                <h2 className="section-title">Latest Articles</h2>
                <p className="section-subtitle">
                  Discover the latest insights and trends in smart home technology
                </p>
              </div>
              
              <div className="blog-posts-grid">
                {blogPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    className="blog-post-card slide-in-left"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="post-image">
                      <img src={post.image} alt={post.title} />
                      <div className="post-category-badge">{post.category}</div>
                    </div>
                    
                    <div className="post-content">
                      <div className="post-meta">
                        <span className="post-date">
                          <Calendar size={14} />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                        <span className="post-read-time">
                          <Clock size={14} />
                          {post.readTime}
                        </span>
                      </div>
                      
                      <h3 className="post-title">{post.title}</h3>
                      <p className="post-excerpt">{post.excerpt}</p>
                      
                      <div className="post-stats">
                        <div className="stat-item">
                          <Eye size={14} />
                          <span>{post.views.toLocaleString()}</span>
                        </div>
                        <div className="stat-item">
                          <Star size={14} />
                          <span>{post.likes}</span>
                        </div>
                        <div className="stat-item">
                          <MessageCircle size={14} />
                          <span>{post.comments}</span>
                        </div>
                      </div>
                      
                      <div className="post-tags">
                        {post.tags.map((tag, index) => (
                          <span key={index} className="tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="post-author">
                        <div className="author-avatar">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="author-info">
                          <span className="author-name">{post.author}</span>
                        </div>
                      </div>
                      
                      <a href={`/blog/${post.id}`} className="btn btn-outline">
                        Read More <ArrowRight size={16} />
                      </a>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
            
            {/* Sidebar */}
            <aside className="blog-sidebar">
              <div className="sidebar-widget">
                <h3>Categories</h3>
                <div className="category-list">
                  {categories.map((category, index) => (
                    <a key={index} href="#" className="category-item">
                      <category.icon size={16} />
                      <span>{category.name}</span>
                      <span className="category-count">({category.count})</span>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="sidebar-widget">
                <h3>Popular Tags</h3>
                <div className="tag-cloud">
                  {popularTags.map((tag, index) => (
                    <a key={index} href="#" className="tag-link">
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="sidebar-widget">
                <h3>Newsletter</h3>
                <p>Subscribe to get the latest smart home insights delivered to your inbox.</p>
                <ContactForm />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="section newsletter-section">
        <div className="container">
          <motion.div
            className="newsletter-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Stay Updated with Smart Home Trends</h2>
            <p>
              Get weekly insights, tips, and the latest news in smart home technology delivered directly to your inbox.
            </p>
            <div className="newsletter-stats">
              <div className="newsletter-stat">
                <TrendingUp size={24} />
                <span>10,000+ Subscribers</span>
              </div>
              <div className="newsletter-stat">
                <Star size={24} />
                <span>4.9/5 Rating</span>
              </div>
              <div className="newsletter-stat">
                <MessageCircle size={24} />
                <span>Weekly Updates</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;