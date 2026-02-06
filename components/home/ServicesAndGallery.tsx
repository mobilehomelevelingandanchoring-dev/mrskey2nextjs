import React from "react";
import Image from "next/image";

const Gallery = () => {
    const gallery = [
        "https://media.istockphoto.com/id/1333332393/photo/girl-opens-the-car-with-a-key-close-up.jpg?s=612x612&w=0&k=20&c=XQQxamubF8FVab792q7--nFfATmzGZCSV8zzaVb3bzI=",
        "https://markhamlockandsafe.ca/wp-content/uploads/2014/09/AUTOMOTIVE-LOCKSMITH-777.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR0D9xmTqIr8CT5u3H6SPsmrr5tczhPucOmA&s",
        "https://www.carkeyssolutions.co.uk/wp-content/uploads/2024/11/sdsf.webp",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8rKTgZc25-SHe2p_dWhwJ9s-5Z1Q6hL6MaQ&s",
        "https://carkeyking.com/wp-content/uploads/2021/12/Auto-Locksmith-Bronx8.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLYAe2uMsZ0vinBMCPtETPGYWmaHa14wB9Aw&s",
        "https://img.freepik.com/premium-photo/young-woman-holding-hand-car-keys_264197-19979.jpg",
    ];

    return (
        <section className="bg-white py-24 px-4 overflow-hidden">
            <div className="container mx-auto">
                <div className="max-w-4xl mb-16">
                    <div className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-4">
                        Quality Guaranteed
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-[hsl(220,68%,18%)] mb-6 tracking-tight">
                        Proof of Our <span className="text-[hsl(25,100%,50%)]">Workmanship</span>
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                        Real jobs, real results. We take pride in our non-destructive entry techniques and precision car key cutting across Greater Manchester.
                    </p>
                </div>

                <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
                    {gallery.map((src, index) => (
                        <div
                            key={index}
                            className="break-inside-avoid overflow-hidden rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group relative"
                        >
                            <Image
                                src={src}
                                alt={`Professional auto locksmith service - car key replacement and programming work ${index + 1}`}
                                width={400}
                                height={300}
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                                quality={85}
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            />
                        </div>
                    ))}
                </div>

                {/* Trust Banner Inside Gallery */}
                <div className="mt-20 p-12 rounded-[3.5rem] bg-[hsl(220,68%,18%)] text-white text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                    <div className="relative z-10">
                        <h3 className="text-3xl md:text-4xl font-black mb-6">Need a quote for your vehicle?</h3>
                        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
                            Our team is standing by to provide a transparent, no-obligation quote based on your make and model.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full border border-white/20">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-sm font-bold uppercase tracking-widest">Active in Tameside</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
