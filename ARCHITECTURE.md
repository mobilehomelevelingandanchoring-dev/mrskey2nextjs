# 🗺️ Complete Site Architecture
## Key2BHP Auto Locksmith - Semantic SEO Structure

```
┌─────────────────────────────────────────────────────────────────┐
│                         HOMEPAGE (/)                             │
│  H1: "24/7 Mobile Auto Locksmith in Manchester | Key2BHP"      │
│  Intent: Brand + Local Discovery                                │
│  Schema: LocalBusiness + FAQ + Breadcrumb                       │
└─────────────────────────────────────────────────────────────────┘
                              │
                ┌─────────────┼─────────────┐
                │             │             │
                ▼             ▼             ▼
    ┌───────────────┐  ┌───────────┐  ┌──────────┐
    │   SERVICES    │  │   AREAS   │  │  ABOUT   │
    │     HUB       │  │    HUB    │  │ CONTACT  │
    └───────────────┘  └───────────┘  └──────────┘
            │                 │
    ┌───────┴────────┐       └──────────┐
    │                │                   │
    ▼                ▼                   ▼

┌─────────────────────────────────────────────────────────────────┐
│                    SERVICE PAGES (11 PAGES)                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  EMERGENCY SERVICES (Emergency Intent)                          │
│  ├─ /services/emergency-locksmith                              │
│  │  H1: "24/7 Emergency Auto Locksmith Manchester"             │
│  └─ /services/car-lockout                                      │
│     H1: "Locked Out of Your Car in Manchester?"                │
│                                                                  │
│  KEY SERVICES (Transactional Intent)                            │
│  ├─ /services/car-key-replacement ✅ COMPLETE                   │
│  │  H1: "Car Key Replacement Manchester | Same Day Service"    │
│  ├─ /services/lost-car-keys                                    │
│  │  H1: "Lost Your Car Keys? Emergency Replacement"            │
│  ├─ /services/car-key-programming                              │
│  │  H1: "Car Key Programming Manchester"                       │
│  ├─ /services/car-key-cutting                                  │
│  │  H1: "Professional Car Key Cutting Manchester"              │
│  └─ /services/spare-car-keys                                   │
│     H1: "Spare Car Keys Manchester | Same Day"                 │
│                                                                  │
│  SPECIALIST SERVICES (Commercial Intent)                        │
│  ├─ /services/transponder-key-programming                      │
│  │  H1: "Transponder Key Programming Manchester"               │
│  ├─ /services/key-fob-replacement                              │
│  │  H1: "Car Key Fob Replacement Manchester"                   │
│  ├─ /services/ignition-repair                                  │
│  │  H1: "Car Ignition Repair & Replacement"                    │
│  └─ /services/broken-key-extraction                            │
│     H1: "Broken Key Extraction Manchester"                     │
│                                                                  │
│  Each Service Page Contains:                                    │
│  • Service Schema + FAQ Schema + Breadcrumb Schema             │
│  • 7-10 major sections (H2s)                                   │
│  • Links to related services                                   │
│  • Links to relevant locations                                 │
│  • Emergency CTA sections                                      │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                   LOCATION PAGES (8+ PAGES)                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  GREATER MANCHESTER AREAS (Local Intent)                        │
│  ├─ /areas/manchester-city-centre                              │
│  │  H1: "Auto Locksmith Manchester City Centre"                │
│  ├─ /areas/salford ✅ COMPLETE                                  │
│  │  H1: "Auto Locksmith Salford | 24/7 Mobile Service"         │
│  ├─ /areas/stockport                                           │
│  │  H1: "Auto Locksmith Stockport | 24/7 Mobile"               │
│  ├─ /areas/bolton                                              │
│  │  H1: "Auto Locksmith Bolton | Emergency Service"            │
│  ├─ /areas/oldham                                              │
│  │  H1: "Auto Locksmith Oldham | Fast Response"                │
│  ├─ /areas/rochdale                                            │
│  │  H1: "Auto Locksmith Rochdale | Mobile Service"             │
│  ├─ /areas/bury                                                │
│  │  H1: "Auto Locksmith Bury | 24/7 Available"                 │
│  └─ /areas/trafford                                            │
│     H1: "Auto Locksmith Trafford | Emergency Help"             │
│                                                                  │
│  Each Location Page Contains:                                   │
│  • Service Schema + Breadcrumb Schema                          │
│  • All services available in area                              │
│  • Sub-areas covered                                           │
│  • Links to nearby areas                                       │
│  • Location-specific FAQ                                       │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🔗 Internal Linking Strategy

```
                    HOMEPAGE
                       │
        ┌──────────────┼──────────────┐
        │              │              │
    SERVICES        AREAS          ABOUT
      HUB            HUB          CONTACT
        │              │
        └──────┬───────┴──────┐
               │              │
        SERVICE PAGES    LOCATION PAGES
               │              │
               └──────┬───────┘
                      │
              CROSS-LINKING
        (Services ↔ Locations)
