import Link from 'next/link';
import { Key, Car, Wrench, Clock, Zap, ShieldCheck, ChevronRight } from 'lucide-react';

const services = [
    {
        icon: Key,
        title: 'Car Key Replacement',
        description: 'Lost or damaged car keys replaced quickly. Same-day service for all makes.',
        href: '/services/car-key-replacement',
    },
    {
        icon: Clock,
        title: 'Emergency Lockout',
        description: '24/7 fast response for car lockouts. Non-destructive entry.',
        href: '/services/car-lockout',
    },
    {
        icon: Car,
        title: 'Key Programming',
        description: 'Expert transponder key and key fob programming for all vehicles.',
        href: '/services/car-key-programming',
    },
    {
        icon: Wrench,
        title: 'Ignition Repair',
        description: 'Car ignition repair and replacement. Fix stuck ignitions quickly.',
        href: '/services/ignition-repair',
    },
    {
        icon: Zap,
        title: 'Key Extraction',
        description: 'Professional removal of snapped keys from ignitions and locks.',
        href: '/services/broken-key-extraction',
    },
    {
        icon: ShieldCheck,
        title: 'Auto Locksmith 24/7',
        description: 'Emergency roadside assistance for all vehicle key issues.',
        href: '/services/emergency-auto-locksmith',
    },
];

export default function ServicesGrid() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="mb-16">
                    <div className="inline-block bg-[hsl(25,100%,50%)]/10 text-[hsl(25,100%,40%)] px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-4 border border-[hsl(25,100%,50%)]/20">
                        Professional Services
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black mb-6 text-[hsl(220,68%,18%)] tracking-tight">
                        Our Auto Locksmith <br /> Specialized Solutions
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                        Precision engineering meets rapid emergency response. We are the trusted choice for drivers across Greater Manchester.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <Link
                                key={index}
                                href={service.href}
                                className="group relative bg-white border border-gray-100 rounded-[32px] p-8 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-2 flex flex-col h-full"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 group-hover:bg-[hsl(25,100%,50%)] transition-colors duration-300">
                                    <Icon className="w-8 h-8 text-[hsl(25,100%,50%)] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-2xl font-black mb-4 group-hover:text-[hsl(25,100%,50%)] transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-700 mb-8 flex-1 leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest text-gray-600 group-hover:text-[hsl(25,100%,50%)] transition-colors">
                                    Learn More
                                    <ChevronRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
