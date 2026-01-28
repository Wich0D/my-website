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
        <div className="flex gap-4 w-full">
            <Image
                src={`/images/experience/${imageFileName}`} 
                alt={altTextImage} 
                width={150}
                height={150}
                className="rounded-3xl"
            /> 
            <div className="w-full ">
                <div className="border-b-2 flex justify-between">
                    <h3 className={`text-2xl font-bold  `}>{title}</h3>
                    <p className="font-bold">{institution}</p>
                </div>
                <div className="flex justify-between w-full">
                    <p className="font-bold">Activities</p>
                    <span className="text-sm">{period}</span>
                </div>
                <ul className="text-sm list-disc pl-4 grid grid-cols-4"> 
                    {
                        activities.map(act => (
                            <li>{act}</li>
                        ))
                    }
                </ul>
                
            </div>
        </div>
     );
}

export default ExperienceCard;