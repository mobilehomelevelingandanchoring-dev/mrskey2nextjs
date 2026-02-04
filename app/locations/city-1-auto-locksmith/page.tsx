import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/FooterEnhanced';
import MobileCallButton from '@/components/layout/MobileCallButton';

export const metadata: Metadata = {
    title: 'Auto Locksmith Manchester | Car Keys & Lockouts | Key2BHP',
    description: 'Need an Auto Locksmith in Manchester? We are local, mobile & fast. Car key replacement, lockouts, and fob programming. 24/7 Emergency Service. Call now.',
};

export default function ManchesterLocationPage() {
    return (
        <>
            <div className="min-h-screen">
                <Navbar />

                <main>
                    {/* Hero Section */}
                    <section className="relative bg-gradient-to-br from-[hsl(220,68%,18%)] to-[hsl(220,68%,25%)] text-white py-20">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto text-center">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                    Auto Locksmith Services in Manchester
                                </h1>
                                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                                    Drivers in <strong>Manchester</strong> trust Key2BHP for reliable, high-speed vehicle security solutions. We are not a call center; we are your <strong>local Manchester locksmiths</strong>.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <a
                                        href={`tel:${SITE_CONFIG.phone}`}
                                        className="inline-flex items-center gap-2 bg-[hsl(25,100%,50%)] hover:bg-[hsl(25,100%,45%)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                                    >
                                        <Phone className="w-5 h-5" />
                                        Call Manchester Dispatch
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Authority Hook */}
                    <section className="py-16 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <p className="text-lg text-gray-700 mb-6 font-medium">
                                    Whether you are parked downtown near Piccadilly Gardens or stranded in a residential driveway, our mobile workshops are likely just minutes away. We combine big-city capability with small-town service care, ensuring you are never left stuck on the side of the road.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Service Benefits */}
                    <section className="py-16 bg-gray-50">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                                    Why Choose Us in Manchester?
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        'Locally Based: We know Manchester traffic patterns and shortcuts for faster arrival.',
                                        'Full Mobile Workshop: We bring the shop to you—no towing needed.',
                                        'Trusted by Locals: Hundreds of 5-star reviews from Manchester residents.',
                                        'Affordable Local Rates: Competitive pricing tailored for the Manchester community.',
                                        '24/7 Cover: We cover every neighborhood in Manchester day and night.',
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
                                    How It Works
                                </h2>
                                <div className="space-y-8">
                                    {[
                                        {
                                            title: 'Local Dispatch',
                                            desc: `Call ${SITE_CONFIG.phone}. We check which van is closest to your spot in Manchester.`,
                                        },
                                        {
                                            title: 'Zero-Wait Response',
                                            desc: 'We give you an honest ETA based on real-time local traffic.',
                                        },
                                        {
                                            title: 'Pro Service',
                                            desc: 'Our uniformed technician arrives in a marked vehicle.',
                                        },
                                        {
                                            title: 'Service Execution',
                                            desc: 'We unlock, cut, or program what you need efficiently.',
                                        },
                                        {
                                            title: 'Easy Payment',
                                            desc: 'We accept cards and cash on-site.',
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

                    {/* Local SEO Boost */}
                    <section className="py-16 bg-gray-50">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                                    Service Area
                                </h2>
                                <div className="bg-white p-6 rounded-lg shadow-sm">
                                    <p className="mb-4"><strong>Service Area:</strong> Everything within Manchester city limits and surrounding zip codes.</p>
                                    <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center mb-6">
                                        [Map of Manchester]
                                    </div>
                                    <div className="space-y-2">
                                        <p><strong>Business:</strong> Key2BHP Auto Locksmith</p>
                                        <p><strong>Phone:</strong> {SITE_CONFIG.phone}</p>
                                        <p><strong>Location:</strong> Manchester</p>
                                        <p><strong>Areas:</strong> Manchester, Salford, Stockport</p>
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
                                    Local FAQs
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        {
                                            q: 'Do you service all neighborhoods in Manchester?',
                                            a: 'Yes, from City Centre to Didsbury, we cover the entire city.',
                                        },
                                        {
                                            q: 'Are you cheaper than the dealers in Manchester?',
                                            a: 'Significantly. We save our Manchester customers hundreds of dollars by avoiding dealership towing and labor fees.',
                                        },
                                        {
                                            q: 'How quickly can you get to the Arndale Centre?',
                                            a: 'We usually have a technician within 15 minutes of the city center.',
                                        },
                                        {
                                            q: 'Do you offer residential locksmith services in Manchester too?',
                                            a: 'Our primary focus is Automotive, ensuring we are the masters of car keys and locks.',
                                        },
                                        {
                                            q: 'Are your technicians licensed?',
                                            a: 'Yes, all our staff are fully licensed, bonded, and insured.',
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
                                    Stuck in Manchester? We're Around the Corner.
                                </h2>
                                <p className="text-xl mb-8 text-gray-200">
                                    Fast, friendly, and local automotive locksmith service is one call away.
                                </p>
                                <a
                                    href={`tel:${SITE_CONFIG.phone}`}
                                    className="inline-flex items-center gap-2 bg-[hsl(25,100%,50%)] hover:bg-[hsl(25,100%,45%)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                                >
                                    <Phone className="w-5 h-5" />
                                    CALL {SITE_CONFIG.phone} - MANCHESTER DISPATCH
                                </a>
                                <p className="mt-4 text-sm opacity-80">Your Local Car Key Experts.</p>
                            </div>
                        </div>
                    </section>

                    {/* Internal Links */}
                    <section className="py-8 bg-gray-100">
                        <div className="container mx-auto px-4 text-center">
                            <Link href="/locations" className="text-blue-600 hover:underline mx-2">Back to Locations</Link> |
                            <Link href="/services/transponder-key-services" className="text-blue-600 hover:underline mx-2">Transponder Key Services</Link> |
                            <Link href="/locations/city-2-auto-locksmith" className="text-blue-600 hover:underline mx-2">Salford Auto Locksmith</Link>
                        </div>
                    </section>
                </main>

                <Footer />
                <MobileCallButton />
            </div>
        </>
    );
}
