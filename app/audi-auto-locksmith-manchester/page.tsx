import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle2, Car } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/FooterEnhanced';
import MobileCallButton from '@/components/layout/MobileCallButton';

export const metadata: Metadata = {
    title: 'Audi Auto Locksmith Manchester | Key Programming & Replacement',
    description: `Audi car key specialists in Manchester. Advanced Key, MQB platform, keyless entry programming. Lost keys, lockouts. Call ${SITE_CONFIG.phoneDisplay}.`,
};

export default function AudiLocksmithPage() {
    return (
        <>
            <div className="min-h-screen">
                <Navbar />
                <main>
                    <section className="relative bg-gradient-to-br from-[hsl(220,68%,18%)] to-[hsl(220,68%,25%)] text-white py-20">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto text-center">
                                <Car className="w-16 h-16 mx-auto mb-6 text-[hsl(25,100%,50%)]" />
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                    Audi Auto Locksmith Manchester
                                </h1>
                                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                                    Audi key programming specialists. Advanced Key, MQB platform, keyless entry systems. A3, A4, Q5, TT across Manchester.
                                </p>
                                <a
                                    href={`tel:${SITE_CONFIG.phone}`}
                                    className="inline-flex items-center gap-2 bg-[hsl(25,100%,50%)] hover:bg-[hsl(25,100%,45%)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                                >
                                    <Phone className="w-5 h-5" />
                                    Audi Keys: {SITE_CONFIG.phoneDisplay}
                                </a>
                            </div>
                        </div>
                    </section>

                    <section className="py-16 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto border-l-4 border-[hsl(25,100%,50%)] pl-6">
                                <h2 className="text-2xl font-bold mb-4 text-[hsl(220,68%,18%)]">
                                    Audi Security System Specialists
                                </h2>
                                <p className="text-lg text-gray-700">
                                    {SITE_CONFIG.siteName} technicians are trained in Audi MQB platform programming, Advanced Key systems, and keyless entry coding using VCDS and Autel diagnostic equipment across Manchester.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="py-16 bg-gray-50">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                                    Audi Models We Service
                                </h2>
                                <div className="grid md:grid-cols-3 gap-4">
                                    {['A1', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q2', 'Q3', 'Q5', 'Q7', 'Q8', 'TT', 'R8', 'e-tron'].map((model, index) => (
                                        <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                                            <CheckCircle2 className="w-5 h-5 inline-block mr-2 text-[hsl(25,100%,50%)]" />
                                            <span className="font-medium">Audi {model}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="py-16 bg-gradient-to-br from-[hsl(220,68%,18%)] to-[hsl(220,68%,25%)] text-white">
                        <div className="container mx-auto px-4">
                            <div className="max-w-3xl mx-auto text-center">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    Need Audi Key Service?
                                </h2>
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

                    <section className="py-8 bg-gray-100">
                        <div className="container mx-auto px-4 text-center">
                            <Link href="/locations/manchester-auto-locksmith" className="text-blue-600 hover:underline mx-2">Manchester Locksmith</Link> |
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
