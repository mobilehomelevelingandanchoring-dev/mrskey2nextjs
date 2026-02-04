import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/FooterEnhanced";
import MobileCallButton from "@/components/layout/MobileCallButton";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/metadata";

export const metadata = {
    title: "Contact Key2BHP Auto Locksmith | 24/7 Emergency Service Manchester",
    description: "Get in touch with Key2BHP Auto Locksmith for emergency car key replacement, lockout service, or a free quote in Manchester.",
};

export default function ContactPage() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="py-20 px-6 container mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-12 text-[hsl(220,68%,18%)] text-center">Contact Us</h1>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div>
                        <h2 className="text-2xl font-bold mb-6 text-[hsl(220,68%,18%)]">Get in Touch</h2>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="bg-[hsl(25,100%,50%)] p-3 rounded-full text-white">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-bold">Call Us 24/7</p>
                                    <a href={`tel:${SITE_CONFIG.phone}`} className="text-xl hover:text-[hsl(25,100%,50%)] transition-colors">{SITE_CONFIG.phone}</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-[hsl(25,100%,50%)] p-3 rounded-full text-white">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-bold">Email Us</p>
                                    <a href="mailto:info@key2bhp.co.uk" className="text-xl hover:text-[hsl(25,100%,50%)] transition-colors">info@key2bhp.co.uk</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-[hsl(25,100%,50%)] p-3 rounded-full text-white">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-bold">Availability</p>
                                    <p className="text-xl">Available 24 Hours / 7 Days</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-[hsl(25,100%,50%)] p-3 rounded-full text-white">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-bold">Coverage</p>
                                    <p className="text-xl">All Area Manchester & Greater Manchester</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                        <h2 className="text-2xl font-bold mb-6 text-[hsl(220,68%,18%)]">Send a Message</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Your Name</label>
                                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(25,100%,50%)] outline-none" placeholder="Enter your name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Your Phone</label>
                                <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(25,100%,50%)] outline-none" placeholder="Enter your phone number" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Your Email</label>
                                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(25,100%,50%)] outline-none" placeholder="Enter your email" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Message</label>
                                <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(25,100%,50%)] outline-none" placeholder="How can we help?"></textarea>
                            </div>
                            <button type="button" className="w-full bg-[hsl(220,68%,18%)] hover:bg-[hsl(220,68%,25%)] text-white font-bold py-3 rounded-lg transition-all">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
            <MobileCallButton />
        </div>
    );
}
