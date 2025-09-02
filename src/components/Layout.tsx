import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title = "Green Chip Labs - IoT Smart Home Automation Solutions",
  description = "Leading provider of innovative IoT smart home automation solutions. Transform your living space into an intelligent, energy-efficient, and secure environment.",
  keywords = "IoT, smart home, automation, green technology, energy efficiency, home security, smart devices",
  canonical,
  ogImage = "/og-image.jpg"
}) => {
  const siteUrl = "https://greenchiplabs.com";
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={fullCanonical} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${siteUrl}${ogImage}`} />
        <meta property="og:url" content={fullCanonical} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Green Chip Labs" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
        
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Green Chip Labs" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />

        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Green Chip Labs",
            "description": "Leading provider of innovative IoT smart home automation solutions",
            "url": siteUrl,
            "logo": `${siteUrl}/logo.png`,
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-900000000",
              "contactType": "customer service",
              "email": "info@greenchiplabs.com"
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN",
              "addressLocality": "Smart City District",
              "addressRegion": "India"
            },
            "sameAs": [
              "https://www.facebook.com/greenchiplabs",
              "https://www.twitter.com/greenchiplabs",
              "https://www.linkedin.com/company/greenchiplabs",
              "https://www.instagram.com/greenchiplabs"
            ],
            "foundingDate": "2020",
            "numberOfEmployees": "10-50",
            "industry": "IoT, Smart Home Automation, Green Technology"
          })}
        </script>
      </Helmet>
      
      <div className="layout-container">
        <Header />
        <main className="main-content">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
