import Image from "next/image";

function TechStackCard({ imagePath, title, description, level }) {
    return (
        <div className="w-full flex gap-4 bg-[#0a1024] p-4 rounded-xl items-center hover:-translate-y-1 transition-transform duration-300 shadow-md">
            <div className="bg-main-purple-soft p-2 rounded-lg flex-shrink-0 flex items-center justify-center w-14 h-14">
                <Image
                    src={`/images/tech_stack/${imagePath}`}
                    alt={`${title} logo`}
                    width={40}
                    height={40}
                    className="object-contain"
                />
            </div>
            <div className="flex flex-col w-full">
                <div className="flex justify-between items-center min-w-full mb-1">
                    <h2 className="font-bold text-white text-lg">{title}</h2>

                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className={`h-2 w-2 rounded-full ${i < level ? 'bg-main-cyan' : 'bg-gray-700'}`}
                            />
                        ))}
                    </div>
                </div>

                <p className="text-sm leading-tight text-gray-400">{description}</p>
            </div>
        </div>
    );
}

export default TechStackCard;