import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { motion } from 'framer-motion';
import { useTranslation } from '../context/LanguageContext';

export default function PricingCard({ title, price, features, isPopular, delay = 0 }) {
    const { t } = useTranslation();

    return (
        <motion.div
            className={`relative p-8 rounded-2xl border ${isPopular ? 'border-primary bg-gray-900/80 shadow-[0_0_40px_rgba(138,43,226,0.2)]' : 'border-gray-800 bg-gray-900/30'} flex flex-col h-full`}
        >
            {isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider font-orbitron">
                    {t('common.popular')}
                </div>
            )}

            <h3 className="text-lg font-medium text-gray-300 mb-2 font-orbitron">{title}</h3>
            <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-white font-orbitron">{price}</span>
                {price !== 'Custom' && <span className="text-gray-500">€</span>}
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
                {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                        <Check size={18} className="text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <Link to="/contact" className="w-full">
                <Button variant={isPopular ? 'primary' : 'outline'} className="w-full font-orbitron">
                    {t('common.choose')} {title}
                </Button>
            </Link>
        </motion.div>
    );
}
