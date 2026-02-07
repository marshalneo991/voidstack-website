import MaintenanceSection from '../sections/MaintenanceSection';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { useTranslation } from '../context/LanguageContext';

export default function Maintenance() {
    const { t } = useTranslation();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <SEO
                title={t('meta.maintenance.title')}
                description={t('meta.maintenance.description')}
                name="VoidStack"
                type="website"
            />
            <MaintenanceSection />
        </motion.div>
    );
}
