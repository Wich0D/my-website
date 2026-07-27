import { skills_list } from "../../utils/skillsData";
import SectionTitle from "../SectionTitle";
import EducationBox from "./EducationBox";
import ExperienceCard from "./ExperienceCard";

function AboutCard() {
  const skills = skills_list;

  return (
    <section className="flex flex-col gap-10 items-center text-left md:text-justify px-4 md:px-8 py-4 text-[16px] md:text-[18px] w-full max-w-6xl mx-auto">
        
        <SectionTitle text="About me" size={5} />
        
        <div className="w-full text-center md:text-left md:px-4">
            <p className="leading-relaxed text-gray-300">
                Hi! I'm Luis David Hernández Consuelo, a <b className="font-bold text-main-cyan">Software Engineer </b> 
                dedicated to building <b className="font-bold text-main-cyan">scalable solutions </b> 
                and <b className="font-bold text-main-cyan">data-driven</b> applications. 
                I specialize in bridging the gap between robust software development
                and actionable data analysis to solve complex technical challenges.
            </p>
        </div>

        <div className="w-full">
            <EducationBox/>  
        </div>

        <div className="text-center w-full mt-8">
            <SectionTitle text="My Skills" size={5} />
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center w-full">
            {skills.map((skill, index) => (
                <li
                    key={index}
                    title={skill.desc} 
                    className="bg-[#132042] text-white rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-default shadow-md"
                >
                    <span className="font-bold block mb-2 text-xl text-white">
                        {skill.name}
                    </span>
                    <p className="text-sm text-gray-400 font-normal leading-relaxed">
                        {skill.desc}
                    </p>
                </li>
            ))}
        </ol>

        <div className="text-center w-full mt-10">
            <SectionTitle text="My Experience" size={5} />
        </div>

        <div className="w-full">
            <ExperienceCard 
                imageFileName={"indava_logo.png"}
                altTextImage={"Indava logo"}
                title={"Data Analyst"}
                institution={"Indava"}
                period={"Apr 2025 - Jan 2026"}
                activities={["Data Extraction","Data Cleaning","Data analysis","Python scripts","Transformers Agents","APIRest","QA"]}
            />
        </div>
    </section>
  );
}

export default AboutCard;