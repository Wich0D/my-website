import PageSchema from "../../components/PageSchema";
import TechStackTable from "../../components/tech_stack/TechStackTable";
import UnderConstruction from "../../components/UnderConstruction";
function SkillsPage() {
    return ( 
        <PageSchema pageId={2} content={(
            <TechStackTable/>
        )}/>

     );
}

export default SkillsPage;