import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle2, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/FooterEnhanced';
import MobileCallButton from '@/components/layout/MobileCallButton';

export const metadata: Metadata = {
    title: 'Denton Auto Locksmith | Local Car Key Replacement Expert',
    description: `Your local Auto Locksmith in Denton (M34). We are based on Laburnum Road! Fast 15 min response to Denton & Haughton Green. Call ${SITE_CONFIG.phoneDisplay}.`,
};

export default function DentonLocationPage() {
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
                                    Auto Locksmith Denton (M34)
                                </h1>
                                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                                    We are your **truly local** auto locksmith, based right here in Denton. For the fastest response in M34, call your neighbors at {SITE_CONFIG.siteName}.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <a
                                        href={`tel:${SITE_CONFIG.phone}`}
                                        className="inline-flex items-center gap-2 bg-[hsl(25,100%,50%)] hover:bg-[hsl(25,100%,45%)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                                    >
                                        <Phone className="w-5 h-5" />
                                        Call Denton Local
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
                                    Based on Laburnum Road, Denton
                                </h2>
                                <p className="text-lg text-gray-700 font-medium">
                                    Don't wait for a locksmith coming from miles away. We are a **UK Registered Limited Company** headquartered in Denton. Whether you are at Crown Point North or stuck in Haughton Green, our response time is unbeatable because we are already here.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Service Benefits */}
                    <section className="py-16 bg-gray-50">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                                    Why Choose Your Local Denton Expert?
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        'Fastest Response: We are based in M34 postcodes.',
                                        'No Call-Out Fee: Fair pricing for our local community.',
                                        'Crown Point & Sainsbury\'s: We verify ownership and open cars at shopping centres regularly.',
                                        '24/7 Availability: Locked out at 2am? We are nearby.',
                                        'Trusted Local Business: Verified UK Limited Company.',
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
                                            desc: `Dial ${SITE_CONFIG.phoneDisplay}. Let us know you are in Denton.`,
                                        },
                                        {
                                            title: 'Dispatch',
                                            desc: 'We likely have a van minutes away.',
                                        },
                                        {
                                            title: 'Service',
                                            desc: 'We arrive, ID check, and solve the problem.',
                                        },
                                        {
                                            title: 'Done',
                                            desc: 'You are back on the road in no time.',
                                        },
                                        {
                                            title: 'Payment',
                                            desc: 'Card, Cash, or Bank Transfer accepted.',
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
                                    Your Local Locksmith
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
                                    Denton FAQs
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        {
                                            q: 'Where in Denton are you based?',
                                            a: 'We are registered at 34 Laburnum Road, Denton, M34 2NE.',
                                        },
                                        {
                                            q: 'How fast can you get to Crown Point?',
                                            a: 'Usually within 10-15 minutes as we are local.',
                                        },
                                        {
                                            q: 'Do you charge a call-out fee generally?',
                                            a: 'No, we only charge for the work done (e.g. key replacement or entry).',
                                        },
                                        {
                                            q: 'Are you 24 hours?',
                                            a: 'Yes, we operate 24 hours a day, 7 days a week in Denton.',
                                        },
                                        {
                                            q: 'Can you program Ford keys?',
                                            a: 'Yes, we have specialist equipment for Ford vehicles common in Denton.',
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
                                    Local Denton Locksmith
                                </h2>
                                <p className="text-xl mb-8 text-gray-200">
                                    We are right around the corner. Support your local business.
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
                            <Link href="/locations" className="text-blue-600 hover:underline mx-2">Back to Locations</Link> |
                            <Link href="/services/ignition-repair" className="text-blue-600 hover:underline mx-2">Ignition Repair</Link> |
                            <Link href="/locations/manchester-auto-locksmith" className="text-blue-600 hover:underline mx-2">Manchester Auto Locksmith</Link>
                        </div>
                    </section>
                </main>

                <Footer />
                <MobileCallButton />
            </div>
        </>
    );
}
