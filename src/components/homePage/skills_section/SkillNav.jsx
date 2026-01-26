function SkillNavBox({title}) {
    return ( 
        <div className="flex justify-between items-center bg-main-bg  border-2 p-1 gap-4">
            <h2 className="text-xl font-semibold">{title}</h2>
            <i class='bx  bx-caret-right'></i> 
        </div>
     );
}

export default SkillNavBox;