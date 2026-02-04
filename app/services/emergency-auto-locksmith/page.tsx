import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle2, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/FooterEnhanced';
import MobileCallButton from '@/components/layout/MobileCallButton';

export const metadata: Metadata = {
    title: 'Emergency Auto Locksmith Manchester | 24/7 Key & Lockout Service',
    description: `Urgent car locksmith needed? We are open 24/7 in Manchester & Stockport. Fast 30 min arrival. Lost keys, lockouts, and broken ignitions fixed instantly. Call ${SITE_CONFIG.phoneDisplay}.`,
};

export default function EmergencyLocksmithPage() {
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
                                    24/7 Emergency Auto Locksmith
                                </h1>
                                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                                    Stranded late at night? Key snapped in the ignition? {SITE_CONFIG.siteName} is your genuine 24-hour emergency service.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <a
                                        href={`tel:${SITE_CONFIG.phone}`}
                                        className="inline-flex items-center gap-2 bg-[hsl(25,100%,50%)] hover:bg-[hsl(25,100%,45%)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                                    >
                                        <Phone className="w-5 h-5" />
                                        Call Emergency Line
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
                                    Real 24/7 Local Emergency Service
                                </h2>
                                <p className="text-lg text-gray-700 font-medium">
                                    Unlike national call centers that make you wait hours, we are a **local Manchester-based team** with vans on the road day and night. **Verified UK Limited Company**, fully insured, and equipped to solve your problem at the roadside immediately.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Service Benefits */}
                    <section className="py-16 bg-gray-50">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                                    Why Choose Us?
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        '30-Minute Target: We aim to be with you fast.',
                                        'True 24/7: We answer our phones at 3 AM on Sundays.',
                                        'Roadside Solutions: We fix the problem there and then—no towing needed.',
                                        'Card Payment: We accept cards on-site for your convenience.',
                                        'All Weather: We work in the Manchester rain, snow, or shine.',
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
                                    Emergency Process
                                </h2>
                                <div className="space-y-8">
                                    {[
                                        {
                                            title: 'Emergency Call',
                                            desc: `Call our priority line: ${SITE_CONFIG.phoneDisplay}.`,
                                        },
                                        {
                                            title: 'Instant Quote',
                                            desc: 'We give you a fixed price and ETA immediately.',
                                        },
                                        {
                                            title: 'Rapid Dispatch',
                                            desc: 'Our nearest technician is routed to you via GPS.',
                                        },
                                        {
                                            title: 'Rescue',
                                            desc: 'We gain entry or make you a new key.',
                                        },
                                        {
                                            title: 'Safe',
                                            desc: 'You are back in your car and safe to drive home.',
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
                                    Contact Details
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
                                                <p className="text-red-600 font-bold">OPEN 24 HOURS</p>
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
                                    Emergency FAQs
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        {
                                            q: 'Do you charge more at night?',
                                            a: 'We have a transparent pricing structure. Any out-of-hours surcharge is explained clearly before we come out.',
                                        },
                                        {
                                            q: 'Can you make a key at the roadside?',
                                            a: 'Yes, our vans are mobile workshops equipped with key cutting machines.',
                                        },
                                        {
                                            q: 'How do I pay if I have no cash?',
                                            a: 'All our technicians carry secure card terminals.',
                                        },
                                        {
                                            q: 'Do you serve Stockport/Tameside urgently?',
                                            a: 'Yes, we cover the entire Greater Manchester ring road area.',
                                        },
                                        {
                                            q: 'Are you AA/RAC approved?',
                                            a: 'We work alongside many breakdown providers but provide a faster, direct service.',
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
                                    Need Help Right Now?
                                </h2>
                                <p className="text-xl mb-8 text-gray-200">
                                    Don't sleep in your car. We are on the way.
                                </p>
                                <a
                                    href={`tel:${SITE_CONFIG.phone}`}
                                    className="inline-flex items-center gap-2 bg-[hsl(25,100%,50%)] hover:bg-[hsl(25,100%,45%)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                                >
                                    <Phone className="w-5 h-5" />
                                    CALL {SITE_CONFIG.phoneDisplay}
                                </a>
                                <p className="mt-4 text-sm opacity-80">Fast Response Guaranteed.</p>
                            </div>
                        </div>
                    </section>

                    {/* Internal Links */}
                    <section className="py-8 bg-gray-100">
                        <div className="container mx-auto px-4 text-center">
                            <Link href="/services" className="text-blue-600 hover:underline mx-2">Back to Services</Link> |
                            <Link href="/locations/stockport-auto-locksmith" className="text-blue-600 hover:underline mx-2">Stockport Auto Locksmith</Link> |
                            <Link href="/services/car-lockout" className="text-blue-600 hover:underline mx-2">Car Lockout Service</Link>
                        </div>
                    </section>
                </main>

                <Footer />
                <MobileCallButton />
            </div>
        </>
    );
}
