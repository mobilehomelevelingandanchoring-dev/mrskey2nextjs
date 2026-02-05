import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle2, Lock } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/FooterEnhanced';
import MobileCallButton from '@/components/layout/MobileCallButton';

export const metadata: Metadata = {
    title: 'Keys Locked in Boot Manchester | Emergency Car Boot Opening',
    description: `Keys locked in car boot? Emergency boot opening service across Manchester. Non-destructive entry. 24/7 service. Call ${SITE_CONFIG.phoneDisplay}.`,
};

export default function KeysLockedInBootPage() {
    return (
        <>
            <div className="min-h-screen">
                <Navbar />
                <main>
                    <section className="relative bg-gradient-to-br from-[hsl(220,68%,18%)] to-[hsl(220,68%,25%)] text-white py-20">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto text-center">
                                <Lock className="w-16 h-16 mx-auto mb-6 text-[hsl(25,100%,50%)]" />
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                    Keys Locked in Boot Manchester
                                </h1>
                                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                                    Emergency boot opening service. Keys locked in car boot or trunk? We provide non-destructive entry across Manchester. 24/7 rapid response.
                                </p>
                                <a
                                    href={`tel:${SITE_CONFIG.phone}`}
                                    className="inline-flex items-center gap-2 bg-[hsl(25,100%,50%)] hover:bg-[hsl(25,100%,45%)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                                >
                                    <Phone className="w-5 h-5" />
                                    Emergency: {SITE_CONFIG.phoneDisplay}
                                </a>
                            </div>
                        </div>
                    </section>

                    <section className="py-16 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto border-l-4 border-[hsl(25,100%,50%)] pl-6">
                                <h2 className="text-2xl font-bold mb-4 text-[hsl(220,68%,18%)]">
                                    Professional Boot Opening Service
                                </h2>
                                <p className="text-lg text-gray-700 mb-4">
                                    One of the most common lockout scenarios: keys accidentally locked inside the car boot while loading shopping, luggage, or equipment. {SITE_CONFIG.siteName} technicians use specialist Lishi tools and lock bypass techniques to access your boot without damaging paintwork, seals, or locking mechanisms across Manchester.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="py-16 bg-gray-50">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                                    How We Open Locked Boots
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        {
                                            method: 'Boot Release Cable Access',
                                            desc: 'Many vehicles have emergency boot release cables. We access these via rear seat fold-down or interior trim panel removal.',
                                        },
                                        {
                                            method: 'Door Lock Decoding',
                                            desc: 'Decode the driver door lock using Lishi picks, gain entry to vehicle interior, then activate electronic boot release button.',
                                        },
                                        {
                                            method: 'Boot Lock Picking',
                                            desc: 'Direct boot lock manipulation using professional picking tools. Non-destructive and leaves no damage.',
                                        },
                                        {
                                            method: 'Rear Seat Access',
                                            desc: 'For saloon cars, we may gain entry through doors, fold rear seats, and retrieve keys from boot cavity.',
                                        },
                                    ].map((item, index) => (
                                        <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                                            <h3 className="font-bold mb-2 text-[hsl(220,68%,18%)]">{item.method}</h3>
                                            <p className="text-gray-700">{item.desc}</p>
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
                                    Common Boot Lockout Situations
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        'Shopping trip: Keys placed in boot while loading bags, boot slams shut',
                                        'Airport parking: Keys locked in boot at Manchester Airport car parks',
                                        'Sports equipment: Golf clubs, bikes loaded with keys inside boot',
                                        'Child safety: Keys accidentally locked in boot with child inside vehicle',
                                        'Flat battery: Electronic boot release not working, keys trapped inside',
                                        'Boot latch failure: Mechanical fault preventing boot from opening',
                                    ].map((situation, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-6 h-6 text-[hsl(25,100%,50%)] flex-shrink-0 mt-1" />
                                            <span className="text-lg">{situation}</span>
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
                                    Keys Locked in Boot? We're Coming
                                </h2>
                                <p className="text-xl mb-8 text-gray-200">
                                    Emergency boot opening service across Manchester. 30-60 minute response. Non-destructive entry guaranteed.
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
                            <Link href="/services/car-lockout" className="text-blue-600 hover:underline mx-2">Car Lockout Service</Link> |
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
