import PricingSection from '../sections/PricingSection';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

export default function Pricing() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <SEO
                title="Pricing & Packages | VoidStack"
                description="Transparent pricing for our web development and digital services."
                name="VoidStack"
                type="website"
            />
            <PricingSection />
        </motion.div>
    );
}
