import localFont from 'next/font/local'
import "./globals.css";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Analytics } from "@vercel/analytics/next"
import Script from 'next/script'; // Importante para el SEO

const glacialIndifference = localFont({
    src: [
        {
            path: '../../public/fonts/GlacialIndifference-Regular.otf',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../../public/fonts/GlacialIndifference-Bold.otf',
            weight: '700',
            style: 'normal'
        },
        {
            path: '../../public/fonts/GlacialIndifference-Italic.otf',
            weight: '400',
            style: 'italic'
        },
    ]
})

// Metadatos mejorados para SEO
export const metadata = {
    title: {
        default: 'Wich0D | Software Engineer',
        template: '%s | Wich0D'
    },
    description: 'Portfolio of Luis David Hernández (wich0d), Software Engineer and Data Analyst specializing in scalable solutions.',
    keywords: ['wich0d', 'luis david hernandez consuelo', 'software engineer', 'data analyst', 'portfolio', 'UPIICSA'],
    authors: [{ name: 'Luis David Hernández Consuelo', url: 'https://wich0d.vercel.app/' }],
    creator: 'Wich0D',
}

export default function RootLayout({ children }) {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Luis David Hernández Consuelo",
        "alternateName": "wich0d",
        "jobTitle": "Software Engineer",
        "url": "https://wich0d.vercel.app/",
        "sameAs": [
            "https://github.com/Wich0D",
            "https://www.linkedin.com/in/luis-david-hernandez-consuelo/"
        ],
        "description": "Software Engineer & Data Analyst specializing in scalable solutions and data-driven applications."
    };

    return (
        <html lang="en">
            <head>
                <Script
                    id="structured-data"
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
                />
            </head>
            <body className={`${glacialIndifference.className} min-w-dvw`}>
                <NavBar />
                {children}
                <Analytics/>
                <Footer />
            </body>
        </html>
    )
}