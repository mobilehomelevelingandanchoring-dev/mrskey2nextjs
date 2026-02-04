import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/metadata';
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import ServicesGrid from '@/components/home/ServicesGrid';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';
import Footer from '@/components/layout/FooterEnhanced';
import MobileCallButton from '@/components/layout/MobileCallButton';
import Marquee from '@/components/home/Marquee';
import Gallery from '@/components/home/ServicesAndGallery';
import LocationsGrid from '@/components/home/LocationsGrid';
import TrustSection from '@/components/sections/TrustSection';

export const metadata: Metadata = {
    title: '24/7 Mobile Auto Locksmith Manchester | Emergency Car Keys | Key 2 BHP',
    description: SITE_CONFIG.description,
};

export default function HomePage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: SITE_CONFIG.url },
    ]);

    const faqSchema = generateFAQSchema([
        {
            q: 'Do you offer 24/7 emergency auto locksmith services in Manchester?',
            a: 'Yes, Key 2 BHP Auto Locksmith Ltd provides 24/7 emergency services across Manchester and Tameside. We respond to car lockouts and lost keys any time of day or night.',
        },
        {
            q: 'How quickly can you replace lost car keys?',
            a: 'We offer same-day car key replacement. Our mobile locksmiths typically arrive within 30-60 minutes in Manchester and can cut and program new keys on-site.',
        },
        {
            q: 'What areas do you cover?',
            a: 'We cover all of Manchester, Denton, Stockport, Hyde, and the Tameside area. Our mobile service comes directly to your location.',
        },
    ]);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="min-h-screen selection:bg-[hsl(25,100%,50%)] selection:text-white">
                <Navbar />
                <main>
                    <Hero />
                    <Marquee />
                    <ServicesGrid />
                    <LocationsGrid />
                    <Gallery />
                    <WhyChooseUs />
                    <TrustSection />
                    <Testimonials />
                    <Marquee />
                </main>
                <Footer />
                <MobileCallButton />
            </div>
        </>
    );
}
