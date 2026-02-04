import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/FooterEnhanced';
import MobileCallButton from '@/components/layout/MobileCallButton';

export const metadata: Metadata = {
    title: 'Salford Car Locksmith | Mobile Key Replacement & Unlocks',
    description: 'Premier Auto Locksmith in Salford. Lost car keys? Locked out? We come to you 24/7. Trusted local experts for key fobs & repair. Call for ETA.',
};

export default function SalfordLocationPage() {
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
                                    Salford Mobile Auto Locksmith
                                </h1>
                                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                                    Key2BHP is proud to serve the <strong>Salford community</strong> with professional automotive locksmith services. We understand that Salford drivers need fast, reliable solutions for lost keys and lockouts.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <a
                                        href={`tel:${SITE_CONFIG.phone}`}
                                        className="inline-flex items-center gap-2 bg-[hsl(25,100%,50%)] hover:bg-[hsl(25,100%,45%)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                                    >
                                        <Phone className="w-5 h-5" />
                                        Book Now
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
                                    Our dedicated mobile units patrol Salford daily, ensuring that whether you are at work, home, or shopping, expert help is always within reach. We are fully equipped to handle high-tech smart keys and classic mechanical locks alike.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Service Benefits */}
                    <section className="py-16 bg-gray-50">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                                    Our Salford Services
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        'Salford Specialists: Dedicated technicians assigned specifically to the Salford area.',
                                        'No-Towing Solution: We fix the problem right where you are parked.',
                                        'High-Tech Equipment: The latest programming tools for modern cars in Salford.',
                                        'Flat-Rate Travel Fee: No surprises, just fair pricing for our neighbors.',
                                        'Insured Service: Your vehicle is safe in our expert hands.',
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
                                    Process
                                </h2>
                                <div className="space-y-8">
                                    {[
                                        {
                                            title: 'Contact Us',
                                            desc: `Ring ${SITE_CONFIG.phone} and mention you are in Salford.`,
                                        },
                                        {
                                            title: 'Fast Dispatch',
                                            desc: 'We alert our Salford team members instantly.',
                                        },
                                        {
                                            title: 'Visual ID',
                                            desc: 'You\'ll recognize our professional van when it pulls up.',
                                        },
                                        {
                                            title: 'Expert Work',
                                            desc: 'We perform the lockout service or key generation quickly.',
                                        },
                                        {
                                            title: 'Satisfaction Check',
                                            desc: 'We ensure everything works perfectly before heading to the next job.',
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
                                    Service Area: Salford
                                </h2>
                                <div className="bg-white p-6 rounded-lg shadow-sm">
                                    <p className="mb-4"><strong>Service Area:</strong> All zip codes in Salford.</p>
                                    <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center mb-6">
                                        [Map of Salford]
                                    </div>
                                    <div className="space-y-2">
                                        <p><strong>Business:</strong> Key2BHP Auto Locksmith</p>
                                        <p><strong>Phone:</strong> {SITE_CONFIG.phone}</p>
                                        <p><strong>Location:</strong> Salford</p>
                                        <p><strong>Areas:</strong> Salford, Manchester, Trafford</p>
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
                                    Salford FAQs
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        {
                                            q: 'Can you meet me at my workplace in Salford?',
                                            a: 'Absolutely. We frequently assist clients at office parks and shopping centers throughout Salford.',
                                        },
                                        {
                                            q: 'How long does a service call take?',
                                            a: 'Most jobs, including key duplication, are completed in under 30 minutes on-site.',
                                        },
                                        {
                                            q: 'Do you service motorcycles in Salford as well?',
                                            a: 'Yes, we can replace keys and fix ignitions for most major motorcycle brands.',
                                        },
                                        {
                                            q: 'What payments do you accept?',
                                            a: 'We accept all major credit cards, cash, and mobile payments for your convenience.',
                                        },
                                        {
                                            q: 'Is there a warranty on new keys?',
                                            a: 'Yes, we provide a warranty on parts and labor for all keys generated by our team.',
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
                                    The Most Trusted Locksmith in Salford.
                                </h2>
                                <p className="text-xl mb-8 text-gray-200">
                                    Don't overpay at the dealership. Get premium service at your doorstep.
                                </p>
                                <a
                                    href={`tel:${SITE_CONFIG.phone}`}
                                    className="inline-flex items-center gap-2 bg-[hsl(25,100%,50%)] hover:bg-[hsl(25,100%,45%)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                                >
                                    <Phone className="w-5 h-5" />
                                    CALL {SITE_CONFIG.phone} - BOOK NOW
                                </a>
                                <p className="mt-4 text-sm opacity-80">24/7 Mobile Service in Salford.</p>
                            </div>
                        </div>
                    </section>

                    {/* Internal Links */}
                    <section className="py-8 bg-gray-100">
                        <div className="container mx-auto px-4 text-center">
                            <Link href="/locations" className="text-blue-600 hover:underline mx-2">Back to Locations</Link> |
                            <Link href="/services/ignition-repair" className="text-blue-600 hover:underline mx-2">Ignition Repair & Replacement</Link> |
                            <Link href="/locations/city-1-auto-locksmith" className="text-blue-600 hover:underline mx-2">Manchester Auto Locksmith</Link>
                        </div>
                    </section>
                </main>

                <Footer />
                <MobileCallButton />
            </div>
        </>
    );
}
