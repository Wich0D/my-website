import { div } from "framer-motion/client";
import Image from "next/image";
function EducationCard(
    {   imageFileName,
        boxTitle,
        instituteTitle,
        period, 
        description, 
        altTextImage,
        textOrientation}
) {
    return ( 
        <div>
            <h2 className={`text-3xl  font-bold mb-5`}>{boxTitle}</h2>
            <div className="flex justify-center w-full mt-3 gap-0.5">
                
                <div className={textOrientation}>
                    
                    <div className="flex gap-4">
                        <h3 className={`text-[20px] font-bold `}>{instituteTitle}</h3>
                        <span className="text-sm rounded-full bg-main-cyan p-1.5 text-main-purple font-bold">{period}</span>
                    </div>
                    <p className="text-left mt-2.5">
                        {description}</p>
                </div>
                <Image
                    src={`/images/education/${imageFileName}`} 
                    alt={altTextImage} 
                    width={150}
                    height={150}
                    className="rounded-3xl"
                     /> 
            </div>
        </div>
        
     );
}

export default EducationCard;