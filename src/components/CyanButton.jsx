import Link from "next/link";
function CyanButton({text, path}) {
    return ( 
        <Link href={path} className="bg-main-cyan p-4 rounded-full cursor-pointer text-main-purple
        hover:text-white">
            <button className="cursor-pointer">
                {text}
            </button>
        </Link>
     );
}

export default CyanButton;