import SectionTitle from "../SectionTitle";
import EducationBox from "./EducationBox";

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
    <section className="flex flex-col gap-4 items-center text-justify p-4 text-[18px]">
        <SectionTitle text="About me" size={5} />
        <p>
            Hi! My name is Luis David Hernández Consuelo. I'm a{" "}
            <b className="font-bold text-main-cyan">Software Engineer</b> passionate
            about building scalable solutions and data-driven applications. I have
            experience in <b className="font-bold text-main-cyan">data analysis</b>{" "}
            and <b className="font-bold text-main-cyan">software development</b>.
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
    </section>
  );
}

export default AboutCard;