import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { motion } from 'framer-motion';
import { useTranslation } from '../context/LanguageContext';

export default function MaintenanceCard({ title, price, features, isPopular, delay = 0 }) {
    const { t } = useTranslation();

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className={`relative p-6 rounded-xl border transition-all ${isPopular ? 'border-primary bg-primary/5 shadow-[0_0_30px_rgba(138,43,226,0.15)]' : 'border-gray-800 bg-black/50 hover:bg-gray-900/50'}`}
        >
            {isPopular && (
                <div className="absolute -top-3 right-6 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider font-orbitron">
                    {t('common.popular')}
                </div>
            )}
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold font-orbitron">{title}</h3>
                <span className="text-2xl font-bold text-primary font-orbitron">{price} <span className="text-sm text-gray-500 font-normal">{t('common.month')}</span></span>
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
                <Button variant="outline" className="w-full text-sm py-2 font-orbitron">
                    {t('common.subscribe')}
                </Button>
            </Link>
        </motion.div>
    );
}
