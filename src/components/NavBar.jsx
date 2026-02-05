"use client";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import Link from "next/link";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Tech Stack", path: "/tech_stack" },
        { name: "Projects", path: "/projects" },
        { name: "Contact Me", path: "/contact" },
    ];

    return (
        <nav className="bg-slate-900 text-white w-full sticky top-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
                <h1 className="font-bold text-xl tracking-wider hover:text-main-cyan transition-colors">
                    <Link href="/">Wich0D</Link>
                </h1>

                {/* Escritorio: Navegación estándar */}
                <ul className="hidden md:flex gap-6 [&>*]:hover:text-main-cyan transition-all font-medium">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link href={link.path}>{link.name}</Link>
                        </li>
                    ))}
                </ul>

                {/* Móvil: Icono de Menú */}
                <div className="md:hidden">
                    <button 
                        onClick={toggleMenu} 
                        className="text-3xl focus:outline-none hover:text-main-cyan transition-colors"
                        aria-label="Toggle Menu"
                    >
                        <TiThMenu />
                    </button>
                </div>
            </div>

            {/* Menú Desplegable Móvil */}
            <div 
                className={`${
                    isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                } md:hidden overflow-hidden bg-slate-800 transition-all duration-300 ease-in-out`}
            >
                <ul className="flex flex-col items-center gap-4 py-6 font-semibold">
                    {navLinks.map((link) => (
                        <li key={link.path} onClick={() => setIsOpen(false)}>
                            <Link href={link.path} className="hover:text-main-cyan w-full text-center">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;