import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle2, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/FooterEnhanced';
import MobileCallButton from '@/components/layout/MobileCallButton';

export const metadata: Metadata = {
    title: 'Car Lockout Service Manchester | Emergency 24/7 Car Door Opening',
    description: `Locked out of your car? Fast non-destructive entry in Manchester & Denton. 24/7 Emergency Service. Call ${SITE_CONFIG.phoneDisplay}. No damage guarantee.`,
};

export default function CarLockoutServicePage() {
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
                                    Mobile Car Lockout Service
                                </h1>
                                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                                    Keys locked inside? Don't panic. {SITE_CONFIG.siteName} provides fast, damage-free entry for all vehicle makes and models.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <a
                                        href={`tel:${SITE_CONFIG.phone}`}
                                        className="inline-flex items-center gap-2 bg-[hsl(25,100%,50%)] hover:bg-[hsl(25,100%,45%)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                                    >
                                        <Phone className="w-5 h-5" />
                                        Call for Unlock
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
                                    Manchester's Trusted Emergency Locksmiths
                                </h2>
                                <p className="text-lg text-gray-700 font-medium">
                                    We are a **UK Registered Limited Company** based in Denton, serving the entire Manchester area. Our fully mobile, insured technicians use specialized Lishi picks and air wedges to open your car without leaving a scratch. Available 24/7 for emergencies.
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
                                        'Fast Arrival: We aim for 30 minutes or less in Manchester.',
                                        'Transparent Pricing: Quote given upfront before we start.',
                                        'Certified Technicians: Trained in non-destructive entry methods.',
                                        'Fully Mobile: We come to you, wherever you are parked.',
                                        'Zero Damage Guarantee: We open the lock, we don\'t break the window.',
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
                                    Unlock Process
                                </h2>
                                <div className="space-y-8">
                                    {[
                                        {
                                            title: 'Call or Booking',
                                            desc: `Call ${SITE_CONFIG.phoneDisplay} for immediate dispatch.`,
                                        },
                                        {
                                            title: 'Dispatch',
                                            desc: 'A nearby technician is routed to your location.',
                                        },
                                        {
                                            title: 'On-Site Service',
                                            desc: 'We verify ID and open your car using specialist tools.',
                                        },
                                        {
                                            title: 'Completion',
                                            desc: 'You retrieve your keys and get back on the road.',
                                        },
                                        {
                                            title: 'Payment',
                                            desc: 'We accept Card or Cash. Receipt provided.',
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
                                    Local Trust & Contact
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
                                        {/* Placeholder for Google Map Embed */}
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
                                    Lockout FAQs
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        {
                                            q: 'How much does a lockout service cost?',
                                            a: 'Our prices are competitive and transparent. We provide a fixed quote over the phone based on your location and vehicle type.',
                                        },
                                        {
                                            q: 'How fast can you get to me?',
                                            a: 'We prioritize lockouts. In Manchester and Denton, we typically arrive within 30 minutes.',
                                        },
                                        {
                                            q: 'Can you unlock any car?',
                                            a: 'Yes, we have tools for 99% of vehicle makes, including BMW, Audi, Ford, and Mercedes deadlocks.',
                                        },
                                        {
                                            q: 'Is it safe for my car?',
                                            a: 'Absolutely. We use non-destructive entry techniques. No bending doors or breaking glass.',
                                        },
                                        {
                                            q: 'Are you insured?',
                                            a: 'Yes, KEY 2 BHP AUTO LOCKSMITH LTD is fully insured for all work undertaken on your vehicle.',
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
                                    Locked Out? Call Now.
                                </h2>
                                <p className="text-xl mb-8 text-gray-200">
                                    Trusted, local, and fast. We'll get you back in your car in minutes.
                                </p>
                                <a
                                    href={`tel:${SITE_CONFIG.phone}`}
                                    className="inline-flex items-center gap-2 bg-[hsl(25,100%,50%)] hover:bg-[hsl(25,100%,45%)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                                >
                                    <Phone className="w-5 h-5" />
                                    CALL {SITE_CONFIG.phoneDisplay}
                                </a>
                                <p className="mt-4 text-sm opacity-80">24/7 Emergency Service</p>
                            </div>
                        </div>
                    </section>

                    {/* Internal Links */}
                    <section className="py-8 bg-gray-100">
                        <div className="container mx-auto px-4 text-center">
                            <Link href="/services" className="text-blue-600 hover:underline mx-2">Back to Services</Link> |
                            <Link href="/services/car-key-replacement" className="text-blue-600 hover:underline mx-2">Car Key Replacement</Link> |
                            <Link href="/locations/denton-auto-locksmith" className="text-blue-600 hover:underline mx-2">Denton Auto Locksmith</Link>
                        </div>
                    </section>
                </main>

                <Footer />
                <MobileCallButton />
            </div>
        </>
    );
}
