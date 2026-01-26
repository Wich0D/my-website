function NavBar() {
    return ( 
    <nav className="bg-slate-900 text-white flex justify-between items-center p-4 w-full sticky top-0 z-50">
            <h1 className="font-bold">Wich0D</h1>
            <ul className="flex gap-3">
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </nav>
     );
}

export default NavBar;