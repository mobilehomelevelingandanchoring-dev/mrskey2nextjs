import { Shield, Clock, MapPin, Award, Zap, CheckCircle } from 'lucide-react';

const benefits = [
    {
        icon: Clock,
        title: '24/7 Rapid Response',
        description: 'We prioritize emergencies. Our dispatchers guarantee a 20-40 minute ETA across Manchester.',
    },
    {
        icon: MapPin,
        title: 'We Come To You',
        description: 'No recovery trucks needed. Our mobile workshops are equipped with the latest key cutting tech.',
    },
    {
        icon: Shield,
        title: 'Fully Insured',
        description: 'Complete protection with £5M public liability and DBS-vetted expert technicians.',
    },
    {
        icon: Award,
        title: 'Dealership Tech',
        description: 'We use the same programming tools as main dealers, but at a fraction of the cost.',
    },
    {
        icon: Zap,
        title: 'Non-Destructive',
        description: 'Specialists in safe vehicle entry. We open your car without a single scratch or damage.',
    },
    {
        icon: CheckCircle,
        title: 'Transparent Pricing',
        description: 'No hidden call-out fees. The price we quote is the price you pay on the invoice.',
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-[hsl(220,68%,12%)] text-white overflow-hidden relative">
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-[hsl(25,100%,50%)] rounded-full blur-[100px]" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600 rounded-full blur-[150px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-block bg-[hsl(25,100%,50%)] text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6">
                            Key 2 BHP Advantage
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tight">
                            The Trusted Standard <br />
                            <span className="text-[hsl(25,100%,50%)]">Auto Locksmiths</span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-xl">
                            Serving Tameside and Greater Manchester with integrity. We don't just fix locks; we provide peace of mind in high-stress situations.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                <p className="text-3xl font-black text-[hsl(25,100%,50%)]">10+</p>
                                <p className="text-sm text-gray-400">Years Experience</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                <p className="text-3xl font-black text-[hsl(25,100%,50%)]">5-Star</p>
                                <p className="text-sm text-gray-400">Google Verified Rating</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;
                            return (
                                <div
                                    key={index}
                                    className="group p-8 rounded-[32px] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                                >
                                    <Icon className="w-10 h-10 text-[hsl(25,100%,50%)] mb-6 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-xl font-black mb-3">{benefit.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
