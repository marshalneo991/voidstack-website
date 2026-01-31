import { motion } from 'framer-motion';
import { cn } from '../utils/cn'; // Assuming we'll create a utility for class merging, or just use string templates if simple.

// Let's keep it simple for now without complex utils unless needed. 
// I'll implement a simple class joiner inline or just template literals.

export default function Button({ children, variant = 'primary', className, ...props }) {
    const baseStyles = "px-6 py-3 rounded-md font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary/50 relative overflow-hidden group";

    const variants = {
        primary: "bg-primary text-white hover:bg-opacity-90 shadow-[0_0_20px_rgba(138,43,226,0.5)] border border-primary",
        outline: "bg-transparent border border-primary text-primary hover:bg-primary hover:text-white",
        white: "bg-white text-black hover:bg-gray-200",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${className || ''}`}
            {...props}
        >
            <span className="relative z-10 flex items-center gap-2 justify-center">
                {children}
            </span>
            {variant === 'primary' && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}
        </motion.button>
    );
}
