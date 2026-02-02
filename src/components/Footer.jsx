import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
function Footer() {
    return ( 
        <nav className="bg-slate-900 text-white flex justify-between items-center p-4 w-full mt-3.5">
            <h1 className="font-bold">© 2026 Luis David Hernández Consuelo. Software Engineer.</h1>
            <ul className="flex gap-3">
                <li><a 
                    href="mailto:ludaheco.03@gmail.com">
                        <IoMail size={30}/>
                </a></li>
                <li><a 
                    href="https://www.linkedin.com/in/luis-david-hernandez-consuelo/"
                    target="_blank"
                    rel="noopener noreferrer"><FaLinkedin size={30}/>
                </a></li>
                <li><a 
                    href="https://github.com/Wich0D"
                    target="_blank"
                    rel="noopener noreferrer"><FaSquareGithub size={30}/>
                </a></li>
            </ul>
        </nav>
     );
}

export default Footer;