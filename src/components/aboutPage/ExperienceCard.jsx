import Image from "next/image";
function ExperienceCard({
    imageFileName,
    altTextImage,
    title,
    institution,
    period,
    activities,
}) {
    return ( 
        <div className="flex flex-col md:flex-row gap-6 w-full bg-[#132042] rounded-2xl p-6 md:p-8 shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="flex-shrink-0 flex items-start justify-center md:justify-start">
                <Image
                    src={`/images/experience/${imageFileName}`} 
                    alt={altTextImage} 
                    width={120}
                    height={120}
                    className="rounded-2xl object-cover"
                /> 
            </div>
            <div className="w-full flex flex-col">
                <div className="border-b border-gray-700 pb-4 mb-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                    <div>
                        <h3 className="text-2xl font-bold text-white">{title}</h3>
                        <p className="font-semibold text-lg text-gray-200">{institution}</p>
                    </div>
                    <span className="text-sm font-bold bg-[#1f305b] text-main-cyan px-3 py-1 rounded-full whitespace-nowrap">
                        {period}
                    </span>
                </div>
                <div>
                    <p className="font-bold text-white mb-3">Key Activities & Achievements</p>
                    <ul className="text-sm list-disc pl-5 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-gray-300"> 
                        {
                            activities.map((act, index) => (
                                <li key={index} className="leading-relaxed">{act}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
     );
}

export default ExperienceCard;