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
        <section className="flex flex-col gap-4 items-center w-full">
            <SectionTitle text="My Tech Stack" />
            <div className="flex flex-col bg-main-purple-soft border-main-bg border-2 md:border-3 min-h-[500px] rounded-xl w-full max-w-[800px] overflow-hidden shadow-2xl">
 
                <ul className="flex flex-nowrap bg-main-bg p-4 gap-8 font-bold overflow-x-auto no-scrollbar border-b border-main-purple/20">
                    <li 
                        className={`cursor-pointer whitespace-nowrap transition-colors ${select === "opt1" ? "text-main-cyan" : "text-white hover:text-main-cyan/70"}`} 
                        onClick={() => setSelect("opt1")}
                    >
                        Languages
                    </li>
                    <li 
                        className={`cursor-pointer whitespace-nowrap transition-colors ${select === "opt2" ? "text-main-cyan" : "text-white hover:text-main-cyan/70"}`} 
                        onClick={() => setSelect("opt2")}
                    >
                        Frameworks & Libraries
                    </li>
                    <li 
                        className={`cursor-pointer whitespace-nowrap transition-colors ${select === "opt3" ? "text-main-cyan" : "text-white hover:text-main-cyan/70"}`} 
                        onClick={() => setSelect("opt3")}
                    >
                        Tools & Softwares
                    </li>
                    <li 
                        className={`cursor-pointer whitespace-nowrap transition-colors ${select === "opt4" ? "text-main-cyan" : "text-white hover:text-main-cyan/70"}`} 
                        onClick={() => setSelect("opt4")}
                    >
                        Methodologies
                    </li>
                </ul>

                <div className="flex flex-col gap-3 p-2 md:p-4">
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
                            <p className="text-center mt-10 text-gray-400">Content coming soon...</p>
                        )
                    }
                </div>
            </div>
        </section>
    );
}

export default TechStackTable;