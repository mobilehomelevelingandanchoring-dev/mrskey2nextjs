import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/FooterEnhanced';
import MobileCallButton from '@/components/layout/MobileCallButton';

export const metadata: Metadata = {
    title: 'Car Key Fob Replacement & Repair Manchester | Remote Keys',
    description: 'Remote key fob stopped working? We replace and repair car key fobs for all makes. Buttons worn out? Battery dead? We fix it fast on-site in Manchester.',
};

export default function RemoteKeyFobPage() {
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
                                    Remote Key Fob Replacement
                                </h1>
                                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                                    Modern driving convenience relies on your remote fob. When it breaks, you lose access to keyless entry, trunk release, and sometimes even your alarm system. We are the <strong>leading key fob specialists</strong> in Manchester.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <a
                                        href={`tel:${SITE_CONFIG.phone}`}
                                        className="inline-flex items-center gap-2 bg-[hsl(25,100%,50%)] hover:bg-[hsl(25,100%,45%)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                                    >
                                        <Phone className="w-5 h-5" />
                                        Fix My Fob
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
                                    Whether you need a brand new remote programmed from scratch, or just need your existing <strong>fob shell repaired</strong> due to worn buttons, our mobile technicians carry 100+ types of remotes in their vans to get you clicking again instantly.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Service Benefits */}
                    <section className="py-16 bg-gray-50">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                                    Our Fob Services
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        'Universal Stock: Remotes for Ford, Honda, Toyota, Nissan, and GM always in stock.',
                                        'Shell Repair: We can swap the electronics into a new case if yours is cracked.',
                                        'Battery Swap: We use premium long-life lithium batteries.',
                                        'Micro-Soldering: We can repair loose buttons on the circuit board.',
                                        'Mobile Programming: We sync the remote to your car\'s central locking system on-site.',
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
                                    Repair & Replacement Process
                                </h2>
                                <div className="space-y-8">
                                    {[
                                        {
                                            title: 'Diagnosis',
                                            desc: 'We test if the remote is sending a signal using an RF tester.',
                                        },
                                        {
                                            title: 'Repair/Replace',
                                            desc: 'We advise if a simple repair or a full replacement is best.',
                                        },
                                        {
                                            title: 'Programming',
                                            desc: 'We put your car into "learning mode" or use OBD2 tools.',
                                        },
                                        {
                                            title: 'Syncing',
                                            desc: 'We press the buttons in sequence to pair the new remote.',
                                        },
                                        {
                                            title: 'Testing',
                                            desc: 'We verify all doors lock/unlock and the alarm arms correctly.',
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
                                    <p className="mb-4"><strong>Service Area:</strong> Serving Manchester Metro.</p>
                                    <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center mb-6">
                                        [Google Map Placeholder]
                                    </div>
                                    <div className="space-y-2">
                                        <p><strong>Business:</strong> Key2BHP Auto Locksmith</p>
                                        <p><strong>Phone:</strong> {SITE_CONFIG.phone}</p>
                                        <p><strong>Service:</strong> Remote Fobs</p>
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
                                    Key Fob FAQs
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        {
                                            q: 'Can I program a key fob myself?',
                                            a: 'Some older cars have manual procedures (like opening/closing doors), but most modern cars require professional diagnostic equipment.',
                                        },
                                        {
                                            q: 'How much does a new fob cost?',
                                            a: 'Prices range from £60-£150 depending on if it\'s a separate fob or integrated key-head remote.',
                                        },
                                        {
                                            q: 'My buttons are worn out, do I need a new key?',
                                            a: 'Not always! We can often just replace the plastic shell and rubber buttons for a fraction of the cost.',
                                        },
                                        {
                                            q: 'Do you sell "Universal" remotes?',
                                            a: 'Yes, we carry high-quality universal remotes that can be generated to work with hundreds of different car models.',
                                        },
                                        {
                                            q: 'Can you delete old remotes I lost?',
                                            a: 'Yes, strictly for security, we wipe all old remotes from the car\'s memory so stolen ones won\'t work.',
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
                                    Remote Not Working?
                                </h2>
                                <p className="text-xl mb-8 text-gray-200">
                                    Stop manual locking. Get your convenience back today.
                                </p>
                                <a
                                    href={`tel:${SITE_CONFIG.phone}`}
                                    className="inline-flex items-center gap-2 bg-[hsl(25,100%,50%)] hover:bg-[hsl(25,100%,45%)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                                >
                                    <Phone className="w-5 h-5" />
                                    CALL {SITE_CONFIG.phone} - FIX MY FOB
                                </a>
                                <p className="mt-4 text-sm opacity-80">We Fix Buttons & Batteries Too.</p>
                            </div>
                        </div>
                    </section>

                    {/* Internal Links */}
                    <section className="py-8 bg-gray-100">
                        <div className="container mx-auto px-4 text-center">
                            <Link href="/services" className="text-blue-600 hover:underline mx-2">Back to Services</Link> |
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
