import { useTranslation } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export default function LanguageSwitch() {
    const { language, toggleLanguage } = useTranslation();

    return (
        <button
            onClick={toggleLanguage}
            className="relative flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors font-orbitron text-xs font-semibold group ml-4"
        >
            <motion.span
                animate={{ color: language === 'en' ? '#8A2BE2' : '#9ca3af' }}
                className="transition-colors"
            >
                EN
            </motion.span>
            <div className="h-3 w-[1px] bg-gray-600" />
            <motion.span
                animate={{ color: language === 'de' ? '#8A2BE2' : '#9ca3af' }}
                className="transition-colors"
            >
                DE
            </motion.span>

            {/* Indicator Dot */}
            <motion.div
                layout
                initial={false}
                animate={{
                    x: language === 'en' ? -22 : 22,
                    opacity: 1
                }}
                className="absolute -bottom-1 left-1/2 w-1 h-1 bg-primary rounded-full"
            />
        </button>
    );
}
