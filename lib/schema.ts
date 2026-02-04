import { SITE_CONFIG } from './metadata';

// Schema.org JSON-LD generators for KEY 2 BHP AUTO LOCKSMITH LTD

export function generateOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": SITE_CONFIG.siteName,
        "url": SITE_CONFIG.url,
        "logo": `${SITE_CONFIG.url}/logo.svg`,
        "legalName": "KEY 2 BHP AUTO LOCKSMITH LTD",
        "taxID": "16104498", // Companies House number
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "34 Laburnum Road, Denton",
            "addressLocality": "Manchester",
            "addressRegion": "England",
            "postalCode": "M34 2NE",
            "addressCountry": "GB"
        },
        "founder": [
            {
                "@type": "Person",
                "name": "Vikki Lee Heaton",
                "jobTitle": "Director"
            },
            {
                "@type": "Person",
                "name": "Nico Vieira",
                "jobTitle": "Director"
            }
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": SITE_CONFIG.phone,
            "contactType": "customer service",
            "areaServed": "GB",
            "availableLanguage": "en",
            "email": SITE_CONFIG.email
        },
        "sameAs": [
            SITE_CONFIG.googleBusinessProfile,
            "https://find-and-update.company-information.service.gov.uk/company/16104498"
        ]
    };
}

export function generateLocalBusinessSchema() {
    return {
        "@context": "https://schema.org",
        "@type": ["Locksmith", "LocalBusiness"],
        "@id": `${SITE_CONFIG.url}/#localbusiness`,
        "name": SITE_CONFIG.siteName,
        "legalName": "KEY 2 BHP AUTO LOCKSMITH LTD",
        "description": SITE_CONFIG.description,
        "url": SITE_CONFIG.url,
        "telephone": SITE_CONFIG.phone,
        "email": SITE_CONFIG.email,
        "priceRange": "££",
        "image": `${SITE_CONFIG.url}/logo.svg`,
        "logo": `${SITE_CONFIG.url}/logo.svg`,
        "taxID": "16104498",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "34 Laburnum Road, Denton",
            "addressLocality": "Manchester",
            "addressRegion": "England",
            "postalCode": "M34 2NE",
            "addressCountry": "GB"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 53.4616,
            "longitude": -2.1128
        },
        "founder": [
            {
                "@type": "Person",
                "name": "Vikki Lee Heaton",
                "jobTitle": "Director"
            },
            {
                "@type": "Person",
                "name": "Nico Vieira",
                "jobTitle": "Director"
            }
        ],
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        },
        "areaServed": [
            { "@type": "City", "name": "Manchester" },
            { "@type": "City", "name": "Denton" },
            { "@type": "City", "name": "Stockport" },
            { "@type": "City", "name": "Tameside" },
            { "@type": "City", "name": "Ashton-under-Lyne" },
            { "@type": "City", "name": "Hyde" },
            { "@type": "City", "name": "Bolton" },
            { "@type": "City", "name": "Oldham" }
        ],
        "sameAs": [
            SITE_CONFIG.googleBusinessProfile,
            "https://find-and-update.company-information.service.gov.uk/company/16104498"
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Auto Locksmith Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Emergency Car Lockout Service",
                        "description": "24/7 emergency car unlocking service across Manchester"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Car Key Replacement",
                        "description": "Same-day car key cutting and replacement for all makes"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Car Key Programming",
                        "description": "Transponder and smart key programming on-site"
                    }
                }
            ]
        }
    };
}

export function generateServiceSchema(name: string, description: string, url: string) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": name,
        "description": description,
        "provider": {
            "@type": "LocalBusiness",
            "name": SITE_CONFIG.siteName
        },
        "areaServed": { "@type": "City", "name": "Manchester" },
        "url": url
    };
}

export function generateFAQSchema(questions: { q: string, a: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": questions.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a
            }
        }))
    };
}

export function generateBreadcrumbSchema(items: { name: string, url: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
        }))
    };
}

/**
 * Generate Aggregate Rating Schema for review aggregation
 * Helps display star ratings in Google search results
 */
export function generateAggregateRatingSchema(rating: number, reviewCount: number) {
    return {
        "@context": "https://schema.org",
        "@type": "AggregateRating",
        "ratingValue": rating.toString(),
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": reviewCount.toString()
    };
}

/**
 * Generate Review Schema for individual customer reviews
 * Enhances EEAT signals and trust
 */
export function generateReviewSchema(reviews: { author: string, rating: number, reviewBody: string, date: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "Review",
        "itemReviewed": {
            "@type": "LocalBusiness",
            "name": SITE_CONFIG.siteName
        },
        "review": reviews.map(review => ({
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": review.author
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": review.rating.toString(),
                "bestRating": "5"
            },
            "reviewBody": review.reviewBody,
            "datePublished": review.date
        }))
    };
}

/**
 * Generate Location-specific Service Schema
 * For location pages to enhance local SEO
 */
export function generateLocationServiceSchema(locationName: string, services: string[]) {
    return {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": `${SITE_CONFIG.siteName} - ${locationName}`,
        "description": `Professional auto locksmith services in ${locationName}. 24/7 emergency mobile service.`,
        "url": SITE_CONFIG.url,
        "telephone": SITE_CONFIG.phone,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": locationName,
            "addressRegion": "England",
            "addressCountry": "GB"
        },
        "areaServed": {
            "@type": "City",
            "name": locationName
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Auto Locksmith Services",
            "itemListElement": services.map(service => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": service
                }
            }))
        },
        "priceRange": "££",
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
        }
    };
}

/**
 * Generate HowTo Schema for service process pages
 * Enhances featured snippet opportunities
 */
export function generateHowToSchema(name: string, steps: { name: string, text: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": name,
        "step": steps.map((step, index) => ({
            "@type": "HowToStep",
            "position": index + 1,
            "name": step.name,
            "text": step.text
        }))
    };
}
