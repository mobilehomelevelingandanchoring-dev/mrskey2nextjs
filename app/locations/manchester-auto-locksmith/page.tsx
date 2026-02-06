import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle2, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';
import { generateLocalBusinessSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/FooterEnhanced';
import MobileCallButton from '@/components/layout/MobileCallButton';

export const metadata: Metadata = {
    title: 'Auto Locksmith Manchester | 24/7 Emergency Car Key Service',
    description: `Manchester auto locksmith. Emergency car key replacement, lockouts, programming across M1-M99. 30-90 min response. UK Registered Company No. ${SITE_CONFIG.companyNumber}. Call ${SITE_CONFIG.phoneDisplay}.`,
};

const faqs = [
    {
        question: 'Do you cover all of Manchester postcodes?',
        answer: 'Yes, we cover all Manchester postcodes M1-M99, from City Centre (M1-M4) to Greater Manchester areas including Salford Quays, Didsbury, Chorlton, Withington, Fallowfield, and beyond the M60 motorway.',
    },
    {
        question: 'How quickly can you arrive in Manchester?',
        answer: 'Response times vary by location: Manchester City Centre 20-30 minutes, M1-M20 postcodes 30-60 minutes, Greater Manchester 60-90 minutes. Traffic conditions permitting.',
    },
    {
        question: 'Can you program keys for BMW, Mercedes, and Audi in Manchester?',
        answer: 'Yes, we specialize in German vehicle security systems including BMW EWS/CAS, Mercedes EIS/Keyless Go, Audi MQB, and VW KESSY using Autel IM608 Pro diagnostic equipment.',
    },
    {
        question: 'What if I am parked at Arndale Centre or other Manchester car parks?',
        answer: 'We access multi-storey car parks throughout Manchester including Arndale, Spinningfields, and NCP locations. Our vans are height-compatible or we carry portable equipment.',
    },
    {
        question: 'Are your prices fixed for Manchester call-outs?',
        answer: 'We provide a fixed quote before dispatch. No hidden charges, no premium night rates. Transparent pricing for all Manchester and Greater Manchester locations.',
    },
];

export default function ManchesterLocationPage() {
    const localBusinessSchema = generateLocalBusinessSchema({
        areaServed: [
            { '@type': 'City', name: 'Manchester' },
            { '@type': 'City', name: 'Salford' },
            { '@type': 'City', name: 'Trafford' },
            { '@type': 'City', name: 'Stockport' },
            { '@type': 'City', name: 'Tameside' },
        ],
    });

    const faqSchema = generateFAQSchema(faqs);

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: SITE_CONFIG.url },
        { name: 'Locations', url: `${SITE_CONFIG.url}/locations` },
        { name: 'Manchester Auto Locksmith', url: `${SITE_CONFIG.url}/locations/manchester-auto-locksmith` },
    ]);

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <div className="min-h-screen">
                <Navbar />

                <main>
                    {/* Hero Section */}
                    <section className="relative bg-gradient-to-br from-[hsl(220,68%,18%)] to-[hsl(220,68%,25%)] text-white py-20">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto text-center">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                    Auto Locksmith Manchester | 24/7 Emergency Service
                                </h1>
                                <p className="text-xl md:text-2xl mb-8 text-gray-100">
                                    Emergency car locksmith serving Manchester M1-M99 postcodes. Lost keys, lockouts, programming. 30-90 minute response across City Centre, Salford Quays, Didsbury, M60 motorway.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <a
                                        href={`tel:${SITE_CONFIG.phone}`}
                                        className="inline-flex items-center gap-2 bg-[hsl(25,100%,50%)] hover:bg-[hsl(25,100%,45%)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                                    >
                                        <Phone className="w-5 h-5" />
                                        Call Manchester: {SITE_CONFIG.phoneDisplay}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Authority Hook */}
                    <section className="py-16 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto border-l-4 border-[hsl(25,100%,50%)] pl-6">
                                <h2 className="text-2xl font-bold mb-4 text-[hsl(220,68%,18%)]">
                                    Professional Auto Locksmith Services Across Manchester
                                </h2>
                                <p className="text-lg text-gray-700 mb-4">
                                    {SITE_CONFIG.siteName} (UK Registered Company No. {SITE_CONFIG.companyNumber}) provides emergency auto locksmith services across all Manchester postcodes M1-M99. We cover Manchester City Centre, Northern Quarter, Spinningfields, Deansgate, along the M60 motorway corridor, and throughout Greater Manchester including Salford, Trafford, Stockport, Tameside, Bolton, and Oldham.
                                </p>
                                <p className="text-lg text-gray-700">
                                    Our mobile vans carry professional key programming equipment including Autel IM608 Pro, Lishi lock picks, precision laser cutting machines, and manufacturer-grade diagnostic tools for BMW, Mercedes, Audi, VW, Ford, and all major vehicle makes.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Service Benefits */}
                    <section className="py-16 bg-gray-50">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                                    Manchester Services
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        'Rapid Arrival: Fast response times in M1, M2, M3 and all Manchester postcodes.',
                                        'Best Prices: We beat national franchise quotes.',
                                        'All Vehicles: Cars, Vans, Trucks, and Motorcycles.',
                                        'Emergency 24/7: We work nights, weekends, and holidays.',
                                        'Warranty: 12-month guarantee on all new keys.',
                                    ].map((benefit, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-6 h-6 text-[hsl(25,100%,50%)] flex-shrink-0 mt-1" />
                                            <span className="text-lg">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* How It Works */}
                    <section className="py-16 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[hsl(220,68%,18%)]">
                                    Service Process
                                </h2>
                                <div className="space-y-8">
                                    {[
                                        {
                                            title: 'Call Us',
                                            desc: `Dial ${SITE_CONFIG.phoneDisplay}. Tell us your location in Manchester.`,
                                        },
                                        {
                                            title: 'Dispatch',
                                            desc: 'Our nearest mobile van is sent to you immediately.',
                                        },
                                        {
                                            title: 'Arrival',
                                            desc: 'Technician arrives and verifies vehicle ownership.',
                                        },
                                        {
                                            title: 'Job Complete',
                                            desc: 'We cut keys or open your car efficiently.',
                                        },
                                        {
                                            title: 'Payment',
                                            desc: 'Secure card payment or cash accepted.',
                                        },
                                    ].map((step, index) => (
                                        <div key={index} className="flex gap-4">
                                            <div className="flex-shrink-0 w-10 h-10 bg-[hsl(25,100%,50%)] text-white rounded-full flex items-center justify-center font-bold">
                                                {index + 1}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                                <p className="text-gray-700">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Local SEO Boost - NAP Block */}
                    <section className="py-16 bg-gray-50">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                                <h2 className="text-2xl font-bold mb-6 text-[hsl(220,68%,18%)]">
                                    Local Expertise
                                </h2>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <MapPin className="text-[hsl(25,100%,50%)] mt-1" />
                                            <div>
                                                <p className="font-bold">Address:</p>
                                                <p>{SITE_CONFIG.address}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Phone className="text-[hsl(25,100%,50%)] mt-1" />
                                            <div>
                                                <p className="font-bold">Phone:</p>
                                                <p>{SITE_CONFIG.phoneDisplay}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Clock className="text-[hsl(25,100%,50%)] mt-1" />
                                            <div>
                                                <p className="font-bold">Hours:</p>
                                                <p>{SITE_CONFIG.hours}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <ShieldCheck className="text-[hsl(25,100%,50%)] mt-1" />
                                            <div>
                                                <p className="font-bold">Business:</p>
                                                <p>{SITE_CONFIG.siteName}</p>
                                            </div>
                                        </div>
                                        <div className="pt-4">
                                            <a
                                                href={SITE_CONFIG.googleBusinessProfile}
                                                className="text-blue-600 hover:underline font-medium"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                View Google Business Profile
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                                        <p className="text-gray-500 font-medium">Google Map Embed Placeholder</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="py-16 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                                    Manchester FAQs
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        {
                                            q: 'Do you cover all of Manchester?',
                                            a: 'Yes, from the City Centre to Didsbury, Chorlton, Cheetham Hill, and beyond.',
                                        },
                                        {
                                            q: 'How quickly can you arrive in Manchester centre?',
                                            a: 'Traffic permitting, we aim for 30 minutes for emergency lockouts.',
                                        },
                                        {
                                            q: 'Can you replace a Audi key in Manchester?',
                                            a: 'Yes, we specialize in German vehicles including Audi, VW, and BMW.',
                                        },
                                        {
                                            q: 'What if I am parked in a multi-storey car park?',
                                            a: 'Our vans are height-restricted to enter most car parks, or we can carry equipment to your car.',
                                        },
                                        {
                                            q: 'Are your prices fixed?',
                                            a: 'We provide a quote before dispatch so you know exactly what to expect.',
                                        },
                                    ].map((faq, index) => (
                                        <div key={index} className="bg-gray-50 p-6 rounded-lg">
                                            <h3 className="font-bold mb-2">{faq.q}</h3>
                                            <p className="text-gray-700">{faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Conversion CTA */}
                    <section className="py-16 bg-gradient-to-br from-[hsl(220,68%,18%)] to-[hsl(220,68%,25%)] text-white">
                        <div className="container mx-auto px-4">
                            <div className="max-w-3xl mx-auto text-center">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    Need a Locksmith in Manchester?
                                </h2>
                                <p className="text-xl mb-8 text-gray-100">
                                    We are the local experts you can trust. Call us 24/7.
                                </p>
                                <a
                                    href={`tel:${SITE_CONFIG.phone}`}
                                    className="inline-flex items-center gap-2 bg-[hsl(25,100%,50%)] hover:bg-[hsl(25,100%,45%)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                                    aria-label="Call 24/7 emergency locksmith for immediate assistance"
                                >
                                    <Phone className="w-5 h-5" aria-hidden="true" />
                                    CALL {SITE_CONFIG.phoneDisplay}
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* Internal Links */}
                    <section className="py-8 bg-gray-100" aria-label="Related pages">
                        <div className="container mx-auto px-4 text-center">
                            <Link href="/locations" className="text-blue-700 hover:underline mx-2 font-semibold">Back to Locations</Link> |
                            <Link href="/services/car-lockout" className="text-blue-700 hover:underline mx-2 font-semibold">Car Lockout Service</Link> |
                            <Link href="/locations/denton-auto-locksmith" className="text-blue-700 hover:underline mx-2 font-semibold">Denton Auto Locksmith</Link>
                        </div>
                    </section>
                </main>

                <Footer />
                <MobileCallButton />
            </div>
        </>
    );
}
