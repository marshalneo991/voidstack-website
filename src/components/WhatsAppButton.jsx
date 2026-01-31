import { motion } from 'framer-motion';
import { useTranslation } from '../context/LanguageContext';

export default function WhatsAppButton() {
    const { t } = useTranslation();
    const phoneNumber = "387644281802";
    const message = encodeURIComponent(t('common.whatsappMessage'));
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-[100] w-14 h-14 rounded-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 flex items-center justify-center text-white shadow-[0_0_20px_rgba(138,43,226,0.5)] group"
            title="Chat on WhatsApp"
        >
            {/* Pulsing Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-primary/40 animate-ping group-hover:animate-none" />

            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-7 h-7 relative z-10"
            >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
        </motion.a>
    );
}
