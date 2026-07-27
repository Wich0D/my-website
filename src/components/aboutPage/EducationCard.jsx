import { div } from "framer-motion/client";
import Image from "next/image";
function EducationCard(
    {   imageFileName,
        instituteTitle,
        period, 
        description, 
        altTextImage }
) {
    return ( 
        <div className="w-full h-full">
            <div className="flex flex-col items-center justify-start w-full h-full bg-[#132042] rounded-2xl p-5 md:p-6 shadow-lg hover:-translate-y-1 transition-all duration-300 gap-4">
                
                <div className="flex-shrink-0 flex items-center justify-center w-full mb-2">
                    <Image
                        src={`/images/education/${imageFileName}`} 
                        alt={altTextImage} 
                        width={160}
                        height={160}
                        className="rounded-xl object-contain drop-shadow-md"
                        /> 
                </div>

                <div className={`w-full flex flex-col flex-grow`}>
                    
                    <div className={`flex flex-col gap-2 justify-start items-start border-b border-gray-700 pb-3 mb-3`}>
                        <h3 className="text-xl font-bold text-white text-left leading-tight">{instituteTitle}</h3>
                        <span className="flex text-xs rounded-full bg-[#1f305b] px-3 py-1 text-main-cyan font-bold items-center whitespace-nowrap">
                            <p>{period}</p>
                        </span>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-sm text-left">
                        {description}</p>
                </div>
                
            </div>
        </div>
        
     );
}

export default EducationCard;