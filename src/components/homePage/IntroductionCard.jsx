import Image from "next/image";
import TerminalBox from "./TerminalBox";


function IntroductionCard() {
    return ( 
        <section className="flex flex-col bg-main-div p-12 rounded-4xl gap-10">
            <h1 className="text-5xl flex-1 text-center font-bold">Welcome!</h1>
            <div className="flex gap-5 ">
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