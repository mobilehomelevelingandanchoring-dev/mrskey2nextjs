import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/metadata';

/**
 * Robots.txt configuration for KEY 2 BHP AUTO LOCKSMITH LTD
 * Optimized for Google crawl efficiency and indexation control
 */
export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/api/',
                    '/admin/',
                    '/_next/static/',
                    '/_next/image',
                    '/private/',
                    '/*?*utm_', // Don't index UTM tracking URLs
                    '/*?*session', // Don't index session URLs
                ],
                crawlDelay: 0, // No delay for general crawlers
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: [
                    '/api/',
                    '/admin/',
                    '/private/',
                ],
                // No crawl delay for Google - prioritize indexing
            },
            {
                userAgent: 'Googlebot-Image',
                allow: '/',
                disallow: ['/private/'],
            },
        ],
        sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
        host: SITE_CONFIG.url,
    };
}
