import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Clock, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/FooterEnhanced';
import MobileCallButton from '@/components/layout/MobileCallButton';

export const metadata: Metadata = {
    title: 'Auto Locksmith Salford | 24/7 Mobile Service | Key 2 BHP',
    description: 'Professional mobile auto locksmith in Salford. Emergency car key replacement, lockout service, and key programming. Fast response across Salford Quays, Eccles, Swinton. Call +44 7936 755530.',
};

export default function SalfordPage() {
    const serviceSchema = generateServiceSchema(
        'Auto Locksmith Salford',
        'Professional mobile auto locksmith service in Salford. 24/7 emergency car key replacement, lockout service, and key programming across all Salford areas.'
    );

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: SITE_CONFIG.url },
        { name: 'Coverage Areas', url: `${SITE_CONFIG.url}/areas` },
        { name: 'Salford', url: `${SITE_CONFIG.url}/areas/salford` },
    ]);

    return (
        <>
            {/* Schema markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <div className="min-h-screen">
                <Navbar />

                <main>
                    {/* Hero Section */}
                    <section className="relative bg-gradient-to-br from-[hsl(220,68%,18%)] to-[hsl(220,68%,25%)] text-white py-20">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto text-center">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                    Auto Locksmith Salford | 24/7 Mobile Service | Key2BHP
                                </h1>
                                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                                    Professional mobile auto locksmith serving all Salford areas. Emergency car key replacement, lockout service, and key programming. Fast response across Salford Quays, Eccles, Swinton, and beyond.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <a
                                        href={`tel:${SITE_CONFIG.phone}`}
                                        className="inline-flex items-center gap-2 bg-[hsl(25,100%,50%)] hover:bg-[hsl(25,100%,45%)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                                    >
                                        <Phone className="w-5 h-5" />
                                        Call Now for Salford Service
                                    </a>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 bg-white text-[hsl(220,68%,18%)] hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all"
                                    >
                                        Get a Free Quote
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                                <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-5 h-5 text-[hsl(25,100%,50%)]" />
                                        <span>24/7 Emergency Service</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-5 h-5 text-[hsl(25,100%,50%)]" />
                                        <span>All Salford Areas Covered</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-[hsl(25,100%,50%)]" />
                                        <span>30-60 Min Response Time</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Services Available */}
                    <section className="py-16 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                                    Car Locksmith Services in Salford
                                </h2>
                                <p className="text-lg text-gray-700 mb-8">
                                    Key2BHP Auto Locksmith provides comprehensive mobile locksmith services across all Salford areas. Our fully equipped mobile units serve Salford Quays, Eccles, Swinton, Pendlebury, Walkden, and surrounding areas with fast, professional service.
                                </p>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        {
                                            title: 'Car Key Replacement',
                                            slug: 'car-key-replacement',
                                            description: 'Lost or damaged car keys replaced on-site in Salford. Same-day service for all vehicle makes.',
                                        },
                                        {
                                            title: 'Emergency Car Lockout',
                                            slug: 'car-lockout',
                                            description: 'Locked out of your car in Salford? Fast emergency lockout service available 24/7.',
                                        },
                                        {
                                            title: 'Car Key Programming',
                                            slug: 'car-key-programming',
                                            description: 'Expert transponder key and key fob programming for all vehicle types in Salford.',
                                        },
                                        {
                                            title: 'Lost Car Keys',
                                            slug: 'lost-car-keys',
                                            description: 'Emergency replacement service for lost car keys anywhere in Salford.',
                                        },
                                        {
                                            title: 'Spare Car Keys',
                                            slug: 'spare-car-keys',
                                            description: 'Get spare car keys made in Salford. Prevent future lockouts with duplicate keys.',
                                        },
                                        {
                                            title: 'Broken Key Extraction',
                                            slug: 'broken-key-extraction',
                                            description: 'Safe removal of broken keys from locks and ignitions in Salford.',
                                        },
                                    ].map((service, index) => (
                                        <Link
                                            key={index}
                                            href={`/services/${service.slug}`}
                                            className="border border-gray-200 rounded-lg p-6 hover:border-[hsl(25,100%,50%)] hover:shadow-lg transition-all group"
                                        >
                                            <h3 className="text-xl font-bold mb-3 flex items-center justify-between group-hover:text-[hsl(25,100%,50%)] transition-colors">
                                                {service.title}
                                                <ArrowRight className="w-5 h-5" />
                                            </h3>
                                            <p className="text-gray-700">{service.description}</p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Coverage Areas */}
                    <section className="py-16 bg-gray-50">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                                    Salford Areas We Cover
                                </h2>
                                <p className="text-lg text-gray-700 mb-6">
                                    Our mobile auto locksmith service covers all areas of Salford, including:
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {[
                                        'Salford Quays',
                                        'Eccles',
                                        'Swinton',
                                        'Pendlebury',
                                        'Walkden',
                                        'Irlam',
                                        'Cadishead',
                                        'Little Hulton',
                                        'Worsley',
                                        'Monton',
                                        'Winton',
                                        'Pendleton',
                                    ].map((area, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-[hsl(25,100%,50%)] flex-shrink-0" />
                                            <span className="text-gray-700">{area}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Why Choose Us */}
                    <section className="py-16 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                                    Why Choose Key2BHP in Salford?
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        {
                                            title: 'Fast Response Times',
                                            description: 'Average 30-60 minute response time across all Salford areas. Emergency service available 24/7.',
                                        },
                                        {
                                            title: 'Local Knowledge',
                                            description: 'Excellent knowledge of Salford and surrounding areas for quick navigation and fast service.',
                                        },
                                        {
                                            title: 'Mobile Service',
                                            description: 'Fully equipped mobile units come directly to your location in Salford - no need to travel.',
                                        },
                                        {
                                            title: 'All Vehicle Makes',
                                            description: 'We work with all major vehicle brands and can handle any car key requirement.',
                                        },
                                        {
                                            title: 'Transparent Pricing',
                                            description: 'Clear, upfront pricing with no hidden fees. Free quotes available.',
                                        },
                                        {
                                            title: 'Professional Service',
                                            description: 'Fully qualified locksmiths with years of experience serving Salford residents.',
                                        },
                                    ].map((benefit, index) => (
                                        <div key={index} className="border border-gray-200 rounded-lg p-6">
                                            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-[hsl(25,100%,50%)]" />
                                                {benefit.title}
                                            </h3>
                                            <p className="text-gray-700">{benefit.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Nearby Areas */}
                    <section className="py-16 bg-gray-50">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                                    Nearby Areas We Also Serve
                                </h2>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {[
                                        { name: 'Manchester City Centre', slug: 'manchester-city-centre' },
                                        { name: 'Trafford', slug: 'trafford' },
                                        { name: 'Bolton', slug: 'bolton' },
                                        { name: 'Bury', slug: 'bury' },
                                    ].map((area, index) => (
                                        <Link
                                            key={index}
                                            href={`/areas/${area.slug}`}
                                            className="text-[hsl(220,68%,18%)] hover:text-[hsl(25,100%,50%)] font-medium transition-colors flex items-center gap-2"
                                        >
                                            <ArrowRight className="w-4 h-4" />
                                            {area.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="py-16 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                                    Frequently Asked Questions - Salford
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        {
                                            question: 'How quickly can you reach me in Salford?',
                                            answer: 'Our average response time in Salford is 30-60 minutes. For emergency situations, we prioritize the fastest possible response and can often arrive sooner, especially in central Salford areas like Salford Quays and Eccles.',
                                        },
                                        {
                                            question: 'Do you cover all areas of Salford?',
                                            answer: 'Yes, we provide mobile auto locksmith services across all Salford areas including Salford Quays, Eccles, Swinton, Pendlebury, Walkden, Irlam, Cadishead, Worsley, and all surrounding areas.',
                                        },
                                        {
                                            question: 'Can you help if I\'m locked out of my car in Salford Quays?',
                                            answer: 'Absolutely! We provide 24/7 emergency car lockout service in Salford Quays and all Salford areas. Our mobile locksmiths can unlock your car safely without damage and get you back on the road quickly.',
                                        },
                                        {
                                            question: 'What if I need a car key replacement late at night in Salford?',
                                            answer: 'We offer 24/7 emergency service, so you can call us any time of day or night. Our mobile locksmiths are available for emergency car key replacement across Salford at all hours.',
                                        },
                                    ].map((faq, index) => (
                                        <div key={index} className="bg-gray-50 rounded-lg p-6">
                                            <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                                            <p className="text-gray-700">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="py-16 bg-gradient-to-br from-[hsl(220,68%,18%)] to-[hsl(220,68%,25%)] text-white">
                        <div className="container mx-auto px-4">
                            <div className="max-w-3xl mx-auto text-center">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    Need an Auto Locksmith in Salford?
                                </h2>
                                <p className="text-xl mb-8 text-gray-200">
                                    Fast, professional mobile locksmith service across all Salford areas. Available 24/7 for emergencies.
                                </p>
                                <a
                                    href={`tel:${SITE_CONFIG.phone}`}
                                    className="inline-flex items-center gap-2 bg-[hsl(25,100%,50%)] hover:bg-[hsl(25,100%,45%)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                                >
                                    <Phone className="w-5 h-5" />
                                    {SITE_CONFIG.phone}
                                </a>
                            </div>
                        </div>
                    </section>
                </main>

                <Footer />
                <MobileCallButton />
            </div>
        </>
    );
}
