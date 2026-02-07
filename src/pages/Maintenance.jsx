import MaintenanceSection from '../sections/MaintenanceSection';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

export default function Maintenance() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <SEO
                title="Maintenance Services | VoidStack"
                description="Keep your website secure and up-to-date with our maintenance packages."
                name="VoidStack"
                type="website"
            />
            <MaintenanceSection />
        </motion.div>
    );
}
