import Link from "next/link";

function NavBar() {
    return ( 
    <nav className="bg-slate-900 text-white flex justify-between items-center p-4 w-full sticky top-0 z-50">
            <h1 className="font-bold">Wich0D</h1>
            <ul className="flex gap-3">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/tech_stack">Tech Stack</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/contact">Contact Me</Link></li>
            </ul>
        </nav>
     );
}

export default NavBar;