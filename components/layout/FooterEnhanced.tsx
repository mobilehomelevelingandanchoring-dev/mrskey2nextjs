import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, ExternalLink, ShieldCheck, FileText } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';

/**
 * Enhanced Footer Component with Full EEAT Authority Signals
 * Includes: NAP, Directors/PSC, Company Registration, Trust Badges
 * Optimized for: Local SEO, Crawlability, Mobile UX, Trust Building
 */
export default function FooterEnhanced() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[hsl(220,68%,18%)] text-white">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Column 1: Company Info & NAP */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-[hsl(25,100%,50%)] mb-4">
                            {SITE_CONFIG.siteName}
                        </h3>

                        <div className="space-y-3 text-sm">
                            {/* Address */}
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-[hsl(25,100%,50%)] flex-shrink-0 mt-0.5" />
                                <address className="not-italic">
                                    {SITE_CONFIG.address}
                                </address>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-[hsl(25,100%,50%)] flex-shrink-0" />
                                <a
                                    href={`tel:${SITE_CONFIG.phone}`}
                                    className="hover:text-[hsl(25,100%,50%)] transition-colors font-medium"
                                >
                                    {SITE_CONFIG.phoneDisplay}
                                </a>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-[hsl(25,100%,50%)] flex-shrink-0" />
                                <a
                                    href={`mailto:${SITE_CONFIG.email}`}
                                    className="hover:text-[hsl(25,100%,50%)] transition-colors"
                                >
                                    {SITE_CONFIG.email}
                                </a>
                            </div>

                            {/* Hours */}
                            <div className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-[hsl(25,100%,50%)] flex-shrink-0" />
                                <span className="font-bold text-[hsl(25,100%,50%)]">
                                    {SITE_CONFIG.hours}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Quick Links - Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-gray-200">Our Services</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/services/car-lockout" className="hover:text-[hsl(25,100%,50%)] transition-colors">
                                    Car Lockout Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/car-key-replacement" className="hover:text-[hsl(25,100%,50%)] transition-colors">
                                    Car Key Replacement
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/car-key-programming" className="hover:text-[hsl(25,100%,50%)] transition-colors">
                                    Car Key Programming
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/ignition-repair" className="hover:text-[hsl(25,100%,50%)] transition-colors">
                                    Ignition Repair
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/emergency-auto-locksmith" className="hover:text-[hsl(25,100%,50%)] transition-colors">
                                    Emergency 24/7 Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-[hsl(25,100%,50%)] font-bold hover:underline">
                                    View All Services →
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Quick Links - Locations */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-gray-200">Service Areas</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/locations/manchester-auto-locksmith" className="hover:text-[hsl(25,100%,50%)] transition-colors">
                                    Manchester
                                </Link>
                            </li>
                            <li>
                                <Link href="/locations/denton-auto-locksmith" className="hover:text-[hsl(25,100%,50%)] transition-colors">
                                    Denton (HQ)
                                </Link>
                            </li>
                            <li>
                                <Link href="/locations/stockport-auto-locksmith" className="hover:text-[hsl(25,100%,50%)] transition-colors">
                                    Stockport
                                </Link>
                            </li>
                            <li>
                                <Link href="/locations/tameside-auto-locksmith" className="hover:text-[hsl(25,100%,50%)] transition-colors">
                                    Tameside
                                </Link>
                            </li>
                            <li>
                                <Link href="/locations/hyde-auto-locksmith" className="hover:text-[hsl(25,100%,50%)] transition-colors">
                                    Hyde
                                </Link>
                            </li>
                            <li>
                                <Link href="/locations" className="text-[hsl(25,100%,50%)] font-bold hover:underline">
                                    View All Areas →
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Company & Legal */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-gray-200">Company Info</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/about" className="hover:text-[hsl(25,100%,50%)] transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-[hsl(25,100%,50%)] transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <a
                                    href={SITE_CONFIG.googleBusinessProfile}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[hsl(25,100%,50%)] transition-colors inline-flex items-center gap-1"
                                >
                                    Google Reviews <ExternalLink className="w-3 h-3" />
                                </a>
                            </li>
                        </ul>

                        {/* Trust Badges */}
                        <div className="mt-6 pt-6 border-t border-white/10">
                            <div className="flex items-center gap-2 text-xs text-gray-300 mb-2">
                                <ShieldCheck className="w-4 h-4 text-green-400" />
                                <span>UK Registered Company</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-300">
                                <FileText className="w-4 h-4 text-blue-400" />
                                <span>Fully Insured & Certified</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trust Bar - Company Registration & Directors */}
            <div className="bg-[hsl(220,68%,12%)] border-t border-white/5">
                <div className="container mx-auto px-4 py-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">

                        {/* Left: Company Details */}
                        <div className="space-y-2">
                            <p className="font-bold text-white">
                                UK Registered Company – Companies House No: {SITE_CONFIG.companyNumber}
                            </p>
                            <p>
                                <span className="font-medium">Registered Office:</span> {SITE_CONFIG.address}
                            </p>
                            <p>
                                <span className="font-medium">Directors / PSC:</span> Miss Vikki Lee Heaton, Mr Nico Vieira
                            </p>
                        </div>

                        {/* Right: Verification Links */}
                        <div className="flex flex-col justify-center gap-2 md:items-end">
                            <a
                                href="https://find-and-update.company-information.service.gov.uk/company/16104498/persons-with-significant-control"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
                            >
                                <ShieldCheck className="w-4 h-4" />
                                Verify Company on Companies House
                                <ExternalLink className="w-3 h-3" />
                            </a>
                            <p className="text-xs text-gray-400">
                                Transparent. Verified. Trustworthy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar - Copyright & Service Tagline */}
            <div className="bg-[hsl(220,68%,8%)] border-t border-white/5">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                        <p>
                            © {currentYear} {SITE_CONFIG.siteName}. All rights reserved.
                        </p>
                        <p className="text-center md:text-right">
                            Mobile Auto Locksmith Serving Manchester & Surrounding Areas
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
