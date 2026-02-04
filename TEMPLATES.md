# Quick Reference: Page Creation Templates
## Copy-Paste Templates for Remaining Pages

---

## 🔑 Service Page Template

### File: `app/services/[service-slug]/page.tsx`

```typescript
import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Clock, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { generateServiceMetadata, SERVICES, SITE_CONFIG } from '@/lib/metadata';
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileCallButton from '@/components/layout/MobileCallButton';

// CHANGE THIS: Use the correct service key from SERVICES object
export const metadata: Metadata = generateServiceMetadata(SERVICES.lostCarKeys);

export default function LostCarKeysPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Lost Car Keys Manchester', // CHANGE THIS
    description: 'Emergency replacement service for lost car keys in Manchester...', // CHANGE THIS
    serviceType: 'Auto Locksmith Service',
    areaServed: ['Manchester', 'Greater Manchester'],
    url: 'https://key2bhp.co.uk/services/lost-car-keys', // CHANGE THIS
  });

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://key2bhp.co.uk' },
      { name: 'Services', url: 'https://key2bhp.co.uk/services' },
      { name: 'Lost Car Keys', url: 'https://key2bhp.co.uk/services/lost-car-keys' }, // CHANGE THIS
    ],
  });

  const faqSchema = generateFAQSchema({
    questions: [
      // ADD SERVICE-SPECIFIC QUESTIONS
      {
        question: 'What should I do if I lost my car keys?',
        answer: 'Contact Key2BHP immediately. We provide emergency car key replacement...',
      },
      // Add 4-6 questions
    ],
  });

  return (
    <>
      {/* Schema markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen">
        <Navbar />
        
        <main>
          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-[hsl(220,68%,18%)] to-[hsl(220,68%,25%)] text-white py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                {/* CHANGE THIS H1 - Make it intent-specific */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Lost Your Car Keys? 24/7 Emergency Replacement in Manchester
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                  {/* CHANGE THIS - Service-specific description */}
                  Fast emergency car key replacement when you've lost your keys...
                </p>
                {/* CTAs - Keep these */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a href={`tel:${SITE_CONFIG.phone}`} className="inline-flex items-center gap-2 bg-[hsl(25,100%,50%)] hover:bg-[hsl(25,100%,45%)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl">
                    <Phone className="w-5 h-5" />
                    Call Now for Immediate Help
                  </a>
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[hsl(220,68%,18%)] hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all">
                    Get a Free Quote
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Service Overview - CUSTOMIZE CONTENT */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[hsl(220,68%,18%)]">
                  {/* CHANGE THIS H2 */}
                  What to Do When You Lose Your Car Keys
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  {/* ADD SERVICE-SPECIFIC CONTENT */}
                </p>
              </div>
            </div>
          </section>

          {/* Add more sections as needed */}
          {/* - How It Works */}
          {/* - Service Details */}
          {/* - Why Choose Us */}
          {/* - Coverage Area */}
          {/* - FAQ */}
          {/* - Related Services */}
          {/* - CTA */}

        </main>

        <Footer />
        <MobileCallButton />
      </div>
    </>
  );
}
```

---

## 📍 Location Page Template

### File: `app/areas/[area-slug]/page.tsx`

```typescript
import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Clock, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { generateLocationMetadata, LOCATIONS, SITE_CONFIG } from '@/lib/metadata';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileCallButton from '@/components/layout/MobileCallButton';

// CHANGE THIS: Use correct location key
export const metadata: Metadata = generateLocationMetadata(LOCATIONS.stockport);

export default function StockportPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Auto Locksmith Stockport', // CHANGE THIS
    description: 'Professional mobile auto locksmith service in Stockport...', // CHANGE THIS
    serviceType: 'Mobile Auto Locksmith Service',
    areaServed: ['Stockport', 'Cheadle', 'Bramhall', 'Hazel Grove'], // CHANGE THIS
    url: 'https://key2bhp.co.uk/areas/stockport', // CHANGE THIS
  });

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://key2bhp.co.uk' },
      { name: 'Coverage Areas', url: 'https://key2bhp.co.uk/areas' },
      { name: 'Stockport', url: 'https://key2bhp.co.uk/areas/stockport' }, // CHANGE THIS
    ],
  });

  return (
    <>
      {/* Schema markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen">
        <Navbar />
        
        <main>
          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-[hsl(220,68%,18%)] to-[hsl(220,68%,25%)] text-white py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                {/* CHANGE THIS H1 - Include location name */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Auto Locksmith Stockport | 24/7 Mobile Service | Key2BHP
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                  {/* CHANGE THIS - Location-specific description */}
                  Professional mobile auto locksmith serving all Stockport areas...
                </p>
                {/* CTAs - Keep these */}
              </div>
            </div>
          </section>

          {/* Services Available - List all services */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                  Car Locksmith Services in Stockport {/* CHANGE LOCATION */}
                </h2>
                {/* Service cards with links to service pages */}
              </div>
            </div>
          </section>

          {/* Coverage Areas - CUSTOMIZE SUB-AREAS */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                  Stockport Areas We Cover {/* CHANGE LOCATION */}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {/* ADD LOCATION-SPECIFIC SUB-AREAS */}
                  {['Cheadle', 'Bramhall', 'Hazel Grove', 'Marple', 'Reddish', 'Heaton Moor'].map((area, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[hsl(25,100%,50%)]" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Add more sections */}
          {/* - Why Choose Us */}
          {/* - Nearby Areas */}
          {/* - FAQ */}
          {/* - CTA */}

        </main>

        <Footer />
        <MobileCallButton />
      </div>
    </>
  );
}
```

