import HeroSection from '../sections/HeroSection';
import PortfolioSection from '../sections/PortfolioSection';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { useTranslation } from '../context/LanguageContext';

export default function Home() {
    const { t } = useTranslation();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <SEO
                title={t('meta.home.title')}
                description={t('meta.home.description')}
                name="VoidStack"
                type="website"
            />
            <HeroSection />
            <PortfolioSection />
        </motion.div>
    );
}
