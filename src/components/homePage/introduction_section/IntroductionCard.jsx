import Image from "next/image";
import TerminalBox from "./TerminalBox";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import SectionTitle from "../../SectionTitle";
import Link from "next/link";
import CyanButton from "../../CyanButton";


function IntroductionCard() {
    return ( 
        <section className="flex flex-col gap-2">
            <div className="flex gap-15 items-center">
                <div>
                    <Image 
                        src="/images/terrier_mascot.png" 
                        alt="Terrier using a laptop" 
                        width={400}
                        height={400}
                        className="rounded-full"
                    />
                </div>
                <div className="flex flex-col items-center gap-3">
                    <SectionTitle text="Welcome to my website!" size={3}/>
                   <TerminalBox /> 
                   <div className="flex flex-col items-center gap-1">
                    <ul className="text-[55px] flex justify-center gap-4 items-center">
                        <li>──</li>
                        <li><a 
                            href="https://www.linkedin.com/in/luis-david-hernandez-consuelo/"
                            target="_blank"
                            rel="noopener noreferrer"><FaLinkedin/>
                            </a></li>
                        <li><a 
                            href="https://github.com/Wich0D"
                            target="_blank"
                            rel="noopener noreferrer"><FaSquareGithub/>
                            </a></li>
                        <li>──</li>
                    </ul>
                   </div>
                </div>
            </div>
            <div className="flex min-w-4/5 text-xl font-bold p-8 justify-center gap-10" >
                <a href={"https://drive.google.com/file/d/1oa6LkifXJqvHylQOeQt4sZI_T2YSI98M/view"} 
                className="bg-main-cyan p-4 rounded-full cursor-pointer text-main-purple
                hover:text-white"
                target="_blank"
                rel="noopener noreferrer">
                    <button className="cursor-pointer">
                    View CV
                    </button>
                </a>
                <CyanButton text="Contact Me" path={"/contact"}/>
            </div>
        </section>
     );
}

export default IntroductionCard;