---

## 📋 H1 Examples by Intent

### Emergency Intent
```
"Locked Out of Your Car in Manchester? Fast Help Available"
"24/7 Emergency Auto Locksmith Manchester | Fast Response"
"Lost Your Car Keys? 24/7 Emergency Replacement in Manchester"
```

### Transactional Intent
```
"Car Key Replacement Manchester | Same Day Service"
"Car Key Programming Manchester | Transponder & Smart Keys"
"Spare Car Keys Manchester | Same Day Duplication Service"
```

### Problem-Solving Intent
```
"Lost Your Car Keys? Emergency Replacement Service Manchester"
"Broken Key in Ignition? Professional Extraction Service"
"Car Key Won't Turn? Ignition Repair Manchester"
```

### Local Intent
```
"Auto Locksmith [Area] | 24/7 Mobile Service | Key2BHP"
"Mobile Locksmith [Area] | Emergency Car Key Services"
```

---

## 🔗 Internal Linking Patterns

### Service Page Links To:
```typescript
// Related services (semantic relationships)
<Link href="/services/lost-car-keys">Lost Car Keys</Link>
<Link href="/services/spare-car-keys">Spare Car Keys</Link>
<Link href="/services/car-key-programming">Car Key Programming</Link>

// Relevant locations
<Link href="/areas/manchester-city-centre">Manchester City Centre</Link>
<Link href="/areas/salford">Salford</Link>

// Hub pages
<Link href="/services">All Services</Link>
<Link href="/contact">Contact Us</Link>
```

### Location Page Links To:
```typescript
// All services
{services.map(service => (
  <Link href={`/services/${service.slug}`}>{service.name}</Link>
))}

// Nearby areas
<Link href="/areas/manchester-city-centre">Manchester City Centre</Link>
<Link href="/areas/trafford">Trafford</Link>

// Hub pages
<Link href="/areas">All Areas</Link>
<Link href="/contact">Contact Us</Link>
```

---

## ❓ FAQ Question Templates

### Service Pages
```
"How long does [service] take?"
"Can you [service] for all makes and models?"
"Do I need to bring my car to you?"
"What if I've lost all my car keys?"
"Will my insurance cover [service]?"
"How much does [service] cost?"
```

### Location Pages
```
"How quickly can you reach me in [location]?"
"Do you cover all areas of [location]?"
"Can you help if I'm locked out in [specific area]?"
"What if I need [service] late at night in [location]?"
"Do you charge extra for [location]?"
```

---

## 🎯 Service-Specific Content Ideas

### Lost Car Keys
- What to do immediately
- How we create keys without originals
- Cost comparison vs dealership
- Prevention tips

### Car Lockout
- Non-destructive entry methods
- Average response time
- What to do while waiting
- Prevention tips

### Car Key Programming
- Types of keys we program
- Programming process explained
- Compatibility with vehicles
- On-site vs workshop

### Emergency Locksmith
- 24/7 availability emphasis
- Response time guarantees
- Emergency scenarios covered
- Priority service

---

## 📊 Content Length Guidelines

### Service Pages
- **Minimum**: 1500 words
- **Optimal**: 2000-2500 words
- **Sections**: 7-10 major sections
- **FAQs**: 5-7 questions

### Location Pages
- **Minimum**: 1000 words
- **Optimal**: 1200-1500 words
- **Sections**: 5-7 major sections
- **FAQs**: 4-6 questions

### Hub Pages
- **Minimum**: 800 words
- **Optimal**: 1000-1200 words
- **Focus**: Overview + links

---

## ✅ Pre-Launch Checklist

### Per Page
- [ ] H1 is unique and intent-optimized
- [ ] H2-H4 hierarchy is logical
- [ ] Meta title is unique (50-60 chars)
- [ ] Meta description is compelling (150-160 chars)
- [ ] Schema markup validates
- [ ] Internal links work (3-5 minimum)
- [ ] CTAs are prominent
- [ ] Mobile responsive
- [ ] Images have alt text
- [ ] No broken links

### Site-Wide
- [ ] All pages build without errors
- [ ] Sitemap generates correctly
- [ ] Robots.txt is correct
- [ ] 404 page works
- [ ] Navigation works on all pages
- [ ] Footer links work
- [ ] Phone links work on mobile
- [ ] Forms submit correctly

---

**Use these templates to quickly create all remaining pages!**
