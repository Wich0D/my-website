import Image from "next/image";
import TerminalBox from "./TerminalBox";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import CyanButton from "../../CyanButton";
import AnimatedTitle from "./AnimatedTitle";

function IntroductionCard() {
    return ( 
        <section className="flex flex-col gap-6 md:gap-4 w-full mt-4 items-center">
            <AnimatedTitle />

            <div className="flex flex-col lg:flex-row gap-8 md:gap-15 items-center justify-center w-full mt-4 mb-6">
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
                    <TerminalBox />

                    <div className="flex flex-col items-center gap-1">
                        <ul className="text-[40px] md:text-[55px] flex justify-center gap-4 items-center">
                            <li>──</li>
                            <li>
                                <a href="https://www.linkedin.com/in/ldhc/"
                                    target="_blank" rel="noopener noreferrer" className="hover:text-main-cyan transition-colors">
                                    <FaLinkedin />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/Wich0D"
                                    target="_blank" rel="noopener noreferrer" className="hover:text-main-cyan transition-colors">
                                    <FaSquareGithub />
                                </a>
                            </li>
                            <li>──</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default IntroductionCard;