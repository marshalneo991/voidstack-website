import { motion } from 'framer-motion';

export default function ServiceCard({ icon: Icon, title, description, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
            className="p-8 rounded-2xl bg-gray-900/30 border border-gray-800 hover:border-primary/50 transition-colors duration-300 group relative overflow-hidden h-full"
        >
            {/* Background Icon Decoration */}
            <div className="absolute -top-6 -right-6 p-4 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 rotate-12">
                <Icon size={120} />
            </div>

            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-inner">
                <Icon size={28} />
            </div>

            <h3 className="text-xl font-bold mb-3 font-orbitron group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
                {description}
            </p>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-purple-600 group-hover:w-full transition-all duration-500" />
        </motion.div>
    );
}