```

### Linking Rules

**Homepage Links To:**
- Services hub
- Areas hub
- Featured services (top 3-5)
- Key locations (top 3-5)
- About, Contact

**Services Hub Links To:**
- All 11 service pages
- Areas hub
- Homepage

**Service Pages Link To:**
- Related services (3-5 semantic connections)
- Relevant locations (2-4 contextual)
- Services hub (breadcrumb)
- Contact page (CTA)

**Areas Hub Links To:**
- All 8+ location pages
- Services hub
- Homepage

**Location Pages Link To:**
- All services (service grid)
- Nearby areas (3-5)
- Areas hub (breadcrumb)
- Contact page (CTA)

---

## 📊 Semantic Relationships

### Service-to-Service Connections

```
Car Key Replacement
├─→ Lost Car Keys (problem-solution)
├─→ Spare Car Keys (preventive)
├─→ Car Key Programming (technical requirement)
└─→ Car Key Cutting (process step)

Car Lockout
├─→ Emergency Locksmith (service type)
├─→ Lost Car Keys (common cause)
└─→ Mobile Locksmith (delivery method)

Car Key Programming
├─→ Transponder Programming (specialized)
├─→ Key Fob Replacement (related tech)
└─→ Car Key Replacement (often paired)

Lost Car Keys
├─→ Car Key Replacement (solution)
├─→ Emergency Locksmith (urgency)
└─→ Spare Car Keys (prevention)
```

### Service-to-Location Connections

```
Emergency Services → All Locations
(24/7 availability everywhere)

Car Key Replacement → Manchester City Centre, Salford, Stockport
(High demand areas)

Car Lockout → All Locations
(Emergency service everywhere)

Specialist Services → Manchester City Centre, Salford
(Business districts)
```

---

## 🎯 Query Dependency Chains

### Chain 1: Lost Keys → Replacement
```
User Query Flow:
"lost my car keys"
  ↓
"car key replacement near me"
  ↓
"how much does car key replacement cost"
  ↓
"mobile auto locksmith"
  ↓
"emergency car locksmith manchester"

Pages That Cover This:
1. /services/lost-car-keys (entry point)
2. /services/car-key-replacement (solution)
3. /services/emergency-locksmith (urgency)
4. /areas/manchester-city-centre (location)
```

### Chain 2: Lockout → Entry
```
User Query Flow:
"locked out of car"
  ↓
"car lockout service"
  ↓
"auto locksmith near me"
  ↓
"24 hour car locksmith"
  ↓
"emergency locksmith manchester"

Pages That Cover This:
1. /services/car-lockout (entry point)
2. /services/emergency-locksmith (service type)
3. /areas/[location] (local service)
4. / (brand discovery)
```

### Chain 3: Key Programming
```
User Query Flow:
"car key not working"
  ↓
"car key programming"
  ↓
"transponder key programming"
  ↓
"auto locksmith key programming"
  ↓
"mobile key programming manchester"

Pages That Cover This:
1. /services/car-key-programming (entry point)
2. /services/transponder-key-programming (specialized)
3. /services/key-fob-replacement (related)
4. /areas/manchester-city-centre (location)
```

---

## 📱 Mobile-First User Journey

```
USER SCENARIO: Locked out of car at 2 AM in Salford

1. Google Search: "car lockout salford"
   ↓
2. Finds: /areas/salford OR /services/car-lockout
   ↓
3. Sees: H1 + "24/7 Emergency" + Phone CTA
   ↓
4. Clicks: Phone number (mobile click-to-call)
   ↓
5. Calls: Key2BHP Auto Locksmith
   ↓
