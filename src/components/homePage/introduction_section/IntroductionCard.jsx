import Image from "next/image";
import TerminalBox from "./TerminalBox";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import SectionTitle from "../../SectionTitle";
import CyanButton from "../../CyanButton";

function IntroductionCard() {
    return ( 
        <section className="flex flex-col gap-6 md:gap-2 w-full">
            <div className="flex flex-col lg:flex-row gap-8 md:gap-15 items-center justify-center">
                <div className="flex justify-center w-full md:w-auto">
                    <Image 
                        src="/images/terrier_mascot.png" 
                        alt="Terrier using a laptop" 
                        width={400}
                        height={400}
                        priority 
                        className="rounded-full w-48 h-48 md:w-[200px] md:h-[200px] lg:w-[400px] lg:h-[400px] object-cover"
                    />
                </div>

                <div className="flex flex-col items-center gap-3 w-full md:w-auto">
                    <SectionTitle text="Welcome to my website!" size={3}/>
                    <TerminalBox /> 
                    
                    <div className="flex flex-col items-center gap-1">
                        <ul className="text-[40px] md:text-[55px] flex justify-center gap-4 items-center">
                            <li>──</li>
                            <li>
                                <a href="https://www.linkedin.com/in/luis-david-hernandez-consuelo/"
                                   target="_blank" rel="noopener noreferrer" className="hover:text-main-cyan transition-colors">
                                   <FaLinkedin/>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/Wich0D"
                                   target="_blank" rel="noopener noreferrer" className="hover:text-main-cyan transition-colors">
                                   <FaSquareGithub/>
                                </a>
                            </li>
                            <li>──</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* --- CONTENEDOR DE BOTONES MODIFICADO --- */}
            <div className="flex flex-col md:flex-row w-full md:min-w-4/5 text-lg md:text-xl font-bold p-4 md:p-8 justify-center items-center gap-4 md:gap-10">
                
                {/* Botón View CV: w-full en móvil, w-auto en escritorio */}
                <a href={"https://drive.google.com/file/d/1oa6LkifXJqvHylQOeQt4sZI_T2YSI98M/view"} 
                   className="bg-main-cyan py-4 px-8 rounded-full cursor-pointer text-main-purple
                   hover:bg-white transition-all md:w-auto text-center"
                   target="_blank"
                   rel="noopener noreferrer">
                    <button className="cursor-pointer font-bold">
                        View CV
                    </button>
                </a>

                <CyanButton text="Contact Me" path={"/contact"}/>
                
                
            </div>
        </section>
    );
}

export default IntroductionCard;