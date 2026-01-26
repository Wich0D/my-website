import TerminalAnimatedLine from "./TerminalAnimatedLine";
import {Fira_Code} from 'next/font/google'

const fira = Fira_Code({
    subsets: ['latin'],
    display: 'swap'
})


function TerminalBox() {
    
    const introductionLines = [
        "Hi! I'm Luis. Welcome to my website. :)",
        "I am a Software Engineer and also an artist ",
        "in my free times, I usually combine these ",
        "skills to create interesting projects.",
        "If you want to see some of my work, ",
        "feel free to explore this website.",
        "I hope you enjoy it! <3"
    ]
    return ( 
        <div className={`flex flex-col flex-1 justify-center tracking-tight rounded-2xl overflow-hidden  h-fit ${fira.className}`}>
            <div className="bg-[#21242b] p-1 pl-4  text-sm">
                <h1>Welcome Console</h1>
            </div>
            <div className="bg-[#282c35] pl-3.5 pr-3.5 pb-10 pt-2">
                {
                    introductionLines.map((text,index)=>(
                    <TerminalAnimatedLine 
                        text={text} 
                        key={index}
                        delay={index*2.9}
                        last={index === introductionLines.length - 1}/>
                    ))   
                }
            </div>
        </div>
     );
}

export default TerminalBox;