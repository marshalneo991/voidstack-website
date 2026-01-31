import { useTranslation } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export default function LanguageSwitch() {
    const { language, toggleLanguage } = useTranslation();

    return (
        <button
            onClick={toggleLanguage}
            className="relative flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors font-orbitron text-xs font-semibold group"
        >
            <span
                className={`transition-all duration-300 ${language === 'en'
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-500'
                    : 'text-gray-400 group-hover:text-gray-200'}`}
            >
                EN
            </span>
            <div className="h-3 w-[1px] bg-gray-600" />
            <span
                className={`transition-all duration-300 ${language === 'de'
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-500'
                    : 'text-gray-400 group-hover:text-gray-200'}`}
            >
                DE
            </span>

            {/* Indicator Dot */}
            <motion.div
                layout
                initial={false}
                animate={{
                    x: language === 'en' ? -22 : 22,
                    opacity: 1
                }}
                className="absolute -bottom-1 left-1/2 w-1.5 h-1.5 bg-gradient-to-r from-primary to-pink-500 rounded-full shadow-[0_0_10px_rgba(138,43,226,0.6)]"
            />
        </button>
    );
}
