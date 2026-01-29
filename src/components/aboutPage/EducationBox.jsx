import Image from "next/image";
import SectionTitle from "../SectionTitle";
import EducationCard from "./EducationCard";

function EducationBox() {
    return ( 
        <section className="flex flex-col gap-3">
            <div className="border-b-3 mt">
                <h2 className={`text-3xl flex-1 font-bold mb-5 text-right`}>My college education</h2>
                <div className="flex justify-center gap-0.5 mb-10">
                <Image
                    src="/images/education/upiicsa_logo.png" 
                    alt="UPIICSA" 
                    width={150}
                    height={150}
                    className="" /> 
                <div className="text-right ">
                    
                    <div className="flex gap-2.5">
                        <h3 className={`text-[20px] flex-1 font-bold `}>UPIICSA - Software Engineering</h3>
                        <span className="text-sm rounded-full bg-main-cyan p-1.5 text-main-purple font-bold">Aug. 2021 - Jan. 2026</span>
                    </div>
                    <p className="text-right mt-2.5">
                        I have built a solid foundation in the full software development life cycle, 
                        database management, and systems analysis. My training emphasizes interdisciplinary problem-solving, 
                        combining technical coding skills with an understanding of organizational processes to deliver scalable 
                        and efficient technological solutions.</p>
                </div>
                </div>
            </div>
            
            <EducationCard
                imageFileName={"oracle-one.png"}
                altTextImage={"oracle one logo"}
                boxTitle={"My supplementary Education"}
                instituteTitle={"Oracle Next Education - Backend Gen 6"}
                period={"Jan. 2024 - Jul. 2024"}
                description={" I mastered Java and Spring Boot, focusing on building RESTful APIs, implementing Object-Relational Mapping (ORM) with JPA/Hibernate, and managing relational databases. The program also emphasized Agile methodologies and professional soft skills for collaborative software environments."}
                textOrientation={"text-left"}
            />
            <EducationCard
                imageFileName={"tripleten_logo.png"}
                altTextImage={"tripleten logo"}
                instituteTitle={"Tripleten Data Science Bootcamp"}
                period={"Jan. 2026 - Currently"}
                description={"An intensive Data Science bootcamp at TripleTen, focusing on Exploratory Data Analysis (EDA), Machine Learning, and Statistical Analysis using Python."}
                textOrientation={"text-left"}
            />
        </section>
        
     );
}

export default EducationBox;