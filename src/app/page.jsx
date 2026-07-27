import IntroductionCard from "../components/homePage/introduction_section/IntroductionCard";
import AboutCard from "../components/aboutPage/AboutCard";
import TechStackTable from "../components/tech_stack/TechStackTable";
import ProjectsCard from "../components/projectsPage/ProjectsCard";
import PageSchema from "../components/PageSchema";
import 'boxicons/css/boxicons.min.css';

function HomePage() {
    return ( 
        <div className="flex flex-col w-full">
            <PageSchema id="home" content={<IntroductionCard />} />
            
            <PageSchema id="about" className="bg-main-purple" content={<AboutCard />} />
            
            <PageSchema id="tech-stack" content={<TechStackTable />} />
            
            <PageSchema id="projects" className="bg-main-purple" content={<ProjectsCard />} />
        </div>
     );
}

export default HomePage;