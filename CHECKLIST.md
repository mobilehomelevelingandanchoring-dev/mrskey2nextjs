# ✅ Implementation Checklist
## Key2BHP Auto Locksmith - Next.js Migration

Track your progress as you complete the migration.

---

## 📦 Phase 1: Foundation (COMPLETE ✅)

- [x] Create Next.js project structure
- [x] Configure package.json with dependencies
- [x] Set up TypeScript configuration
- [x] Configure Tailwind CSS
- [x] Create global styles
- [x] Build schema.ts utilities
- [x] Build metadata.ts utilities
- [x] Create root layout with LocalBusiness schema
- [x] Create dynamic sitemap
- [x] Create robots.txt configuration
- [x] Create homepage with schemas
- [x] Create example service page (car-key-replacement)
- [x] Create example location page (salford)
- [x] Write comprehensive documentation

**Status**: ✅ 100% Complete

---

## 🧩 Phase 2: Component Migration

### Layout Components

- [ ] Copy Navbar.tsx to components/layout/
  - [ ] Replace React Router Link with Next.js Link
  - [ ] Update all `to="/path"` to `href="/path"`
  - [ ] Update service links to new structure
  - [ ] Test navigation works

- [ ] Copy Footer.tsx to components/layout/
  - [ ] Replace React Router Link with Next.js Link
  - [ ] Update all links to new structure
  - [ ] Add links to new service pages
  - [ ] Add links to new location pages
  - [ ] Test all footer links work

- [ ] Copy MobileCallButton.tsx to components/layout/
  - [ ] Verify click-to-call functionality
  - [ ] Test on mobile devices
  - [ ] Ensure sticky positioning works

### Home Components

- [ ] Copy Hero.tsx to components/home/
  - [ ] Update service links to `/services/[slug]`
  - [ ] Replace React Router Links
  - [ ] Test CTAs work

- [ ] Copy ServicesGrid.tsx to components/home/
  - [ ] Update service links to new structure
  - [ ] Ensure all 11 services are listed
  - [ ] Test links navigate correctly

- [ ] Copy WhyChooseUs.tsx to components/home/
  - [ ] Verify content displays correctly
  - [ ] No changes needed (likely)

- [ ] Copy Testimonials.tsx to components/home/
  - [ ] Verify testimonials display
  - [ ] No changes needed (likely)

- [ ] Copy Marquee.tsx to components/home/
  - [ ] Verify animation works
  - [ ] No changes needed (likely)

- [ ] Copy ServicesAndGallery.tsx to components/home/
  - [ ] Convert .jsx to .tsx if needed
  - [ ] Update any links
  - [ ] Test gallery functionality

### UI Components

- [ ] Copy entire ui/ directory to components/ui/
  - [ ] No changes needed
  - [ ] shadcn/ui components work as-is

**Status**: ⬜ 0% Complete (0/9 tasks)

---

## 📄 Phase 3: Service Pages

### Emergency Services

- [ ] Create app/services/emergency-locksmith/page.tsx
  - [ ] H1: "24/7 Emergency Auto Locksmith Manchester | Fast Response"
  - [ ] Add Service schema
  - [ ] Add FAQ schema (5-7 questions)
  - [ ] Add Breadcrumb schema
  - [ ] Link to related services
  - [ ] Link to all locations
  - [ ] Add emergency-specific content
  - [ ] Test page renders

- [ ] Create app/services/car-lockout/page.tsx
  - [ ] H1: "Locked Out of Your Car in Manchester? Fast Help Available"
  - [ ] Add Service schema
  - [ ] Add FAQ schema
  - [ ] Add Breadcrumb schema
  - [ ] Link to emergency-locksmith
  - [ ] Link to lost-car-keys
  - [ ] Add lockout-specific content
  - [ ] Test page renders

### Key Services

- [ ] Create app/services/lost-car-keys/page.tsx
  - [ ] H1: "Lost Your Car Keys? 24/7 Emergency Replacement in Manchester"
  - [ ] Add schemas
  - [ ] Link to car-key-replacement
  - [ ] Link to emergency-locksmith
  - [ ] Test page renders

