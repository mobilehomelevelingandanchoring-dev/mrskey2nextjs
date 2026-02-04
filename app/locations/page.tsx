import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/FooterEnhanced';
import MobileCallButton from '@/components/layout/MobileCallButton';

export const metadata: Metadata = {
    title: 'Service Areas | Mobile Auto Locksmith Manchester',
    description: 'We provide mobile auto locksmith services across Manchester and surrounding areas. Check our service locations including Manchester, Salford, and more.',
};

export default function LocationsPage() {
    const locations = [
        { name: 'Manchester Auto Locksmith', slug: 'city-1-auto-locksmith' },
        { name: 'Salford Auto Locksmith', slug: 'city-2-auto-locksmith' },
        { name: 'Stockport Auto Locksmith', slug: 'stockport-auto-locksmith' },
        { name: 'Bolton Auto Locksmith', slug: 'bolton-auto-locksmith' },
        { name: 'Oldham Auto Locksmith', slug: 'oldham-auto-locksmith' },
        // Add more locations as they are created
        // { name: '[City 3] Auto Locksmith', slug: 'city-3-auto-locksmith' },
    ];

    return (
        <>
            <div className="min-h-screen flex flex-col">
                <Navbar />

                <main className="flex-grow">
                    <section className="bg-[hsl(220,68%,18%)] text-white py-16">
                        <div className="container mx-auto px-4 text-center">
                            <h1 className="text-4xl font-bold mb-4">Service Areas</h1>
                            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                                We provide fast, reliable mobile auto locksmith services across the entire region. Find your local locksmith below.
                            </p>
                        </div>
                    </section>

                    <section className="py-16">
                        <div className="container mx-auto px-4">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                                {locations.map((loc) => (
                                    <Link
                                        key={loc.slug}
                                        href={`/locations/${loc.slug}`}
                                        className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-[hsl(25,100%,50%)] transition-all"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <MapPin className="text-[hsl(25,100%,50%)] w-6 h-6" />
                                                <h2 className="text-xl font-bold group-hover:text-[hsl(25,100%,50%)] transition-colors">
                                                    {loc.name}
                                                </h2>
                                            </div>
                                            <ArrowRight className="text-gray-400 group-hover:text-[hsl(25,100%,50%)] transition-colors" />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>

                <Footer />
                <MobileCallButton />
            </div>
        </>
    );
}
