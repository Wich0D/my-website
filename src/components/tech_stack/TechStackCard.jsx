import Image from "next/image";

function TechStackCard({ imagePath, title, description, level }) {
    return ( 
        <div className="w-full flex gap-2 border-b-main-purple border-b-2 pb-2 items-center">
            <Image 
                src={`/images/tech_stack/${imagePath}`}
                alt={`${title} logo`}
                width={50}
                height={50}
                className="rounded-lg max-h-[50px] object-contain"
            /> 
            <div className="flex flex-col w-full">
                <div className="flex justify-between items-center min-w-full">
                    <h2 className="font-bold ">{title}</h2>
                    
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <div 
                                key={i} 
                                className={`h-2 w-2 rounded-full ${i < level ? 'bg-main-cyan' : 'bg-white'}`}
                            />
                        ))}
                    </div>
                </div>
                
                <p className="text-sm leading-tight opacity-90">{description}</p>
            </div>
        </div>
     );
}

export default TechStackCard;