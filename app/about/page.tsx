import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/FooterEnhanced";
import MobileCallButton from "@/components/layout/MobileCallButton";
import TrustSection from "@/components/sections/TrustSection";

export const metadata = {
    title: "About Key2BHP Auto Locksmith | Manchester's Trusted Mobile Locksmith",
    description: "Learn more about Key2BHP Auto Locksmith, our mission, and our expert mobile locksmith services across Manchester.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main>
                <TrustSection />
                <div className="py-20 px-6 container mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[hsl(220,68%,18%)]">About Key2BHP Auto Locksmith</h1>
                    <div className="prose max-w-none text-lg text-gray-700">
                        <p className="mb-6">
                            Key2BHP Auto Locksmith is a premier mobile auto locksmith service based in Manchester. We specialize in providing fast, reliable, and affordable car key solutions for all vehicle makes and models.
                        </p>
                        <p className="mb-6">
                            With years of experience in the industry, our team of fully qualified and insured locksmiths is dedicated to getting you back on the road as quickly as possible, whether you've lost your keys, locked yourself out, or need a spare key programmed.
                        </p>
                        <h2 className="text-2xl font-bold mt-10 mb-4 text-[hsl(220,68%,18%)]">Our Mission</h2>
                        <p className="mb-6">
                            Our mission is to provide the highest level of service to our customers in Manchester and Greater Manchester. We pride ourselves on our transparency, professional expertise, and fast response times.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
            <MobileCallButton />
        </div>
    );
}
