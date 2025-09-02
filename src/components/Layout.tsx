import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  keywords: string;
  canonical: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title, 
  description, 
  keywords, 
  canonical 
}) => {
  return (
    <div className="layout-container">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={`https://greenchiplabs.com${canonical}`} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://greenchiplabs.com${canonical}`} />
        <meta property="og:image" content="https://greenchiplabs.com/og-image.jpg" />
        <meta property="og:site_name" content="Green Chip Labs" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://greenchiplabs.com/twitter-image.jpg" />
        
        {/* Favicon and Icons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Green Chip Labs",
            "description": "Premium smart home automation solutions",
            "url": "https://greenchiplabs.com",
            "logo": "https://greenchiplabs.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-555-123-4567",
              "contactType": "customer service",
              "availableLanguage": "English"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Smart Technology Ave",
              "addressLocality": "Tech City",
              "addressRegion": "TC",
              "postalCode": "12345",
              "addressCountry": "US"
            },
            "sameAs": [
              "https://facebook.com/greenchiplabs",
              "https://twitter.com/greenchiplabs",
              "https://instagram.com/greenchiplabs",
              "https://linkedin.com/company/greenchiplabs"
            ]
          })}
        </script>
      </Helmet>
      
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;