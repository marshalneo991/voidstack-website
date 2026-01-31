import PricingSection from '../sections/PricingSection';
import { motion } from 'framer-motion';

export default function Pricing() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <PricingSection />
        </motion.div>
    );
}
