import PageSchema from "../../components/PageSchema";
import UnderConstruction from "../../components/UnderConstruction";
function AboutPage() {
    return ( 
        <PageSchema pageId={1} content={(
            <UnderConstruction/>
        )}/>
     );
}

export default AboutPage;