"use client"
import ImageSlider from "./ImageSlider";

function ProjectSummary({
    title, description,technologies,images, src, access,role
}) {
    let src_div;
if (access){
     src_div = (
        <div className="w-full">
                    <h3 className="font-bold">Resources:</h3>
                    {
                        src.map( (source,index) => (
                            <a key={index} href={source} className="text-left"  target="_blank"
                                rel="noopener noreferrer"><p>{source}</p></a>
                        ))
                    }
        </div>
    )    
}else{
    src_div = (<></>)
}

    return ( 
        <div className="flex flex-col gap-2.5 p-4 bg-main-purple-soft text-base min-h-full">
            <div className="flex justify-end"><span className="bg-main-bg rounded-full p-1 pl-2 pr-2">{role}</span></div>
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="">{description}</p>
            
            <div>
                {
                    (images.length === 0) ? <></> : <ImageSlider slides={images}/>
                }
                
            </div>
            <div className="bg-main-purple p-2 rounded-2xl">
                <h3 className="font-bold">Technologies:</h3>
                <ul className="grid grid-cols-4 pl-4 text-left gap-0.5">
                    {
                        technologies.map( technology => (
                            <li className="list-disc">{technology}</li>
                        ))
                    }
                </ul>
                {src_div}
                
            </div>
            
            
        </div>
     );
}

export default ProjectSummary;