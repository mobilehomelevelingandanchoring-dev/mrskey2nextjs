import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/FooterEnhanced';
import MobileCallButton from '@/components/layout/MobileCallButton';

export const metadata: Metadata = {
    title: 'Oldham Auto Locksmith | Mobile Car Keys & Unlocks',
    description: 'Leading Auto Locksmith in Oldham. We replace lost car keys, program fobs, and open locked cars across Oldham and Saddleworth. Fast, local, reliable.',
};

export default function OldhamLocationPage() {
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
                                    Auto Locksmith Services in Oldham
                                </h1>
                                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                                    Serving the industrious town of <strong>Oldham</strong>, Key2BHP is your local expert for all automotive lock and key issues. From the busy town center to the hills of <strong>Saddleworth</strong>, our mobile workshops cover every inch of the borough.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <a
                                        href={`tel:${SITE_CONFIG.phone}`}
                                        className="inline-flex items-center gap-2 bg-[hsl(25,100%,50%)] hover:bg-[hsl(25,100%,45%)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                                    >
                                        <Phone className="w-5 h-5" />
                                        Call Oldham Dispatch
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
                                    We pride ourselves on being the <strong>fastest, friendliest locksmiths in Oldham</strong>, offering a genuine 24/7 service that gets you back on the road whether you're parked at Spindles or stuck at home in Chadderton.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Service Benefits */}
                    <section className="py-16 bg-gray-50">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                                    Why Choose Us in Oldham?
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        'Oldham Specific: Familiar with all local areas: Royton, Shaw, Failsworth, and Lees.',
                                        'Heavy Duty: Experience with commercial vans and trucks common in Oldham.',
                                        'Weather Ready: We work rain or shine (and in Oldham, it\'s usually rain!).',
                                        'Best Prices: We beat national call center prices every time.',
                                        '5-Star Reputation: Highly recommended by Oldham locals.',
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
                                            desc: `Dial ${SITE_CONFIG.phone}. Tell us where in Oldham you are.`,
                                        },
                                        {
                                            title: 'Dispatch',
                                            desc: 'We assign a technician already in the OL postcode area.',
                                        },
                                        {
                                            title: 'Arrival',
                                            desc: 'Fast arrival tracked via GPS.',
                                        },
                                        {
                                            title: 'Service',
                                            desc: 'Efficient key cutting or entry.',
                                        },
                                        {
                                            title: 'Payment',
                                            desc: 'Card or cash accepted upon completion.',
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
                                    Service Area: Oldham
                                </h2>
                                <div className="bg-white p-6 rounded-lg shadow-sm">
                                    <p className="mb-4"><strong>Service Area:</strong> All OL postcodes.</p>
                                    <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center mb-6">
                                        [Map of Oldham]
                                    </div>
                                    <div className="space-y-2">
                                        <p><strong>Business:</strong> Key2BHP Auto Locksmith</p>
                                        <p><strong>Phone:</strong> {SITE_CONFIG.phone}</p>
                                        <p><strong>Location:</strong> Oldham</p>
                                        <p><strong>Areas:</strong> Oldham, Rochdale, Ashton</p>
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
                                    Oldham FAQs
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        {
                                            q: 'How fast can you get into Saddleworth?',
                                            a: 'We cover the whole borough. Depending on weather/traffic, usually 30-40 minutes for rural spots.',
                                        },
                                        {
                                            q: 'Do you replace keys for older cars in Oldham?',
                                            a: 'Yes, we handle classic mechanical keys as well as modern transponders.',
                                        },
                                        {
                                            q: 'Can you unlock my boot (trunk)?',
                                            a: 'Yes, we have specialized tools for trunk lockouts where keys are locked inside.',
                                        },
                                        {
                                            q: 'Do you offer student discounts?',
                                            a: 'We offer competitive rates for everyone; ask our dispatcher for current offers.',
                                        },
                                        {
                                            q: 'Are you local to Oldham?',
                                            a: 'Yes, we are a locally operated business, not a distant agency.',
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
                                    Locked Out in Oldham?
                                </h2>
                                <p className="text-xl mb-8 text-gray-200">
                                    Don't stress. The local experts are on the way.
                                </p>
                                <a
                                    href={`tel:${SITE_CONFIG.phone}`}
                                    className="inline-flex items-center gap-2 bg-[hsl(25,100%,50%)] hover:bg-[hsl(25,100%,45%)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                                >
                                    <Phone className="w-5 h-5" />
                                    CALL {SITE_CONFIG.phone} - OLDHAM DISPATCH
                                </a>
                                <p className="mt-4 text-sm opacity-80">Fast. Local. Trusted.</p>
                            </div>
                        </div>
                    </section>

                    {/* Internal Links */}
                    <section className="py-8 bg-gray-100">
                        <div className="container mx-auto px-4 text-center">
                            <Link href="/locations" className="text-blue-600 hover:underline mx-2">Back to Locations</Link> |
                            <Link href="/services/broken-key-extraction" className="text-blue-600 hover:underline mx-2">Broken Key Extraction</Link> |
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
