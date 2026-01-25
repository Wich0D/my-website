import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
    title: 'Wich0D',
    description: 'Prueba de Kext js número 1',
    keyword: 'tienda, online, ecommerce',
}
export default function RootLayout({children}){
    return(
        <html lang="en">
            <body className="">
            {children}
            </body>
        </html>
    )
}
