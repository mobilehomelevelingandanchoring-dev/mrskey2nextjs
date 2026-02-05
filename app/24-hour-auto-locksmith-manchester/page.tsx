import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle2, Clock, Shield, Wrench, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/FooterEnhanced';
import MobileCallButton from '@/components/layout/MobileCallButton';

export const metadata: Metadata = {
    title: '24 Hour Auto Locksmith Manchester | Emergency Car Key Service',
    description: `24/7 Emergency Auto Locksmith in Manchester. Night, weekend & bank holiday service. Lost keys, lockouts, broken keys. Call ${SITE_CONFIG.phoneDisplay} anytime.`,
};

export default function TwentyFourHourLocksmithPage() {
    return (
        <>
            <div className="min-h-screen">
                <Navbar />

                <main>
                    {/* Hero Section */}
                    <section className="relative bg-gradient-to-br from-[hsl(220,68%,18%)] to-[hsl(220,68%,25%)] text-white py-20">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto text-center">
                                <div className="inline-block bg-[hsl(25,100%,50%)] px-4 py-2 rounded-full text-sm font-bold mb-6">
                                    ALWAYS OPEN • NIGHTS • WEEKENDS • BANK HOLIDAYS
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                    24 Hour Auto Locksmith Manchester
                                </h1>
                                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                                    Emergency car locksmith service 24 hours a day, 7 days a week across Greater Manchester. Real emergency response — no answering machines.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <a
                                        href={`tel:${SITE_CONFIG.phone}`}
                                        className="inline-flex items-center gap-2 bg-[hsl(25,100%,50%)] hover:bg-[hsl(25,100%,45%)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                                    >
                                        <Phone className="w-5 h-5" />
                                        Call Now: {SITE_CONFIG.phoneDisplay}
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
                                    True 24/7 Emergency Auto Locksmith Service
                                </h2>
                                <p className="text-lg text-gray-700 mb-4">
                                    When you call {SITE_CONFIG.siteName} at 3am or on Christmas Day, you speak to a real locksmith — not a call centre. Our mobile vans are equipped with professional key programming tools, precision cutting machines, and emergency opening equipment operating across Manchester 24 hours a day.
                                </p>
                                <p className="text-lg text-gray-700">
                                    We respond to roadside lockouts on the M60, residential driveways in Didsbury, multi-storey car parks in the city centre, and everywhere in between.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 24/7 Service Benefits */}
                    <section className="py-16 bg-gray-50">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                                    Why Choose Our 24 Hour Service
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        'No Premium Night Rates: Fixed pricing 24 hours a day',
                                        'Direct Line: Speak to a qualified locksmith immediately',
                                        'Mobile Workshop: Fully equipped vans with Autel IM608, Lishi picks, and diagnostic tools',
                                        'All Vehicle Types: BMW comfort access, Mercedes Keyless Go, Ford PATS, VW KESSY systems',
                                        'Christmas & Bank Holidays: We work when others don\'t',
                                        '30-90 Minute Response: Fastest arrival times across Manchester postcodes',
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

                    {/* Night Time Scenarios */}
                    <section className="py-16 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[hsl(220,68%,18%)]">
                                    Common Night & Weekend Emergencies
                                </h2>
                                <div className="space-y-8">
                                    {[
                                        {
                                            icon: <Clock className="w-8 h-8 text-[hsl(25,100%,50%)]" />,
                                            title: 'Locked Out After Night Shift',
                                            desc: 'Keys locked in car outside workplace at midnight. We arrive with non-destructive entry tools and restore access within minutes.',
                                        },
                                        {
                                            icon: <Wrench className="w-8 h-8 text-[hsl(25,100%,50%)]" />,
                                            title: 'Key Snapped in Ignition on Sunday',
                                            desc: 'Broken key extraction using professional Lishi tools, followed by on-site key cutting and transponder programming for BMW, Audi, Mercedes, and all major brands.',
                                        },
                                        {
                                            icon: <MapPin className="w-8 h-8 text-[hsl(25,100%,50%)]" />,
                                            title: 'Lost Keys at Manchester Airport',
                                            desc: 'Return from holiday to discover missing car keys. We dispatch to terminal car parks with full key replacement service — no tow truck needed.',
                                        },
                                        {
                                            icon: <Shield className="w-8 h-8 text-[hsl(25,100%,50%)]" />,
                                            title: 'Christmas Day Lockout',
                                            desc: 'Keys left inside car boot while loading presents. Our technicians work bank holidays with the same professional service and transparent pricing.',
                                        },
                                    ].map((scenario, index) => (
                                        <div key={index} className="flex gap-4 bg-gray-50 p-6 rounded-lg">
                                            <div className="flex-shrink-0">
                                                {scenario.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-2 text-[hsl(220,68%,18%)]">{scenario.title}</h3>
                                                <p className="text-gray-700">{scenario.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Coverage Map */}
                    <section className="py-16 bg-gray-50">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                                    24 Hour Coverage Across Greater Manchester
                                </h2>
                                <div className="grid md:grid-cols-3 gap-4 mb-8">
                                    {[
                                        'Manchester City Centre',
                                        'Salford Quays',
                                        'Didsbury',
                                        'Chorlton',
                                        'Withington',
                                        'Fallowfield',
                                        'Prestwich',
                                        'Altrincham',
                                        'Trafford',
                                        'Stockport',
                                        'Denton',
                                        'Hyde',
                                        'Tameside',
                                        'Bolton',
                                        'Oldham',
                                    ].map((area, index) => (
                                        <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                                            <MapPin className="w-5 h-5 inline-block mr-2 text-[hsl(25,100%,50%)]" />
                                            <span className="font-medium">{area}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-gray-700 text-center">
                                    Our mobile service covers all Manchester postcodes: M1-M99, including M60 motorway assistance.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Response Time Commitment */}
                    <section className="py-16 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto bg-gradient-to-br from-[hsl(220,68%,18%)] to-[hsl(220,68%,25%)] text-white p-8 rounded-xl">
                                <h2 className="text-3xl font-bold mb-6 text-center">
                                    Our Response Time Promise
                                </h2>
                                <div className="grid md:grid-cols-3 gap-6 text-center">
                                    <div>
                                        <div className="text-4xl font-bold text-[hsl(25,100%,50%)] mb-2">30min</div>
                                        <p>City Centre Emergency</p>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-bold text-[hsl(25,100%,50%)] mb-2">45min</div>
                                        <p>Greater Manchester Areas</p>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-bold text-[hsl(25,100%,50%)] mb-2">24/7</div>
                                        <p>Always Available</p>
                                    </div>
                                </div>
                                <p className="text-center mt-6 text-gray-300">
                                    *Traffic conditions permitting. Quote provided before dispatch.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="py-16 bg-gray-50">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                                    24 Hour Service FAQs
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        {
                                            q: 'Do you charge extra for night call-outs?',
                                            a: 'No. Our pricing is consistent 24 hours a day. We provide a fixed quote before dispatch whether it\'s 2pm or 2am.',
                                        },
                                        {
                                            q: 'Are you really open on Christmas Day?',
                                            a: 'Yes. We operate 365 days a year including all bank holidays. Emergency lockouts don\'t take holidays.',
                                        },
                                        {
                                            q: 'How quickly can you arrive at 3am?',
                                            a: 'Response times depend on your location and our van position. Typically 30-60 minutes for Manchester city centre, up to 90 minutes for outer areas.',
                                        },
                                        {
                                            q: 'Can you program new keys at night?',
                                            a: 'Absolutely. Our vans carry Autel IM608 Pro key programmers, Zed-Bull devices, and manufacturer diagnostic tools operational 24/7.',
                                        },
                                        {
                                            q: 'What if I\'m on the M60 at midnight?',
                                            a: 'We provide roadside assistance on motorways. For safety, we may advise moving to a service area or hard shoulder where permitted.',
                                        },
                                    ].map((faq, index) => (
                                        <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                                            <h3 className="font-bold mb-2 text-[hsl(220,68%,18%)]">{faq.q}</h3>
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
                                <Clock className="w-16 h-16 mx-auto mb-6 text-[hsl(25,100%,50%)]" />
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    Emergency? We're Already On Our Way
                                </h2>
                                <p className="text-xl mb-8 text-gray-200">
                                    24 hour emergency auto locksmith service across Manchester. Call now for immediate dispatch.
                                </p>
                                <a
                                    href={`tel:${SITE_CONFIG.phone}`}
                                    className="inline-flex items-center gap-2 bg-[hsl(25,100%,50%)] hover:bg-[hsl(25,100%,45%)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                                >
                                    <Phone className="w-5 h-5" />
                                    CALL {SITE_CONFIG.phoneDisplay}
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* Internal Links */}
                    <section className="py-8 bg-gray-100">
                        <div className="container mx-auto px-4 text-center">
                            <Link href="/locations/manchester-auto-locksmith" className="text-blue-600 hover:underline mx-2">Manchester Auto Locksmith</Link> |
                            <Link href="/services/car-lockout" className="text-blue-600 hover:underline mx-2">Emergency Car Lockout</Link> |
                            <Link href="/services/car-key-replacement" className="text-blue-600 hover:underline mx-2">Car Key Replacement</Link>
                        </div>
                    </section>
                </main>

                <Footer />
                <MobileCallButton />
            </div>
        </>
    );
}