- [ ] Create app/services/car-key-programming/page.tsx
  - [ ] H1: "Car Key Programming Manchester | Transponder & Smart Keys"
  - [ ] Add schemas
  - [ ] Link to transponder-key-programming
  - [ ] Link to key-fob-replacement
  - [ ] Test page renders

- [ ] Create app/services/car-key-cutting/page.tsx
  - [ ] H1: "Professional Car Key Cutting Manchester | Mobile Service"
  - [ ] Add schemas
  - [ ] Link to car-key-replacement
  - [ ] Link to spare-car-keys
  - [ ] Test page renders

- [ ] Create app/services/spare-car-keys/page.tsx
  - [ ] H1: "Spare Car Keys Manchester | Same Day Duplication Service"
  - [ ] Add schemas
  - [ ] Link to car-key-cutting
  - [ ] Link to car-key-replacement
  - [ ] Test page renders

### Specialist Services

- [ ] Create app/services/transponder-key-programming/page.tsx
  - [ ] H1: "Transponder Key Programming Manchester | All Vehicle Makes"
  - [ ] Add schemas
  - [ ] Link to car-key-programming
  - [ ] Test page renders

- [ ] Create app/services/key-fob-replacement/page.tsx
  - [ ] H1: "Car Key Fob Replacement Manchester | Remote Programming"
  - [ ] Add schemas
  - [ ] Link to car-key-programming
  - [ ] Test page renders

- [ ] Create app/services/ignition-repair/page.tsx
  - [ ] H1: "Car Ignition Repair & Replacement Manchester | Expert Service"
  - [ ] Add schemas
  - [ ] Add ignition-specific content
  - [ ] Test page renders

- [ ] Create app/services/broken-key-extraction/page.tsx
  - [ ] H1: "Broken Key Extraction Manchester | Emergency Service 24/7"
  - [ ] Add schemas
  - [ ] Link to emergency-locksmith
  - [ ] Test page renders

### Services Hub

- [ ] Create app/services/page.tsx
  - [ ] H1: "Auto Locksmith Services Manchester | Mobile Car Key Specialists"
  - [ ] List all 11 services with links
  - [ ] Add service categories
  - [ ] Add Breadcrumb schema
  - [ ] Test all links work

**Status**: ⬜ 0% Complete (0/11 tasks)

---

## 📍 Phase 4: Location Pages

### Areas Hub

- [ ] Create app/areas/page.tsx
  - [ ] H1: "Auto Locksmith Coverage Areas | Manchester & Greater Manchester"
  - [ ] List all 8+ areas with links
  - [ ] Add map or visual
  - [ ] Add Breadcrumb schema
  - [ ] Test all links work

### Individual Area Pages

- [ ] Create app/areas/manchester-city-centre/page.tsx
  - [ ] H1: "Auto Locksmith Manchester City Centre | 24/7 Mobile Service"
  - [ ] List all services available
  - [ ] Add sub-areas (M1, M2, M3, M4, etc.)
  - [ ] Link to nearby areas
  - [ ] Add schemas
  - [ ] Test page renders

- [ ] Create app/areas/stockport/page.tsx
  - [ ] H1: "Auto Locksmith Stockport | 24/7 Mobile Service"
  - [ ] Add Stockport-specific content
  - [ ] List sub-areas (Cheadle, Bramhall, etc.)
  - [ ] Add schemas
  - [ ] Test page renders

- [ ] Create app/areas/bolton/page.tsx
  - [ ] H1: "Auto Locksmith Bolton | 24/7 Mobile Service"
  - [ ] Add Bolton-specific content
  - [ ] Add schemas
  - [ ] Test page renders

- [ ] Create app/areas/oldham/page.tsx
  - [ ] H1: "Auto Locksmith Oldham | 24/7 Mobile Service"
  - [ ] Add Oldham-specific content
  - [ ] Add schemas
  - [ ] Test page renders

- [ ] Create app/areas/rochdale/page.tsx
  - [ ] H1: "Auto Locksmith Rochdale | 24/7 Mobile Service"
  - [ ] Add Rochdale-specific content
  - [ ] Add schemas
  - [ ] Test page renders

