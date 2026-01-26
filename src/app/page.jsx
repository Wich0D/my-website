import IntroductionCard from "../components/homePage/introduction_section/IntroductionCard";
//import UnderConstruction from "../components/UnderConstruction";
import 'boxicons/css/boxicons.min.css';
import SkillsSection from "../components/homePage/skills_section/SkillsSection";

function HomePage() {
    return ( 
        <main className="flex justify-center items-center min-h-screen mt-5
        flex-col bg-main-div p-12 rounded-4xl gap-10 w-4/5">
            <IntroductionCard/>
            
        </main>
     );
}

export default HomePage;