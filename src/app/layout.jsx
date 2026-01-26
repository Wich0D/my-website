import localFont from 'next/font/local'
import "./globals.css";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

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

export const metadata = {
    title: 'Wich0D',
    description: 'Prueba de Kext js número 1',
    keyword: 'tienda, online, ecommerce',
}
export default function RootLayout({children}){
    return(
        <html lang="en">
            <body className={glacialIndifference.className}>
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