- [ ] Create app/areas/bury/page.tsx
  - [ ] H1: "Auto Locksmith Bury | 24/7 Mobile Service"
  - [ ] Add Bury-specific content
  - [ ] Add schemas
  - [ ] Test page renders

- [ ] Create app/areas/trafford/page.tsx
  - [ ] H1: "Auto Locksmith Trafford | 24/7 Mobile Service"
  - [ ] Add Trafford-specific content
  - [ ] Add schemas
  - [ ] Test page renders

**Status**: ⬜ 0% Complete (0/9 tasks)

---

## 📝 Phase 5: Supporting Pages

- [ ] Create app/about/page.tsx
  - [ ] H1: "About Key2BHP Auto Locksmith | Manchester's Trusted Mobile Locksmith"
  - [ ] Add company story
  - [ ] Add team information
  - [ ] Add qualifications/certifications
  - [ ] Add E-E-A-T signals
  - [ ] Add Breadcrumb schema
  - [ ] Test page renders

- [ ] Create app/contact/page.tsx
  - [ ] H1: "Contact Key2BHP Auto Locksmith | 24/7 Emergency Service Manchester"
  - [ ] Add contact form
  - [ ] Add phone number (prominent)
  - [ ] Add email address
  - [ ] Add service hours
  - [ ] Add coverage area info
  - [ ] Add Breadcrumb schema
  - [ ] Test form submission

- [ ] Create app/not-found.tsx
  - [ ] H1: "Page Not Found | Key2BHP Auto Locksmith"
  - [ ] Add friendly error message
  - [ ] Link to main pages
  - [ ] Add emergency contact info
  - [ ] Test 404 handling

**Status**: ⬜ 0% Complete (0/3 tasks)

---

## 🖼️ Phase 6: Assets & Configuration

### Images & Media

- [ ] Copy logo files to public/
- [ ] Create/add og-image.jpg (1200x630)
- [ ] Add favicon files
- [ ] Copy any service images
- [ ] Copy any location images
- [ ] Optimize all images for web

### Environment Variables

- [ ] Create .env.local file
- [ ] Add NEXT_PUBLIC_SITE_URL
- [ ] Add NEXT_PUBLIC_PHONE (actual number)
- [ ] Add NEXT_PUBLIC_EMAIL
- [ ] Add NEXT_PUBLIC_BUSINESS_NAME
- [ ] Update lib/metadata.ts to use env vars
- [ ] Update lib/schema.ts to use env vars

### Final Configuration

- [ ] Update phone numbers throughout site
- [ ] Update email addresses
- [ ] Update business address if needed
- [ ] Add Google verification code
- [ ] Add any analytics tracking codes

**Status**: ⬜ 0% Complete (0/12 tasks)

---

## 🧪 Phase 7: Testing & Validation

### Local Testing

- [ ] Run `npm install` successfully
- [ ] Run `npm run dev` without errors
- [ ] Test homepage loads
- [ ] Test all service pages load
- [ ] Test all location pages load
- [ ] Test all supporting pages load
- [ ] Test navigation works (desktop)
- [ ] Test navigation works (mobile)
- [ ] Test all internal links work
- [ ] Test phone links work on mobile
- [ ] Test forms submit correctly
- [ ] Test 404 page displays

### SEO Validation

- [ ] Validate homepage schema (Google Rich Results Test)
- [ ] Validate service page schemas
- [ ] Validate location page schemas
- [ ] Check all pages have unique H1s
- [ ] Check all pages have unique titles
- [ ] Check all pages have unique descriptions
- [ ] Verify sitemap generates correctly
- [ ] Verify robots.txt is correct
- [ ] Test mobile-friendliness (Google Test)
- [ ] Check Core Web Vitals (PageSpeed Insights)

### Content Review

- [ ] Proofread all service pages
- [ ] Proofread all location pages
- [ ] Check for keyword stuffing (none)
- [ ] Verify natural language throughout
- [ ] Check all CTAs are clear
- [ ] Verify trust signals present
- [ ] Check FAQ sections complete

### Build Testing

