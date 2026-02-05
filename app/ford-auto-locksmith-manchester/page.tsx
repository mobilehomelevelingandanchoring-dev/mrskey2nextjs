import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Car } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/FooterEnhanced';
import MobileCallButton from '@/components/layout/MobileCallButton';

export const metadata: Metadata = {
    title: 'Ford Auto Locksmith Manchester | Tibbe Key & PATS Programming',
    description: `Ford key specialists in Manchester. Tibbe keys, PATS immobiliser, Transit van keys, Focus, Fiesta. Call ${SITE_CONFIG.phoneDisplay}.`,
};

export default function FordLocksmithPage() {
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
                                    Ford Auto Locksmith Manchester
                                </h1>
                                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                                    Ford key specialists. Tibbe keys, PATS immobiliser programming, Transit van keys, Focus, Fiesta across Manchester.
                                </p>
                                <a
                                    href={`tel:${SITE_CONFIG.phone}`}
                                    className="inline-flex items-center gap-2 bg-[hsl(25,100%,50%)] hover:bg-[hsl(25,100%,45%)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                                >
                                    <Phone className="w-5 h-5" />
                                    Ford Keys: {SITE_CONFIG.phoneDisplay}
                                </a>
                            </div>
                        </div>
                    </section>

                    <section className="py-16 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto border-l-4 border-[hsl(25,100%,50%)] pl-6">
                                <h2 className="text-2xl font-bold mb-4 text-[hsl(220,68%,18%)]">
                                    Ford PATS & Tibbe Key Specialists
                                </h2>
                                <p className="text-lg text-gray-700">
                                    {SITE_CONFIG.siteName} technicians are trained in Ford PATS (Passive Anti-Theft System) immobiliser programming and Tibbe key cutting for Transit vans, Focus, Fiesta, Mondeo across Manchester.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="py-16 bg-gradient-to-br from-[hsl(220,68%,18%)] to-[hsl(220,68%,25%)] text-white">
                        <div className="container mx-auto px-4">
                            <div className="max-w-3xl mx-auto text-center">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    Need Ford Key Service?
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
                            <Link href="/locations/manchester-auto-locksmith" className="text-blue-600 hover:underline mx-2">Manchester Locksmith</Link>
                        </div>
                    </section>
                </main>
                <Footer />
                <MobileCallButton />
            </div>
        </>
    );
}
