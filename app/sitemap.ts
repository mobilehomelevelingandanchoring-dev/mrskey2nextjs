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

    // Vehicle brand pages (Topical Authority - Level 2)
    const vehicleBrands = [
        'bmw-auto-locksmith-manchester',
        'volkswagen-locksmith-manchester',
        'audi-auto-locksmith-manchester',
        'mercedes-auto-locksmith-manchester',
        'ford-auto-locksmith-manchester',
        'vauxhall-locksmith-manchester',
    ];

    // Emergency scenario pages (Level 3)
    const emergencyScenarios = [
        'lost-car-keys-manchester',
        'keys-locked-in-boot-manchester',
        'broken-key-in-ignition-manchester',
    ];

    // Hyper-local area pages (Level 3)
    const hyperLocalAreas = [
        'auto-locksmith-manchester-city-centre',
        'auto-locksmith-salford-quays',
        'auto-locksmith-didsbury',
        'auto-locksmith-chorlton',
    ];

    // Technical/Trust pages (Level 2 & 4)
    const technicalPages = [
        '24-hour-auto-locksmith-manchester',
        'transponder-car-keys-manchester',
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
        ...vehicleBrands.map(brand => ({
            url: `${baseUrl}/${brand}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.85,
        })),
        ...emergencyScenarios.map(scenario => ({
            url: `${baseUrl}/${scenario}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.85,
        })),
        ...hyperLocalAreas.map(area => ({
            url: `${baseUrl}/${area}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        })),
        ...technicalPages.map(tech => ({
            url: `${baseUrl}/${tech}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        })),
    ];
}
