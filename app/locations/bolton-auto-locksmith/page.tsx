import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/FooterEnhanced';
import MobileCallButton from '@/components/layout/MobileCallButton';

export const metadata: Metadata = {
    title: 'Bolton Auto Locksmith | Mobile Car Key Replacement',
    description: 'Need a car locksmith in Bolton? Fast, local service for lost car keys, broken ignitions, and lockouts. Serving all Bolton areas 24/7. Call now!',
};

export default function BoltonLocationPage() {
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
                                    Mobile Auto Locksmith Bolton
                                </h1>
                                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                                    From <strong>Horwich</strong> to <strong>Farnworth</strong>, Key2BHP provides trusted auto locksmith services across <strong>Bolton</strong>. We understand the frustration of being stranded at the Macron or in the town center.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <a
                                        href={`tel:${SITE_CONFIG.phone}`}
                                        className="inline-flex items-center gap-2 bg-[hsl(25,100%,50%)] hover:bg-[hsl(25,100%,45%)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                                    >
                                        <Phone className="w-5 h-5" />
                                        Call Bolton Team
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
                                    Our mobile units are equipped to handle everything from a simple lockout to complex ECU reprogramming. We are committed to getting Bolton drivers back on the road safely and quickly, with pricing that beats the main dealers every time.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Service Benefits */}
                    <section className="py-16 bg-gray-50">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                                    Our Bolton Services
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        'Bolton Wide Coverage: Serving BL1 through BL7 postcodes.',
                                        'Rapid Response: Optimized routing around St Peter\'s Way and local roads.',
                                        'Trusted Service: High ratings from local Bolton customers.',
                                        'Emergency Ready: We prioritize lockouts and stranded drivers.',
                                        'Full Warranty: Peace of mind with every key we cut.',
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
                                            title: 'Phone Assessment',
                                            desc: `Call ${SITE_CONFIG.phone}. We diagnose the issue over the phone.`,
                                        },
                                        {
                                            title: 'Dispatch',
                                            desc: 'A Bolton-based technician is assigned to you.',
                                        },
                                        {
                                            title: 'On-Site Service',
                                            desc: 'We arrive at your home, work, or roadside.',
                                        },
                                        {
                                            title: 'Verification',
                                            desc: 'We verify ID and ownership fast.',
                                        },
                                        {
                                            title: 'Solution',
                                            desc: 'We cut/program/unlock as needed.',
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
                                    Service Area: Bolton
                                </h2>
                                <div className="bg-white p-6 rounded-lg shadow-sm">
                                    <p className="mb-4"><strong>Service Area:</strong> All Bolton areas.</p>
                                    <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center mb-6">
                                        [Map of Bolton]
                                    </div>
                                    <div className="space-y-2">
                                        <p><strong>Business:</strong> Key2BHP Auto Locksmith</p>
                                        <p><strong>Phone:</strong> {SITE_CONFIG.phone}</p>
                                        <p><strong>Location:</strong> Bolton</p>
                                        <p><strong>Areas:</strong> Bolton, Bury, Wigan</p>
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
                                    Bolton FAQs
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        {
                                            q: 'Can you help if I lost my keys at Middlebrook Retail Park?',
                                            a: 'Yes, we frequently attend call-outs at major shopping centers in Bolton.',
                                        },
                                        {
                                            q: 'How much for a replacement key in Bolton?',
                                            a: 'It depends on the car, but we are cheaper than towing to a dealer in Manchester.',
                                        },
                                        {
                                            q: 'Do you fix broken key blobs?',
                                            a: 'Yes, we can repair or replace broken remote cases and blades.',
                                        },
                                        {
                                            q: 'Can you program keys for Volkswagen in Bolton?',
                                            a: 'Yes, we have the software for VW, Audi, Seat, and Skoda vehicles.',
                                        },
                                        {
                                            q: 'How quickly can you arrive?',
                                            a: 'We aim for 30 minutes or less for emergency calls within Bolton.',
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
                                    Stranded in Bolton? Help is Here.
                                </h2>
                                <p className="text-xl mb-8 text-gray-200">
                                    Professional car key replacement without the dealership hassle.
                                </p>
                                <a
                                    href={`tel:${SITE_CONFIG.phone}`}
                                    className="inline-flex items-center gap-2 bg-[hsl(25,100%,50%)] hover:bg-[hsl(25,100%,45%)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                                >
                                    <Phone className="w-5 h-5" />
                                    CALL {SITE_CONFIG.phone} - BOLTON TEAM
                                </a>
                                <p className="mt-4 text-sm opacity-80">Fast Local Service.</p>
                            </div>
                        </div>
                    </section>

                    {/* Internal Links */}
                    <section className="py-8 bg-gray-100">
                        <div className="container mx-auto px-4 text-center">
                            <Link href="/locations" className="text-blue-600 hover:underline mx-2">Back to Locations</Link> |
                            <Link href="/services/ignition-repair" className="text-blue-600 hover:underline mx-2">Ignition Repair & Replacement</Link> |
                            <Link href="/locations/stockport-auto-locksmith" className="text-blue-600 hover:underline mx-2">Stockport Auto Locksmith</Link>
                        </div>
                    </section>
                </main>

                <Footer />
                <MobileCallButton />
            </div>
        </>
    );
}
