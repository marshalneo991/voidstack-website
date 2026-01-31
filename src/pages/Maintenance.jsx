import MaintenanceSection from '../sections/MaintenanceSection';
import { motion } from 'framer-motion';

export default function Maintenance() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <MaintenanceSection />
        </motion.div>
    );
}
