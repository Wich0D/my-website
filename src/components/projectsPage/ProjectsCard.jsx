"use client"
import { useState } from "react";
import { project_list } from "../../utils/projectsData";
import SectionTitle from "../SectionTitle";
import ProjectsListItem from "./ProjectsListItem";
import ProjectSummary from "./ProjectSummary";

function ProjectsCard() {
    const projects = project_list;
    const [selectedIndex, setSelectedIndex] = useState(0);

    const currentProject = projects[selectedIndex];

    return ( 
        <section className="flex flex-col gap-4 items-center text-justify p-0 text-[18px] w-full ">
            <SectionTitle text="My Projects" size={5} />
            <div className="grid grid-cols-5 border-4 border-main-bg rounded-2xl overflow-hidden">
                <ul className="bg-main-bg col-span-1 pb-1.5">
                    {
                        projects.map((project, index) => (
                            <ProjectsListItem 
                                key={index} 
                                index={index+1}
                                title={project.title} 
                                isSelected={selectedIndex === index}
                                onClick={() => setSelectedIndex(index)} 
                            />
                        ))   
                    }
                </ul>
                <div className="col-span-4" >
                    <ProjectSummary
                        title={currentProject.title}
                        description={currentProject.description}
                        technologies={currentProject.technologies}
                        images={currentProject.images}
                        src={currentProject.src}
                        access={currentProject.src_access}
                        role={currentProject.role}
                    /> 
                </div>
            </div>
        </section>
    );
}

export default ProjectsCard;