"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function RoleSelector({ selected, setSelected }) {
    const roles = ["Software Engineer", "Data Analyst", "Others"];

    return (
        <div className="flex flex-col items-center w-full mb-8">
            <p className="text-gray-300 text-lg mb-4 font-medium">Which profile would you like to explore?</p>
            <div className="flex bg-[#132042] rounded-full p-2 w-full max-w-2xl mx-auto relative shadow-lg">
                {roles.map((role) => (
                    <button
                        key={role}
                        onClick={() => setSelected(role)}
                        className={`relative flex-1 py-3 px-2 md:px-4 text-sm md:text-base font-bold rounded-full transition-colors z-10 ${
                            selected === role ? "text-[#1f305b]" : "text-white hover:text-main-cyan"
                        }`}
                    >
                        {selected === role && (
                            <motion.div
                                layoutId="active-role"
                                className="absolute inset-0 bg-main-cyan rounded-full -z-10"
                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            />
                        )}
                        <span className="relative z-10">{role}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
