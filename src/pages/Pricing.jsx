import PricingSection from '../sections/PricingSection';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { useTranslation } from '../context/LanguageContext';

export default function Pricing() {
    const { t } = useTranslation();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <SEO
                title={t('meta.pricing.title')}
                description={t('meta.pricing.description')}
                name="VoidStack"
                type="website"
            />
            <PricingSection />
        </motion.div>
    );
}
