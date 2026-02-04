import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand & Authority */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">{SITE_CONFIG.siteName}</h3>
                        <div className="space-y-4 text-gray-400">
                            <p className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 mt-1 text-[hsl(25,100%,50%)]" />
                                <span>{SITE_CONFIG.address}</span>
                            </p>
                            <p className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-[hsl(25,100%,50%)]" />
                                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-white transition-colors">
                                    {SITE_CONFIG.phoneDisplay}
                                </a>
                            </p>
                            <p className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-[hsl(25,100%,50%)]" />
                                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white transition-colors">
                                    {SITE_CONFIG.email}
                                </a>
                            </p>
                            <p className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-[hsl(25,100%,50%)]" />
                                <span>{SITE_CONFIG.hours}</span>
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-[hsl(25,100%,50%)]">Quick Links</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="/locations" className="hover:text-white transition-colors">Locations</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Trust Signals */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-[hsl(25,100%,50%)]">Business Verified</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-green-500" />
                                <span>UK Registered Company</span>
                            </li>
                            <li className="text-sm">Company No: {SITE_CONFIG.companyNumber}</li>
                            <li className="text-sm">Fully Insured & Vetted</li>
                            <li>
                                <a
                                    href={SITE_CONFIG.googleBusinessProfile}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[hsl(25,100%,50%)] hover:underline"
                                >
                                    View Google Business Profile
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Service Area */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-[hsl(25,100%,50%)]">Serving Areas</h3>
                        <p className="text-gray-400 mb-4">
                            Serving Manchester, Denton, Stockport, Hyde, Tameside, and all surrounding areas.
                        </p>
                        <p className="text-sm text-gray-500">
                            Mobile Auto Locksmith | Emergency 24/7
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.siteName}. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
