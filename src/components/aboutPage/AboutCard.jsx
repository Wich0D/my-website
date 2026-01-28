import SectionTitle from "../SectionTitle";
import EducationBox from "./EducationBox";
import ExperienceCard from "./ExperienceCard";

function AboutCard() {
  // Convertimos el objeto en un Array para poder usar .map()
  const skills = [
    { name: "Web development", desc: "Creation of modern, responsive, and user-centered web applications." },
    { name: "Backend Projects", desc: "Server architecture, API management, and robust business logic." },
    { name: "FrontEnd Projects", desc: "Development of interactive interfaces using modern frameworks such as React." },
    { name: "Android Development", desc: "Building native and functional mobile applications for the Android ecosystem." },
    { name: "Relational Database Management", desc: "Design, optimization, and administration of relational databases (SQL)." },
    { name: "Object Oriented Programming", desc: "Writing clean, reusable, and maintainable code." },
    { name: "Interactive Simulations with Unity", desc: "Development of interactive 3D/2D environments and high-performance simulations." },
    { name: "Data Processing", desc: "Extraction, transformation, and loading of large volumes of data (ETL)." }
  ];

  return (
    <section className="flex flex-col gap-4 items-center text-justify p-4 text-[18px] w-10/12 ">
        <SectionTitle text="About me" size={5} />
        <p>
            Hi! I'm Luis David Hernández Consuelo, a <b className="font-bold text-main-cyan">Software Engineer </b> 
            dedicated to building <b className="font-bold text-main-cyan">scalable solutions </b> 
             and <b className="font-bold text-main-cyan">data-driven</b> applications. 
            I specialize in bridging the gap between robust software development
            and actionable data analysis to solve complex technical challenges.
        </p>
        <EducationBox/>  
        <div className="text-left w-full border-t-3 pt-4">
            <SectionTitle text="My Skills" className="" />
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left justify-center w-full">
            {skills.map((skill, index) => (
            <li
                key={index}
                title={skill.desc} 
                className="bg-main-cyan text-main-purple rounded-xl p-3 border border-transparent hover:text-white "
            >
                <span className=" font-bold block mb-1 ">
                {skill.name}
                </span>
                <p className="text-sm text-gray-700 font-normal leading-tight">
                {skill.desc}
                </p>
            </li>
            ))}
        </ol>
        <div className="text-left w-full  mt-4">
            <SectionTitle text="My Experience" className="" />
        </div>
        <div className="w-full flex">
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