'use client';

import { Phone, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';

export default function MobileCallButton() {
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-[9999] p-3 bg-white/80 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
            <div className="flex gap-3">
                <a
                    href={SITE_CONFIG.googleBusinessProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-800 py-3.5 rounded-xl font-bold text-sm transition-all active:scale-95 text-center"
                >
                    <MapPin className="w-4 h-4" />
                    Directions
                </a>
                <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="flex-[2] flex items-center justify-center gap-2 bg-[hsl(25,100%,50%)] text-white py-3.5 rounded-xl font-bold text-base shadow-lg shadow-orange-500/30 animate-pulse transition-all active:scale-95 text-center"
                >
                    <Phone className="w-5 h-5 fill-current" />
                    CALL {SITE_CONFIG.phoneDisplay}
                </a>
            </div>
        </div>
    );
}
