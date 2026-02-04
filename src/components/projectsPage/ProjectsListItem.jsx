import { MdPlayArrow } from "react-icons/md";

function ProjectsListItem({ title, onClick, isSelected }) {
    return ( 
        <li 
            onClick={onClick} 
            className={`flex items-center gap-2 p-2 border-b-white border-b-2 justify-between cursor-pointer transition-colors ${
                isSelected ? " text-main-cyan" : "hover:text-main-cyan"
            }`}
        >
            <p className="font-bold text-left">{title}</p>
            <MdPlayArrow className={`w-[30px] ${isSelected ? "opacity-100" : "opacity-30"}`}/>
        </li>
    );
}

export default ProjectsListItem;