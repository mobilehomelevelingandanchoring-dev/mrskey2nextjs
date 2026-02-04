'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Menu, X, ChevronDown, ChevronRight, ShieldCheck, MapPin, Wrench } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const services = [
        { name: 'Car Lockout', href: '/services/car-lockout' },
        { name: 'Key Replacement', href: '/services/car-key-replacement' },
        { name: 'Key Programming', href: '/services/car-key-programming' },
        { name: 'Ignition Repair', href: '/services/ignition-repair' },
        { name: 'Key Extraction', href: '/services/broken-key-extraction' },
        { name: 'Emergency 24/7', href: '/services/emergency-auto-locksmith' },
    ];

    const locations = [
        { name: 'Manchester', href: '/locations/manchester-auto-locksmith' },
        { name: 'Denton (HQ)', href: '/locations/denton-auto-locksmith' },
        { name: 'Stockport', href: '/locations/stockport-auto-locksmith' },
        { name: 'Tameside', href: '/locations/tameside-auto-locksmith' },
        { name: 'Hyde', href: '/locations/hyde-auto-locksmith' },
        { name: 'Bolton', href: '/locations/bolton-auto-locksmith' },
    ];

    const toggleSection = (section: string) => {
        setActiveSection(activeSection === section ? null : section);
    };

    return (
        <nav
            className={`sticky top-0 z-[1000] transition-all duration-300 ${scrolled ? 'bg-[hsl(220,68%,18%)]/95 backdrop-blur-md py-2 shadow-2xl' : 'bg-[hsl(220,68%,18%)] py-4'
                } text-white border-b border-white/5`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* LOGO */}
                    <Link href="/" className="relative z-[1001]" onClick={() => setIsOpen(false)}>
                        <div className="relative w-[160px] h-[45px] md:w-[200px] md:h-[55px]">
                            <Image src="/logo.svg" alt={SITE_CONFIG.siteName} fill className="object-contain object-left" priority />
                        </div>
                    </Link>

                    {/* DESKTOP NAV */}
                    <div className="hidden lg:flex items-center gap-8">
                        <Link href="/" className="hover:text-[hsl(25,100%,50%)] font-bold text-sm tracking-tight transition-colors">HOME</Link>
                        <Link href="/services" className="hover:text-[hsl(25,100%,50%)] font-bold text-sm tracking-tight transition-colors">SERVICES</Link>
                        <Link href="/locations" className="hover:text-[hsl(25,100%,50%)] font-bold text-sm tracking-tight transition-colors">LOCATIONS</Link>
                        <Link href="/contact" className="hover:text-[hsl(25,100%,50%)] font-bold text-sm tracking-tight transition-colors">CONTACT</Link>
                        <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-3 bg-[hsl(25,100%,50%)] px-6 py-3 rounded-xl font-black transition-all hover:scale-105 active:scale-95">
                            <Phone className="w-5 h-5 fill-current" /> {SITE_CONFIG.phoneDisplay}
                        </a>
                    </div>

                    {/* MOBILE TOGGLE */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-3 text-white bg-white/10 rounded-xl relative z-[1001] active:scale-90 transition-transform"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* MOBILE DRAWER SYSTEM */}
            <div
                className={`fixed inset-0 bg-[hsl(220,68%,18%)] z-[1000] transition-all duration-500 lg:hidden overflow-y-auto ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
                    }`}
            >
                <div className="flex flex-col min-h-screen pt-28 px-6 pb-24">
                    <div className="space-y-2">
                        {/* Static Links */}
                        <Link href="/" onClick={() => setIsOpen(false)} className="block py-4 text-3xl font-black border-b border-white/5 uppercase">Home</Link>

                        {/* Services Dropdown */}
                        <div className="border-b border-white/5">
                            <button
                                onClick={() => toggleSection('services')}
                                className="w-full flex items-center justify-between py-6 text-3xl font-black uppercase"
                            >
                                <div className="flex items-center gap-3">
                                    <Wrench className="w-6 h-6 text-[hsl(25,100%,50%)]" /> Services
                                </div>
                                <ChevronDown className={`w-8 h-8 transition-transform duration-300 ${activeSection === 'services' ? 'rotate-180' : ''}`} />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${activeSection === 'services' ? 'max-h-[500px] mb-6' : 'max-h-0'}`}>
                                <div className="grid grid-cols-1 gap-2 pl-4">
                                    {services.map((s) => (
                                        <Link key={s.href} href={s.href} onClick={() => setIsOpen(false)} className="flex items-center justify-between p-4 bg-white/5 rounded-xl font-bold text-lg">
                                            {s.name} <ChevronRight className="w-4 h-4 text-gray-500" />
                                        </Link>
                                    ))}
                                    <Link href="/services" onClick={() => setIsOpen(false)} className="mt-2 text-center text-[hsl(25,100%,50%)] font-black text-sm tracking-widest uppercase py-2">View All Services</Link>
                                </div>
                            </div>
                        </div>

                        {/* Locations Dropdown */}
                        <div className="border-b border-white/5">
                            <button
                                onClick={() => toggleSection('locations')}
                                className="w-full flex items-center justify-between py-6 text-3xl font-black uppercase"
                            >
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-6 h-6 text-blue-400" /> Locations
                                </div>
                                <ChevronDown className={`w-8 h-8 transition-transform duration-300 ${activeSection === 'locations' ? 'rotate-180' : ''}`} />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${activeSection === 'locations' ? 'max-h-[500px] mb-6' : 'max-h-0'}`}>
                                <div className="grid grid-cols-2 gap-2 pl-4">
                                    {locations.map((l) => (
                                        <Link key={l.href} href={l.href} onClick={() => setIsOpen(false)} className="p-4 bg-white/5 rounded-xl font-bold text-base text-center">
                                            {l.name}
                                        </Link>
                                    ))}
                                    <Link href="/locations" onClick={() => setIsOpen(false)} className="col-span-2 mt-2 text-center text-blue-400 font-black text-sm tracking-widest uppercase">View All Areas</Link>
                                </div>
                            </div>
                        </div>

                        <Link href="/about" onClick={() => setIsOpen(false)} className="block py-6 text-3xl font-black border-b border-white/5 uppercase">About Us</Link>
                        <Link href="/contact" onClick={() => setIsOpen(false)} className="block py-6 text-3xl font-black border-b border-white/5 uppercase">Contact</Link>
                    </div>

                    {/* STICKY STYLE CTA (Bottom of Menu) */}
                    <div className="mt-12 space-y-8">
                        <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-[hsl(25,100%,50%)] to-orange-600 shadow-2xl">
                            <p className="text-white/80 font-bold uppercase tracking-widest text-xs mb-2">Emergency Help</p>
                            <p className="text-2xl font-black text-white mb-6 leading-tight">Need a professional locksmith now?</p>
                            <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center justify-center gap-3 bg-white text-[hsl(220,68%,18%)] py-5 rounded-2xl font-black text-xl shadow-xl active:scale-95 transition-all">
                                <Phone className="w-6 h-6 fill-[hsl(220,68%,18%)]" /> Call Now
                            </a>
                        </div>
                        <div className="flex flex-col items-center gap-2 opacity-40">
                            <ShieldCheck className="w-8 h-8" />
                            <p className="text-[10px] font-black tracking-[0.3em] uppercase">Vetted • Insured • Master Locksmiths</p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
