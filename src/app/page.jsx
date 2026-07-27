import IntroductionCard from "../components/homePage/introduction_section/IntroductionCard";
import AboutCard from "../components/aboutPage/AboutCard";
import TechStackTable from "../components/tech_stack/TechStackTable";
import FeaturedProjects from "../components/projectsPage/FeaturedProjects";
import PageSchema from "../components/PageSchema";
import 'boxicons/css/boxicons.min.css';

function HomePage() {
    return ( 
        <div className="flex flex-col w-full">
            <PageSchema id="home" content={<IntroductionCard />} />
            
            <PageSchema id="projects" content={<FeaturedProjects />} />
            
            <PageSchema id="tech-stack" content={<TechStackTable />} />
            
            <PageSchema id="about" content={<AboutCard />} />
        </div>
     );
}

export default HomePage;