- [ ] Run `npm run build` successfully
- [ ] No TypeScript errors
- [ ] No build warnings
- [ ] All pages generate correctly
- [ ] Run `npm start` successfully
- [ ] Test production build locally

**Status**: ⬜ 0% Complete (0/32 tasks)

---

## 🚀 Phase 8: Deployment

### Pre-Deployment

- [ ] Final content review
- [ ] Final link check
- [ ] Final schema validation
- [ ] Backup current site (if applicable)
- [ ] Prepare deployment plan

### Deployment

- [ ] Choose hosting platform (Vercel recommended)
- [ ] Configure domain
- [ ] Set up environment variables on host
- [ ] Deploy to production
- [ ] Verify deployment successful
- [ ] Test live site

### Post-Deployment

- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Set up Google Analytics (if needed)
- [ ] Set up monitoring
- [ ] Test all pages on live site
- [ ] Test mobile on live site
- [ ] Monitor for errors

**Status**: ⬜ 0% Complete (0/14 tasks)

---

## 📊 Overall Progress

```
Phase 1: Foundation          ✅ 100% (14/14 tasks)
Phase 2: Components          ⬜   0% (0/9 tasks)
Phase 3: Service Pages       ⬜   0% (0/11 tasks)
Phase 4: Location Pages      ⬜   0% (0/9 tasks)
Phase 5: Supporting Pages    ⬜   0% (0/3 tasks)
Phase 6: Assets & Config     ⬜   0% (0/12 tasks)
Phase 7: Testing             ⬜   0% (0/32 tasks)
Phase 8: Deployment          ⬜   0% (0/14 tasks)

TOTAL PROGRESS: 14/104 tasks (13.5%)
```

---

## 🎯 Quick Win Tasks (Start Here)

These tasks will give you immediate visible progress:

1. [ ] Copy Navbar component (30 min)
2. [ ] Copy Footer component (20 min)
3. [ ] Copy Hero component (15 min)
4. [ ] Test homepage renders with components (5 min)
5. [ ] Create one service page using template (45 min)
6. [ ] Create one location page using template (30 min)

**Quick Wins Total**: ~2.5 hours for visible progress

---

## 📅 Suggested Timeline

### Day 1 (4 hours)
- [ ] Complete Phase 2: Components
- [ ] Create 2-3 service pages
- [ ] Test locally

### Day 2 (4 hours)
- [ ] Complete remaining service pages
- [ ] Create services hub
- [ ] Test all service pages

### Day 3 (3 hours)
- [ ] Create all location pages
- [ ] Create areas hub
- [ ] Test all location pages

### Day 4 (2 hours)
- [ ] Create supporting pages
- [ ] Add assets
- [ ] Configure environment

### Day 5 (2 hours)
- [ ] Complete testing
- [ ] Fix any issues
- [ ] Prepare for deployment

### Day 6 (1 hour)
- [ ] Deploy to production
- [ ] Post-deployment checks
- [ ] Submit sitemaps

**Total Estimated Time**: 16 hours

---

## 💡 Tips for Success

1. **Work in Order**: Complete phases sequentially
2. **Test Frequently**: Test after each component/page
3. **Use Templates**: Copy from TEMPLATES.md
4. **Validate Schema**: Check after each page
5. **Check Links**: Ensure all internal links work
6. **Mobile First**: Always test on mobile
7. **Take Breaks**: Don't rush, maintain quality

---

## 🆘 Troubleshooting

### If Components Don't Render
- Check import paths use `@/`
- Verify all dependencies installed
- Check for TypeScript errors

### If Links Don't Work
- Ensure using Next.js Link, not React Router
- Check href format (not `to`)
- Verify file structure matches routes

### If Schema Doesn't Validate
- Use Google Rich Results Test
- Check JSON syntax
- Verify all required fields present

### If Build Fails
- Check for TypeScript errors
- Verify all imports are correct
- Check for missing dependencies

---

**Save this file and check off tasks as you complete them!** ✅

**Current Status**: Foundation Complete, Ready for Component Migration

**Next Task**: Copy Navbar.tsx to components/layout/ and update Links
