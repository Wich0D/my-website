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
            <div className="flex flex-col md:flex-row items-center justify-center w-full mt-3 gap-3 md:gap-0.5">
                
                <div className={textOrientation}>
                    
                    <div className="flex gap-0.5 md:gap-4 justify-between md:justify-start">
                        <h3 className={`text-[20px] font-bold max-w-1/2`}>{instituteTitle}</h3>
                        <span className="flex text-sm rounded-full bg-main-cyan p-1.5 text-main-purple font-bold items-center h-fit">
                            <p>{period}</p>
                        </span>
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