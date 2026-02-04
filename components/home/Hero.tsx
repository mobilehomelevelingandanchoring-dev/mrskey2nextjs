import Link from 'next/link';
import { Phone, CheckCircle, ShieldCheck, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';

export default function Hero() {
    return (
        <section className="relative bg-[hsl(220,68%,18%)] text-white overflow-hidden">
            {/* Abstract Background Decoration */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-[hsl(25,100%,50%)] opacity-10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-500 opacity-10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 pt-12 pb-20 md:pt-24 md:pb-32 relative z-10">
                <div className="max-w-4xl">
                    {/* Trust Badge Mobile-First */}
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-8 border border-white/20">
                        <ShieldCheck className="w-5 h-5 text-[hsl(25,100%,50%)]" />
                        <span className="text-sm font-bold tracking-tight">Verified UK Limited Company</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
                        24/7 Mobile <br className="hidden sm:block" />
                        <span className="text-[hsl(25,100%,50%)]">Auto Locksmith</span> <br className="hidden sm:block" />
                        in Manchester
                    </h1>

                    <p className="text-lg md:text-2xl mb-10 text-gray-300 max-w-2xl leading-relaxed">
                        Lost your keys? Locked out? We offer fast, 20-minute response for car key replacement and emergency entry across Greater Manchester.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                        <a
                            href={`tel:${SITE_CONFIG.phone}`}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[hsl(25,100%,50%)] hover:bg-[hsl(25,100%,45%)] text-white px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-orange-500/40 active:scale-95 translate-y-0 hover:-translate-y-1"
                        >
                            <Phone className="w-6 h-6 fill-current" />
                            {SITE_CONFIG.phoneDisplay}
                        </a>
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-10 py-5 rounded-2xl font-bold text-xl transition-all active:scale-95"
                        >
                            Get a local Quote
                        </Link>
                    </div>

                    {/* Local Proof Mini-Block */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/10">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center border border-green-500/30">
                                <CheckCircle className="w-6 h-6 text-green-400" />
                            </div>
                            <div>
                                <p className="font-bold text-lg">20 Min ETA</p>
                                <p className="text-sm text-gray-400">Fast Local Response</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                                <MapPin className="w-6 h-6 text-blue-400" />
                            </div>
                            <div>
                                <p className="font-bold text-lg">Fully Mobile</p>
                                <p className="text-sm text-gray-400">We Come To You</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center border border-orange-500/30">
                                <ShieldCheck className="w-6 h-6 text-[hsl(25,100%,50%)]" />
                            </div>
                            <div>
                                <p className="font-bold text-lg">No Win, No Fee</p>
                                <p className="text-sm text-gray-400">Locked Out? No Charge</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
