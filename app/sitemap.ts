import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/metadata';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = SITE_CONFIG.url;

    // Static pages
    const staticPages = [
        '',
        '/about',
        '/contact',
        '/services',
        '/locations',
    ];

    // Service pages (Silo 1)
    const services = [
        'car-lockout',
        'car-key-replacement',
        'car-key-programming',
        'ignition-repair',
        'broken-key-extraction',
        'transponder-key-services',
        'emergency-auto-locksmith',
        'remote-key-fob',
        'trunk-unlock',
        'motorcycle-locksmith',
    ];

    // Location pages (Silo 2)
    const locations = [
        'manchester-auto-locksmith',
        'denton-auto-locksmith',
        'stockport-auto-locksmith',
        'tameside-auto-locksmith',
        'hyde-auto-locksmith',
        'bolton-auto-locksmith',
        'oldham-auto-locksmith',
    ];

    return [
        ...staticPages.map(page => ({
            url: `${baseUrl}${page}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: page === '' ? 1 : 0.8,
        })),
        ...services.map(service => ({
            url: `${baseUrl}/services/${service}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        })),
        ...locations.map(location => ({
            url: `${baseUrl}/locations/${location}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        })),
    ];
}
