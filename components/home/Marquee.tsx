import { Phone, Zap, Star, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/lib/metadata";

const Marquee = () => {
    const marqueeContent = [
        { icon: Phone, text: `EMERGENCY LINE: ${SITE_CONFIG.phoneDisplay}` },
        { icon: Zap, text: "20 MINUTE EMERGENCY RESPONSE" },
        { icon: Star, text: "5-STAR GOOGLE VERIFIED LOCKSMITH" },
        { icon: ShieldCheck, text: "NO CALL OUT FEE - NO WIN NO FEE" },
    ];

    const scrollingItems = [...marqueeContent, ...marqueeContent, ...marqueeContent];

    return (
        <div className="overflow-hidden bg-[hsl(25,100%,50%)] py-3 text-white border-y-2 border-white/10">
            <div className="flex w-max animate-marquee whitespace-nowrap items-center">
                {scrollingItems.map((item, index) => (
                    <div key={index} className="flex items-center mx-8">
                        <item.icon className="h-4 w-4 text-white mr-3 shrink-0" />
                        <span className="text-base font-black uppercase tracking-widest leading-none">
                            {item.text}
                        </span>
                        <div className="h-1 w-1 rounded-full bg-white/40 ml-16" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
