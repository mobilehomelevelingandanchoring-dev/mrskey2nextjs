# Key2BHP Auto Locksmith - Next.js Website
## Semantic SEO Optimized | Koray Framework Implementation

---

## 🚀 Project Overview

This is a **Next.js 14+ App Router** website for Key2BHP Auto Locksmith, a mobile auto locksmith service operating across Manchester and Greater Manchester. The site is built with **Semantic SEO** optimization following **Koray Tuğberk GÜBÜR's framework** for maximum search visibility and topical authority.

### Key Features

✅ **Next.js 14+ App Router** - Modern React framework with file-based routing  
✅ **Semantic SEO Optimization** - Entity-based, query dependency chains, topical authority  
✅ **Schema.org JSON-LD** - LocalBusiness, Service, FAQ, Breadcrumb, Emergency Service schemas  
✅ **Mobile-First Design** - Responsive, fast, optimized for mobile search  
✅ **24/7 Emergency Focus** - Optimized for emergency and local search intent  
✅ **Comprehensive Coverage** - 11 service pages + 8+ location pages  
✅ **TypeScript** - Type-safe codebase  
✅ **Tailwind CSS** - Utility-first styling with custom design system  
✅ **shadcn/ui** - High-quality UI components  

---

## 📁 Project Structure

```
nextjs-app/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout with LocalBusiness schema
│   ├── page.tsx                  # Homepage
│   ├── globals.css               # Global styles
│   ├── sitemap.ts                # Dynamic sitemap generation
│   ├── robots.ts                 # Robots.txt configuration
│   ├── services/                 # Service pages
│   │   ├── page.tsx              # Services hub
│   │   ├── car-key-replacement/
│   │   │   └── page.tsx          # Service page example
│   │   └── [11 service pages]
│   ├── areas/                    # Location pages
│   │   ├── page.tsx              # Areas hub
│   │   ├── salford/
│   │   │   └── page.tsx          # Location page example
│   │   └── [8+ location pages]
│   ├── about/
│   │   └── page.tsx              # About page
│   ├── contact/
│   │   └── page.tsx              # Contact page
│   └── not-found.tsx             # 404 page
├── components/                   # React components
│   ├── layout/                   # Layout components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── MobileCallButton.tsx
│   ├── home/                     # Homepage components
│   │   ├── Hero.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── Testimonials.tsx
│   │   └── Marquee.tsx
│   └── ui/                       # shadcn/ui components
├── lib/                          # Utilities and helpers
│   ├── schema.ts                 # Schema.org generators
│   ├── metadata.ts               # SEO metadata utilities
│   └── utils.ts                  # General utilities
├── public/                       # Static assets
├── package.json                  # Dependencies
├── next.config.js                # Next.js configuration
├── tailwind.config.js            # Tailwind CSS configuration
└── tsconfig.json                 # TypeScript configuration
```

---

## 🎯 Semantic SEO Implementation

### Topical Authority Structure

```
BRAND: Key2BHP Auto Locksmith (LocalBusiness)
│
├── PILLAR 1: Emergency Services
│   ├── Emergency Auto Locksmith
│   └── Car Lockout Service
│
├── PILLAR 2: Car Key Services
│   ├── Car Key Replacement
│   ├── Lost Car Keys
│   ├── Spare Car Keys
│   ├── Car Key Cutting
│   └── Car Key Programming
│
├── PILLAR 3: Specialist Services
│   ├── Transponder Key Programming
│   ├── Remote Key Fob Replacement
│   ├── Ignition Repair & Replacement
│   └── Broken Key Extraction
│
└── PILLAR 4: Location Coverage
    ├── Manchester City Centre
    ├── Salford
    ├── Stockport
    ├── Bolton
    └── [8+ areas]
```

### Search Intent Coverage

| Intent Type | Pages | Optimization |
|------------|-------|--------------|
| **Transactional** | Service pages | "Get", "Book", "Call Now" CTAs |
| **Commercial** | Service pages | "Why Choose Us", comparisons |
| **Informational** | FAQ sections | "How to", "What is", guides |
| **Local** | Location pages | Area-specific content |
| **Emergency** | All pages | 24/7 availability prominent |

