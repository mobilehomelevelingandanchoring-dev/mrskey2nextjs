import { SITE_CONFIG } from './metadata';

export const generateLocalBusinessSchema = (customData?: any) => ({
    '@context': 'https://schema.org',
    '@type': 'Locksmith',
    name: SITE_CONFIG.siteName,
    image: `${SITE_CONFIG.url}/logo.png`,
    '@id': SITE_CONFIG.url,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
        '@type': 'PostalAddress',
        streetAddress: '34 Laburnum Road',
        addressLocality: 'Denton',
        addressRegion: 'Greater Manchester',
        postalCode: 'M34 2NE',
        addressCountry: 'GB',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: 53.4520,
        longitude: -2.1100,
    },
    openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
    },
    priceRange: '££',
    areaServed: [
        {
            '@type': 'City',
            name: 'Manchester',
        },
        {
            '@type': 'City',
            name: 'Salford',
        },
        {
            '@type': 'City',
            name: 'Stockport',
        },
        {
            '@type': 'City',
            name: 'Bolton',
        },
        {
            '@type': 'City',
            name: 'Oldham',
        },
    ],
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '150',
    },
    ...customData,
});

export const generateServiceSchema = (serviceName: string, serviceDescription: string) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceName,
    description: serviceDescription,
    provider: {
        '@type': 'Locksmith',
        name: SITE_CONFIG.siteName,
    },
    areaServed: {
        '@type': 'City',
        name: 'Manchester',
    },
    availableChannel: {
        '@type': 'ServiceChannel',
        servicePhone: {
            '@type': 'ContactPoint',
            telephone: SITE_CONFIG.phone,
            contactType: 'Emergency Service',
            availableLanguage: 'English',
            areaServed: 'GB',
        },
    },
});

export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
        },
    })),
});

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url,
    })),
});
