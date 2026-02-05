import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle2, MapPin, Building2, Clock, Car } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/FooterEnhanced';
import MobileCallButton from '@/components/layout/MobileCallButton';

export const metadata: Metadata = {
    title: 'Auto Locksmith Manchester City Centre | Emergency Car Key Service',
    description: `Manchester City Centre auto locksmith. Deansgate, Spinningfields, Northern Quarter car key service. Lockouts, key cutting, programming. Call ${SITE_CONFIG.phoneDisplay}.`,
};

export default function ManchesterCityCentrePage() {
    return (
        <>
            <div className="min-h-screen">
                <Navbar />

                <main>
                    {/* Hero Section */}
                    <section className="relative bg-gradient-to-br from-[hsl(220,68%,18%)] to-[hsl(220,68%,25%)] text-white py-20">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto text-center">
                                <Building2 className="w-16 h-16 mx-auto mb-6 text-[hsl(25,100%,50%)]" />
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                    Auto Locksmith Manchester City Centre
                                </h1>
                                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                                    Emergency car locksmith serving Deansgate, Spinningfields, Northern Quarter, Piccadilly Gardens, and all M1-M4 postcodes. 24/7 rapid response.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <a
                                        href={`tel:${SITE_CONFIG.phone}`}
                                        className="inline-flex items-center gap-2 bg-[hsl(25,100%,50%)] hover:bg-[hsl(25,100%,45%)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                                    >
                                        <Phone className="w-5 h-5" />
                                        City Centre Emergency: {SITE_CONFIG.phoneDisplay}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Authority Hook */}
                    <section className="py-16 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto border-l-4 border-[hsl(25,100%,50%)] pl-6">
                                <h2 className="text-2xl font-bold mb-4 text-[hsl(220,68%,18%)]">
                                    Manchester City Centre Car Locksmith Specialists
                                </h2>
                                <p className="text-lg text-gray-700 mb-4">
                                    {SITE_CONFIG.siteName} operates mobile locksmith vans specifically dedicated to Manchester city centre coverage. We navigate restricted zones, multi-storey car parks, and pedestrianised areas to reach customers locked out at Arndale Centre, Spinningfields office complexes, Northern Quarter venues, or residential apartments around Deansgate.
                                </p>
                                <p className="text-lg text-gray-700">
                                    Our technicians carry compact equipment kits for tight access situations: professional key programming tools, precision cutting machines, and non-destructive entry devices for emergency lockouts in congested urban environments.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* City Centre Areas Covered */}
                    <section className="py-16 bg-gray-50">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                                    City Centre Districts We Cover
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        {
                                            area: 'Deansgate & Spinningfields',
                                            landmarks: 'John Rylands Library, Manchester Cathedral, Beetham Tower, Left Bank',
                                        },
                                        {
                                            area: 'Northern Quarter',
                                            landmarks: 'Afflecks Palace, Piccadilly Records, Stevenson Square, Dale Street',
                                        },
                                        {
                                            area: 'Piccadilly & Chinatown',
                                            landmarks: 'Piccadilly Gardens, Manchester Piccadilly Station, Portland Street',
                                        },
                                        {
                                            area: 'Castlefield & Quays',
                                            landmarks: 'Deansgate Locks, Bridgewater Canal, Science & Industry Museum',
                                        },
                                        {
                                            area: 'Ancoats',
                                            landmarks: 'New Islington, Cutting Room Square, Great Ancoats Street',
                                        },
                                        {
                                            area: 'Oxford Road Corridor',
                                            landmarks: 'Manchester Metropolitan University, Oxford Road Station, Aquatics Centre',
                                        },
                                    ].map((district, index) => (
                                        <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                                            <div className="flex items-start gap-3 mb-2">
                                                <MapPin className="w-6 h-6 text-[hsl(25,100%,50%)] flex-shrink-0 mt-1" />
                                                <div>
                                                    <h3 className="text-xl font-bold text-[hsl(220,68%,18%)] mb-1">{district.area}</h3>
                                                    <p className="text-gray-700 text-sm">{district.landmarks}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* City Centre Specific Services */}
                    <section className="py-16 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                                    City Centre Locksmith Services
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        'Multi-Storey Car Park Assistance: Arndale, NCP Great Northern, Spinningfields',
                                        'Street Parking Lockouts: Deansgate, King Street, Peter Street',
                                        'Hotel Guest Support: Radisson, Kimpton Clocktower, Dakota',
                                        'Office Worker Emergencies: Spinningfields, Piccadilly Place',
                                        'Night Out Recovery: Northern Quarter, Deansgate Locks venues',
                                        'Same-Day Key Cutting: On-site mobile service at your vehicle',
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

                    {/* Response Times */}
                    <section className="py-16 bg-gray-50">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[hsl(220,68%,18%)]">
                                    Fast Response in City Centre
                                </h2>
                                <div className="bg-white p-8 rounded-xl border-2 border-[hsl(25,100%,50%)]">
                                    <div className="grid md:grid-cols-3 gap-6 text-center mb-6">
                                        <div>
                                            <Clock className="w-12 h-12 mx-auto mb-3 text-[hsl(25,100%,50%)]" />
                                            <div className="text-3xl font-bold text-[hsl(220,68%,18%)] mb-2">20-30min</div>
                                            <p className="text-gray-700">M1-M4 Postcodes</p>
                                        </div>
                                        <div>
                                            <Car className="w-12 h-12 mx-auto mb-3 text-[hsl(25,100%,50%)]" />
                                            <div className="text-3xl font-bold text-[hsl(220,68%,18%)] mb-2">Mobile</div>
                                            <p className="text-gray-700">Van Comes To You</p>
                                        </div>
                                        <div>
                                            <Phone className="w-12 h-12 mx-auto mb-3 text-[hsl(25,100%,50%)]" />
                                            <div className="text-3xl font-bold text-[hsl(220,68%,18%)] mb-2">24/7</div>
                                            <p className="text-gray-700">Day & Night Service</p>
                                        </div>
                                    </div>
                                    <p className="text-center text-gray-600 text-sm">
                                        Response times vary based on traffic, pedestrian zones, and parking restrictions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Common City Centre Scenarios */}
                    <section className="py-16 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                                    Common City Centre Situations
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        {
                                            scenario: 'Locked keys in car at Arndale multi-storey',
                                            solution: 'We enter NCP and multi-storey car parks with portable equipment. Non-destructive entry completed within 10 minutes of arrival.',
                                        },
                                        {
                                            scenario: 'Lost keys during night out in Northern Quarter',
                                            solution: '24-hour service means we arrive even at 2am. Complete key replacement from lock decoding outside bar/club.',
                                        },
                                        {
                                            scenario: 'Office worker lockout on double yellow lines',
                                            solution: 'Fast response priority to avoid parking tickets. Keys cut and programmed roadside in 30-45 minutes.',
                                        },
                                        {
                                            scenario: 'Hotel guest can\'t access rental car',
                                            solution: 'Service at Radisson, Marriott, Dakota hotels. Coordinate with hotel security, resolve key issues on-site.',
                                        },
                                    ].map((item, index) => (
                                        <div key={index} className="bg-gray-50 p-6 rounded-lg">
                                            <h3 className="font-bold mb-2 text-[hsl(220,68%,18%)]">{item.scenario}</h3>
                                            <p className="text-gray-700">{item.solution}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Parking & Access Info */}
                    <section className="py-16 bg-gray-50">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                                    Multi-Storey Car Parks We Access
                                </h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        'Arndale Centre Car Park (Withy Grove)',
                                        'NCP Great Northern (Watson Street)',
                                        'Spinningfields Car Park (Hardman Street)',
                                        'Q-Park Piccadilly (Portland Street)',
                                        'NCP Manchester Central (Lower Mosley Street)',
                                        'The Printworks Car Park (Withy Grove)',
                                    ].map((carpark, index) => (
                                        <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                                            <Building2 className="w-5 h-5 inline-block mr-2 text-[hsl(25,100%,50%)]" />
                                            <span className="font-medium">{carpark}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-gray-700 mt-6 text-center">
                                    Our vans are height-restricted compatible. Alternatively, we carry equipment on foot to upper levels.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="py-16 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                                    City Centre Locksmith FAQs
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        {
                                            q: 'Can you reach me in a multi-storey car park?',
                                            a: 'Yes. We coordinate with car park operators and either bring equipment on foot or use compact vans for height-restricted entry.',
                                        },
                                        {
                                            q: 'How quickly can you arrive in Manchester city centre?',
                                            a: 'Typically 20-30 minutes from call to arrival for M1-M4 postcodes. Peak traffic and pedestrian zones may extend this slightly.',
                                        },
                                        {
                                            q: 'I\'m parked on double yellow lines — can you help fast?',
                                            a: 'Absolutely. We prioritise urgent situations to minimise parking ticket risk. Emergency lockouts resolved in under 15 minutes.',
                                        },
                                        {
                                            q: 'Do you charge extra for city centre call-outs?',
                                            a: 'No additional charges for city centre locations. Fixed quote provided before dispatch.',
                                        },
                                        {
                                            q: 'Can you meet me at a specific landmark?',
                                            a: 'Yes. Tell us your exact location (e.g. "outside Piccadilly Station entrance" or "Spinningfields by Left Bank"). We'll find you.',
                                        },
                                    ].map((faq, index) => (
                                        <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                                            <h3 className="font-bold mb-2 text-[hsl(220,68%,18%)]">{faq.q}</h3>
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
                                <MapPin className="w-16 h-16 mx-auto mb-6 text-[hsl(25,100%,50%)]" />
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    Stuck in Manchester City Centre?
                                </h2>
                                <p className="text-xl mb-8 text-gray-200">
                                    Emergency auto locksmith service across Deansgate, Northern Quarter, Spinningfields. We come to you.
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

                    {/* Internal Links */}
                    <section className="py-8 bg-gray-100">
                        <div className="container mx-auto px-4 text-center">
                            <Link href="/locations/manchester-auto-locksmith" className="text-blue-600 hover:underline mx-2">Manchester Auto Locksmith</Link> |
                            <Link href="/services/car-lockout" className="text-blue-600 hover:underline mx-2">Car Lockout Service</Link> |
                            <Link href="/24-hour-auto-locksmith-manchester" className="text-blue-600 hover:underline mx-2">24 Hour Service</Link>
                        </div>
                    </section>
                </main>

                <Footer />
                <MobileCallButton />
            </div>
        </>
    );
}
