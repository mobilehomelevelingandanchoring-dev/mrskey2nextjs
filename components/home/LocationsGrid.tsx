import Link from 'next/link';
import { MapPin, Navigation } from 'lucide-react';

const locations = [
    { name: 'Manchester', slug: 'manchester-auto-locksmith' },
    { name: 'Denton', slug: 'denton-auto-locksmith' },
    { name: 'Stockport', slug: 'stockport-auto-locksmith' },
    { name: 'Tameside', slug: 'tameside-auto-locksmith' },
    { name: 'Hyde', slug: 'hyde-auto-locksmith' },
    { name: 'Bolton', slug: 'bolton-auto-locksmith' },
    { name: 'Oldham', slug: 'oldham-auto-locksmith' },
    { name: 'Ashton-under-Lyne', slug: 'ashton-under-lyne-auto-locksmith' },
];

export default function LocationsGrid() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-4">
                            <MapPin className="w-3 h-3" />
                            Service Coverage
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-[hsl(220,68%,18%)] tracking-tight">
                            Areas We <span className="text-[hsl(25,100%,50%)]">Serve</span>
                        </h2>
                    </div>
                    <Link
                        href="/locations"
                        className="inline-flex items-center gap-2 text-[hsl(25,100%,50%)] font-black uppercase tracking-widest text-sm hover:translate-x-2 transition-transform"
                    >
                        View All Locations <Navigation className="w-4 h-4 fill-current" />
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                    {locations.map((loc) => (
                        <Link
                            key={loc.slug}
                            href={`/locations/${loc.slug}`}
                            className="group p-6 sm:p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:bg-[hsl(220,68%,18%)] hover:border-[hsl(220,68%,18%)] transition-all duration-300"
                        >
                            <p className="text-lg font-black group-hover:text-white transition-colors">{loc.name}</p>
                            <p className="text-xs font-bold text-gray-600 group-hover:text-white/80 transition-colors uppercase tracking-widest mt-2">Auto Locksmith</p>
                        </Link>
                    ))}
                </div>

                {/* Mobile Specific Trust Badge */}
                <div className="mt-16 p-8 rounded-[3rem] bg-gradient-to-br from-[hsl(25,100%,50%)] to-orange-600 text-white flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left">
                        <p className="text-2xl font-black mb-2">Can't see your area?</p>
                        <p className="font-bold opacity-90">We cover within a 25-mile radius of Denton, Tameside.</p>
                    </div>
                    <a
                        href="tel:+447936755530"
                        className="bg-white text-[hsl(25,100%,50%)] px-10 py-5 rounded-2xl font-black text-xl shadow-xl active:scale-95 transition-transform"
                    >
                        Call Our Dispatcher
                    </a>
                </div>
            </div>
        </section>
    );
}