### Entity Relationships

**Core Entities:**
- Brand: Key2BHP Auto Locksmith
- Services: 11 distinct services
- Locations: Manchester + 8+ areas
- Problems: Lockout, lost keys, broken keys
- Solutions: Replacement, programming, extraction
- Vehicles: All major brands (Ford, BMW, Mercedes, etc.)

**Semantic Connections:**
- Service → Related Services (internal links)
- Service → Locations (contextual links)
- Location → All Services (service listings)
- Problem → Solution (content structure)

---

## 🔍 SEO Features

### Metadata Optimization

Every page includes:
- ✅ Unique, keyword-rich title tags
- ✅ Compelling meta descriptions (150-160 chars)
- ✅ Canonical URLs
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Keyword optimization (natural language)

### Schema Markup (JSON-LD)

- **LocalBusiness Schema** - Root layout (site-wide)
- **Service Schema** - All service pages
- **FAQ Schema** - Homepage + service pages
- **Breadcrumb Schema** - All pages
- **Emergency Service Schema** - Emergency pages

### Heading Hierarchy

Every page follows semantic HTML structure:
- **One H1** - Intent-optimized, unique per page
- **H2s** - Main sections
- **H3s** - Subsections
- **H4s** - Details

Example (Car Key Replacement):
```
H1: Car Key Replacement Manchester | Same Day Service
  H2: Professional Car Key Replacement in Manchester
  H2: How Car Key Replacement Works
    H3: 1. Contact Us
    H3: 2. We Come to You
    H3: 3. Key Created & Programmed
  H2: Types of Car Keys We Replace
    H3: Traditional Metal Keys
    H3: Transponder Keys
    H3: Remote Key Fobs
```

### Internal Linking Strategy

**Hub-Spoke Model:**
- Homepage → Service pillars + key locations
- Services hub → All service pages
- Service pages → Related services + relevant locations
- Location pages → All services + nearby areas

**Semantic Relationships:**
- Car Key Replacement ↔ Lost Car Keys (problem-solution)
- Car Key Replacement ↔ Car Key Programming (technical requirement)
- Car Lockout ↔ Emergency Locksmith (service type)

---

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
cd nextjs-app
npm install
```

### Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://key2bhp.co.uk
NEXT_PUBLIC_PHONE=+44-XXXX-XXXXXX
NEXT_PUBLIC_EMAIL=info@key2bhp.co.uk
NEXT_PUBLIC_BUSINESS_NAME=Key2BHP Auto Locksmith
```

### Development

```bash
npm run dev
```

Visit `http://localhost:3000`

### Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

---

## 📄 Page Structure

### Service Page Template

Every service page includes:

1. **Hero Section** - H1, emergency CTA, trust badges
2. **Service Overview** - What we do, how it works
3. **Process Steps** - 1-2-3 step breakdown
4. **Service Details** - Types, options, specifics
5. **Why Choose Us** - Unique value propositions
6. **Coverage Area** - Manchester + surrounding areas
7. **FAQ Section** - Common questions with schema
8. **Related Services** - Internal links
9. **CTA Section** - Phone number, contact form

### Location Page Template

Every location page includes:

1. **Hero Section** - H1 with location, emergency CTA
2. **Services Available** - All services in this area
3. **Coverage Specifics** - Sub-areas covered
4. **Why Choose Us Locally** - Local benefits
5. **Nearby Areas** - Related location pages
6. **FAQ** - Location-specific questions
7. **CTA Section** - Phone number, contact

---

## 🎨 Design System

### Colors (HSL)

```css
--primary: 220 68% 18%        /* Navy blue */
--accent: 25 100% 50%         /* Orange */
--background: 0 0% 100%       /* White */
--foreground: 220 68% 18%     /* Navy text */
```

### Typography

- **Headings**: Bold, navy blue
- **Body**: Regular, dark gray
- **CTAs**: Bold, white on orange

### Components

