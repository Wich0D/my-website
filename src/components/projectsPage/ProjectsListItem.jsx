import { MdPlayArrow } from "react-icons/md";

function ProjectsListItem({ title, onClick, isSelected,index }) {
    return ( 
        <li 
            onClick={onClick} 
            className={`flex items-center gap-2 p-2 border-b-white border-b-2 justify-between cursor-pointer transition-colors ${
                isSelected ? " text-main-cyan" : "hover:text-main-cyan"
            }`}
        >
            <div>
                <p className="font-bold text-left md:hidden">{index}</p>
                <p className="font-bold text-left hidden md:block">{title}</p>
            </div>
            
            <MdPlayArrow className={`w-[30px] ${isSelected ? "opacity-100" : "opacity-30"}`}/>
        </li>
    );
}

export default ProjectsListItem;