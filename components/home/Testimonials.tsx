import { Star } from 'lucide-react';

const testimonials = [
    {
        name: 'Sarah M.',
        location: 'Manchester City Centre',
        rating: 5,
        text: 'Locked out of my car at 2am and they arrived within 25 minutes! Professional, friendly, and got me back in my car quickly. Highly recommend!',
        date: '2 days ago'
    },
    {
        name: 'James T.',
        location: 'Salford',
        rating: 5,
        text: 'Lost my car keys and needed a replacement urgently. Key 2 BHP came out same day, cut and programmed a new key on-site. Saved me a dealer trip!',
        date: '1 week ago'
    },
    {
        name: 'Emma R.',
        location: 'Stockport',
        rating: 5,
        text: 'Very professional. My car key stopped working and they diagnosed and fixed the issue quickly at my office. Transparent pricing and local team.',
        date: '3 weeks ago'
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-600 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-4">
                            <Star className="w-3 h-3 fill-current" />
                            Google Verified Reviews
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-[hsl(220,68%,18%)] tracking-tight">
                            Real Stories From <br /> <span className="text-[hsl(25,100%,50%)]">Happy Drivers</span>
                        </h2>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <div key={index} className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center gap-1 mb-6">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                                <span className="ml-2 text-xs font-bold text-gray-400 uppercase tracking-widest">{t.date}</span>
                            </div>
                            <p className="text-gray-600 mb-8 flex-1 leading-relaxed italic text-lg font-medium">&quot;{t.text}&quot;</p>
                            <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                                <div className="w-12 h-12 rounded-full bg-[hsl(220,68%,18%)] text-white flex items-center justify-center font-black">
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-black text-[hsl(220,68%,18%)]">{t.name}</p>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-sm">
                        Total 150+ Positive Reviews Across Tameside
                    </p>
                </div>
            </div>
        </section>
    );
}
