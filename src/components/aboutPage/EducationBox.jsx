import Image from "next/image";
import EducationCard from "./EducationCard";

function EducationBox() {
    return ( 
        <section className="flex flex-col gap-8 w-full mt-8">
            <div className="w-full text-center">
                <h2 className="text-3xl font-bold mb-8">My college education</h2>
                <div className="flex flex-col md:flex-row items-start justify-center w-full bg-[#132042] rounded-2xl p-6 shadow-lg hover:-translate-y-1 transition-all duration-300 gap-6">
                    <div className="w-full flex flex-col text-left">
                        <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-between items-start md:items-center border-b border-gray-700 pb-4 mb-4">
                            <h3 className="text-[20px] font-bold text-white">UPIICSA - Software Engineering</h3>
                            <span className="flex text-sm rounded-full bg-[#1f305b] px-3 py-1 text-main-cyan font-bold items-center whitespace-nowrap">
                                <p>Aug. 2021 - Jan. 2026</p>
                            </span>
                        </div>
                        <p className="text-gray-300 leading-relaxed text-left">
                            I have built a solid foundation in the full software development life cycle, 
                            database management, and systems analysis. My training emphasizes interdisciplinary problem-solving, 
                            combining technical coding skills with an understanding of organizational processes to deliver scalable 
                            and efficient technological solutions.
                        </p>
                    </div>
                    <div className="flex-shrink-0 flex items-center justify-center w-full md:w-auto mt-4 md:mt-0 order-first md:order-last">
                        <Image
                            src="/images/education/upiicsa_logo.png" 
                            alt="UPIICSA" 
                            width={120}
                            height={120}
                            className="rounded-2xl object-cover" 
                        /> 
                    </div>
                </div>
            </div>
            
            <div className="w-full text-center mt-6">
                <h2 className="text-3xl font-bold mb-8">My supplementary Education</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <EducationCard
                        imageFileName={"oracle-one.png"}
                        altTextImage={"oracle one logo"}
                        instituteTitle={"Oracle Next Education - Backend Gen 6"}
                        period={"Jan. 2024 - Jul. 2024"}
                        description={"I mastered Java and Spring Boot, focusing on building RESTful APIs, implementing Object-Relational Mapping (ORM) with JPA/Hibernate, and managing relational databases. The program also emphasized Agile methodologies and professional soft skills for collaborative software environments."}
                    />
                    <EducationCard
                        imageFileName={"tripleten_logo.png"}
                        altTextImage={"tripleten logo"}
                        instituteTitle={"Tripleten Data Science Bootcamp"}
                        period={"Jan. 2026 - Currently"}
                        description={"An intensive Data Science bootcamp at TripleTen, focusing on Exploratory Data Analysis (EDA), Machine Learning, and Statistical Analysis using Python."}
                    />
                </div>
            </div>
        </section>
        
     );
}

export default EducationBox;