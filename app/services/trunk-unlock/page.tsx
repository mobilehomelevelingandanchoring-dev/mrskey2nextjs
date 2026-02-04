import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/FooterEnhanced';
import MobileCallButton from '@/components/layout/MobileCallButton';

export const metadata: Metadata = {
    title: 'Locked Keys in Trunk? Manchester | Emergency Car Boot Opening',
    description: 'Keys locked in the boot? Emergency trunk opening service in Manchester. No damage to your lock or car. Fast 30 min arrival. Call now.',
};

export default function TrunkUnlockPage() {
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
                                    Emergency Trunk Unlock Service
                                </h1>
                                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                                    Locking your keys in the trunk (boot) is often harder to fix than locking them in the cabin, due to modern "deadlocking" security features. <strong>Do not try to pry your trunk open</strong>—you will bend the metal and ruin the latch.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <a
                                        href={`tel:${SITE_CONFIG.phone}`}
                                        className="inline-flex items-center gap-2 bg-[hsl(25,100%,50%)] hover:bg-[hsl(25,100%,45%)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                                    >
                                        <Phone className="w-5 h-5" />
                                        Unlock My Trunk
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
                                    We use specialized non-destructive entry methods to bypass the security system or pick the lock directly, retrieving your keys without leaving a single scratch on your vehicle.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Service Benefits */}
                    <section className="py-16 bg-gray-50">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                                    Why Choose Our Trunk Opening?
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        'No-Damage Guarantee: We use skill, not force.',
                                        'High-Security Locks: We can pick laser-cut trunk locks on BMW, Mercedes, and Audi.',
                                        'Seat Access: Sometimes we can gain access via the cabin backseats expertly.',
                                        'Key Generation: If a key is strictly needed to open it, we can cut one on-site.',
                                        '24/7 Response: Groceries melting? We get there fast.',
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
                                    Opening Process
                                </h2>
                                <div className="space-y-8">
                                    {[
                                        {
                                            title: 'Arrival',
                                            desc: 'We assess the specific locking mechanism of your trunk.',
                                        },
                                        {
                                            title: 'Method Selection',
                                            desc: 'We choose between lock picking or cabin-access bypass.',
                                        },
                                        {
                                            title: 'Entry',
                                            desc: 'We carefully manipulate the lock tumblers to the "open" position.',
                                        },
                                        {
                                            title: 'Retrieval',
                                            desc: 'We recover your keys immediately.',
                                        },
                                        {
                                            title: 'Check',
                                            desc: 'We test the lock to ensure it wasn\'t damaged by the lockout.',
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
                                    <p className="mb-4"><strong>Service Area:</strong> Serving Manchester wide.</p>
                                    <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center mb-6">
                                        [Google Map Placeholder]
                                    </div>
                                    <div className="space-y-2">
                                        <p><strong>Business:</strong> Key2BHP Auto Locksmith</p>
                                        <p><strong>Phone:</strong> {SITE_CONFIG.phone}</p>
                                        <p><strong>Service:</strong> Boot Opening</p>
                                        <p><strong>Area:</strong> Manchester</p>
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
                                    Trunk Unlock FAQs
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        {
                                            q: 'Can you open a BMW trunk with deadlocks?',
                                            a: 'Yes, we are trained to pick high-security "Lishi" locks found on German vehicles.',
                                        },
                                        {
                                            q: 'Will the alarm go off?',
                                            a: 'Likely yes, until we retrieve the keys and press the unlock button. This is normal.',
                                        },
                                        {
                                            q: 'Can\'t you just pop the button inside the car?',
                                            a: 'On many modern cars, the interior trunk button is disabled when the car is locked and alarmed. We solve this.',
                                        },
                                        {
                                            q: 'How much does it cost?',
                                            a: 'Standard lockout fees apply, which are very reasonable compared to a locksmith + window replacement.',
                                        },
                                        {
                                            q: 'What if my trunk lock is broken?',
                                            a: 'We can drill it as a last resort and replace the cylinder, but we try picking first.',
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
                                    Keys in the Boot?
                                </h2>
                                <p className="text-xl mb-8 text-gray-200">
                                    Don't break a window! We can open it professionally in minutes.
                                </p>
                                <a
                                    href={`tel:${SITE_CONFIG.phone}`}
                                    className="inline-flex items-center gap-2 bg-[hsl(25,100%,50%)] hover:bg-[hsl(25,100%,45%)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                                >
                                    <Phone className="w-5 h-5" />
                                    CALL {SITE_CONFIG.phone} - OPEN MY TRUNK
                                </a>
                                <p className="mt-4 text-sm opacity-80">Damage Free Guarantee.</p>
                            </div>
                        </div>
                    </section>

                    {/* Internal Links */}
                    <section className="py-8 bg-gray-100">
                        <div className="container mx-auto px-4 text-center">
                            <Link href="/services" className="text-blue-600 hover:underline mx-2">Back to Services</Link> |
                            <Link href="/services/car-key-cutting" className="text-blue-600 hover:underline mx-2">Car Key Cutting</Link> |
                            <Link href="/locations/bolton-auto-locksmith" className="text-blue-600 hover:underline mx-2">Bolton Auto Locksmith</Link>
                        </div>
                    </section>
                </main>

                <Footer />
                <MobileCallButton />
            </div>
        </>
    );
}
