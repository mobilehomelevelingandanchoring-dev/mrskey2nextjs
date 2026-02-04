import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle2, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/FooterEnhanced';
import MobileCallButton from '@/components/layout/MobileCallButton';

export const metadata: Metadata = {
    title: 'Ignition Switch Repair Manchester | Stuck Key Fix & Replacement',
    description: `Car key won't turn? Ignition jammed? We repair and replace ignition barrels for all makes. Mobile service in Manchester & Stockport. Call ${SITE_CONFIG.phoneDisplay}.`,
};

export default function IgnitionRepairPage() {
    return (
        <>
            <div className="min-h-screen">
                <Navbar />

                <main>
                    {/* Hero Section */}
                    <section className="relative bg-gradient-to-br from-[hsl(220,68%,18%)] to-[hsl(220,68%,25%)] text-white py-20">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto text-center">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                    Ignition Repair & Replacement
                                </h1>
                                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                                    If your key enters the ignition but refuses to turn, or feels "sticky," you likely have a worn ignition barrel. **Don't force it**—you could snap the key.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <a
                                        href={`tel:${SITE_CONFIG.phone}`}
                                        className="inline-flex items-center gap-2 bg-[hsl(25,100%,50%)] hover:bg-[hsl(25,100%,45%)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                                    >
                                        <Phone className="w-5 h-5" />
                                        Fix My Ignition
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
                                    Jammed Ignition Specialists
                                </h2>
                                <p className="text-lg text-gray-700 font-medium">
                                    **KEY 2 BHP AUTO LOCKSMITH LTD** specializes in repairing jammed ignitions and replacing worn barrels on-site. We carry replacement housings for common failures like Ford, Honda, and Vauxhall. We serve **Manchester** and surrounding areas.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Service Benefits */}
                    <section className="py-16 bg-gray-50">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                                    Why Choose Our Ignition Service?
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        'Repair First: We try to fix the wafers/tumblers before replacing the whole unit.',
                                        'Mobile Workshop: We strip and rebuild the steering column lock at your home.',
                                        'Key Matching: We can pin the new ignition to match your existing door keys.',
                                        'Common Faults Fixed: Honda "stubborn key" and VW "spinning barrel" issues resolved.',
                                        '12-Month Warranty: On all new ignition barrels installed.',
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

                    {/* How It Works */}
                    <section className="py-16 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[hsl(220,68%,18%)]">
                                    Repair Process
                                </h2>
                                <div className="space-y-8">
                                    {[
                                        {
                                            title: 'Diagnosis',
                                            desc: 'We determine if it\'s a key issue or a barrel issue.',
                                        },
                                        {
                                            title: 'Removal',
                                            desc: 'We carefully remove the ignition housing from the steering column.',
                                        },
                                        {
                                            title: 'Repair/Replace',
                                            desc: 'We replace worn wafers or install a brand new barrel.',
                                        },
                                        {
                                            title: 'Coding',
                                            desc: 'If needed, we recode the immobilizer ring.',
                                        },
                                        {
                                            title: 'Testing',
                                            desc: 'We ensure smooth turning and engine start.',
                                        },
                                    ].map((step, index) => (
                                        <div key={index} className="flex gap-4">
                                            <div className="flex-shrink-0 w-10 h-10 bg-[hsl(25,100%,50%)] text-white rounded-full flex items-center justify-center font-bold">
                                                {index + 1}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                                <p className="text-gray-700">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Local SEO Boost - NAP Block */}
                    <section className="py-16 bg-gray-50">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                                <h2 className="text-2xl font-bold mb-6 text-[hsl(220,68%,18%)]">
                                    Contact & Location
                                </h2>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <MapPin className="text-[hsl(25,100%,50%)] mt-1" />
                                            <div>
                                                <p className="font-bold">Address:</p>
                                                <p>{SITE_CONFIG.address}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Phone className="text-[hsl(25,100%,50%)] mt-1" />
                                            <div>
                                                <p className="font-bold">Phone:</p>
                                                <p>{SITE_CONFIG.phoneDisplay}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Clock className="text-[hsl(25,100%,50%)] mt-1" />
                                            <div>
                                                <p className="font-bold">Hours:</p>
                                                <p>{SITE_CONFIG.hours}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <ShieldCheck className="text-[hsl(25,100%,50%)] mt-1" />
                                            <div>
                                                <p className="font-bold">Business:</p>
                                                <p>{SITE_CONFIG.siteName}</p>
                                            </div>
                                        </div>
                                        <div className="pt-4">
                                            <a
                                                href={SITE_CONFIG.googleBusinessProfile}
                                                className="text-blue-600 hover:underline font-medium"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                View Google Business Profile
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                                        <p className="text-gray-500 font-medium">Google Map Embed Placeholder</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="py-16 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                                    Ignition FAQs
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        {
                                            q: 'Why won\'t my key turn?',
                                            a: 'Usually, the internal wafers have worn down or a debris buildup is jamming the lock.',
                                        },
                                        {
                                            q: 'Do I need a whole new set of keys?',
                                            a: 'Not usually. We can often "re-pin" the new ignition to work with your old keys.',
                                        },
                                        {
                                            q: 'Can you fix the "stealing wheel locked" issue?',
                                            a: 'Yes, this is often a symptom of a failing ignition housing which we can replace.',
                                        },
                                        {
                                            q: 'How much does it cost?',
                                            a: 'Repairs start from £80, replacements depend on the vehicle make.',
                                        },
                                        {
                                            q: 'How long does it take?',
                                            a: 'Typically 1-2 hours for a full rebuild.',
                                        },
                                    ].map((faq, index) => (
                                        <div key={index} className="bg-gray-50 p-6 rounded-lg">
                                            <h3 className="font-bold mb-2">{faq.q}</h3>
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
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    Key Won't Turn?
                                </h2>
                                <p className="text-xl mb-8 text-gray-200">
                                    Don't snap it! Let us fix the barrel professionally.
                                </p>
                                <a
                                    href={`tel:${SITE_CONFIG.phone}`}
                                    className="inline-flex items-center gap-2 bg-[hsl(25,100%,50%)] hover:bg-[hsl(25,100%,45%)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                                >
                                    <Phone className="w-5 h-5" />
                                    CALL {SITE_CONFIG.phoneDisplay}
                                </a>
                                <p className="mt-4 text-sm opacity-80">We Come To You.</p>
                            </div>
                        </div>
                    </section>

                    {/* Internal Links */}
                    <section className="py-8 bg-gray-100">
                        <div className="container mx-auto px-4 text-center">
                            <Link href="/services" className="text-blue-600 hover:underline mx-2">Back to Services</Link> |
                            <Link href="/services/broken-key-extraction" className="text-blue-600 hover:underline mx-2">Broken Key Extraction</Link> |
                            <Link href="/locations/denton-auto-locksmith" className="text-blue-600 hover:underline mx-2">Denton Auto Locksmith</Link>
                        </div>
                    </section>
                </main>

                <Footer />
                <MobileCallButton />
            </div>
        </>
    );
}
