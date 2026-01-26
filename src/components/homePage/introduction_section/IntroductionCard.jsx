import Image from "next/image";
import TerminalBox from "./TerminalBox";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import SectionTitle from "../../SectionTitle";
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
                    <SectionTitle text="Welcome to my website!"/>
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
        </section>
     );
}

export default IntroductionCard;