- **Buttons**: Orange primary, white secondary
- **Cards**: White with border, hover effects
- **Forms**: Clean, accessible inputs
- **Navigation**: Fixed navbar, mobile-responsive

---

## 📊 SEO Checklist

### Per-Page Requirements

- ✅ One clear H1 (intent-optimized)
- ✅ Logical H2-H4 hierarchy
- ✅ Unique meta title
- ✅ Compelling meta description
- ✅ Canonical URL
- ✅ Open Graph tags
- ✅ Schema markup
- ✅ Internal links (3-5 minimum)
- ✅ CTA sections
- ✅ Mobile-responsive
- ✅ Fast loading

### Content Quality

- ✅ Natural language (no keyword stuffing)
- ✅ User-focused content
- ✅ Answer user questions
- ✅ Provide value
- ✅ Clear CTAs
- ✅ Trust signals

---

## 🔗 Key URLs

### Main Pages
- `/` - Homepage
- `/about` - About page
- `/contact` - Contact page
- `/services` - Services hub
- `/areas` - Areas hub

### Service Pages
- `/services/car-key-replacement`
- `/services/lost-car-keys`
- `/services/car-lockout`
- `/services/car-key-programming`
- `/services/emergency-locksmith`
- `/services/car-key-cutting`
- `/services/spare-car-keys`
- `/services/transponder-key-programming`
- `/services/key-fob-replacement`
- `/services/ignition-repair`
- `/services/broken-key-extraction`

### Location Pages
- `/areas/manchester-city-centre`
- `/areas/salford`
- `/areas/stockport`
- `/areas/bolton`
- `/areas/oldham`
- `/areas/rochdale`
- `/areas/bury`
- `/areas/trafford`

---

## 🧪 Testing

### SEO Validation

1. **Google Rich Results Test**
   - https://search.google.com/test/rich-results
   - Test all pages with schema markup

2. **Schema Markup Validator**
   - https://validator.schema.org/
   - Validate JSON-LD schemas

3. **PageSpeed Insights**
   - https://pagespeed.web.dev/
   - Test Core Web Vitals

4. **Mobile-Friendly Test**
   - https://search.google.com/test/mobile-friendly
   - Ensure mobile optimization

### Manual Testing

- [ ] All pages load correctly
- [ ] Navigation works (desktop + mobile)
- [ ] Internal links work
- [ ] Forms submit correctly
- [ ] Phone links work on mobile
- [ ] Schema validates
- [ ] Metadata displays correctly
- [ ] Images load and optimize
- [ ] Responsive on all devices

---

## 📈 Performance Targets

- **Lighthouse Score**: 90+ (all categories)
- **Core Web Vitals**: All green
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.5s

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

The site can be deployed to:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Any Node.js hosting

---

## 📝 Content Guidelines

### Writing Style

- **Tone**: Professional, helpful, trustworthy
- **Voice**: Active, direct, clear
- **Length**: Comprehensive but scannable
- **Keywords**: Natural integration, no stuffing

### SEO Best Practices

1. **One topic per page** - Clear focus
2. **Answer user questions** - FAQ sections
3. **Use natural language** - No keyword stuffing
4. **Include CTAs** - Clear next steps
5. **Internal linking** - Semantic connections
6. **Local optimization** - Area-specific content

---

## 🔧 Maintenance

### Regular Updates

- Update service descriptions
- Add new location pages
- Refresh testimonials
- Update FAQ sections
- Monitor schema validation
- Check broken links
- Update metadata as needed

### SEO Monitoring

- Google Search Console
- Google Analytics
- Rank tracking
- Schema validation
- Core Web Vitals
- Mobile usability

---

## 📞 Support

For questions or issues:
- **Email**: info@key2bhp.co.uk
- **Phone**: [Your phone number]

---

## 📄 License

Private - Key2BHP Auto Locksmith

---

## 🙏 Credits

- **Framework**: Next.js 14+
- **SEO Strategy**: Koray Tuğberk GÜBÜR's Semantic SEO Framework
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

---

**Built with ❤️ for Key2BHP Auto Locksmith**
