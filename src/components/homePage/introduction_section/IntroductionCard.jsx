import Image from "next/image";
import TerminalBox from "./TerminalBox";


function IntroductionCard() {
    return ( 
        <section className="flex flex-col ">
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
                <TerminalBox />
            </div>
        </section>
     );
}

export default IntroductionCard;