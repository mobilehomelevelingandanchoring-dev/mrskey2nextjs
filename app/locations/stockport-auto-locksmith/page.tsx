import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle2, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/FooterEnhanced';
import MobileCallButton from '@/components/layout/MobileCallButton';

export const metadata: Metadata = {
    title: 'Stockport Auto Locksmith | Car Keys & Unlocks SK Postcodes',
    description: `Local Auto Locksmith serving Stockport (SK). Lost car keys? Locked out? Mobile service for Cheadle, Marple, Bredbury & Bramhall. Call ${SITE_CONFIG.phoneDisplay} for fast SK response.`,
};

export default function StockportLocationPage() {
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
                                    Stockport Auto Locksmith Services
                                </h1>
                                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                                    We are the trusted car key experts for **Stockport and the SK postcode area**. Whether you are stuck at the **Peel Centre**, working in **Bredbury Industrial Estate**, or at home in **Cheadle**, our mobile workshops are patrolling locally.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <a
                                        href={`tel:${SITE_CONFIG.phone}`}
                                        className="inline-flex items-center gap-2 bg-[hsl(25,100%,50%)] hover:bg-[hsl(25,100%,45%)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                                    >
                                        <Phone className="w-5 h-5" />
                                        Call Stockport Team
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
                                    Your SK Postcode Specialists
                                </h2>
                                <p className="text-lg text-gray-700 font-medium">
                                    **KEY 2 BHP AUTO LOCKSMITH LTD** is your legitimate, insured, and fast local option. We know the local shortcuts to get to you fast in Stockport, Cheadle, Marple, and Bramhall.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Service Benefits */}
                    <section className="py-16 bg-gray-50">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                                    Why Choose Us in Stockport?
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        'SK Postcode Specialists: We know the local shortcuts to get to you fast.',
                                        'No Call Center: Speak directly to a locksmith who knows Stockport.',
                                        'Fair Local Rates: No "London prices" here.',
                                        'All Major Brands: Ford, Vauxhall, Nissan, and German cars.',
                                        'Trusted: 5-star Google reviews from Stockport drivers.',
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
                                            title: 'Call',
                                            desc: 'Tell us you are in Stockport (or specific area like Reddish/Heaton Moor).',
                                        },
                                        {
                                            title: 'Dispatch',
                                            desc: 'We send our SK-based van.',
                                        },
                                        {
                                            title: 'Arrival',
                                            desc: 'Fast ETA via M60 or A6.',
                                        },
                                        {
                                            title: 'Work',
                                            desc: 'Key cut or door opened.',
                                        },
                                        {
                                            title: 'Payment',
                                            desc: 'Easy repayment.',
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
                                    Stockport FAQs
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        {
                                            q: 'How fast can you get to Marple/Romiley?',
                                            a: 'Usually 30-40 minutes depending on traffic on the A626.',
                                        },
                                        {
                                            q: 'Do you cover the Peel Centre car park?',
                                            a: 'Yes, we do callouts there regularly.',
                                        },
                                        {
                                            q: 'High security locks?',
                                            a: 'We handle all modern vehicles including Range Rover and BMW found in the area.',
                                        },
                                        {
                                            q: 'Are you cheaper than the dealer?',
                                            a: 'Yes, significantly cheaper than towing your car to the Stockport dealerships.',
                                        },
                                        {
                                            q: 'Do you work Sundays?',
                                            a: 'Yes, 7 days a week.',
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
                                    Lost Keys in Stockport?
                                </h2>
                                <p className="text-xl mb-8 text-gray-200">
                                    Skip the dealer towing fees. We come to you.
                                </p>
                                <a
                                    href={`tel:${SITE_CONFIG.phone}`}
                                    className="inline-flex items-center gap-2 bg-[hsl(25,100%,50%)] hover:bg-[hsl(25,100%,45%)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                                >
                                    <Phone className="w-5 h-5" />
                                    CALL {SITE_CONFIG.phoneDisplay}
                                </a>
                                <p className="mt-4 text-sm opacity-80">Serving all SK Postcodes.</p>
                            </div>
                        </div>
                    </section>

                    {/* Internal Links */}
                    <section className="py-8 bg-gray-100">
                        <div className="container mx-auto px-4 text-center">
                            <Link href="/locations" className="text-blue-600 hover:underline mx-2">Back to Locations</Link> |
                            <Link href="/locations/denton-auto-locksmith" className="text-blue-600 hover:underline mx-2">Denton Auto Locksmith</Link> |
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
