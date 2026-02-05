import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle2, Radio, Shield, Wrench, Cpu } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/FooterEnhanced';
import MobileCallButton from '@/components/layout/MobileCallButton';

export const metadata: Metadata = {
    title: 'Transponder Car Keys Manchester | RFID Key Programming & Cutting',
    description: `Transponder chip key programming in Manchester. Immobiliser coding, RFID keys, all makes. Mobile service. Call ${SITE_CONFIG.phoneDisplay} for expert programming.`,
};

export default function TransponderKeysPage() {
    return (
        <>
            <div className="min-h-screen">
                <Navbar />

                <main>
                    {/* Hero Section */}
                    <section className="relative bg-gradient-to-br from-[hsl(220,68%,18%)] to-[hsl(220,68%,25%)] text-white py-20">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto text-center">
                                <Radio className="w-16 h-16 mx-auto mb-6 text-[hsl(25,100%,50%)]" />
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                    Transponder Car Keys Manchester
                                </h1>
                                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                                    Professional transponder chip key programming and cutting across Manchester. Immobiliser coding, RFID chip keys, all vehicle makes. Mobile service to your location.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <a
                                        href={`tel:${SITE_CONFIG.phone}`}
                                        className="inline-flex items-center gap-2 bg-[hsl(25,100%,50%)] hover:bg-[hsl(25,100%,45%)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                                    >
                                        <Phone className="w-5 h-5" />
                                        Transponder Programming: {SITE_CONFIG.phoneDisplay}
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
                                    Expert Transponder Key Programming Service
                                </h2>
                                <p className="text-lg text-gray-700 mb-4">
                                    Since 1995, virtually all cars sold in the UK feature transponder immobiliser systems. {SITE_CONFIG.siteName} technicians specialise in programming these RFID (Radio Frequency Identification) chip keys using manufacturer-grade diagnostic equipment across Manchester.
                                </p>
                                <p className="text-lg text-gray-700">
                                    Our mobile vans carry Autel IM608 Pro, Zed-Bull, and CGDI programmers capable of coding transponder chips for BMW, Mercedes, Audi, VW, Ford, Vauxhall, Toyota, Nissan, and over 50 other makes. We perform on-site ECU (Engine Control Unit) programming, immobiliser resets, and chip key duplication.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* How Transponder Keys Work */}
                    <section className="py-16 bg-gray-50">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[hsl(220,68%,18%)]">
                                    How Transponder Keys Work
                                </h2>
                                <div className="space-y-8">
                                    {[
                                        {
                                            icon: <Cpu className="w-10 h-10 text-[hsl(25,100%,50%)]" />,
                                            title: 'RFID Chip Inside Key',
                                            desc: 'A tiny microchip (transponder) embedded in the plastic head of your key. Contains a unique ID code.',
                                        },
                                        {
                                            icon: <Radio className="w-10 h-10 text-[hsl(25,100%,50%)]" />,
                                            title: 'Immobiliser Ring Around Ignition',
                                            desc: 'When you insert the key, an antenna ring around the ignition barrel sends a radio frequency signal.',
                                        },
                                        {
                                            icon: <Shield className="w-10 h-10 text-[hsl(25,100%,50%)]" />,
                                            title: 'Authentication Process',
                                            desc: 'The transponder chip responds with its unique ID. The immobiliser ECU verifies this ID against stored authorised keys.',
                                        },
                                        {
                                            icon: <CheckCircle2 className="w-10 h-10 text-[hsl(25,100%,50%)]" />,
                                            title: 'Engine Start Permission',
                                            desc: 'If the ID matches, the immobiliser allows fuel injection and ignition. Wrong or missing chip = engine won\'t start.',
                                        },
                                    ].map((step, index) => (
                                        <div key={index} className="flex gap-6 bg-white p-6 rounded-lg border border-gray-200">
                                            <div className="flex-shrink-0">
                                                {step.icon}
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

                    {/* Transponder Services */}
                    <section className="py-16 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                                    Transponder Key Services in Manchester
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        {
                                            service: 'Transponder Key Programming',
                                            details: 'Code new chip keys to your vehicle\'s immobiliser ECU. OBD programming or EEPROM methods.',
                                        },
                                        {
                                            service: 'Spare Transponder Key',
                                            details: 'Duplicate existing working key. Chip cloning or fresh programming from vehicle.',
                                        },
                                        {
                                            service: 'Lost Key Replacement',
                                            details: 'Create new transponder keys when all originals are lost. Extract security codes from immobiliser.',
                                        },
                                        {
                                            service: 'Immobiliser Reset',
                                            details: 'Delete old keys from system memory. Re-code immobiliser with new key IDs.',
                                        },
                                        {
                                            service: 'Chip Key Diagnosis',
                                            details: 'Test transponder chips for faults. Identify immobiliser communication errors.',
                                        },
                                        {
                                            service: 'Key Cloning Service',
                                            details: 'Copy existing chip data to blank transponder. Fast duplication for compatible systems.',
                                        },
                                    ].map((item, index) => (
                                        <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                                            <div className="flex items-center gap-3 mb-2">
                                                <Wrench className="w-6 h-6 text-[hsl(25,100%,50%)]" />
                                                <h3 className="text-xl font-bold text-[hsl(220,68%,18%)]">{item.service}</h3>
                                            </div>
                                            <p className="text-gray-700">{item.details}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Vehicle Systems */}
                    <section className="py-16 bg-gray-50">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                                    Immobiliser Systems We Program
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        {
                                            brand: 'Ford PATS (Passive Anti-Theft System)',
                                            details: 'Generations 1-6. Ford Focus, Fiesta, Mondeo, Transit. Red-chip and crypto-chip programming.',
                                        },
                                        {
                                            brand: 'VAG (Volkswagen/Audi Group)',
                                            details: 'Immobiliser 3, 4, 5. Volkswagen, Audi, Seat, Skoda. 48-bit and 4th generation crypto transponders.',
                                        },
                                        {
                                            brand: 'BMW EWS/CAS Systems',
                                            details: 'EWS2/3/4 and CAS modules. Crypto transponder programming via OBD or EEPROM.',
                                        },
                                        {
                                            brand: 'Mercedes-Benz IR & Crypto',
                                            details: 'Infrared keys (older models) and crypto transponders. EIS (Electronic Ignition Switch) programming.',
                                        },
                                        {
                                            brand: 'Nissan NATS (Nats Anti-Theft System)',
                                            details: 'NATS 5, NATS 6. Qashqai, Juke, Micra. Intelligent Key and standard transponders.',
                                        },
                                        {
                                            brand: 'Toyota/Lexus Immobiliser',
                                            details: 'H-chip, G-chip, 4D-67, 4D-68 transponders. Prius smart keys and conventional immobilisers.',
                                        },
                                        {
                                            brand: 'Vauxhall/Opel Immobiliser',
                                            details: 'ID40 crypto chips. Astra, Corsa, Insignia, Zafira immobiliser coding.',
                                        },
                                        {
                                            brand: 'Renault/Dacia',
                                            details: 'PCF7936, PCF7947 transponders. Megane, Clio, Scenic key card and conventional key programming.',
                                        },
                                    ].map((sys, index) => (
                                        <div key={index} className="bg-white p-6 rounded-lg border-l-4 border-[hsl(25,100%,50%)]">
                                            <h3 className="text-xl font-bold text-[hsl(220,68%,18%)] mb-2">{sys.brand}</h3>
                                            <p className="text-gray-700">{sys.details}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Programming Methods */}
                    <section className="py-16 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[hsl(220,68%,18%)]">
                                    Transponder Programming Methods
                                </h2>
                                <div className="grid md:grid-cols-3 gap-6">
                                    {[
                                        {
                                            method: 'OBD Programming',
                                            desc: 'Most common method. Connect diagnostic tool to vehicle\'s OBD port to program transponder via ECU.',
                                            speed: 'Fast (15-30 min)',
                                        },
                                        {
                                            method: 'EEPROM Programming',
                                            desc: 'Direct immobiliser chip reading. Required when OBD is locked or for older vehicles without OBD access.',
                                            speed: 'Moderate (45-90 min)',
                                        },
                                        {
                                            method: 'Key Cloning',
                                            desc: 'Copy existing working transponder data to new blank chip. Requires one functioning key.',
                                            speed: 'Very Fast (5-10 min)',
                                        },
                                    ].map((item, index) => (
                                        <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                                            <h3 className="text-xl font-bold text-[hsl(220,68%,18%)] mb-2">{item.method}</h3>
                                            <p className="text-gray-700 mb-3">{item.desc}</p>
                                            <span className="inline-block bg-[hsl(25,100%,50%)] text-white px-3 py-1 rounded-full text-sm font-bold">
                                                {item.speed}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Common Problems */}
                    <section className="py-16 bg-gray-50">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                                    Common Transponder Key Problems
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        {
                                            problem: 'Engine turns over but won\'t start',
                                            cause: 'Immobiliser not detecting transponder chip or chip has failed.',
                                            solution: 'Test chip with programmer. Replace or reprogram transponder.',
                                        },
                                        {
                                            problem: 'Intermittent starting issues',
                                            cause: 'Weak transponder signal, damaged antenna ring, or ECU communication fault.',
                                            solution: 'Diagnose with specialist equipment. Replace faulty components or reprogram system.',
                                        },
                                        {
                                            problem: 'Key works in door but not ignition',
                                            cause: 'Physical key blade works but transponder chip not programmed or faulty.',
                                            solution: 'Program transponder to immobiliser. Verify chip functionality.',
                                        },
                                        {
                                            problem: 'Newly cut key won\'t start car',
                                            cause: 'Key cutting service only duplicated physical blade — chip not programmed.',
                                            solution: 'Professional transponder programming required. We code chip to your vehicle.',
                                        },
                                    ].map((issue, index) => (
                                        <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                                            <h3 className="font-bold text-[hsl(220,68%,18%)] mb-1">{issue.problem}</h3>
                                            <p className="text-sm text-red-600 mb-2"><strong>Cause:</strong> {issue.cause}</p>
                                            <p className="text-gray-700"><strong>Solution:</strong> {issue.solution}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="py-16 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                                    Transponder Key FAQs
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        {
                                            q: 'Can I program a transponder key myself?',
                                            a: 'Some vehicles allow self-programming of additional keys if you already have two working keys. However, most modern cars require professional diagnostic equipment to access the immobiliser ECU.',
                                        },
                                        {
                                            q: 'How much does transponder key programming cost?',
                                            a: 'Prices vary by vehicle make and programming method. Typical range: £80-£180 for standard programming, £150-£350 for lost-all-keys scenarios. We provide exact quotes before starting work.',
                                        },
                                        {
                                            q: 'Can a locksmith program transponder keys, or must I visit a dealer?',
                                            a: 'Professional auto locksmiths like us have the same (often better) equipment as dealerships. We come to you in Manchester, work faster, and charge less.',
                                        },
                                        {
                                            q: 'How long does transponder programming take?',
                                            a: 'Standard OBD programming: 15-30 minutes. EEPROM methods: 45-90 minutes. Key cloning: 5-10 minutes. Lost all keys: 60-120 minutes depending on vehicle security.',
                                        },
                                        {
                                            q: 'What\'s the difference between chip cloning and programming?',
                                            a: 'Cloning copies an existing chip\'s data to a blank transponder (requires working key). Programming codes a new chip ID directly to the vehicle\'s immobiliser (works for lost keys).',
                                        },
                                    ].map((faq, index) => (
                                        <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
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
                                <Radio className="w-16 h-16 mx-auto mb-6 text-[hsl(25,100%,50%)]" />
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    Need Transponder Key Programming?
                                </h2>
                                <p className="text-xl mb-8 text-gray-200">
                                    Expert RFID chip key programming across Manchester. Mobile service to your location with professional diagnostic equipment.
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
                            <Link href="/services/car-key-programming" className="text-blue-600 hover:underline mx-2">Key Programming Service</Link> |
                            <Link href="/bmw-auto-locksmith-manchester" className="text-blue-600 hover:underline mx-2">BMW Locksmith</Link> |
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
