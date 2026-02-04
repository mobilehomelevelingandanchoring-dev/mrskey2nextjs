import { ShieldCheck, Award, Clock, Users, MapPin, ExternalLink, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';

/**
 * Trust & Authority Section Component
 * Optimized for EEAT (Experience, Expertise, Authoritativeness, Trustworthiness)
 * Includes: Company verification, PSC info, certifications, local expertise
 */
export default function TrustSection() {
    return (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">

                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold mb-4">
                        <ShieldCheck className="w-4 h-4" />
                        UK Registered & Verified Company
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[hsl(220,68%,18%)] mb-4">
                        Your Trusted Manchester Auto Locksmith
                    </h2>
                    <p className="text-lg text-gray-700">
                        We are a legitimate, fully registered UK limited company with verified directors and transparent business practices. Your security is our priority.
                    </p>
                </div>

                {/* Trust Indicators Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

                    {/* Indicator 1: Registered Company */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <ShieldCheck className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="font-bold text-[hsl(220,68%,18%)] mb-2">
                            Registered Business
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                            Companies House No: {SITE_CONFIG.companyNumber}
                        </p>
                        <a
                            href="https://find-and-update.company-information.service.gov.uk/company/16104498"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-blue-600 hover:underline inline-flex items-center gap-1"
                        >
                            Verify on Companies House
                            <ExternalLink className="w-3 h-3" />
                        </a>
                    </div>

                    {/* Indicator 2: Verified Directors */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Users className="w-6 h-6 text-purple-600" />
                        </div>
                        <h3 className="font-bold text-[hsl(220,68%,18%)] mb-2">
                            Verified Directors
                        </h3>
                        <p className="text-sm text-gray-600 mb-1">
                            Miss Vikki Lee Heaton
                        </p>
                        <p className="text-sm text-gray-600 mb-3">
                            Mr Nico Vieira
                        </p>
                        <a
                            href="https://find-and-update.company-information.service.gov.uk/company/16104498/persons-with-significant-control"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-purple-600 hover:underline inline-flex items-center gap-1"
                        >
                            View PSC Register
                            <ExternalLink className="w-3 h-3" />
                        </a>
                    </div>

                    {/* Indicator 3: 24/7 Service */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Clock className="w-6 h-6 text-[hsl(25,100%,50%)]" />
                        </div>
                        <h3 className="font-bold text-[hsl(220,68%,18%)] mb-2">
                            24/7 Availability
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                            Emergency service available around the clock, 365 days a year.
                        </p>
                        <a
                            href={`tel:${SITE_CONFIG.phone}`}
                            className="text-xs font-bold text-[hsl(25,100%,50%)] hover:underline"
                        >
                            {SITE_CONFIG.phoneDisplay}
                        </a>
                    </div>

                    {/* Indicator 4: Local Expertise */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <MapPin className="w-6 h-6 text-green-600" />
                        </div>
                        <h3 className="font-bold text-[hsl(220,68%,18%)] mb-2">
                            Manchester Based
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                            Local business serving Manchester, Denton, and surrounding areas.
                        </p>
                        <a
                            href={SITE_CONFIG.googleBusinessProfile}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-green-600 hover:underline inline-flex items-center gap-1"
                        >
                            View Google Profile
                            <ExternalLink className="w-3 h-3" />
                        </a>
                    </div>
                </div>

                {/* Company Information Panel */}
                <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md border-l-4 border-[hsl(25,100%,50%)]">
                    <div className="flex items-start gap-4 mb-6">
                        <Award className="w-10 h-10 text-[hsl(25,100%,50%)] flex-shrink-0" />
                        <div>
                            <h3 className="text-2xl font-bold text-[hsl(220,68%,18%)] mb-2">
                                About {SITE_CONFIG.siteName}
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We are a professional auto locksmith company registered with Companies House under company number <strong>{SITE_CONFIG.companyNumber}</strong>. Our business is operated by verified directors <strong>Miss Vikki Lee Heaton</strong> and <strong>Mr Nico Vieira</strong>, who bring extensive experience in automotive security and locksmith services to the Manchester area.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Based in Denton, Manchester, we provide mobile locksmith services throughout Greater Manchester, specializing in emergency car lockouts, key replacement, and programming for all vehicle makes and models. Our technicians are fully trained, insured, and equipped with the latest diagnostic and key-cutting technology.
                            </p>
                        </div>
                    </div>

                    {/* Key Credentials */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-gray-200">
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                            <span className="text-sm text-gray-700">
                                <strong>Registered Office:</strong> {SITE_CONFIG.address}
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                            <span className="text-sm text-gray-700">
                                <strong>Company Type:</strong> Private Limited Company
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                            <span className="text-sm text-gray-700">
                                <strong>Fully Insured:</strong> Public & Product Liability
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                            <span className="text-sm text-gray-700">
                                <strong>CRB Checked:</strong> All technicians vetted
                            </span>
                        </div>
                    </div>

                    {/* Verification CTA */}
                    <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                        <p className="text-sm text-gray-600 mb-3">
                            Verify our credentials and company information on the official UK government register:
                        </p>
                        <a
                            href="https://find-and-update.company-information.service.gov.uk/company/16104498/persons-with-significant-control"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-colors"
                        >
                            <ShieldCheck className="w-5 h-5" />
                            Verify on Companies House
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Why Trust Us Section */}
                <div className="max-w-4xl mx-auto mt-12">
                    <h3 className="text-2xl font-bold text-[hsl(220,68%,18%)] mb-6 text-center">
                        Why Manchester Trusts Us
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="text-4xl font-black text-[hsl(25,100%,50%)] mb-2">
                                1000+
                            </div>
                            <p className="text-sm text-gray-600">
                                Cars Unlocked Successfully
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-black text-[hsl(25,100%,50%)] mb-2">
                                30 min
                            </div>
                            <p className="text-sm text-gray-600">
                                Average Response Time
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-black text-[hsl(25,100%,50%)] mb-2">
                                4.9★
                            </div>
                            <p className="text-sm text-gray-600">
                                Google Review Rating
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