6. Result: Locksmith arrives in 30-60 minutes

SEO Elements That Make This Work:
✅ Local page optimized for "salford"
✅ Emergency intent in H1
✅ 24/7 availability prominent
✅ Click-to-call phone button
✅ Fast mobile loading
✅ Clear service description
✅ Trust signals (response time)
```

---

## 🏗️ Page Component Structure

```
Every Page Contains:

┌─────────────────────────────────┐
│          <head>                 │
│  • Metadata (title, description)│
│  • Open Graph tags              │
│  • Schema JSON-LD               │
└─────────────────────────────────┘
           │
┌─────────────────────────────────┐
│         <Navbar />              │
│  • Logo                         │
│  • Navigation links             │
│  • Mobile menu                  │
│  • Phone number                 │
└─────────────────────────────────┘
           │
┌─────────────────────────────────┐
│         <main>                  │
│                                 │
│  ┌───────────────────────────┐ │
│  │    Hero Section           │ │
│  │  • H1 (unique)            │ │
│  │  • Description            │ │
│  │  • Primary CTA            │ │
│  │  • Trust badges           │ │
│  └───────────────────────────┘ │
│                                 │
│  ┌───────────────────────────┐ │
│  │    Content Sections       │ │
│  │  • H2 sections (5-10)     │ │
│  │  • H3 subsections         │ │
│  │  • Rich content           │ │
│  │  • Images/icons           │ │
│  └───────────────────────────┘ │
│                                 │
│  ┌───────────────────────────┐ │
│  │    FAQ Section            │ │
│  │  • H2: "FAQ"              │ │
│  │  • Questions (5-7)        │ │
│  │  • FAQ Schema             │ │
│  └───────────────────────────┘ │
│                                 │
│  ┌───────────────────────────┐ │
│  │    Related Links          │ │
│  │  • Services/Areas         │ │
│  │  • Internal links         │ │
│  └───────────────────────────┘ │
│                                 │
│  ┌───────────────────────────┐ │
│  │    CTA Section            │ │
│  │  • Phone number           │ │
│  │  • Contact form link      │ │
│  │  • Emergency availability │ │
│  └───────────────────────────┘ │
└─────────────────────────────────┘
           │
┌─────────────────────────────────┐
│         <Footer />              │
│  • Services links               │
│  • Areas links                  │
│  • About/Contact                │
│  • Social media                 │
│  • Copyright                    │
└─────────────────────────────────┘
           │
┌─────────────────────────────────┐
│    <MobileCallButton />         │
│  • Sticky phone button          │
│  • Mobile-only                  │
│  • Click-to-call                │
└─────────────────────────────────┘
```

---

## 📈 SEO Performance Targets

```
Technical SEO:
├─ Lighthouse Score: 90+ (all categories)
├─ Core Web Vitals: All green
├─ Mobile-Friendly: 100%
├─ Schema Validation: Pass
└─ Sitemap: Auto-generated

On-Page SEO:
├─ Unique H1: Every page
├─ Meta Title: Unique, 50-60 chars
├─ Meta Description: Unique, 150-160 chars
├─ Internal Links: 3-5 per page minimum
└─ Image Alt Text: All images

Content SEO:
├─ Word Count: 1500+ (service), 1000+ (location)
├─ Keyword Density: Natural (no stuffing)
├─ Readability: Grade 8-10
├─ FAQ Sections: 5-7 questions
└─ User Intent: Clearly addressed
```

---

## 🎯 Implementation Priority

```
PHASE 1: Foundation (✅ COMPLETE)
├─ Next.js setup
├─ Configuration files
├─ Library utilities
├─ Schema generators
└─ Metadata definitions

PHASE 2: Components (🟡 PENDING)
├─ Layout components
├─ Home components
└─ UI components

PHASE 3: Core Pages (🟡 PENDING)
├─ Service pages (11)
├─ Location pages (8)
└─ Supporting pages (3)

PHASE 4: Testing (🟡 PENDING)
├─ Local testing
├─ Schema validation
├─ Link checking
└─ Mobile testing

PHASE 5: Launch (🟡 PENDING)
├─ Production build
├─ Deployment
├─ Monitoring
└─ Optimization
```

---

**Use this diagram to understand the complete site structure and relationships!**
