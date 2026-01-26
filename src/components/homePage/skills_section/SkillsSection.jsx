import SkillNavBox from "./SkillNav";

function SkillsSection() {
    return ( 
        <section>
            <nav>
                <SkillNavBox title="Frontend"/>
                <SkillNavBox title="Backend"/>
                <SkillNavBox title="DevOps"/>
                <SkillNavBox title="Databases"/>
                <SkillNavBox title="Other Skills"/>
            </nav>
            <div>
                
            </div>
        </section>
     );
}

export default SkillsSection;