import { skills_list } from "../../utils/skillsData";
import SectionTitle from "../SectionTitle";
import EducationBox from "./EducationBox";
import ExperienceCard from "./ExperienceCard";

function AboutCard() {
  const skills = skills_list;

  return (

    <section className="flex flex-col gap-6 items-center text-left md:text-justify p-0 md:p-4 text-[16px] md:text-[18px] w-full">
        
        <SectionTitle text="About me" size={5} />
        
        <p className="leading-relaxed">
            Hi! I'm Luis David Hernández Consuelo, a <b className="font-bold text-main-cyan">Software Engineer </b> 
            dedicated to building <b className="font-bold text-main-cyan">scalable solutions </b> 
            and <b className="font-bold text-main-cyan">data-driven</b> applications. 
            I specialize in bridging the gap between robust software development
            and actionable data analysis to solve complex technical challenges.
        </p>

        <div className="w-full">
            <EducationBox/>  
        </div>

        <div className="text-left w-full border-t-2 border-main-cyan/30 pt-6 mt-4">
            <SectionTitle text="My Skills" />
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center w-full">
            {skills.map((skill, index) => (
                <li
                    key={index}
                    title={skill.desc} 
                    className="bg-main-cyan text-main-purple rounded-xl p-4 border border-transparent 
                               hover:bg-white hover:scale-[1.02] transition-all cursor-default shadow-lg"
                >
                    <span className="font-bold block mb-1 text-lg">
                        {skill.name}
                    </span>
                    <p className="text-sm opacity-90 font-normal leading-tight">
                        {skill.desc}
                    </p>
                </li>
            ))}
        </ol>

        <div className="text-left w-full mt-8">
            <SectionTitle text="My Experience" />
        </div>

        <div className="w-full">
            <ExperienceCard 
                imageFileName={"indava_logo.png"}
                altTextImage={"Indava logo"}
                title={"Data Analyst"}
                institution={"Indava"}
                period={"Apr 2025 - Jan.2026"}
                activities={["Data Extraction","Data Cleaning","Data analysis","Python scripts","Transformers Agents","APIRest","QA"]}
            />
        </div>
    </section>
  );
}

export default AboutCard;