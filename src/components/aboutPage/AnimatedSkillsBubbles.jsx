"use client"
import { useRef } from "react";
import { motion } from "framer-motion";

function SkillsList() {
  // Referencia al contenedor padre para que los elementos no se salgan
  const scrollRef = useRef(null);

  const skills = [
    "Web development", "Backend Projects", "FrontEnd Projects",
    "Android Development", "Relational Database", "OOP",
    "Unity Simulations", "Data Processing"
  ];

  return (
    <div 
      ref={scrollRef} 
      className="grid grid-cols-3 gap-4 p-8  rounded-xl min-h-[300px] w-full border-2 border-dashed border-gray-200"
    >
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          // Habilitamos el arrastre en cualquier dirección
          drag
          // Limitamos el arrastre al área del div padre
          dragConstraints={scrollRef}
          // Evita que el objeto rebote al sueltarlo si no queremos inercia
          dragMomentum={false}
          // Estilos visuales
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, cursor: "grabbing" }}
          className="
            bg-main-sky-blue text-sm md:text-base
            w-fit h-fit rounded-full px-4 py-2 
            shadow-sm cursor-grab select-none
            flex items-center justify-center
            active:shadow-lg transition-shadow
          "
        >
          {skill}
        </motion.div>
      ))}
    </div>
  );
}
export default SkillsList;