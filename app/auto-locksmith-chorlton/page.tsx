import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/FooterEnhanced';
import MobileCallButton from '@/components/layout/MobileCallButton';

export const metadata: Metadata = {
    title: 'Auto Locksmith Chorlton | Chorlton-cum-Hardy Car Key Service',
    description: `Chorlton auto locksmith. Chorlton-cum-Hardy, M21. Emergency car locksmith, key replacement. Call ${SITE_CONFIG.phoneDisplay}.`,
};

export default function ChorltonPage() {
    return (
        <>
            <div className="min-h-screen">
                <Navbar />
                <main>
                    <section className="relative bg-gradient-to-br from-[hsl(220,68%,18%)] to-[hsl(220,68%,25%)] text-white py-20">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto text-center">
                                <MapPin className="w-16 h-16 mx-auto mb-6 text-[hsl(25,100%,50%)]" />
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                    Auto Locksmith Chorlton
                                </h1>
                                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                                    Emergency car locksmith serving Chorlton-cum-Hardy and M21 postcode. 24/7 mobile service.
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
