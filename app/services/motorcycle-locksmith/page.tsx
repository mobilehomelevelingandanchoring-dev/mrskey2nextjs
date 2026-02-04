import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/FooterEnhanced';
import MobileCallButton from '@/components/layout/MobileCallButton';

export const metadata: Metadata = {
    title: 'Motorcycle Locksmith Manchester | Motorbike Keys & Ignitions',
    description: 'Lost motorcycle keys? We cut and program keys for Honda, Yamaha, Kawasaki, Suzuki, and more. Mobile bike locksmith in Manchester. Call for quote.',
};

export default function MotorcycleLocksmithPage() {
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
                                    Motorcycle Locksmith Services
                                </h1>
                                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                                    Motorcycles require specialized knowledge. You can't just call a regular car locksmith for a <strong>Honda HISS system</strong> or a twisted gas cap key. We are <strong>dedicated motorcycle security experts</strong>.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <a
                                        href={`tel:${SITE_CONFIG.phone}`}
                                        className="inline-flex items-center gap-2 bg-[hsl(25,100%,50%)] hover:bg-[hsl(25,100%,45%)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                                    >
                                        <Phone className="w-5 h-5" />
                                        Bike Key Help
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
                                    From replacing lost keys for your Scooter to programming Red Keys for Ducatis, our mobile van is equipped with the specific clamping jaws and software needed for 2-wheeled machinery. We come to your bike, saving you the hassle of finding a specialist trailer to tow it.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Service Benefits */}
                    <section className="py-16 bg-gray-50">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                                    Our Bike Services
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        'All Major Brands: Honda, Yamaha, Suzuki, Kawasaki, Ducati, Triumph, Piaggio.',
                                        'Gas Cap & Seat: We can make keys for fuel tanks and seat locks too.',
                                        'Magnet Keys: We can duplicate magnetic shutter keys for scooters.',
                                        'Ignition Swap: We replace damaged motorcycle ignition barrels.',
                                        'Mobile: We work on the roadside or in your garage.',
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
                                    Bike Key Process
                                </h2>
                                <div className="space-y-8">
                                    {[
                                        {
                                            title: 'Bike Details',
                                            desc: 'Tell us the specific model (e.g., Yamaha R1, 2015).',
                                        },
                                        {
                                            title: 'Code Reading',
                                            desc: 'We often read the key code stamped on the ignition or lock face.',
                                        },
                                        {
                                            title: 'Cutting',
                                            desc: 'We cut a new key to factory specs.',
                                        },
                                        {
                                            title: 'Programming',
                                            desc: 'For immobilized bikes, we clone the chip or program the ECU.',
                                        },
                                        {
                                            title: 'Test',
                                            desc: 'We ensure it turns the ignition, gas cap, and seat lock.',
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
                                    <p className="mb-4"><strong>Service Area:</strong> Serving Manchester Riders.</p>
                                    <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center mb-6">
                                        [Google Map Placeholder]
                                    </div>
                                    <div className="space-y-2">
                                        <p><strong>Business:</strong> Key2BHP Auto Locksmith</p>
                                        <p><strong>Phone:</strong> {SITE_CONFIG.phone}</p>
                                        <p><strong>Service:</strong> Motorbike Keys</p>
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
                                    Motorcycle FAQs
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        {
                                            q: 'Do you do keys for Scooters/Mopeds?',
                                            a: 'Yes, including the magnetic shutter keys used on many Vespas and Hondas.',
                                        },
                                        {
                                            q: 'I lost my only motorcycle key, can you help?',
                                            a: 'Yes, we can impression the lock or read the barrel code to generate a new key from scratch.',
                                        },
                                        {
                                            q: 'Can you program Ducati keys?',
                                            a: 'Yes, we handle challenging programming for European bikes including Ducati and Aprilia.',
                                        },
                                        {
                                            q: 'My key snapped in the gas cap.',
                                            a: 'We can extract the broken piece and cut you a new one right there.',
                                        },
                                        {
                                            q: 'Is it expensive?',
                                            a: 'It is significantly cheaper than buying a new lock set and ECU from the manufacturer.',
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
                                    Bike Keys Lost?
                                </h2>
                                <p className="text-xl mb-8 text-gray-200">
                                    Get back on two wheels today. Specialized Motorbike Locksmiths.
                                </p>
                                <a
                                    href={`tel:${SITE_CONFIG.phone}`}
                                    className="inline-flex items-center gap-2 bg-[hsl(25,100%,50%)] hover:bg-[hsl(25,100%,45%)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                                >
                                    <Phone className="w-5 h-5" />
                                    CALL {SITE_CONFIG.phone} - BIKE KEY HELP
                                </a>
                                <p className="mt-4 text-sm opacity-80">Honda, Yamaha, Suzuki & More.</p>
                            </div>
                        </div>
                    </section>

                    {/* Internal Links */}
                    <section className="py-8 bg-gray-100">
                        <div className="container mx-auto px-4 text-center">
                            <Link href="/services" className="text-blue-600 hover:underline mx-2">Back to Services</Link> |
                            <Link href="/services/car-key-replacement" className="text-blue-600 hover:underline mx-2">Car Key Replacement</Link> |
                            <Link href="/locations/oldham-auto-locksmith" className="text-blue-600 hover:underline mx-2">Oldham Auto Locksmith</Link>
                        </div>
                    </section>
                </main>

                <Footer />
                <MobileCallButton />
            </div>
        </>
    );
}
