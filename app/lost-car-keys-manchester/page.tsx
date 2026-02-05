import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle2, Key, Car, Shield } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/FooterEnhanced';
import MobileCallButton from '@/components/layout/MobileCallButton';

export const metadata: Metadata = {
    title: 'Lost Car Keys Manchester | Same Day Replacement & Programming',
    description: `Lost your car keys in Manchester? We provide same-day replacement with on-site programming. All makes: BMW, Audi, VW, Mercedes. Call ${SITE_CONFIG.phoneDisplay} now.`,
};

export default function LostCarKeysPage() {
    return (
        <>
            <div className="min-h-screen">
                <Navbar />

                <main>
                    {/* Hero Section */}
                    <section className="relative bg-gradient-to-br from-[hsl(220,68%,18%)] to-[hsl(220,68%,25%)] text-white py-20">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto text-center">
                                <Key className="w-16 h-16 mx-auto mb-6 text-[hsl(25,100%,50%)]" />
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                    Lost Car Keys Manchester
                                </h1>
                                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                                    Completely lost your car keys? We create new keys from scratch with full immobiliser programming — no spare needed. Same-day service across Manchester.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <a
                                        href={`tel:${SITE_CONFIG.phone}`}
                                        className="inline-flex items-center gap-2 bg-[hsl(25,100%,50%)] hover:bg-[hsl(25,100%,45%)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                                    >
                                        <Phone className="w-5 h-5" />
                                        Get New Keys: {SITE_CONFIG.phoneDisplay}
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
                                    Professional Lost Key Replacement Across Manchester
                                </h2>
                                <p className="text-lg text-gray-700 mb-4">
                                    When you've lost all your car keys, most dealerships require expensive towing and 7-14 day waiting periods. {SITE_CONFIG.siteName} provides complete lost key replacement at your location in Manchester — typically within 60-90 minutes.
                                </p>
                                <p className="text-lg text-gray-700">
                                    Our mobile units carry Autel IM608 Pro and Zed-Bull key programming equipment, precision laser cutting machines, and manufacturer-specific diagnostic tools to create new keys for BMW, Mercedes, Audi, VW, Ford, Vauxhall, and all major brands.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* How Lost Key Replacement Works */}
                    <section className="py-16 bg-gray-50">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[hsl(220,68%,18%)]">
                                    Lost Key Replacement Process
                                </h2>
                                <div className="space-y-8">
                                    {[
                                        {
                                            title: 'Ownership Verification',
                                            desc: 'Provide V5C logbook, driving licence, and proof of address. We verify ownership before any work begins.',
                                        },
                                        {
                                            title: 'Lock Decoding',
                                            desc: 'Our technician uses specialist Lishi tools to decode your door lock and extract key bitting information without damage.',
                                        },
                                        {
                                            title: 'Key Cutting',
                                            desc: 'Precision laser or edge cutting creates a perfect physical key blank (HU66 for VW/Audi, HU92 for BMW, etc.).',
                                        },
                                        {
                                            title: 'Transponder Programming',
                                            desc: 'Using OBD diagnostic tools, we program the transponder chip to your vehicle\'s immobiliser ECU (Engine Control Unit).',
                                        },
                                        {
                                            title: 'Remote Synchronisation',
                                            desc: 'If applicable, we code the remote fob to your vehicle\'s central locking system and test all functions.',
                                        },
                                        {
                                            title: 'Testing & Handover',
                                            desc: 'Full function test including ignition, door operation, and alarm compatibility. 12-month warranty provided.',
                                        },
                                    ].map((step, index) => (
                                        <div key={index} className="flex gap-4">
                                            <div className="flex-shrink-0 w-10 h-10 bg-[hsl(25,100%,50%)] text-white rounded-full flex items-center justify-center font-bold">
                                                {index + 1}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-2 text-[hsl(220,68%,18%)]">{step.title}</h3>
                                                <p className="text-gray-700">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Vehicle Makes We Cover */}
                    <section className="py-16 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                                    Lost Key Replacement for All Makes
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        {
                                            brand: 'BMW',
                                            details: 'EWS, CAS, FEM/BDC systems. Comfort Access, Display Key programming.',
                                        },
                                        {
                                            brand: 'Mercedes-Benz',
                                            details: 'Keyless Go, IR keys, ESL steering lock repair, Chrome Key replacement.',
                                        },
                                        {
                                            brand: 'Audi',
                                            details: 'MQB platform, Advanced Key, keyless entry, MMI programming.',
                                        },
                                        {
                                            brand: 'Volkswagen',
                                            details: 'KESSY systems, HU66 keys, Golf, Polo, Passat, Tiguan models.',
                                        },
                                        {
                                            brand: 'Ford',
                                            details: 'Tibbe keys, PATS immobiliser, Transit van keys, Focus, Fiesta.',
                                        },
                                        {
                                            brand: 'Vauxhall',
                                            details: 'Astra, Corsa, Insignia. HU100 key blanks, immobiliser resets.',
                                        },
                                        {
                                            brand: 'Nissan',
                                            details: 'Qashqai, Juke, Micra. NATS immobiliser, Intelligent Key systems.',
                                        },
                                        {
                                            brand: 'Toyota',
                                            details: 'Prius smart keys, Yaris, Corolla, RAV4. Immobiliser bypass available.',
                                        },
                                    ].map((vehicle, index) => (
                                        <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                                            <div className="flex items-center gap-3 mb-2">
                                                <Car className="w-6 h-6 text-[hsl(25,100%,50%)]" />
                                                <h3 className="text-xl font-bold text-[hsl(220,68%,18%)]">{vehicle.brand}</h3>
                                            </div>
                                            <p className="text-gray-700">{vehicle.details}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Cost Comparison */}
                    <section className="py-16 bg-gray-50">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[hsl(220,68%,18%)]">
                                    Why Not Use a Dealer?
                                </h2>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="bg-white p-8 rounded-xl border-2 border-red-200">
                                        <h3 className="text-2xl font-bold mb-4 text-red-600">Main Dealer</h3>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start gap-2">
                                                <span className="text-red-600 font-bold">✗</span>
                                                <span>Vehicle must be recovered to dealership (£150-£300 towing)</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-red-600 font-bold">✗</span>
                                                <span>7-14 day wait for key ordering</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-red-600 font-bold">✗</span>
                                                <span>Premium pricing (often £300-£600)</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-red-600 font-bold">✗</span>
                                                <span>Workshop labour charges apply</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-8 rounded-xl border-2 border-green-200">
                                        <h3 className="text-2xl font-bold mb-4 text-green-600">{SITE_CONFIG.siteName}</h3>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                                <span>We come to you anywhere in Manchester</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                                <span>Same-day service (60-90 minute arrival)</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                                <span>Competitive fixed quotes provided upfront</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                                <span>12-month warranty on all new keys</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Common Scenarios */}
                    <section className="py-16 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                                    Common Lost Key Situations in Manchester
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        {
                                            scenario: 'Lost keys during night out in Northern Quarter',
                                            solution: 'We provide 24-hour lost key service. Call us from the venue, we arrive within 60 minutes to create new keys on-site.',
                                        },
                                        {
                                            scenario: 'Keys stolen with handbag at Trafford Centre',
                            solution: 'Beyond key replacement, we can reprogram your immobiliser to invalidate the stolen keys for security.',
                                        },
                                        {
                                            scenario: 'Lost spare key, only one remaining',
                                            solution: 'Don\'t wait until you\'re stranded. We create duplicate keys before emergency strikes — much cheaper than full lost key service.',
                                        },
                                        {
                                            scenario: 'Keys dropped in River Irwell or lost in Heaton Park',
                                            solution: 'Permanent loss situations are our speciality. No key retrieval needed — we create entirely new coded keys.',
                                        },
                                    ].map((item, index) => (
                                        <div key={index} className="bg-gray-50 p-6 rounded-lg">
                                            <h3 className="font-bold mb-2 text-[hsl(220,68%,18%)]">{item.scenario}</h3>
                                            <p className="text-gray-700">{item.solution}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="py-16 bg-gray-50">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                                    Lost Car Keys FAQs
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        {
                                            q: 'Can you replace my car key if I\'ve lost all copies?',
                                            a: 'Yes. We decode your locks to determine the key profile, cut a new blade, and program the transponder/remote from scratch. No original key required.',
                                        },
                                        {
                                            q: 'How much does lost key replacement cost in Manchester?',
                                            a: 'Pricing depends on vehicle make, key type (standard vs proximity), and programming complexity. Typical range: £120-£350. We provide exact quotes by phone before dispatch.',
                                        },
                                        {
                                            q: 'What documents do you need to replace lost keys?',
                                            a: 'V5C logbook (or V5C/2 new keeper slip), photo ID (driving licence/passport), and proof of address. We cannot proceed without ownership verification.',
                                        },
                                        {
                                            q: 'How long does lost key replacement take?',
                                            a: 'Once on-site: 30-90 minutes depending on vehicle security system. Some German vehicles with advanced immobilisers may require 2+ hours for EEPROM programming.',
                                        },
                                        {
                                            q: 'My keys were stolen — should I just get replacements?',
                                            a: 'We strongly recommend immobiliser reprogramming to delete the stolen key from your vehicle\'s memory. This prevents thieves using the old key.',
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
                                <Shield className="w-16 h-16 mx-auto mb-6 text-[hsl(25,100%,50%)]" />
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    Lost All Your Car Keys?
                                </h2>
                                <p className="text-xl mb-8 text-gray-200">
                                    Same-day replacement service across Manchester. We create new keys at your location — no towing needed.
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
                            <Link href="/services/car-key-replacement" className="text-blue-600 hover:underline mx-2">Car Key Replacement</Link> |
                            <Link href="/locations/manchester-auto-locksmith" className="text-blue-600 hover:underline mx-2">Manchester Auto Locksmith</Link> |
                            <Link href="/services/car-key-programming" className="text-blue-600 hover:underline mx-2">Key Programming</Link>
                        </div>
                    </section>
                </main>

                <Footer />
                <MobileCallButton />
            </div>
        </>
    );
}
