import IntroductionCard from "../components/homePage/introduction_section/IntroductionCard";
//import UnderConstruction from "../components/UnderConstruction";
import 'boxicons/css/boxicons.min.css';
import SkillsSection from "../components/homePage/skills_section/SkillsSection";
import PageSchema from "../components/PageSchema";

function HomePage() {
    return ( 
        <PageSchema pageId={0} content={(
            <IntroductionCard/>
            
        )}/>
     );
        
}

export default HomePage;