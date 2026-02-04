import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/FooterEnhanced";
import MobileCallButton from "@/components/layout/MobileCallButton";
import ServicesGrid from "@/components/home/ServicesGrid";

export const metadata = {
    title: "Auto Locksmith Services Manchester | Mobile Car Key Specialists",
    description: "Browse our comprehensive range of auto locksmith services in Manchester, including key replacement, programming, and emergency lockouts.",
};

export default function ServicesPage() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="py-20">
                <div className="container mx-auto px-6 mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[hsl(220,68%,18%)]">Our Auto Locksmith Services</h1>
                    <p className="text-xl text-gray-700 max-w-3xl">
                        We offer a wide range of mobile auto locksmith services across Manchester and surrounding areas. Our fully equipped vans come directly to you.
                    </p>
                </div>
                <ServicesGrid />
            </main>
            <Footer />
            <MobileCallButton />
        </div>
    );
}
