import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
function Footer() {
    return ( 
        <nav className="bg-slate-900 text-white flex justify-between items-center p-4 w-full mt-3.5">
            <p>© 2026 Luis David Hernández Consuelo. Software Engineer.</p>
            <div className="flex gap-2 items-center">
                <div className="flex gap-1">
                    <IoMail size={20}/>
                    <p>ludaheco.03@gmail.com</p>
                </div>
                
                <ul className="flex gap-3 [&>*]:hover:text-main-cyan">
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
            </div>
        </nav>
     );
}

export default Footer;