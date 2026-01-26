"use client"
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";
import Link from "next/link";
import { APP_ROUTES } from "../utils/navigation";

function NavButton({pageId,left}) {
    const currentPage = Number(pageId)
    const classParams = "text-9xl cursor-pointer text-main-cyan hover:text-main-sky-blue"
    const nextPage = (currentPage != APP_ROUTES.length-1) ? currentPage + 1 : 0;
    const prevPage = (currentPage != 0) ? currentPage-1 : APP_ROUTES.length-1;

    if (left) {
        return ( 
            <Link href={APP_ROUTES[prevPage]}>
                <IoIosArrowDropleftCircle className={classParams}/>
            </Link> 
        );
        
    } else {
       return (  
            <Link href={APP_ROUTES[nextPage]}>
                <IoIosArrowDroprightCircle className={classParams}/>
            </Link>
       ); 
    }
    
}

export default NavButton;