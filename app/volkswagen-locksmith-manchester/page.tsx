import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle2, Car, Wrench } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/FooterEnhanced';
import MobileCallButton from '@/components/layout/MobileCallButton';

export const metadata: Metadata = {
    title: 'VW Locksmith Manchester | Volkswagen Key Programming & Replacement',
    description: `Volkswagen key specialists in Manchester. KESSY, HU66 keys, Golf, Polo, Passat, Tiguan. Lost keys, programming. Call ${SITE_CONFIG.phoneDisplay}.`,
};

export default function VWLocksmithPage() {
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
                                    Volkswagen Locksmith Manchester
                                </h1>
                                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                                    VW key programming specialists. KESSY keyless entry, HU66 key cutting, immobiliser coding for Golf, Polo, Passat, Tiguan, Transporter across Manchester.
                                </p>
                                <a
                                    href={`tel:${SITE_CONFIG.phone}`}
                                    className="inline-flex items-center gap-2 bg-[hsl(25,100%,50%)] hover:bg-[hsl(25,100%,45%)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                                >
                                    <Phone className="w-5 h-5" />
                                    VW Keys: {SITE_CONFIG.phoneDisplay}
                                </a>
                            </div>
                        </div>
                    </section>

                    <section className="py-16 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto border-l-4 border-[hsl(25,100%,50%)] pl-6">
                                <h2 className="text-2xl font-bold mb-4 text-[hsl(220,68%,18%)]">
                                    Volkswagen Security System Experts
                                </h2>
                                <p className="text-lg text-gray-700 mb-4">
                                    {SITE_CONFIG.siteName} technicians are trained in VW's Immobiliser 4 and Immobiliser 5 systems using VCDS diagnostic software and Autel IM608 programming tools. We handle HU66 key blade cutting, KESSY proximity key coding, and MQB platform key programming across Manchester.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="py-16 bg-gray-50">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                                    VW Models We Service
                                </h2>
                                <div className="grid md:grid-cols-3 gap-4">
                                    {[
                                        'Golf (Mk4-Mk8)',
                                        'Polo',
                                        'Passat',
                                        'Tiguan',
                                        'Touareg',
                                        'T-Roc',
                                        'Arteon',
                                        'Transporter (T5, T6)',
                                        'Caddy',
                                        'Sharan',
                                        'Touran',
                                        'Up!',
                                        'ID.3 Electric',
                                        'ID.4 Electric',
                                        'Scirocco',
                                    ].map((model, index) => (
                                        <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                                            <CheckCircle2 className="w-5 h-5 inline-block mr-2 text-[hsl(25,100%,50%)]" />
                                            <span className="font-medium">{model}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="py-16 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                                    VW Key Services
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        {
                                            service: 'KESSY Key Programming',
                                            details: 'Keyless Entry Start System coding for proximity keys. Push-button start programming.',
                                        },
                                        {
                                            service: 'HU66 Key Cutting',
                                            details: 'Precision laser cutting for VW HU66 key profiles. On-site mobile service.',
                                        },
                                        {
                                            service: 'Immobiliser 4/5 Programming',
                                            details: 'OBD key coding for Immobiliser 4 and latest Immobiliser 5 systems.',
                                        },
                                        {
                                            service: 'Lost VW Key Replacement',
                                            details: 'Complete key creation from scratch. Extract PIN codes from immobiliser.',
                                        },
                                        {
                                            service: 'Remote Fob Programming',
                                            details: 'Central locking remote synchronisation. Boot release and panic button coding.',
                                        },
                                        {
                                            service: 'Transporter Van Keys',
                                            details: 'T5, T6, T6.1 Transporter key replacement and programming service.',
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

                    <section className="py-16 bg-gradient-to-br from-[hsl(220,68%,18%)] to-[hsl(220,68%,25%)] text-white">
                        <div className="container mx-auto px-4">
                            <div className="max-w-3xl mx-auto text-center">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    Need VW Key Service in Manchester?
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
