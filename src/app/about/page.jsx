import AboutCard from "../../components/aboutPage/AboutCard";
import PageSchema from "../../components/PageSchema";

function AboutPage() {
    return ( 
        <PageSchema pageId={1} content={(
            <AboutCard/>
        )}/>
     );
}

export default AboutPage;