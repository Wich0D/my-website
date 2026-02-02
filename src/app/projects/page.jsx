import PageSchema from "../../components/PageSchema";
import ProjectsCard from "../../components/projectsPage/ProjectsCard";
function ProjectsPage() {
    return ( 
        <PageSchema pageId={3} content={(
            <ProjectsCard/>
        )}/>

     );
}

export default ProjectsPage;