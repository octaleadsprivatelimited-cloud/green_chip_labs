# Green Chip Labs - Smart Home Automation Website

A premium-quality, international-standard website for Green Chip Labs, a leading IoT smart home automation company. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

### Pages (10+ Pages)
- **Home** - Hero section with contact form, features, testimonials
- **About Us** - Company story, mission, vision, team, timeline
- **Services** - Smart home automation services, pricing, process
- **Portfolio** - Project showcase with case studies and testimonials
- **Blog** - 6+ SEO-ready articles with search and filtering
- **Contact** - Contact forms, Google Maps, business information
- **FAQ** - Comprehensive FAQ with search and categories
- **Testimonials** - Customer reviews with ratings and filtering
- **Privacy Policy** - Detailed privacy policy and data protection
- **Terms & Conditions** - Service terms and legal information

### Design & Features
- ✅ **Premium, minimal, modern design** with soft animations
- ✅ **Fully responsive** navigation and layout (desktop + mobile)
- ✅ **Trust-building elements** (certifications, testimonials, reviews)
- ✅ **Contact details** on every page (header + footer)
- ✅ **Floating WhatsApp chat** button with greeting message
- ✅ **Contact forms** on every page with validation
- ✅ **Google Maps embed** on Contact page and footer
- ✅ **Blog system** with 6+ SEO-ready sample articles
- ✅ **SEO optimization** (meta tags, schema markup, robots.txt, sitemap.xml)

### Technical Features
- ✅ **React 19** with TypeScript for type safety
- ✅ **Tailwind CSS** for modern, responsive styling
- ✅ **Framer Motion** for smooth animations
- ✅ **React Router** for client-side routing
- ✅ **React Hook Form** with Yup validation
- ✅ **React Helmet Async** for SEO meta tags
- ✅ **Lucide React** for consistent icons
- ✅ **Mobile-first responsive design**
- ✅ **Cross-browser compatibility**
- ✅ **Fast loading and performance optimized**

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation Steps

1. **Clone or download the project**
   ```bash
   cd green_chip_labs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 📁 Project Structure

```
green_chip_labs/
├── public/
│   ├── robots.txt          # SEO robots file
│   ├── sitemap.xml         # SEO sitemap
│   └── favicon.ico         # Website favicon
├── src/
│   ├── components/         # Reusable components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Footer.tsx      # Site footer
│   │   ├── Layout.tsx      # Page layout wrapper
│   │   └── ContactForm.tsx # Contact form component
│   ├── pages/              # Page components
│   │   ├── Home.tsx        # Homepage
│   │   ├── About.tsx       # About page
│   │   ├── Services.tsx    # Services page
│   │   ├── Portfolio.tsx   # Portfolio page
│   │   ├── Blog.tsx        # Blog page
│   │   ├── Contact.tsx     # Contact page
│   │   ├── FAQ.tsx         # FAQ page
│   │   ├── Testimonials.tsx # Testimonials page
│   │   ├── Privacy.tsx     # Privacy policy
│   │   └── Terms.tsx       # Terms & conditions
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # App entry point
│   └── index.css           # Global styles
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
└── package.json            # Dependencies
```

## 🎨 Customization

### Colors
The website uses a green color scheme. To change colors, update the `tailwind.config.js` file:

```javascript
colors: {
  primary: {
    50: '#f0fdf4',   // Light green
    100: '#dcfce7',
    // ... more shades
    600: '#16a34a',  // Main green
    // ... more shades
  }
}
```

### Content
- **Company Information**: Update contact details in `Header.tsx` and `Footer.tsx`
- **Services**: Modify service offerings in `Services.tsx`
- **Portfolio**: Update projects in `Portfolio.tsx`
- **Blog**: Add/edit articles in `Blog.tsx`
- **Testimonials**: Update customer reviews in `Testimonials.tsx`

### SEO
- **Meta Tags**: Update in each page component's Layout props
- **Schema Markup**: Modify in `Layout.tsx`
- **Sitemap**: Update `public/sitemap.xml`
- **Robots**: Update `public/robots.txt`

## 📱 Contact Information

The website includes the following contact details:
- **Phone**: +91 900000000, +91 90000000
- **Email**: info@greenchiplabs.com
- **WhatsApp**: +91 90000000
- **Address**: Green Chip Labs, Smart City District, India

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload `dist` folder to Netlify
3. Configure redirects for SPA routing

### Traditional Hosting
1. Build the project: `npm run build`
2. Upload `dist` folder contents to web server
3. Configure server for SPA routing

## 📊 SEO Features

- ✅ **Meta Tags**: Title, description, keywords for each page
- ✅ **Open Graph**: Social media preview tags
- ✅ **Schema Markup**: Local Business/Organization schema
- ✅ **Sitemap**: XML sitemap for search engines
- ✅ **Robots.txt**: Search engine crawling instructions
- ✅ **Canonical URLs**: Prevent duplicate content
- ✅ **Alt Tags**: Image accessibility and SEO
- ✅ **Mobile-First**: Responsive design for all devices

## 🔧 Technologies Used

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **React Hook Form** - Form handling
- **Yup** - Schema validation
- **React Helmet Async** - SEO meta tags
- **Lucide React** - Icon library

## 📄 License

This project is created for Green Chip Labs. All rights reserved.

## 🤝 Support

For technical support or customization requests, contact:
- **Email**: info@greenchiplabs.com
- **Phone**: +91 900000000

---

**Green Chip Labs** - Transforming homes with smart automation technology.