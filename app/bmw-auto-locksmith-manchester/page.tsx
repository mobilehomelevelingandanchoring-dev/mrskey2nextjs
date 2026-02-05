import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle2, Car, Wrench, Shield } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/FooterEnhanced';
import MobileCallButton from '@/components/layout/MobileCallButton';

export const metadata: Metadata = {
    title: 'BMW Auto Locksmith Manchester | Key Programming & Replacement',
    description: `BMW car key specialists in Manchester. Comfort Access, Display Key, FEM/BDC programming. Lost keys, lockouts, EWS/CAS systems. Call ${SITE_CONFIG.phoneDisplay}.`,
};

export default function BMWLocksmithPage() {
    return (
        <>
            <div className="min-h-screen">
                <Navbar />

                <main>
                    {/* Hero Section */}
                    <section className="relative bg-gradient-to-br from-[hsl(220,68%,18%)] to-[hsl(220,68%,25%)] text-white py-20">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto text-center">
                                <Car className="w-16 h-16 mx-auto mb-6 text-[hsl(25,100%,50%)]" />
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                    BMW Auto Locksmith Manchester
                                </h1>
                                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                                    Specialist BMW key programming and replacement across Manchester. EWS, CAS4+, FEM/BDC systems. Comfort Access, Display Key, and remote fob experts.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <a
                                        href={`tel:${SITE_CONFIG.phone}`}
                                        className="inline-flex items-center gap-2 bg-[hsl(25,100%,50%)] hover:bg-[hsl(25,100%,45%)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                                    >
                                        <Phone className="w-5 h-5" />
                                        BMW Key Service: {SITE_CONFIG.phoneDisplay}
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
                                    BMW Security System Specialists
                                </h2>
                                <p className="text-lg text-gray-700 mb-4">
                                    {SITE_CONFIG.siteName} technicians are trained in BMW's advanced security architecture. We work with EWS (Electronic Wegfahrsperre), CAS (Car Access System), and latest-generation FEM/BDC modules using manufacturer-grade diagnostic equipment.
                                </p>
                                <p className="text-lg text-gray-700">
                                    Our mobile units carry Autel IM608 Pro, CGDI BMW programmer, and ISTA diagnostic software to program Comfort Access keys, Display Keys, and standard remote fobs for 1-Series through 7-Series, X-models, and Z4 across Manchester.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* BMW Services */}
                    <section className="py-16 bg-gray-50">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                                    BMW Key Services in Manchester
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        {
                                            service: 'Lost BMW Key Replacement',
                                            details: 'Complete key creation from lock decoding. No spare needed. Program new keys to CAS/FEM modules on-site.',
                                        },
                                        {
                                            service: 'Comfort Access Programming',
                                            details: 'Proximity key coding for keyless entry and push-button start. Full synchronisation with vehicle antenna modules.',
                                        },
                                        {
                                            service: 'Display Key Service',
                                            details: 'Touchscreen key replacement and programming for 5/7-Series. Remote parking display configuration.',
                                        },
                                        {
                                            service: 'EWS System Repair',
                                            details: 'EWS2/3/4 immobiliser fault diagnosis. EEPROM reading and key adaptation for older BMWs (E36-E46 era).',
                                        },
                                        {
                                            service: 'CAS Module Programming',
                                            details: 'CAS2, CAS3, CAS3+, CAS4 programming. Key synchronisation and immobiliser reset.',
                                        },
                                        {
                                            service: 'Emergency BMW Lockout',
                                            details: 'Non-destructive entry for locked keys inside. Door lock decoding with Lishi BMW tools.',
                                        },
                                    ].map((item, index) => (
                                        <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
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

                    {/* BMW Models Covered */}
                    <section className="py-16 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                                    BMW Models We Service
                                </h2>
                                <div className="grid md:grid-cols-3 gap-4">
                                    {[
                                        '1 Series (E87, F20, F40)',
                                        '2 Series (F22, F45, G42)',
                                        '3 Series (E46, E90, F30, G20)',
                                        '4 Series (F32, G22)',
                                        '5 Series (E39, E60, F10, G30)',
                                        '6 Series (E63, F12)',
                                        '7 Series (E65, F01, G11)',
                                        'X1 (E84, F48, U11)',
                                        'X3 (E83, F25, G01)',
                                        'X5 (E53, E70, F15, G05)',
                                        'X6 (E71, F16, G06)',
                                        'Z4 (E85, E89, G29)',
                                        'i3 Electric',
                                        'i8 Hybrid',
                                        'M-Sport Models',
                                    ].map((model, index) => (
                                        <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-center">
                                            <CheckCircle2 className="w-5 h-5 inline-block mr-2 text-[hsl(25,100%,50%)]" />
                                            <span className="font-medium">{model}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-gray-700 text-center mt-6">
                                    From 1995 E36 models to latest 2024 G-series platforms.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Technical Expertise */}
                    <section className="py-16 bg-gray-50">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[hsl(220,68%,18%)]">
                                    BMW Security Systems We Program
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        {
                                            system: 'EWS (Electronic Wegfahrsperre)',
                                            years: '1995-2006',
                                            details: 'Generations EWS2, EWS3, EWS4. EEPROM-based key coding. Used in E36, E38, E39, E46, E53, E83, E85 models.',
                                        },
                                        {
                                            system: 'CAS (Car Access System)',
                                            years: '2006-2017',
                                            details: 'CAS2 through CAS4+ modules. OBD key programming via diagnostic port. Comfort Access integration. E60, E90, F10, F30 generation.',
                                        },
                                        {
                                            system: 'FEM/BDC (Footwell/Body Domain Controller)',
                                            years: '2013-Present',
                                            details: 'Latest architecture in F-series and G-series. Requires ISTA/D software and dealer-level diagnostic access. Advanced security protocols.',
                                        },
                                    ].map((sys, index) => (
                                        <div key={index} className="bg-white p-6 rounded-lg border-l-4 border-[hsl(25,100%,50%)]">
                                            <div className="flex items-center gap-3 mb-2">
                                                <Shield className="w-6 h-6 text-[hsl(25,100%,50%)]" />
                                                <h3 className="text-xl font-bold text-[hsl(220,68%,18%)]">{sys.system}</h3>
                                                <span className="text-sm bg-gray-200 px-3 py-1 rounded-full">{sys.years}</span>
                                            </div>
                                            <p className="text-gray-700">{sys.details}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Common BMW Issues */}
                    <section className="py-16 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                                    Common BMW Key Problems in Manchester
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        {
                                            problem: '"Key Not Detected" warning with Comfort Access',
                                            solution: 'Low key battery or CAS antenna fault. We diagnose with ISTA, replace batteries, or reprogram key-to-antenna synchronisation.',
                                        },
                                        {
                                            problem: 'Display Key touchscreen unresponsive',
                                            solution: 'Display Key requires replacement. We source OEM keys and program to your 5/7-Series with remote parking features intact.',
                                        },
                                        {
                                            problem: 'EWS immobiliser preventing engine start',
                                            solution: 'EEPROM corruption or key desync. We read EWS module, verify ISN (Immobiliser Secret Number), and re-code keys.',
                                        },
                                        {
                                            problem: 'Lost all keys for F30 3-Series',
                                            solution: 'CAS4/CAS4+ OBD programming. Extract ISN via diagnostic port, generate new key data, cut blade, program remote and transponder.',
                                        },
                                    ].map((issue, index) => (
                                        <div key={index} className="bg-gray-50 p-6 rounded-lg">
                                            <h3 className="font-bold mb-2 text-[hsl(220,68%,18%)]">{issue.problem}</h3>
                                            <p className="text-gray-700">{issue.solution}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="py-16 bg-gray-50">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                                    BMW Locksmith FAQs
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        {
                                            q: 'Can you replace a lost BMW key without the original?',
                                            a: 'Yes. For CAS systems (2006+), we extract the ISN via OBD diagnostics and program new keys on-site. Older EWS systems require EEPROM reading from the module.',
                                        },
                                        {
                                            q: 'How much does BMW key replacement cost in Manchester?',
                                            a: 'Standard remote key: £180-£250. Comfort Access key: £250-£350. Display Key: £400-£550. Much cheaper than BMW main dealer pricing (often £450-£700).',
                                        },
                                        {
                                            q: 'How long does BMW key programming take?',
                                            a: 'Standard programming: 45-60 minutes. Complex scenarios (FEM/BDC modules, lost all keys, immobiliser faults): 90-120 minutes.',
                                        },
                                        {
                                            q: 'Do you provide genuine BMW keys or aftermarket?',
                                            a: 'We offer both. OEM BMW keys have the roundel logo. High-quality aftermarket keys are functionally identical at lower cost. Your choice.',
                                        },
                                        {
                                            q: 'Can you program BMW keys on Sunday or bank holidays?',
                                            a: "Yes, we operate 24/7 including weekends and bank holidays. BMW dealerships are typically closed, but we're available across Manchester.",
                                        },
                                    ].map((faq, index) => (
                                        <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
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
                                <Car className="w-16 h-16 mx-auto mb-6 text-[hsl(25,100%,50%)]" />
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    Need a BMW Key Specialist?
                                </h2>
                                <p className="text-xl mb-8 text-gray-200">
                                    Expert BMW locksmith service across Manchester. EWS, CAS, FEM programming. Mobile service to your location.
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
                            <Link href="/services/car-key-programming" className="text-blue-600 hover:underline mx-2">Key Programming Service</Link> |
                            <Link href="/transponder-car-keys-manchester" className="text-blue-600 hover:underline mx-2">Transponder Keys</Link>
                        </div>
                    </section>
                </main>

                <Footer />
                <MobileCallButton />
            </div>
        </>
    );
}
