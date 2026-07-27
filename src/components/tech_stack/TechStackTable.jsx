"use client"
import { useState } from "react"; 
import { fram_and_libs, methodologies_list, programming_languages, tools_list } from "../../utils/techStackData";
import SectionTitle from "../SectionTitle";
import TechStackCard from "./TechStackCard";

function TechStackTable() {
    const [select, setSelect] = useState("opt1");

    let info = [];
    if (select === "opt1") info = programming_languages;
    if (select === "opt2") info = fram_and_libs;
    if (select === "opt3") info = tools_list;
    if (select === "opt4") info = methodologies_list;

    return ( 
        <section className="flex flex-col gap-4 items-center w-full px-4 md:px-8 py-4">
            <SectionTitle text="My Tech Stack" size={5} />
            <div className="flex flex-col bg-[#132042] rounded-2xl w-full max-w-5xl overflow-hidden shadow-lg mt-4">
 
                <ul className="flex flex-nowrap bg-[#0d152e] p-4 md:px-8 gap-8 font-medium overflow-x-auto no-scrollbar">
                    <li 
                        className={`cursor-pointer whitespace-nowrap transition-all duration-300 pb-1 border-b-2 ${select === "opt1" ? "text-main-cyan border-main-cyan" : "text-gray-400 border-transparent hover:text-white"}`} 
                        onClick={() => setSelect("opt1")}
                    >
                        Languages
                    </li>
                    <li 
                        className={`cursor-pointer whitespace-nowrap transition-all duration-300 pb-1 border-b-2 ${select === "opt2" ? "text-main-cyan border-main-cyan" : "text-gray-400 border-transparent hover:text-white"}`} 
                        onClick={() => setSelect("opt2")}
                    >
                        Frameworks & Libraries
                    </li>
                    <li 
                        className={`cursor-pointer whitespace-nowrap transition-all duration-300 pb-1 border-b-2 ${select === "opt3" ? "text-main-cyan border-main-cyan" : "text-gray-400 border-transparent hover:text-white"}`} 
                        onClick={() => setSelect("opt3")}
                    >
                        Tools & Softwares
                    </li>
                    <li 
                        className={`cursor-pointer whitespace-nowrap transition-all duration-300 pb-1 border-b-2 ${select === "opt4" ? "text-main-cyan border-main-cyan" : "text-gray-400 border-transparent hover:text-white"}`} 
                        onClick={() => setSelect("opt4")}
                    >
                        Methodologies
                    </li>
                </ul>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4 md:p-8 min-h-[400px] content-start">
                    {
                        info.length > 0 ? (
                            info.map((object, index) => (
                                <TechStackCard 
                                    key={index}
                                    imagePath={object.pathImage}
                                    title={object.title}
                                    description={object.description}
                                    level={object.level}
                                />
                            ))
                        ) : (
                            <div className="col-span-full flex justify-center items-center h-48">
                                <p className="text-gray-500">Content coming soon...</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
}

export default TechStackTable;