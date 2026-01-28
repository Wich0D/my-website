function SectionTitle({text,size="3"}) {
    const sizeClasses = {
        "1": "text-1xl",
        "2": "text-2xl",
        "3": "text-3xl",
        "4": "text-4xl",
        "5": "text-5xl",
        "6": "text-6xl",
        "7": "text-7xl",
        "8": "text-8xl",
        "9": "text-9xl",
    };
    const fontSize = sizeClasses[size] || "text-3xl";
    return ( 
        
        <h1 className={`${fontSize} flex-1 font-bold mb-5`}>{text}</h1>
     );
}

export default SectionTitle;