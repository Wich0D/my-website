"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import roles from "../../../data/roles.json";

export default function AnimatedTitle() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 2500); // Cambia cada 2.5 segundos
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center text-center font-bold mb-8 mt-4 w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-2">Welcome to my Website!</h1>

            <div className="flex flex-row items-center justify-center gap-2 md:gap-3 mb-4 w-full">
                <h2 className="text-3xl md:text-4xl lg:text-5xl">I'm Luis,</h2>

                {/* Contenedor con altura y anchura fija para evitar saltos de línea al animar */}
                <div className="h-[40px] md:h-[50px] lg:h-[60px] w-[280px] md:w-[350px] lg:w-[450px] overflow-hidden relative flex items-center justify-start">
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={index}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -50, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="text-3xl md:text-4xl lg:text-5xl text-main-cyan absolute whitespace-nowrap text-left"
                        >
                            {roles[index]}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
