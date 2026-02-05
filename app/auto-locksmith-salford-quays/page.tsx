import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MapPin, Building2 } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/FooterEnhanced';
import MobileCallButton from '@/components/layout/MobileCallButton';

export const metadata: Metadata = {
    title: 'Auto Locksmith Salford Quays | MediaCityUK Car Key Service',
    description: `Salford Quays auto locksmith. MediaCityUK, Lowry, M50. Emergency car locksmith, key replacement, lockouts. Call ${SITE_CONFIG.phoneDisplay}.`,
};

export default function SalfordQuaysPage() {
    return (
        <>
            <div className="min-h-screen">
                <Navbar />
                <main>
                    <section className="relative bg-gradient-to-br from-[hsl(220,68%,18%)] to-[hsl(220,68%,25%)] text-white py-20">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto text-center">
                                <Building2 className="w-16 h-16 mx-auto mb-6 text-[hsl(25,100%,50%)]" />
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                    Auto Locksmith Salford Quays
                                </h1>
                                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                                    Emergency car locksmith serving Salford Quays, MediaCityUK, The Lowry, and M50 postcode. 24/7 mobile service. Fast response to waterfront apartments, BBC, ITV Studios.
                                </p>
                                <a
                                    href={`tel:${SITE_CONFIG.phone}`}
                                    className="inline-flex items-center gap-2 bg-[hsl(25,100%,50%)] hover:bg-[hsl(25,100%,45%)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                                >
                                    <Phone className="w-5 h-5" />
                                    Salford Quays: {SITE_CONFIG.phoneDisplay}
                                </a>
                            </div>
                        </div>
                    </section>

                    <section className="py-16 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto border-l-4 border-[hsl(25,100%,50%)] pl-6">
                                <h2 className="text-2xl font-bold mb-4 text-[hsl(220,68%,18%)]">
                                    Salford Quays Car Locksmith Service
                                </h2>
                                <p className="text-lg text-gray-700 mb-4">
                                    {SITE_CONFIG.siteName} provides dedicated auto locksmith coverage for Salford Quays, one of Manchester's premier waterfront developments. We serve residents and workers at MediaCityUK (BBC, ITV Studios), The Lowry Outlet Mall, NV Buildings, Huron, Michigan, and all M50 apartment complexes.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="py-16 bg-gray-50">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                                    Areas We Cover in Salford Quays
                                </h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        'MediaCityUK (BBC, ITV Studios, dock10)',
                                        'The Lowry Theatre & Outlet Mall',
                                        'Imperial War Museum North',
                                        'NV Buildings & Michigan Avenue',
                                        'Huron & Erie Apartments',
                                        'The Quays Shopping Centre',
                                        'Salford Quays Metrolink Station',
                                        'Broadway & Anchorage Apartments',
                                    ].map((area, index) => (
                                        <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                                            <MapPin className="w-5 h-5 inline-block mr-2 text-[hsl(25,100%,50%)]" />
                                            <span className="font-medium">{area}</span>
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
                                    Locked Out in Salford Quays?
                                </h2>
                                <p className="text-xl mb-8 text-gray-200">
                                    24/7 emergency auto locksmith service. We reach MediaCityUK, The Lowry, and all M50 areas fast.
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
                            <Link href="/locations/manchester-auto-locksmith" className="text-blue-600 hover:underline mx-2">Manchester Locksmith</Link> |
                            <Link href="/services/car-lockout" className="text-blue-600 hover:underline mx-2">Car Lockout</Link>
                        </div>
                    </section>
                </main>
                <Footer />
                <MobileCallButton />
            </div>
        </>
    );
}
