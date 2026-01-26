import PageSchema from "../../components/PageSchema";
import UnderConstruction from "../../components/UnderConstruction";
function ProjectsPage() {
    return ( 
        <PageSchema pageId={2} content={(
            <UnderConstruction/>
        )}/>

     );
}

export default ProjectsPage;