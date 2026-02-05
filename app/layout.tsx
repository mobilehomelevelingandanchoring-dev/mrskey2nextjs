import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { generateLocalBusinessSchema } from '@/lib/schema';
import { SITE_CONFIG } from '@/lib/metadata';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap', // Optimization: Prevent font-block
});

export const metadata: Metadata = {
    metadataBase: new URL(SITE_CONFIG.url),
    title: {
        default: '24/7 Mobile Auto Locksmith Manchester | Emergency Car Keys | Key2BHP',
        template: '%s | Key 2 BHP Auto Locksmith',
    },
    description: SITE_CONFIG.description,
    keywords: [
        'auto locksmith manchester',
        'mobile locksmith manchester',
        'car key replacement manchester',
        'emergency locksmith manchester',
        '24/7 locksmith manchester',
        'car lockout service',
        'lost car keys manchester',
        'key programming manchester',
    ],
    authors: [{ name: SITE_CONFIG.siteName }],
    creator: SITE_CONFIG.siteName,
    publisher: SITE_CONFIG.siteName,
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: 'website',
        locale: 'en_GB',
        url: SITE_CONFIG.url,
        siteName: SITE_CONFIG.siteName,
        title: '24/7 Mobile Auto Locksmith Manchester | Key 2 BHP',
        description: SITE_CONFIG.description,
        images: [
            {
                url: '/logo.svg',
                width: 1200,
                height: 630,
                alt: 'Key 2 BHP Auto Locksmith Manchester',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: '24/7 Mobile Auto Locksmith Manchester | Key 2 BHP',
        description: SITE_CONFIG.description,
        images: ['/logo.svg'],
        creator: '@key2bhp',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'd511ba0aff278179',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const localBusinessSchema = generateLocalBusinessSchema();

    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                {/* JSON-LD Schema for SEO Authority */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(localBusinessSchema),
                    }}
                />
                {/* Mobile Optimization: Theme Color */}
                <meta name="theme-color" content="#0f172a" />
            </head>
            <body className={inter.className}>
                {children}
            </body>
        </html>
    );
}
