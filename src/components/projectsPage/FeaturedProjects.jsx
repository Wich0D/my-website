"use client";
import { useState, useEffect, useMemo } from "react";
import SectionTitle from "../SectionTitle";
import { project_list } from "../../utils/projectsData";
import Image from "next/image";
import { FaGithub, FaChevronDown, FaChevronUp, FaGlobe } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";
import RoleSelector from "../homePage/introduction_section/RoleSelector";

const ProjectCard = ({ project, index, expandedIndex, handleCardClick, hasExpanded, currentImageIndex, forceMinimize = false }) => {
    const isExpanded = expandedIndex === index;
    const isMinimized = (forceMinimize && !isExpanded) || (hasExpanded && !isExpanded);
    
    const imageSrc = isExpanded && project.images && project.images.length > 1 
        ? project.images[currentImageIndex] 
        : (project.images && project.images.length > 0 ? project.images[0] : null);

    return (
        <div 
            onClick={() => handleCardClick(index)}
            className={`bg-[#132042] rounded-2xl overflow-hidden flex cursor-pointer transition-all duration-700 ease-in-out shadow-lg group ${
                isExpanded 
                    ? "md:order-first md:col-span-2 lg:col-span-2 flex-col md:flex-row" 
                    : "flex-col hover:-translate-y-1 md:col-span-1 lg:col-span-1"
            }`}
        >
            {/* Image Container */}
            <div className={`relative overflow-hidden bg-[#0d152e] transition-all duration-700 flex-shrink-0 ${
                isExpanded 
                    ? "w-full md:w-1/2 h-64 md:h-auto min-h-[300px]" 
                    : "w-full h-48 md:h-56"
            }`}>
                <AnimatePresence>
                    {imageSrc ? (
                        <motion.div
                            key={imageSrc}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="absolute inset-0"
                        >
                            <Image 
                                src={imageSrc} 
                                alt={project.title}
                                fill
                                className={`object-cover ${
                                    isExpanded ? "opacity-100" : "opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                }`}
                            />
                        </motion.div>
                    ) : (
                        <div className="flex flex-col items-center justify-center w-full h-full text-gray-500 absolute inset-0 bg-[#0a1024]">
                            <FaGlobe size={64} className="opacity-20 mb-4" />
                            <span className="text-sm opacity-50">No preview available</span>
                        </div>
                    )}
                </AnimatePresence>
            </div>
            
            {/* Content */}
            <div className={`flex-col flex-grow ${
                isExpanded ? "p-8 md:p-10 justify-center w-full md:w-1/2" : "p-6"
            } ${isMinimized ? "pb-6" : ""}`}>
                
                <h3 className={`font-bold text-white mb-2 ${
                    isExpanded ? "text-2xl md:text-3xl lg:text-4xl" : "text-xl"
                }`}>
                    {project.title}
                </h3>
                
                {!isMinimized && (
                    <>
                        <p className={`text-gray-300 mb-6 ${
                            isExpanded ? "text-base md:text-lg" : "text-sm line-clamp-3"
                        }`}>
                            {project.description}
                        </p>
                        
                        <div className="mt-auto">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.slice(0, isExpanded ? project.technologies.length : 3).map((tech, i) => (
                                    <span key={i} className="text-xs font-bold text-main-cyan bg-[#1f305b] px-2 py-1 rounded-full">
                                        {tech}
                                    </span>
                                ))}
                                {!isExpanded && project.technologies.length > 3 && (
                                    <span className="text-xs font-bold text-gray-400 bg-[#1f305b] px-2 py-1 rounded-full">
                                        +{project.technologies.length - 3}
                                    </span>
                                )}
                            </div>
                            
                            <div className="flex gap-4">
                                {project.src_access && project.src && project.src.map((link, i) => {
                                    if (!link) return null;
                                    const isGithub = link.includes("github.com");
                                    return (
                                        <a key={i} href={link} target="_blank" rel="noopener noreferrer" 
                                            onClick={(e) => e.stopPropagation()}
                                            className="text-gray-400 hover:text-main-cyan transition-colors">
                                            {isGithub ? (
                                                <FaGithub size={isExpanded ? 26 : 22} />
                                            ) : (
                                                <CiGlobe size={isExpanded ? 26 : 22} />
                                            )}
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default function FeaturedProjects() {
    const [selectedRole, setSelectedRole] = useState("Software Engineer");
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    
    const [expandedRemainingIndex, setExpandedRemainingIndex] = useState(null);
    const [remainingImageIndex, setRemainingImageIndex] = useState(0);

    // Filter all projects for the selected role and sort by priority (1 is highest)
    const allRoleProjects = useMemo(() => {
        return project_list
            .filter((project) => project.roles?.includes(selectedRole))
            .sort((a, b) => (a.priority || 99) - (b.priority || 99));
    }, [selectedRole]);

    const featuredProjects = allRoleProjects.slice(0, 3); // Max 3 projects for the top section
    const remainingProjects = allRoleProjects.slice(3); // The rest of the projects

    // Reset expansions when role changes
    useEffect(() => {
        setExpandedIndex(null);
        setExpandedRemainingIndex(null);
        setShowMore(false);
    }, [selectedRole]);

    // Handle image cycling for the featured project
    useEffect(() => {
        if (expandedIndex === null) return;
        const project = featuredProjects[expandedIndex];
        if (!project || !project.images || project.images.length <= 1) return;

        const intervalId = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
        }, 3000); 

        return () => clearInterval(intervalId);
    }, [expandedIndex, featuredProjects]);

    // Handle image cycling for the remaining project
    useEffect(() => {
        if (expandedRemainingIndex === null) return;
        const project = remainingProjects[expandedRemainingIndex];
        if (!project || !project.images || project.images.length <= 1) return;

        const intervalId = setInterval(() => {
            setRemainingImageIndex((prev) => (prev + 1) % project.images.length);
        }, 3000); 

        return () => clearInterval(intervalId);
    }, [expandedRemainingIndex, remainingProjects]);

    const handleFeaturedCardClick = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(null);
        } else {
            setExpandedIndex(index);
            setCurrentImageIndex(0); 
        }
    };

    const handleRemainingCardClick = (index) => {
        if (expandedRemainingIndex === index) {
            setExpandedRemainingIndex(null);
        } else {
            setExpandedRemainingIndex(index);
            setRemainingImageIndex(0); 
        }
    };

    const hasExpandedFeatured = expandedIndex !== null;
    const hasExpandedRemaining = expandedRemainingIndex !== null;

    return (
        <section className="flex flex-col gap-8 items-center w-full px-4 md:px-8 py-4">
            <SectionTitle text="Featured Projects" size={5} />
            
            <div className="w-full flex justify-center mb-4">
                <RoleSelector selected={selectedRole} setSelected={setSelectedRole} />
            </div>
            
            {featuredProjects.length === 0 ? (
                <p className="text-gray-400">No projects found for this role yet.</p>
            ) : (
                <>
                    {/* Featured Projects Grid */}
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl ${hasExpandedFeatured ? "lg:grid-cols-2" : "lg:grid-cols-3"}`}>
                        {featuredProjects.map((project, index) => (
                            <ProjectCard 
                                key={index}
                                project={project}
                                index={index}
                                expandedIndex={expandedIndex}
                                handleCardClick={handleFeaturedCardClick}
                                hasExpanded={hasExpandedFeatured}
                                currentImageIndex={currentImageIndex}
                            />
                        ))}
                    </div>

                    {/* Show More Button */}
                    {remainingProjects.length > 0 && (
                        <div className="w-full flex justify-center mt-2">
                            <button 
                                onClick={() => setShowMore(!showMore)}
                                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-medium"
                            >
                                {showMore ? (
                                    <>Show less <FaChevronUp className="mt-1 text-sm" /></>
                                ) : (
                                    <>Show more <FaChevronDown className="mt-1 text-sm" /></>
                                )}
                            </button>
                        </div>
                    )}

                    {/* Remaining Projects Grid */}
                    <AnimatePresence>
                        {showMore && remainingProjects.length > 0 && (
                            <motion.div 
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="w-full overflow-hidden"
                            >
                                <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto pt-4 pb-8 ${hasExpandedRemaining ? "lg:grid-cols-2" : "lg:grid-cols-3"}`}>
                                    {remainingProjects.map((project, index) => (
                                        <ProjectCard 
                                            key={`remaining-${index}`}
                                            project={project}
                                            index={index}
                                            expandedIndex={expandedRemainingIndex}
                                            handleCardClick={handleRemainingCardClick}
                                            hasExpanded={hasExpandedRemaining}
                                            currentImageIndex={remainingImageIndex}
                                            forceMinimize={true} 
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </>
            )}
        </section>
    );
}
