import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileCallButton from "@/components/layout/MobileCallButton";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata = {
    title: "Auto Locksmith Coverage Areas | Manchester & Greater Manchester",
    description: "View all our service coverage areas across Manchester and Greater Manchester. Our mobile auto locksmiths come to your location.",
};

const areas = [
    "Manchester City Centre",
    "Salford",
    "Stockport",
    "Bolton",
    "Oldham",
    "Rochdale",
    "Bury",
    "Trafford",
    "Tameside",
    "Wigan",
    "Altrincham",
    "Sale",
];

export default function AreasPage() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="py-20">
                <div className="container mx-auto px-6 mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[hsl(220,68%,18%)]">Our Coverage Areas</h1>
                    <p className="text-xl text-gray-700 max-w-3xl">
                        We provide 24/7 mobile auto locksmith services across the entire Greater Manchester region. No matter where you are, we can help.
                    </p>
                </div>

                <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {areas.map((area, index) => (
                        <Link
                            key={index}
                            href={`/areas/${area.toLowerCase().replace(/ /g, "-")}`}
                            className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-[hsl(25,100%,50%)] hover:shadow-lg transition-all group"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-5 h-5 text-[hsl(25,100%,50%)]" />
                                    <span className="font-bold text-lg group-hover:text-[hsl(25,100%,50%)] transition-colors">{area}</span>
                                </div>
                                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[hsl(25,100%,50%)] group-hover:translate-x-1 transition-all" />
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
            <Footer />
            <MobileCallButton />
        </div>
    );
}
