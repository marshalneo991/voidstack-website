import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { motion } from 'framer-motion';

export default function MaintenanceCard({ title, price, features, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className="p-6 rounded-xl border border-gray-800 bg-black/50 hover:bg-gray-900/50 transition-colors"
        >
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">{title}</h3>
                <span className="text-2xl font-bold text-primary">{price} <span className="text-sm text-gray-500 font-normal">/month</span></span>
            </div>

            <ul className="space-y-2 mb-6">
                {features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                        <Check size={16} className="text-primary" />
                        {feature}
                    </li>
                ))}
            </ul>

            <Link to="/contact" className="w-full">
                <Button variant="outline" className="w-full text-sm py-2">
                    Subscribe
                </Button>
            </Link>
        </motion.div>
    );
}
